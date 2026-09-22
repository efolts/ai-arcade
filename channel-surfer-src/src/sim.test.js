import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { stepEnemy } from "./ai.js";
import {
  PRIEST_TUNING,
  createPriest,
  damagePriest,
  priestAnswer,
  resolvePriestHit,
  tickPriest,
} from "./boss.js";
import { HIJACK_CATALOG, HIJACK_TUNING, aimHijack, applyRetune, tryHijack } from "./hijack.js";
import {
  BLOCKS,
  BOUNDS,
  CHAPEL_ENEMIES,
  ENEMIES,
  HIJACK_SPAWNS,
  LEASHES,
  PHASE,
  PICKUPS,
  PLAYER_SPAWN,
  PRIEST_SPAWN,
  RESERVED_CONTENT,
  VEIL_CROSS_Z,
  activeColliders,
  courtColliders,
  createChapelEnemies,
  createEnemies,
} from "./level.js";
import {
  TUNING,
  applyEnemyHit,
  applyPickup,
  beginShot,
  canFire,
  channelFromCode,
  createRunState,
  cycleChannel,
  damageAtRange,
  grantHealth,
  grantSignal,
  hurtPlayer,
  noteHit,
  overlapsCircle,
  pickupVisible,
  resolveShot,
  rewardForKill,
  shotProfile,
  switchChannel,
  tickResources,
  tickReveal,
  tryMove,
} from "./sim.js";

const cols = courtColliders();

function walk(x, z, dx, dz, channel, steps) {
  for (let i = 0; i < steps; i++) {
    const m = tryMove(x, z, dx, dz, TUNING.playerRadius, cols, channel, BOUNDS);
    x = m.x;
    z = m.z;
  }
  return { x, z };
}

describe("channel select", () => {
  it("maps number keys and cycles both directions", () => {
    assert.equal(channelFromCode("Digit1"), "LIVE");
    assert.equal(channelFromCode("Digit2"), "STATIC");
    assert.equal(channelFromCode("Numpad3"), "DEAD_AIR");
    assert.equal(channelFromCode("KeyQ"), null);
    assert.equal(cycleChannel("LIVE", 1), "STATIC");
    assert.equal(cycleChannel("STATIC", 1), "DEAD_AIR");
    assert.equal(cycleChannel("DEAD_AIR", 1), "LIVE");
    assert.equal(cycleChannel("LIVE", -1), "DEAD_AIR");
    assert.equal(cycleChannel("DEAD_AIR", -1), "STATIC");
  });

  it("refuses drain channels when Signal is dry", () => {
    let state = createRunState();
    state = { ...state, signal: TUNING.minDrainSignal - 1 };
    const denied = switchChannel(state, "STATIC");
    assert.equal(denied.result, "denied");
    assert.equal(denied.state.channel, "LIVE");
    const ok = switchChannel(createRunState(), "DEAD_AIR");
    assert.equal(ok.result, "ok");
    assert.equal(ok.state.channel, "DEAD_AIR");
    assert.equal(switchChannel(ok.state, "DEAD_AIR").result, "same");
  });
});

