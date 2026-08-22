import titleArt from "./art/title.jpg";
import crtArt from "./art/hero-crt.jpg";
import tessArt from "./art/hero-tessera.png";
import remoteArt from "./art/card-remote-hand.jpg";
import matrixArt from "./art/matrix-bg.jpg";
import crtBack from "./art/card-back-crt.jpg";
import tessBack from "./art/card-back-tessera.jpg";
import {
  AI,
  HERO_IDS,
  PLAYER,
  attack,
  canHeroAttack,
  canPlayCard,
  canUnitAttack,
  canUseHeroPower,
  beginTurn,
  confirmMulligan,
  createMatch,
  dealOpening,
  drainFx,
  endTurn,
  legalAttackTargets,
  legalEffectTargets,
  playCard,
  useHeroPower,
} from "./engine.js";
import { applyAiAction, pickAiAction } from "./ai.js";
import { TYPE, needsChooser, typeLabel } from "./cards.js";
import { sfx, toggleMute } from "./audio.js";
import {
  STAGE_H,
  STAGE_W,
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

const CARD_ART = {};
for (const [path, url] of Object.entries(
  import.meta.glob("./art/cards/*.{png,jpg,jpeg,webp,svg}", { eager: true, import: "default" })
)) {
  const file = path.split("/").pop() || "";
  const key = file.replace(/\.(png|jpe?g|webp|svg)$/i, "");
  const isSvg = /\.svg$/i.test(file);
  if (!CARD_ART[key] || !isSvg) CARD_ART[key] = url;
}

const stage = () => document.getElementById("stage");

const ui = {
  state: null,
  mode: "idle",
  selectedCard: null,
  selectedAttacker: null,
  mulliganPicks: [],
  busy: false,
  rulesOpen: false,
  pointer: { x: 0, y: 0 },
};

function inMulligan() {
  return ui.mode === "mulligan";
}

function factionOf(who) {
  const side = who === PLAYER ? ui.state?.player : ui.state?.ai;
  return side?.hero?.faction === "tessera" ? "tessera" : "crt";
}

function heroArtFor(faction) {
  return faction === "tessera" ? tessArt : crtArt;
}

function isFactionPick() {
  return ui.mode === "faction" || ui.state?.screen === "faction";
}

let busyTimer = null;

function setBusy(on) {
  ui.busy = !!on;
  if (busyTimer) {
    clearTimeout(busyTimer);
    busyTimer = null;
  }
  if (ui.busy) {
    busyTimer = setTimeout(() => {
      if (ui.busy) forceUnlock("busy > 8s");
    }, 8000);
  }
}

function forceUnlock(reason) {
  console.warn("[THE SIGNAL] force-unlock:", reason || "busy timeout");
  ui.busy = false;
  if (busyTimer) {
    clearTimeout(busyTimer);
    busyTimer = null;
  }
  cancelSelect();
  document.querySelectorAll(".card, .minion").forEach((n) => {
    if (n.style.visibility === "hidden") n.style.visibility = "";
  });
  const banner = $id("turn-banner");
  if (banner) banner.classList.remove("show");
  const fx = $id("fx-layer");
  if (fx) fx.querySelectorAll(".fx-clone, .death-poof").forEach((n) => n.remove());
  hideAim();
  if (ui.state && ui.state.screen === "play") sync();
}

function seedFromUrl() {
  const n = Number(new URLSearchParams(location.search).get("seed"));
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

function lastLog(state) {
  return state.log.length ? state.log[state.log.length - 1].text : "THE SIGNAL";
}

function artKey(card) {
  if (card?.art) return card.art;
  const raw = card?.defId || card?.id || "";
  if (raw === "grunt" || raw === "tessera_grunt") return "tessera-grunt";
  return String(raw).replace(/_/g, "-");
}

function cardArtUrl(card) {
  const key = artKey(card);
  return CARD_ART[key] || ART[key] || null;
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
  const artInner = url ? "" : `<div class="plate plate-${card.plate || card.type}"><i class="glyph"></i></div>`;
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
    opts.staticHalo ? "static-halo" : "",
    opts.dimmed ? "aim-dim" : "",
  ].filter(Boolean).join(" ");
  el.dataset.uid = unit.uid;
  el.dataset.id = unit.uid;
  const url = cardArtUrl(unit);
  const artStyle = url ? `style="background-image:url('${url}')"` : "";
  const artInner = url ? "" : `<div class="plate plate-${unit.plate || "unit"}"><i class="glyph"></i></div>`;
  el.innerHTML = `
    <div class="cost">${unit.cost ?? 0}</div>
    <div class="namebar">${unit.name}</div>
    <div class="stripe">${typeLabel(unit.type || TYPE.UNIT)}</div>
    <div class="art" ${artStyle}>${artInner}<div class="badges">${badgeHtml(unit)}</div></div>
    <div class="diamond"></div>
    <div class="rules">${emphasize(unit.text || "")}</div>
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
  const faction = side.hero?.faction || (who === PLAYER ? "crt" : "tessera");
  const bits = [];
  for (let i = 0; i < 10; i++) {
    let cls = "crystal locked";
    if (i < side.maxMana && i < side.mana) cls = `crystal full ${who} ${faction}${pulse ? " pulse" : ""}`;
    else if (i < side.maxMana) cls = "crystal empty";
    bits.push(`<i class="${cls}"></i>`);
  }
  return `<div class="mana-row">${bits.join("")}<span class="mana-count">${side.mana}/${side.maxMana}</span></div>`;
}

function cancelSelect() {
  if (ui.mode === "mulligan") {
    hideAim();
    return;
  }
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
    drawAim(src, r.left + r.width / 2, r.top + r.height / 2, factionOf(PLAYER));
    return;
  }
  drawAim(src, clientX, clientY, factionOf(PLAYER));
}

function tableCenterRect() {
  const t = $id("table");
  const r = rectOf(t);
  if (!r) return { left: 400, top: 220, width: 72, height: 96 };
  const w = 72;
  const h = 96;
  return {
    left: r.left + (r.width - w) / 2,
    top: r.top + (r.height - h) / 2,
    width: w,
    height: h,
  };
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
  try {
    await wait(dur(900));
  } finally {
    b.classList.remove("show");
  }
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

function orderCombatFx(events) {
  const skip = new Set();
  const out = [];
  for (let i = 0; i < events.length; i++) {
    if (skip.has(i)) continue;
    const e = events[i];
    if (e.type === "death") {
      const j = events.findIndex((x, k) => k > i && x.type === "shatter" && x.id === e.id);
      if (j !== -1) {
        out.push(events[j]);
        skip.add(j);
      }
    }
    out.push(e);
  }
  return out;
}

async function runEventAnims(events) {
  for (const e of orderCombatFx(events)) {
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
      const n = findEl(e.id);
      floatText(rectOf(n) || tableCenterRect(), "SHATTER", "floater-mesh");
      await wait(dur(180));
    } else if (e.type === "death") {
      if (e.kind === "hero") continue;
      const n = findEl(e.id);
      sfx("death");
      await scrapeOff(n, {
        faction: e.faction,
        atRect: rectOf(n) || tableCenterRect(),
        duration: 520,
      });
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
    const ghost = cardBack(factionOf(who), "large fx-clone");
    placeFixed(ghost, rectOf(deck) || fallbackRect(who));
    await flyArc(ghost, rectOf(dest) || tableCenterRect(), {
      duration: 320,
      arc: 28,
      faction: factionOf(who),
    });
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
  const keepBusy = !!meta.keepBusy;
  setBusy(true);
  syncChrome();
  const fromEl = meta.fromEl;
  const fromR = rectOf(fromEl) || meta.fromR;
  const toR = meta.toR;
  const hideSource = !!(fromEl && who === PLAYER && (kind === "unit" || kind === "signal" || kind === "relic"));
  if (hideSource) fromEl.style.visibility = "hidden";
  let result = { ok: false };
  try {
    result = apply();
    const events = drainFx(ui.state);
    if (!result || !result.ok) {
      if (fromEl) fromEl.style.visibility = "";
      return result;
    }

    if (kind === "unit" || kind === "signal" || kind === "relic") {
      const faction = factionOf(who);
      const ghost =
        who === PLAYER
          ? makeGhostFromHand(meta.card || result.card, fromEl, fromR)
          : (() => {
              const g = cardBack(faction, "large fx-clone");
              placeFixed(g, fromR || fallbackRect(AI));
              return g;
            })();
      await flyArc(ghost, toR || tableCenterRect(), {
        duration: kind === "signal" ? 320 : 360,
        faction,
        arc: 36,
      });
      if (kind === "signal" && meta.targetEl) impactFlash(meta.targetEl, faction);
      ghost.remove();
      sfx(kind === "relic" ? "equip" : "play");
    } else if (kind === "attack") {
      await lurchToward(fromEl, toR);
      impactFlash(meta.targetEl, factionOf(who));
      sfx("attack");
    } else if (kind === "power") {
      pulseEl(meta.powerEl, "press");
      pulseEl(meta.heroEl, "power-pulse");
      sfx("power");
      await wait(dur(160));
    }

    await runEventAnims(events);
    if (fromEl) fromEl.style.visibility = "";
    cancelSelect();
    sync();
    if (ui.state.winner) {
      fanfare();
      syncResult();
    }
    return result;
  } catch (err) {
    console.warn("[THE SIGNAL] animation error", err);
    if (fromEl) fromEl.style.visibility = "";
    cancelSelect();
    sync();
    return result;
  } finally {
    if (!keepBusy || ui.state?.winner) setBusy(false);
    else setBusy(true);
    syncChrome();
  }
}

function clickCard(card) {
  if (inMulligan() || ui.busy || ui.state.turn !== PLAYER || ui.state.winner) return;
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
  if (inMulligan() || ui.busy || ui.state.winner) return;
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
  if (inMulligan() || ui.busy || ui.state.turn !== PLAYER || ui.state.winner) return;
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
  if (inMulligan() || ui.busy || ui.state.winner) return;
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
  if (inMulligan() || ui.busy || ui.state.turn !== PLAYER || ui.state.winner) return;
  if (!canUseHeroPower(ui.state, PLAYER)) return;
  if (ui.state.player.hero.powerName === "Deploy") {
    resolveAnimated(PLAYER, "power", () => useHeroPower(ui.state, PLAYER), {
      powerEl: $id("power-player"),
      heroEl: findEl(HERO_IDS[PLAYER]),
      toR: nextSlotRect(PLAYER),
    });
    return;
  }
  ui.mode = "power-target";
  ui.selectedCard = null;
  ui.selectedAttacker = null;
  setHint("Remote — choose a target");
  sync();
}

async function playerEndTurn() {
  if (inMulligan() || ui.busy || ui.state.turn !== PLAYER || ui.state.winner) return;
  cancelSelect();
  sfx("end");
  setBusy(true);
  syncChrome();
  try {
    endTurn(ui.state, PLAYER);
    const ev = drainFx(ui.state);
    await flashBanner(`${ui.state.ai.hero.name.toUpperCase()} TURN`, factionOf(AI));
    await animateDraw(AI, ev);
    sync();
    await runAi();
  } catch (err) {
    console.warn("[THE SIGNAL] end-turn error", err);
    forceUnlock("end-turn error");
  }
}

async function runAi() {
  setBusy(true);
  syncChrome();
  try {
    if (ui.state.winner) {
      fanfare();
      syncResult();
      return;
    }
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
      await flashBanner("YOUR TURN", factionOf(PLAYER));
      await animateDraw(PLAYER, ev);
      pulseMana(PLAYER);
    }
    sync();
    if (ui.state.winner) {
      fanfare();
      syncResult();
    }
  } catch (err) {
    console.warn("[THE SIGNAL] AI turn error", err);
    forceUnlock("AI turn error");
  } finally {
    setBusy(false);
    cancelSelect();
    sync();
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
      targetEl: findEl(action.targetId),
      toR: rectOf(findEl(action.targetId)) || nextSlotRect(AI),
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
  closeRules();
  paintFaction();
}

function attachRules(host) {
  if (!host) return;
  if (!host.querySelector(":scope > .rules-btn")) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "rules-btn";
    btn.textContent = "Rules";
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openRules();
    });
    host.appendChild(btn);
  }
  let overlay = host.querySelector(":scope > #rules-screen");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "rules-screen";
    overlay.className = "screen";
    overlay.hidden = true;
    overlay.setAttribute("aria-hidden", "true");
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        e.stopPropagation();
        closeRules();
      }
    });
    host.appendChild(overlay);
  }
  if (ui.rulesOpen) openRules();
  else closeRules(true);
}

function openRules() {
  const overlay = $id("rules-screen");
  if (!overlay) return;
  ui.rulesOpen = true;
  overlay.hidden = false;
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  overlay.innerHTML = `
    <div class="rules-card" role="dialog" aria-labelledby="rules-title">
      <button class="rules-close" type="button" aria-label="Close rules">×</button>
      <h2 id="rules-title">RULES</h2>
      <ul>
        <li><b>Goal</b> — Reduce the enemy hero to 0 HP.</li>
        <li><b>Mana</b> — 1 → 10. Spend it to play Units, Signals, and Relics.</li>
        <li><b>Units</b> — Attack once after summon-sick, unless they have <b>Rush</b>.</li>
        <li><b>Static</b> — Must be attacked before the enemy hero. That's the halo.</li>
        <li><b>Mesh</b> — Blocks one hit.</li>
        <li><b>Boot</b> — Fires on play. <b>Shatter</b> — fires on death.</li>
        <li><b>Hero powers</b> — CRT Head <b>Remote</b> (2 mana, deal 2). Tessera Bot <b>Deploy</b> (2 mana, 1/1 Grunt).</li>
        <li><b>Mulligan</b> — Swap up to 2 opening cards.</li>
        <li><b>Controls</b> — Click to play or attack. E end turn. Esc cancel. M mute.</li>
      </ul>
    </div>
  `;
  overlay.querySelector(".rules-close").addEventListener("click", (e) => {
    e.stopPropagation();
    closeRules();
  });
  overlay.querySelector(".rules-card").addEventListener("click", (e) => e.stopPropagation());
}

function closeRules(quiet = false) {
  if (!quiet) ui.rulesOpen = false;
  const overlay = $id("rules-screen");
  if (!overlay) return;
  overlay.hidden = true;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  if (!quiet) overlay.innerHTML = "";
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
      <div class="controls-line">Click cards · click a target if needed · E end turn · Esc cancel · M mute</div>
    </div>
  `;
  screen.querySelector(".play-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    beginPlay();
  });
  screen.addEventListener("click", (e) => {
    if (e.target.closest(".play-btn, .rules-btn, #rules-screen")) return;
    beginPlay();
  });
  root.appendChild(screen);
  attachRules(screen);
}

