export const HAND_CAP = 10;
export const BOARD_CAP = 7;
export const DECK_SIZE_RULE = 30;
export const START_HP = 30;
export const MANA_CAP = 10;

export const TYPE = {
  UNIT: "unit",
  SIGNAL: "signal",
  RELIC: "relic",
};

export const FACTION = {
  CRT: "crt",
  TESSERA: "tessera",
};

/** Structured effects the engine understands. */
export const FX = {
  DAMAGE: "damage",
  AOE_ENEMIES: "aoe-enemies",
  AOE_ENEMY_UNITS: "aoe-enemy-units",
  DRAW: "draw",
  MANA: "mana",
  GIVE_KEYWORD: "give-keyword",
  BOUNCE: "bounce",
  SILENCE: "silence",
  HEAL_HERO: "heal-hero",
  BUFF_ALL_FRIENDLY: "buff-all-friendly",
  BUFF_RANDOM_FRIENDLY: "buff-random-friendly",
  SUMMON: "summon",
  DAMAGE_ENEMY_HERO: "damage-enemy-hero",
  DAMAGE_RANDOM_ENEMY: "damage-random-enemy",
};

function unit(partial) {
  return {
    type: TYPE.UNIT,
    atk: 0,
    hp: 1,
    keywords: {},
    boot: null,
    shatter: null,
    effect: null,
    text: "",
    token: false,
    art: null,
    plate: "unit",
    ...partial,
    keywords: { ...(partial.keywords || {}) },
  };
}

function signal(partial) {
  return {
    type: TYPE.SIGNAL,
    atk: 0,
    hp: 0,
    keywords: {},
    boot: null,
    shatter: null,
    text: "",
    token: false,
    art: null,
    plate: "signal",
    ...partial,
  };
}

function relic(partial) {
  return {
    type: TYPE.RELIC,
    keywords: {},
    boot: null,
    shatter: null,
    effect: null,
    text: "",
    token: false,
    art: null,
    plate: "relic",
    ...partial,
  };
}