describe("signal", () => {
  it("regenerates on LIVE and clamps", () => {
    let state = { ...createRunState(), signal: 90 };
    const ticked = tickResources(state, 2);
    assert.equal(ticked.forced, false);
    assert.equal(ticked.state.channel, "LIVE");
    assert.ok(Math.abs(ticked.state.signal - 100) < 1e-6);
  });

  it("drains STATIC slower than DEAD AIR", () => {
    const live = createRunState();
    const stat = tickResources(switchChannel(live, "STATIC").state, 1);
    const dead = tickResources(switchChannel(live, "DEAD_AIR").state, 1);
    assert.ok(Math.abs(stat.state.signal - (100 - TUNING.staticDrain)) < 1e-6);
    assert.ok(Math.abs(dead.state.signal - (100 - TUNING.deadDrain)) < 1e-6);
    assert.ok(dead.state.signal < stat.state.signal);
  });

  it("forces LIVE when a drain channel empties", () => {
    let state = switchChannel(createRunState(), "STATIC").state;
    state = { ...state, signal: 1 };
    const out = tickResources(state, 1);
    assert.equal(out.forced, true);
    assert.equal(out.state.channel, "LIVE");
    assert.equal(out.state.signal, 0);
  });

  it("pays more Signal for aggressive kills and clamps pickups", () => {
    const state = { ...createRunState(), signal: 20 };
    const clean = rewardForKill(state, { distance: 14, channel: "LIVE", burst: false });
    const close = rewardForKill(state, { distance: 3, channel: "LIVE", burst: false });
    const snow = rewardForKill(state, { distance: 12, channel: "STATIC", burst: false });
    const burst = rewardForKill(state, { distance: 12, channel: "LIVE", burst: true });
    assert.equal(clean.amount, TUNING.cleanKillSignal);
    assert.equal(clean.aggressive, false);
    assert.equal(close.amount, TUNING.aggressiveKillSignal);
    assert.equal(snow.aggressive, true);
    assert.equal(burst.aggressive, true);
    const full = grantSignal({ ...state, signal: 95 }, 40);
    assert.equal(full.signal, 100);
    const healed = grantHealth({ ...createRunState(), health: 90 }, 40);
    assert.equal(healed.health, 100);
  });
});

describe("weapons", () => {
  it("lets LIVE and STATIC fire and stops DEAD AIR", () => {
    const live = beginShot(createRunState());
    assert.equal(live.fired, true);
    assert.equal(live.profile.kind, "hitscan");
    assert.equal(live.profile.pellets, 1);
    assert.equal(canFire(live.state), false);
    const stat = beginShot(switchChannel(createRunState(), "STATIC").state);
    assert.equal(stat.profile.kind, "spread");
    assert.equal(stat.profile.pellets, TUNING.staticPellets);
    assert.ok(stat.profile.range < live.profile.range);
    const dead = beginShot(switchChannel(createRunState(), "DEAD_AIR").state);
    assert.equal(dead.fired, false);
    assert.equal(dead.profile.kind, "none");
  });

  it("keeps LIVE useful past STATIC range", () => {
    const at = 14;
    const live = damageAtRange(TUNING.liveDamage, at, TUNING.liveRange, TUNING.liveFalloff);
    const snow = damageAtRange(TUNING.staticPellet, at, TUNING.staticRange, TUNING.staticFalloff);
    assert.ok(live > 15);
    assert.equal(snow, 0);
  });

  it("multiplies visor hits only when the seam is exposed", () => {
    const enemy = { ...createEnemies().find((e) => e.id === "north-l"), exposed: false, hittable: true };
    const body = applyEnemyHit(enemy, { weak: true, damage: 10 });
    assert.equal(body.dealt, 10);
    const open = applyEnemyHit({ ...enemy, exposed: true }, { weak: true, damage: 10 });
    assert.ok(Math.abs(open.dealt - 10 * TUNING.weakMult) < 1e-6);
    const hidden = applyEnemyHit({ ...enemy, cloaked: true, hittable: false }, { weak: false, damage: 10 });
    assert.equal(hidden.dealt, 0);
  });

  it("reveals the cloak on STATIC and lets the reveal linger", () => {
    let ghost = createEnemies().find((e) => e.id === "fountain");
    assert.equal(ghost.hittable, false);
    ghost = tickReveal(ghost, 0.1, "STATIC");
    assert.equal(ghost.visible, true);
    assert.equal(ghost.exposed, true);
    assert.equal(ghost.hittable, true);
    ghost = tickReveal(ghost, 0.2, "LIVE");
    assert.equal(ghost.visible, true);
    assert.ok(ghost.reveal < TUNING.revealDuration);
    ghost = { ...ghost, reveal: 0.05 };
    ghost = tickReveal(ghost, 0.1, "LIVE");
    assert.equal(ghost.visible, false);
    assert.equal(ghost.hittable, false);
  });

  it("marks a burst when hits land inside the window", () => {
    const enemy = createEnemies()[0];
    const first = noteHit(enemy, 3);
    assert.equal(first.burst, false);
    const second = noteHit(first.enemy, 3.2);
    assert.equal(second.burst, true);
    const late = noteHit(first.enemy, 3 + TUNING.burstWindow + 0.05);
    assert.equal(late.burst, false);
  });

  it("stops shots on walls and ignores a cloaked body", () => {
    const enemies = createEnemies();
    const origin = { x: PLAYER_SPAWN.x, y: 1.5, z: PLAYER_SPAWN.z };
    const toFountain = {
      x: 0,
      y: 0,
      z: -1,
    };
    const hidden = resolveShot(origin, toFountain, 40, enemies, cols);
    assert.notEqual(hidden && hidden.id, "fountain");
    const revealed = enemies.map((e) => (e.cloaked ? { ...e, hittable: true, exposed: true, visible: true } : e));
    const seen = resolveShot(origin, { x: 0, y: 0, z: -1 }, 40, revealed, cols);
    assert.equal(seen.kind, "enemy");
    assert.equal(seen.id, "fountain");
    const intoSouth = resolveShot({ x: 0, y: 1.4, z: 10 }, { x: 0, y: 0, z: 1 }, 30, [], cols);
    assert.equal(intoSouth.kind, "world");
    assert.equal(intoSouth.id, "wall-s");
  });
});