function paintFaction() {
  ui.mode = "faction";
  if (!ui.state) ui.state = createMatch({ seed: seedFromUrl() });
  ui.state.screen = "faction";
  const root = stage();
  root.innerHTML = "";
  const screen = document.createElement("div");
  screen.id = "faction-screen";
  screen.className = "screen";
  screen.style.backgroundImage = `url('${titleArt}')`;
  screen.innerHTML = `
    <div class="faction-copy">
      <div class="faction-kicker">THE SIGNAL</div>
      <h1>CHOOSE YOUR SIGNAL</h1>
      <p>Pick a hero. The other side is the Directory.</p>
      <div class="faction-picks">
        <button class="faction-pick crt" type="button" data-faction="crt">
          <img alt="CRT Head" src="${crtArt}" />
          <div class="faction-name">CRT Head</div>
          <div class="faction-power">Hero power — Remote</div>
          <div class="faction-deck">Cyan CRT deck</div>
        </button>
        <button class="faction-pick tessera" type="button" data-faction="tessera">
          <img alt="Tessera Bot" src="${tessArt}" />
          <div class="faction-name">Tessera Bot</div>
          <div class="faction-power">Hero power — Deploy</div>
          <div class="faction-deck">Pearl Tessera deck</div>
        </button>
      </div>
    </div>
  `;
  screen.querySelectorAll(".faction-pick").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      chooseFaction(btn.dataset.faction);
    });
  });
  root.appendChild(screen);
  attachRules(screen);
}

