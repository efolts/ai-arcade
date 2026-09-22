import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { stepEnemy } from "./ai.js";
import {
  BLOCKS,
  BOUNDS,
  ENEMIES,
  LEASHES,
  PICKUPS,
  PLAYER_SPAWN,
  RESERVED_CONTENT,
  courtColliders,
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
  it("ships one cloak, one cloaked cache, and no reserved bosses", () => {
    assert.equal(ENEMIES.filter((e) => e.cloak).length, 1);
    assert.equal(ENEMIES.find((e) => e.cloak).id, "fountain");
    assert.equal(PICKUPS.filter((p) => p.cloaked).length, 1);
    assert.equal(BLOCKS.filter((b) => b.phaseGate).length, 1);
    assert.equal(BLOCKS.find((b) => b.phaseGate).id, "phase-gate");
    const ids = new Set(ENEMIES.map((e) => e.id));
    for (const reserved of RESERVED_CONTENT) assert.equal(ids.has(reserved.id), false);
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
