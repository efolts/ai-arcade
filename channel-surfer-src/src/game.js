import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { SSAOPass } from "three/addons/postprocessing/SSAOPass.js";
import { stepEnemy } from "./ai.js";
import { createActors } from "./actors.js";
import { damagePriest, priestAnswer, resolvePriestHit, riteBanner, tickPriest, PRIEST_TUNING, createPriest } from "./boss.js";
import { HIJACK_TUNING, aimHijack, applyRetune, tryHijack } from "./hijack.js";
import {
  BOUNDS,
  CHAPEL_ENTRY,
  HIJACK_SPAWNS,
  PLAYER_SPAWN,
  VEIL_CROSS_Z,
  activeColliders,
  createChapelEnemies,
  createEnemies,
  createPickups,
} from "./level.js";
import {
  TUNING,
  applyEnemyHit,
  createRunState,
  applyPickup,
  applyUpgrade,
  armPad,
  batteryMaxes,
  beginShot,
  clamp,
  cycleChannel,
  damageAtRange,
  grantSignal,
  grantXp,
  hurtPlayer,
  makeBatteryDrop,
  noteHit,
  offersFor,
  pickupLabel,
  pickupVisible,
  refillBatteries,
  refundBatteries,
  resolveShot,
  rewardForKill,
  shotProfile,
  segmentClear,
  spreadDirs,
  switchChannel,
  tickPads,
  tickResources,
  tryMove,
  tuningOf,
  rayWorld,
  movementSpeed,
  xpProgress,
} from "./sim.js";
import { createViewmodel } from "./viewmodel.js";
import { bakeAisleProbe, bakeCourtProbe, createWorld } from "./world.js";

const BEST_KEY = "channel-surfer-best";
const LABEL = { LIVE: "LIVE", STATIC: "STATIC", DEAD_AIR: "DEAD AIR" };
const SWITCH_SFX = { LIVE: "switch-live", STATIC: "switch-static", DEAD_AIR: "switch-dead" };

