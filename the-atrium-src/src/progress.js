export const LEVEL_CAP = 10;
export const BASE_MAX_HP = 3;

const XP_STEPS = [50, 70, 100, 130, 160, 190, 220, 250, 280];

export const XP_FOR = {
  grunt: 10,
  rusher: 8,
  shotgun: 15,
  security: 25,
  mannequin: 12,
  elite: 20,
  boss: 200,
};

export const ARMOR = [
  { id: "vest", name: "VEST", blurb: "+2 MAX HP", price: 15, hp: 2, red: 0 },
  { id: "riot", name: "RIOT COAT", blurb: "+4 MAX HP  •  15% CONTACT RED", price: 35, hp: 4, red: 0.15 },
  { id: "plating", name: "SIGNAL PLATING", blurb: "+6 MAX HP  •  25% CONTACT RED", price: 60, hp: 6, red: 0.25 },
];

export const WEAPONS = [
  { id: "rapid", name: "RAPID REMOTE", blurb: "FIRE RATE UP", price: 15 },
  { id: "spread", name: "SPREAD REMOTE", blurb: "3-WAY SPREAD", price: 35 },
  { id: "cannon", name: "SATELLITE CANNON", blurb: "DAMAGE + RANGE", price: 60 },
];

export const CHARACTER = [
  { id: "sneakers", name: "COURT SNEAKERS", blurb: "MOVE SPEED UP", price: 12 },
  { id: "1up", name: "EXTRA LIFE", blurb: "+1 LIFE  (MAX +2)", price: 25 },
  { id: "signal", name: "BRIGHTER SIGNAL", blurb: "XP +20%", price: 40 },
];

export function emptyGear() {
  return { armor: 0, weapon: 0, sneakers: false, extraLives: 0, signal: false };
}

export function xpToNext(level) {
  if (level >= LEVEL_CAP) return 0;
  return XP_STEPS[level - 1] || 280;
}

export function addXp(prog, raw) {
  const gained = Math.floor(raw * (prog.gear.signal ? 1.2 : 1));
  prog.xp += gained;
  let ups = 0;
  while (prog.level < LEVEL_CAP && prog.xp >= xpToNext(prog.level)) {
    prog.xp -= xpToNext(prog.level);
    prog.level += 1;
    ups += 1;
  }
  if (prog.level >= LEVEL_CAP) prog.xp = 0;
  return { gained, ups };
}

export function rankMult(level) {
  const n = Math.max(1, level) - 1;
  return {
    hp: 1 + 0.15 * n,
    speed: Math.min(1.38, 1 + 0.06 * n),
    extra: Math.floor(n / 2),
    elite: level >= 3,
    extraShot: level >= 5,
  };
}

export function armorBonus(tier) {
  if (tier <= 0) return { hp: 0, red: 0 };
  const a = ARMOR[tier - 1];
  return { hp: a.hp, red: a.red };
}

export function playerSkin(gear) {
  const a = gear.armor > 0;
  const w = gear.weapon > 0;
  if (a && w) return "full";
  if (a) return "armor";
  if (w) return "weapon";
  return "base";
}

export function roomPrimary(roomId) {
  if (roomId === "food") return "rusher";
  if (roomId === "fashions") return "mannequin";
  if (roomId === "radio") return "shotgun";
  if (roomId === "service") return "security";
  return "grunt";
}

/** 70% 1–3 tokens, 15% nothing, 10% health, 5% 1UP. */
export function rollDrop() {
  const r = Math.random();
  if (r < 0.7) return { kind: "token", n: 1 + ((Math.random() * 3) | 0) };
  if (r < 0.85) return null;
  if (r < 0.95) return { kind: "health", n: 1 };
  return { kind: "life", n: 1 };
}

export function kioskPos(arena) {
  return { x: arena.x + arena.s / 2, y: arena.y + arena.s * 0.72, r: 22 };
}