describe("court layout", () => {
  it("ships the two-room slice with phase-3 art and no later bosses", () => {
    assert.equal(PHASE, 3);
    assert.equal(ENEMIES.filter((e) => e.cloak).length, 1);
    assert.equal(ENEMIES.find((e) => e.cloak).id, "fountain");
    assert.equal(PICKUPS.filter((p) => p.cloaked).length, 1);
    const gates = BLOCKS.filter((b) => b.phaseGate);
    assert.equal(gates.length, 2);
    assert.equal(BLOCKS.find((b) => b.id === "phase-gate").veil, undefined);
    assert.equal(BLOCKS.find((b) => b.id === "rite-veil").veil, true);
    assert.deepEqual(
      courtColliders()
        .filter((c) => c.phaseGate)
        .map((c) => c.id),
      ["phase-gate"]
    );
    const reserved = new Set(RESERVED_CONTENT.map((item) => item.id));
    assert.equal(reserved.has("directory"), true);
    assert.equal(reserved.has("arsenal"), true);
    assert.equal(reserved.has("upgrades"), true);
    assert.equal(reserved.has("wings"), true);
    assert.equal(reserved.has("broadcast-echo"), true);
    assert.equal(reserved.has("visor-priest"), false);
    for (const enemy of [...ENEMIES, ...CHAPEL_ENEMIES]) assert.equal(reserved.has(enemy.id), false);
    assert.ok(LEASHES.alley);
    assert.equal(PICKUPS.find((p) => p.cloaked).kind, "signal");
  });

  it("spawns the player and every Tessera in open floor", () => {
    const player = overlapsCircle(PLAYER_SPAWN.x, PLAYER_SPAWN.z, TUNING.playerRadius, cols, "LIVE");
    assert.equal(player, null);
    for (const e of createEnemies()) {
      const hit = overlapsCircle(e.x, e.z, 0.42, cols, "LIVE");
      assert.equal(hit, null, e.id);
    }
  });

  it("blocks LIVE on the shutter and lets DEAD AIR through", () => {
    const live = walk(10.15, 0, 0.2, 0, "LIVE", 30);
    assert.ok(live.x < 11, `live x ${live.x}`);
    const dead = walk(10.15, 0, 0.2, 0, "DEAD_AIR", 40);
    assert.ok(dead.x > 12.6, `dead x ${dead.x}`);
  });

  it("still has a long way into the alley without phasing", () => {
    const around = walk(9.4, -10.2, 0.25, 0, "LIVE", 40);
    assert.ok(around.x > 12.4, `around x ${around.x}`);
  });

  it("lets the player step into the fountain basin", () => {
    const inside = walk(0, 4.2, 0, -0.25, "LIVE", 24);
    assert.ok(inside.z < 0.8, `z ${inside.z}`);
    assert.ok(inside.z > -1.7, `z ${inside.z}`);
  });

  it("shows the cache only on STATIC and keeps full health kits on the floor", () => {
    const cache = PICKUPS.find((p) => p.cloaked);
    const kit = PICKUPS.find((p) => p.kind === "health");
    assert.equal(pickupVisible(cache, "LIVE"), false);
    assert.equal(pickupVisible(cache, "DEAD_AIR"), false);
    assert.equal(pickupVisible(cache, "STATIC"), true);
    assert.equal(pickupVisible(kit, "LIVE"), true);
    const full = applyPickup(createRunState(), kit);
    assert.equal(full.took, false);
    const hurt = applyPickup({ ...createRunState(), health: 40 }, kit);
    assert.equal(hurt.took, true);
    assert.equal(hurt.state.health, 76);
    const gained = applyPickup({ ...createRunState(), signal: 10 }, cache);
    assert.equal(gained.state.signal, 58);
    assert.equal(gained.pickup.taken, true);
  });
});

