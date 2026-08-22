import {
  BOARD_CAP,
  CATALOG,
  CRT_DECK_IDS,
  FACTION,
  FX,
  HAND_CAP,
  MANA_CAP,
  START_HP,
  TESSERA_DECK_IDS,
  TYPE,
  defOf,
  needsChooser,
} from "./cards.js";

export const PLAYER = "player";
export const AI = "ai";
export const HERO_IDS = { [PLAYER]: "player-hero", [AI]: "ai-hero" };

let _seq = 1;
export function resetIds(n = 1) {
  _seq = n;
}
function nextId(prefix) {
  return `${prefix}-${_seq++}`;
}

export function makeRng(seed = 1) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function shuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function cloneKeywords(kw = {}) {
  return {
    static: !!kw.static,
    rush: !!kw.rush,
    mesh: !!kw.mesh,
  };
}

export function instantiate(defId, extra = {}) {
  const def = defOf(defId);
  return {
    uid: extra.uid || nextId("c"),
    defId,
    name: def.name,
    cost: def.cost,
    type: def.type,
    faction: def.faction,
    atk: def.atk || 0,
    hp: def.hp || 0,
    maxHp: def.hp || 0,
    durability: def.durability || 0,
    maxDurability: def.durability || 0,
    keywords: cloneKeywords(def.keywords),
    boot: def.boot ? { ...def.boot } : null,
    shatter: def.shatter ? { ...def.shatter } : null,
    effect: def.effect ? { ...def.effect } : null,
    text: def.text || "",
    token: !!def.token,
    art: def.art || null,
    plate: def.plate || def.type,
    silenced: false,
    canAttack: false,
    attacksLeft: 0,
    summonSick: true,
    justPlayed: false,
    ...extra,
  };
}

function makeHero(who) {
  if (who === PLAYER) {
    return {
      id: HERO_IDS[PLAYER],
      who,
      name: "CRT",
      hp: START_HP,
      maxHp: START_HP,
      powerName: "Remote",
      powerCost: 2,
      powerUsed: false,
      relic: null,
      canAttack: false,
      fatigue: 0,
    };
  }
  return {
    id: HERO_IDS[AI],
    who,
    name: "Tessera",
    hp: START_HP,
    maxHp: START_HP,
    powerName: "Deploy",
    powerCost: 2,
    powerUsed: false,
    relic: null,
    canAttack: false,
    fatigue: 0,
  };
}

function makeSide(who, deckIds, rng) {
  return {
    who,
    hero: makeHero(who),
    mana: 0,
    maxMana: 0,
    deck: shuffle(deckIds, rng).map((id) => instantiate(id)),
    hand: [],
    board: [],
    grave: [],
  };
}

export function createMatch(opts = {}) {
  const seed = opts.seed ?? (Math.floor(Math.random() * 1e9) || 1);
  const rng = opts.rng || makeRng(seed);
  resetIds(1);
  const state = {
    seed,
    screen: "title",
    winner: null,
    turn: PLAYER,
    turnNumber: 0,
    player: makeSide(PLAYER, opts.playerDeck || CRT_DECK_IDS, rng),
    ai: makeSide(AI, opts.aiDeck || TESSERA_DECK_IDS, rng),
    log: [],
    fx: [],
    rng,
    pending: null,
    anim: null,
  };
  return state;
}

export function sideOf(state, who) {
  return who === PLAYER ? state.player : state.ai;
}

export function opponentOf(who) {
  return who === PLAYER ? AI : PLAYER;
}

export function living(state) {
  return !state.winner;
}

function pushLog(state, text, extra = {}) {
  state.log.push({ text, t: state.turnNumber, ...extra });
  if (state.log.length > 40) state.log.shift();
}

function emit(state, event) {
  if (!state.fx) state.fx = [];
  state.fx.push(event);
}

export function drainFx(state) {
  const ev = state.fx || [];
  state.fx = [];
  return ev;
}

export function findUnit(state, uid) {
  for (const who of [PLAYER, AI]) {
    const u = sideOf(state, who).board.find((x) => x.uid === uid);
    if (u) return { unit: u, who };
  }
  return null;
}

export function findCardInHand(state, who, uid) {
  return sideOf(state, who).hand.find((c) => c.uid === uid) || null;
}

