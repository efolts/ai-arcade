import crtBaseWalkUrl from "./art/sprites/crt-base-walk.png";
import crtArmorWalkUrl from "./art/sprites/crt-armor-walk.png";
import crtWeaponWalkUrl from "./art/sprites/crt-weapon-walk.png";
import crtFullWalkUrl from "./art/sprites/crt-full-walk.png";
import tesWalkUrl from "./art/sprites/tessera-walk.png";

export const CRT_CELL = { w: 40, h: 56 };
export const TES_CELL = { w: 36, h: 52 };
export const SCALE = 1;

const KIND_SCALE = { rusher: 1, grunt: 1, shotgun: 1, mannequin: 1, security: 1.45, boss: 3 };
const KIND_TINT = {
  mannequin: "rgba(214,148,138,0.48)",
  shotgun: "rgba(118,148,178,0.42)",
  rusher: "rgba(255,208,188,0.24)",
};

const tintScratch = makeCanvas(48, 64);

const TES_SHARDS = ["#ffffff", "#f4f0e8", "#ece8e0", "#dcd8d0", "#c4c0b8", "#9a9690", "#6a6662", "#3a3836"];
const CRT_SHARDS = ["#5ef6ff", "#b8fff8", "#ffffff", "#2ee8e0", "#8ffff8", "#0a6060"];

function load(src) {
  const img = new Image();
  img.src = src;
  return img;
}

function makeCanvas(w, h) {
  if (typeof OffscreenCanvas !== "undefined") return new OffscreenCanvas(w, h);
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
}

const CRT_WALK_SRC = {
  base: load(crtBaseWalkUrl),
  armor: load(crtArmorWalkUrl),
  weapon: load(crtWeaponWalkUrl),
  full: load(crtFullWalkUrl),
};
const tesWalkSrc = load(tesWalkUrl);
const walks = { base: null, armor: null, weapon: null, full: null };
let tesWalk = null;
/** Intended sheet rows: DOWN, LEFT, RIGHT, UP. Tessera cook re-checks pixels. */
const WALK_DIRS = ["down", "left", "right", "up"];
const WALK_SWAP_LR = false;
const CRT_DRAW_H = 56;
const TES_DRAW_H = 56;

function isMagenta(r, g, b) {
  if (r > 200 && g < 90 && b > 200) return true;
  const dr = r - 255;
  const dg = g - 0;
  const db = b - 255;
  if (dr * dr + dg * dg + db * db < 160 * 160) return true;
  const score = r + b - 2 * g;
  if (g < 55 && r >= 70 && b >= 50 && score > 90) return true;
  if (r >= 140 && b >= 100 && g < 80 && score > 160) return true;
  return false;
}

function isCardDark(r, g, b) {
  const lum = r + g + b;
  const mx = r > g ? (r > b ? r : b) : g > b ? g : b;
  if (lum <= 16 || mx <= 8) return true;
  const score = r + b - 2 * g;
  if (lum < 150 && g < 45 && score > 30) return true;
  if (lum < 100 && score > 18 && (r > g + 6 || b > g + 6)) return true;
  return false;
}

