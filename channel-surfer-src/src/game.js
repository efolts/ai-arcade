import * as THREE from "three";
import { stepEnemy } from "./ai.js";
import { createActors } from "./actors.js";
import { BOUNDS, PLAYER_SPAWN, createEnemies, createPickups } from "./level.js";
import {
  TUNING,
  applyEnemyHit,
  createRunState,
  applyPickup,
  beginShot,
  clamp,
  cycleChannel,
  damageAtRange,
  hurtPlayer,
  noteHit,
  pickupVisible,
  resolveShot,
  rewardForKill,
  spreadDirs,
  switchChannel,
  tickResources,
  tryMove,
  rayWorld,
  movementSpeed,
} from "./sim.js";
import { createViewmodel } from "./viewmodel.js";
import { createWorld } from "./world.js";

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
  renderer.toneMappingExposure = 1.14;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(72, 960 / 780, 0.08, 90);
  scene.add(camera);
  const fill = new THREE.PointLight(0xffe6c4, 14, 4.5, 2);
  fill.position.set(0.05, 0.02, -0.25);
  camera.add(fill);

  const world = createWorld(scene);
  const actors = createActors(scene);
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
      size: 0.085,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
    })
  );
  scene.add(sparksMesh);

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
  let pickups = [];
  let bolts = [];
  let sparks = [];
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

  function resetRun() {
    state = createRunState();
    enemies = createEnemies();
    pickups = createPickups();
    bolts = [];
    sparks = [];
    tracers = [];
    player = {
      x: PLAYER_SPAWN.x,
      y: PLAYER_SPAWN.y,
      z: PLAYER_SPAWN.z,
      yaw: PLAYER_SPAWN.yaw,
      pitch: 0,
      vx: 0,
      vz: 0,
    };
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
    present("LIVE");
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
      if (serialBanner) banner(LABEL[state.channel]);
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
    const tracerColor = begun.profile.kind === "hitscan" ? [0.45, 0.97, 1] : [0.82, 0.82, 0.82];
    let connected = false;
    recoil = Math.min(0.07, recoil + (begun.profile.kind === "spread" ? 0.05 : 0.014));
    viewmodel.fire(begun.profile.kind);
    audio.play(begun.profile.kind === "spread" ? "static" : "live");
    for (const dir of dirs) {
      const hit = resolveShot(origin, dir, begun.profile.range, enemies, world.colliders);
      const reach = Math.min(begun.profile.range, 22);
      const end = hit
        ? { x: hit.x, y: hit.y, z: hit.z }
        : { x: origin.x + dir.x * reach, y: origin.y + dir.y * reach, z: origin.z + dir.z * reach };
      if (!hit || hit.t > 0.45) tracers.push({ a: muzzle, b: end, color: tracerColor, life: 0.11 });
      if (!hit) continue;
      if (hit.kind === "world") {
        burst(hit.x, hit.y, hit.z, [0.75, 0.68, 0.55], 3);
        continue;
      }
      const index = enemies.findIndex((enemy) => enemy.id === hit.id);
      if (index < 0 || !enemies[index].alive) continue;
      const noted = noteHit(enemies[index], time);
      const amount = damageAtRange(begun.profile.damage, hit.t, begun.profile.range, begun.profile.falloff);
      const applied = applyEnemyHit(noted.enemy, { weak: hit.weak, damage: amount });
      applied.enemy.hurt = 0.1;
      enemies[index] = applied.enemy;
      connected = applied.dealt > 0;
      burst(hit.x, hit.y, hit.z, [0.96, 0.94, 0.9], 4);
      if (applied.killed) {
        const reward = rewardForKill(state, {
          distance: hit.t,
          channel: state.channel,
          burst: noted.burst,
        });
        state = reward.state;
        burst(hit.x, hit.y, hit.z, [1, 0.68, 0.25], 18);
        audio.play("death");
        banner(reward.aggressive ? "AGGRESSIVE +" + reward.amount : "SIGNAL +" + reward.amount);
      }
    }
    if (connected) audio.play("hit");
    if (tracers.length > TR) tracers.splice(0, tracers.length - TR);
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

    for (let i = 0; i < enemies.length; i++) {
      if (!enemies[i].alive) continue;
      const step = stepEnemy(enemies[i], dt, {
        channel: state.channel,
        player: { x: player.x, y: 1.2, z: player.z },
        colliders: world.colliders,
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
      world.colliders,
      state.channel,
      BOUNDS
    );
    player.x = moved.x;
    player.z = moved.z;

    if (arm > 0) arm -= dt;
    else if (input.fireDown) {
      if (state.channel === "DEAD_AIR") {
        if (!denyLatch) {
          denyLatch = true;
          audio.play("deny");
          viewmodel.fire("none");
        }
      } else {
        denyLatch = false;
        shoot();
      }
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
        world.colliders
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

    for (const pickup of pickups) {
      if (pickup.taken || !pickupVisible(pickup, state.channel)) continue;
      if (Math.hypot(player.x - pickup.x, player.z - pickup.z) > 1.15) continue;
      const got = applyPickup(state, pickup);
      if (!got.took) continue;
      state = got.state;
      pickup.taken = true;
      audio.play("pickup");
      banner(pickup.kind === "signal" ? "SIGNAL CACHE" : "AID KIT");
    }

    if (time > 0.45) queueTip("intro", "LIVE — precise cyan bolt. Keys 1–3, wheel, or Q.");
    if (Math.hypot(player.x, player.z) < 7.5 || time > 11) {
      queueTip("cloak", "A Tessera is cloaked in the fountain. STATIC reveals it and every visor seam.");
    }
    if (Math.hypot(player.x - 10.4, player.z) < 6.2 || time > 20) {
      queueTip("gate", "Striped shutter is DEAD AIR. You move faster and cannot fire.");
    }
    if (player.x > 12.1 && pickups.some((pickup) => pickup.cloaked && !pickup.taken)) {
      queueTip("cache", "Something in the alley is off-channel. STATIC reveals a signal cache.");
    }
    const living = enemies.filter((enemy) => enemy.alive);
    if (living.length === 1 && living[0].id === "alley") {
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
      mode = "dead";
      audio.play("ui");
      return;
    }
    if (living.length === 0) {
      clearDelay -= dt;
      if (clearDelay <= 0) {
        mode = "clear";
        rememberBest();
        audio.play("pickup");
      }
    } else {
      clearDelay = 0.6;
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
    viewmodel.update(dt, mode === "play" ? Math.hypot(player.vx, player.vz) : 0);
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
      resetRun();
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
      world.update(clock, state.channel);
      actors.sync(enemies, step, clock, state.channel);
      actors.syncBolts(bolts);
      paintFx(step);
      frameCamera(step);
      renderer.render(scene, camera);
    },
    hud() {
      const alive = enemies.filter((enemy) => enemy.alive).length;
      return {
        mode,
        health: state.health,
        signal: state.signal,
        channel: state.channel,
        enemies: alive,
        tip,
        banner: bannerText,
        bannerSerial,
        flash,
        hurt: state.hurtTimer,
        time,
        best,
        swaps,
        muted: audio.muted,
      };
    },
  };
}