export function isHeroId(id) {
  return id === HERO_IDS[PLAYER] || id === HERO_IDS[AI];
}

export function heroById(state, id) {
  if (id === HERO_IDS[PLAYER]) return state.player.hero;
  if (id === HERO_IDS[AI]) return state.ai.hero;
  return null;
}

function checkWinner(state) {
  if (state.winner) return;
  if (state.player.hero.hp <= 0 && state.ai.hero.hp <= 0) {
    state.winner = "draw";
    state.screen = "result";
    pushLog(state, "Both signals drop. Dead air.");
    return;
  }
  if (state.ai.hero.hp <= 0) {
    state.winner = PLAYER;
    state.screen = "result";
    pushLog(state, "Tessera collapses. THE SIGNAL holds.");
    return;
  }
  if (state.player.hero.hp <= 0) {
    state.winner = AI;
    state.screen = "result";
    pushLog(state, "CRT goes dark. Directory wins.");
  }
}

export function dealDamage(state, targetRef, amount, src = "") {
  if (amount <= 0 || state.winner) return { absorbed: false, dealt: 0, dead: false };
  if (targetRef.kind === "hero") {
    const hero = targetRef.hero;
    hero.hp -= amount;
    const dead = hero.hp <= 0;
    emit(state, {
      type: "damage",
      id: hero.id,
      kind: "hero",
      who: hero.who,
      faction: hero.who === PLAYER ? FACTION.CRT : FACTION.TESSERA,
      amount,
      absorbed: false,
      dead,
      src,
    });
    checkWinner(state);
    return { absorbed: false, dealt: amount, dead };
  }
  const unit = targetRef.unit;
  const found = findUnit(state, unit.uid);
  const who = found?.who || targetRef.who;
  if (unit.keywords.mesh) {
    unit.keywords.mesh = false;
    emit(state, {
      type: "mesh",
      id: unit.uid,
      kind: "unit",
      who,
      faction: unit.faction,
      src,
    });
    return { absorbed: true, dealt: 0, dead: false };
  }
  unit.hp -= amount;
  const dead = unit.hp <= 0;
  emit(state, {
    type: "damage",
    id: unit.uid,
    kind: "unit",
    who,
    faction: unit.faction,
    amount,
    absorbed: false,
    dead,
    src,
  });
  if (dead) killUnit(state, unit.uid);
  return { absorbed: false, dealt: amount, dead };
}

function resolveShatter(state, unit, owner) {
  const fx = unit.shatter;
  if (!fx || unit.silenced) return;
  if (fx.kind === FX.BUFF_RANDOM_FRIENDLY) {
    const friends = sideOf(state, owner).board.filter((u) => u.uid !== unit.uid);
    if (!friends.length) return;
    const pick = friends[Math.floor(state.rng() * friends.length)];
    buffUnit(pick, fx.atk || 0, fx.hp || 0);
    pushLog(state, `${unit.name} Shatters: ${pick.name} gets +${fx.atk}/+${fx.hp}.`);
  } else if (fx.kind === FX.SUMMON) {
    summonToken(state, owner, fx.token);
    pushLog(state, `${unit.name} Shatters: a Tessera Grunt boots in.`);
  } else if (fx.kind === FX.DAMAGE_ENEMY_HERO) {
    const enemy = sideOf(state, opponentOf(owner)).hero;
    dealDamage(state, { kind: "hero", hero: enemy }, fx.n || 0, unit.name);
    pushLog(state, `${unit.name} Shatters: ${fx.n} to ${enemy.name}.`);
  }
}

export function killUnit(state, uid) {
  for (const who of [PLAYER, AI]) {
    const side = sideOf(state, who);
    const i = side.board.findIndex((u) => u.uid === uid);
    if (i === -1) continue;
    const [unit] = side.board.splice(i, 1);
    side.grave.push(unit);
    emit(state, {
      type: "death",
      id: unit.uid,
      who,
      faction: unit.faction,
      name: unit.name,
      shatter: !!(unit.shatter && !unit.silenced),
    });
    if (unit.shatter && !unit.silenced) {
      emit(state, { type: "shatter", id: unit.uid, who, name: unit.name });
    }
    resolveShatter(state, unit, who);
    return unit;
  }
  return null;
}

export function buffUnit(unit, atk, hp) {
  unit.atk += atk;
  unit.hp += hp;
  unit.maxHp += hp;
}

