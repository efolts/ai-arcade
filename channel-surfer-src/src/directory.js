/** Directory kiosk. Pure: no renderer. Amber, pearl, black, and gold. No cyan. */

import { DIRECTORY_SPAWN } from "./level.js";
import { raySphere } from "./sim.js";

export const DIRECTORY_RITES = ["listing", "index", "gate"];

export const DIRECTORY_TUNING = {
  hp: 480,
  armor: 0.2,
  breakDamage: 72,
  failDamage: 16,
  riteWindow: 3.4,
  recover: 2.05,
  idle: 2.15,
  idleFirst: 1.8,
  shotWindup: 0.62,
  shotGap: 1.5,
  boltDamage: 11,
  boltSpeed: 13.2,
};

const BODY_Y = 1.35;
const BODY_R = 0.72;
const SEAM_Y = 2.2;
const SEAM_R = 0.28;
const RING_Y = 2.95;
const RING_R = 0.48;

export function directoryBanner(rite) {
  if (rite === "listing") return "LIVE · THE LISTING";
  if (rite === "index") return "STATIC · THE INDEX";
  if (rite === "gate") return "DEAD AIR · THE GATE";
  return "";
}

export function createDirectory() {
  return {
    id: "directory-boss",
    boss: true,
    x: DIRECTORY_SPAWN.x,
    y: DIRECTORY_SPAWN.y,
    z: DIRECTORY_SPAWN.z,
    yaw: 0,
    hp: DIRECTORY_TUNING.hp,
    maxHp: DIRECTORY_TUNING.hp,
    alive: true,
    hittable: true,
    visible: true,
    exposed: false,
    haloVisible: false,
    veilUp: false,
    phase: "idle",
    rite: null,
    riteIndex: 0,
    timer: DIRECTORY_TUNING.idleFirst,
    shotCooldown: 0.9,
    windup: 0,
    stun: 0,
    hurt: 0,
    broken: 0,
    active: false,
  };
}

function beginRite(boss, events) {
  const rite = DIRECTORY_RITES[boss.riteIndex % DIRECTORY_RITES.length];
  boss.phase = "rite";
  boss.rite = rite;
  boss.timer = DIRECTORY_TUNING.riteWindow;
  boss.exposed = rite === "listing";
  boss.haloVisible = rite === "index";
  boss.veilUp = rite === "gate";
  boss.windup = 0;
  events.push({ type: "announce", rite });
}

function endRite(boss) {
  boss.phase = "recover";
  boss.rite = null;
  boss.exposed = false;
  boss.haloVisible = false;
  boss.veilUp = false;
  boss.windup = 0;
  boss.timer = DIRECTORY_TUNING.recover;
  boss.riteIndex += 1;
}

export function tickDirectory(boss, dt, ctx) {
  if (!boss.alive || !boss.active) return { boss, events: [] };
  const events = [];
  const next = {
    ...boss,
    hurt: Math.max(0, (boss.hurt || 0) - dt),
    stun: Math.max(0, (boss.stun || 0) - dt),
  };
  if (ctx && ctx.player) {
    const px = ctx.player.x - next.x;
    const pz = ctx.player.z - next.z;
    if (Math.hypot(px, pz) > 0.05) next.yaw = Math.atan2(px, pz);
  }

  if (next.phase === "idle") {
    next.timer -= dt;
    if (next.timer <= 0) beginRite(next, events);
    else if (next.stun > 0) next.windup = 0;
    else if (next.windup > 0) {
      next.windup -= dt;
      if (next.windup <= 0) {
        next.windup = 0;
        next.shotCooldown = DIRECTORY_TUNING.shotGap;
        events.push({ type: "shot" });
      }
    } else {
      next.shotCooldown -= dt;
      if (next.shotCooldown <= 0) next.windup = DIRECTORY_TUNING.shotWindup;
    }
  } else if (next.phase === "rite") {
    next.windup = 0;
    next.timer -= dt;
    if (next.timer <= 0) {
      events.push({ type: "fail", rite: next.rite, damage: DIRECTORY_TUNING.failDamage });
      endRite(next);
    }
  } else if (next.phase === "recover") {
    next.windup = 0;
    next.timer -= dt;
    if (next.timer <= 0) {
      next.phase = "idle";
      next.timer = DIRECTORY_TUNING.idle;
    }
  }
  return { boss: next, events };
}

