/** Pure channel, Signal, collision, and shot rules. No renderer. */

export const CHANNELS = ["LIVE", "STATIC", "DEAD_AIR"];

export const TUNING = {
  signalMax: 100,
  healthMax: 100,
  liveRegen: 7,
  staticDrain: 11,
  deadDrain: 15,
  minDrainSignal: 8,
  liveDamage: 23,
  liveRange: 60,
  liveFalloff: 0.12,
  liveCooldown: 0.2,
  staticPellets: 7,
  staticPellet: 8,
  staticSpread: 0.11,
  staticRange: 13,
  staticFalloff: 0.85,
  staticCooldown: 0.52,
  weakMult: 2.35,
  revealDuration: 4.2,
  aggressiveRange: 5.5,
  aggressiveKillSignal: 26,
  cleanKillSignal: 10,
  burstWindow: 0.48,
  hurtIframes: 0.38,
  playerRadius: 0.36,
  boltDamage: 8,
  speed: { LIVE: 6.3, STATIC: 5.4, DEAD_AIR: 9.6 },
};

export function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

export function createRunState() {
  return {
    channel: "LIVE",
    signal: TUNING.signalMax,
    health: TUNING.healthMax,
    fireCooldown: 0,
    hurtTimer: 0,
  };
}

export function channelFromCode(code) {
  if (code === "Digit1" || code === "Numpad1") return "LIVE";
  if (code === "Digit2" || code === "Numpad2") return "STATIC";
  if (code === "Digit3" || code === "Numpad3") return "DEAD_AIR";
  return null;
}

export function cycleChannel(channel, direction) {
  const i = Math.max(0, CHANNELS.indexOf(channel));
  const step = direction >= 0 ? 1 : -1;
  return CHANNELS[(i + step + CHANNELS.length) % CHANNELS.length];
}

export function canEnter(state, channel) {
  if (channel === "LIVE") return true;
  return state.signal >= TUNING.minDrainSignal;
}

export function switchChannel(state, channel) {
  if (!CHANNELS.includes(channel)) return { state, result: "invalid" };
  if (state.channel === channel) return { state, result: "same" };
  if (!canEnter(state, channel)) return { state, result: "denied" };
  return { state: { ...state, channel }, result: "ok" };
}

export function tickResources(state, dt) {
  let { channel, signal, fireCooldown, hurtTimer } = state;
  let forced = false;
  fireCooldown = Math.max(0, fireCooldown - dt);
  hurtTimer = Math.max(0, hurtTimer - dt);
  if (channel === "LIVE") {
    signal = Math.min(TUNING.signalMax, signal + TUNING.liveRegen * dt);
  } else {
    const drain = channel === "STATIC" ? TUNING.staticDrain : TUNING.deadDrain;
    signal -= drain * dt;
    if (signal <= 0) {
      signal = 0;
      channel = "LIVE";
      forced = true;
    }
  }
  return {
    state: { ...state, channel, signal, fireCooldown, hurtTimer },
    forced,
  };
}

export function movementSpeed(channel) {
  return TUNING.speed[channel] ?? TUNING.speed.LIVE;
}

export function canFire(state) {
  return state.channel !== "DEAD_AIR" && state.fireCooldown <= 0 && state.health > 0;
}

export function shotProfile(channel) {
  if (channel === "LIVE") {
    return {
      kind: "hitscan",
      pellets: 1,
      spread: 0,
      damage: TUNING.liveDamage,
      range: TUNING.liveRange,
      falloff: TUNING.liveFalloff,
      cooldown: TUNING.liveCooldown,
    };
  }
  if (channel === "STATIC") {
    return {
      kind: "spread",
      pellets: TUNING.staticPellets,
      spread: TUNING.staticSpread,
      damage: TUNING.staticPellet,
      range: TUNING.staticRange,
      falloff: TUNING.staticFalloff,
      cooldown: TUNING.staticCooldown,
    };
  }
  return { kind: "none", pellets: 0, spread: 0, damage: 0, range: 0, falloff: 1, cooldown: 0 };
}

export function beginShot(state) {
  const profile = shotProfile(state.channel);
  if (!canFire(state) || profile.kind === "none") {
    return { state, profile: shotProfile("DEAD_AIR"), fired: false };
  }
  return {
    state: { ...state, fireCooldown: profile.cooldown },
    profile,
    fired: true,
  };
}

export function damageAtRange(base, distance, range, falloff) {
  if (!(distance >= 0) || distance > range || range <= 0) return 0;
  const t = distance / range;
  return base * (1 - falloff * t * t);
}

export function grantSignal(state, amount) {
  return { ...state, signal: clamp(state.signal + amount, 0, TUNING.signalMax) };
}

export function grantHealth(state, amount) {
  return { ...state, health: clamp(state.health + amount, 0, TUNING.healthMax) };
}

export function rewardForKill(state, { distance, channel, burst }) {
  const aggressive = channel === "STATIC" || distance <= TUNING.aggressiveRange || !!burst;
  const amount = aggressive ? TUNING.aggressiveKillSignal : TUNING.cleanKillSignal;
  return { state: grantSignal(state, amount), amount, aggressive };
}

