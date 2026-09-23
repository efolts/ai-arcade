/** One mall run: court, radio wing, service wing, Directory. PHASE stays the art generation. Broadcast Echo stays reserved. */

export const PHASE = 3;

export const BOUNDS = { minX: -15.55, maxX: 15.55, minZ: -53.45, maxZ: 13.55 };

export const PLAYER_SPAWN = { x: 0, y: 1.58, z: 10.55, yaw: 0, pitch: 0 };

export const CHAPEL_ENTRY = { x: 0, y: 1.58, z: -16.35, yaw: 0, pitch: 0 };

export const SERVICE_ENTRY = { x: 0, y: 1.58, z: -30.2, yaw: 0, pitch: 0 };

export const DIRECTORY_ENTRY = { x: 0, y: 1.58, z: -42.45, yaw: 0, pitch: 0 };

export const VEIL_Z = -24.2;
export const VEIL_CROSS_Z = VEIL_Z - 0.35;

export const DIRECTORY_GATE_Z = -47.55;
export const DIRECTORY_CROSS_Z = DIRECTORY_GATE_Z - 0.35;

export const PRIEST_SPAWN = { x: 0, y: 0, z: -26.55 };

export const DIRECTORY_SPAWN = { x: 0, y: 0, z: -50.15 };

export const HIJACK_SPAWNS = [
  { id: "pa-horn", x: -7.05, y: 2.42, z: -17.35 },
  { id: "sprinkler", x: 6.35, y: 2.65, z: -32.55 },
];

export const ENEMIES = [
  { id: "north-l", x: -10.6, z: -8.2, cloak: false, hp: 72 },
  { id: "north-r", x: 6.4, z: -8.6, cloak: false, hp: 72 },
  { id: "west", x: -11.2, z: 2.4, cloak: false, hp: 78 },
  { id: "east-court", x: 6.2, z: 4.6, cloak: false, hp: 66 },
  { id: "fountain", x: 0, z: -0.15, cloak: true, hp: 90 },
  { id: "alley", x: 13.65, z: -2.4, cloak: false, hp: 78 },
];

export const CHAPEL_ENEMIES = [
  { id: "choir-l", x: -6.2, z: -19.15, cloak: false, hp: 56 },
  { id: "choir-r", x: 6.2, z: -19.35, cloak: false, hp: 56 },
  { id: "choir-ghost", x: 0.15, z: -22.25, cloak: true, hp: 68 },
];

export const SERVICE_ENEMIES = [
  { id: "service-l", x: -4.15, z: -33.55, cloak: false, hp: 70 },
  { id: "service-r", x: 4.85, z: -34.15, cloak: false, hp: 70 },
  { id: "service-ghost", x: 0.55, z: -37.35, cloak: true, hp: 84 },
];

export const PICKUPS = [
  { id: "signal-cache", kind: "signal", x: 13.7, z: 1.6, amount: 48, cloaked: true },
  { id: "aid-kit", kind: "health", x: 13.7, z: -6.4, amount: 36, cloaked: false },
  { id: "pad-fountain", kind: "battery", pad: true, x: 3.72, z: 0.45, cloaked: false },
  { id: "pad-food", kind: "battery", pad: true, x: -10.2, z: 7.5, cloaked: false },
  { id: "pad-door", kind: "battery", pad: true, x: 0, z: -10.05, cloaked: false },
  { id: "pad-aisle", kind: "battery", pad: true, x: 0, z: -17.15, cloaked: false },
  { id: "pad-pew", kind: "battery", pad: true, x: 5.4, z: -22.7, cloaked: false },
  { id: "pad-altar", kind: "battery", pad: true, x: -4.2, z: -23.05, cloaked: false },
  { id: "pad-service", kind: "battery", pad: true, x: 0, z: -31.15, cloaked: false },
  { id: "pad-rack", kind: "battery", pad: true, x: -2.55, z: -38.55, cloaked: false },
  { id: "pad-listing", kind: "battery", pad: true, x: -4.7, z: -43.7, cloaked: false },
  { id: "pad-index", kind: "battery", pad: true, x: 4.55, z: -45.25, cloaked: false },
];