export function directoryChip(amount) {
  if (!(amount > 0)) return 0;
  return amount * DIRECTORY_TUNING.armor;
}

export function damageDirectory(boss, amount) {
  const dealt = directoryChip(amount);
  if (!boss || !boss.alive || dealt <= 0) return { boss, dealt: 0, killed: false };
  const hp = boss.hp - dealt;
  const killed = hp <= 0;
  return {
    boss: {
      ...boss,
      hp: killed ? 0 : hp,
      alive: !killed,
      hurt: 0.22,
      phase: killed ? "dead" : boss.phase,
      veilUp: killed ? false : boss.veilUp,
      haloVisible: killed ? false : boss.haloVisible,
      exposed: killed ? false : boss.exposed,
      rite: killed ? null : boss.rite,
    },
    dealt,
    killed,
  };
}

/**
 * Listing breaks on a LIVE seam hit.
 * Index breaks on a STATIC ring hit.
 * Gate breaks when DEAD AIR has carried the player past the shutter.
 * A Phaser bolt through the gate is a chip, not the answer.
 */
export function directoryAnswer(boss, answer) {
  if (!boss.alive || boss.phase !== "rite") {
    return { boss, broken: false, dealt: 0, killed: false };
  }
  const ok =
    (boss.rite === "listing" && answer.channel === "LIVE" && answer.weak && !answer.halo) ||
    (boss.rite === "index" && answer.channel === "STATIC" && answer.halo) ||
    (boss.rite === "gate" && answer.channel === "DEAD_AIR" && answer.crossed);
  if (!ok) return { boss, broken: false, dealt: 0, killed: false };
  const dealt = DIRECTORY_TUNING.breakDamage;
  const hp = boss.hp - dealt;
  const killed = hp <= 0;
  if (killed) {
    return {
      boss: {
        ...boss,
        hp: 0,
        alive: false,
        phase: "dead",
        rite: null,
        exposed: false,
        haloVisible: false,
        veilUp: false,
        windup: 0,
        hurt: 0.28,
      },
      broken: true,
      dealt,
      killed: true,
    };
  }
  const next = { ...boss, hp, hurt: 0.28, broken: (boss.broken || 0) + 1 };
  endRite(next);
  return { boss: next, broken: true, dealt, killed: false };
}

export function resolveDirectoryHit(origin, dir, range, boss, channel) {
  if (!boss || !boss.alive || !boss.hittable) return null;
  const spheres = [
    { y: BODY_Y, r: BODY_R, weak: false, halo: false },
    { y: SEAM_Y, r: SEAM_R, weak: true, halo: false },
  ];
  if (boss.haloVisible && channel === "STATIC") {
    spheres.push({ y: RING_Y, r: RING_R, weak: false, halo: true });
  }
  let best = null;
  let bestT = range;
  for (const sphere of spheres) {
    const t = raySphere(
      origin.x,
      origin.y,
      origin.z,
      dir.x,
      dir.y,
      dir.z,
      boss.x,
      (boss.y || 0) + sphere.y,
      boss.z,
      sphere.r
    );
    if (t == null || t <= 0.02 || t >= bestT) continue;
    bestT = t;
    best = {
      kind: "directory",
      id: boss.id,
      t,
      weak: sphere.weak,
      halo: sphere.halo,
      x: origin.x + dir.x * t,
      y: origin.y + dir.y * t,
      z: origin.z + dir.z * t,
    };
  }
  return best;
}