describe("tessera", () => {
  it("does not shoot or chase while the fountain cloak holds", () => {
    const ghost = createEnemies().find((e) => e.id === "fountain");
    const rng = () => 0.5;
    let enemy = { ...ghost, cooldown: 0, windup: 0 };
    for (let i = 0; i < 20; i++) {
      const step = stepEnemy(enemy, 0.1, {
        channel: "LIVE",
        player: { x: 0, y: 1.2, z: 6, forceAggro: true },
        colliders: cols,
        allies: [],
        rng,
      });
      enemy = step.enemy;
      assert.equal(step.shot, null);
    }
    assert.ok(Math.hypot(enemy.x, enemy.z) < 0.2);
  });

  it("winds up and fires once STATIC opens the cloak", () => {
    let enemy = createEnemies().find((e) => e.id === "fountain");
    enemy = { ...enemy, cooldown: 0, windup: 0 };
    const rng = () => 0.2;
    const ctx = {
      channel: "STATIC",
      player: { x: 0, y: 1.2, z: 6 },
      colliders: cols,
      allies: [],
      rng,
    };
    let shot = null;
    for (let i = 0; i < 12 && !shot; i++) {
      const step = stepEnemy(enemy, 0.1, ctx);
      enemy = step.enemy;
      shot = step.shot;
    }
    assert.ok(enemy.visible);
    assert.ok(shot);
    assert.equal(shot.damage, TUNING.boltDamage);
    assert.ok(shot.vz > 0);
  });

  it("keeps the alley Tessera behind the shutter", () => {
    let enemy = createEnemies().find((e) => e.id === "alley");
    const rng = () => 0.4;
    for (let i = 0; i < 40; i++) {
      const step = stepEnemy(enemy, 0.16, {
        channel: "LIVE",
        player: { x: 0, y: 1.2, z: 0, forceAggro: true },
        colliders: cols,
        allies: [],
        rng,
      });
      enemy = step.enemy;
    }
    assert.ok(enemy.x > LEASHES.alley.minX);
    assert.ok(enemy.z > LEASHES.alley.minZ - 0.01);
  });
});