const CHAPEL_LEASH = { minX: -7.2, maxX: 7.2, minZ: -23.35, maxZ: -15.9 };
const SERVICE_LEASH = { minX: -6.4, maxX: 6.4, minZ: -39.7, maxZ: -30.5 };

export const LEASHES = {
  alley: { minX: 12.15, maxX: 15.35, minZ: -11.6, maxZ: 3.5 },
  "choir-l": CHAPEL_LEASH,
  "choir-r": CHAPEL_LEASH,
  "choir-ghost": CHAPEL_LEASH,
  "service-l": SERVICE_LEASH,
  "service-r": SERVICE_LEASH,
  "service-ghost": SERVICE_LEASH,
};

export const RESERVED_CONTENT = [
  { id: "arsenal", phase: 4, kind: "system" },
  { id: "upgrades", phase: 5, kind: "system" },
  { id: "wings", phase: 6, kind: "level" },
  { id: "directory", phase: 6, kind: "boss" },
  { id: "broadcast-echo", phase: 6, kind: "later" },
];

function box(id, mat, x, y, z, w, h, d, extra = {}) {
  return { id, mat, x, y, z, w, h, d, ...extra };
}

const WALL_H = 7.2;

export const BLOCKS = [
  box("floor", "floor", 0, -0.2, 0, 34, 0.4, 30, { floor: true }),
  box("ceiling", "ceiling", 0, 7.35, 0, 34, 0.3, 30),
  box("wall-n-l", "wall", -9.23, WALL_H / 2, -14.3, 14.74, WALL_H, 0.6),
  box("wall-n-r", "wall", 9.23, WALL_H / 2, -14.3, 14.74, WALL_H, 0.6),
  box("chapel-door", "trim", 0, WALL_H / 2, -14.3, 3.76, WALL_H, 0.66, { door: true }),
  box("wall-s", "wall", 0, WALL_H / 2, 14.3, 33.2, WALL_H, 0.6),
  box("wall-w", "wall", -16.3, WALL_H / 2, 0, 0.6, WALL_H, 29.2),
  box("wall-e", "wall", 16.3, WALL_H / 2, 0, 0.6, WALL_H, 29.2),

  box("pillar-nw", "trim", -8, 3.6, -6, 0.75, 7.2, 0.75),
  box("pillar-ne", "trim", 8, 3.6, -6, 0.75, 7.2, 0.75),
  box("pillar-sw", "trim", -8, 3.6, 6, 0.75, 7.2, 0.75),
  box("pillar-se", "trim", 8, 3.6, 5.2, 0.75, 7.2, 0.75),

  box("mezz", "trim", 0, 4.2, -12.15, 32.2, 0.28, 3.5),

  box("fountain-n", "trim", 0, 0.4, -2.2, 4.5, 0.8, 0.5),
  box("fountain-s-l", "trim", -1.75, 0.4, 2.05, 1.7, 0.8, 0.5),
  box("fountain-s-r", "trim", 1.75, 0.4, 2.05, 1.7, 0.8, 0.5),
  box("fountain-w", "trim", -2.25, 0.4, -0.05, 0.5, 0.8, 3.55),
  box("fountain-e", "trim", 2.25, 0.4, -0.05, 0.5, 0.8, 3.55),

  box("partition-n", "wall", 11.3, 1.8, -4.7, 1.15, 3.6, 7),
  box("partition-s", "wall", 11.3, 1.8, 2.7, 1.15, 3.6, 2.9),
  box("phase-gate", "hazard", 11.35, 1.8, 0.025, 0.9, 3.6, 2.46, { phaseGate: true }),
  box("alley-cap", "wall", 13.95, 1.8, 4.35, 4.7, 3.6, 0.55),

  box("pier-a", "trim", -11.2, 1.7, -12.15, 0.4, 3.4, 0.7),
  box("pier-b", "trim", -3.4, 1.7, -12.15, 0.4, 3.4, 0.7),
  box("pier-c", "trim", 4.2, 1.7, -12.15, 0.4, 3.4, 0.7),

  box("food-counter", "trim", -10.2, 0.55, 9.15, 6.2, 1.1, 1.25),
  box("booth-desk", "trim", 9.4, 0.55, 9.35, 5.2, 1.1, 1.15),
  box("kiosk", "metal", -3.35, 0.75, 7.35, 0.85, 1.5, 0.7),
  box("bench-w", "wood", -4.4, 0.32, 3.35, 1.7, 0.5, 0.48),
  box("bench-e", "wood", 4.15, 0.32, -3.15, 1.7, 0.5, 0.48),

  box("chapel-floor", "floor", 0, -0.2, -21.75, 16.7, 0.4, 14.7, { floor: true }),
  box("chapel-ceiling", "ceiling", 0, 7.35, -21.75, 16.7, 0.3, 14.7),
  box("chapel-w", "wall", -8.35, WALL_H / 2, -21.75, 0.5, WALL_H, 14.9),
  box("chapel-e", "wall", 8.35, WALL_H / 2, -21.75, 0.5, WALL_H, 14.9),
  box("chapel-n-l", "wall", -5.55, WALL_H / 2, -29.05, 6.1, WALL_H, 0.5),
  box("chapel-n-r", "wall", 5.55, WALL_H / 2, -29.05, 6.1, WALL_H, 0.5),
  box("service-door", "trim", 0, WALL_H / 2, -29.05, 5, WALL_H, 0.66, { serviceDoor: true }),

  box("service-floor", "floor", 0, -0.2, -35.2, 16.7, 0.4, 11.7, { floor: true }),
  box("service-ceiling", "ceiling", 0, 7.35, -35.2, 16.7, 0.3, 11.7),
  box("service-w", "wall", -8.35, WALL_H / 2, -35.15, 0.5, WALL_H, 12.3),
  box("service-e", "wall", 8.35, WALL_H / 2, -35.15, 0.5, WALL_H, 12.3),
  box("service-n-l", "wall", -5.24, WALL_H / 2, -41.2, 6.72, WALL_H, 0.5),
  box("service-n-r", "wall", 5.24, WALL_H / 2, -41.2, 6.72, WALL_H, 0.5),
  box("directory-door", "trim", 0, WALL_H / 2, -41.2, 3.76, WALL_H, 0.66, { directoryDoor: true }),
  box("service-rack-w", "metal", -6.35, 1.15, -35.7, 1.45, 2.3, 2.5),
  box("service-rack-e", "metal", 6.35, 1.15, -37.9, 1.35, 2.3, 2.2),
  box("service-cart", "trim", -6.15, 0.48, -31.45, 1.45, 0.96, 0.85),
  box("service-locker", "metal", 6.45, 0.7, -31.05, 1.5, 1.4, 0.75),
  box("service-pipe", "metal", 0, 6.55, -35.2, 0.22, 0.22, 8.5),

  box("directory-floor", "floor", 0, -0.2, -47, 16.7, 0.4, 11.2, { floor: true }),
  box("directory-ceiling", "ceiling", 0, 7.35, -47, 16.7, 0.3, 11.2),
  box("directory-w", "wall", -8.35, WALL_H / 2, -47, 0.5, WALL_H, 11.8),
  box("directory-e", "wall", 8.35, WALL_H / 2, -47, 0.5, WALL_H, 11.8),
  box("directory-n", "wall", 0, WALL_H / 2, -52.7, 17.2, WALL_H, 0.5),
  box("dir-gate-l", "trim", -4.7, 1.8, DIRECTORY_GATE_Z, 6.7, 3.6, 0.46),
  box("dir-gate-r", "trim", 4.7, 1.8, DIRECTORY_GATE_Z, 6.7, 3.6, 0.46),
  box("directory-gate", "trim", 0, 1.8, DIRECTORY_GATE_Z, 3.3, 3.6, 0.4, { phaseGate: true, directoryVeil: true }),
  box("dir-pier-l", "trim", -6.35, 1.55, -50.35, 0.5, 3.1, 0.5),
  box("dir-pier-r", "trim", 6.35, 1.55, -50.35, 0.5, 3.1, 0.5),
  box("directory-plinth", "trim", 0, 0.4, -50.15, 1.55, 0.8, 1.15),

  box("pew-1", "wood", -3.15, 0.48, -18.2, 3.05, 0.96, 0.58),
  box("pew-2", "wood", -3.15, 0.48, -20.45, 3.05, 0.96, 0.58),
  box("pew-3", "wood", 3.15, 0.48, -18.2, 3.05, 0.96, 0.58),
  box("pew-4", "wood", 3.15, 0.48, -20.45, 3.05, 0.96, 0.58),

  box("altar-l", "trim", -4.85, 1.8, VEIL_Z, 6.5, 3.6, 0.48),
  box("altar-r", "trim", 4.85, 1.8, VEIL_Z, 6.5, 3.6, 0.48),
  box("rite-veil", "trim", 0, 1.8, VEIL_Z, 3.36, 3.6, 0.42, { phaseGate: true, veil: true }),
  box("altar", "brass", 0, 0.55, -27.55, 2.4, 1.1, 0.7),
];

