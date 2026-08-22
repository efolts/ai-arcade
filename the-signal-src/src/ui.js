import titleArt from "./art/title.jpg";
import crtArt from "./art/hero-crt.jpg";
import tessArt from "./art/hero-tessera.jpg";
import remoteArt from "./art/card-remote-hand.jpg";
import {
  AI,
  HERO_IDS,
  PLAYER,
  attack,
  canHeroAttack,
  canPlayCard,
  canUnitAttack,
  canUseHeroPower,
  createMatch,
  endTurn,
  legalAttackTargets,
  legalEffectTargets,
  playCard,
  startMatch,
  useHeroPower,
} from "./engine.js";
import { applyAiAction, pickAiAction } from "./ai.js";
import { TYPE, needsChooser, typeLabel } from "./cards.js";
import { sfx, toggleMute } from "./audio.js";

const ART = {
  "remote-hand": remoteArt,
  "hero-crt": crtArt,
  "hero-tessera": tessArt,
};

const stage = () => document.getElementById("stage");

const ui = {
  state: null,
  mode: "idle",
  selectedCard: null,
  selectedAttacker: null,
  busy: false,
};

function seedFromUrl() {
  const n = Number(new URLSearchParams(location.search).get("seed"));
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

function lastLog(state) {
  return state.log.length ? state.log[state.log.length - 1].text : "THE SIGNAL";
}

function keywordTags(unit) {
  const tags = [];
  if (unit.keywords?.static) tags.push("Static");
  if (unit.keywords?.rush) tags.push("Rush");
  if (unit.keywords?.mesh) tags.push("Mesh");
  if (unit.shatter && !unit.silenced) tags.push("Shatter");
  return tags;
}

function emphasize(text) {
  return String(text || "")
    .replace(/\b(Boot|Rush|Static|Mesh|Shatter|SIGNAL)\b/g, '<span class="kw-word">$1</span>')
    .replace(/\b(Boot:)/g, '<span class="kw-word">$1</span>');
}

function cardArtUrl(card) {
  const def = card.art || (card.defId === "remote_hand" ? "remote-hand" : null);
  if (def && ART[def]) return ART[def];
  return null;
}

function renderCard(card, opts = {}) {
  const playable = !!opts.playable;
  const selected = !!opts.selected;
  const el = document.createElement("button");
  el.type = "button";
  el.className = `card ${card.faction} ${playable ? "playable" : "unplayable"} ${selected ? "selected" : ""}`;
  el.dataset.uid = card.uid;
  const url = cardArtUrl(card);
  const artInner = url
    ? ""
    : `<div class="plate plate-${card.plate || card.type}">${(card.name || "?").slice(0, 2)}</div>`;
  const artStyle = url ? `style="background-image:url('${url}')"` : "";
  el.innerHTML = `
    <div class="cost">${card.cost}</div>
    <div class="namebar">${card.name}</div>
    <div class="stripe">${typeLabel(card.type)}</div>
    <div class="art" ${artStyle}>${artInner}</div>
    <div class="diamond"></div>
    <div class="rules">${emphasize(card.text || (card.type === TYPE.RELIC ? `${card.atk} attack, ${card.durability} durability.` : ""))}</div>
  `;
  if (opts.onClick) el.addEventListener("click", (e) => { e.stopPropagation(); opts.onClick(card); });
  return el;
}

function renderUnit(unit, opts = {}) {
  const el = document.createElement("button");
  el.type = "button";
  el.className = [
    "unit",
    unit.faction,
    unit.keywords?.mesh ? "mesh" : "",
    unit.keywords?.static ? "static" : "",
    opts.ready ? "ready" : "",
    opts.selected ? "selected" : "",
    opts.targetable ? "targetable" : "",
  ].filter(Boolean).join(" ");
  el.dataset.uid = unit.uid;
  const url = cardArtUrl(unit);
  const faceStyle = url ? `style="background-image:url('${url}')"` : "";
  const tags = keywordTags(unit)
    .map((t) => `<i>${t}</i>`)
    .join("");
  el.innerHTML = `
    <div class="face plate-${unit.plate || "unit"}" ${faceStyle}>
      <div class="kw">${tags}</div>
    </div>
    <div class="uname">${unit.name}</div>
    <div class="stat atk">${unit.atk}</div>
    <div class="stat hp ${unit.hp < unit.maxHp ? "hurt" : ""}">${unit.hp}</div>
  `;
  el.title = `${unit.name} ${unit.atk}/${unit.hp}${unit.text ? " — " + unit.text : ""}`;
  if (opts.onClick) el.addEventListener("click", (e) => { e.stopPropagation(); opts.onClick(unit); });
  return el;
}

function crystals(side, who) {
  const bits = [];
  for (let i = 0; i < 10; i++) {
    let cls = "crystal locked";
    if (i < side.maxMana && i < side.mana) cls = `crystal full ${who}`;
    else if (i < side.maxMana) cls = "crystal empty";
    bits.push(`<i class="${cls}"></i>`);
  }
  return `<div class="mana-row">${bits.join("")}<span class="mana-count">${side.mana}/${side.maxMana}</span></div>`;
}

function relicChip(hero) {
  if (!hero.relic) return `<div class="relic-chip">No relic</div>`;
  const r = hero.relic;
  return `<div class="relic-chip has">${r.name}<br>${r.atk} / ${r.durability}</div>`;
}

function cancelSelect() {
  ui.mode = "idle";
  ui.selectedCard = null;
  ui.selectedAttacker = null;
}

function targetsForCurrent() {
  const s = ui.state;
  if (!s) return [];
  if (ui.mode === "card-target" && ui.selectedCard) {
    const fx = ui.selectedCard.type === TYPE.UNIT ? ui.selectedCard.boot : ui.selectedCard.effect;
    return legalEffectTargets(s, PLAYER, fx);
  }
  if (ui.mode === "power-target") return [HERO_IDS[PLAYER], HERO_IDS[AI], ...s.player.board.map((u) => u.uid), ...s.ai.board.map((u) => u.uid)];
  if (ui.mode === "attack-target") return legalAttackTargets(s, PLAYER);
  return [];
}

function clickCard(card) {
  if (ui.busy || ui.state.turn !== PLAYER || ui.state.winner) return;
  if (!canPlayCard(ui.state, PLAYER, card, null)) {
    sfx("click");
    return;
  }
  const fx = card.type === TYPE.UNIT ? card.boot : card.effect;
  if (needsChooser(fx) && legalEffectTargets(ui.state, PLAYER, fx).length) {
    ui.mode = "card-target";
    ui.selectedCard = card;
    ui.selectedAttacker = null;
    paint();
    return;
  }
  const res = playCard(ui.state, PLAYER, card.uid, null);
  if (res.ok) {
    sfx("play");
    cancelSelect();
    afterPlayerAction();
  }
}

function clickTarget(id) {
  if (ui.busy || ui.state.winner) return;
  if (ui.mode === "card-target" && ui.selectedCard) {
    const res = playCard(ui.state, PLAYER, ui.selectedCard.uid, id);
    if (res.ok) sfx("play");
    cancelSelect();
    afterPlayerAction();
    return;
  }
  if (ui.mode === "power-target") {
    const res = useHeroPower(ui.state, PLAYER, id);
    if (res.ok) sfx("power");
    cancelSelect();
    afterPlayerAction();
    return;
  }
  if (ui.mode === "attack-target" && ui.selectedAttacker) {
    const res = attack(ui.state, PLAYER, ui.selectedAttacker, id);
    if (res.ok) sfx("attack");
    cancelSelect();
    afterPlayerAction();
  }
}

function clickFriendlyUnit(unit) {
  if (ui.busy || ui.state.turn !== PLAYER || ui.state.winner) return;
  const t = targetsForCurrent();
  if (t.includes(unit.uid)) {
    clickTarget(unit.uid);
    return;
  }
  if (canUnitAttack(unit)) {
    ui.mode = "attack-target";
    ui.selectedAttacker = unit.uid;
    ui.selectedCard = null;
    paint();
  }
}

function clickHero(who) {
  if (ui.busy || ui.state.winner) return;
  const id = HERO_IDS[who];
  const t = targetsForCurrent();
  if (t.includes(id)) {
    clickTarget(id);
    return;
  }
  if (who === PLAYER && canHeroAttack(ui.state.player.hero) && ui.state.turn === PLAYER) {
    ui.mode = "attack-target";
    ui.selectedAttacker = id;
    ui.selectedCard = null;
    paint();
  }
}

function clickPower() {
  if (ui.busy || ui.state.turn !== PLAYER || ui.state.winner) return;
  if (!canUseHeroPower(ui.state, PLAYER)) return;
  ui.mode = "power-target";
  ui.selectedCard = null;
  ui.selectedAttacker = null;
  paint();
}

async function playerEndTurn() {
  if (ui.busy || ui.state.turn !== PLAYER || ui.state.winner) return;
  cancelSelect();
  sfx("end");
  endTurn(ui.state, PLAYER);
  paint();
  await runAi();
}

async function runAi() {
  if (ui.state.winner || ui.state.turn !== AI) return;
  ui.busy = true;
  paint();
  await wait(520);
  let steps = 0;
  while (!ui.state.winner && ui.state.turn === AI && steps < 28) {
    const action = pickAiAction(ui.state);
    if (!action || action.type === "end") break;
    const res = applyAiAction(ui.state, action);
    if (!res.ok) break;
    if (action.type === "play") sfx("play");
    else if (action.type === "attack") sfx("attack");
    else if (action.type === "power") sfx("power");
    paint();
    await wait(action.type === "attack" ? 520 : 640);
    steps += 1;
  }
  if (!ui.state.winner && ui.state.turn === AI) {
    endTurn(ui.state, AI);
  }
  ui.busy = false;
  paint();
  if (ui.state.winner) fanfare();
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function afterPlayerAction() {
  paint();
  if (ui.state.winner) fanfare();
}

function fanfare() {
  if (ui.state.winner === PLAYER) sfx("win");
  else sfx("lose");
}

function playAgain() {
  ui.state = createMatch({ seed: seedFromUrl() });
  startMatch(ui.state);
  cancelSelect();
  ui.busy = false;
  paint();
}

function paintTitle() {
  const root = stage();
  root.innerHTML = "";
  const screen = document.createElement("div");
  screen.id = "title-screen";
  screen.className = "screen";
  screen.style.backgroundImage = `url('${titleArt}')`;
  screen.innerHTML = `
    <div class="title-copy">
      <h1>THE SIGNAL</h1>
      <div class="tag">Arcade card battler</div>
      <button class="play-btn" type="button">Play — press Enter</button>
      <div class="controls-line">Click cards · click a target if needed · E end turn · Esc cancel · M mute later</div>
    </div>
  `;
  screen.querySelector(".play-btn").addEventListener("click", beginPlay);
  screen.addEventListener("click", (e) => {
    if (e.target.closest(".play-btn")) return;
    beginPlay();
  });
  root.appendChild(screen);
}

function beginPlay() {
  sfx("click");
  ui.state = createMatch({ seed: seedFromUrl() });
  startMatch(ui.state);
  cancelSelect();
  paint();
}

function paintPlay() {
  const s = ui.state;
  const root = stage();
  root.innerHTML = "";
  const screen = document.createElement("div");
  screen.id = "play-screen";
  screen.className = "screen";
  screen.style.setProperty("--table", `url('${titleArt}')`);

  const tset = new Set(targetsForCurrent());
  const playerReady = s.turn === PLAYER && !ui.busy && !s.winner;

  const enemyPowerReady = false;
  const playerPowerReady = playerReady && canUseHeroPower(s, PLAYER);

  screen.innerHTML = `
    <div class="hero-strip enemy-strip"></div>
    <div class="enemy-hand"></div>
    <div class="board">
      <div class="lane enemy-lane ${s.ai.board.length ? "" : "empty"}" data-empty="Tessera board"></div>
      <div class="lane player-lane ${s.player.board.length ? "" : "empty"}" data-empty="Your board"></div>
    </div>
    <div class="ticker">${escapeHtml(lastLog(s))}</div>
    <div class="hand-row">
      <div class="hand"></div>
      <button class="end-turn" type="button" ${playerReady ? "" : "disabled"}>End Turn</button>
    </div>
    <div class="hero-strip player-strip"></div>
  `;

  const enemyStrip = screen.querySelector(".enemy-strip");
  enemyStrip.appendChild(heroBlock(s.ai, AI, tset.has(HERO_IDS[AI]), false, enemyPowerReady));
  const playerStrip = screen.querySelector(".player-strip");
  playerStrip.appendChild(heroBlock(s.player, PLAYER, tset.has(HERO_IDS[PLAYER]), playerReady && canHeroAttack(s.player.hero), playerPowerReady));

  const eh = screen.querySelector(".enemy-hand");
  for (let i = 0; i < s.ai.hand.length; i++) {
    const back = document.createElement("div");
    back.className = "card-back";
    eh.appendChild(back);
  }

  const elane = screen.querySelector(".enemy-lane");
  for (const u of s.ai.board) {
    elane.appendChild(
      renderUnit(u, {
        targetable: tset.has(u.uid),
        onClick: () => {
          if (tset.has(u.uid)) clickTarget(u.uid);
        },
      })
    );
  }
  const plane = screen.querySelector(".player-lane");
  for (const u of s.player.board) {
    plane.appendChild(
      renderUnit(u, {
        ready: playerReady && canUnitAttack(u),
        selected: ui.selectedAttacker === u.uid,
        targetable: tset.has(u.uid),
        onClick: () => clickFriendlyUnit(u),
      })
    );
  }

  const hand = screen.querySelector(".hand");
  s.player.hand.forEach((card, i) => {
    const playable = playerReady && canPlayCard(s, PLAYER, card, null);
    const el = renderCard(card, {
      playable,
      selected: ui.selectedCard && ui.selectedCard.uid === card.uid,
      onClick: () => clickCard(card),
    });
    el.style.zIndex = String(i + 1);
    hand.appendChild(el);
  });

  screen.querySelector(".end-turn").addEventListener("click", playerEndTurn);

  if (ui.mode === "card-target" || ui.mode === "power-target") {
    const b = document.createElement("div");
    b.className = "banner";
    b.textContent = "Choose a target";
    screen.appendChild(b);
  } else if (ui.mode === "attack-target") {
    const b = document.createElement("div");
    b.className = "banner";
    b.textContent = "Choose an attack target";
    screen.appendChild(b);
  } else if (s.turn === AI && !s.winner) {
    const b = document.createElement("div");
    b.className = "banner tess";
    b.textContent = "Tessera plays";
    screen.appendChild(b);
  }

  if (s.winner) {
    screen.appendChild(resultOverlay(s));
  }

  root.appendChild(screen);
}

function heroBlock(side, who, targetable, ready, powerReady) {
  const wrap = document.createElement("div");
  wrap.style.display = "contents";
  const card = document.createElement("div");
  card.className = `hero-card ${who} ${targetable ? "targetable" : ""}`;
  const art = who === PLAYER ? crtArt : tessArt;
  const powerCls = [
    "power-btn",
    who,
    powerReady ? "ready" : "",
    side.hero.powerUsed ? "used" : "",
  ].filter(Boolean).join(" ");
  card.innerHTML = `
    <div class="portrait ${targetable ? "targetable" : ""} ${ready ? "ready" : ""}" style="background-image:url('${art}')">
      <div class="hp-pip">${side.hero.hp}</div>
    </div>
    <div class="hero-meta">
      <div class="hero-name">${side.hero.name}</div>
      ${crystals(side, who)}
    </div>
  `;
  if (who === AI) {
    card.innerHTML = `
      <div class="hero-meta">
        <div class="hero-name">${side.hero.name}</div>
        ${crystals(side, who)}
      </div>
      <div class="portrait ${targetable ? "targetable" : ""}" style="background-image:url('${art}')">
        <div class="hp-pip">${side.hero.hp}</div>
      </div>
    `;
  }
  card.querySelector(".portrait").addEventListener("click", () => clickHero(who));

  const power = document.createElement("button");
  power.type = "button";
  power.className = powerCls;
  power.disabled = who !== PLAYER || !powerReady;
  power.innerHTML = `${side.hero.powerName}<br><span class="hint">${side.hero.powerCost} mana</span>`;
  if (who === PLAYER) power.addEventListener("click", clickPower);

  const deck = document.createElement("div");
  deck.className = "deck-chip";
  deck.innerHTML = `Deck<br>${side.deck.length}`;

  const relic = document.createElement("div");
  relic.innerHTML = relicChip(side.hero);

  if (who === AI) {
    wrap.append(card, power, deck, relic);
  } else {
    wrap.append(card, power, relic, deck);
  }
  return wrap;
}

function resultOverlay(s) {
  const el = document.createElement("div");
  el.id = "result-screen";
  el.className = `screen ${s.winner === PLAYER ? "win" : s.winner === AI ? "lose" : "draw"}`;
  const title =
    s.winner === PLAYER ? "SIGNAL LOCKED" : s.winner === AI ? "SIGNAL LOST" : "DEAD AIR";
  const blurb =
    s.winner === PLAYER
      ? "CRT holds the food court. Tessera goes dark."
      : s.winner === AI
        ? "The Directory writes over the broadcast."
        : "Both heroes drop. The fountain keeps running.";
  el.innerHTML = `
    <h2>${title}</h2>
    <p>${blurb}</p>
    <button class="play-btn" type="button">Play Again</button>
  `;
  el.querySelector(".play-btn").addEventListener("click", playAgain);
  return el;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function paint() {
  if (!ui.state || ui.state.screen === "title") {
    paintTitle();
    return;
  }
  paintPlay();
}

function playFromHotkey(n) {
  if (!ui.state || ui.state.turn !== PLAYER || ui.busy || ui.state.winner) return;
  const card = ui.state.player.hand[n];
  if (card) clickCard(card);
}

export function mount() {
  const root = stage();
  root.style.setProperty("--table", `url('${titleArt}')`);
  ui.state = createMatch({ seed: seedFromUrl() });
  ui.state.screen = "title";
  paint();

  window.addEventListener("keydown", (e) => {
    if (e.repeat) return;
    const k = e.key;
    if (k === "m" || k === "M") {
      toggleMute();
      return;
    }
    if (k === "Escape") {
      cancelSelect();
      paint();
      return;
    }
    if (ui.state.screen === "title" && (k === "Enter" || k === " ")) {
      e.preventDefault();
      beginPlay();
      return;
    }
    if (ui.state.winner && (k === "Enter" || k === " ")) {
      e.preventDefault();
      playAgain();
      return;
    }
    if (k === "e" || k === "E") {
      e.preventDefault();
      playerEndTurn();
      return;
    }
    if (k >= "1" && k <= "9") playFromHotkey(Number(k) - 1);
    if (k === "0") playFromHotkey(9);
  });
}

export const __ui = ui;