function beginPlay() {
  sfx("click");
  paintFaction();
}

function chooseFaction(faction) {
  sfx("click");
  beginOpening(faction);
}

function beginOpening(faction) {
  ui.state = createMatch({ seed: seedFromUrl(), playerFaction: faction });
  ui.state.screen = "play";
  dealOpening(ui.state);
  drainFx(ui.state);
  cancelSelect();
  ui.mode = "mulligan";
  ui.mulliganPicks = [];
  setBusy(false);
  buildPlay();
  sync();
}

function mulliganCards() {
  return (ui.state?.player.hand || []).filter((c) => c.defId !== "coin");
}

function toggleMulligan(uid) {
  if (!inMulligan()) return;
  const card = mulliganCards().find((c) => c.uid === uid);
  if (!card) return;
  const i = ui.mulliganPicks.indexOf(uid);
  if (i >= 0) {
    ui.mulliganPicks.splice(i, 1);
    sfx("click");
    syncMulligan();
    return;
  }
  if (ui.mulliganPicks.length >= 2) {
    sfx("click");
    return;
  }
  ui.mulliganPicks.push(uid);
  sfx("click");
  syncMulligan();
}

function clearMulliganPicks() {
  if (!inMulligan()) return;
  ui.mulliganPicks = [];
  syncMulligan();
}

