/** Phase 1 court. Gameplay collision and encounters live here so tests and the mesh share one layout. */

export const PHASE = 1;

export const BOUNDS = { minX: -15.55, maxX: 15.55, minZ: -13.55, maxZ: 13.55 };

export const PLAYER_SPAWN = { x: 0, y: 1.58, z: 10.55, yaw: 0, pitch: 0 };

export const ENEMIES = [
  { id: "north-l", x: -10.6, z: -8.2, cloak: false, hp: 72 },
  { id: "north-r", x: 6.4, z: -8.6, cloak: false, hp: 72 },
  { id: "west", x: -11.2, z: 2.4, cloak: false, hp: 78 },
  { id: "east-court", x: 6.2, z: 4.6, cloak: false, hp: 66 },
  { id: "fountain", x: 0, z: -0.15, cloak: true, hp: 90 },
  { id: "alley", x: 13.65, z: -2.4, cloak: false, hp: 78 },
];

export const PICKUPS = [
  { id: "signal-cache", kind: "signal", x: 13.7, z: 1.6, amount: 48, cloaked: true },
  { id: "aid-kit", kind: "health", x: 13.7, z: -6.4, amount: 36, cloaked: false },
];

export const LEASHES = {
  alley: { minX: 12.15, maxX: 15.35, minZ: -11.6, maxZ: 3.5 },
};

export const RESERVED_CONTENT = [
  { id: "visor-priest", phase: 2, kind: "boss" },
  { id: "remote-hijack", phase: 2, kind: "system" },
  { id: "extra-rooms", phase: 2, kind: "map" },
  { id: "directory", phase: 3, kind: "boss" },
  { id: "upgrades", phase: 3, kind: "system" },
  { id: "broadcast-echo", phase: 3, kind: "system" },
];

function box(id, mat, x, y, z, w, h, d, extra = {}) {
  return { id, mat, x, y, z, w, h, d, ...extra };
}

const WALL_H = 7.2;

export const BLOCKS = [
  box("floor", "floor", 0, -0.2, 0, 34, 0.4, 30, { floor: true }),
  box("ceiling", "ceiling", 0, 7.35, 0, 34, 0.3, 30),
  box("wall-n", "wall", 0, WALL_H / 2, -14.3, 33.2, WALL_H, 0.6),
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

export function courtColliders() {
  return BLOCKS.map(toCollider);
}

export function createEnemies() {
  return ENEMIES.map((e, i) => ({
    id: e.id,
    x: e.x,
    y: 0,
    z: e.z,
    yaw: 0,
    hp: e.hp,
    maxHp: e.hp,
    alive: true,
    cloaked: !!e.cloak,
    reveal: 0,
    visible: !e.cloak,
    exposed: false,
    hittable: !e.cloak,
    hits: 0,
    lastHitAt: null,
    aggro: !e.cloak,
    cooldown: 0.95 + (i % 4) * 0.28,
    windup: 0,
    strafeSign: i % 2 === 0 ? 1 : -1,
    strafeT: 0.8 + (i % 3) * 0.25,
    hurt: 0,
  }));
}

export function createPickups() {
  return PICKUPS.map((p) => ({ ...p, taken: false }));
}
