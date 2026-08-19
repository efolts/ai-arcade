import crtAtlasUrl from "./art/sprites/crt-atlas.png";
import tesAtlasUrl from "./art/sprites/tessera-atlas.png";
import crtIdleUrl from "./art/sprites/crt-idle.png";
import tesIdleUrl from "./art/sprites/tessera-idle.png";

export const CRT_CELL = { w: 40, h: 56 };
export const TES_CELL = { w: 36, h: 52 };
export const SCALE = 2;

const KIND_SCALE = { rusher: 2, grunt: 2, shotgun: 2, security: 3, boss: 4 };
const DIRS = ["down", "up", "left", "right"];

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

const raw = {
  crtAtlas: load(crtAtlasUrl),
  tesAtlas: load(tesAtlasUrl),
  crtIdle: load(crtIdleUrl),
  tesIdle: load(tesIdleUrl),
};

/** Per-frame cooked canvases: 4 rows × 3 cols, real alpha, never the raw sheet rect. */
const frames = { crt: null, tes: null };
const idleCooked = { crt: null, tes: null };

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
  for (let x = 0; x < w; x++) {
    stack.push(idx(x, 0), idx(x, h - 1));
  }
  for (let y = 0; y < h; y++) {
    stack.push(idx(0, y), idx(w - 1, y));
  }
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

function cookSheet(img, cell) {
  if (!img.complete || !img.naturalWidth) return null;
  const grid = [];
  for (let row = 0; row < 4; row++) {
    const line = [];
    for (let col = 0; col < 3; col++) {
      line.push(keyFrame(img, col * cell.w, row * cell.h, cell.w, cell.h));
    }
    grid.push(line);
  }
  return grid;
}

function cookIdle(img) {
  if (!img.complete || !img.naturalWidth) return null;
  return keyFrame(img, 0, 0, img.naturalWidth, img.naturalHeight);
}

function ensureCooked() {
  if (!frames.crt) frames.crt = cookSheet(raw.crtAtlas, CRT_CELL);
  if (!frames.tes) frames.tes = cookSheet(raw.tesAtlas, TES_CELL);
  if (!idleCooked.crt) idleCooked.crt = cookIdle(raw.crtIdle);
  if (!idleCooked.tes) idleCooked.tes = cookIdle(raw.tesIdle);
  return !!(frames.crt && frames.tes);
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

function blitCooked(ctx, frame, x, y, scale, opt = {}) {
  if (!frame) return;
  const dw = frame.width * scale;
  const dh = Math.round(frame.height * scale * (opt.squash || 1));
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  if (opt.alpha != null) ctx.globalAlpha = opt.alpha;
  if (opt.flash) ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(
    frame,
    0,
    0,
    frame.width,
    frame.height,
    Math.round(x - dw / 2),
    Math.round(y - dh + scale * 2),
    dw,
    dh,
  );
  ctx.restore();
}

export function blitFrame(ctx, grid, dir, frame, x, y, scale, opt = {}) {
  const row = Math.max(0, DIRS.indexOf(dir));
  const col = ((frame % 3) + 3) % 3;
  const cell = grid && grid[row] && grid[row][col];
  blitCooked(ctx, cell, x, y, scale, opt);
}

export function drawCrtSprite(ctx, e, t) {
  ensureCooked();
  const grid = frames.crt;
  const idle = idleCooked.crt;
  if (!grid && !idle) return false;
  const moving = e.vx * e.vx + e.vy * e.vy > 16;
  const face = moving ? dir4(Math.atan2(e.vy, e.vx)) : dir4(e.aim);
  const frame = moving ? 1 + (Math.floor(t * 8) % 2) : 0;
  const ghost = e.iframes > 0 && Math.floor(t * 14) % 2 === 0;
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  if (ghost) ctx.globalAlpha = 0.4;
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.beginPath();
  ctx.ellipse(e.x, e.y + 5, 10, 3.5, 0, 0, Math.PI * 2);
  ctx.fill();
  if (grid) blitFrame(ctx, grid, face, frame, e.x, e.y, SCALE);
  else blitCooked(ctx, idle, e.x, e.y, SCALE);
  if (e.muzzle > 0) {
    const ox = Math.cos(e.aim) * 22;
    const oy = Math.sin(e.aim) * 22;
    ctx.fillStyle = "#b8fff8";
    ctx.fillRect(Math.round(e.x + ox - 3), Math.round(e.y + oy - 8), 3 * SCALE, SCALE);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(Math.round(e.x + ox - 1), Math.round(e.y + oy - 10), SCALE, 3 * SCALE);
  }
  ctx.restore();
  return true;
}

export function drawTesseraSprite(ctx, e, t) {
  ensureCooked();
  const grid = frames.tes;
  const idle = idleCooked.tes;
  if (!grid && !idle) return false;
  const kind = e.kind || "grunt";
  const scale = KIND_SCALE[kind] || SCALE;
  const moving = !e.dead && e.speed > 0.1;
  const face = dir4(e.facing || 0);
  const frame = moving ? 1 + (Math.floor(t * (kind === "rusher" ? 12 : 8)) % 2) : 0;
  const squash = e.dead ? Math.max(0.25, 1 - (e.deadT || 0) * 1.4) : 1;
  const alpha = e.dead ? Math.max(0, 1 - (e.deadT || 0) * 1.5) : 1;
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.beginPath();
  ctx.ellipse(e.x, e.y + 4, 7 * (scale / 2), 3, 0, 0, Math.PI * 2);
  ctx.fill();
  if (kind === "security") ctx.filter = "sepia(0.25) contrast(1.05)";
  if (grid) blitFrame(ctx, grid, face, frame, e.x, e.y, scale, { squash, alpha });
  else blitCooked(ctx, idle, e.x, e.y, scale, { squash, alpha });
  ctx.filter = "none";
  if (kind === "boss" && !e.dead) {
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "#1c1c20";
    ctx.fillRect(Math.round(e.x - 14), Math.round(e.y - 52), 28, 11);
    ctx.fillStyle = "#d0d0d4";
    ctx.font = "bold 8px Trebuchet MS, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("DIR", e.x, e.y - 44);
  }
  if (e.dead && e.deadT < 0.5) {
    ctx.fillStyle = "#d8d8d8";
    for (let i = 0; i < 22; i++) {
      const a = i * 1.4 + e.deadT * 18;
      const r = 8 + e.deadT * 40;
      ctx.globalAlpha = 1 - e.deadT * 2;
      ctx.fillRect(Math.round(e.x + Math.cos(a) * r), Math.round(e.y + Math.sin(a) * r), 2 + (i % 3), 1 + (i % 2));
    }
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
  ctx.fillStyle = "#5ef6ff";
  ctx.fillRect(x - 12, y - 12, 24, 24);
  ctx.fillStyle = "#071014";
  ctx.fillRect(x - 10, y - 10, 20, 20);
  ctx.fillStyle = "#5ef6ff";
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