export function silenceUnit(unit) {
  unit.silenced = true;
  unit.keywords = { static: false, rush: false, mesh: false };
  unit.boot = null;
  unit.shatter = null;
  unit.text = "";
}

function burnOrAdd(state, side, card, verb = "drawn") {
  if (side.hand.length >= HAND_CAP) {
    side.grave.push(card);
    pushLog(state, `${card.name} burns (${verb}, hand full).`);
    return false;
  }
  side.hand.push(card);
  return true;
}

export function drawCard(state, who, reason = "draw") {
  const side = sideOf(state, who);
  if (side.deck.length === 0) {
    side.hero.fatigue += 1;
    const dmg = side.hero.fatigue;
    emit(state, { type: "fatigue", who, amount: dmg, id: side.hero.id });
    dealDamage(state, { kind: "hero", hero: side.hero }, dmg, "fatigue");
    pushLog(state, `${side.hero.name} takes ${dmg} fatigue.`);
    return null;
  }
  const card = side.deck.shift();
  const kept = burnOrAdd(state, side, card, reason);
  emit(state, { type: "draw", who, card, burned: !kept, reason });
  return card;
}

export function summonToken(state, who, defId) {
  const side = sideOf(state, who);
  if (side.board.length >= BOARD_CAP) return null;
  const unit = instantiate(defId);
  unit.summonSick = true;
  unit.canAttack = false;
  unit.attacksLeft = 0;
  side.board.push(unit);
  emit(state, { type: "summon", who, unit, token: true });
  return unit;
}

function readyBoard(side) {
  for (const u of side.board) {
    u.summonSick = false;
    u.justPlayed = false;
    u.canAttack = true;
    u.attacksLeft = 1;
  }
  side.hero.powerUsed = false;
  if (side.hero.relic && side.hero.relic.durability > 0) {
    side.hero.canAttack = true;
  } else {
    side.hero.canAttack = false;
  }
}

export function beginTurn(state, who) {
  if (state.winner) return;
  state.turn = who;
  if (who === PLAYER) state.turnNumber += 1;
  const side = sideOf(state, who);
  side.maxMana = Math.min(MANA_CAP, side.maxMana + 1);
  side.mana = side.maxMana;
  readyBoard(side);
  drawCard(state, who, "turn");
  pushLog(state, `${side.hero.name}'s turn — ${side.mana} mana.`);
}

export function dealOpening(state) {
  for (let i = 0; i < 3; i++) drawCard(state, PLAYER, "mulligan");
  for (let i = 0; i < 4; i++) drawCard(state, AI, "mulligan");
  burnOrAdd(state, state.ai, instantiate("coin"), "coin");
}

export function startMatch(state) {
  state.screen = "play";
  state.winner = null;
  dealOpening(state);
  beginTurn(state, PLAYER);
}

export function targetRef(state, targetId) {
  if (!targetId) return null;
  if (isHeroId(targetId)) {
    return { kind: "hero", hero: heroById(state, targetId), id: targetId };
  }
  const found = findUnit(state, targetId);
  if (!found) return null;
  return { kind: "unit", unit: found.unit, who: found.who, id: targetId };
}

export function allCharacters(state) {
  const out = [];
  for (const who of [PLAYER, AI]) {
    const side = sideOf(state, who);
    out.push({ kind: "hero", hero: side.hero, who, id: side.hero.id });
    for (const u of side.board) {
      out.push({ kind: "unit", unit: u, who, id: u.uid });
    }
  }
  return out;
}

export function staticOn(state, who) {
  return sideOf(state, who).board.filter((u) => u.keywords.static);
}

export function legalAttackTargets(state, attackerWho) {
  const defender = opponentOf(attackerWho);
  const taunts = staticOn(state, defender);
  if (taunts.length) {
    return taunts.map((u) => u.uid);
  }
  const ids = [HERO_IDS[defender]];
  for (const u of sideOf(state, defender).board) ids.push(u.uid);
  return ids;
}

export function canUnitAttack(unit) {
  return !!unit && unit.attacksLeft > 0 && unit.canAttack && (unit.keywords.rush || !unit.summonSick);
}

export function canHeroAttack(hero) {
  return !!hero && hero.canAttack && hero.relic && hero.relic.durability > 0;
}