function keyFrame(src, sx, sy, w, h) {
  const tmp = makeCanvas(w, h);
  const tctx = tmp.getContext("2d", { willReadFrequently: true });
  tctx.imageSmoothingEnabled = false;
  tctx.clearRect(0, 0, w, h);
  tctx.drawImage(src, sx, sy, w, h, 0, 0, w, h);
  const img = tctx.getImageData(0, 0, w, h);
  const p = img.data;
  const n = w * h;
  const keyed = new Uint8Array(n);
  const idx = (x, y) => (x < 0 || y < 0 || x >= w || y >= h ? -1 : y * w + x);

  for (let i = 0; i < n; i++) {
    const o = i * 4;
    if (p[o + 3] < 8 || isMagenta(p[o], p[o + 1], p[o + 2])) keyed[i] = 1;
  }

  const stack = [];
  for (let x = 0; x < w; x++) stack.push(idx(x, 0), idx(x, h - 1));
  for (let y = 0; y < h; y++) stack.push(idx(0, y), idx(w - 1, y));
  const seen = new Uint8Array(n);
  while (stack.length) {
    const i = stack.pop();
    if (i < 0 || seen[i]) continue;
    seen[i] = 1;
    const o = i * 4;
    if (keyed[i] || p[o + 3] < 8 || isCardDark(p[o], p[o + 1], p[o + 2])) {
      keyed[i] = 1;
      const x = i % w;
      const y = (i / w) | 0;
      stack.push(idx(x - 1, y), idx(x + 1, y), idx(x, y - 1), idx(x, y + 1));
    }
  }

  const shrink = keyed.slice();
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if (keyed[i]) continue;
      let k = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (!dx && !dy) continue;
          const j = idx(x + dx, y + dy);
          if (j < 0 || keyed[j]) k++;
        }
      }
      if (k >= 5) shrink[i] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (shrink[i]) {
      const o = i * 4;
      p[o] = 0;
      p[o + 1] = 0;
      p[o + 2] = 0;
      p[o + 3] = 0;
    }
  }

  const out = makeCanvas(w, h);
  const octx = out.getContext("2d");
  octx.imageSmoothingEnabled = false;
  octx.clearRect(0, 0, w, h);
  octx.putImageData(img, 0, 0);
  return out;
}

function cookNamed(srcMap) {
  const out = { down: [], up: [], left: [], right: [] };
  for (const dir of Object.keys(srcMap)) {
    for (const img of srcMap[dir]) {
      if (!img.complete || !img.naturalWidth) return null;
      out[dir].push(keyFrame(img, 0, 0, img.naturalWidth, img.naturalHeight));
    }
  }
  return out;
}

function keyMagentaOnly(src, sx, sy, w, h) {
  const tmp = makeCanvas(w, h);
  const tctx = tmp.getContext("2d", { willReadFrequently: true });
  tctx.imageSmoothingEnabled = false;
  tctx.clearRect(0, 0, w, h);
  tctx.drawImage(src, sx, sy, w, h, 0, 0, w, h);
  const img = tctx.getImageData(0, 0, w, h);
  const p = img.data;
  for (let i = 0; i < p.length; i += 4) {
    if (p[i + 3] < 8 || isMagenta(p[i], p[i + 1], p[i + 2])) {
      p[i] = 0;
      p[i + 1] = 0;
      p[i + 2] = 0;
      p[i + 3] = 0;
    }
  }
  const out = makeCanvas(w, h);
  const octx = out.getContext("2d");
  octx.imageSmoothingEnabled = false;
  octx.clearRect(0, 0, w, h);
  octx.putImageData(img, 0, 0);
  return out;
}

/** Opaque body box. Trims 1–2px fringe rows so a magenta foot-gap is not part of the sprite. */
function contentBBox(frame) {
  const w = frame.width;
  const h = frame.height;
  const tctx = frame.getContext("2d", { willReadFrequently: true });
  const p = tctx.getImageData(0, 0, w, h).data;
  const row = new Int16Array(h);
  const col = new Int16Array(w);
  let x0 = w;
  let y0 = h;
  let x1 = -1;
  let y1 = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4;
      if (p[o + 3] < 32 || isMagenta(p[o], p[o + 1], p[o + 2])) continue;
      row[y]++;
      col[x]++;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
  }
  if (x1 < 0) return null;
  while (y0 < y1 && row[y0] < 3) y0++;
  while (y1 > y0 && row[y1] < 3) y1--;
  while (x0 < x1 && col[x0] < 2) x0++;
  while (x1 > x0 && col[x1] < 2) x1--;
  return { x: x0, y: y0, w: x1 - x0 + 1, h: y1 - y0 + 1 };
}

function normalizeFrame(frame, targetH) {
  const box = contentBBox(frame);
  if (!box || box.h < 4) return frame;
  const nw = Math.max(8, Math.round(box.w * (targetH / box.h)));
  const out = makeCanvas(nw, targetH);
  const octx = out.getContext("2d");
  octx.imageSmoothingEnabled = false;
  octx.clearRect(0, 0, nw, targetH);
  octx.drawImage(frame, box.x, box.y, box.w, box.h, 0, 0, nw, targetH);
  return out;
}

