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
  { tier: 1, id: "vest", name: "VEST", blurb: "+2 MAX HP", price: 15, hp: 2, red: 0, pass: 1 },
  { tier: 2, id: "riot", name: "RIOT COAT", blurb: "+4 MAX HP  •  15% CONTACT RED", price: 35, hp: 4, red: 0.15, pass: 1 },
  { tier: 3, id: "plating", name: "SIGNAL PLATING", blurb: "+6 MAX HP  •  25% CONTACT RED", price: 60, hp: 6, red: 0.25, pass: 1 },
  { tier: 4, id: "carbon", name: "CARBON TRENCH", blurb: "+8 MAX HP  •  30% CONTACT RED", price: 80, hp: 8, red: 0.3, pass: 2 },
  { tier: 5, id: "mesh", name: "DIRECTORY MESH", blurb: "+10 MAX HP  •  40% CONTACT RED", price: 130, hp: 10, red: 0.4, pass: 2 },
];

export const WEAPONS = [
  { tier: 1, id: "rapid", name: "RAPID REMOTE", blurb: "FIRE RATE UP", price: 15, pass: 1 },
  { tier: 2, id: "spread", name: "SPREAD REMOTE", blurb: "3-WAY SPREAD", price: 35, pass: 1 },
  { tier: 3, id: "cannon", name: "SATELLITE CANNON", blurb: "RANGE  •  TWIN BOLTS", price: 60, pass: 1 },
  { tier: 4, id: "quad", name: "QUAD REMOTE", blurb: "4-WAY  •  FASTER SPREAD", price: 80, pass: 2 },
  { tier: 5, id: "loop", name: "LOOP CANNON", blurb: "DAMAGE + RANGE", price: 130, pass: 2 },
];

export const CHARACTER = [
  { id: "sneakers", name: "COURT SNEAKERS", blurb: "MOVE SPEED UP", price: 12, pass: 1 },
  { id: "1up", name: "EXTRA LIFE", blurb: "+1 LIFE  (MAX +2)", price: 25, pass: 1 },
  { id: "signal", name: "BRIGHTER SIGNAL", blurb: "XP +20%", price: 40, pass: 1 },
];

export const CHARACTER2 = [
  { id: "1up2", name: "EXTRA LIFE", blurb: "+1 LIFE  (MAX +2 THIS PASS)", price: 40, pass: 2 },
  { id: "dash", name: "SIGNAL DASH", blurb: "I-FRAME DASH  •  SHIFT / LB", price: 70, pass: 2 },
  { id: "signal", name: "BRIGHTER SIGNAL", blurb: "XP +20%", price: 40, pass: 1 },
];

export function emptyGear() {
  return { armor: 0, weapon: 0, sneakers: false, extraLives: 0, passLives: 0, signal: false, dash: false };
}

export function armorByTier(tier) {
  return ARMOR.find((a) => a.tier === tier) || null;
}

export function weaponByTier(tier) {
  return WEAPONS.find((w) => w.tier === tier) || null;
}

export function shopCols(pass, gear) {
  const p = Math.max(1, pass || 1);
  const armor = ARMOR.filter((a) => a.pass === (p >= 2 ? 2 : 1));
  const weapons = WEAPONS.filter((w) => w.pass === (p >= 2 ? 2 : 1));
  let character = p >= 2 ? CHARACTER2.slice() : CHARACTER.slice();
  if (p >= 2 && gear && !gear.sneakers) {
    character[2] = CHARACTER[0];
  }
  return [armor, weapons, character];
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

/** Scale with level, equipped weapon tier (0–5), and mall pass. */
export function rankMult(level, weaponTier = 0, pass = 1) {
  const n = Math.max(1, level) - 1;
  const w = Math.max(0, weaponTier);
  const p = Math.max(1, pass) - 1;
  return {
    hp: 1 + 0.15 * n + 0.22 * w + 0.85 * p,
    speed: Math.min(1.55, 1 + 0.05 * n + 0.04 * w + 0.12 * p),
    extra: Math.floor(n / 2) + w + 2 * p,
    elite: level >= 3 || p >= 1,
    extraShot: level >= 5 || p >= 1,
    elites: p >= 1 ? 1 + Math.min(2, Math.floor(p / 2)) : level >= 3 ? 1 : 0,
    shots: p >= 1 ? 1 + Math.min(2, p) : level >= 5 ? 1 : 0,
    resist: w >= 3,
  };
}

export function armorBonus(tier) {
  if (tier <= 0) return { hp: 0, red: 0 };
  const a = armorByTier(tier);
  return a ? { hp: a.hp, red: a.red } : { hp: 0, red: 0 };
}

export function playerSkin(gear) {
  const a = gear.armor > 0;
  const w = gear.weapon > 0;
  if (gear.armor >= 5 || gear.weapon >= 5) return "full";
  if (gear.weapon >= 4) return "full";
  if (gear.armor >= 4 && w) return "full";
  if (a && w) return "full";
  if (a) return "armor";
  if (w) return "weapon";
  return "base";
}

/** Brighter cyan bezel tint for Directory mesh / Loop cannon. */
export function skinTint(gear) {
  if (gear.armor >= 5 || gear.weapon >= 5) return "mesh";
  return null;
}

export function roomPrimary(roomId) {
  if (roomId === "food") return "rusher";
  if (roomId === "fashions") return "mannequin";
  if (roomId === "radio") return "shotgun";
  if (roomId === "service") return "security";
  return "grunt";
}

/** 70% 1–3 tokens (pass 2+ +1), 15% nothing, 10% health, 5% 1UP. */
export function rollDrop(pass = 1) {
  const r = Math.random();
  if (r < 0.7) return { kind: "token", n: 1 + ((Math.random() * 3) | 0) + (pass >= 2 ? 1 : 0) };
  if (r < 0.85) return null;
  if (r < 0.95) return { kind: "health", n: 1 };
  return { kind: "life", n: 1 };
}

export function kioskPos(arena) {
  return { x: arena.x + arena.s / 2, y: arena.y + arena.s * 0.72, r: 22 };
}

/** Satellite / loop keep the look. Spread and rapid stay satisfying. Not a room-delete gun. */
export function gunSpec(tier, level) {
  const lv = Math.pow(0.97, Math.max(1, level) - 1);
  if (tier >= 5) return { rate: 0.12 * lv, angles: [-0.08, 0.08], dmg: 2, spd: 700, life: 1.05 };
  if (tier >= 4) return { rate: 0.076 * lv, angles: [-0.38, -0.13, 0.13, 0.38], dmg: 1, spd: 600, life: 0.78 };
  if (tier >= 3) return { rate: 0.1 * lv, angles: [-0.1, 0.1], dmg: 1, spd: 640, life: 0.9 };
  if (tier >= 2) return { rate: 0.085 * lv, angles: [-0.22, 0, 0.22], dmg: 1, spd: 560, life: 0.7 };
  if (tier >= 1) return { rate: 0.063 * lv, angles: [0], dmg: 1, spd: 560, life: 0.7 };
  return { rate: 0.09 * lv, angles: [0], dmg: 1, spd: 560, life: 0.7 };
}