export const CATALOG = {
  mall_rat: unit({
    id: "mall_rat",
    name: "Mall Rat",
    cost: 1,
    faction: FACTION.CRT,
    atk: 1,
    hp: 1,
    keywords: { rush: true },
    text: "Rush.",
    plate: "rat",
  }),
  scanline: unit({
    id: "scanline",
    name: "Scanline",
    cost: 1,
    faction: FACTION.CRT,
    atk: 1,
    hp: 2,
    keywords: { static: true },
    text: "Static.",
    plate: "scan",
  }),
  fountain_guard: unit({
    id: "fountain_guard",
    name: "Fountain Guard",
    cost: 2,
    faction: FACTION.CRT,
    atk: 1,
    hp: 4,
    keywords: { static: true },
    text: "Static.",
    plate: "guard",
  }),
  krcd_intern: unit({
    id: "krcd_intern",
    name: "KRCD Intern",
    cost: 2,
    faction: FACTION.CRT,
    atk: 2,
    hp: 2,
    boot: { kind: FX.DRAW, n: 1 },
    text: "Boot: draw 1.",
    plate: "intern",
  }),
  prize_clerk: unit({
    id: "prize_clerk",
    name: "Prize Clerk",
    cost: 2,
    faction: FACTION.CRT,
    atk: 2,
    hp: 1,
    boot: { kind: FX.MANA, n: 1 },
    text: "Boot: gain 1 mana this turn.",
    plate: "clerk",
  }),
  antenna_kid: unit({
    id: "antenna_kid",
    name: "Antenna Kid",
    cost: 3,
    faction: FACTION.CRT,
    atk: 2,
    hp: 3,
    keywords: { mesh: true },
    text: "Mesh.",
    plate: "antenna",
  }),
  remote_hand: unit({
    id: "remote_hand",
    name: "Remote Hand",
    cost: 3,
    faction: FACTION.CRT,
    atk: 3,
    hp: 2,
    keywords: { rush: true },
    boot: { kind: FX.DAMAGE, n: 2, target: "choose" },
    text: "Boot: deal 2 damage. Rush.",
    art: "remote-hand",
    plate: "remote",
  }),
  mother_sprout: unit({
    id: "mother_sprout",
    name: "Mother Sprout",
    cost: 3,
    faction: FACTION.CRT,
    atk: 2,
    hp: 4,
    shatter: { kind: FX.BUFF_RANDOM_FRIENDLY, atk: 1, hp: 1 },
    text: "Shatter: a random friendly unit gets +1/+1.",
    plate: "sprout",
  }),
  signal_ghost: unit({
    id: "signal_ghost",
    name: "Signal Ghost",
    cost: 4,
    faction: FACTION.CRT,
    atk: 3,
    hp: 3,
    keywords: { mesh: true, rush: true },
    text: "Mesh. Rush.",
    plate: "ghost",
  }),
  ironhorse: unit({
    id: "ironhorse",
    name: "Ironhorse",
    cost: 4,
    faction: FACTION.CRT,
    atk: 4,
    hp: 5,
    keywords: { static: true },
    text: "Static.",
    plate: "iron",
  }),
  crt_lead: unit({
    id: "crt_lead",
    name: "CRT Lead",
    cost: 5,
    faction: FACTION.CRT,
    atk: 5,
    hp: 5,
    boot: { kind: FX.DAMAGE, n: 3, target: "choose" },
    text: "Boot: deal 3 damage.",
    art: "hero-crt",
    plate: "lead",
  }),
  dino_mech: unit({
    id: "dino_mech",
    name: "Dino Mech",
    cost: 6,
    faction: FACTION.CRT,
    atk: 6,
    hp: 7,
    keywords: { rush: true },
    text: "Rush.",
    plate: "dino",
  }),
  atrium_colossus: unit({
    id: "atrium_colossus",
    name: "Atrium Colossus",
    cost: 7,
    faction: FACTION.CRT,
    atk: 7,
    hp: 8,
    keywords: { static: true, mesh: true },
    text: "Static. Mesh.",
    plate: "colossus",
  }),

  cyan_bolt: signal({
    id: "cyan_bolt",
    name: "Cyan Bolt",
    cost: 1,
    faction: FACTION.CRT,
    effect: { kind: FX.DAMAGE, n: 3, target: "choose" },
    text: "Deal 3 damage.",
    plate: "bolt",
  }),
  static_field: signal({
    id: "static_field",
    name: "Static Field",
    cost: 2,
    faction: FACTION.CRT,
    effect: { kind: FX.GIVE_KEYWORD, keyword: "static", target: "unit" },
    text: "Give a unit Static.",
    plate: "field",
  }),
  mesh_coat: signal({
    id: "mesh_coat",
    name: "Mesh Coat",
    cost: 2,
    faction: FACTION.CRT,
    effect: { kind: FX.GIVE_KEYWORD, keyword: "mesh", target: "unit" },
    text: "Give a unit Mesh.",
    plate: "coat",
  }),
  shatter_burst: signal({
    id: "shatter_burst",
    name: "Shatter Burst",
    cost: 3,
    faction: FACTION.CRT,
    effect: { kind: FX.AOE_ENEMIES, n: 2 },
    text: "Deal 2 damage to all enemies.",
    plate: "burst",
  }),
  well_be_right_back: signal({
    id: "well_be_right_back",
    name: "We'll Be Right Back",
    cost: 3,
    faction: FACTION.CRT,
    effect: { kind: FX.BOUNCE, target: "unit" },
    text: "Return a unit to its owner's hand.",
    plate: "wbrb",
  }),
  broadcast: signal({
    id: "broadcast",
    name: "Broadcast",
    cost: 4,
    faction: FACTION.CRT,
    effect: { kind: FX.DRAW, n: 2 },
    text: "Draw 2.",
    plate: "broadcast",
  }),
  fountain_surge: signal({
    id: "fountain_surge",
    name: "Fountain Surge",
    cost: 5,
    faction: FACTION.CRT,
    effect: { kind: FX.AOE_ENEMY_UNITS, n: 3 },
    text: "Deal 3 damage to all enemy units.",
    plate: "surge",
  }),

  dual_remotes: relic({
    id: "dual_remotes",
    name: "Dual Remotes",
    cost: 3,
    faction: FACTION.CRT,
    atk: 3,
    durability: 2,
    text: "3 attack, 2 durability.",
    art: "hero-crt",
    plate: "remotes",
  }),
  shovel: relic({
    id: "shovel",
    name: "Shovel",
    cost: 4,
    faction: FACTION.CRT,
    atk: 4,
    durability: 2,
    text: "4 attack, 2 durability.",
    plate: "shovel",
  }),

  grunt: unit({
    id: "grunt",
    name: "Grunt",
    cost: 1,
    faction: FACTION.TESSERA,
    atk: 1,
    hp: 2,
    text: "",
    plate: "grunt",
  }),
  rusher: unit({
    id: "rusher",
    name: "Rusher",
    cost: 1,
    faction: FACTION.TESSERA,
    atk: 2,
    hp: 1,
    keywords: { rush: true },
    text: "Rush.",
    plate: "rusher",
  }),
  mannequin: unit({
    id: "mannequin",
    name: "Mannequin",
    cost: 2,
    faction: FACTION.TESSERA,
    atk: 2,
    hp: 3,
    keywords: { static: true },
    text: "Static.",
    plate: "mannequin",
  }),
  shotgunner: unit({
    id: "shotgunner",
    name: "Shotgunner",
    cost: 3,
    faction: FACTION.TESSERA,
    atk: 3,
    hp: 2,
    boot: { kind: FX.DAMAGE_RANDOM_ENEMY, n: 1 },
    text: "Boot: deal 1 to a random enemy.",
    plate: "shotgun",
  }),
  elite: unit({
    id: "elite",
    name: "Elite",
    cost: 3,
    faction: FACTION.TESSERA,
    atk: 3,
    hp: 4,
    keywords: { mesh: true },
    text: "Mesh.",
    plate: "elite",
  }),
  security_tank: unit({
    id: "security_tank",
    name: "Security Tank",
    cost: 4,
    faction: FACTION.TESSERA,
    atk: 3,
    hp: 6,
    keywords: { static: true },
    text: "Static.",
    plate: "tank",
  }),
  visor_priest: unit({
    id: "visor_priest",
    name: "Visor Priest",
    cost: 4,
    faction: FACTION.TESSERA,
    atk: 3,
    hp: 3,
    boot: { kind: FX.HEAL_HERO, n: 2 },
    text: "Boot: restore 2 to your hero.",
    plate: "priest",
  }),
  directory_node: unit({
    id: "directory_node",
    name: "Directory Node",
    cost: 5,
    faction: FACTION.TESSERA,
    atk: 4,
    hp: 6,
    keywords: { static: true },
    shatter: { kind: FX.SUMMON, token: "tessera_grunt" },
    text: "Static. Shatter: summon a 1/1 Grunt.",
    plate: "node",
  }),
  tessera_captain: unit({
    id: "tessera_captain",
    name: "Tessera Captain",
    cost: 6,
    faction: FACTION.TESSERA,
    atk: 6,
    hp: 6,
    boot: { kind: FX.BUFF_ALL_FRIENDLY, atk: 1, hp: 1 },
    text: "Boot: give all friendly units +1/+1.",
    art: "hero-tessera",
    plate: "captain",
  }),
  the_directory: unit({
    id: "the_directory",
    name: "The Directory",
    cost: 8,
    faction: FACTION.TESSERA,
    atk: 8,
    hp: 8,
    keywords: { static: true, mesh: true },
    shatter: { kind: FX.DAMAGE_ENEMY_HERO, n: 4 },
    text: "Static. Mesh. Shatter: deal 4 to the enemy hero.",
    art: "hero-tessera",
    plate: "directory",
  }),

  amber_pellet: signal({
    id: "amber_pellet",
    name: "Amber Pellet",
    cost: 1,
    faction: FACTION.TESSERA,
    effect: { kind: FX.DAMAGE, n: 2, target: "choose" },
    text: "Deal 2 damage.",
    plate: "pellet",
  }),
  lockdown: signal({
    id: "lockdown",
    name: "Lockdown",
    cost: 2,
    faction: FACTION.TESSERA,
    effect: { kind: FX.GIVE_KEYWORD, keyword: "static", target: "unit" },
    text: "Give a unit Static.",
    plate: "lockdown",
  }),
  factory_reset: signal({
    id: "factory_reset",
    name: "Factory Reset",
    cost: 3,
    faction: FACTION.TESSERA,
    effect: { kind: FX.SILENCE, target: "unit" },
    text: "Silence a unit.",
    plate: "reset",
  }),
  volley: signal({
    id: "volley",
    name: "Volley",
    cost: 3,
    faction: FACTION.TESSERA,
    effect: { kind: FX.AOE_ENEMIES, n: 1 },
    text: "Deal 1 damage to all enemies.",
    plate: "volley",
  }),
  recall_protocol: signal({
    id: "recall_protocol",
    name: "Recall Protocol",
    cost: 4,
    faction: FACTION.TESSERA,
    effect: { kind: FX.DRAW, n: 2 },
    text: "Draw 2.",
    plate: "recall",
  }),
  atrium_sweep: signal({
    id: "atrium_sweep",
    name: "Atrium Sweep",
    cost: 5,
    faction: FACTION.TESSERA,
    effect: { kind: FX.AOE_ENEMY_UNITS, n: 2 },
    text: "Deal 2 damage to all enemy units.",
    plate: "sweep",
  }),

  amber_cannon: relic({
    id: "amber_cannon",
    name: "Amber Cannon",
    cost: 3,
    faction: FACTION.TESSERA,
    atk: 3,
    durability: 2,
    text: "3 attack, 2 durability.",
    plate: "cannon",
  }),
  visor_blade: relic({
    id: "visor_blade",
    name: "Visor Blade",
    cost: 5,
    faction: FACTION.TESSERA,
    atk: 5,
    durability: 2,
    text: "5 attack, 2 durability.",
    plate: "blade",
  }),

  tessera_grunt: unit({
    id: "tessera_grunt",
    name: "Tessera Grunt",
    cost: 1,
    faction: FACTION.TESSERA,
    atk: 1,
    hp: 1,
    token: true,
    text: "",
    plate: "grunt",
  }),
  coin: signal({
    id: "coin",
    name: "Coin",
    cost: 0,
    faction: FACTION.TESSERA,
    effect: { kind: FX.MANA, n: 1 },
    text: "SIGNAL: gain 1 mana this turn.",
    token: true,
    plate: "coin",
  }),
};