function effectNeedsTarget(fx) {
  return needsChooser(fx);
}

export function legalEffectTargets(state, who, fx) {
  if (!fx) return [];
  if (fx.kind === FX.DAMAGE && fx.target === "choose") {
    return allCharacters(state).map((c) => c.id);
  }
  if (fx.kind === FX.GIVE_KEYWORD || fx.kind === FX.BOUNCE || fx.kind === FX.SILENCE) {
    return [...state.player.board, ...state.ai.board].map((u) => u.uid);
  }
  return [];
}

export function canPlayCard(state, who, card, targetId = null) {
  if (state.winner || state.turn !== who) return false;
  const side = sideOf(state, who);
  if (!card || !side.hand.includes(card)) return false;
  if (side.mana < card.cost) return false;
  if (card.type === TYPE.UNIT && side.board.length >= BOARD_CAP) return false;
  const fx = card.type === TYPE.UNIT ? card.boot : card.effect;
  if (effectNeedsTarget(fx)) {
    const legal = legalEffectTargets(state, who, fx);
    if (!legal.length) return card.type === TYPE.UNIT;
    if (!targetId) return true;
    return legal.includes(targetId);
  }
  return true;
}

function applyEffect(state, who, fx, targetId, sourceName) {
  if (!fx) return;
  const enemy = opponentOf(who);
  switch (fx.kind) {
    case FX.DAMAGE: {
      const ref = targetRef(state, targetId);
      if (!ref) return;
      dealDamage(state, ref, fx.n || 0, sourceName);
      const label = ref.kind === "hero" ? ref.hero.name : ref.unit.name;
      pushLog(state, `${sourceName}: ${fx.n} to ${label}.`);
      break;
    }
    case FX.AOE_ENEMIES: {
      const side = sideOf(state, enemy);
      const units = side.board.slice();
      for (const u of units) dealDamage(state, { kind: "unit", unit: u }, fx.n || 0, sourceName);
      dealDamage(state, { kind: "hero", hero: side.hero }, fx.n || 0, sourceName);
      pushLog(state, `${sourceName}: ${fx.n} to all enemies.`);
      break;
    }
    case FX.AOE_ENEMY_UNITS: {
      const units = sideOf(state, enemy).board.slice();
      for (const u of units) dealDamage(state, { kind: "unit", unit: u }, fx.n || 0, sourceName);
      pushLog(state, `${sourceName}: ${fx.n} to enemy units.`);
      break;
    }
    case FX.DRAW: {
      for (let i = 0; i < (fx.n || 1); i++) drawCard(state, who, sourceName);
      pushLog(state, `${sourceName}: draw ${fx.n}.`);
      break;
    }
    case FX.MANA: {
      const side = sideOf(state, who);
      side.mana += fx.n || 1;
      pushLog(state, `${sourceName}: +${fx.n} mana this turn.`);
      break;
    }
    case FX.GIVE_KEYWORD: {
      const found = findUnit(state, targetId);
      if (!found) return;
      found.unit.keywords[fx.keyword] = true;
      if (fx.keyword === "rush" && found.who === state.turn) {
        found.unit.canAttack = true;
        found.unit.attacksLeft = Math.max(1, found.unit.attacksLeft);
      }
      const pretty = fx.keyword[0].toUpperCase() + fx.keyword.slice(1);
      pushLog(state, `${sourceName}: ${found.unit.name} gains ${pretty}.`);
      break;
    }
    case FX.BOUNCE: {
      const found = findUnit(state, targetId);
      if (!found) return;
      const side = sideOf(state, found.who);
      const i = side.board.findIndex((u) => u.uid === targetId);
      if (i === -1) return;
      const [unit] = side.board.splice(i, 1);
      const bounced = instantiate(unit.defId);
      bounced.uid = nextId("c");
      burnOrAdd(state, side, bounced, "returned");
      pushLog(state, `${sourceName}: ${unit.name} returns to hand.`);
      break;
    }
    case FX.SILENCE: {
      const found = findUnit(state, targetId);
      if (!found) return;
      silenceUnit(found.unit);
      pushLog(state, `${sourceName}: ${found.unit.name} is silenced.`);
      break;
    }
    case FX.HEAL_HERO: {
      const hero = sideOf(state, who).hero;
      hero.hp = Math.min(hero.maxHp, hero.hp + (fx.n || 0));
      pushLog(state, `${sourceName}: restore ${fx.n} to ${hero.name}.`);
      break;
    }
    case FX.BUFF_ALL_FRIENDLY: {
      for (const u of sideOf(state, who).board) buffUnit(u, fx.atk || 0, fx.hp || 0);
      pushLog(state, `${sourceName}: friendly units get +${fx.atk}/+${fx.hp}.`);
      break;
    }
    case FX.BUFF_RANDOM_FRIENDLY: {
      const friends = sideOf(state, who).board;
      if (!friends.length) return;
      const pick = friends[Math.floor(state.rng() * friends.length)];
      buffUnit(pick, fx.atk || 0, fx.hp || 0);
      break;
    }
    case FX.SUMMON: {
      summonToken(state, who, fx.token);
      break;
    }
    case FX.DAMAGE_ENEMY_HERO: {
      const hero = sideOf(state, enemy).hero;
      dealDamage(state, { kind: "hero", hero }, fx.n || 0, sourceName);
      break;
    }
    case FX.DAMAGE_RANDOM_ENEMY: {
      const chars = allCharacters(state).filter((c) => c.who === enemy);
      if (!chars.length) return;
      const pick = chars[Math.floor(state.rng() * chars.length)];
      dealDamage(state, pick, fx.n || 0, sourceName);
      const label = pick.kind === "hero" ? pick.hero.name : pick.unit.name;
      pushLog(state, `${sourceName}: ${fx.n} to ${label}.`);
      break;
    }
    default:
      break;
  }
}