/** +1 = profile faces east (right), -1 = west. 0 = unknown. */
function profileFaceSign(frame) {
  const w = frame.width;
  const h = frame.height;
  const tctx = frame.getContext("2d", { willReadFrequently: true });
  const p = tctx.getImageData(0, 0, w, Math.max(1, Math.floor(h * 0.42))).data;
  let sx = 0;
  let n = 0;
  const hh = Math.floor(h * 0.42);
  for (let y = 0; y < hh; y++) {
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4;
      const r = p[o];
      const g = p[o + 1];
      const b = p[o + 2];
      const a = p[o + 3];
      if (a < 32 || isMagenta(r, g, b)) continue;
      const cyan = g > 140 && b > 140 && g >= r - 16;
      if (!cyan) continue;
      sx += x;
      n++;
    }
  }
  if (n < 3) return 0;
  return sx / n >= w * 0.5 ? 1 : -1;
}

/** Tessera visor vs pearl in the helmet band. +1 east, -1 west, 0 unknown. */
function visorFaceSign(frame) {
  const w = frame.width;
  const h = frame.height;
  const tctx = frame.getContext("2d", { willReadFrequently: true });
  const p = tctx.getImageData(0, 0, w, h).data;
  const y0 = Math.floor(h * 0.08);
  const y1 = Math.floor(h * 0.38);
  let visX = 0;
  let visN = 0;
  let pearlX = 0;
  let pearlN = 0;
  for (let y = y0; y < y1; y++) {
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4;
      const r = p[o];
      const g = p[o + 1];
      const b = p[o + 2];
      const a = p[o + 3];
      if (a < 32 || isMagenta(r, g, b)) continue;
      const lum = r + g + b;
      if (lum < 160 && Math.abs(r - g) < 40 && Math.abs(g - b) < 40) {
        visX += x;
        visN++;
      } else if (lum > 480) {
        pearlX += x;
        pearlN++;
      }
    }
  }
  if (visN < 6 || pearlN < 8) return 0;
  const dv = visX / visN - pearlX / pearlN;
  if (dv > 0.45) return 1;
  if (dv < -0.45) return -1;
  return 0;
}

/** Higher = more visor on the helmet (front). Back is a pearl dome. */
function visorFrontness(frame) {
  const w = frame.width;
  const h = frame.height;
  const tctx = frame.getContext("2d", { willReadFrequently: true });
  const p = tctx.getImageData(0, 0, w, h).data;
  const y1 = Math.floor(h * 0.42);
  let vis = 0;
  let pearl = 0;
  for (let y = 0; y < y1; y++) {
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4;
      const r = p[o];
      const g = p[o + 1];
      const b = p[o + 2];
      const a = p[o + 3];
      if (a < 32 || isMagenta(r, g, b)) continue;
      const lum = r + g + b;
      if (lum < 160) vis++;
      else if (lum > 480) pearl++;
    }
  }
  const n = vis + pearl;
  return n < 8 ? 0 : vis / n;
}

