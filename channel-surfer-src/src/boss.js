/** Visor Priest rites. Pure: no renderer. Cyan is never a priest color. */

import { PRIEST_SPAWN } from "./level.js";
import { raySphere } from "./sim.js";

export const RITES = ["seam", "choir", "veil"];

export const PRIEST_TUNING = {
  hp: 360,
  armor: 0.2,
  breakDamage: 64,
  failDamage: 16,
  riteWindow: 3.2,
  recover: 2.2,
  idle: 2.45,
  idleFirst: 2.7,
  shotWindup: 0.58,
  shotGap: 1.75,
  boltDamage: 9,
  boltSpeed: 12.5,
};

// Fitted to the Phase 3 priest kit. Helmet center 2.05, robe mass at 1.2, halo ring still reaches this sphere.
const HEAD_Y = 2.05;
const BODY_Y = 1.2;
const HALO_Y = 2.62;

export function riteBanner(rite) {
  if (rite === "seam") return "LIVE · THE SEAM";
  if (rite === "choir") return "STATIC · THE HALO";
  if (rite === "veil") return "DEAD AIR · THE VEIL";
  return "";
}

export function createPriest() {
  return {
    id: "visor-priest",
    boss: true,
    x: PRIEST_SPAWN.x,
    y: PRIEST_SPAWN.y,
    z: PRIEST_SPAWN.z,
    yaw: 0,
    hp: PRIEST_TUNING.hp,
    maxHp: PRIEST_TUNING.hp,
    alive: true,
    hittable: true,
    visible: true,
    exposed: false,
    haloVisible: false,
    veilUp: false,
    phase: "idle",
    rite: null,
    riteIndex: 0,
    timer: PRIEST_TUNING.idleFirst,
    shotCooldown: 1.15,
    windup: 0,
    stun: 0,
    hurt: 0,
    broken: 0,
    active: false,
  };
}

function beginRite(priest, events) {
  const rite = RITES[priest.riteIndex % RITES.length];
  priest.phase = "rite";
  priest.rite = rite;
  priest.timer = PRIEST_TUNING.riteWindow;
  priest.exposed = rite === "seam";
  priest.haloVisible = rite === "choir";
  priest.veilUp = rite === "veil";
  priest.windup = 0;
  events.push({ type: "announce", rite });
}

function endRite(priest) {
  priest.phase = "recover";
  priest.rite = null;
  priest.exposed = false;
  priest.haloVisible = false;
  priest.veilUp = false;
  priest.windup = 0;
  priest.timer = PRIEST_TUNING.recover;
  priest.riteIndex += 1;
}

export function tickPriest(priest, dt, ctx) {
  if (!priest.alive || !priest.active) return { priest, events: [] };
  const events = [];
  const next = {
    ...priest,
    hurt: Math.max(0, (priest.hurt || 0) - dt),
    stun: Math.max(0, (priest.stun || 0) - dt),
  };
  if (ctx && ctx.player) {
    const px = ctx.player.x - next.x;
    const pz = ctx.player.z - next.z;
    if (Math.hypot(px, pz) > 0.05) next.yaw = Math.atan2(px, pz);
  }

  if (next.phase === "idle") {
    next.timer -= dt;
    if (next.timer <= 0) {
      beginRite(next, events);
    } else if (next.stun > 0) {
      next.windup = 0;
    } else if (next.windup > 0) {
      next.windup -= dt;
      if (next.windup <= 0) {
        next.windup = 0;
        next.shotCooldown = PRIEST_TUNING.shotGap;
        events.push({ type: "shot" });
      }
    } else {
      next.shotCooldown -= dt;
      if (next.shotCooldown <= 0) next.windup = PRIEST_TUNING.shotWindup;
    }
  } else if (next.phase === "rite") {
    next.windup = 0;
    next.timer -= dt;
    if (next.timer <= 0) {
      events.push({ type: "fail", rite: next.rite, damage: PRIEST_TUNING.failDamage });
      endRite(next);
    }
  } else if (next.phase === "recover") {
    next.windup = 0;
    next.timer -= dt;
    if (next.timer <= 0) {
      next.phase = "idle";
      next.timer = PRIEST_TUNING.idle;
    }
  }
  return { priest: next, events };
}

export function priestChip(amount) {
  if (!(amount > 0)) return 0;
  return amount * PRIEST_TUNING.armor;
}

export function damagePriest(priest, amount) {
  const dealt = priestChip(amount);
  if (!priest || !priest.alive || dealt <= 0) return { priest, dealt: 0, killed: false };
  const hp = priest.hp - dealt;
  const killed = hp <= 0;
  return {
    priest: {
      ...priest,
      hp: killed ? 0 : hp,
      alive: !killed,
      hurt: 0.22,
      phase: killed ? "dead" : priest.phase,
      veilUp: killed ? false : priest.veilUp,
      haloVisible: killed ? false : priest.haloVisible,
      exposed: killed ? false : priest.exposed,
      rite: killed ? null : priest.rite,
    },
    dealt,
    killed,
  };
}

/**
 * Seam breaks on a LIVE weak-point hit.
 * Choir breaks on a STATIC halo hit.
 * Veil breaks when DEAD AIR has carried the player past the seal.
 */
export function priestAnswer(priest, answer) {
  if (!priest.alive || priest.phase !== "rite") {
    return { priest, broken: false, dealt: 0, killed: false };
  }
  const ok =
    (priest.rite === "seam" && answer.channel === "LIVE" && answer.weak && !answer.halo) ||
    (priest.rite === "choir" && answer.channel === "STATIC" && answer.halo) ||
    (priest.rite === "veil" && answer.channel === "DEAD_AIR" && answer.crossed);
  if (!ok) return { priest, broken: false, dealt: 0, killed: false };
  const dealt = PRIEST_TUNING.breakDamage;
  const hp = priest.hp - dealt;
  const killed = hp <= 0;
  if (killed) {
    return {
      priest: {
        ...priest,
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
  const next = { ...priest, hp, hurt: 0.28, broken: (priest.broken || 0) + 1 };
  endRite(next);
  return { priest: next, broken: true, dealt, killed: false };
}

export function resolvePriestHit(origin, dir, range, priest, channel) {
  if (!priest || !priest.alive || !priest.hittable) return null;
  const spheres = [
    { y: BODY_Y, r: 0.62, weak: false, halo: false },
    { y: HEAD_Y, r: 0.3, weak: true, halo: false },
  ];
  if (priest.haloVisible && channel === "STATIC") {
    spheres.push({ y: HALO_Y, r: 0.42, weak: false, halo: true });
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
      priest.x,
      (priest.y || 0) + sphere.y,
      priest.z,
      sphere.r
    );
    if (t == null || t <= 0.02 || t >= bestT) continue;
    bestT = t;
    best = {
      kind: "priest",
      id: priest.id,
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