describe("radio wing", () => {
  it("keeps the north door shut until the court is cleared", () => {
    const closed = walk(0, -12.2, 0, -0.22, "LIVE", 24);
    assert.ok(closed.z > -14.05, `closed z ${closed.z}`);
    let x = 0;
    let z = -12.2;
    const openCols = activeColliders({ doorOpen: true });
    for (let i = 0; i < 24; i++) {
      const moved = tryMove(x, z, 0, -0.22, TUNING.playerRadius, openCols, "LIVE", BOUNDS);
      x = moved.x;
      z = moved.z;
    }
    assert.ok(z < -16.4, `open z ${z}`);
  });

  it("lets DEAD AIR through the rite veil and stops LIVE", () => {
    const veilCols = activeColliders({ doorOpen: true, veilUp: true });
    let live = { x: 0, z: -22.2 };
    let dead = { x: 0, z: -22.2 };
    for (let i = 0; i < 28; i++) {
      live = tryMove(live.x, live.z, 0, -0.22, TUNING.playerRadius, veilCols, "LIVE", BOUNDS);
      dead = tryMove(dead.x, dead.z, 0, -0.22, TUNING.playerRadius, veilCols, "DEAD_AIR", BOUNDS);
    }
    assert.ok(live.z > -23.9, `live z ${live.z}`);
    assert.ok(dead.z < VEIL_CROSS_Z, `dead z ${dead.z}`);
    assert.ok(dead.z > -28.2, `dead z ${dead.z}`);
  });

  it("spawns the choir and the priest on open floor", () => {
    const open = activeColliders({ doorOpen: true, veilUp: false });
    for (const enemy of createChapelEnemies()) {
      assert.equal(overlapsCircle(enemy.x, enemy.z, 0.42, open, "LIVE"), null, enemy.id);
      assert.equal(enemy.dormant, true);
      assert.equal(enemy.room, "chapel");
    }
    assert.equal(overlapsCircle(PRIEST_SPAWN.x, PRIEST_SPAWN.z, 0.5, open, "LIVE"), null);
    assert.equal(CHAPEL_ENEMIES.filter((enemy) => enemy.cloak).length, 1);
  });

  it("blocks a court shot on the closed radio door", () => {
    const choir = createChapelEnemies().map((enemy) => ({ ...enemy, hittable: true, cloaked: false, visible: true }));
    const hit = resolveShot({ x: 0, y: 1.5, z: -12 }, { x: 0, y: 0, z: -1 }, 30, choir, cols);
    assert.equal(hit.kind, "world");
    assert.equal(hit.id, "chapel-door");
  });
});

describe("pa horn", () => {
  it("keeps one playable hijack and reserves the rest", () => {
    assert.deepEqual(
      HIJACK_CATALOG.filter((item) => item.status === "playable").map((item) => item.id),
      ["pa-horn"]
    );
    assert.ok(HIJACK_CATALOG.filter((item) => item.status === "reserved").length >= 3);
    assert.equal(HIJACK_SPAWNS[0].id, "pa-horn");
  });

  it("aims only while looking at the horn and in range", () => {
    const point = HIJACK_SPAWNS[0];
    const origin = { x: 0, y: 1.6, z: -20 };
    const dx = point.x - origin.x;
    const dy = point.y - origin.y;
    const dz = point.z - origin.z;
    const len = Math.hypot(dx, dy, dz);
    const aimed = aimHijack({
      origin,
      dir: { x: dx / len, y: dy / len, z: dz / len },
      point,
      maxDist: HIJACK_TUNING.maxDist,
      cone: HIJACK_TUNING.cone,
    });
    assert.equal(aimed.aimed, true);
    const away = aimHijack({
      origin,
      dir: { x: 0, y: 0, z: -1 },
      point,
      maxDist: HIJACK_TUNING.maxDist,
      cone: HIJACK_TUNING.cone,
    });
    assert.equal(away.aimed, false);
    const blocked = aimHijack({
      origin,
      dir: { x: dx / len, y: dy / len, z: dz / len },
      point,
      maxDist: HIJACK_TUNING.maxDist,
      cone: HIJACK_TUNING.cone,
      blocked: true,
    });
    assert.equal(blocked.aimed, false);
  });

  it("stuns the choir and then waits out the cooldown", () => {
    const point = HIJACK_SPAWNS[0];
    const stunned = applyRetune([...createEnemies(), ...createChapelEnemies()], point, HIJACK_TUNING.radius, HIJACK_TUNING.stun);
    assert.equal(stunned.find((enemy) => enemy.id === "north-l").stun, 0);
    assert.ok(stunned.find((enemy) => enemy.id === "choir-l").stun >= HIJACK_TUNING.stun);
    assert.ok(stunned.find((enemy) => enemy.id === "choir-ghost").stun >= HIJACK_TUNING.stun);
    const first = tryHijack({ cooldownUntil: 0 }, 10);
    assert.equal(first.ok, true);
    const early = tryHijack({ cooldownUntil: first.cooldownUntil }, 12);
    assert.equal(early.ok, false);
    const later = tryHijack({ cooldownUntil: first.cooldownUntil }, first.cooldownUntil + 0.01);
    assert.equal(later.ok, true);
  });
});

