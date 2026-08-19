import crtAtlasUrl from "./art/sprites/crt-atlas.png";
import tesAtlasUrl from "./art/sprites/tessera-atlas.png";
import crtIdleUrl from "./art/sprites/crt-idle.png";
import tesIdleUrl from "./art/sprites/tessera-idle.png";

export const CRT_CELL = { w: 40, h: 56 };
export const TES_CELL = { w: 36, h: 52 };
export const SCALE = 3;

const DIRS = ["down", "up", "left", "right"];

function load(src) {
  const img = new Image();
  img.src = src;
  return img;
}

const raw = {
  crtAtlas: load(crtAtlasUrl),
  tesAtlas: load(tesAtlasUrl),
  crtIdle: load(crtIdleUrl),
  tesIdle: load(tesIdleUrl),
};

const cooked = { crtAtlas: null, tesAtlas: null, crtIdle: null, tesIdle: null };

function keyCanvas(img) {
  if (!img.complete || !img.naturalWidth) return null;
  const c = document.createElement("canvas");
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, 0, 0);
  const d = ctx.getImageData(0, 0, c.width, c.height);
  const p = d.data;
  for (let i = 0; i < p.length; i += 4) {
    const r = p[i];
    const g = p[i + 1];
    const b = p[i + 2];
    if (r > 165 && b > 140 && g < 105 && r + b - 2 * g > 170) p[i + 3] = 0;
  }
  ctx.putImageData(d, 0, 0);
  return c;
}

function cook(key) {
  if (cooked[key]) return cooked[key];
  const c = keyCanvas(raw[key]);
  if (c) cooked[key] = c;
  return cooked[key];
}

export function spritesReady() {
  return !!(cook("crtAtlas") && cook("tesAtlas"));
}

export function dir4(ang) {
  const deg = (((ang * 180) / Math.PI) % 360 + 360) % 360;
  if (deg >= 45 && deg < 135) return "down";
  if (deg >= 135 && deg < 225) return "left";
  if (deg >= 225 && deg < 315) return "up";
  return "right";
}

export function blitFrame(ctx, sheet, cell, dir, frame, x, y, scale, opt = {}) {
  const row = Math.max(0, DIRS.indexOf(dir));
  const col = ((frame % 3) + 3) % 3;
  const dw = cell.w * scale;
  const dh = Math.round(cell.h * scale * (opt.squash || 1));
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  if (opt.alpha != null) ctx.globalAlpha = opt.alpha;
  if (opt.flash) ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(
    sheet,
    col * cell.w,
    row * cell.h,
    cell.w,
    cell.h,
    Math.round(x - dw / 2),
    Math.round(y - dh + scale * 4),
    dw,
    dh,
  );
  ctx.restore();
}

export function drawCrtSprite(ctx, e, t) {
  const sheet = cook("crtAtlas") || cook("crtIdle");
  if (!sheet) return false;
  const moving = e.vx * e.vx + e.vy * e.vy > 16;
  const face = moving ? dir4(Math.atan2(e.vy, e.vx)) : dir4(e.aim);
  const frame = moving ? 1 + (Math.floor(t * 8) % 2) : 0;
  const ghost = e.iframes > 0 && Math.floor(t * 14) % 2 === 0;
  ctx.save();
  if (ghost) ctx.globalAlpha = 0.4;
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.beginPath();
  ctx.ellipse(e.x, e.y + 6, 16, 5, 0, 0, Math.PI * 2);
  ctx.fill();
  if (sheet === cooked.crtAtlas) {
    blitFrame(ctx, sheet, CRT_CELL, face, frame, e.x, e.y, SCALE);
  } else {
    const s = SCALE;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(sheet, Math.round(e.x - (sheet.width * s) / 2), Math.round(e.y - sheet.height * s + 8), sheet.width * s, sheet.height * s);
  }
  if (e.muzzle > 0) {
    const ox = Math.cos(e.aim) * 28;
    const oy = Math.sin(e.aim) * 28;
    ctx.fillStyle = "#b8fff8";
    ctx.fillRect(Math.round(e.x + ox - 4), Math.round(e.y + oy - 10), 3 * SCALE, SCALE);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(Math.round(e.x + ox - 2), Math.round(e.y + oy - 12), SCALE, 3 * SCALE);
  }
  ctx.restore();
  return true;
}

export function drawTesseraSprite(ctx, e, t) {
  const sheet = cook("tesAtlas") || cook("tesIdle");
  if (!sheet) return false;
  const kind = e.kind || "grunt";
  const scale = kind === "boss" ? 5 : kind === "security" ? 4 : kind === "rusher" ? 2 : SCALE;
  const moving = !e.dead && e.speed > 0.1;
  const face = dir4(e.facing || 0);
  const frame = moving ? 1 + (Math.floor(t * (kind === "rusher" ? 12 : 8)) % 2) : 0;
  const squash = e.dead ? Math.max(0.25, 1 - (e.deadT || 0) * 1.4) : 1;
  const alpha = e.dead ? Math.max(0, 1 - (e.deadT || 0) * 1.5) : 1;
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.beginPath();
  ctx.ellipse(e.x, e.y + 6, 10 * (scale / 3), 4, 0, 0, Math.PI * 2);
  ctx.fill();
  if (kind === "security") ctx.filter = "sepia(0.25) contrast(1.05)";
  if (sheet === cooked.tesAtlas) {
    blitFrame(ctx, sheet, TES_CELL, face, frame, e.x, e.y, scale, { squash, alpha });
  } else {
    ctx.imageSmoothingEnabled = false;
    ctx.globalAlpha = alpha;
    const dw = sheet.width * scale;
    const dh = sheet.height * scale * squash;
    ctx.drawImage(sheet, Math.round(e.x - dw / 2), Math.round(e.y - dh + 6), dw, dh);
  }
  ctx.filter = "none";
  if (kind === "boss" && !e.dead) {
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "#1c1c20";
    ctx.fillRect(Math.round(e.x - 18), Math.round(e.y - 70), 36, 14);
    ctx.fillStyle = "#d0d0d4";
    ctx.font = "bold 8px Trebuchet MS, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("DIR", e.x, e.y - 60);
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