export function hurtPlayer(state, amount) {
  if (state.hurtTimer > 0 || state.health <= 0) return { state, hit: false, dead: state.health <= 0 };
  const health = Math.max(0, state.health - amount);
  return {
    state: { ...state, health, hurtTimer: TUNING.hurtIframes },
    hit: true,
    dead: health <= 0,
  };
}

export function blocksBody(collider, channel) {
  if (!collider || collider.floor) return false;
  if (collider.maxY != null && collider.maxY < 0.3) return false;
  if (collider.minY != null && collider.minY > 1.65) return false;
  if (collider.phaseGate && channel === "DEAD_AIR") return false;
  return true;
}

export function overlapsCircle(x, z, radius, colliders, channel) {
  for (const c of colliders) {
    if (!blocksBody(c, channel)) continue;
    const cx = clamp(x, c.minX, c.maxX);
    const cz = clamp(z, c.minZ, c.maxZ);
    const dx = x - cx;
    const dz = z - cz;
    if (dx * dx + dz * dz < radius * radius) return c;
  }
  return null;
}

function slideOnce(x, z, dx, dz, radius, colliders, channel) {
  let nx = x + dx;
  if (overlapsCircle(nx, z, radius, colliders, channel)) nx = x;
  const nzTry = z + dz;
  if (overlapsCircle(nx, nzTry, radius, colliders, channel)) return { x: nx, z };
  return { x: nx, z: nzTry };
}

function depenetrate(x, z, radius, colliders, channel) {
  let cx = x;
  let cz = z;
  for (let n = 0; n < 4; n++) {
    const hit = overlapsCircle(cx, cz, radius, colliders, channel);
    if (!hit) break;
    const closestX = clamp(cx, hit.minX, hit.maxX);
    const closestZ = clamp(cz, hit.minZ, hit.maxZ);
    let px = cx - closestX;
    let pz = cz - closestZ;
    const pl = Math.hypot(px, pz);
    if (pl < 1e-5) {
      const left = cx - hit.minX;
      const right = hit.maxX - cx;
      const north = cz - hit.minZ;
      const south = hit.maxZ - cz;
      const m = Math.min(left, right, north, south);
      if (m === left) cx = hit.minX - radius - 0.01;
      else if (m === right) cx = hit.maxX + radius + 0.01;
      else if (m === north) cz = hit.minZ - radius - 0.01;
      else cz = hit.maxZ + radius + 0.01;
    } else {
      const need = radius - pl + 0.01;
      cx += (px / pl) * need;
      cz += (pz / pl) * need;
    }
  }
  return { x: cx, z: cz };
}

export function tryMove(x, z, dx, dz, radius, colliders, channel, bounds) {
  const dist = Math.hypot(dx, dz);
  const steps = Math.max(1, Math.ceil(dist / 0.25));
  let cx = x;
  let cz = z;
  for (let i = 0; i < steps; i++) {
    const step = slideOnce(cx, cz, dx / steps, dz / steps, radius, colliders, channel);
    cx = step.x;
    cz = step.z;
  }
  const free = depenetrate(cx, cz, radius, colliders, channel);
  if (!bounds) return free;
  return {
    x: clamp(free.x, bounds.minX, bounds.maxX),
    z: clamp(free.z, bounds.minZ, bounds.maxZ),
  };
}

export function raySphere(ox, oy, oz, dx, dy, dz, cx, cy, cz, radius) {
  const lx = cx - ox;
  const ly = cy - oy;
  const lz = cz - oz;
  const tca = lx * dx + ly * dy + lz * dz;
  const d2 = lx * lx + ly * ly + lz * lz - tca * tca;
  const r2 = radius * radius;
  if (d2 > r2) return null;
  const thc = Math.sqrt(Math.max(0, r2 - d2));
  const t0 = tca - thc;
  const t1 = tca + thc;
  if (t0 >= 0) return t0;
  if (t1 >= 0) return t1;
  return null;
}

export function rayAabb(ox, oy, oz, dx, dy, dz, box, maxT) {
  let tmin = 0;
  let tmax = maxT;
  const slabs = [
    [ox, dx, box.minX, box.maxX],
    [oy, dy, box.minY, box.maxY],
    [oz, dz, box.minZ, box.maxZ],
  ];
  for (const [o, d, mn, mx] of slabs) {
    if (Math.abs(d) < 1e-8) {
      if (o < mn || o > mx) return null;
      continue;
    }
    let t1 = (mn - o) / d;
    let t2 = (mx - o) / d;
    if (t1 > t2) {
      const s = t1;
      t1 = t2;
      t2 = s;
    }
    if (t1 > tmin) tmin = t1;
    if (t2 < tmax) tmax = t2;
    if (tmax < tmin) return null;
  }
  const t = tmin >= 0 ? tmin : tmax;
  if (t < 0 || t > maxT) return null;
  return t;
}