async function finishMulligan() {
  if (!inMulligan() || !ui.state) return;
  sfx("play");
  const picks = ui.mulliganPicks.slice();
  confirmMulligan(ui.state, picks);
  drainFx(ui.state);
  ui.mulliganPicks = [];
  ui.mode = "idle";
  setBusy(true);
  beginTurn(ui.state, PLAYER);
  const ev = drainFx(ui.state);
  sync();
  try {
    await animateDraw(PLAYER, ev);
    await flashBanner("YOUR TURN", factionOf(PLAYER));
    pulseMana(PLAYER);
  } finally {
    setBusy(false);
    sync();
  }
}

function syncMulligan() {
  const overlay = $id("mulligan-screen");
  const play = $id("play-screen");
  if (!overlay) return;
  if (!inMulligan() || !ui.state || ui.state.winner) {
    overlay.hidden = true;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = "";
    play?.classList.remove("is-mulligan");
    return;
  }
  play?.classList.add("is-mulligan");
  overlay.hidden = false;
  overlay.setAttribute("aria-hidden", "false");
  overlay.className = `screen is-open ${factionOf(PLAYER)}`;
  const picks = new Set(ui.mulliganPicks);
  const n = picks.size;
  const action = n ? "CONFIRM" : "KEEP";
  overlay.innerHTML = `
    <div class="mulligan-card">
      <div class="mulligan-kicker">${ui.state.player.hero.name}</div>
      <h2>OPENING SIGNAL</h2>
      <p>Pick up to 2 to replace with the next cards on top of the deck.</p>
      <div class="mulligan-row" id="mulligan-row"></div>
      <div class="mulligan-meta">${n}/2 selected — Enter ${action.toLowerCase()} · Esc clear</div>
      <button class="play-btn mulligan-go" type="button">${action}</button>
    </div>
  `;
  const row = overlay.querySelector("#mulligan-row");
  for (const card of mulliganCards()) {
    const el = renderCard(card, {
      playable: true,
      selected: picks.has(card.uid),
      onClick: () => toggleMulligan(card.uid),
    });
    el.classList.add("mulligan-pick");
    el.classList.toggle("picked", picks.has(card.uid));
    row.appendChild(el);
  }
  overlay.querySelector(".mulligan-go").addEventListener("click", (e) => {
    e.stopPropagation();
    finishMulligan();
  });
}

