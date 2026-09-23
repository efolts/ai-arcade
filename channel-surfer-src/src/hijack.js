import { LEASHES } from "./level.js";

/** Remote hijack catalog. Pure: no renderer. */

export const HIJACK_CATALOG = [
  { id: "pa-horn", phase: 2, status: "playable", effect: "stun", prompt: "E  RETUNE PA" },
  { id: "sprinkler", phase: 6, status: "playable", effect: "slow", prompt: "E  OPEN SPRINKLERS" },
  { id: "security-shutter", phase: 7, status: "playable", effect: "slam", prompt: "E  SLAM SHUTTER" },
  { id: "security-camera", phase: 8, status: "playable", effect: "mark", prompt: "E  ROLL CAMERA" },
];

export const HIJACK_TUNING = {
  maxDist: 16,
  cone: 0.3,
  stun: 4.5,
  slow: 4.2,
  slowFactor: 0.35,
  cooldown: 16,
  retune: 4.5,
  retuneMult: 1.45,
  radius: 16,
  sprinklerRadius: 12,
  slam: 2.2,
  slamRadius: 14,
  slamKnock: 1.25,
  reveal: 5.5,
  mark: 5.5,
};

export function aimHijack({ origin, dir, point, maxDist, cone, blocked }) {
  const dx = point.x - origin.x;
  const dy = point.y - origin.y;
  const dz = point.z - origin.z;
  const dist = Math.hypot(dx, dy, dz);
  if (!(dist > 0.05) || dist > maxDist || blocked) return { aimed: false, dist };
  const dot = (dx * dir.x + dy * dir.y + dz * dir.z) / dist;
  return { aimed: dot >= Math.cos(cone), dist, dot };
}

export function tryHijack(state, now, cooldown = HIJACK_TUNING.cooldown) {
  const until = state.cooldownUntil || 0;
  if (until > now) return { ok: false, reason: "cooldown", cooldownUntil: until };
  const wait = cooldown > 0 ? cooldown : HIJACK_TUNING.cooldown;
  return { ok: true, cooldownUntil: now + wait };
}

/** Stuns chapel Tessera near the horn. The priest is not in this list and is not skipped by the retune. */
export function applyRetune(enemies, point, radius, duration) {
  return enemies.map((enemy) => {
    if (!enemy.alive || enemy.room !== "chapel") return enemy;
    const dist = Math.hypot(enemy.x - point.x, enemy.z - point.z);
    if (dist > radius) return enemy;
    return { ...enemy, stun: Math.max(enemy.stun || 0, duration), windup: 0 };
  });
}

/** Slows service-wing Tessera. It does not stun them and it does not touch the choir or the court. */
export function applySprinkler(enemies, point, radius, duration) {
  return enemies.map((enemy) => {
    if (!enemy.alive || enemy.room !== "service") return enemy;
    const dist = Math.hypot(enemy.x - point.x, enemy.z - point.z);
    if (dist > radius) return enemy;
    return { ...enemy, slow: Math.max(enemy.slow || 0, duration), windup: 0 };
  });
}

/** Slams service Tessera away from the shutter. Short stun, no slow, no shot heat. */
export function applyShutter(enemies, point, radius, duration, knock = HIJACK_TUNING.slamKnock) {
  return enemies.map((enemy) => {
    if (!enemy.alive || enemy.room !== "service") return enemy;
    const dx = enemy.x - point.x;
    const dz = enemy.z - point.z;
    const dist = Math.hypot(dx, dz);
    if (dist > radius) return enemy;
    const nx = dist > 0.05 ? dx / dist : 1;
    const nz = dist > 0.05 ? dz / dist : 0;
    let x = enemy.x + nx * knock;
    let z = enemy.z + nz * knock;
    const leash = LEASHES[enemy.id];
    if (leash) {
      x = Math.min(leash.maxX - 0.2, Math.max(leash.minX + 0.2, x));
      z = Math.min(leash.maxZ - 0.2, Math.max(leash.minZ + 0.2, z));
    }
    return { ...enemy, x, z, stun: Math.max(enemy.stun || 0, duration), windup: 0 };
  });
}

/** Reveals cloaked Tessera in one room and marks everyone there. No stun and no slow. */
export function applyCamera(enemies, room, revealFor, markFor) {
  return enemies.map((enemy) => {
    if (!enemy.alive || enemy.room !== room) return enemy;
    return {
      ...enemy,
      reveal: enemy.cloaked ? Math.max(enemy.reveal || 0, revealFor) : enemy.reveal || 0,
      marked: Math.max(enemy.marked || 0, markFor),
    };
  });
}