function cookWalkSheet(img, targetCap, kind) {
  if (!img.complete || !img.naturalWidth) return null;
  const cols = 4;
  const rows = 4;
  const fw = Math.floor(img.naturalWidth / cols);
  const fh = Math.floor(img.naturalHeight / rows);
  if (fw < 8 || fh < 8) return null;
  const raw = { down: [], left: [], right: [], up: [] };
  for (let r = 0; r < rows; r++) {
    const dir = WALK_DIRS[r];
    for (let c = 0; c < cols; c++) {
      raw[dir].push(keyMagentaOnly(img, c * fw, r * fh, fw, fh));
    }
  }
  if (kind === "tessera") {
    const leftSign = visorFaceSign(raw.left[0]);
    const rightSign = visorFaceSign(raw.right[0]);
    if (leftSign > 0 && rightSign < 0) {
      const tmp = raw.left;
      raw.left = raw.right;
      raw.right = tmp;
    }
    if (visorFrontness(raw.down[0]) + 0.08 < visorFrontness(raw.up[0])) {
      const tmp = raw.down;
      raw.down = raw.up;
      raw.up = tmp;
    }
  } else {
    const leftSign = profileFaceSign(raw.left[0]);
    const rightSign = profileFaceSign(raw.right[0]);
    let swap = WALK_SWAP_LR;
    if (leftSign > 0 && rightSign < 0) swap = true;
    if (leftSign < 0 && rightSign > 0) swap = false;
    if (swap) {
      const tmp = raw.left;
      raw.left = raw.right;
      raw.right = tmp;
    }
  }
  let bestH = 0;
  for (const dir of WALK_DIRS) {
    for (const fr of raw[dir]) {
      const box = contentBBox(fr);
      if (box) bestH = Math.max(bestH, box.h);
    }
  }
  const cap = targetCap || CRT_DRAW_H;
  const targetH = Math.max(24, Math.min(cap, bestH || cap));
  const bank = { down: [], left: [], right: [], up: [] };
  for (const dir of WALK_DIRS) {
    bank[dir] = raw[dir].map((fr) => normalizeFrame(fr, targetH));
  }
  return bank;
}

function ensureCooked() {
  if (!tesWalk) tesWalk = cookWalkSheet(tesWalkSrc, TES_DRAW_H, "tessera");
  for (const k of Object.keys(CRT_WALK_SRC)) {
    if (!walks[k]) walks[k] = cookWalkSheet(CRT_WALK_SRC[k], CRT_DRAW_H, "crt");
  }
  return !!(walks.base && tesWalk);
}

export function spritesReady() {
  return ensureCooked();
}

export function dir4(ang) {
  const deg = (((ang * 180) / Math.PI) % 360 + 360) % 360;
  if (deg >= 45 && deg < 135) return "down";
  if (deg >= 135 && deg < 225) return "left";
  if (deg >= 225 && deg < 315) return "up";
  return "right";
}

/** Movement dir, visor toward the player when that heading is a chase. */
function tesseraFace(e) {
  const moving = !e.dead && (e.vx || 0) * (e.vx || 0) + (e.vy || 0) * (e.vy || 0) > 16;
  const ang = moving ? Math.atan2(e.vy, e.vx) : e.facing || 0;
  let face = dir4(ang);
  const chase = e.facing || 0;
  const chasing = Math.cos(ang - chase) >= 0;
  if (face === "up" && chasing) return "down";
  return face;
}

/** Feet are at e.x,e.y. Hands/gun sit ~2/3 up the 1× CRT body, then along aim. */
export function gunOrigin(e) {
  const aim = e.aim || 0;
  return {
    x: e.x + Math.cos(aim) * 14,
    y: e.y - 22 + Math.sin(aim) * 8,
  };
}

function blitCooked(ctx, frame, x, y, scale, opt = {}) {
  if (!frame) return;
  const dw = frame.width * scale;
  const dh = frame.height * scale;
  const dx = Math.round(x - dw / 2);
  const foot = opt.footPad == null ? 0 : opt.footPad;
  const dy = Math.round(y - dh + foot);
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  if (opt.alpha != null) ctx.globalAlpha = opt.alpha;
  if (opt.flash) ctx.globalCompositeOperation = "lighter";
  if (opt.tint) {
    const tw = Math.max(1, Math.ceil(dw));
    const th = Math.max(1, Math.ceil(dh));
    if (tintScratch.width !== tw || tintScratch.height !== th) {
      tintScratch.width = tw;
      tintScratch.height = th;
    }
    const tx = tintScratch.getContext("2d");
    tx.imageSmoothingEnabled = false;
    tx.clearRect(0, 0, tw, th);
    tx.globalCompositeOperation = "source-over";
    tx.drawImage(frame, 0, 0, frame.width, frame.height, 0, 0, dw, dh);
    tx.globalCompositeOperation = "source-atop";
    tx.fillStyle = opt.tint;
    tx.fillRect(0, 0, tw, th);
    tx.globalCompositeOperation = "source-over";
    ctx.drawImage(tintScratch, 0, 0, tw, th, dx, dy, tw, th);
  } else {
    ctx.drawImage(frame, 0, 0, frame.width, frame.height, dx, dy, dw, dh);
  }
  ctx.restore();
}

