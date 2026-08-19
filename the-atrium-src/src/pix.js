import crtDown0 from "./art/sprites/crt-down-0.png";
import crtDown1 from "./art/sprites/crt-down-1.png";
import crtDown2 from "./art/sprites/crt-down-2.png";
import crtUp0 from "./art/sprites/crt-up-0.png";
import crtUp1 from "./art/sprites/crt-up-1.png";
import crtUp2 from "./art/sprites/crt-up-2.png";
import crtLeft0 from "./art/sprites/crt-left-0.png";
import crtLeft1 from "./art/sprites/crt-left-1.png";
import crtLeft2 from "./art/sprites/crt-left-2.png";
import crtRight0 from "./art/sprites/crt-right-0.png";
import crtRight1 from "./art/sprites/crt-right-1.png";
import crtRight2 from "./art/sprites/crt-right-2.png";
import tesDown0 from "./art/sprites/tessera-down-0.png";
import tesDown1 from "./art/sprites/tessera-down-1.png";
import tesDown2 from "./art/sprites/tessera-down-2.png";
import tesUp0 from "./art/sprites/tessera-up-0.png";
import tesUp1 from "./art/sprites/tessera-up-1.png";
import tesUp2 from "./art/sprites/tessera-up-2.png";
import tesLeft0 from "./art/sprites/tessera-left-0.png";
import tesLeft1 from "./art/sprites/tessera-left-1.png";
import tesLeft2 from "./art/sprites/tessera-left-2.png";
import tesRight0 from "./art/sprites/tessera-right-0.png";
import tesRight1 from "./art/sprites/tessera-right-1.png";
import tesRight2 from "./art/sprites/tessera-right-2.png";

export const CRT_CELL = { w: 40, h: 56 };
export const TES_CELL = { w: 36, h: 52 };
export const SCALE = 1;

const KIND_SCALE = { rusher: 1, grunt: 1, shotgun: 1, mannequin: 1, security: 2, boss: 3 };
const KIND_TINT = {
  mannequin: "rgba(214,148,138,0.48)",
  shotgun: "rgba(118,148,178,0.42)",
  rusher: "rgba(255,208,188,0.24)",
};

const tintScratch = makeCanvas(48, 64);

const TES_SHARDS = ["#f4f0e8", "#dcd8d0", "#c4c0b8", "#9a9690", "#6a6662", "#2a2a2c", "#ece8e0"];
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

/**
 * Filenames are backwards: crt-left-* / tessera-left-* pixels face EAST,
 * *-right-* pixels face WEST (TV screen / visor is the face).
 * Map gameplay dir → the files whose pixels actually face that way.
 */
const CRT_SRC = {
  down: [crtDown0, crtDown1, crtDown2].map(load),
  up: [crtUp0, crtUp1, crtUp2].map(load),
  left: [crtRight0, crtRight1, crtRight2].map(load),
  right: [crtLeft0, crtLeft1, crtLeft2].map(load),
};
const TES_SRC = {
  down: [tesDown0, tesDown1, tesDown2].map(load),
  up: [tesUp0, tesUp1, tesUp2].map(load),
  left: [tesRight0, tesRight1, tesRight2].map(load),
  right: [tesLeft0, tesLeft1, tesLeft2].map(load),
};

const frames = { crt: null, tes: null };

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

function ensureCooked() {
  if (!frames.crt) frames.crt = cookNamed(CRT_SRC);
  if (!frames.tes) frames.tes = cookNamed(TES_SRC);
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
  const dy = Math.round(y - dh + scale * 2);
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

function shatterLife(kind) {
  return kind === "boss" ? 0.95 : kind === "player" ? 0.72 : 0.55;
}

function shatterFreeze(kind) {
  return kind === "boss" ? 0.1 : 0.066;
}

function ensureShards(e, colors, count, force) {
  if (e.shards) return e.shards;
  const shards = [];
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = force * (0.35 + Math.random());
    shards.push({
      ox: (Math.random() - 0.5) * 18,
      oy: (Math.random() - 0.6) * 28 - 10,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s - force * 0.25,
      w: 1 + (i % 3),
      h: 1 + ((i + 1) % 3),
      spin: (Math.random() - 0.5) * 18,
      color: colors[i % colors.length],
    });
  }
  e.shards = shards;
  return shards;
}

function drawShatter(ctx, e, kind, scale) {
  const age = Math.max(0, (e.deadT || 0) - shatterFreeze(kind));
  const life = shatterLife(kind);
  const n = kind === "boss" ? 56 : kind === "player" ? 40 : 28;
  const force = kind === "boss" ? 140 : kind === "player" ? 110 : 90;
  const colors = kind === "player" ? CRT_SHARDS : TES_SHARDS;
  const shards = ensureShards(e, colors, n, force);
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  for (const sh of shards) {
    const fade = Math.max(0, 1 - age / life);
    if (fade <= 0) continue;
    const x = e.x + sh.ox * scale + sh.vx * age;
    const y = e.y + sh.oy * scale + sh.vy * age + 90 * age * age;
    ctx.globalAlpha = fade;
    ctx.fillStyle = sh.color;
    const tumble = Math.abs(Math.sin(age * sh.spin + sh.ox)) > 0.35;
    ctx.fillRect(Math.round(x), Math.round(y), tumble ? sh.h : sh.w, tumble ? sh.w : sh.h);
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
  const bank = frames.crt;
  if (!bank) return false;
  const moving = !e.dead && e.vx * e.vx + e.vy * e.vy > 16;
  const face = moving ? dir4(Math.atan2(e.vy, e.vx)) : dir4(e.aim);
  const frame = moving ? 1 + (Math.floor(t * 8) % 2) : 0;
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
  blitFrame(ctx, bank, face, frame, e.x, e.y, SCALE);
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
  const bank = frames.tes;
  if (!bank) return false;
  const kind = e.kind || "grunt";
  const scale = KIND_SCALE[kind] || SCALE;
  const stillPose = kind === "mannequin" && e.pose !== "lunge";
  const moving = !e.dead && !stillPose && (e.vx || 0) * (e.vx || 0) + (e.vy || 0) * (e.vy || 0) > 16;
  const face = dir4(e.facing || 0);
  const frame = moving ? 1 + (Math.floor(t * (kind === "rusher" ? 12 : kind === "mannequin" ? 10 : 8)) % 2) : 0;
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
  if (kind === "security") ctx.filter = "sepia(0.25) contrast(1.05)";
  blitFrame(ctx, bank, face, frame, e.x, e.y, scale, { tint: KIND_TINT[kind] || null });
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