export function playCard(state, who, cardUid, targetId = null) {
  if (state.winner || state.turn !== who) return { ok: false, reason: "not-your-turn" };
  const side = sideOf(state, who);
  const idx = side.hand.findIndex((c) => c.uid === cardUid);
  if (idx === -1) return { ok: false, reason: "not-in-hand" };
  const card = side.hand[idx];
  if (!canPlayCard(state, who, card, targetId)) {
    const fx = card.type === TYPE.UNIT ? card.boot : card.effect;
    if (effectNeedsTarget(fx) && !targetId && legalEffectTargets(state, who, fx).length) {
      return { ok: false, reason: "need-target", card };
    }
    return { ok: false, reason: "illegal" };
  }
  const fx = card.type === TYPE.UNIT ? card.boot : card.effect;
  if (effectNeedsTarget(fx) && legalEffectTargets(state, who, fx).length && !targetId) {
    return { ok: false, reason: "need-target", card };
  }

  side.hand.splice(idx, 1);
  side.mana -= card.cost;

  if (card.type === TYPE.UNIT) {
    const unit = card;
    unit.summonSick = !unit.keywords.rush;
    unit.canAttack = !!unit.keywords.rush;
    unit.attacksLeft = unit.keywords.rush ? 1 : 0;
    unit.justPlayed = true;
    side.board.push(unit);
    emit(state, { type: "play", who, card: unit, as: "unit", targetId });
    pushLog(state, `${side.hero.name} plays ${unit.name}.`);
    if (unit.boot && !unit.silenced) applyEffect(state, who, unit.boot, targetId, unit.name);
    return { ok: true, type: "unit", card: unit, targetId };
  }

  if (card.type === TYPE.RELIC) {
    side.hero.relic = {
      uid: card.uid,
      defId: card.defId,
      name: card.name,
      atk: card.atk,
      durability: card.durability,
      maxDurability: card.maxDurability || card.durability,
      faction: card.faction,
    };
    side.hero.canAttack = true;
    pushLog(state, `${side.hero.name} equips ${card.name} (${card.atk}/${card.durability}).`);
    emit(state, { type: "play", who, card, as: "relic" });
    side.grave.push(card);
    return { ok: true, type: "relic", card };
  }

  pushLog(state, `${side.hero.name} casts ${card.name}.`);
  emit(state, { type: "play", who, card, as: "signal", targetId });
  applyEffect(state, who, card.effect, targetId, card.name);
  side.grave.push(card);
  return { ok: true, type: "signal", card, targetId };
}

export function canUseHeroPower(state, who, targetId = null) {
  if (state.winner || state.turn !== who) return false;
  const side = sideOf(state, who);
  if (side.hero.powerUsed) return false;
  if (side.mana < side.hero.powerCost) return false;
  if (who === AI) {
    return side.board.length < BOARD_CAP;
  }
  if (!targetId) return true;
  return !!targetRef(state, targetId);
}