function buildPlay() {
  const root = stage();
  root.innerHTML = "";
  const screen = document.createElement("div");
  screen.id = "play-screen";
  screen.className = `screen fac-${factionOf(PLAYER)}${inMulligan() ? " is-mulligan" : ""}`;
  screen.style.setProperty("--table", `url('${titleArt}')`);
  screen.style.setProperty("--matrix", `url('${matrixArt}')`);
  screen.style.setProperty("--back-crt", `url('${crtBack}')`);
  screen.style.setProperty("--back-tessera", `url('${tessBack}')`);
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
      <svg id="aim" viewBox="0 0 1500 975" preserveAspectRatio="none">
        <path d=""></path>
        <circle r="5" cx="0" cy="0"></circle>
      </svg>
    </div>
    <div class="turn-banner" id="turn-banner"></div>
    <div class="aim-hint" id="aim-hint" hidden></div>
    <div id="mulligan-screen" class="screen" hidden aria-hidden="true"></div>
    <div id="result-screen" class="screen" hidden aria-hidden="true"></div>
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
  attachRules(screen);
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

  const faction = side.hero.faction || (who === PLAYER ? "crt" : "tessera");
  const card = document.createElement("div");
  card.className = `hero-card ${who} ${faction}`;
  const art = heroArtFor(faction);
  const portrait = `
    <div class="portrait" data-id="${side.hero.id}" data-who="${who}" style="background-image:url('${art}')">
      <div class="hp-pip" id="hp-${who}">${side.hero.hp}</div>
    </div>`;
  const meta = `<div class="hero-meta"><div class="hero-name">${side.hero.name}</div><div id="mana-${who}">${crystalsHtml(side, who, false)}</div></div>`;
  card.innerHTML = portrait + meta;
  card.querySelector(".portrait").addEventListener("click", () => clickHero(who));

  const power = document.createElement("button");
  power.type = "button";
  power.id = who === PLAYER ? "power-player" : "power-ai";
  power.className = `power-btn ${who} ${faction}`;
  power.innerHTML = `${side.hero.powerName}<br><span class="hint">${side.hero.powerCost} mana</span>`;
  if (who === PLAYER) power.addEventListener("click", clickPower);

  const deck = document.createElement("div");
  deck.className = "deck-chip";
  deck.id = who === PLAYER ? "deck-player" : "deck-ai";
  deck.innerHTML = `<div class="mini-back card-back ${faction}"></div>Deck <span class="deck-n">${side.deck.length}</span>`;

  const relic = document.createElement("div");
  relic.className = `relic-slot ${who} ${faction}`;
  relic.id = who === PLAYER ? "relic-player" : "relic-ai";
  relic.textContent = "No relic";

  wrap.append(card, power, relic, deck);
  host.appendChild(wrap);
}