describe("visor priest", () => {
  const ctx = { player: { x: 0, z: -20 } };

  it("announces LIVE, then STATIC, then DEAD AIR", () => {
    let priest = { ...createPriest(), active: true };
    const rites = [];
    for (let i = 0; i < 3; i++) {
      priest.timer = 0.01;
      priest.phase = "idle";
      const step = tickPriest(priest, 0.05, ctx);
      assert.equal(step.events[0].type, "announce");
      rites.push(step.events[0].rite);
      const answer =
        step.priest.rite === "seam"
          ? { channel: "LIVE", weak: true, halo: false, crossed: false }
          : step.priest.rite === "choir"
            ? { channel: "STATIC", weak: false, halo: true, crossed: false }
            : { channel: "DEAD_AIR", weak: false, halo: false, crossed: true };
      const broken = priestAnswer(step.priest, answer);
      assert.equal(broken.broken, true);
      priest = broken.priest;
      priest.timer = 0.01;
      priest = tickPriest(priest, 0.05, ctx).priest;
      assert.equal(priest.phase, "idle");
    }
    assert.deepEqual(rites, ["seam", "choir", "veil"]);
    assert.equal(priest.alive, true);
    assert.ok(priest.hp > 0);
    assert.ok(priest.hp <= PRIEST_TUNING.hp - PRIEST_TUNING.breakDamage * 3);
  });

  it("rejects the wrong channel for each rite", () => {
    const seam = priestAnswer(
      { ...createPriest(), phase: "rite", rite: "seam", exposed: true },
      { channel: "STATIC", weak: true, halo: false, crossed: false }
    );
    assert.equal(seam.broken, false);
    assert.equal(seam.priest.hp, PRIEST_TUNING.hp);
    const choir = priestAnswer(
      { ...createPriest(), phase: "rite", rite: "choir", haloVisible: true },
      { channel: "LIVE", weak: true, halo: false, crossed: false }
    );
    assert.equal(choir.broken, false);
    const veil = priestAnswer(
      { ...createPriest(), phase: "rite", rite: "veil", veilUp: true },
      { channel: "DEAD_AIR", weak: false, halo: false, crossed: false }
    );
    assert.equal(veil.broken, false);
    const idle = priestAnswer(createPriest(), { channel: "LIVE", weak: true, halo: false, crossed: false });
    assert.equal(idle.broken, false);
  });

  it("chips on body shots and stays up through three rite breaks", () => {
    const priest = createPriest();
    const chip = damagePriest(priest, TUNING.liveDamage);
    assert.equal(chip.killed, false);
    assert.ok(chip.priest.hp > priest.hp - 12);
    assert.ok(chip.dealt < 8);
  });

  it("hits the halo only on STATIC during the choir rite", () => {
    const priest = {
      ...createPriest(),
      phase: "rite",
      rite: "choir",
      haloVisible: true,
      exposed: false,
    };
    const origin = { x: 0, y: 2.78, z: -20 };
    const dir = { x: 0, y: 0, z: -1 };
    const hidden = resolvePriestHit(origin, dir, 30, priest, "LIVE");
    assert.ok(!hidden || hidden.halo === false);
    const shown = resolvePriestHit(origin, dir, 30, priest, "STATIC");
    assert.equal(shown.halo, true);
    const body = resolvePriestHit({ x: 0, y: 1.2, z: -20 }, dir, 30, priest, "STATIC");
    assert.equal(body.weak, false);
    assert.equal(body.halo, false);
    const seam = {
      ...createPriest(),
      phase: "rite",
      rite: "seam",
      exposed: true,
    };
    const head = resolvePriestHit({ x: 0, y: 2.05, z: -20 }, dir, 30, seam, "LIVE");
    assert.equal(head.weak, true);
    assert.equal(priestAnswer(seam, { channel: "LIVE", weak: head.weak, halo: head.halo, crossed: false }).broken, true);
  });

  it("fails a rite for chip damage, not a one-shot, and telegraphs bolts", () => {
    let priest = { ...createPriest(), active: true, phase: "rite", rite: "seam", timer: 0.05, exposed: true };
    const failed = tickPriest(priest, 0.1, ctx);
    assert.equal(failed.events[0].type, "fail");
    assert.equal(failed.events[0].damage, PRIEST_TUNING.failDamage);
    assert.ok(failed.events[0].damage < 25);
    assert.equal(failed.priest.phase, "recover");
    assert.equal(failed.priest.veilUp, false);

    priest = { ...createPriest(), active: true, phase: "idle", timer: 10, shotCooldown: 0, windup: 0 };
    let step = tickPriest(priest, 0.05, ctx);
    assert.equal(step.events.length, 0);
    assert.ok(step.priest.windup > 0.4);
    step = tickPriest(step.priest, PRIEST_TUNING.shotWindup + 0.02, ctx);
    assert.equal(step.events.some((event) => event.type === "shot"), true);

    const stunned = tickPriest({ ...priest, windup: 0.4, stun: 1, shotCooldown: 0 }, 0.1, ctx);
    assert.equal(stunned.priest.windup, 0);
    assert.equal(stunned.events.some((event) => event.type === "shot"), false);

    const quiet = tickPriest(createPriest(), 1, ctx);
    assert.equal(quiet.events.length, 0);
    assert.equal(quiet.priest.timer, PRIEST_TUNING.idleFirst);
  });

  it("puts the veil in front of a shot from the nave", () => {
    const veilCols = activeColliders({ doorOpen: true, veilUp: true });
    const worldHit = resolveShot({ x: 0, y: 1.5, z: -22 }, { x: 0, y: 0, z: -1 }, 20, [], veilCols);
    const priestHit = resolvePriestHit({ x: 0, y: 1.5, z: -22 }, { x: 0, y: 0, z: -1 }, 20, createPriest(), "LIVE");
    assert.equal(worldHit.id, "rite-veil");
    assert.ok(worldHit.t < priestHit.t);
  });
});

