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
import {
  DIRECTORY_TUNING,
  createDirectory,
  damageDirectory,
  directoryAnswer,
  resolveDirectoryHit,
  tickDirectory,
} from "./directory.js";
import { HIJACK_CATALOG, HIJACK_TUNING, aimHijack, applyRetune, applySprinkler, tryHijack } from "./hijack.js";
import {
  BLOCKS,
  BOUNDS,
  CHAPEL_ENEMIES,
  DIRECTORY_CROSS_Z,
  DIRECTORY_SPAWN,
  ENEMIES,
  HIJACK_SPAWNS,
  LEASHES,
  PHASE,
  PICKUPS,
  PLAYER_SPAWN,
  PRIEST_SPAWN,
  RESERVED_CONTENT,
  SERVICE_ENEMIES,
  SERVICE_ENTRY,
  VEIL_CROSS_Z,
  activeColliders,
  courtColliders,
  createChapelEnemies,
  createEnemies,
  createServiceEnemies,
} from "./level.js";
import {
  TUNING,
  UPGRADES,
  applyEnemyHit,
  applyPickup,
  applyUpgrade,
  armPad,
  batteryMaxes,
  beginShot,
  canFire,
  channelFromCode,
  createRunState,
  cycleChannel,
  damageAtRange,
  grantBatteries,
  grantHealth,
  grantSignal,
  grantXp,
  hurtPlayer,
  makeBatteryDrop,
  noteHit,
  offersFor,
  overlapsCircle,
  pickupLabel,
  pickupVisible,
  refillBatteries,
  refundBatteries,
  resolveShot,
  rewardForKill,
  shotProfile,
  switchChannel,
  tickPads,
  tickResources,
  tickReveal,
  tryMove,
  tuningOf,
  xpToNext,
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
  it("binds one remote to each channel and spends a battery", () => {
    const live = beginShot(createRunState());
    assert.equal(live.fired, true);
    assert.equal(live.reason, "ok");
    assert.equal(live.profile.kind, "hitscan");
    assert.equal(live.profile.name, "CLICKER");
    assert.equal(live.profile.phases, false);
    assert.equal(live.profile.pellets, 1);
    assert.equal(live.state.batteries.LIVE, TUNING.clickerMag - 1);
    assert.equal(live.state.signal, TUNING.signalMax);
    assert.equal(canFire(live.state), false);
    const cooled = { ...live.state, fireCooldown: 0 };
    const again = beginShot(cooled);
    assert.equal(again.fired, true);
    const waiting = beginShot(again.state);
    assert.equal(waiting.fired, false);
    assert.equal(waiting.reason, "wait");
    assert.equal(waiting.state.batteries.LIVE, again.state.batteries.LIVE);

    const stat = beginShot(switchChannel(createRunState(), "STATIC").state);
    assert.equal(stat.fired, true);
    assert.equal(stat.profile.kind, "spread");
    assert.equal(stat.profile.name, "SCATTER");
    assert.equal(stat.profile.pellets, TUNING.staticPellets);
    assert.equal(stat.profile.phases, false);
    assert.ok(stat.profile.range < live.profile.range);
    assert.equal(stat.state.batteries.STATIC, TUNING.scatterMag - 1);

    const dead = beginShot(switchChannel(createRunState(), "DEAD_AIR").state);
    assert.equal(dead.fired, true);
    assert.equal(dead.profile.kind, "phase");
    assert.equal(dead.profile.name, "PHASER");
    assert.equal(dead.profile.phases, true);
    assert.ok(dead.profile.range < stat.profile.range);
    assert.ok(dead.profile.range > 4);
    assert.equal(dead.state.batteries.DEAD_AIR, TUNING.phaserMag - 1);

    const dryState = {
      ...createRunState(),
      batteries: { LIVE: 0, STATIC: TUNING.scatterMag, DEAD_AIR: TUNING.phaserMag },
    };
    const dry = beginShot(dryState);
    assert.equal(dry.fired, false);
    assert.equal(dry.reason, "dry");
    assert.equal(canFire(dryState), false);
    assert.equal(dry.state.batteries.LIVE, 0);
    const swapped = beginShot(switchChannel(dryState, "STATIC").state);
    assert.equal(swapped.fired, true);
    assert.equal(swapped.profile.name, "SCATTER");
  });

  it("refills batteries from drops, room clears, and the PA", () => {
    const empty = { ...createRunState(), batteries: { LIVE: 1, STATIC: 0, DEAD_AIR: 0 } };
    const drop = makeBatteryDrop({ id: "west", x: 1, z: 2 });
    assert.equal(drop.kind, "battery");
    assert.equal(drop.cloaked, false);
    const picked = applyPickup(empty, drop);
    assert.equal(picked.took, true);
    assert.equal(picked.state.batteries.LIVE, 1 + TUNING.dropLive);
    assert.equal(picked.state.batteries.STATIC, TUNING.dropStatic);
    assert.equal(picked.state.batteries.DEAD_AIR, TUNING.dropDead);
    const capped = grantBatteries(createRunState(), { LIVE: 50, STATIC: 1, DEAD_AIR: 1 });
    assert.equal(capped.state.batteries.LIVE, TUNING.clickerMag);
    assert.equal(capped.gained, 0);
    const fullCell = applyPickup(createRunState(), drop);
    assert.equal(fullCell.took, false);
    assert.equal(fullCell.pickup.taken, false);
    const refilled = refillBatteries(empty);
    assert.deepEqual(refilled.batteries, batteryMaxes());
    const refund = refundBatteries({ ...empty, channel: "DEAD_AIR" });
    assert.equal(refund.state.batteries.LIVE, 1 + TUNING.paRefund);
    assert.equal(refund.state.batteries.STATIC, TUNING.paRefund);
    assert.equal(refund.state.batteries.DEAD_AIR, TUNING.paRefund + TUNING.paRefundFocus);
    assert.equal(drop.pad, undefined);
    const stale = tickPads([armPad({ ...drop, taken: true }, 0)], 100);
    assert.equal(stale[0].taken, true);
  });

  it("recharges ammo pads into the held remote", () => {
    const pad = { id: "pad-test", kind: "battery", pad: true, x: 1, z: 1, cloaked: false, taken: false };
    const low = { ...createRunState(), batteries: { LIVE: 2, STATIC: 1, DEAD_AIR: 0 } };
    const got = applyPickup(low, pad);
    assert.equal(got.took, true);
    assert.equal(got.state.batteries.LIVE, 2 + TUNING.padFocus);
    assert.equal(got.state.batteries.STATIC, 1 + TUNING.padSide);
    assert.equal(got.state.batteries.DEAD_AIR, TUNING.padSide);
    assert.equal(pickupLabel(pad, "LIVE"), `CLICKER +${TUNING.padFocus}`);
    const armed = armPad(got.pickup, 10);
    assert.equal(armed.taken, true);
    assert.equal(armed.respawnAt, 10 + TUNING.padRespawn);
    const waiting = tickPads([armed], 10 + TUNING.padRespawn - 0.01);
    assert.equal(waiting[0], armed);
    assert.equal(waiting[0].taken, true);
    const back = tickPads(waiting, 10 + TUNING.padRespawn);
    assert.equal(back[0].taken, false);
    assert.equal(back[0].respawnAt, null);
    const full = applyPickup(createRunState(), pad);
    assert.equal(full.took, false);
    assert.equal(full.pickup.taken, false);
    const scatter = applyPickup(switchChannel(low, "STATIC").state, pad);
    assert.equal(scatter.state.batteries.STATIC, 1 + TUNING.padFocus);
    assert.equal(scatter.state.batteries.LIVE, 2 + TUNING.padSide);
    assert.equal(scatter.state.batteries.DEAD_AIR, TUNING.padSide);
    assert.equal(pickupLabel(pad, "STATIC"), `SCATTER +${TUNING.padFocus}`);
    assert.equal(pickupLabel(pad, "DEAD_AIR"), `PHASER +${TUNING.padFocus}`);
    assert.ok(TUNING.padRespawn >= 12 && TUNING.padRespawn <= 20);
  });

  it("lets the Phaser through a phase gate and stops the Clicker", () => {
    const enemy = { id: "beyond", x: 13.2, y: 0, z: 0.02, alive: true, hittable: true };
    const origin = { x: 9.4, y: 1.2, z: 0.02 };
    const dir = { x: 1, y: 0, z: 0 };
    const blocked = resolveShot(origin, dir, 20, [enemy], cols);
    assert.equal(blocked.kind, "world");
    assert.equal(blocked.id, "phase-gate");
    const phased = resolveShot(origin, dir, 20, [enemy], cols, { phase: true });
    assert.equal(phased.kind, "enemy");
    assert.equal(phased.id, "beyond");
    const short = resolveShot(origin, dir, 3, [enemy], cols, { phase: true });
    assert.equal(short, null);
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

describe("level up", () => {
  it("banks XP into a short list of tuning picks and caps the slice", () => {
    assert.equal(TUNING.paCooldown, HIJACK_TUNING.cooldown);
    assert.equal(tuningOf(createRunState()).paCooldown, HIJACK_TUNING.cooldown);
    assert.equal(createRunState().level, 1);
    assert.equal(xpToNext(1), TUNING.xpBase);
    const kill = grantXp(createRunState(), TUNING.xpKill);
    assert.equal(kill.leveled, 0);
    assert.equal(kill.state.signal, TUNING.signalMax);
    assert.equal(kill.state.level, 1);

    let court = createRunState();
    for (let i = 0; i < 6; i++) court = grantXp(court, TUNING.xpKill).state;
    court = grantXp(court, TUNING.xpCourt).state;
    assert.equal(court.level, 3);
    assert.equal(court.pending, 2);
    assert.equal(court.xp, 6 * TUNING.xpKill + TUNING.xpCourt - xpToNext(1) - xpToNext(2));

    const offers = offersFor(court);
    assert.equal(offers.length, 3);
    assert.equal(new Set(offers.map((offer) => offer.id)).size, 3);
    assert.ok(offers.every((offer) => UPGRADES.some((item) => item.id === offer.id)));
    const blocked = applyUpgrade({ ...court, pending: 0 }, offers[0].id);
    assert.equal(blocked.applied, false);

    const clicker = applyUpgrade({ ...createRunState(), pending: 1, batteries: { LIVE: 2, STATIC: 1, DEAD_AIR: 0 } }, "clicker-mag");
    assert.equal(clicker.applied, true);
    assert.equal(clicker.state.pending, 0);
    assert.equal(clicker.state.batteries.LIVE, 2 + TUNING.magClicker);
    assert.equal(batteryMaxes(clicker.state).LIVE, TUNING.clickerMag + TUNING.magClicker);
    assert.equal(shotProfile("LIVE", clicker.state).name, "CLICKER");

    const fan = applyUpgrade(switchChannel({ ...createRunState(), pending: 1 }, "STATIC").state, "scatter-fan");
    assert.equal(shotProfile("STATIC", fan.state).pellets, TUNING.staticPellets + TUNING.pelletStep);

    let reach = { ...createRunState(), pending: 3 };
    reach = applyUpgrade(reach, "phaser-reach").state;
    reach = applyUpgrade(reach, "phaser-reach").state;
    const phaser = shotProfile("DEAD_AIR", reach);
    assert.equal(phaser.range, TUNING.phaserRange + TUNING.phaserStep * 2);
    assert.ok(phaser.range < TUNING.staticRange);
    const again = applyUpgrade(reach, "phaser-reach");
    assert.equal(again.applied, false);
    assert.equal(again.state.pending, 1);

    const quiet = applyUpgrade(switchChannel({ ...createRunState(), pending: 1, signal: 40 }, "DEAD_AIR").state, "quiet-air");
    const drained = tickResources(quiet.state, 1);
    assert.ok(Math.abs(drained.state.signal - (40 - (TUNING.deadDrain - TUNING.drainStep))) < 1e-6);

    const cells = applyUpgrade(
      { ...createRunState(), pending: 1, batteries: { LIVE: TUNING.clickerMag, STATIC: TUNING.scatterMag, DEAD_AIR: TUNING.phaserMag } },
      "battery-max"
    );
    assert.equal(cells.state.batteries.LIVE, TUNING.clickerMag + TUNING.batteryLive);
    assert.equal(cells.state.batteries.STATIC, TUNING.scatterMag + TUNING.batteryStatic);
    assert.equal(cells.state.batteries.DEAD_AIR, TUNING.phaserMag + TUNING.batteryDead);

    const surf = applyUpgrade({ ...createRunState(), pending: 1 }, "fast-surf");
    const shot = beginShot(surf.state);
    assert.ok(shot.profile.cooldown < TUNING.liveCooldown);
    assert.equal(shot.state.fireCooldown, tuningOf(surf.state).liveCooldown);

    const horn = applyUpgrade({ ...createRunState(), pending: 1 }, "pa-cycle");
    assert.equal(tuningOf(horn.state).paCooldown, TUNING.paCooldown - TUNING.paStep);
    const hijack = tryHijack({ cooldownUntil: 0 }, 3, tuningOf(horn.state).paCooldown);
    assert.equal(hijack.cooldownUntil, 3 + TUNING.paCooldown - TUNING.paStep);

    const feed = applyUpgrade({ ...createRunState(), pending: 1, signal: 10 }, "live-feed");
    const regen = tickResources(feed.state, 1);
    assert.ok(Math.abs(regen.state.signal - (10 + TUNING.liveRegen + TUNING.regenStep)) < 1e-6);

    const cappedMods = { ...createRunState(), level: 4, pending: 1, mods: { "clicker-mag": TUNING.upgradeStacks } };
    assert.equal(offersFor(cappedMods).some((offer) => offer.id === "clicker-mag"), false);

    let climb = createRunState();
    let total = 0;
    for (let level = 1; level < TUNING.maxLevel; level++) total += xpToNext(level);
    climb = grantXp(climb, total).state;
    assert.equal(climb.level, TUNING.maxLevel);
    assert.equal(climb.pending, TUNING.maxLevel - 1);
    assert.ok(TUNING.maxLevel >= 5 && TUNING.maxLevel <= 8);
    const overflow = grantXp(climb, 500);
    assert.equal(overflow.leveled, 0);
    assert.equal(overflow.state.pending, TUNING.maxLevel - 1);
    assert.equal(overflow.state.channel, "LIVE");
  });
});

describe("court layout", () => {
  it("ships the mall run with phase-3 art and reserved ids kept off encounters", () => {
    assert.equal(PHASE, 3);
    assert.equal(ENEMIES.filter((e) => e.cloak).length, 1);
    assert.equal(ENEMIES.find((e) => e.cloak).id, "fountain");
    assert.equal(PICKUPS.filter((p) => p.cloaked).length, 1);
    const gates = BLOCKS.filter((b) => b.phaseGate);
    assert.equal(gates.length, 3);
    assert.equal(BLOCKS.find((b) => b.id === "phase-gate").veil, undefined);
    assert.equal(BLOCKS.find((b) => b.id === "rite-veil").veil, true);
    assert.equal(BLOCKS.find((b) => b.id === "directory-gate").directoryVeil, true);
    assert.equal(BLOCKS.find((b) => b.id === "directory-gate").veil, undefined);
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
    for (const enemy of [...ENEMIES, ...CHAPEL_ENEMIES, ...SERVICE_ENEMIES]) assert.equal(reserved.has(enemy.id), false);
    assert.equal(createDirectory().id, "directory-boss");
    assert.equal(reserved.has("directory-boss"), false);
    assert.ok(LEASHES.alley);
    assert.ok(LEASHES["service-ghost"]);
    assert.equal(PICKUPS.find((p) => p.cloaked).kind, "signal");
    const cells = PICKUPS.filter((p) => p.kind === "battery");
    assert.equal(cells.length, 10);
    const courtPads = cells.filter((cell) => cell.z > -14.5);
    const radioPads = cells.filter((cell) => cell.z < -14.5 && cell.z > -29.2);
    const servicePads = cells.filter((cell) => cell.z < -29.2 && cell.z > -41.4);
    const directoryPads = cells.filter((cell) => cell.z < -41.4);
    assert.ok(courtPads.length >= 3);
    assert.ok(radioPads.length >= 2);
    assert.equal(servicePads.length, 2);
    assert.equal(directoryPads.length, 2);
    const openCols = activeColliders({ doorOpen: true, serviceOpen: true, directoryOpen: true });
    for (const cell of cells) {
      assert.equal(cell.pad, true);
      assert.equal(cell.cloaked, false);
      assert.equal(overlapsCircle(cell.x, cell.z, TUNING.playerRadius, openCols, "LIVE"), null, cell.id);
      for (const enemy of [...ENEMIES, ...CHAPEL_ENEMIES, ...SERVICE_ENEMIES]) {
        const gap = Math.hypot(cell.x - enemy.x, cell.z - enemy.z);
        assert.ok(gap > 1.6, `${cell.id} on ${enemy.id}`);
      }
    }
    for (let i = 0; i < cells.length; i++) {
      for (let j = i + 1; j < cells.length; j++) {
        const gap = Math.hypot(cells[i].x - cells[j].x, cells[i].z - cells[j].z);
        assert.ok(gap > 3.5, `${cells[i].id} ${cells[j].id} ${gap}`);
      }
    }
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
  it("keeps the horn and the sprinkler playable and reserves the rest", () => {
    assert.deepEqual(
      HIJACK_CATALOG.filter((item) => item.status === "playable").map((item) => item.id),
      ["pa-horn", "sprinkler"]
    );
    assert.deepEqual(
      HIJACK_CATALOG.filter((item) => item.status === "reserved").map((item) => item.id).sort(),
      ["security-camera", "security-shutter"]
    );
    assert.equal(HIJACK_CATALOG.some((item) => item.id === "broadcast-echo"), false);
    assert.equal(RESERVED_CONTENT.some((item) => item.id === "broadcast-echo"), true);
    assert.equal(HIJACK_SPAWNS[0].id, "pa-horn");
    assert.equal(HIJACK_SPAWNS.find((item) => item.id === "sprinkler").id, "sprinkler");
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

  it("slows the service wing and leaves the choir unsunned", () => {
    const point = HIJACK_SPAWNS.find((item) => item.id === "sprinkler");
    const slowed = applySprinkler(
      [...createEnemies(), ...createChapelEnemies(), ...createServiceEnemies()],
      point,
      HIJACK_TUNING.sprinklerRadius,
      HIJACK_TUNING.slow
    );
    assert.equal(slowed.find((enemy) => enemy.id === "choir-l").slow || 0, 0);
    assert.equal(slowed.find((enemy) => enemy.id === "choir-l").stun || 0, 0);
    assert.equal(slowed.find((enemy) => enemy.id === "north-l").slow || 0, 0);
    assert.ok(slowed.find((enemy) => enemy.id === "service-l").slow >= HIJACK_TUNING.slow);
    assert.ok(slowed.find((enemy) => enemy.id === "service-ghost").slow >= HIJACK_TUNING.slow);
    assert.equal(slowed.find((enemy) => enemy.id === "service-l").stun || 0, 0);
    assert.equal(slowed.find((enemy) => enemy.id === "service-l").windup, 0);
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

describe("service wing", () => {
  it("keeps the service door shut until that wing is open", () => {
    const shut = activeColliders({ doorOpen: true, serviceOpen: false });
    let closed = { x: 1.85, z: -26.6 };
    for (let i = 0; i < 30; i++) {
      closed = tryMove(closed.x, closed.z, 0, -0.22, TUNING.playerRadius, shut, "LIVE", BOUNDS);
    }
    assert.ok(closed.z > -28.85, `closed z ${closed.z}`);
    const openCols = activeColliders({ doorOpen: true, serviceOpen: true, directoryOpen: false });
    let open = { x: 1.85, z: -26.6 };
    for (let i = 0; i < 40; i++) {
      open = tryMove(open.x, open.z, 0, -0.22, TUNING.playerRadius, openCols, "LIVE", BOUNDS);
    }
    assert.ok(open.z < -31, `open z ${open.z}`);
    assert.equal(overlapsCircle(SERVICE_ENTRY.x, SERVICE_ENTRY.z, TUNING.playerRadius, openCols, "LIVE"), null);
    for (const enemy of createServiceEnemies()) {
      assert.equal(overlapsCircle(enemy.x, enemy.z, 0.42, openCols, "LIVE"), null, enemy.id);
      assert.equal(enemy.room, "service");
      assert.equal(enemy.dormant, true);
    }
    assert.equal(SERVICE_ENEMIES.filter((enemy) => enemy.cloak).length, 1);
  });

  it("slows a Tessera without freezing it", () => {
    let slow = createEnemies().find((enemy) => enemy.id === "north-l");
    let free = { ...slow, cooldown: 5, windup: 0 };
    slow = { ...slow, slow: 3, cooldown: 5, windup: 0 };
    const ctx = {
      channel: "LIVE",
      player: { x: slow.x, y: 1.2, z: slow.z - 8, forceAggro: true },
      colliders: cols,
      allies: [],
      rng: () => 0.4,
    };
    let slowTravel = 0;
    let freeTravel = 0;
    for (let i = 0; i < 20; i++) {
      const a = stepEnemy(slow, 0.1, ctx);
      const b = stepEnemy(free, 0.1, ctx);
      slowTravel += Math.hypot(a.enemy.x - slow.x, a.enemy.z - slow.z);
      freeTravel += Math.hypot(b.enemy.x - free.x, b.enemy.z - free.z);
      slow = a.enemy;
      free = b.enemy;
    }
    assert.ok(slowTravel > 0.05, `slow travel ${slowTravel}`);
    assert.ok(freeTravel > slowTravel, `free ${freeTravel} slow ${slowTravel}`);
    assert.ok(slowTravel < freeTravel * 0.55, `slow ${slowTravel} free ${freeTravel}`);
  });
});

describe("directory", () => {
  const ctx = { player: { x: 0, z: -44 } };

  it("announces listing, index, then the gate, and three breaks do not kill it", () => {
    let boss = { ...createDirectory(), active: true };
    assert.equal(boss.id, "directory-boss");
    const rites = [];
    for (let i = 0; i < 3; i++) {
      boss.timer = 0.01;
      boss.phase = "idle";
      const step = tickDirectory(boss, 0.05, ctx);
      assert.equal(step.events[0].type, "announce");
      rites.push(step.events[0].rite);
      const answer =
        step.boss.rite === "listing"
          ? { channel: "LIVE", weak: true, halo: false, crossed: false }
          : step.boss.rite === "index"
            ? { channel: "STATIC", weak: false, halo: true, crossed: false }
            : { channel: "DEAD_AIR", weak: false, halo: false, crossed: true };
      const broken = directoryAnswer(step.boss, answer);
      assert.equal(broken.broken, true);
      boss = broken.boss;
      boss.timer = 0.01;
      boss = tickDirectory(boss, 0.05, ctx).boss;
      assert.equal(boss.phase, "idle");
    }
    assert.deepEqual(rites, ["listing", "index", "gate"]);
    assert.equal(boss.alive, true);
    assert.ok(boss.hp <= DIRECTORY_TUNING.hp - DIRECTORY_TUNING.breakDamage * 3);
    assert.ok(boss.hp > 0);
  });

  it("rejects the wrong channel and a phaser shot that does not cross the gate", () => {
    const listing = directoryAnswer(
      { ...createDirectory(), phase: "rite", rite: "listing", exposed: true },
      { channel: "STATIC", weak: true, halo: false, crossed: false }
    );
    assert.equal(listing.broken, false);
    const index = directoryAnswer(
      { ...createDirectory(), phase: "rite", rite: "index", haloVisible: true },
      { channel: "LIVE", weak: true, halo: false, crossed: false }
    );
    assert.equal(index.broken, false);
    const gate = directoryAnswer(
      { ...createDirectory(), phase: "rite", rite: "gate", veilUp: true },
      { channel: "DEAD_AIR", weak: false, halo: false, crossed: false }
    );
    assert.equal(gate.broken, false);
    const walked = directoryAnswer(
      { ...createDirectory(), phase: "rite", rite: "gate", veilUp: true },
      { channel: "DEAD_AIR", weak: false, halo: false, crossed: true }
    );
    assert.equal(walked.broken, true);
    assert.equal(walked.boss.veilUp, false);
  });

  it("chips the body and shows the ring only on STATIC", () => {
    const boss = createDirectory();
    const chip = damageDirectory(boss, TUNING.liveDamage);
    assert.equal(chip.killed, false);
    assert.ok(chip.dealt < 8);
    const index = { ...createDirectory(), phase: "rite", rite: "index", haloVisible: true };
    const origin = { x: 0, y: 2.95, z: -46 };
    const dir = { x: 0, y: 0, z: -1 };
    const hidden = resolveDirectoryHit(origin, dir, 30, index, "LIVE");
    assert.ok(!hidden || hidden.halo === false);
    const shown = resolveDirectoryHit(origin, dir, 30, index, "STATIC");
    assert.equal(shown.halo, true);
    const listing = { ...createDirectory(), phase: "rite", rite: "listing", exposed: true };
    const seam = resolveDirectoryHit({ x: 0, y: 2.2, z: -46 }, dir, 30, listing, "LIVE");
    assert.equal(seam.weak, true);
    assert.equal(directoryAnswer(listing, { channel: "LIVE", weak: true, halo: false, crossed: false }).broken, true);
  });

  it("lets DEAD AIR through the gate and stops LIVE", () => {
    const gateCols = activeColliders({
      doorOpen: true,
      serviceOpen: true,
      directoryOpen: true,
      directoryVeilUp: true,
    });
    let live = { x: 0, z: -46.2 };
    let dead = { x: 0, z: -46.2 };
    for (let i = 0; i < 28; i++) {
      live = tryMove(live.x, live.z, 0, -0.22, TUNING.playerRadius, gateCols, "LIVE", BOUNDS);
      dead = tryMove(dead.x, dead.z, 0, -0.22, TUNING.playerRadius, gateCols, "DEAD_AIR", BOUNDS);
    }
    assert.ok(live.z > -47.2, `live z ${live.z}`);
    assert.ok(dead.z < DIRECTORY_CROSS_Z, `dead z ${dead.z}`);
    assert.ok(dead.z > -50.6, `dead z ${dead.z}`);
    assert.equal(overlapsCircle(DIRECTORY_SPAWN.x, DIRECTORY_SPAWN.z, 0.42, gateCols, "LIVE").id, "directory-plinth");
  });

  it("telegraphs a bolt and fails a rite for chip damage", () => {
    let boss = { ...createDirectory(), active: true, phase: "rite", rite: "listing", timer: 0.05, exposed: true };
    const failed = tickDirectory(boss, 0.1, ctx);
    assert.equal(failed.events[0].type, "fail");
    assert.equal(failed.events[0].damage, DIRECTORY_TUNING.failDamage);
    assert.ok(failed.events[0].damage < 25);
    assert.equal(failed.boss.phase, "recover");
    boss = { ...createDirectory(), active: true, phase: "idle", timer: 10, shotCooldown: 0, windup: 0 };
    let step = tickDirectory(boss, 0.05, ctx);
    assert.ok(step.boss.windup > 0.4);
    step = tickDirectory(step.boss, DIRECTORY_TUNING.shotWindup + 0.02, ctx);
    assert.equal(step.events.some((event) => event.type === "shot"), true);
    const quiet = tickDirectory(createDirectory(), 1, ctx);
    assert.equal(quiet.events.length, 0);
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