function fillLane(laneId, units, who) {
  const lane = $id(laneId);
  if (!lane) return;
  const slots = [...lane.querySelectorAll(".slot")];
  const tset = new Set(targetsForCurrent());
  const playerReady = ui.state.turn === PLAYER && !ui.busy && !ui.state.winner && !inMulligan();
  const aiming = ui.mode === "attack-target";
  units.forEach((unit, i) => {
    const slot = slots[i];
    if (!slot) return;
    slot.classList.remove("empty");
    const opts = {
      ready: who === PLAYER && playerReady && canUnitAttack(unit),
      selected: ui.selectedAttacker === unit.uid,
      targetable: tset.has(unit.uid),
      staticHalo: aiming && who === AI && !!unit.keywords?.static,
      dimmed: aiming && who === AI && !tset.has(unit.uid),
      onClick: () => {
        if (who === PLAYER) clickFriendlyUnit(unit);
        else if (tset.has(unit.uid)) clickTarget(unit.uid);
      },
    };
    const existing = slot.querySelector(".minion");
    if (existing && existing.dataset.uid === unit.uid && !existing.classList.contains("dying")) {
      existing.style.visibility = "";
      existing.className = renderMinion(unit, opts).className;
      existing.querySelector(".pip.atk").textContent = unit.atk;
      const hp = existing.querySelector(".pip.hp");
      hp.textContent = unit.hp;
      hp.classList.toggle("hurt", unit.hp < unit.maxHp);
      const badges = existing.querySelector(".badges");
      if (badges) badges.innerHTML = badgeHtml(unit);
      const rules = existing.querySelector(".rules");
      if (rules) rules.innerHTML = emphasize(unit.text || "");
      const cost = existing.querySelector(".cost");
      if (cost) cost.textContent = String(unit.cost ?? 0);
      const namebar = existing.querySelector(".namebar");
      if (namebar) namebar.textContent = unit.name;
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
  $id("play-screen")?.classList.toggle("fac-crt", factionOf(PLAYER) === "crt");
  $id("play-screen")?.classList.toggle("fac-tessera", factionOf(PLAYER) === "tessera");
  const tset = new Set(targetsForCurrent());
  const playerReady = s.turn === PLAYER && !ui.busy && !s.winner && !inMulligan();

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
  if (ap) {
    ap.classList.toggle("targetable", tset.has(HERO_IDS[AI]));
    ap.classList.toggle("aim-dim", ui.mode === "attack-target" && !tset.has(HERO_IDS[AI]));
  }
  $id("play-screen")?.classList.toggle("is-attack-aim", ui.mode === "attack-target");

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
    for (let i = 0; i < s.ai.hand.length; i++) eh.appendChild(cardBack(factionOf(AI)));
  }

  const tick = $id("ticker");
  if (tick) tick.textContent = lastLog(s);
}

function updateRelic(id, hero, who) {
  const el = $id(id);
  if (!el) return;
  el.classList.toggle("crt", (hero.faction || hero.relic?.faction) === "crt");
  el.classList.toggle("tessera", (hero.faction || hero.relic?.faction) === "tessera");
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
  const playerReady = s.turn === PLAYER && !ui.busy && !s.winner && !inMulligan();
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
  if (!overlay) return;
  if (!ui.state?.winner) {
    overlay.hidden = true;
    overlay.classList.remove("is-open", "win", "lose", "draw");
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = "";
    return;
  }
  const s = ui.state;
  overlay.hidden = false;
  overlay.setAttribute("aria-hidden", "false");
  const playerFac = factionOf(PLAYER);
  const winnerFac = s.winner === PLAYER ? playerFac : s.winner === AI ? factionOf(AI) : "draw";
  overlay.className = `screen is-open ${s.winner === PLAYER ? "win" : s.winner === AI ? "lose" : "draw"} ${winnerFac}`;
  const title = s.winner === PLAYER ? "SIGNAL LOCKED" : s.winner === AI ? "SIGNAL LOST" : "DEAD AIR";
  const blurb =
    s.winner === PLAYER
      ? `${s.player.hero.name} holds the food court. ${s.ai.hero.name} goes dark.`
      : s.winner === AI
        ? `${s.ai.hero.name} writes over the broadcast.`
        : "Both heroes drop. The fountain keeps running.";
  const img = s.winner === AI ? heroArtFor(factionOf(AI)) : heroArtFor(playerFac);
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
  if (ui.state.screen === "faction") {
    if (!$id("faction-screen")) paintFaction();
    return;
  }
  if (!$id("play-screen")) buildPlay();
  fillLane("enemy-lane", ui.state.ai.board, AI);
  fillLane("player-lane", ui.state.player.board, PLAYER);
  syncHand();
  syncChrome();
  syncMulligan();
  syncResult();
}

function playFromHotkey(n) {
  if (inMulligan() || !ui.state || ui.state.turn !== PLAYER || ui.busy || ui.state.winner) return;
  const card = ui.state.player.hand[n];
  if (card) clickCard(card);
}

export function paint() {
  sync();
}

function fitStage() {
  const frame = document.getElementById("frame");
  if (!frame) return;
  const scale = Math.min(frame.clientWidth / STAGE_W, frame.clientHeight / STAGE_H, 1);
  document.documentElement.style.setProperty("--stage-scale", String(Math.max(0.05, scale)));
}

function watchFit() {
  fitStage();
  const frame = document.getElementById("frame");
  if (frame && typeof ResizeObserver === "function") {
    const ro = new ResizeObserver(() => fitStage());
    ro.observe(frame);
  }
  window.addEventListener("resize", fitStage);
  window.visualViewport?.addEventListener("resize", fitStage);
}

export function mount() {
  watchFit();
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
      if (ui.rulesOpen) {
        e.preventDefault();
        closeRules();
        return;
      }
      if (isFactionPick()) {
        e.preventDefault();
        ui.state.screen = "title";
        ui.mode = "idle";
        paintTitle();
        return;
      }
      if (inMulligan()) {
        e.preventDefault();
        clearMulliganPicks();
        return;
      }
      cancelSelect();
      sync();
      return;
    }
    if (ui.rulesOpen) return;
    if (inMulligan() && (k === "Enter" || k === " ")) {
      e.preventDefault();
      finishMulligan();
      return;
    }
    if (ui.state.screen === "title" && (k === "Enter" || k === " ")) {
      e.preventDefault();
      beginPlay();
      return;
    }
    if (isFactionPick()) return;
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
