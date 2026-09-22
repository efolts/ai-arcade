import { LEASHES } from "./level.js";
import { movementSpeed, segmentClear, tickReveal, tryMove, TUNING } from "./sim.js";

function normalize(x, z) {
  const l = Math.hypot(x, z);
  if (l < 1e-6) return { x: 0, z: 0 };
  return { x: x / l, z: z / l };
}

/**
 * One Tessera step. Enemies never phase; they always resolve collision as LIVE.
 * Returns a shot record when the windup completes with line of sight.
 */
export function stepEnemy(input, dt, ctx) {
  let e = tickReveal(input, dt, ctx.channel);
  if (!e.alive) return { enemy: e, shot: null };

  const px = ctx.player.x - e.x;
  const pz = ctx.player.z - e.z;
  const dist = Math.hypot(px, pz);
  if (dist < 18 || ctx.player.forceAggro) e.aggro = true;

  if (e.cloaked && dist < 3.05) e.reveal = Math.max(e.reveal || 0, 1.25);
  e = tickReveal(e, 0, ctx.channel);

  const hidden = e.cloaked && !e.visible;
  if (!e.aggro || hidden) {
    e.hurt = Math.max(0, (e.hurt || 0) - dt);
    return { enemy: e, shot: null };
  }

  const eyeY = 1.45;
  const los = dist < 17 && segmentClear(e.x, eyeY, e.z, ctx.player.x, ctx.player.y ?? 1.2, ctx.player.z, ctx.colliders);
  e.hurt = Math.max(0, (e.hurt || 0) - dt);
  e.cooldown = (e.cooldown || 0) - dt;

  let shot = null;
  if (e.windup > 0) {
    e.windup -= dt;
    if (e.windup <= 0) {
      e.windup = 0;
      if (los) shot = makeShot(e, ctx, dist);
    }
  } else if (los && e.cooldown <= 0) {
    e.windup = 0.28;
    e.cooldown = 1.28 + ctx.rng() * 0.45;
  }

  if (e.windup > 0) {
    if (dist > 0.001) e.yaw = Math.atan2(px, pz);
    return { enemy: e, shot };
  }

  const fwd = dist > 0.001 ? { x: px / dist, z: pz / dist } : { x: 0, z: 1 };
  const side = { x: -fwd.z, z: fwd.x };
  e.strafeT = (e.strafeT || 0) - dt;
  if (e.strafeT <= 0) {
    e.strafeSign = (e.strafeSign || 1) * -1;
    e.strafeT = 0.75 + ctx.rng() * 1.05;
  }

  let wishX = side.x * e.strafeSign * 0.9;
  let wishZ = side.z * e.strafeSign * 0.9;
  if (dist > 10.2) {
    wishX += fwd.x;
    wishZ += fwd.z;
  } else if (dist < 5.2) {
    wishX -= fwd.x * 0.85;
    wishZ -= fwd.z * 0.85;
  }

  if (ctx.allies) {
    for (const o of ctx.allies) {
      if (!o.alive || o.id === e.id) continue;
      const dx = e.x - o.x;
      const dz = e.z - o.z;
      const d = Math.hypot(dx, dz);
      if (d < 1.15 && d > 0.001) {
        wishX += (dx / d) * 1.4;
        wishZ += (dz / d) * 1.4;
      }
    }
  }

  const wish = normalize(wishX, wishZ);
  const speed = (movementSpeed("STATIC") * 0.62) * (e.hurt > 0 ? 0.25 : 1);
  let mx = wish.x * speed * dt;
  let mz = wish.z * speed * dt;
  const moved = tryMove(e.x, e.z, mx, mz, 0.42, ctx.colliders, "LIVE", null);
  let nx = moved.x;
  let nz = moved.z;
  const leash = LEASHES[e.id];
  if (leash) {
    if (nx < leash.minX || nx > leash.maxX || nz < leash.minZ || nz > leash.maxZ) {
      nx = e.x;
      nz = e.z;
    }
  }
  e.x = nx;
  e.z = nz;
  if (dist > 0.001) e.yaw = Math.atan2(px, pz);
  return { enemy: e, shot };
}

function makeShot(e, ctx, dist) {
  const ox = e.x;
  const oy = 1.32;
  const oz = e.z;
  const tx = ctx.player.x - ox + (ctx.rng() - 0.5) * 0.35;
  const ty = (ctx.player.y ?? 1.15) - oy + (ctx.rng() - 0.5) * 0.12;
  const tz = ctx.player.z - oz + (ctx.rng() - 0.5) * 0.35;
  const len = Math.hypot(tx, ty, tz) || 1;
  const speed = 14.5;
  return {
    x: ox,
    y: oy,
    z: oz,
    vx: (tx / len) * speed,
    vy: (ty / len) * speed,
    vz: (tz / len) * speed,
    damage: TUNING.boltDamage,
    life: 2.1,
    dist,
  };
}