export function rayWorld(ox, oy, oz, dx, dy, dz, maxT, colliders) {
  let best = null;
  let bestT = maxT;
  for (const c of colliders) {
    if (c.noShoot) continue;
    const t = rayAabb(ox, oy, oz, dx, dy, dz, c, bestT);
    if (t != null && t < bestT) {
      bestT = t;
      best = {
        t,
        collider: c,
        x: ox + dx * t,
        y: oy + dy * t,
        z: oz + dz * t,
      };
    }
  }
  return best;
}

export function syncExposure(enemy, channel) {
  if (!enemy.alive) {
    return { ...enemy, visible: true, exposed: false, hittable: false };
  }
  if (!enemy.cloaked) {
    const exposed = channel === "STATIC";
    return { ...enemy, visible: true, exposed, hittable: true };
  }
  const visible = channel === "STATIC" || enemy.reveal > 0;
  return { ...enemy, visible, exposed: visible, hittable: visible };
}

export function tickReveal(enemy, dt, channel) {
  if (!enemy.cloaked || !enemy.alive) return syncExposure(enemy, channel);
  let reveal = enemy.reveal || 0;
  if (channel === "STATIC") reveal = TUNING.revealDuration;
  else reveal = Math.max(0, reveal - dt);
  return syncExposure({ ...enemy, reveal }, channel);
}

export function resolveShot(origin, dir, range, enemies, colliders) {
  let bestT = range;
  let hit = null;
  for (const e of enemies) {
    if (!e.alive || !e.hittable) continue;
    const spheres = [
      // Fitted to the Phase 3 kit: helmet crown ~1.84, chest across the body sphere.
      { y: (e.y || 0) + 1.62, r: 0.26, weak: true },
      { y: (e.y || 0) + 0.98, r: 0.46, weak: false },
    ];
    for (const s of spheres) {
      const t = raySphere(origin.x, origin.y, origin.z, dir.x, dir.y, dir.z, e.x, s.y, e.z, s.r);
      if (t != null && t > 0.02 && t < bestT) {
        bestT = t;
        hit = {
          kind: "enemy",
          id: e.id,
          t,
          weak: s.weak,
          x: origin.x + dir.x * t,
          y: origin.y + dir.y * t,
          z: origin.z + dir.z * t,
        };
      }
    }
  }
  const world = rayWorld(origin.x, origin.y, origin.z, dir.x, dir.y, dir.z, bestT, colliders);
  if (world && world.t < bestT) {
    return {
      kind: "world",
      t: world.t,
      x: world.x,
      y: world.y,
      z: world.z,
      id: world.collider.id,
    };
  }
  return hit;
}

export function noteHit(enemy, time) {
  const burst = enemy.lastHitAt != null && time - enemy.lastHitAt <= TUNING.burstWindow;
  return { enemy: { ...enemy, lastHitAt: time }, burst };
}

export function applyEnemyHit(enemy, { weak, damage }) {
  if (!enemy.alive || !enemy.hittable || damage <= 0) {
    return { enemy, dealt: 0, killed: false };
  }
  let dealt = damage;
  if (weak && enemy.exposed) dealt *= TUNING.weakMult;
  const hp = enemy.hp - dealt;
  const killed = hp <= 0;
  return {
    enemy: {
      ...enemy,
      hp: killed ? 0 : hp,
      hits: (enemy.hits || 0) + 1,
      alive: !killed,
      hittable: !killed && enemy.hittable,
    },
    dealt,
    killed,
  };
}

export function spreadDirs(forward, right, up, pellets, spread, rng) {
  const out = [];
  const count = Math.max(0, pellets | 0);
  for (let i = 0; i < count; i++) {
    const a = count === 1 && spread === 0 ? 0 : (rng() * 2 - 1) * spread;
    const b = count === 1 && spread === 0 ? 0 : (rng() * 2 - 1) * spread;
    const x = forward.x + right.x * a + up.x * b;
    const y = forward.y + right.y * a + up.y * b;
    const z = forward.z + right.z * a + up.z * b;
    const len = Math.hypot(x, y, z) || 1;
    out.push({ x: x / len, y: y / len, z: z / len });
  }
  return out;
}

export function segmentClear(ax, ay, az, bx, by, bz, colliders) {
  const dx = bx - ax;
  const dy = by - ay;
  const dz = bz - az;
  const len = Math.hypot(dx, dy, dz);
  if (len < 0.001) return true;
  const hit = rayWorld(ax, ay, az, dx / len, dy / len, dz / len, Math.max(0, len - 0.25), colliders);
  return hit == null;
}

export function applyPickup(state, pickup) {
  if (!pickup || pickup.taken) return { state, pickup, took: false };
  if (pickup.kind === "signal") {
    return {
      state: grantSignal(state, pickup.amount),
      pickup: { ...pickup, taken: true },
      took: true,
    };
  }
  if (pickup.kind === "health") {
    if (state.health >= TUNING.healthMax) return { state, pickup, took: false };
    return {
      state: grantHealth(state, pickup.amount),
      pickup: { ...pickup, taken: true },
      took: true,
    };
  }
  return { state, pickup, took: false };
}

export function pickupVisible(pickup, channel) {
  if (!pickup || pickup.taken) return false;
  if (!pickup.cloaked) return true;
  return channel === "STATIC";
}