export function useHeroPower(state, who, targetId = null) {
  if (!canUseHeroPower(state, who, targetId)) {
    if (who === PLAYER && !targetId && canUseHeroPower(state, who, HERO_IDS[AI])) {
      return { ok: false, reason: "need-target" };
    }
    return { ok: false, reason: "illegal" };
  }
  const side = sideOf(state, who);
  if (who === PLAYER && !targetId) return { ok: false, reason: "need-target" };

  side.mana -= side.hero.powerCost;
  side.hero.powerUsed = true;

  if (who === PLAYER) {
    const ref = targetRef(state, targetId);
    if (!ref) return { ok: false, reason: "bad-target" };
    dealDamage(state, ref, 2, "Remote");
    const label = ref.kind === "hero" ? ref.hero.name : ref.unit.name;
    pushLog(state, `Remote zaps ${label} for 2.`);
    return { ok: true, type: "power" };
  }

  const grunt = summonToken(state, AI, "tessera_grunt");
  pushLog(state, grunt ? "Tessera Deploys a 1/1 Grunt." : "Deploy fizzles — board full.");
  return { ok: true, type: "power" };
}

export function attack(state, who, attackerId, targetId) {
  if (state.winner || state.turn !== who) return { ok: false, reason: "not-your-turn" };
  const legal = legalAttackTargets(state, who);
  if (!legal.includes(targetId)) return { ok: false, reason: "illegal-target" };

  const defRef = targetRef(state, targetId);
  if (!defRef) return { ok: false, reason: "missing-target" };

  if (isHeroId(attackerId)) {
    const hero = sideOf(state, who).hero;
    if (!canHeroAttack(hero)) return { ok: false, reason: "cant-attack" };
    const atk = hero.relic.atk;
    dealDamage(state, defRef, atk, hero.relic.name);
    if (defRef.kind === "unit") {
      dealDamage(state, { kind: "hero", hero }, defRef.unit.atk, defRef.unit.name);
    }
    hero.relic.durability -= 1;
    hero.canAttack = false;
    if (hero.relic.durability <= 0) {
      pushLog(state, `${hero.relic.name} shatters.`);
      hero.relic = null;
    } else {
      pushLog(state, `${hero.name} swings ${hero.relic.name} (${atk}).`);
    }
    checkWinner(state);
    return { ok: true, type: "relic-attack" };
  }

  const found = findUnit(state, attackerId);
  if (!found || found.who !== who) return { ok: false, reason: "not-yours" };
  const unit = found.unit;
  if (!canUnitAttack(unit)) return { ok: false, reason: "cant-attack" };

  dealDamage(state, defRef, unit.atk, unit.name);
  if (defRef.kind === "unit") {
    dealDamage(state, { kind: "unit", unit }, defRef.unit.atk, defRef.unit.name);
  }
  unit.attacksLeft -= 1;
  if (unit.attacksLeft <= 0) unit.canAttack = false;
  const defName = defRef.kind === "hero" ? defRef.hero.name : defRef.unit.name;
  pushLog(state, `${unit.name} hits ${defName}.`);
  checkWinner(state);
  return { ok: true, type: "unit-attack" };
}

export function endTurn(state, who) {
  if (state.winner || state.turn !== who) return { ok: false };
  const side = sideOf(state, who);
  side.mana = 0;
  for (const u of side.board) {
    u.canAttack = false;
    u.attacksLeft = 0;
    u.justPlayed = false;
  }
  side.hero.canAttack = false;
  const next = opponentOf(who);
  beginTurn(state, next);
  return { ok: true };
}

export function playableCards(state, who) {
  return sideOf(state, who).hand.filter((c) => canPlayCard(state, who, c, null));
}

export function attackersOf(state, who) {
  const side = sideOf(state, who);
  const units = side.board.filter(canUnitAttack);
  if (canHeroAttack(side.hero)) {
    return { units, hero: side.hero };
  }
  return { units, hero: null };
}

export function catalogSnapshot() {
  return {
    crt: CRT_DECK_IDS.length,
    tessera: TESSERA_DECK_IDS.length,
    names: Object.keys(CATALOG),
  };
}

export { CATALOG, defOf };