export function toCollider(block) {
  return {
    id: block.id,
    minX: block.x - block.w / 2,
    maxX: block.x + block.w / 2,
    minY: block.y - block.h / 2,
    maxY: block.y + block.h / 2,
    minZ: block.z - block.d / 2,
    maxZ: block.z + block.d / 2,
    phaseGate: !!block.phaseGate,
    floor: !!block.floor,
  };
}

export function activeColliders({
  doorOpen = false,
  veilUp = false,
  serviceOpen = false,
  directoryOpen = false,
  directoryVeilUp = false,
} = {}) {
  return BLOCKS.filter((block) => {
    if (block.door && doorOpen) return false;
    if (block.serviceDoor && serviceOpen) return false;
    if (block.directoryDoor && directoryOpen) return false;
    if (block.veil && !veilUp) return false;
    if (block.directoryVeil && !directoryVeilUp) return false;
    return true;
  }).map(toCollider);
}

export function courtColliders() {
  return activeColliders();
}

function spawnEnemy(enemy, index, room) {
  return {
    id: enemy.id,
    x: enemy.x,
    y: 0,
    z: enemy.z,
    yaw: 0,
    hp: enemy.hp,
    maxHp: enemy.hp,
    alive: true,
    cloaked: !!enemy.cloak,
    reveal: 0,
    visible: !enemy.cloak,
    exposed: false,
    hittable: !enemy.cloak,
    hits: 0,
    lastHitAt: null,
    aggro: room === "court" && !enemy.cloak,
    cooldown:
      room === "court" ? 0.95 + (index % 4) * 0.28 : room === "chapel" ? 1.35 + (index % 3) * 0.25 : 1.2 + (index % 3) * 0.25,
    windup: 0,
    strafeSign: index % 2 === 0 ? 1 : -1,
    strafeT: 0.8 + (index % 3) * 0.25,
    hurt: 0,
    stun: 0,
    room,
    dormant: room !== "court",
  };
}

export function createEnemies() {
  return ENEMIES.map((enemy, index) => spawnEnemy(enemy, index, "court"));
}

export function createChapelEnemies() {
  return CHAPEL_ENEMIES.map((enemy, index) => spawnEnemy(enemy, index, "chapel"));
}

export function createServiceEnemies() {
  return SERVICE_ENEMIES.map((enemy, index) => spawnEnemy(enemy, index, "service"));
}

export function createPickups() {
  return PICKUPS.map((pickup) => ({ ...pickup, taken: false, respawnAt: null }));
}
