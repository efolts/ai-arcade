import {
  AI,
  HERO_IDS,
  PLAYER,
  attack,
  attackersOf,
  canHeroAttack,
  canPlayCard,
  canUnitAttack,
  canUseHeroPower,
  findUnit,
  legalAttackTargets,
  legalEffectTargets,
  playCard,
  sideOf,
  staticOn,
  useHeroPower,
} from "./engine.js";
import { BOARD_CAP, FX, TYPE, needsChooser } from "./cards.js";

function cardFx(card) {
  return card.type === TYPE.UNIT ? card.boot : card.effect;
}

function pickTarget(state, who, fx, card) {
  const legal = legalEffectTargets(state, who, fx);
  if (!legal.length) return null;

  const enemy = who === AI ? PLAYER : AI;
  const enemyHero = HERO_IDS[enemy];
  const myHero = HERO_IDS[who];

  if (fx.kind === FX.DAMAGE) {
    let best = null;
    let bestScore = -Infinity;
    for (const id of legal) {
      let score = 0;
      if (id === enemyHero) {
        const hp = sideOf(state, enemy).hero.hp;
        score = hp <= fx.n ? 200 : 8 + (30 - hp) * 0.15;
      } else if (id === myHero) {
        score = -50;
      } else {
        const found = findUnit(state, id);
        if (!found) continue;
        const u = found.unit;
        const mine = found.who === who;
        if (mine) {
          score = -20;
        } else if (u.keywords.mesh) {
          score = 6;
        } else if (u.hp <= fx.n) {
          score = 40 + u.atk * 3 + (u.keywords.static ? 8 : 0) + (u.shatter ? 6 : 0);
        } else {
          score = 10 + Math.min(fx.n, u.hp);
        }
      }
      if (score > bestScore) {
        bestScore = score;
        best = id;
      }
    }
    return best || legal[0];
  }

  if (fx.kind === FX.GIVE_KEYWORD) {
    const mine = legal
      .map((id) => findUnit(state, id))
      .filter((f) => f && f.who === who)
      .map((f) => f.unit);
    if (fx.keyword === "static") {
      const pick =
        mine.filter((u) => !u.keywords.static).sort((a, b) => b.hp - a.hp)[0] || mine[0];
      return pick?.uid || null;
    }
    if (fx.keyword === "mesh") {
      const pick =
        mine.filter((u) => !u.keywords.mesh).sort((a, b) => b.atk + b.hp - (a.atk + a.hp))[0] ||
        mine[0];
      return pick?.uid || null;
    }
    return mine[0]?.uid || null;
  }

  if (fx.kind === FX.BOUNCE) {
    const enemies = legal
      .map((id) => findUnit(state, id))
      .filter((f) => f && f.who !== who)
      .map((f) => f.unit)
      .sort((a, b) => b.atk + b.hp + (b.keywords.static ? 4 : 0) - (a.atk + a.hp));
    return enemies[0]?.uid || null;
  }

  if (fx.kind === FX.SILENCE) {
    const enemies = legal
      .map((id) => findUnit(state, id))
      .filter((f) => f && f.who !== who)
      .map((f) => f.unit);
    const juicy = enemies
      .filter((u) => u.keywords.mesh || u.keywords.static || u.shatter)
      .sort((a, b) => b.atk + b.hp - (a.atk + a.hp));
    return (juicy[0] || enemies[0])?.uid || null;
  }

  return legal.includes(enemyHero) ? enemyHero : legal[0];
}

function scorePlay(state, who, card, targetId) {
  const leftover = sideOf(state, who).mana - card.cost;
  let score = card.cost * 6 + 4;
  if (leftover === 0) score += 8;
  if (leftover === 1) score += 2;

  if (card.type === TYPE.UNIT) {
    score += card.atk * 3 + card.hp * 2;
    if (card.keywords.static) score += 6;
    if (card.keywords.mesh) score += 5;
    if (card.keywords.rush) score += 4;
    if (card.boot) score += 3;
    if (card.shatter) score += 2;
    if (sideOf(state, who).board.length === 0) score += 6;
  } else if (card.type === TYPE.RELIC) {
    score += card.atk * 3 + card.durability * 2;
    if (sideOf(state, who).hero.relic) score -= 8;
  } else {
    const fx = card.effect;
    if (fx?.kind === FX.DRAW) score += 10;
    if (fx?.kind === FX.MANA) score += leftover >= 0 ? 1 : 0;
    if (fx?.kind === FX.AOE_ENEMIES || fx?.kind === FX.AOE_ENEMY_UNITS) {
      const n = fx.n || 0;
      const hits = sideOf(state, PLAYER).board.filter((u) => !u.keywords.mesh && u.hp <= n);
      score += hits.length * 14 + sideOf(state, PLAYER).board.length * 3;
    }
    if (fx?.kind === FX.DAMAGE && targetId) {
      const found = findUnit(state, targetId);
      if (found && found.who !== who && found.unit.hp <= (fx.n || 0) && !found.unit.keywords.mesh) {
        score += 18;
      } else if (targetId === HERO_IDS[PLAYER]) {
        score += sideOf(state, PLAYER).hero.hp <= (fx.n || 0) ? 80 : 4;
      }
    }
    if (fx?.kind === FX.BOUNCE && targetId) {
      const found = findUnit(state, targetId);
      if (found && found.who !== who) score += found.unit.atk + found.unit.hp;
      else score -= 20;
    }
    if (fx?.kind === FX.SILENCE && targetId) {
      const found = findUnit(state, targetId);
      if (found && found.who !== who) score += 12;
      else score -= 16;
    }
  }

  if (card.defId === "coin") {
    score = -4;
  }
  return score;
}