const CRT_LIST = [
  ["mall_rat", 2],
  ["scanline", 2],
  ["fountain_guard", 2],
  ["krcd_intern", 2],
  ["prize_clerk", 1],
  ["antenna_kid", 2],
  ["remote_hand", 2],
  ["mother_sprout", 2],
  ["signal_ghost", 1],
  ["ironhorse", 2],
  ["crt_lead", 1],
  ["dino_mech", 1],
  ["atrium_colossus", 1],
  ["cyan_bolt", 2],
  ["static_field", 1],
  ["mesh_coat", 1],
  ["shatter_burst", 2],
  ["well_be_right_back", 1],
  ["broadcast", 2],
  ["fountain_surge", 1],
  ["dual_remotes", 1],
  ["shovel", 1],
];

const TESSERA_LIST = [
  ["grunt", 2],
  ["rusher", 2],
  ["mannequin", 2],
  ["shotgunner", 2],
  ["elite", 2],
  ["security_tank", 2],
  ["visor_priest", 2],
  ["directory_node", 2],
  ["tessera_captain", 1],
  ["the_directory", 1],
  ["amber_pellet", 2],
  ["lockdown", 2],
  ["factory_reset", 1],
  ["volley", 2],
  ["recall_protocol", 2],
  ["atrium_sweep", 1],
  ["amber_cannon", 1],
  ["visor_blade", 1],
];

