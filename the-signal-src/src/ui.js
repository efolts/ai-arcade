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
  drainFx,
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
import {
  cloneAt,
  drawAim,
  dur,
  flyArc,
  heroHurt,
  hideAim,
  impactFlash,
  lurchToward,
  meshSpark,
  placeFixed,
  pulseEl,
  rectOf,
  scrapeOff,
  wait,
  floatText,
  deckThump,
} from "./fx.js";

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
  pointer: { x: 0, y: 0 },
};

function seedFromUrl() {
  const n = Number(new URLSearchParams(location.search).get("seed"));
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

function lastLog(state) {
  return state.log.length ? state.log[state.log.length - 1].text : "THE SIGNAL";
}

function cardArtUrl(card) {
  const def = card.art || (card.defId === "remote_hand" ? "remote-hand" : null);
  return def && ART[def] ? ART[def] : null;
}

function emphasize(text) {
  return String(text || "")
    .replace(/\b(Boot|Rush|Static|Mesh|Shatter|SIGNAL)\b/g, '<span class="kw-word">$1</span>')
    .replace(/\b(Boot:)/g, '<span class="kw-word">$1</span>');
}

function shortName(name) {
  return String(name || "").length > 14 ? `${name.slice(0, 13)}…` : name;
}

function $id(id) {
  return document.getElementById(id);
}

function findEl(id) {
  if (!id) return null;
  return document.querySelector(`[data-id="${id}"]`);
}

function renderCard(card, opts = {}) {
  const playable = !!opts.playable;
  const selected = !!opts.selected;
  const el = document.createElement("button");
  el.type = "button";
  el.className = `card ${card.faction} ${playable ? "playable" : "unplayable"} ${selected ? "selected" : ""}`;
  el.dataset.uid = card.uid;
  el.dataset.id = card.uid;
  const url = cardArtUrl(card);
  const artInner = url ? "" : `<div class="plate plate-${card.plate || card.type}">${(card.name || "?").slice(0, 2)}</div>`;
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

function badgeHtml(unit) {
  const bits = [];
  if (unit.keywords?.static) bits.push('<i class="badge static" title="Static"></i>');
  if (unit.keywords?.mesh) bits.push('<i class="badge mesh" title="Mesh"></i>');
  if (unit.keywords?.rush) bits.push('<i class="badge rush" title="Rush"></i>');
  if (unit.shatter && !unit.silenced) bits.push('<i class="badge shatter" title="Shatter"></i>');
  return bits.join("");
}

function renderMinion(unit, opts = {}) {
  const el = document.createElement("button");
  el.type = "button";
  el.className = [
    "minion",
    unit.faction,
    unit.keywords?.mesh ? "mesh" : "",
    unit.keywords?.static ? "static" : "",
    opts.ready ? "ready" : "",
    opts.selected ? "selected" : "",
    opts.targetable ? "targetable" : "",
  ].filter(Boolean).join(" ");
  el.dataset.uid = unit.uid;
  el.dataset.id = unit.uid;
  const url = cardArtUrl(unit);
  const artStyle = url ? `style="background-image:url('${url}')"` : "";
  const artInner = url ? "" : `<div class="plate plate-${unit.plate || "unit"}">${(unit.name || "?").slice(0, 2)}</div>`;
  el.innerHTML = `
    <div class="mini-art plate-${unit.plate || "unit"}" ${artStyle}>${artInner}<div class="badges">${badgeHtml(unit)}</div></div>
    <div class="mini-name">${shortName(unit.name)}</div>
    <div class="pip atk">${unit.atk}</div>
    <div class="pip hp ${unit.hp < unit.maxHp ? "hurt" : ""}">${unit.hp}</div>
  `;
  el.title = `${unit.name} ${unit.atk}/${unit.hp}${unit.text ? " — " + unit.text : ""}`;
  if (opts.onClick) el.addEventListener("click", (e) => { e.stopPropagation(); opts.onClick(unit); });
  return el;
}

function cardBack(faction, extra = "") {
  const el = document.createElement("div");
  el.className = `card-back ${faction} ${extra}`.trim();
  return el;
}

function crystalsHtml(side, who, pulse) {
  const bits = [];
  for (let i = 0; i < 10; i++) {
    let cls = "crystal locked";
    if (i < side.maxMana && i < side.mana) cls = `crystal full ${who}${pulse ? " pulse" : ""}`;
    else if (i < side.maxMana) cls = "crystal empty";
    bits.push(`<i class="${cls}"></i>`);
  }
  return `<div class="mana-row">${bits.join("")}<span class="mana-count">${side.mana}/${side.maxMana}</span></div>`;
}

function cancelSelect() {
  ui.mode = "idle";
  ui.selectedCard = null;
  ui.selectedAttacker = null;
  hideAim();
  const hint = $id("aim-hint");
  if (hint) hint.hidden = true;
}

function targetsForCurrent() {
  const s = ui.state;
  if (!s) return [];
  if (ui.mode === "card-target" && ui.selectedCard) {
    const fx = ui.selectedCard.type === TYPE.UNIT ? ui.selectedCard.boot : ui.selectedCard.effect;
    return legalEffectTargets(s, PLAYER, fx);
  }
  if (ui.mode === "power-target") {
    return [HERO_IDS[PLAYER], HERO_IDS[AI], ...s.player.board.map((u) => u.uid), ...s.ai.board.map((u) => u.uid)];
  }
  if (ui.mode === "attack-target") return legalAttackTargets(s, PLAYER);
  return [];
}

function sourceRect() {
  if (ui.mode === "card-target" && ui.selectedCard) return rectOf(findEl(ui.selectedCard.uid));
  if (ui.mode === "attack-target" && ui.selectedAttacker) return rectOf(findEl(ui.selectedAttacker));
  if (ui.mode === "power-target") return rectOf($id("power-player"));
  return null;
}

function updateAim(clientX, clientY) {
  if (!["card-target", "attack-target", "power-target"].includes(ui.mode)) {
    hideAim();
    return;
  }
  const src = sourceRect();
  if (!src) return;
  const legal = new Set(targetsForCurrent());
  const under = document.elementFromPoint(clientX, clientY);
  const hit = under?.closest("[data-id]");
  if (hit && legal.has(hit.dataset.id)) {
    const r = rectOf(hit);
    drawAim(src, r.left + r.width / 2, r.top + r.height / 2, "crt");
    return;
  }
  drawAim(src, clientX, clientY, "crt");
}

function tableCenterRect() {
  const t = $id("table");
  return rectOf(t) || { left: 400, top: 220, width: 80, height: 80 };
}

function slotRect(who, index) {
  const lane = who === PLAYER ? $id("player-lane") : $id("enemy-lane");
  const slots = lane ? [...lane.querySelectorAll(".slot")] : [];
  return rectOf(slots[Math.min(index, slots.length - 1)]) || tableCenterRect();
}

function nextSlotRect(who) {
  const len = who === PLAYER ? ui.state.player.board.length : ui.state.ai.board.length;
  return slotRect(who, len);
}

function fallbackRect(who) {
  const deck = $id(who === PLAYER ? "deck-player" : "deck-ai");
  return rectOf(deck) || tableCenterRect();
}

async function flashBanner(text, faction) {
  const b = $id("turn-banner");
  if (!b) return;
  b.textContent = text;
  b.className = `turn-banner show ${faction === "tessera" ? "tess" : ""}`;
  await wait(dur(720));
  b.classList.remove("show");
}

function setHint(text) {
  const hint = $id("aim-hint");
  if (!hint) return;
  if (!text) {
    hint.hidden = true;
    return;
  }
  hint.hidden = false;
  hint.textContent = text;
}

async function runEventAnims(events) {
  for (const e of events) {
    if (e.type === "mesh") {
      const n = findEl(e.id);
      meshSpark(n);
      sfx("mesh");
      floatText(rectOf(n) || tableCenterRect(), "MESH", "floater-mesh");
      await wait(dur(120));
    } else if (e.type === "damage") {
      const n = findEl(e.id);
      const r = rectOf(n) || tableCenterRect();
      floatText(r, `-${e.amount}`, `floater ${e.faction}${e.dead ? " crit" : ""}`);
      if (e.kind === "hero") heroHurt(n);
      else impactFlash(n, e.faction);
      sfx("impact");
      await wait(dur(80));
    } else if (e.type === "fatigue") {
      deckThump($id(e.who === PLAYER ? "deck-player" : "deck-ai"));
      floatText(rectOf(findEl(e.id)) || tableCenterRect(), `FATIGUE ${e.amount}`, "floater-fatigue");
      sfx("fatigue");
    } else if (e.type === "shatter") {
      await wait(dur(180));
    } else if (e.type === "death") {
      const n = findEl(e.id);
      sfx("death");
      await scrapeOff(n);
    } else if (e.type === "draw" && e.who === PLAYER && e.reason === "turn") {
      /* handled by animateDraw */
    }
  }
}

async function animateDraw(who, events) {
  const draws = events.filter((e) => e.type === "draw" && e.who === who && !e.burned);
  const deck = $id(who === PLAYER ? "deck-player" : "deck-ai");
  const dest = who === PLAYER ? document.querySelector(".hand") : document.querySelector(".enemy-hand");
  for (const _d of draws) {
    const ghost = cardBack(who === PLAYER ? "crt" : "tessera", "large fx-clone");
    placeFixed(ghost, rectOf(deck) || fallbackRect(who));
    await flyArc(ghost, rectOf(dest) || tableCenterRect(), { duration: 340, arc: 48 });
    ghost.remove();
    sfx("draw");
  }
}

function makeGhostFromHand(card, fromEl, fromR) {
  if (fromEl) {
    const c = cloneAt(fromEl, fromR);
    if (c) return c;
  }
  const ghost = renderCard(card, { playable: true });
  ghost.classList.add("fx-clone");
  placeFixed(ghost, fromR || fallbackRect(PLAYER));
  return ghost;
}

async function resolveAnimated(who, kind, apply, meta = {}) {
  ui.busy = true;
  const keepBusy = !!meta.keepBusy;
  syncChrome();
  const fromEl = meta.fromEl;
  const fromR = rectOf(fromEl) || meta.fromR;
  const toR = meta.toR;
  if (fromEl && who === PLAYER) fromEl.style.visibility = "hidden";

  const result = apply();
  const events = drainFx(ui.state);
  if (!result || !result.ok) {
    if (fromEl) fromEl.style.visibility = "";
    ui.busy = false;
    sync();
    return result;
  }

  if (kind === "unit" || kind === "signal" || kind === "relic") {
    const ghost =
      who === PLAYER
        ? makeGhostFromHand(meta.card || result.card, fromEl, fromR)
        : (() => {
            const g = cardBack("tessera", "large fx-clone");
            placeFixed(g, fromR || fallbackRect(AI));
            return g;
          })();
    await flyArc(ghost, toR || tableCenterRect(), { duration: kind === "signal" ? 380 : 440 });
    if (kind === "signal" && meta.targetEl) impactFlash(meta.targetEl, who === PLAYER ? "crt" : "tessera");
    ghost.remove();
    sfx(kind === "relic" ? "equip" : "play");
  } else if (kind === "attack") {
    await lurchToward(fromEl, toR);
    impactFlash(meta.targetEl, who === PLAYER ? "crt" : "tessera");
    sfx("attack");
  } else if (kind === "power") {
    pulseEl(meta.powerEl, "press");
    pulseEl(meta.heroEl, "power-pulse");
    sfx("power");
    await wait(dur(160));
  }

  await runEventAnims(events);
  cancelSelect();
  sync();
  if (!keepBusy) ui.busy = false;
  syncChrome();
  if (ui.state.winner) {
    fanfare();
    syncResult();
  }
  return result;
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
    setHint("Choose a target");
    sync();
    return;
  }
  const fromEl = findEl(card.uid);
  const dest =
    card.type === TYPE.UNIT
      ? nextSlotRect(PLAYER)
      : card.type === TYPE.RELIC
        ? rectOf($id("relic-player")) || tableCenterRect()
        : tableCenterRect();
  resolveAnimated(PLAYER, card.type, () => playCard(ui.state, PLAYER, card.uid, null), {
    fromEl,
    toR: dest,
    card,
  });
}

function clickTarget(id) {
  if (ui.busy || ui.state.winner) return;
  if (ui.mode === "card-target" && ui.selectedCard) {
    const card = ui.selectedCard;
    const fromEl = findEl(card.uid);
    const targetEl = findEl(id);
    const dest =
      card.type === TYPE.UNIT ? nextSlotRect(PLAYER) : rectOf(targetEl) || tableCenterRect();
    resolveAnimated(PLAYER, card.type, () => playCard(ui.state, PLAYER, card.uid, id), {
      fromEl,
      toR: dest,
      targetEl,
      card,
    });
    return;
  }
  if (ui.mode === "power-target") {
    resolveAnimated(PLAYER, "power", () => useHeroPower(ui.state, PLAYER, id), {
      powerEl: $id("power-player"),
      heroEl: findEl(HERO_IDS[PLAYER]),
      targetEl: findEl(id),
      toR: rectOf(findEl(id)),
    });
    return;
  }
  if (ui.mode === "attack-target" && ui.selectedAttacker) {
    const fromEl = findEl(ui.selectedAttacker);
    const targetEl = findEl(id);
    resolveAnimated(PLAYER, "attack", () => attack(ui.state, PLAYER, ui.selectedAttacker, id), {
      fromEl,
      targetEl,
      toR: rectOf(targetEl),
    });
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
    setHint("Choose an attack target");
    sync();
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
    setHint("Choose an attack target");
    sync();
  }
}

function clickPower() {
  if (ui.busy || ui.state.turn !== PLAYER || ui.state.winner) return;
  if (!canUseHeroPower(ui.state, PLAYER)) return;
  ui.mode = "power-target";
  ui.selectedCard = null;
  ui.selectedAttacker = null;
  setHint("Remote — choose a target");
  sync();
}

async function playerEndTurn() {
  if (ui.busy || ui.state.turn !== PLAYER || ui.state.winner) return;
  cancelSelect();
  sfx("end");
  ui.busy = true;
  syncChrome();
  endTurn(ui.state, PLAYER);
  const ev = drainFx(ui.state);
  await flashBanner("TESSERA TURN", "tessera");
  await animateDraw(AI, ev);
  sync();
  await runAi();
}

async function runAi() {
  if (ui.state.winner) {
    ui.busy = false;
    sync();
    fanfare();
    syncResult();
    return;
  }
  ui.busy = true;
  syncChrome();
  await wait(dur(220));
  let steps = 0;
  while (!ui.state.winner && ui.state.turn === AI && steps < 28) {
    const action = pickAiAction(ui.state);
    if (!action || action.type === "end") break;
    await performAi(action);
    steps += 1;
    await wait(dur(160));
  }
  if (!ui.state.winner && ui.state.turn === AI) {
    endTurn(ui.state, AI);
    const ev = drainFx(ui.state);
    await flashBanner("YOUR TURN", "crt");
    await animateDraw(PLAYER, ev);
    pulseMana(PLAYER);
  }
  ui.busy = false;
  sync();
  if (ui.state.winner) {
    fanfare();
    syncResult();
  }
}

async function performAi(action) {
  if (action.type === "play") {
    const card = ui.state.ai.hand.find((c) => c.uid === action.cardId);
    const fromEl = document.querySelector(".enemy-hand .card-back");
    const dest =
      card?.type === TYPE.UNIT
        ? nextSlotRect(AI)
        : card?.type === TYPE.RELIC
          ? rectOf($id("relic-ai")) || tableCenterRect()
          : rectOf(findEl(action.targetId)) || tableCenterRect();
    await resolveAnimated(AI, card?.type || "unit", () => applyAiAction(ui.state, action), {
      fromEl,
      fromR: rectOf(fromEl) || fallbackRect(AI),
      toR: dest,
      targetEl: findEl(action.targetId),
      card,
      keepBusy: true,
    });
    return;
  }
  if (action.type === "attack") {
    await resolveAnimated(AI, "attack", () => applyAiAction(ui.state, action), {
      fromEl: findEl(action.attackerId),
      targetEl: findEl(action.targetId),
      toR: rectOf(findEl(action.targetId)),
      keepBusy: true,
    });
    return;
  }
  if (action.type === "power") {
    await resolveAnimated(AI, "power", () => applyAiAction(ui.state, action), {
      powerEl: $id("power-ai"),
      heroEl: findEl(HERO_IDS[AI]),
      toR: nextSlotRect(AI),
      keepBusy: true,
    });
  }
}

function pulseMana(who) {
  const row = document.querySelector(`.hero-card.${who} .mana-row`);
  if (!row) return;
  row.querySelectorAll(".crystal.full").forEach((c) => {
    c.classList.remove("pulse");
    void c.offsetWidth;
    c.classList.add("pulse");
  });
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
  buildPlay();
  sync();
  flashBanner("YOUR TURN", "crt");
  pulseMana(PLAYER);
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
  drainFx(ui.state);
  cancelSelect();
  buildPlay();
  sync();
  flashBanner("YOUR TURN", "crt");
  pulseMana(PLAYER);
}

function buildPlay() {
  const root = stage();
  root.innerHTML = "";
  const screen = document.createElement("div");
  screen.id = "play-screen";
  screen.className = "screen";
  screen.style.setProperty("--table", `url('${titleArt}')`);
  screen.innerHTML = `
    <div class="hero-strip enemy-strip" id="enemy-strip"></div>
    <div class="enemy-hand" id="enemy-hand"></div>
    <div id="table">
      <div class="lane" id="enemy-lane"></div>
      <div class="lane" id="player-lane"></div>
    </div>
    <div class="ticker" id="ticker"></div>
    <div class="hand-row">
      <div class="hand" id="player-hand"></div>
      <button class="end-turn" id="end-turn" type="button">End Turn</button>
    </div>
    <div class="hero-strip player-strip" id="player-strip"></div>
    <div id="fx-layer">
      <svg id="aim" viewBox="0 0 1200 780" preserveAspectRatio="none">
        <path d=""></path>
        <circle r="5" cx="0" cy="0"></circle>
      </svg>
    </div>
    <div class="turn-banner" id="turn-banner"></div>
    <div class="aim-hint" id="aim-hint" hidden></div>
    <div id="result-screen" class="screen" hidden></div>
  `;
  const elane = screen.querySelector("#enemy-lane");
  const plane = screen.querySelector("#player-lane");
  for (let i = 0; i < 7; i++) {
    const a = document.createElement("div");
    a.className = "slot empty";
    const b = document.createElement("div");
    b.className = "slot empty";
    elane.appendChild(a);
    plane.appendChild(b);
  }
  screen.querySelector("#end-turn").addEventListener("click", playerEndTurn);
  root.appendChild(screen);
  renderHeroStrip("enemy-strip", AI);
  renderHeroStrip("player-strip", PLAYER);
}

function renderHeroStrip(id, who) {
  const host = $id(id);
  if (!host) return;
  host.innerHTML = "";
  const side = who === PLAYER ? ui.state.player : ui.state.ai;
  const wrap = document.createElement("div");
  wrap.style.display = "contents";

  const card = document.createElement("div");
  card.className = `hero-card ${who}`;
  const art = who === PLAYER ? crtArt : tessArt;
  const portrait = `
    <div class="portrait" data-id="${side.hero.id}" data-who="${who}" style="background-image:url('${art}')">
      <div class="hp-pip" id="hp-${who}">${side.hero.hp}</div>
    </div>`;
  const meta = `<div class="hero-meta"><div class="hero-name">${side.hero.name}</div><div id="mana-${who}">${crystalsHtml(side, who, false)}</div></div>`;
  card.innerHTML = who === AI ? meta + portrait : portrait + meta;
  card.querySelector(".portrait").addEventListener("click", () => clickHero(who));

  const power = document.createElement("button");
  power.type = "button";
  power.id = who === PLAYER ? "power-player" : "power-ai";
  power.className = `power-btn ${who}`;
  power.innerHTML = `${side.hero.powerName}<br><span class="hint">${side.hero.powerCost} mana</span>`;
  if (who === PLAYER) power.addEventListener("click", clickPower);

  const deck = document.createElement("div");
  deck.className = "deck-chip";
  deck.id = who === PLAYER ? "deck-player" : "deck-ai";
  deck.innerHTML = `<div class="mini-back card-back ${who === PLAYER ? "crt" : "tessera"}"></div>Deck <span class="deck-n">${side.deck.length}</span>`;

  const relic = document.createElement("div");
  relic.className = `relic-slot ${who}`;
  relic.id = who === PLAYER ? "relic-player" : "relic-ai";
  relic.textContent = "No relic";

  if (who === AI) wrap.append(card, power, deck, relic);
  else wrap.append(card, power, relic, deck);
  host.appendChild(wrap);
}

function fillLane(laneId, units, who) {
  const lane = $id(laneId);
  if (!lane) return;
  const slots = [...lane.querySelectorAll(".slot")];
  const tset = new Set(targetsForCurrent());
  const playerReady = ui.state.turn === PLAYER && !ui.busy && !ui.state.winner;
  units.forEach((unit, i) => {
    const slot = slots[i];
    if (!slot) return;
    slot.classList.remove("empty");
    const opts = {
      ready: who === PLAYER && playerReady && canUnitAttack(unit),
      selected: ui.selectedAttacker === unit.uid,
      targetable: tset.has(unit.uid),
      onClick: () => {
        if (who === PLAYER) clickFriendlyUnit(unit);
        else if (tset.has(unit.uid)) clickTarget(unit.uid);
      },
    };
    const existing = slot.querySelector(".minion");
    if (existing && existing.dataset.uid === unit.uid && !existing.classList.contains("dying")) {
      existing.className = renderMinion(unit, opts).className;
      existing.querySelector(".pip.atk").textContent = unit.atk;
      const hp = existing.querySelector(".pip.hp");
      hp.textContent = unit.hp;
      hp.classList.toggle("hurt", unit.hp < unit.maxHp);
      existing.querySelector(".badges").innerHTML = badgeHtml(unit);
      existing.onclick = opts.onClick;
    } else {
      slot.innerHTML = "";
      slot.appendChild(renderMinion(unit, opts));
    }
  });
  for (let i = units.length; i < 7; i++) {
    slots[i].classList.add("empty");
    slots[i].innerHTML = "";
  }
}

function syncChrome() {
  const s = ui.state;
  if (!s || !$id("play-screen")) return;
  const tset = new Set(targetsForCurrent());
  const playerReady = s.turn === PLAYER && !ui.busy && !s.winner;

  $id("hp-player") && ($id("hp-player").textContent = s.player.hero.hp);
  $id("hp-ai") && ($id("hp-ai").textContent = s.ai.hero.hp);
  const mp = $id("mana-player");
  const ma = $id("mana-ai");
  if (mp) mp.innerHTML = crystalsHtml(s.player, PLAYER, false);
  if (ma) ma.innerHTML = crystalsHtml(s.ai, AI, false);

  const pp = findEl(HERO_IDS[PLAYER]);
  const ap = findEl(HERO_IDS[AI]);
  if (pp) {
    pp.classList.toggle("targetable", tset.has(HERO_IDS[PLAYER]));
    pp.classList.toggle("ready", playerReady && canHeroAttack(s.player.hero));
  }
  if (ap) ap.classList.toggle("targetable", tset.has(HERO_IDS[AI]));

  const pwr = $id("power-player");
  if (pwr) {
    const ready = playerReady && canUseHeroPower(s, PLAYER);
    pwr.disabled = !ready;
    pwr.classList.toggle("ready", ready);
    pwr.classList.toggle("used", s.player.hero.powerUsed);
  }
  const apwr = $id("power-ai");
  if (apwr) {
    apwr.disabled = true;
    apwr.classList.toggle("used", s.ai.hero.powerUsed);
  }

  const end = $id("end-turn");
  if (end) end.disabled = !playerReady;

  updateRelic("relic-player", s.player.hero, PLAYER);
  updateRelic("relic-ai", s.ai.hero, AI);
  const dn = document.querySelector("#deck-player .deck-n");
  const da = document.querySelector("#deck-ai .deck-n");
  if (dn) dn.textContent = s.player.deck.length;
  if (da) da.textContent = s.ai.deck.length;

  const eh = $id("enemy-hand");
  if (eh) {
    eh.innerHTML = "";
    for (let i = 0; i < s.ai.hand.length; i++) eh.appendChild(cardBack("tessera"));
  }

  const tick = $id("ticker");
  if (tick) tick.textContent = lastLog(s);
}

function updateRelic(id, hero, who) {
  const el = $id(id);
  if (!el) return;
  if (!hero.relic) {
    el.classList.remove("has");
    el.textContent = "No relic";
    return;
  }
  el.classList.add("has");
  el.innerHTML = `${hero.relic.name}<br>${hero.relic.atk} / ${hero.relic.durability}`;
}

function syncHand() {
  const s = ui.state;
  const hand = $id("player-hand");
  if (!hand) return;
  const playerReady = s.turn === PLAYER && !ui.busy && !s.winner;
  const have = [...hand.querySelectorAll(".card")].map((c) => c.dataset.uid);
  const want = s.player.hand.map((c) => c.uid);
  if (have.join() !== want.join()) {
    hand.innerHTML = "";
    s.player.hand.forEach((card, i) => {
      const el = renderCard(card, {
        playable: playerReady && canPlayCard(s, PLAYER, card, null),
        selected: ui.selectedCard && ui.selectedCard.uid === card.uid,
        onClick: () => clickCard(card),
      });
      el.style.zIndex = String(i + 1);
      el.style.animationDelay = `${i * 30}ms`;
      hand.appendChild(el);
    });
    return;
  }
  s.player.hand.forEach((card) => {
    const el = hand.querySelector(`[data-uid="${card.uid}"]`);
    if (!el) return;
    el.classList.toggle("playable", playerReady && canPlayCard(s, PLAYER, card, null));
    el.classList.toggle("unplayable", !(playerReady && canPlayCard(s, PLAYER, card, null)));
    el.classList.toggle("selected", !!(ui.selectedCard && ui.selectedCard.uid === card.uid));
    el.style.visibility = "";
  });
}

function syncResult() {
  const overlay = $id("result-screen");
  if (!overlay || !ui.state.winner) {
    if (overlay) overlay.hidden = true;
    return;
  }
  const s = ui.state;
  overlay.hidden = false;
  overlay.className = `screen ${s.winner === PLAYER ? "win" : s.winner === AI ? "lose" : "draw"}`;
  const title = s.winner === PLAYER ? "SIGNAL LOCKED" : s.winner === AI ? "SIGNAL LOST" : "DEAD AIR";
  const blurb =
    s.winner === PLAYER
      ? "CRT holds the food court. Tessera goes dark."
      : s.winner === AI
        ? "The Directory writes over the broadcast."
        : "Both heroes drop. The fountain keeps running.";
  const img = s.winner === AI ? tessArt : crtArt;
  overlay.innerHTML = `
    <div class="result-card">
      <img alt="" src="${img}" />
      <h2>${title}</h2>
      <p>${blurb}</p>
      <button class="play-btn" type="button">Play Again</button>
    </div>
  `;
  overlay.querySelector(".play-btn").addEventListener("click", playAgain);
}

function sync() {
  if (!ui.state || ui.state.screen === "title") {
    paintTitle();
    return;
  }
  if (!$id("play-screen")) buildPlay();
  fillLane("enemy-lane", ui.state.ai.board, AI);
  fillLane("player-lane", ui.state.player.board, PLAYER);
  syncHand();
  syncChrome();
  syncResult();
}

function playFromHotkey(n) {
  if (!ui.state || ui.state.turn !== PLAYER || ui.busy || ui.state.winner) return;
  const card = ui.state.player.hand[n];
  if (card) clickCard(card);
}

export function paint() {
  sync();
}

export function mount() {
  const root = stage();
  root.style.setProperty("--table", `url('${titleArt}')`);
  ui.state = createMatch({ seed: seedFromUrl() });
  ui.state.screen = "title";
  paintTitle();

  window.addEventListener("pointermove", (e) => {
    ui.pointer = { x: e.clientX, y: e.clientY };
    updateAim(e.clientX, e.clientY);
  });

  window.addEventListener("keydown", (e) => {
    if (e.repeat) return;
    const k = e.key;
    if (k === "m" || k === "M") {
      toggleMute();
      return;
    }
    if (k === "Escape") {
      cancelSelect();
      sync();
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
