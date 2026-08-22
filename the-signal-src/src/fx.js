export const STAGE_W = 1500;
export const STAGE_H = 975;

export function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export function reducedMotion() {
  return typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function dur(ms) {
  return reducedMotion() ? Math.min(90, Math.round(ms * 0.25)) : ms;
}

export function rectOf(el) {
  if (!el) return null;
  const r = el.getBoundingClientRect();
  if (!r.width && !r.height) return null;
  return r;
}

export function centerOf(r) {
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function stageBox() {
  const stage = document.getElementById("stage");
  return stage ? stage.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
}

export function stageScale() {
  const box = stageBox();
  return box.width > 0 ? box.width / STAGE_W : 1;
}

export function toStageLocal(r) {
  const box = stageBox();
  const s = stageScale() || 1;
  return {
    left: (r.left - box.left) / s,
    top: (r.top - box.top) / s,
    width: (r.width || 0) / s,
    height: (r.height || 0) / s,
  };
}

export function fxRoot() {
  return document.getElementById("fx-layer");
}

export function placeFixed(node, r, extra = {}) {
  const layer = fxRoot();
  if (!layer || !r) return node;
  const local = toStageLocal(r);
  Object.assign(node.style, {
    position: "absolute",
    left: `${local.left}px`,
    top: `${local.top}px`,
    width: `${local.width}px`,
    height: `${local.height}px`,
    margin: "0",
    zIndex: "80",
    pointerEvents: "none",
    transformOrigin: "center center",
    ...extra,
  });
  layer.appendChild(node);
  return node;
}

export function cloneAt(el, r = rectOf(el)) {
  if (!el || !r) return null;
  const clone = el.cloneNode(true);
  clone.classList.add("fx-clone");
  clone.removeAttribute("id");
  clone.tabIndex = -1;
  placeFixed(clone, r);
  return clone;
}

export async function flyArc(el, toRect, opts = {}) {
  if (!el || !toRect) return;
  const from = rectOf(el) || toRect;
  const fromC = centerOf(from);
  const toC = centerOf(toRect);
  const s = stageScale() || 1;
  const dx = (toC.x - fromC.x) / s;
  const dy = (toC.y - fromC.y) / s;
  const lift = opts.arc ?? Math.min(52, Math.abs(dx) * 0.16 + 22);
  const rot = opts.rotate ?? (dx >= 0 ? 6 : -6);
  const glow =
    opts.faction === "tessera"
      ? "drop-shadow(0 10px 16px rgba(240,180,74,0.28))"
      : "drop-shadow(0 10px 16px rgba(61,230,255,0.28))";
  el.classList.add(opts.faction === "tessera" ? "fx-play-tess" : "fx-play-crt");
  await el.animate(
    [
      { transform: "translate(0,0) rotate(0deg) scale(1)", opacity: 0.96, filter: "none", offset: 0 },
      {
        transform: `translate(${dx * 0.46}px, ${dy * 0.46 - lift}px) rotate(${rot}deg) scale(1.05)`,
        opacity: 1,
        filter: glow,
        offset: 0.4,
      },
      {
        transform: `translate(${dx}px, ${dy}px) rotate(0deg) scale(0.97)`,
        opacity: 0.9,
        filter: glow,
        offset: 0.82,
      },
      {
        transform: `translate(${dx}px, ${dy}px) rotate(0deg) scale(0.94)`,
        opacity: 0,
        filter: "none",
        offset: 1,
      },
    ],
    { duration: dur(opts.duration ?? 360), easing: "cubic-bezier(.22,.82,.2,1)", fill: "forwards" }
  ).finished.catch(() => {});
}

export function pinCenter(el, r) {
  if (!el || !r) return;
  const c = centerOf(r);
  el.style.left = `${c.x}px`;
  el.style.top = `${c.y}px`;
  el.style.width = `${r.width}px`;
  el.style.height = `${r.height}px`;
  el.style.transform = "translate(-50%,-50%)";
}

export async function lurchToward(el, towardRect, opts = {}) {
  if (!el) return;
  const a = rectOf(el);
  if (!a) return;
  const b = towardRect || a;
  const ac = centerOf(a);
  const bc = centerOf(b);
  const s = stageScale() || 1;
  const dx = ((bc.x - ac.x) * 0.42) / s;
  const dy = ((bc.y - ac.y) * 0.42) / s;
  await el.animate(
    [
      { transform: "translate(0,0) scale(1)" },
      { transform: `translate(${dx}px, ${dy}px) scale(1.07)`, offset: 0.52 },
      { transform: "translate(0,0) scale(1)" },
    ],
    { duration: dur(opts.duration ?? 300), easing: "cubic-bezier(.18,.9,.22,1)" }
  ).finished.catch(() => {});
}

export function impactFlash(el, faction = "crt") {
  if (!el) return;
  el.classList.remove("impact");
  el.classList.add("impact", faction === "tessera" ? "impact-amber" : "impact-cyan");
  window.setTimeout(() => el.classList.remove("impact", "impact-amber", "impact-cyan"), dur(280));
}

export function heroHurt(el) {
  if (!el) return;
  el.classList.remove("hurt-flash");
  el.classList.add("hurt-flash");
  window.setTimeout(() => el.classList.remove("hurt-flash"), dur(360));
}

export function pulseEl(el, cls = "pulse") {
  if (!el) return;
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
  window.setTimeout(() => el.classList.remove(cls), dur(520));
}

export function floatText(atRect, text, cls) {
  const layer = fxRoot();
  if (!layer || !atRect) return;
  const n = document.createElement("div");
  n.className = `floater ${cls || ""}`;
  n.textContent = text;
  const local = toStageLocal({ left: centerOf(atRect).x, top: centerOf(atRect).y - 8, width: 0, height: 0 });
  n.style.left = `${local.left}px`;
  n.style.top = `${local.top}px`;
  layer.appendChild(n);
  window.setTimeout(() => n.remove(), dur(900));
}

function ashSpecks() {
  const n = reducedMotion() ? 7 : 18;
  const bits = [];
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n + (Math.random() - 0.5) * 0.7;
    const dist = 14 + Math.random() * 34;
    bits.push({
      dx: Math.cos(angle) * dist,
      dy: Math.sin(angle) * dist - (8 + Math.random() * 18),
      rot: Math.random() * 90 - 45,
      delay: Math.random() * 50,
      w: 3 + Math.random() * 6,
      h: 2 + Math.random() * 4,
      s: 0.55 + Math.random() * 0.7,
    });
  }
  return bits;
}

export async function deathPoof(el, opts = {}) {
  const faction = opts.faction === "tessera" ? "tessera" : "crt";
  const r = rectOf(el) || opts.atRect;
  const layer = fxRoot();
  if (el) el.classList.add("dying");
  if (layer && r) {
    const c = centerOf(r);
    const local = toStageLocal({ left: c.x, top: c.y, width: 0, height: 0 });
    const burst = document.createElement("div");
    burst.className = `death-poof ${faction}`;
    burst.style.left = `${local.left}px`;
    burst.style.top = `${local.top}px`;
    const cloud = document.createElement("span");
    cloud.className = "ash-cloud";
    burst.appendChild(cloud);
    for (const spec of ashSpecks()) {
      const p = document.createElement("i");
      p.className = "ash";
      p.style.width = `${spec.w}px`;
      p.style.height = `${spec.h}px`;
      p.style.setProperty("--dx", `${spec.dx}px`);
      p.style.setProperty("--dy", `${spec.dy}px`);
      p.style.setProperty("--rot", `${spec.rot}deg`);
      p.style.setProperty("--delay", `${spec.delay}ms`);
      p.style.setProperty("--s", String(spec.s));
      burst.appendChild(p);
    }
    layer.appendChild(burst);
    window.setTimeout(() => burst.remove(), dur(620));
  }
  await wait(dur(opts.duration ?? 520));
}

export async function scrapeOff(el, opts = {}) {
  return deathPoof(el, opts);
}

export function meshSpark(el) {
  if (!el) return;
  el.classList.remove("mesh-break");
  void el.offsetWidth;
  el.classList.add("mesh-break");
  window.setTimeout(() => el.classList.remove("mesh-break"), dur(420));
}

export function deckThump(el) {
  if (!el) return;
  pulseEl(el, "thump");
}

export function quadraticPath(x1, y1, x2, y2) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.min(80, Math.hypot(x2 - x1, y2 - y1) * 0.22 + 20);
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export function aimLayer() {
  return document.getElementById("aim");
}

export function drawAim(fromRect, toX, toY, faction = "crt") {
  const svg = aimLayer();
  if (!svg || !fromRect) return;
  const box = stageBox();
  const s = stageScale() || 1;
  svg.setAttribute("viewBox", `0 0 ${STAGE_W} ${STAGE_H}`);
  const a = centerOf(fromRect);
  const x1 = (a.x - box.left) / s;
  const y1 = (a.y - box.top) / s;
  const x2 = (toX - box.left) / s;
  const y2 = (toY - box.top) / s;
  const path = svg.querySelector("path");
  const head = svg.querySelector("circle");
  if (path) path.setAttribute("d", quadraticPath(x1, y1, x2, y2));
  if (head) {
    head.setAttribute("cx", String(x2));
    head.setAttribute("cy", String(y2));
  }
  svg.classList.toggle("tess", faction === "tessera");
  svg.classList.add("on");
}

export function hideAim() {
  const svg = aimLayer();
  if (!svg) return;
  svg.classList.remove("on");
  const path = svg.querySelector("path");
  if (path) path.setAttribute("d", "");
}

export function stagePoint(clientX, clientY) {
  return { x: clientX, y: clientY };
}