function expand(list) {
  const out = [];
  for (const [id, n] of list) {
    if (!CATALOG[id]) throw new Error(`Unknown card ${id}`);
    for (let i = 0; i < n; i++) out.push(id);
  }
  return out;
}

export const CRT_DECK_IDS = expand(CRT_LIST);
export const TESSERA_DECK_IDS = expand(TESSERA_LIST);

export function defOf(id) {
  const d = CATALOG[id];
  if (!d) throw new Error(`Unknown card ${id}`);
  return d;
}

export function keywordLine(def) {
  const bits = [];
  if (def.keywords?.static) bits.push("Static");
  if (def.keywords?.rush) bits.push("Rush");
  if (def.keywords?.mesh) bits.push("Mesh");
  if (def.keywords?.shatter || def.shatter) bits.push("Shatter");
  if (def.boot) bits.push("Boot");
  return bits;
}

export function typeLabel(type) {
  if (type === TYPE.UNIT) return "UNIT";
  if (type === TYPE.SIGNAL) return "SIGNAL";
  if (type === TYPE.RELIC) return "RELIC";
  return String(type).toUpperCase();
}

export function needsChooser(effect) {
  if (!effect) return false;
  return (
    effect.target === "choose" ||
    effect.target === "unit" ||
    effect.kind === FX.BOUNCE ||
    effect.kind === FX.SILENCE ||
    (effect.kind === FX.GIVE_KEYWORD && effect.target === "unit") ||
    (effect.kind === FX.DAMAGE && effect.target === "choose")
  );
}
