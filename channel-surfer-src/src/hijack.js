/** Remote hijack catalog. PA horn and the service sprinkler are playable. Pure: no renderer. */

export const HIJACK_CATALOG = [
  { id: "pa-horn", phase: 2, status: "playable", effect: "stun", prompt: "E  RETUNE PA" },
  { id: "sprinkler", phase: 6, status: "playable", effect: "slow", prompt: "E  OPEN SPRINKLERS" },
  { id: "security-shutter", phase: 3, status: "reserved", effect: "path" },
  { id: "security-camera", phase: 3, status: "reserved", effect: "mark" },
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
