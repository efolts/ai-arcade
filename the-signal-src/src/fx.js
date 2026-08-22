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

export function fxRoot() {
  return document.getElementById("fx-layer");
}

export function placeFixed(node, r, extra = {}) {
  const layer = fxRoot();
  if (!layer || !r) return node;
  Object.assign(node.style, {
    position: "fixed",
    left: `${r.left}px`,
    top: `${r.top}px`,
    width: `${r.width}px`,
    height: `${r.height}px`,
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
  const dx2 = toRect.left - from.left;
  const dy2 = toRect.top - from.top;
  const lift = opts.arc ?? Math.min(90, Math.abs(dx2) * 0.22 + 36);
  const rot = opts.rotate ?? (dx2 >= 0 ? 10 : -10);
  const sx = toRect.width / Math.max(1, from.width);
  const sy = toRect.height / Math.max(1, from.height);
  await el.animate(
    [
      { transform: "translate(0,0) rotate(0deg) scale(1)", offset: 0 },
      {
        transform: `translate(${dx2 / 2}px, ${dy2 / 2 - lift}px) rotate(${rot}deg) scale(1.06)`,
        offset: 0.45,
      },
      {
        transform: `translate(${dx2}px, ${dy2}px) rotate(0deg) scale(${sx}, ${sy})`,
        offset: 1,
      },
    ],
    { duration: dur(opts.duration ?? 420), easing: "cubic-bezier(.22,.82,.2,1)", fill: "forwards" }
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
  const dx = (bc.x - ac.x) * 0.42;
  const dy = (bc.y - ac.y) * 0.42;
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
  const c = centerOf(atRect);
  n.style.left = `${c.x}px`;
  n.style.top = `${c.y - 8}px`;
  layer.appendChild(n);
  window.setTimeout(() => n.remove(), dur(900));
}

export async function scrapeOff(el) {
  if (!el) return;
  el.classList.add("dying");
  await wait(dur(420));
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
  svg.setAttribute("viewBox", `0 0 ${Math.max(1, box.width)} ${Math.max(1, box.height)}`);
  const a = centerOf(fromRect);
  const x1 = a.x - box.left;
  const y1 = a.y - box.top;
  const x2 = toX - box.left;
  const y2 = toY - box.top;
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