function mulberry32(seed) {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function damp(current, target, lambda, dt) {
  return current + (target - current) * (1 - Math.exp(-lambda * dt));
}

function aim(yaw, pitch) {
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const sy = Math.sin(yaw);
  const cy = Math.cos(yaw);
  const forward = { x: -sy * cp, y: sp, z: -cy * cp };
  const right = { x: cy, y: 0, z: -sy };
  const up = {
    x: right.y * forward.z - right.z * forward.y,
    y: right.z * forward.x - right.x * forward.z,
    z: right.x * forward.y - right.y * forward.x,
  };
  return { forward, right, up };
}

export function createGame(canvas, audio) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setSize(960, 780, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.012).texture;
  const aisleEnv = bakeAisleProbe(renderer, pmrem);
  const courtEnv = bakeCourtProbe(renderer, pmrem);
  pmrem.dispose();
  const camera = new THREE.PerspectiveCamera(72, 960 / 780, 0.08, 90);
  scene.add(camera);
  const fill = new THREE.PointLight(0xffe6c4, 14, 4.5, 2);
  fill.position.set(0.05, 0.02, -0.25);
  camera.add(fill);

  const world = createWorld(scene);
  const ssao = new SSAOPass(scene, camera, 480, 390, 8);
  ssao.kernelRadius = 0.18;
  ssao.minDistance = 0.001;
  ssao.maxDistance = 0.06;
  const actors = createActors(scene, world.textures, { aisle: aisleEnv, court: courtEnv });
  const viewmodel = createViewmodel(camera, world.textures);

  const SPARK_N = 72;
  const sparkPos = new Float32Array(SPARK_N * 3);
  const sparkCol = new Float32Array(SPARK_N * 3);
  const sparkGeo = new THREE.BufferGeometry();
  sparkGeo.setAttribute("position", new THREE.BufferAttribute(sparkPos, 3));
  sparkGeo.setAttribute("color", new THREE.BufferAttribute(sparkCol, 3));
  const sparksMesh = new THREE.Points(
    sparkGeo,
    new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
    })
  );
  scene.add(sparksMesh);

  const impactCanvas = document.createElement("canvas");
  impactCanvas.width = 64;
  impactCanvas.height = 64;
  const impactCtx = impactCanvas.getContext("2d");
  const impactGrad = impactCtx.createRadialGradient(32, 32, 1, 32, 32, 30);
  impactGrad.addColorStop(0, "rgba(255,255,255,1)");
  impactGrad.addColorStop(0.35, "rgba(255,214,150,0.75)");
  impactGrad.addColorStop(1, "rgba(255,160,60,0)");
  impactCtx.fillStyle = impactGrad;
  impactCtx.fillRect(0, 0, 64, 64);
  const impactTex = new THREE.CanvasTexture(impactCanvas);
  impactTex.colorSpace = THREE.SRGBColorSpace;
  const impactSprites = [];
  for (let i = 0; i < 12; i++) {
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: impactTex,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    sprite.visible = false;
    sprite.frustumCulled = false;
    scene.add(sprite);
    impactSprites.push(sprite);
  }

  const TR = 28;
  const tracerPos = new Float32Array(TR * 6);
  const tracerCol = new Float32Array(TR * 6);
  const tracerGeo = new THREE.BufferGeometry();
  tracerGeo.setAttribute("position", new THREE.BufferAttribute(tracerPos, 3));
  tracerGeo.setAttribute("color", new THREE.BufferAttribute(tracerCol, 3));
  scene.add(
    new THREE.LineSegments(
      tracerGeo,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.95 })
    )
  );

  let mode = "title";
  let state = null;
  let enemies = [];
  let priest = null;
  let pickups = [];
  let bolts = [];
  let levelReason = "level";
  let doorOpen = false;
  let diedInChapel = false;
  let choirSilenced = false;
  let wingDelay = 1.25;
  let retuneUntil = 0;
  let hijackCooldownUntil = 0;
  let hijackAimed = false;
  let prompt = "";
  let promptKind = "";
  let riteText = "";
  let sparks = [];
  let impacts = [];
  let tracers = [];
  let player = { x: 0, y: 1.58, z: 8, yaw: 0, pitch: 0, vx: 0, vz: 0 };
  let rng = mulberry32(1);
  let time = 0;
  let clock = 0;
  let swaps = 0;
  let arm = 0;
  let clearDelay = 0.55;
  let recoil = 0;
  let shake = 0;
  let flash = 0;
  let bannerText = "";
  let bannerT = 0;
  let bannerSerial = 0;
  let tip = "";
  let tipT = 0;
  const tipQueue = [];
  const tipsShown = new Set();
  let best = 0;
  let presented = "";
  let denyLatch = false;
  try {
    best = Number(localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    best = 0;
  }

  function burst(x, y, z, color, count) {
    for (let i = 0; i < count; i++) {
      sparks.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 4,
        vy: 0.6 + Math.random() * 2.4,
        vz: (Math.random() - 0.5) * 4,
        life: 0.22 + Math.random() * 0.22,
        color,
      });
    }
    if (sparks.length > SPARK_N) sparks.splice(0, sparks.length - SPARK_N);
    impacts.push({ x, y, z, life: 0.14, max: 0.14, color });
    if (impacts.length > impactSprites.length) impacts.shift();
  }

  function banner(text) {
    bannerText = text;
    bannerT = 0.95;
    bannerSerial += 1;
  }

  function queueTip(id, text) {
    if (tipsShown.has(id)) return;
    tipsShown.add(id);
    tipQueue.push(text);
  }

  function present(channel) {
    if (presented === channel) return;
    presented = channel;
    world.setChannel(channel);
    viewmodel.setChannel(channel);
    audio.setChannel(channel);
  }

  function liveColliders() {
    return activeColliders({ doorOpen, veilUp: !!(priest && priest.alive && priest.veilUp) });
  }

  function freshPlayer(spawn) {
    return {
      x: spawn.x,
      y: spawn.y,
      z: spawn.z,
      yaw: spawn.yaw || 0,
      pitch: 0,
      vx: 0,
      vz: 0,
    };
  }

  function resetRun() {
    state = createRunState();
    enemies = [...createEnemies(), ...createChapelEnemies()];
    priest = createPriest();
    pickups = createPickups();
    doorOpen = false;
    diedInChapel = false;
    choirSilenced = false;
    wingDelay = 1.25;
    retuneUntil = 0;
    hijackCooldownUntil = 0;
    hijackAimed = false;
    prompt = "";
    promptKind = "";
    riteText = "";
    bolts = [];
    sparks = [];
    impacts = [];
    tracers = [];
    player = freshPlayer(PLAYER_SPAWN);
    rng = mulberry32((Date.now() & 0xffff) + 3);
    time = 0;
    swaps = 0;
    arm = 0.2;
    clearDelay = 0.6;
    recoil = 0;
    shake = 0;
    flash = 0;
    denyLatch = false;
    bannerText = "";
    bannerT = 0;
    tip = "";
    tipT = 0;
    tipQueue.length = 0;
    tipsShown.clear();
    actors.reset(enemies);
    actors.resetPriest(priest);
    world.setDoor(false, true);
    world.setVeil(false, "LIVE");
    present("LIVE");
  }

  function retryChapel() {
    const kept = {
      level: state.level,
      xp: state.xp,
      pending: state.pending,
      mods: { ...(state.mods || {}) },
    };
    state = refillBatteries({ ...createRunState(), signal: 80, ...kept });
    enemies = [
      ...enemies.filter((enemy) => enemy.room !== "chapel"),
      ...createChapelEnemies().map((enemy) => ({ ...enemy, dormant: false })),
    ];
    priest = { ...createPriest(), active: true };
    const placed = createPickups();
    pickups = [...pickups.filter((pickup) => pickup.z > -14.5), ...placed.filter((pickup) => pickup.z < -14.5)];
    doorOpen = true;
    choirSilenced = false;
    wingDelay = 1.25;
    retuneUntil = 0;
    hijackCooldownUntil = 0;
    hijackAimed = false;
    prompt = "";
    promptKind = "";
    riteText = "";
    bolts = [];
    sparks = [];
    impacts = [];
    tracers = [];
    player = freshPlayer(CHAPEL_ENTRY);
    arm = 0.45;
    denyLatch = false;
    diedInChapel = false;
    flash = 0;
    shake = 0;
    recoil = 0;
    actors.reset(enemies);
    actors.resetPriest(priest);
    world.setDoor(true, true);
    world.setVeil(false, "LIVE");
    present("LIVE");
    banner("RADIO WING");
  }

  resetRun();

  function rememberBest() {
    if (!(time > 0)) return;
    if (best > 0 && time >= best) return;
    best = time;
    try {
      localStorage.setItem(BEST_KEY, String(best));
    } catch {
      /* ignore quota */
    }
  }

  function switchTo(next, serialBanner) {
    const result = switchChannel(state, next);
    if (result.result === "ok") {
      state = result.state;
      swaps += 1;
      flash = 0.45;
      if (serialBanner) banner(LABEL[state.channel] + " · " + shotProfile(state.channel, state).name);
      audio.play(SWITCH_SFX[state.channel]);
      present(state.channel);
    } else if (result.result === "denied") {
      banner("NO SIGNAL");
      audio.play("deny");
    }
  }

  function shoot() {
    const begun = beginShot(state);
    state = begun.state;
    if (!begun.fired) return;
    const { forward, right, up } = aim(player.yaw, player.pitch);
    const origin = { x: player.x, y: player.y, z: player.z };
    const dirs = spreadDirs(forward, right, up, begun.profile.pellets, begun.profile.spread, Math.random);
    const muzzle = {
      x: origin.x + forward.x * 0.42 + right.x * 0.14 - up.x * 0.1,
      y: origin.y + forward.y * 0.42 + right.y * 0.14 - up.y * 0.1,
      z: origin.z + forward.z * 0.42 + right.z * 0.14 - up.z * 0.1,
    };
    const retuned = time < retuneUntil;
    const ownColor =
      begun.profile.kind === "hitscan" ? [0.45, 0.97, 1] : begun.profile.kind === "phase" ? [0.74, 0.8, 0.84] : [0.9, 0.9, 0.9];
    const tracerColor = retuned ? [0.45, 0.97, 1] : ownColor;
    const cols = liveColliders();
    let connected = false;
    let riteBroken = false;
    recoil = Math.min(0.07, recoil + (begun.profile.kind === "spread" ? 0.05 : begun.profile.kind === "phase" ? 0.03 : 0.014));
    viewmodel.fire(begun.profile.kind);
    audio.play(begun.profile.kind === "spread" ? "static" : begun.profile.kind === "phase" ? "phase" : "live");
    for (const dir of dirs) {
      const hit = resolveShot(origin, dir, begun.profile.range, enemies, cols, { phase: begun.profile.phases });
      const priestHit = priest.alive ? resolvePriestHit(origin, dir, begun.profile.range, priest, state.channel) : null;
      const usePriest = !!(priestHit && (!hit || priestHit.t < hit.t));
      const chosen = usePriest ? priestHit : hit;
      const reach = Math.min(begun.profile.range, 22);
      const end = chosen
        ? { x: chosen.x, y: chosen.y, z: chosen.z }
        : { x: origin.x + dir.x * reach, y: origin.y + dir.y * reach, z: origin.z + dir.z * reach };
      if (!chosen || chosen.t > 0.45) tracers.push({ a: muzzle, b: end, color: tracerColor, life: 0.16 });
      if (usePriest) {
        const amount =
          damageAtRange(begun.profile.damage, priestHit.t, begun.profile.range, begun.profile.falloff) *
          (retuned ? HIJACK_TUNING.retuneMult : 1);
        const chipped = damagePriest(priest, amount);
        priest = chipped.priest;
        if (chipped.dealt > 0) connected = true;
        burst(priestHit.x, priestHit.y, priestHit.z, retuned ? [0.45, 0.97, 1] : [0.96, 0.94, 0.88], 5);
        if (!chipped.killed) {
          const answered = priestAnswer(priest, {
            channel: state.channel,
            weak: priestHit.weak,
            halo: priestHit.halo,
            crossed: false,
          });
          if (answered.broken) {
            noteBreak(answered);
            riteBroken = true;
          } else priest = answered.priest;
        }
        continue;
      }
      if (!hit) continue;
      if (hit.kind === "world") {
        burst(hit.x, hit.y, hit.z, [0.75, 0.68, 0.55], 6);
        continue;
      }
      const index = enemies.findIndex((enemy) => enemy.id === hit.id);
      if (index < 0 || !enemies[index].alive) continue;
      const noted = noteHit(enemies[index], time);
      const amount =
        damageAtRange(begun.profile.damage, hit.t, begun.profile.range, begun.profile.falloff) *
        (retuned ? HIJACK_TUNING.retuneMult : 1);
      const applied = applyEnemyHit(noted.enemy, { weak: hit.weak, damage: amount });
      applied.enemy.hurt = 0.1;
      enemies[index] = applied.enemy;
      connected = applied.dealt > 0;
      burst(hit.x, hit.y, hit.z, [0.96, 0.94, 0.9], 8);
      if (applied.killed) {
        const reward = rewardForKill(state, {
          distance: hit.t,
          channel: state.channel,
          burst: noted.burst,
        });
        state = reward.state;
        addXp(TUNING.xpKill);
        dropBattery(applied.enemy);
        burst(hit.x, hit.y, hit.z, [1, 0.68, 0.25], 18);
        audio.play("death");
        banner(reward.aggressive ? "AGGRESSIVE +" + reward.amount : "SIGNAL +" + reward.amount);
      }
    }
    if (connected && !riteBroken) audio.play("hit");
    if (tracers.length > TR) tracers.splice(0, tracers.length - TR);
  }

  function dropBattery(enemy) {
    const id = "drop-" + enemy.id;
    if (pickups.some((pickup) => pickup.id === id)) return;
    pickups.push(makeBatteryDrop(enemy));
  }

  function noteBreak(answered) {
    priest = answered.priest;
    if (!answered.broken) return;
    audio.play("rite-break");
    burst(priest.x, 2.15, priest.z, [0.96, 0.78, 0.32], 20);
    flash = Math.max(flash, 0.34);
    if (priest.alive) banner("RITE BROKEN");
    addXp(TUNING.xpRite);
  }

  function addXp(amount) {
    const gained = grantXp(state, amount);
    state = gained.state;
    if (gained.leveled > 0 && doorOpen) openLevelUp("level");
    else if (gained.leveled > 0) banner("LEVEL " + state.level);
    return gained;
  }

  function openLevelUp(reason) {
    if ((state.pending || 0) <= 0 || mode !== "play") return;
    levelReason = reason;
    mode = "levelup";
  }

  function priestBolt() {
    const ox = priest.x;
    const oy = 1.72;
    const oz = priest.z;
    const tx = player.x - ox + (rng() - 0.5) * 0.22;
    const ty = 1.15 - oy + (rng() - 0.5) * 0.12;
    const tz = player.z - oz + (rng() - 0.5) * 0.22;
    const len = Math.hypot(tx, ty, tz) || 1;
    const speed = PRIEST_TUNING.boltSpeed;
    return {
      x: ox,
      y: oy,
      z: oz,
      vx: (tx / len) * speed,
      vy: (ty / len) * speed,
      vz: (tz / len) * speed,
      damage: PRIEST_TUNING.boltDamage,
      life: 2.6,
    };
  }

  function simulate(dt, input) {
    const drained = tickResources(state, dt);
    state = drained.state;
    if (drained.forced) {
      banner("NO SIGNAL");
      audio.play("nosignal");
      flash = 0.55;
      present(state.channel);
    }

    if (input.channel) switchTo(input.channel, true);
    else if (input.cycle) {
      const steps = clamp(input.cycle, -3, 3);
      const dir = steps > 0 ? 1 : -1;
      for (let i = 0; i !== steps; i += dir) switchTo(cycleChannel(state.channel, dir), true);
    }

    player.yaw -= input.lookX * 0.00215;
    player.pitch = clamp(player.pitch - input.lookY * 0.00215, -1.35, 1.35);

    const courtLeft = enemies.some((enemy) => enemy.alive && enemy.room !== "chapel");
    let broke = false;
    if (!doorOpen && !courtLeft) {
      doorOpen = true;
      broke = true;
      state = refillBatteries(state);
      const cleared = grantXp(state, TUNING.xpCourt);
      state = cleared.state;
      banner("RADIO WING");
      audio.play("door");
      queueTip("wing", "North door is open. The radio wing is still on the air.");
    }
    if (doorOpen && (state.pending || 0) > 0 && mode === "play") {
      openLevelUp(broke ? "break" : "level");
      return;
    }
    if (doorOpen && player.z < -15.05) {
      for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].room === "chapel" && enemies[i].dormant) {
          enemies[i] = { ...enemies[i], dormant: false };
        }
      }
      if (!priest.active) {
        priest = { ...priest, active: true };
        queueTip("priest", "Three rites. LIVE the seam. STATIC the halo. DEAD AIR through the veil.");
      }
    }

    const horn = HIJACK_SPAWNS[0];
    const { forward } = aim(player.yaw, player.pitch);
    const blocked = !segmentClear(player.x, player.y, player.z, horn.x, horn.y, horn.z, liveColliders());
    const look = aimHijack({
      origin: { x: player.x, y: player.y, z: player.z },
      dir: forward,
      point: horn,
      maxDist: HIJACK_TUNING.maxDist,
      cone: HIJACK_TUNING.cone,
      blocked,
    });
    hijackAimed = look.aimed;
    const hot = time < retuneUntil;
    const cooling = hijackCooldownUntil > time;
    if (hijackAimed) prompt = hot ? "PA RETUNED" : cooling ? "PA RECHARGING" : "E  RETUNE PA";
    else prompt = hot ? "PA RETUNED" : "";
    promptKind = hot ? "hot" : hijackAimed && cooling ? "cool" : hijackAimed ? "ready" : "";
    if (input.use && hijackAimed) {
      const tried = tryHijack({ cooldownUntil: hijackCooldownUntil }, time, tuningOf(state).paCooldown);
      if (!tried.ok) audio.play("deny");
      else {
        hijackCooldownUntil = tried.cooldownUntil;
        retuneUntil = time + HIJACK_TUNING.retune;
        enemies = applyRetune(enemies, horn, HIJACK_TUNING.radius, HIJACK_TUNING.stun);
        const refund = refundBatteries(state);
        state = refund.state;
        addXp(TUNING.xpHijack);
        banner("PA RETUNE");
        audio.play("hijack");
        burst(horn.x, horn.y, horn.z, [0.45, 0.97, 1], 28);
        flash = Math.max(flash, 0.28);
        shake = Math.max(shake, 0.035);
        world.pulseHijack();
      }
    }
    if (doorOpen && Math.hypot(player.x - horn.x, player.z - horn.z) < 8) {
      queueTip("pa", "Aim at the wall horn and press E. It retunes Tessera nearby.");
    }

    const steppedPriest = tickPriest(priest, dt, { player: { x: player.x, z: player.z } });
    priest = steppedPriest.priest;
    for (const event of steppedPriest.events) {
      if (event.type === "announce") {
        banner(riteBanner(event.rite));
        audio.play("rite");
      } else if (event.type === "fail") {
        const hurt = hurtPlayer(state, event.damage);
        state = hurt.state;
        if (hurt.hit) {
          audio.play("rite-fail");
          shake = Math.max(shake, 0.045);
        }
        banner("RITE HOLDS");
      } else if (event.type === "shot" && bolts.length < 16) {
        bolts.push(priestBolt());
        audio.play("bolt");
      }
    }
    riteText = priest.alive && priest.phase === "rite" ? riteBanner(priest.rite) : "";

    const cols = liveColliders();
    for (let i = 0; i < enemies.length; i++) {
      if (!enemies[i].alive) continue;
      const step = stepEnemy(enemies[i], dt, {
        channel: state.channel,
        player: { x: player.x, y: 1.2, z: player.z },
        colliders: cols,
        allies: enemies,
        rng,
      });
      enemies[i] = step.enemy;
      if (step.shot && bolts.length < 16) {
        bolts.push(step.shot);
        audio.play("bolt");
      }
    }

    const speed = movementSpeed(state.channel);
    const fx = -Math.sin(player.yaw);
    const fz = -Math.cos(player.yaw);
    const rx = Math.cos(player.yaw);
    const rz = -Math.sin(player.yaw);
    let wishX = 0;
    let wishZ = 0;
    if (input.forward) {
      wishX += fx;
      wishZ += fz;
    }
    if (input.back) {
      wishX -= fx;
      wishZ -= fz;
    }
    if (input.right) {
      wishX += rx;
      wishZ += rz;
    }
    if (input.left) {
      wishX -= rx;
      wishZ -= rz;
    }
    const mag = Math.hypot(wishX, wishZ);
    if (mag > 0) {
      wishX = (wishX / mag) * speed;
      wishZ = (wishZ / mag) * speed;
    }
    player.vx = damp(player.vx, wishX, 12, dt);
    player.vz = damp(player.vz, wishZ, 12, dt);
    const moved = tryMove(
      player.x,
      player.z,
      player.vx * dt,
      player.vz * dt,
      TUNING.playerRadius,
      cols,
      state.channel,
      BOUNDS
    );
    player.x = moved.x;
    player.z = moved.z;

    if (
      priest.alive &&
      priest.phase === "rite" &&
      priest.rite === "veil" &&
      state.channel === "DEAD_AIR" &&
      player.z < VEIL_CROSS_Z
    ) {
      const answered = priestAnswer(priest, { channel: "DEAD_AIR", weak: false, halo: false, crossed: true });
      if (answered.broken) noteBreak(answered);
    }

    if (arm > 0) arm -= dt;
    else if (input.fireDown) {
      const ready = beginShot(state);
      if (!ready.fired && ready.reason === "dry") {
        if (!denyLatch) {
          denyLatch = true;
          audio.play("dry");
          viewmodel.fire("dry");
          banner("NO BATTERY");
        }
      } else if (ready.fired) {
        denyLatch = false;
        shoot();
      } else denyLatch = false;
    } else denyLatch = false;

    const nextBolts = [];
    for (const bolt of bolts) {
      const len = Math.hypot(bolt.vx, bolt.vy, bolt.vz) || 1;
      const dist = len * dt;
      const worldHit = rayWorld(
        bolt.x,
        bolt.y,
        bolt.z,
        bolt.vx / len,
        bolt.vy / len,
        bolt.vz / len,
        dist,
        liveColliders()
      );
      if (worldHit) {
        burst(worldHit.x, worldHit.y, worldHit.z, [1, 0.62, 0.22], 3);
        continue;
      }
      bolt.x += bolt.vx * dt;
      bolt.y += bolt.vy * dt;
      bolt.z += bolt.vz * dt;
      bolt.life -= dt;
      if (bolt.life <= 0 || bolt.y < 0 || bolt.y > 6) continue;
      const dx = bolt.x - player.x;
      const dz = bolt.z - player.z;
      if (dx * dx + dz * dz < 0.4 * 0.4 && bolt.y > 0.25 && bolt.y < 1.75) {
        const hurt = hurtPlayer(state, bolt.damage);
        state = hurt.state;
        if (hurt.hit) {
          audio.play("hurt");
          shake = 0.05;
          flash = Math.max(flash, 0.2);
        }
        burst(bolt.x, bolt.y, bolt.z, [1, 0.5, 0.18], 6);
        continue;
      }
      nextBolts.push(bolt);
    }
    bolts = nextBolts;

    pickups = tickPads(pickups, time);
    for (let i = 0; i < pickups.length; i++) {
      const pickup = pickups[i];
      if (pickup.taken || !pickupVisible(pickup, state.channel)) continue;
      if (Math.hypot(player.x - pickup.x, player.z - pickup.z) > 1.15) continue;
      const got = applyPickup(state, pickup);
      if (!got.took) continue;
      state = got.state;
      pickups[i] = armPad(pickup, time);
      audio.play("pickup");
      banner(pickupLabel(pickup, state.channel));
    }

    if (time > 0.45) queueTip("intro", "1 LIVE Clicker, 2 STATIC Scatter, 3 DEAD AIR Phaser. Each shot spends a battery.");
    if (pickups.some((pickup) => pickup.pad && Math.hypot(player.x - pickup.x, player.z - pickup.z) < 4.2)) {
      queueTip("pads", "Amber pads recharge. They feed the remote you are holding, then a little to the others.");
    }
    if (Math.hypot(player.x, player.z) < 7.5 || time > 11) {
      queueTip("cloak", "A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam.");
    }
    if (Math.hypot(player.x - 10.4, player.z) < 6.2 || time > 20) {
      queueTip("gate", "Striped shutter is DEAD AIR. The Phaser fires through it. Clicker and Scatter stop.");
    }
    if (player.x > 12.1 && pickups.some((pickup) => pickup.cloaked && !pickup.taken)) {
      queueTip("cache", "Something in the alley is off-channel. STATIC reveals a signal cache.");
    }
    const courtLiving = enemies.filter((enemy) => enemy.alive && enemy.room !== "chapel");
    if (courtLiving.length === 1 && courtLiving[0].id === "alley") {
      queueTip("last", "Last Tessera is in the east service alley. Phase the shutter or walk the north end.");
    }
    if (tipT > 0) {
      tipT -= dt;
      if (tipT <= 0) tip = "";
    } else if (tipQueue.length) {
      tip = tipQueue.shift();
      tipT = 6.2;
    }

    if (state.health <= 0) {
      diedInChapel = doorOpen;
      mode = "dead";
      audio.play("ui");
      return;
    }
    if (!priest.alive && doorOpen) {
      if (!choirSilenced) {
        choirSilenced = true;
        enemies = enemies.map((enemy) =>
          enemy.room === "chapel" && enemy.alive ? { ...enemy, alive: false, hittable: false } : enemy
        );
        state = refillBatteries(grantSignal(state, 40));
        const cleared = grantXp(state, TUNING.xpWing);
        state = cleared.state;
        banner("OFF THE AIR");
        audio.play("death");
        burst(priest.x, 2.1, priest.z, [0.96, 0.8, 0.38], 34);
        burst(priest.x, 2.75, priest.z, [0.9, 0.72, 0.28], 16);
        wingDelay = 1.25;
      }
      if ((state.pending || 0) > 0 && mode === "play") {
        openLevelUp("level");
        return;
      }
      wingDelay -= dt;
      if (wingDelay <= 0) {
        mode = "clear";
        rememberBest();
        audio.play("pickup");
      }
    } else {
      wingDelay = 1.25;
    }
  }

  function paintFx(dt) {
    for (let i = sparks.length - 1; i >= 0; i--) {
      const spark = sparks[i];
      spark.life -= dt;
      spark.vy -= 7 * dt;
      spark.x += spark.vx * dt;
      spark.y += spark.vy * dt;
      spark.z += spark.vz * dt;
      if (spark.life <= 0) sparks.splice(i, 1);
    }
    for (let i = 0; i < SPARK_N; i++) {
      const spark = sparks[i];
      const o = i * 3;
      if (!spark) {
        sparkPos[o + 1] = -40;
        sparkCol[o] = sparkCol[o + 1] = sparkCol[o + 2] = 0;
        continue;
      }
      sparkPos[o] = spark.x;
      sparkPos[o + 1] = spark.y;
      sparkPos[o + 2] = spark.z;
      const fade = clamp(spark.life * 3, 0, 1);
      sparkCol[o] = spark.color[0] * fade;
      sparkCol[o + 1] = spark.color[1] * fade;
      sparkCol[o + 2] = spark.color[2] * fade;
    }
    sparkGeo.attributes.position.needsUpdate = true;
    sparkGeo.attributes.color.needsUpdate = true;

    for (let i = impacts.length - 1; i >= 0; i--) {
      impacts[i].life -= dt;
      if (impacts[i].life <= 0) impacts.splice(i, 1);
    }
    for (let i = 0; i < impactSprites.length; i++) {
      const sprite = impactSprites[i];
      const impact = impacts[i];
      if (!impact) {
        sprite.visible = false;
        continue;
      }
      const k = impact.life / impact.max;
      sprite.visible = true;
      sprite.position.set(impact.x, impact.y, impact.z);
      sprite.scale.setScalar(0.18 + (1 - k) * 0.55);
      sprite.material.opacity = k;
      sprite.material.color.setRGB(impact.color[0], impact.color[1], impact.color[2]);
    }

    for (let i = tracers.length - 1; i >= 0; i--) {
      tracers[i].life -= dt;
      if (tracers[i].life <= 0) tracers.splice(i, 1);
    }
    for (let i = 0; i < TR; i++) {
      const tracer = tracers[i];
      const o = i * 6;
      if (!tracer) {
        tracerPos[o + 1] = -40;
        tracerPos[o + 4] = -40;
        continue;
      }
      tracerPos[o] = tracer.a.x;
      tracerPos[o + 1] = tracer.a.y;
      tracerPos[o + 2] = tracer.a.z;
      tracerPos[o + 3] = tracer.b.x;
      tracerPos[o + 4] = tracer.b.y;
      tracerPos[o + 5] = tracer.b.z;
      for (let k = 0; k < 2; k++) {
        tracerCol[o + k * 3] = tracer.color[0];
        tracerCol[o + k * 3 + 1] = tracer.color[1];
        tracerCol[o + k * 3 + 2] = tracer.color[2];
      }
    }
    tracerGeo.attributes.position.needsUpdate = true;
    tracerGeo.attributes.color.needsUpdate = true;
  }

  function frameCamera(dt) {
    if (mode === "title") {
      camera.position.set(Math.sin(clock * 0.16) * 0.5, 2.5, 9.3);
      camera.lookAt(0, 1.2, -1.4);
      viewmodel.setVisible(false);
      return;
    }
    viewmodel.setVisible(true);
    shake *= Math.exp(-9 * dt);
    recoil *= Math.exp(-11 * dt);
    camera.position.set(player.x + (Math.random() - 0.5) * shake, player.y, player.z + (Math.random() - 0.5) * shake);
    camera.rotation.order = "YXZ";
    camera.rotation.y = player.yaw;
    camera.rotation.x = player.pitch - recoil;
    camera.rotation.z = 0;
    const { right } = aim(player.yaw, 0);
    const strafe = mode === "play" ? player.vx * right.x + player.vz * right.z : 0;
    viewmodel.update(dt, mode === "play" ? Math.hypot(player.vx, player.vz) : 0, { strafe });
  }

  return {
    get mode() {
      return mode;
    },
    start() {
      resetRun();
      mode = "play";
      audio.play("ui");
    },
    resume() {
      if (mode === "pause") mode = "play";
    },
    pause() {
      if (mode === "play") mode = "pause";
    },
    replay() {
      if (diedInChapel) retryChapel();
      else resetRun();
      mode = "play";
      audio.play("ui");
    },
    toTitle() {
      resetRun();
      mode = "title";
    },
    update(dt, input) {
      const step = Math.min(0.05, Math.max(0, dt) || 0);
      clock += step;
      if (mode === "play") {
        time += step;
        simulate(step, input);
      }
      if (bannerT > 0) {
        bannerT -= step;
        if (bannerT <= 0) bannerText = "";
      }
      flash = Math.max(0, flash - step * 3.2);
      present(mode === "title" ? "LIVE" : state.channel);
      const cache = pickups.find((pickup) => pickup.cloaked);
      const aid = pickups.find((pickup) => pickup.kind === "health");
      world.setPickup("cache", !!(cache && !cache.taken && state.channel === "STATIC" && mode !== "title"));
      world.setPickup("aid", !!(aid && !aid.taken));
      world.syncCells(pickups, mode === "play" ? time : 0);
      world.setDoor(doorOpen);
      world.setVeil(!!(priest.alive && priest.veilUp), mode === "title" ? "LIVE" : state.channel);
      world.setHijack({
        aimed: mode === "play" && hijackAimed,
        hot: mode === "play" && time < retuneUntil,
      });
      world.update(clock, state.channel, player);
      actors.setProbeBlend(player.z);
      actors.sync(enemies, step, clock, state.channel);
      actors.syncPriest(priest, step, clock, mode === "title" ? "LIVE" : state.channel);
      actors.syncBolts(bolts);
      paintFx(step);
      frameCamera(step);
      const aoChannel = mode === "title" ? "LIVE" : state.channel;
      ssao.kernelRadius = aoChannel === "DEAD_AIR" ? 0.05 : 0.18;
      ssao.maxDistance = aoChannel === "DEAD_AIR" ? 0.02 : 0.06;
      renderer.render(scene, camera);
      renderer.shadowMap.autoUpdate = false;
      ssao.renderToScreen = true;
      ssao.render(renderer);
      renderer.shadowMap.autoUpdate = true;
      renderer.setRenderTarget(null);
    },
    chooseUpgrade(index) {
      if (mode !== "levelup") return false;
      const offers = offersFor(state);
      const pick = offers[index];
      if (!pick) return false;
      const applied = applyUpgrade(state, pick.id);
      if (!applied.applied) return false;
      state = applied.state;
      banner(pick.name);
      audio.play("pickup");
      if ((state.pending || 0) > 0 && offersFor(state).length) return true;
      state = { ...state, pending: 0 };
      mode = "play";
      return true;
    },
    hud() {
      const inWing = player.z < -14.85;
      const courtCount = enemies.filter((enemy) => enemy.alive && enemy.room !== "chapel").length;
      const wingCount =
        enemies.filter((enemy) => enemy.alive && enemy.room === "chapel").length + (priest.alive ? 1 : 0);
      const playing = mode === "play";
      const profile = shotProfile(state.channel, state);
      const offers = mode === "levelup" ? offersFor(state) : [];
      return {
        mode,
        health: state.health,
        signal: state.signal,
        channel: state.channel,
        remote: profile.name,
        ammo: state.batteries[state.channel],
        ammoMax: batteryMaxes(state)[state.channel],
        level: state.level || 1,
        xp: xpProgress(state),
        levelReason,
        offers: offers.map((offer) => ({ id: offer.id, name: offer.name, detail: offer.detail })),
        enemies: inWing ? wingCount : courtCount,
        roomLabel: inWing ? "RADIO" : "COURT",
        countLabel: inWing ? "ON AIR" : "TESSERA",
        tip,
        banner: bannerText,
        bannerSerial,
        flash,
        hurt: state.hurtTimer,
        time,
        best,
        swaps,
        muted: audio.muted,
        prompt: playing ? prompt : "",
        promptKind: playing ? promptKind : "",
        rite: playing ? riteText : "",
        boss: inWing && priest.alive ? priest.hp / priest.maxHp : null,
        checkpoint: diedInChapel,
      };
    },
  };
}
