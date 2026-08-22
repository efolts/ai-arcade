export const LEVEL_CAP = 30;
export const BASE_MAX_HP = 3;

/** 29 steps (LV1→30). 1–10 stay close to the old curve; 11–30 ramp so they stay earned. */
const XP_STEPS = [
  50, 70, 100, 130, 160, 190, 220, 250, 280, 340, 400, 470, 550, 640, 740, 850, 980, 1120, 1280, 1460, 1660, 1880, 2120,
  2380, 2660, 2960, 3280, 3620, 4000,
];

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
  { id: "static", name: "STATIC FIELD", blurb: "PULSE NEARBY BOTS  •  Q / RB", price: 85, pass: 2 },
  { id: "recall", name: "REMOTE RECALL", blurb: "MAGNET TOKENS  •  F / X", price: 65, pass: 2 },
  { id: "wind", name: "SECOND WIND", blurb: "SURVIVE ONE LETHAL HIT / LIFE", price: 90, pass: 2 },
];

/** Repeatable token sinks. Rank costs rise; soft-capped. */
export const STATS = [
  { id: "hp+", rankKey: "hpUp", name: "MAX HP", blurb: "+1 MAX HP / RANK", prices: [22, 38, 58, 85, 120], max: 5 },
  { id: "move+", rankKey: "moveUp", name: "COURT GREASE", blurb: "MOVE +6% / RANK", prices: [18, 32, 50, 75], max: 4 },
  { id: "rate+", rankKey: "rateUp", name: "SYNC RATE", blurb: "FIRE RATE +6% / RANK", prices: [24, 40, 62, 90], max: 4 },
  { id: "luck+", rankKey: "luckUp", name: "TOKEN FIND", blurb: "RICHER TKN DROPS", prices: [16, 28, 44, 70], max: 4 },
];

export function emptyGear() {
  return {
    armor: 0,
    weapon: 0,
    sneakers: false,
    extraLives: 0,
    passLives: 0,
    signal: false,
    dash: false,
    static: false,
    recall: false,
    wind: false,
    hpUp: 0,
    moveUp: 0,
    rateUp: 0,
    luckUp: 0,
  };
}

export function armorByTier(tier) {
  return ARMOR.find((a) => a.tier === tier) || null;
}

export function weaponByTier(tier) {
  return WEAPONS.find((w) => w.tier === tier) || null;
}

export function isStat(item) {
  return !!(item && item.rankKey);
}

export function statRank(gear, item) {
  if (!item || !item.rankKey) return 0;
  return Math.max(0, (gear && gear[item.rankKey]) || 0);
}

export function statPrice(item, rank) {
  if (!item || !item.prices) return item && item.price ? item.price : 0;
  return item.prices[Math.min(rank, item.prices.length - 1)] || item.prices[item.prices.length - 1];
}

export function shopCols(pass, gear) {
  const p = Math.max(1, pass || 1);
  const g = gear || emptyGear();
  const armor = ARMOR.filter((a) => a.pass === (p >= 2 ? 2 : 1));
  const weapons = WEAPONS.filter((w) => w.pass === (p >= 2 ? 2 : 1));
  let character = p >= 2 ? CHARACTER2.slice() : CHARACTER.slice();
  if (p >= 2 && !g.sneakers) {
    character = [CHARACTER2[0], CHARACTER2[1], CHARACTER[0], CHARACTER2[2], CHARACTER2[3]];
  }
  return [armor, weapons, character, STATS.slice()];
}

export function xpToNext(level) {
  if (level >= LEVEL_CAP) return 0;
  return XP_STEPS[level - 1] || XP_STEPS[XP_STEPS.length - 1];
}

export function addXp(prog, raw) {
  const gained = Math.floor(raw * (prog.gear && prog.gear.signal ? 1.2 : 1));
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

/** HP from levels: +1 through LV10 (loop 1 unchanged), then +1 every 2 levels so LV30 is not 32 base HP. */
export function levelHpBonus(level) {
  const lv = Math.max(1, level || 1);
  if (lv <= 10) return lv - 1;
  return 9 + Math.floor((lv - 10) / 2);
}

/** Soften post-10 so LV30 is not 3× LV10; pass still adds a hard step. */
function rankLevel(level) {
  const raw = Math.max(1, level) - 1;
  if (raw <= 9) return raw;
  return 9 + (raw - 9) * 0.32;
}

/** Scale with level, equipped weapon tier (0–5), and mall pass. */
export function rankMult(level, weaponTier = 0, pass = 1) {
  const n = rankLevel(level);
  const w = Math.max(0, weaponTier);
  const p = Math.max(1, pass) - 1;
  const extraCap = p >= 1 ? 15 : 10;
  return {
    hp: 1 + 0.15 * n + 0.22 * w + 0.85 * p,
    speed: Math.min(p >= 1 ? 1.62 : 1.55, 1 + 0.05 * n + 0.04 * w + 0.12 * p),
    extra: Math.min(extraCap, Math.floor(n / 2) + w + 2 * p),
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

/** 70% 1–3 tokens (pass 2+ +1), 15% nothing, 10% health, 5% 1UP. Luck ranks fatten tokens. */
export function rollDrop(pass = 1, luck = 0) {
  const r = Math.random();
  const tokenP = Math.min(0.86, 0.7 + luck * 0.04);
  if (r < tokenP) return { kind: "token", n: 1 + ((Math.random() * 3) | 0) + (pass >= 2 ? 1 : 0) + (luck >= 3 ? 1 : 0) };
  if (r < tokenP + 0.15) return null;
  if (r < tokenP + 0.25) return { kind: "health", n: 1 };
  return { kind: "life", n: 1 };
}

export function kioskPos(arena) {
  return { x: arena.x + arena.s / 2, y: arena.y + arena.s * 0.72, r: 22 };
}

/** Satellite / loop keep the look. Post-10 fire-rate scaling is damped so LV30 is not a hose. */
export function gunSpec(tier, level) {
  const raw = Math.max(1, level) - 1;
  const scaled = raw <= 9 ? raw : 9 + (raw - 9) * 0.35;
  const lv = Math.pow(0.97, scaled);
  if (tier >= 5) return { rate: 0.12 * lv, angles: [-0.08, 0.08], dmg: 2, spd: 700, life: 1.05 };
  if (tier >= 4) return { rate: 0.076 * lv, angles: [-0.38, -0.13, 0.13, 0.38], dmg: 1, spd: 600, life: 0.78 };
  if (tier >= 3) return { rate: 0.1 * lv, angles: [-0.1, 0.1], dmg: 1, spd: 640, life: 0.9 };
  if (tier >= 2) return { rate: 0.085 * lv, angles: [-0.22, 0, 0.22], dmg: 1, spd: 560, life: 0.7 };
  if (tier >= 1) return { rate: 0.063 * lv, angles: [0], dmg: 1, spd: 560, life: 0.7 };
  return { rate: 0.09 * lv, angles: [0], dmg: 1, spd: 560, life: 0.7 };
}