function shatterSpec(kind) {
  if (kind === "boss") return { n: 240, force: 430, life: 0.86 };
  if (kind === "security") return { n: 170, force: 370, life: 0.7 };
  if (kind === "player") return { n: 96, force: 300, life: 0.7 };
  return { n: 118, force: 350, life: 0.56 };
}

function shatterFreeze(kind) {
  return kind === "player" ? 0.04 : 0;
}

export function shatterDuration(kind) {
  return shatterFreeze(kind) + shatterSpec(kind).life;
}

function ensureShards(e, colors, spec) {
  if (e.shards) return e.shards;
  const shards = [];
  const { n, force } = spec;
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const ring = i % 6 === 0 ? 0.42 : 1;
    const s = force * (0.22 + Math.random() * 0.78) * ring;
    const sz = i % 8 === 0 ? 3 : 1 + (i % 2);
    shards.push({
      ox: (Math.random() - 0.5) * 14,
      oy: (Math.random() - 0.55) * 20 - 8,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      w: sz,
      h: sz,
      spin: (Math.random() - 0.5) * 24,
      color: colors[i % colors.length],
      spark: Math.random(),
    });
  }
  e.shards = shards;
  return shards;
}

function drawShatter(ctx, e, kind, scale) {
  const spec = shatterSpec(kind);
  const age = Math.max(0, (e.deadT || 0) - shatterFreeze(kind));
  const colors = kind === "player" ? CRT_SHARDS : TES_SHARDS;
  const shards = ensureShards(e, colors, spec);
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  for (const sh of shards) {
    const u = age / spec.life;
    if (u >= 1) continue;
    const fade = u < 0.28 ? 1 : 1 - (u - 0.28) / 0.72;
    const drag = 1 - u * 0.18;
    const x = e.x + sh.ox * scale + sh.vx * age * drag;
    const y = e.y + sh.oy * scale + sh.vy * age * drag;
    const sparkle = ((age * 30 + sh.spark * 11) % 1) > 0.84;
    ctx.globalAlpha = sparkle ? Math.min(1, fade + 0.4) : fade;
    ctx.fillStyle = sparkle ? "#ffffff" : sh.color;
    ctx.fillRect(Math.round(x), Math.round(y), sh.w, sh.h);
  }
  ctx.restore();
}

export function blitFrame(ctx, bank, dir, frame, x, y, scale, opt = {}) {
  const col = ((frame % 3) + 3) % 3;
  const cell = bank && bank[dir] && bank[dir][col];
  blitCooked(ctx, cell, x, y, scale, opt);
}

export function drawCrtSprite(ctx, e, t) {
  ensureCooked();
  const kit = e.skin && walks[e.skin] ? e.skin : "base";
  const bank = walks[kit];
  if (!bank) return false;
  const moving = !e.dead && e.vx * e.vx + e.vy * e.vy > 16;
  const face = moving ? dir4(Math.atan2(e.vy, e.vx)) : dir4(e.aim);
  const seq = bank[face] || bank.down;
  const frame = moving ? Math.floor(t * 8) % seq.length : 0;
  const ghost = e.iframes > 0 && Math.floor(t * 14) % 2 === 0;
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  if (ghost) ctx.globalAlpha = 0.4;
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.beginPath();
  ctx.ellipse(e.x, e.y + 4, 7, 2.5, 0, 0, Math.PI * 2);
  ctx.fill();
  if (e.dead && (e.deadT || 0) > shatterFreeze("player")) {
    drawShatter(ctx, e, "player", SCALE);
    ctx.restore();
    return true;
  }
  const cell = seq[frame];
  if (!cell) {
    ctx.restore();
    return false;
  }
  const match = CRT_DRAW_H / cell.height;
  blitCooked(ctx, cell, e.x, e.y, match, {
    tint: e.skinTint === "mesh" ? "rgba(94,246,255,0.22)" : null,
    footPad: 0,
  });
  if (e.muzzle > 0) {
    const g = gunOrigin(e);
    ctx.fillStyle = "#b8fff8";
    ctx.fillRect(Math.round(g.x - 2), Math.round(g.y - 1), 4, 2);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(Math.round(g.x - 1), Math.round(g.y - 2), 2, 4);
  }
  ctx.restore();
  return true;
}