function bestCardPlay(state, who) {
  const side = sideOf(state, who);
  const coin = side.hand.find((c) => c.defId === "coin");
  if (coin) {
    const enable = side.hand.some(
      (c) => c !== coin && c.cost === side.mana + 1 && canPlayCard(state, who, c, null)
    );
    if (enable) {
      return { type: "play", cardId: coin.uid, targetId: null, score: 50 };
    }
  }

  let best = null;
  for (const card of side.hand) {
    if (!canPlayCard(state, who, card, null)) continue;
    const fx = cardFx(card);
    if (needsChooser(fx)) {
      const tid = pickTarget(state, who, fx, card);
      if (!tid && legalEffectTargets(state, who, fx).length) continue;
      if (tid && !canPlayCard(state, who, card, tid)) continue;
      const score = scorePlay(state, who, card, tid);
      if (!best || score > best.score) best = { type: "play", cardId: card.uid, targetId: tid, score };
    } else {
      const score = scorePlay(state, who, card, null);
      if (!best || score > best.score) best = { type: "play", cardId: card.uid, targetId: null, score };
    }
  }
  return best;
}

function tradeScore(state, attacker, targetId) {
  const enemy = PLAYER;
  if (targetId === HERO_IDS[enemy]) {
    const hp = state.player.hero.hp;
    const atk = attacker.kind === "hero" ? attacker.hero.relic.atk : attacker.unit.atk;
    const ahead =
      state.ai.hero.hp >= state.player.hero.hp ||
      state.ai.board.reduce((s, u) => s + u.atk, 0) >
        state.player.board.reduce((s, u) => s + u.atk, 0);
    const noStatic = staticOn(state, PLAYER).length === 0;
    if (hp <= atk) return 400;
    if (ahead && noStatic) return 30 + (30 - hp);
    if (noStatic) return 12;
    return 4;
  }
  const found = findUnit(state, targetId);
  if (!found) return -1;
  const def = found.unit;
  const atk = attacker.kind === "hero" ? attacker.hero.relic.atk : attacker.unit.atk;
  const myHp = attacker.kind === "hero" ? attacker.hero.hp : attacker.unit.hp;
  const myMesh = attacker.kind === "unit" && attacker.unit.keywords.mesh;
  const kills = !def.keywords.mesh && def.hp <= atk;
  const dies = attacker.kind === "hero" ? def.atk >= myHp : !myMesh && def.atk >= myHp;
  let score = 0;
  if (def.keywords.static) score += 10;
  if (kills) score += 24 + def.atk * 3 + (def.shatter ? 4 : 0);
  else score += Math.min(atk, def.hp) + (def.keywords.mesh ? 3 : 0);
  if (dies) score -= attacker.kind === "hero" ? 40 : 10 + attacker.unit.atk;
  if (attacker.kind === "hero") score -= 2;
  return score;
}

function bestAttack(state, who) {
  const { units, hero } = attackersOf(state, who);
  const targets = legalAttackTargets(state, who);
  if (!targets.length) return null;
  let best = null;
  const attackers = units.map((u) => ({ kind: "unit", unit: u, id: u.uid }));
  if (hero) attackers.push({ kind: "hero", hero, id: hero.id });
  for (const a of attackers) {
    if (a.kind === "unit" && !canUnitAttack(a.unit)) continue;
    if (a.kind === "hero" && !canHeroAttack(a.hero)) continue;
    for (const tid of targets) {
      const score = tradeScore(state, a, tid);
      if (!best || score > best.score) {
        best = { type: "attack", attackerId: a.id, targetId: tid, score };
      }
    }
  }
  return best && best.score > 0 ? best : best;
}

export function pickAiAction(state) {
  if (state.winner || state.turn !== AI) return { type: "end" };

  const play = bestCardPlay(state, AI);
  if (play && play.score >= 2) return play;

  const side = state.ai;
  if (
    canUseHeroPower(state, AI) &&
    side.mana >= 2 &&
    side.board.length < BOARD_CAP &&
    (!play || play.score < 10)
  ) {
    return { type: "power", targetId: null, score: 9 };
  }

  const atk = bestAttack(state, AI);
  if (atk) return atk;

  if (play) return play;
  return { type: "end" };
}

export function applyAiAction(state, action) {
  if (!action || action.type === "end") return { ok: true, type: "end" };
  if (action.type === "play") return playCard(state, AI, action.cardId, action.targetId);
  if (action.type === "power") return useHeroPower(state, AI, action.targetId);
  if (action.type === "attack") return attack(state, AI, action.attackerId, action.targetId);
  return { ok: false };
}

export function runAiTurn(state, maxSteps = 24) {
  const actions = [];
  for (let i = 0; i < maxSteps && !state.winner && state.turn === AI; i++) {
    const action = pickAiAction(state);
    const result = applyAiAction(state, action);
    actions.push({ action, result });
    if (action.type === "end" || !result.ok) break;
  }
  return actions;
}