describe("choir", () => {
  it("does not wake, reveal, or shoot while the wing is sealed", () => {
    const ghost = createChapelEnemies().find((enemy) => enemy.cloaked);
    const step = stepEnemy(ghost, 0.2, {
      channel: "STATIC",
      player: { x: 0, y: 1.2, z: -16, forceAggro: true },
      colliders: cols,
      allies: [],
      rng: () => 0.4,
    });
    assert.equal(step.shot, null);
    assert.equal(step.enemy.visible, false);
    assert.equal(step.enemy.x, ghost.x);
  });

  it("holds a stunned Tessera in place", () => {
    let enemy = createEnemies().find((item) => item.id === "north-l");
    enemy = { ...enemy, stun: 0.5, cooldown: 0, windup: 0.2 };
    const step = stepEnemy(enemy, 0.1, {
      channel: "LIVE",
      player: { x: enemy.x, y: 1.2, z: enemy.z + 3, forceAggro: true },
      colliders: cols,
      allies: [],
      rng: () => 0.4,
    });
    assert.equal(step.shot, null);
    assert.equal(step.enemy.windup, 0);
    assert.ok(step.enemy.stun < 0.5);
    assert.equal(step.enemy.x, enemy.x);
  });
});

describe("hurt", () => {
  it("ignores a second hit during invulnerability", () => {
    const first = hurtPlayer(createRunState(), 10);
    assert.equal(first.hit, true);
    assert.equal(first.state.health, 90);
    const second = hurtPlayer(first.state, 10);
    assert.equal(second.hit, false);
    assert.equal(second.state.health, 90);
    const later = hurtPlayer(tickResources(first.state, 1).state, 10);
    assert.equal(later.hit, true);
    assert.equal(later.dead, false);
  });
});