export function drawTesseraSprite(ctx, e, t) {
  ensureCooked();
  const bank = tesWalk;
  if (!bank) return false;
  const kind = e.kind || "grunt";
  const scale = KIND_SCALE[kind] || SCALE;
  const stillPose = kind === "mannequin" && e.pose !== "lunge";
  const moving = !e.dead && !stillPose && (e.vx || 0) * (e.vx || 0) + (e.vy || 0) * (e.vy || 0) > 16;
  const face = tesseraFace(e);
  const seq = bank[face] || bank.down;
  const rate = kind === "rusher" ? 12 : kind === "mannequin" ? 10 : 8;
  const frame = moving ? Math.floor(t * rate) % seq.length : 0;
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.beginPath();
  ctx.ellipse(e.x, e.y + 4, 6 * scale, 2.5, 0, 0, Math.PI * 2);
  ctx.fill();
  if (e.dead && (e.deadT || 0) > shatterFreeze(kind)) {
    drawShatter(ctx, e, kind, scale);
    ctx.restore();
    return true;
  }
  const cell = seq[frame];
  if (!cell) {
    ctx.restore();
    return false;
  }
  if (e.elite) ctx.filter = "brightness(0.55) contrast(1.2) saturate(0.25)";
  else if (kind === "security") ctx.filter = "sepia(0.25) contrast(1.05)";
  const match = (TES_DRAW_H / cell.height) * scale;
  blitCooked(ctx, cell, e.x, e.y, match, { tint: e.elite ? null : KIND_TINT[kind] || null, footPad: 0 });
  ctx.filter = "none";
  if (kind === "boss" && !e.dead) {
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "#1c1c20";
    ctx.fillRect(Math.round(e.x - 12), Math.round(e.y - 40), 24, 10);
    ctx.fillStyle = "#d0d0d4";
    ctx.font = "bold 8px Trebuchet MS, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("DIR", e.x, e.y - 33);
  }
  ctx.restore();
  return true;
}

export function drawPixelPickup(ctx, p, t) {
  const bob = Math.round(Math.sin(t * 6 + p.x) * 2);
  const x = Math.round(p.x);
  const y = Math.round(p.y + bob);
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.fillRect(x - 10, y + 10, 20, 4);
  const ink = p.kind === "token" ? "#e8b44a" : p.kind === "health" ? "#7cff9a" : "#5ef6ff";
  ctx.fillStyle = ink;
  ctx.fillRect(x - 12, y - 12, 24, 24);
  ctx.fillStyle = "#071014";
  ctx.fillRect(x - 10, y - 10, 20, 20);
  ctx.fillStyle = ink;
  ctx.fillRect(x - 10, y - 10, 20, 2);
  ctx.fillRect(x - 10, y + 8, 20, 2);
  ctx.font = "bold 9px Courier New, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(p.glyph, x, y + 1);
  ctx.restore();
}

export function drawPixelLife(ctx, x, y, on) {
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.globalAlpha = on ? 1 : 0.25;
  ctx.fillStyle = "#3a2414";
  ctx.fillRect(Math.round(x - 9), Math.round(y - 6), 18, 12);
  ctx.fillStyle = on ? "#3ee8e0" : "#244";
  ctx.fillRect(Math.round(x - 7), Math.round(y - 4), 14, 8);
  if (on) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(Math.round(x - 4), Math.round(y - 1), 2, 2);
    ctx.fillRect(Math.round(x + 2), Math.round(y - 1), 2, 2);
  }
  ctx.restore();
}
