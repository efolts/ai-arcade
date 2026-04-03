import { useState, useEffect, useRef, useCallback } from "react";

// ── PALETTE ──────────────────────────────────────
const C = {
  outline: '#080810',
  hairDk: '#2e1808',
  hairMd: '#5c3018',
  hairLt: '#7e4820',
  hairHi: '#9a6030',
  skin: '#d4a068',
  skinSh: '#a07038',
  skinHi: '#e4b888',
  eyeW: '#e0e0e0',
  eyeB: '#00ddff',
  armorDk: '#0e0e18',
  armor: '#1a1a28',
  armorMd: '#262638',
  armorLt: '#343448',
  pauldDk: '#38384a',
  pauld: '#50506a',
  pauldLt: '#6a6a84',
  pauldHi: '#8888a0',
  cyan: '#00ddff',
  cyanDk: '#008899',
  pants: '#0a0a1e',
  pantsLt: '#14142c',
  belt: '#5a4810',
  beltLt: '#7a6420',
  pouch: '#483808',
  boots: '#121220',
  bootsDt: '#1e1e30',
  bootsBk: '#2a2a3c',
  kbFrame: '#404054',
  kbFrameLt: '#58586c',
  kbKey: '#a8a8b8',
  kbKeyLt: '#c8c8d8',
  kbKeyDk: '#808094',
  kbGap: '#222234',
  kbGlow: '#00ddff',
  kbGlowDk: '#006688',
};

const SCALE = 4;
const SW = 32;
const SH = 48;

// ── DRAWING HELPERS ──────────────────────────────
const px = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
};
const rect = (ctx, x, y, w, h, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

// ── KEYBOARD BUSTER SWORD ────────────────────────
function drawSword(ctx, sx, sy, height = 28) {
  const w = 7;
  // Dark frame body
  rect(ctx, sx, sy, w, height, C.kbFrame);
  // Outline all edges
  rect(ctx, sx, sy, w, 1, C.outline);
  rect(ctx, sx, sy + height - 1, w, 1, C.outline);
  rect(ctx, sx, sy, 1, height, C.outline);
  rect(ctx, sx + w - 1, sy, 1, height, C.outline);
  // Inner dark background (where keys sit)
  rect(ctx, sx + 1, sy + 1, 5, height - 2, C.kbGap);

  // ── KEY LAYOUT (bottom to top, like holding keyboard upside down as sword) ──
  // The spacebar at bottom is THE iconic element
  const ky = (row) => sy + height - 3 - row * 3; // rows from bottom up

  // Row 0 - SPACEBAR (the big one - instantly says "keyboard")
  const spY = ky(0);
  rect(ctx, sx + 1, spY, 5, 2, C.kbKeyLt);
  rect(ctx, sx + 1, spY + 1, 5, 1, C.kbKey);
  // subtle center line on spacebar
  px(ctx, sx + 3, spY, C.kbKeyDk);

  // Row 1 - Bottom row: 3 keys [Ctrl][__][Ctrl]
  const r1 = ky(1);
  rect(ctx, sx + 1, r1, 2, 2, C.kbKeyLt);  // left
  rect(ctx, sx + 1, r1 + 1, 2, 1, C.kbKey);
  rect(ctx, sx + 4, r1, 2, 2, C.kbKeyLt);  // right
  rect(ctx, sx + 4, r1 + 1, 2, 1, C.kbKey);

  // Row 2 - ZXCV: 5 small keys
  const r2 = ky(2);
  for (let i = 0; i < 5; i++) {
    px(ctx, sx + 1 + i, r2, C.kbKeyLt);
    px(ctx, sx + 1 + i, r2 + 1, C.kbKey);
  }

  // Row 3 - ASDF: [wider][gap][wider]
  const r3 = ky(3);
  rect(ctx, sx + 1, r3, 2, 2, C.kbKeyLt);
  rect(ctx, sx + 1, r3 + 1, 2, 1, C.kbKeyDk);
  rect(ctx, sx + 4, r3, 2, 2, C.kbKeyLt);
  rect(ctx, sx + 4, r3 + 1, 2, 1, C.kbKeyDk);

  // Row 4 - QWERTY: 5 small keys
  const r4 = ky(4);
  for (let i = 0; i < 5; i++) {
    px(ctx, sx + 1 + i, r4, C.kbKeyLt);
    px(ctx, sx + 1 + i, r4 + 1, C.kbKey);
  }

  // Row 5 - Numbers: full bar
  const r5 = ky(5);
  rect(ctx, sx + 1, r5, 5, 2, C.kbKey);
  rect(ctx, sx + 1, r5, 5, 1, C.kbKeyLt);
  // number divisions
  px(ctx, sx + 2, r5, C.kbGap);
  px(ctx, sx + 4, r5, C.kbGap);
  px(ctx, sx + 2, r5 + 1, C.kbGap);
  px(ctx, sx + 4, r5 + 1, C.kbGap);

  // Row 6 - Function row: tiny keys
  const r6 = ky(6);
  px(ctx, sx + 1, r6, C.kbKeyDk);
  px(ctx, sx + 2, r6, C.kbKeyDk);
  px(ctx, sx + 4, r6, C.kbKeyDk);
  px(ctx, sx + 5, r6, C.kbKeyDk);

  // Row 7 - Escape key (single bright key at very top)
  const r7 = ky(7);
  if (r7 > sy) {
    rect(ctx, sx + 1, r7, 2, 1, C.kbKeyLt);
  }

  // ── CONTINUOUS CYAN EDGE GLOW (both sides) ──
  rect(ctx, sx, sy + 1, 1, height - 2, C.kbGlowDk);
  rect(ctx, sx + w - 1, sy + 1, 1, height - 2, C.kbGlowDk);
  // Brighter glow spots
  for (let i = 3; i < height - 3; i += 5) {
    px(ctx, sx, sy + i, C.cyan);
    px(ctx, sx + w - 1, sy + i, C.cyan);
  }

  // ── BLADE TIP (sharp cyan point) ──
  rect(ctx, sx + 2, sy - 1, 3, 1, C.cyan);
  px(ctx, sx + 3, sy - 2, C.cyan);
  rect(ctx, sx + 1, sy, 5, 1, C.kbGlow);

  // ── CROSS GUARD (wider than blade, metallic) ──
  rect(ctx, sx - 2, sy + height - 1, w + 4, 2, C.pauld);
  rect(ctx, sx - 2, sy + height - 1, w + 4, 1, C.pauldHi);
  rect(ctx, sx - 2, sy + height + 1, w + 4, 1, C.outline);
  px(ctx, sx - 3, sy + height - 1, C.outline);
  px(ctx, sx + w + 1, sy + height - 1, C.outline);
  px(ctx, sx - 3, sy + height, C.outline);
  px(ctx, sx + w + 1, sy + height, C.outline);
  // Cyan gems on cross guard
  px(ctx, sx - 1, sy + height - 1, C.cyan);
  px(ctx, sx + w, sy + height - 1, C.cyan);

  // ── HANDLE (wrapped grip) ──
  rect(ctx, sx + 2, sy + height + 1, 3, 4, C.armorMd);
  rect(ctx, sx + 1, sy + height + 1, 1, 4, C.outline);
  rect(ctx, sx + 5, sy + height + 1, 1, 4, C.outline);
  rect(ctx, sx + 2, sy + height + 5, 3, 1, C.outline);
  // Wrap detail
  px(ctx, sx + 2, sy + height + 2, C.armorLt);
  px(ctx, sx + 4, sy + height + 3, C.armorLt);
  // Pommel
  rect(ctx, sx + 2, sy + height + 4, 3, 1, C.pauldLt);
}

// ── HAIR (spiky, facing left) ────────────────────
function drawHair(ctx, hx, hy, flip = false) {
  const p = (x, y, c) => px(ctx, flip ? hx + 12 - x : hx + x, hy + y, c);

  // Spike 1 (tallest, up-left)
  p(3, 0, C.hairMd); p(4, 0, C.hairLt);
  p(2, 1, C.hairDk); p(3, 1, C.hairMd); p(4, 1, C.hairLt); p(5, 1, C.hairMd);
  p(2, 2, C.hairDk); p(3, 2, C.hairMd); p(4, 2, C.hairMd); p(5, 2, C.hairDk);

  // Spike 2 (right of 1)
  p(7, 1, C.hairLt); p(8, 1, C.hairMd);
  p(6, 2, C.hairMd); p(7, 2, C.hairLt); p(8, 2, C.hairMd); p(9, 2, C.hairDk);

  // Spike 3 (back spike going right)
  p(10, 2, C.hairMd); p(11, 2, C.hairLt); p(12, 2, C.hairHi);
  p(10, 3, C.hairDk); p(11, 3, C.hairMd); p(12, 3, C.hairMd);

  // Main hair mass
  p(1, 3, C.hairDk); p(2, 3, C.hairDk); p(3, 3, C.hairMd); p(4, 3, C.hairMd);
  p(5, 3, C.hairMd); p(6, 3, C.hairMd); p(7, 3, C.hairMd); p(8, 3, C.hairMd);
  p(9, 3, C.hairDk);

  p(1, 4, C.outline); p(2, 4, C.hairDk); p(3, 4, C.hairMd); p(4, 4, C.hairLt);
  p(5, 4, C.hairLt); p(6, 4, C.hairMd); p(7, 4, C.hairMd); p(8, 4, C.hairDk);
  p(9, 4, C.hairDk); p(10, 4, C.hairDk); p(11, 4, C.hairMd);

  p(1, 5, C.outline); p(2, 5, C.hairDk); p(3, 5, C.hairMd); p(4, 5, C.hairLt);
  p(5, 5, C.hairLt); p(6, 5, C.hairMd); p(7, 5, C.hairMd); p(8, 5, C.hairDk);
  p(9, 5, C.outline); p(10, 5, C.hairDk);
}

// ── FACE (3/4 view facing left) ──────────────────
function drawFace(ctx, fx, fy, hurt = false) {
  const skinC = hurt ? '#cc8888' : C.skin;
  const skinS = hurt ? '#aa6666' : C.skinSh;

  // Face block
  rect(ctx, fx, fy, 7, 5, skinC);
  // Shadow side (right edge)
  rect(ctx, fx + 6, fy, 1, 5, skinS);
  rect(ctx, fx + 5, fy + 4, 2, 1, skinS);
  // Outline
  rect(ctx, fx - 1, fy, 1, 5, C.outline);
  rect(ctx, fx, fy + 5, 6, 1, C.outline);
  rect(ctx, fx + 7, fy, 1, 5, C.outline);
  px(ctx, fx - 1, fy + 5, C.outline);
  px(ctx, fx + 7, fy + 5, C.outline);

  // Eye (left side - facing left so eye is toward viewer)
  px(ctx, fx + 1, fy + 1, C.eyeW);
  px(ctx, fx + 2, fy + 1, C.eyeB);
  px(ctx, fx + 1, fy + 2, C.outline);
  px(ctx, fx + 2, fy + 2, C.outline);

  // Mouth line
  px(ctx, fx + 1, fy + 4, C.skinSh);
  px(ctx, fx + 2, fy + 4, C.skinSh);

  // Chin
  rect(ctx, fx + 1, fy + 5, 4, 1, skinC);
  rect(ctx, fx + 1, fy + 6, 3, 1, skinC);
  px(ctx, fx, fy + 6, C.outline);
  px(ctx, fx + 4, fy + 6, C.outline);
  rect(ctx, fx + 1, fy + 7, 2, 1, C.outline);
}

// ── PAULDRON ─────────────────────────────────────
function drawPauldron(ctx, px_, py) {
  // Big chunky shoulder pad
  rect(ctx, px_, py, 6, 5, C.pauld);
  rect(ctx, px_ + 1, py, 5, 1, C.pauldHi);
  rect(ctx, px_, py + 1, 1, 4, C.pauldLt);
  rect(ctx, px_ + 5, py + 1, 1, 4, C.pauldDk);
  rect(ctx, px_, py + 4, 6, 1, C.pauldDk);
  // Outline
  px(ctx, px_ - 1, py, C.outline);
  rect(ctx, px_, py - 1, 6, 1, C.outline);
  px(ctx, px_ + 6, py, C.outline);
  px(ctx, px_ - 1, py + 4, C.outline);
  px(ctx, px_ + 6, py + 4, C.outline);
  rect(ctx, px_, py + 5, 6, 1, C.outline);
  px(ctx, px_ - 1, py + 1, C.outline);
  px(ctx, px_ - 1, py + 2, C.outline);
  px(ctx, px_ - 1, py + 3, C.outline);
  px(ctx, px_ + 6, py + 1, C.outline);
  px(ctx, px_ + 6, py + 2, C.outline);
  px(ctx, px_ + 6, py + 3, C.outline);
  // Cyan rivets
  px(ctx, px_ + 1, py + 2, C.cyan);
  px(ctx, px_ + 4, py + 2, C.cyan);
}

// ── TORSO ────────────────────────────────────────
function drawTorso(ctx, tx, ty, w = 10, h = 10) {
  // Main body
  rect(ctx, tx, ty, w, h, C.armor);
  // Lighter center panel
  rect(ctx, tx + 2, ty, w - 4, h, C.armorMd);
  // Collar area
  rect(ctx, tx + 3, ty, w - 5, 1, C.armorLt);
  // Armor lines
  rect(ctx, tx + 1, ty + 3, w - 2, 1, C.armorDk);
  rect(ctx, tx + 1, ty + 6, w - 2, 1, C.armorDk);
  // Edge highlight (left - facing light)
  rect(ctx, tx, ty, 1, h, C.armorLt);
  // Shadow (right)
  rect(ctx, tx + w - 1, ty, 1, h, C.armorDk);
  // Outline
  px(ctx, tx - 1, ty, C.outline);
  px(ctx, tx + w, ty, C.outline);
  rect(ctx, tx - 1, ty + 1, 1, h - 1, C.outline);
  rect(ctx, tx + w, ty + 1, 1, h - 1, C.outline);
}

// ── BELT & POUCHES ───────────────────────────────
function drawBelt(ctx, bx, by, w = 10) {
  rect(ctx, bx, by, w, 2, C.belt);
  rect(ctx, bx, by, w, 1, C.beltLt);
  // Pouches
  rect(ctx, bx + 1, by + 2, 3, 2, C.pouch);
  rect(ctx, bx + 1, by + 2, 3, 1, C.belt);
  rect(ctx, bx + w - 4, by + 2, 3, 2, C.pouch);
  rect(ctx, bx + w - 4, by + 2, 3, 1, C.belt);
  // Outline
  rect(ctx, bx - 1, by, 1, 2, C.outline);
  rect(ctx, bx + w, by, 1, 2, C.outline);
  px(ctx, bx, by + 4, C.outline);
  px(ctx, bx + 3, by + 4, C.outline);
  px(ctx, bx + w - 4, by + 4, C.outline);
  px(ctx, bx + w - 1, by + 4, C.outline);
  // Buckle
  px(ctx, bx + Math.floor(w / 2), by, C.pauldHi);
  px(ctx, bx + Math.floor(w / 2), by + 1, C.pauld);
}

// ── LEGS ─────────────────────────────────────────
function drawLegs(ctx, lx, ly, spread = 0, walkFrame = 0) {
  const lOff = walkFrame === 1 ? -1 : walkFrame === 2 ? 1 : 0;
  const rOff = walkFrame === 1 ? 1 : walkFrame === 2 ? -1 : 0;

  // Left leg
  const llx = lx - spread;
  rect(ctx, llx, ly + lOff, 4, 10, C.pants);
  rect(ctx, llx, ly + lOff, 1, 10, C.pantsLt);
  rect(ctx, llx - 1, ly + lOff, 1, 10, C.outline);
  rect(ctx, llx + 4, ly + lOff, 1, 10, C.outline);

  // Right leg
  const rlx = lx + 5 + spread;
  rect(ctx, rlx, ly + rOff, 4, 10, C.pants);
  rect(ctx, rlx + 3, ly + rOff, 1, 10, C.pantsLt);
  rect(ctx, rlx - 1, ly + rOff, 1, 10, C.outline);
  rect(ctx, rlx + 4, ly + rOff, 1, 10, C.outline);

  return { llx, lOff, rlx, rOff };
}

// ── BOOTS ────────────────────────────────────────
function drawBoot(ctx, bx, by) {
  rect(ctx, bx - 1, by, 6, 4, C.boots);
  rect(ctx, bx, by, 4, 1, C.bootsDt);
  rect(ctx, bx, by + 1, 1, 1, C.bootsBk); // buckle
  // Sole
  rect(ctx, bx - 2, by + 4, 8, 1, C.outline);
  rect(ctx, bx - 1, by + 3, 6, 1, C.armorDk);
  // Outline
  rect(ctx, bx - 2, by, 1, 4, C.outline);
  rect(ctx, bx + 5, by, 1, 4, C.outline);
  px(ctx, bx - 1, by - 1, C.outline);
  px(ctx, bx + 4, by - 1, C.outline);
}

// ── ARM ──────────────────────────────────────────
function drawArm(ctx, ax, ay, length = 8, raised = false) {
  if (raised) {
    // Arm going up
    rect(ctx, ax, ay - length, 3, length, C.armor);
    rect(ctx, ax, ay - length, 1, length, C.armorLt);
    rect(ctx, ax - 1, ay - length, 1, length, C.outline);
    rect(ctx, ax + 3, ay - length, 1, length, C.outline);
    // Hand
    rect(ctx, ax, ay - length - 1, 3, 1, C.skin);
    px(ctx, ax - 1, ay - length - 1, C.outline);
    px(ctx, ax + 3, ay - length - 1, C.outline);
  } else {
    rect(ctx, ax, ay, 3, length, C.armor);
    rect(ctx, ax, ay, 1, length, C.armorLt);
    rect(ctx, ax - 1, ay, 1, length, C.outline);
    rect(ctx, ax + 3, ay, 1, length, C.outline);
    // Hand
    rect(ctx, ax, ay + length, 3, 2, C.skin);
    rect(ctx, ax, ay + length + 1, 3, 1, C.skinSh);
    px(ctx, ax - 1, ay + length, C.outline);
    px(ctx, ax + 3, ay + length, C.outline);
    rect(ctx, ax, ay + length + 2, 3, 1, C.outline);
  }
}

// ═══════════════════════════════════════════════════
// COMPLETE POSE DRAWING FUNCTIONS
// ═══════════════════════════════════════════════════

function drawBattleIdle(ctx, ox, oy, frame = 0) {
  const bob = frame % 2 === 0 ? 0 : 1;
  const by = oy + bob;

  // Legs (slightly spread stance)
  const legs = drawLegs(ctx, ox + 9, by + 33, 1);
  drawBoot(ctx, legs.llx, by + 43 + legs.lOff);
  drawBoot(ctx, legs.rlx, by + 43 + legs.rOff);

  // Body
  drawTorso(ctx, ox + 8, by + 18, 10, 12);
  drawBelt(ctx, ox + 8, by + 30, 10);

  // Pauldron (front shoulder)
  drawPauldron(ctx, ox + 4, by + 16);

  // ── TWO-HANDED SWORD GRIP ──
  // Sword in front, blade pointing up-left
  drawSword(ctx, ox + 1, by - 2, 28);

  // Near arm (front) reaching to sword handle
  rect(ctx, ox + 4, by + 21, 3, 5, C.armor);
  rect(ctx, ox + 4, by + 21, 1, 5, C.armorLt);
  rect(ctx, ox + 3, by + 21, 1, 5, C.outline);
  rect(ctx, ox + 7, by + 21, 1, 5, C.outline);
  // Near hand on handle
  rect(ctx, ox + 3, by + 26, 4, 2, C.skin);
  rect(ctx, ox + 3, by + 27, 4, 1, C.skinSh);
  rect(ctx, ox + 2, by + 26, 1, 2, C.outline);
  rect(ctx, ox + 7, by + 26, 1, 2, C.outline);

  // Far arm reaching forward to grip above near hand
  rect(ctx, ox + 14, by + 21, 3, 3, C.armor);
  rect(ctx, ox + 14, by + 21, 1, 3, C.armorLt);
  // Forearm angles toward sword
  rect(ctx, ox + 11, by + 24, 3, 2, C.armor);
  rect(ctx, ox + 8, by + 25, 3, 2, C.armor);
  // Far hand on handle (above near hand)
  rect(ctx, ox + 3, by + 24, 4, 2, C.skin);
  rect(ctx, ox + 3, by + 24, 4, 1, C.skinSh);

  // Neck
  rect(ctx, ox + 11, by + 15, 4, 3, C.skin);
  rect(ctx, ox + 11, by + 15, 4, 1, C.skinSh);

  // Head
  drawFace(ctx, ox + 8, by + 8);
  drawHair(ctx, ox + 6, by + 2);
}

function drawBattleIdle2(ctx, ox, oy) {
  drawBattleIdle(ctx, ox, oy, 1);
}

function drawAttack1(ctx, ox, oy) {
  // Windup - sword raised above head, both hands
  const legs = drawLegs(ctx, ox + 9, oy + 33, 2);
  drawBoot(ctx, legs.llx, oy + 43 + legs.lOff);
  drawBoot(ctx, legs.rlx, oy + 43 + legs.rOff);

  drawTorso(ctx, ox + 8, oy + 18, 10, 12);
  drawBelt(ctx, ox + 8, oy + 30, 10);
  drawPauldron(ctx, ox + 4, oy + 16);

  // Sword raised overhead
  drawSword(ctx, ox + 8, oy - 22, 24);

  // Both arms up gripping handle
  // Near arm going up
  rect(ctx, ox + 6, oy + 13, 3, 8, C.armor);
  rect(ctx, ox + 6, oy + 13, 1, 8, C.armorLt);
  rect(ctx, ox + 5, oy + 13, 1, 8, C.outline);
  rect(ctx, ox + 9, oy + 13, 1, 8, C.outline);
  // Near hand at top
  rect(ctx, ox + 8, oy + 5, 4, 2, C.skin);
  rect(ctx, ox + 8, oy + 6, 4, 1, C.skinSh);

  // Far arm going up
  rect(ctx, ox + 13, oy + 14, 3, 7, C.armor);
  rect(ctx, ox + 13, oy + 14, 1, 7, C.armorLt);
  rect(ctx, ox + 12, oy + 14, 1, 7, C.outline);
  rect(ctx, ox + 16, oy + 14, 1, 7, C.outline);
  // Far hand
  rect(ctx, ox + 8, oy + 3, 4, 2, C.skin);
  rect(ctx, ox + 8, oy + 3, 4, 1, C.skinSh);

  rect(ctx, ox + 11, oy + 15, 4, 3, C.skin);
  drawFace(ctx, ox + 8, oy + 8);
  drawHair(ctx, ox + 6, oy + 2);
}

function drawAttack2(ctx, ox, oy) {
  // Mid swing - sword coming forward/down, both hands gripping
  const legs = drawLegs(ctx, ox + 9, oy + 33, 2);
  drawBoot(ctx, legs.llx, oy + 43 + legs.lOff);
  drawBoot(ctx, legs.rlx, oy + 43 + legs.rOff);

  drawTorso(ctx, ox + 7, oy + 18, 10, 12);
  drawBelt(ctx, ox + 7, oy + 30, 10);
  drawPauldron(ctx, ox + 3, oy + 16);

  // Both arms extended forward-left toward sword handle
  // Near arm angling down-left to handle
  rect(ctx, ox + 3, oy + 20, 3, 3, C.armor);
  rect(ctx, ox + 3, oy + 20, 1, 3, C.armorLt);
  rect(ctx, ox + 2, oy + 20, 1, 3, C.outline);
  rect(ctx, ox + 6, oy + 20, 1, 3, C.outline);
  // Far arm crossing to grip
  rect(ctx, ox + 12, oy + 20, 3, 2, C.armor);
  rect(ctx, ox + 9, oy + 21, 3, 2, C.armor);
  rect(ctx, ox + 6, oy + 22, 3, 2, C.armor);
  // Both hands clamped on handle (at cross guard x position)
  rect(ctx, ox + 1, oy + 22, 4, 3, C.skin);
  rect(ctx, ox + 1, oy + 24, 4, 1, C.skinSh);
  rect(ctx, ox, oy + 22, 1, 3, C.outline);
  rect(ctx, ox + 5, oy + 22, 1, 3, C.outline);

  rect(ctx, ox + 10, oy + 15, 4, 3, C.skin);
  drawFace(ctx, ox + 7, oy + 8);
  drawHair(ctx, ox + 5, oy + 2);

  // Sword swinging horizontal OUTWARD (blade extends left toward enemy)
  const sx = ox - 17, sy = oy + 20;
  const sLen = 20;
  // Frame
  rect(ctx, sx, sy, sLen, 7, C.kbFrame);
  rect(ctx, sx, sy, sLen, 1, C.outline);
  rect(ctx, sx, sy + 6, sLen, 1, C.outline);
  rect(ctx, sx, sy, 1, 7, C.outline);
  rect(ctx, sx + sLen - 1, sy, 1, 7, C.outline);
  rect(ctx, sx + 1, sy + 1, sLen - 2, 5, C.kbGap);

  // Blade tip glow (LEFT end = toward enemy)
  rect(ctx, sx, sy + 1, 1, 5, C.cyan);
  px(ctx, sx - 1, sy + 3, C.cyan);

  // Key layout (rotated)
  // Spacebar column (right end = near handle)
  rect(ctx, sx + sLen - 4, sy + 2, 3, 3, C.kbKeyLt);
  rect(ctx, sx + sLen - 4, sy + 4, 3, 1, C.kbKey);
  // Key columns across blade
  for (let c = 0; c < 5; c++) {
    const kx = sx + 1 + c * 3;
    rect(ctx, kx, sy + 1, 2, 2, C.kbKeyLt);
    rect(ctx, kx, sy + 1, 2, 1, C.kbKey);
    rect(ctx, kx, sy + 4, 2, 2, C.kbKeyLt);
    rect(ctx, kx, sy + 5, 2, 1, C.kbKey);
  }
  // Cyan edge glow
  rect(ctx, sx + 1, sy, 1, 7, C.kbGlowDk);
  rect(ctx, sx + 1, sy + 6, sLen - 2, 1, C.kbGlowDk);

  // Cross guard (RIGHT end = handle side, near character)
  rect(ctx, sx + sLen - 2, sy - 1, 2, 9, C.pauld);
  rect(ctx, sx + sLen - 2, sy - 1, 2, 1, C.outline);
  rect(ctx, sx + sLen - 2, sy + 7, 2, 1, C.outline);
  px(ctx, sx + sLen - 1, sy - 1, C.cyan);
  px(ctx, sx + sLen - 1, sy + 7, C.cyan);

  // Motion lines trailing the swing arc (further left past blade tip)
  for (let i = 0; i < 4; i++) {
    rect(ctx, sx - 4 - i * 3, sy + i + 1, 2, 1, C.cyanDk);
  }
}

function drawAttack3(ctx, ox, oy) {
  // Follow through - sword has completed arc, held low in front
  // Character leaning forward with momentum
  const legs = drawLegs(ctx, ox + 10, oy + 33, 3);
  drawBoot(ctx, legs.llx, oy + 43 + legs.lOff);
  drawBoot(ctx, legs.rlx, oy + 43 + legs.rOff);

  drawTorso(ctx, ox + 8, oy + 19, 10, 12);
  drawBelt(ctx, ox + 8, oy + 31, 10);
  drawPauldron(ctx, ox + 4, oy + 17);

  // Sword held low in front - blade pointing forward-up from hands
  // Handle at hand level, blade extends up-left
  drawSword(ctx, ox - 2, oy + 3, 24);

  // Both arms reaching forward-down to grip handle
  // Near arm
  rect(ctx, ox + 4, oy + 22, 3, 5, C.armor);
  rect(ctx, ox + 4, oy + 22, 1, 5, C.armorLt);
  rect(ctx, ox + 3, oy + 22, 1, 5, C.outline);
  rect(ctx, ox + 7, oy + 22, 1, 5, C.outline);
  // Forearm angles to handle
  rect(ctx, ox + 2, oy + 27, 3, 3, C.armor);
  rect(ctx, ox + 1, oy + 27, 1, 3, C.outline);
  rect(ctx, ox + 5, oy + 27, 1, 3, C.outline);

  // Far arm crossing to grip
  rect(ctx, ox + 13, oy + 22, 3, 3, C.armor);
  rect(ctx, ox + 10, oy + 24, 3, 3, C.armor);
  rect(ctx, ox + 7, oy + 26, 3, 3, C.armor);
  rect(ctx, ox + 4, oy + 28, 3, 2, C.armor);

  // Both hands clamped on handle (at cross guard position)
  rect(ctx, ox - 1, oy + 28, 5, 3, C.skin);
  rect(ctx, ox - 1, oy + 30, 5, 1, C.skinSh);
  rect(ctx, ox - 2, oy + 28, 1, 3, C.outline);
  rect(ctx, ox + 4, oy + 28, 1, 3, C.outline);

  rect(ctx, ox + 11, oy + 16, 4, 3, C.skin);
  drawFace(ctx, ox + 8, oy + 9);
  drawHair(ctx, ox + 6, oy + 3);

  // Impact sparks trailing behind the slash arc
  px(ctx, ox + 18, oy + 12, C.cyan);
  px(ctx, ox + 20, oy + 15, C.cyan);
  px(ctx, ox + 22, oy + 10, C.kbGlow);
  px(ctx, ox + 16, oy + 8, C.cyan);
  px(ctx, ox + 21, oy + 18, C.kbGlow);
}

function drawMagicCast(ctx, ox, oy) {
  const bob = 0;
  // Sword on back
  drawSword(ctx, ox + 18, oy + 4, 26);

  const legs = drawLegs(ctx, ox + 9, oy + 33, 1);
  drawBoot(ctx, legs.llx, oy + 43);
  drawBoot(ctx, legs.rlx, oy + 43);

  drawTorso(ctx, ox + 8, oy + 18, 10, 12);
  drawBelt(ctx, ox + 8, oy + 30, 10);
  drawPauldron(ctx, ox + 4, oy + 16);

  // Near arm extended casting
  drawArm(ctx, ox + 1, oy + 19, 6);

  // Magic particles
  const particles = [[ox - 2, oy + 18], [ox - 4, oy + 15], [ox - 1, oy + 13],
    [ox - 5, oy + 20], [ox - 3, oy + 10], [ox, oy + 8], [ox - 6, oy + 12]];
  particles.forEach(([px_, py], i) => {
    const c = i % 2 === 0 ? C.cyan : C.kbGlow;
    rect(ctx, px_, py, 2, 2, c);
  });

  // Far arm up channeling
  drawArm(ctx, ox + 16, oy + 19, 6, true);

  rect(ctx, ox + 11, oy + 15, 4, 3, C.skin);
  drawFace(ctx, ox + 8, oy + 8);
  drawHair(ctx, ox + 6, oy + 2);
}

function drawHurtPose(ctx, ox, oy) {
  // Staggering back (shifted right)
  const shx = ox + 3;

  drawSword(ctx, shx + 20, oy + 6, 24);

  const legs = drawLegs(ctx, shx + 10, oy + 34, 2, 1);
  drawBoot(ctx, legs.llx, oy + 44 + legs.lOff);
  drawBoot(ctx, legs.rlx, oy + 44 + legs.rOff);

  drawTorso(ctx, shx + 9, oy + 20, 10, 11);
  drawBelt(ctx, shx + 9, oy + 31, 10);
  drawPauldron(ctx, shx + 6, oy + 18);

  drawArm(ctx, shx + 6, oy + 22, 6);
  drawArm(ctx, shx + 17, oy + 22, 6);

  rect(ctx, shx + 12, oy + 17, 4, 3, C.skin);
  drawFace(ctx, shx + 9, oy + 10, true);
  drawHair(ctx, shx + 7, oy + 4);

  // Hit flash lines
  px(ctx, shx + 2, oy + 14, '#ff4444');
  px(ctx, shx + 1, oy + 16, '#ff4444');
  px(ctx, shx + 3, oy + 18, '#ff6666');
  px(ctx, shx, oy + 12, '#ff6666');
}

function drawVictory(ctx, ox, oy) {
  // Sword raised triumphantly overhead with one arm
  const legs = drawLegs(ctx, ox + 9, oy + 33, 0);
  drawBoot(ctx, legs.llx, oy + 43);
  drawBoot(ctx, legs.rlx, oy + 43);

  drawTorso(ctx, ox + 8, oy + 18, 10, 12);
  drawBelt(ctx, ox + 8, oy + 30, 10);
  drawPauldron(ctx, ox + 4, oy + 16);

  // Near arm relaxed at side
  drawArm(ctx, ox + 4, oy + 21, 7);

  // Far arm straight up holding sword
  rect(ctx, ox + 16, oy + 10, 3, 10, C.armor);
  rect(ctx, ox + 16, oy + 10, 1, 10, C.armorLt);
  rect(ctx, ox + 15, oy + 10, 1, 10, C.outline);
  rect(ctx, ox + 19, oy + 10, 1, 10, C.outline);
  rect(ctx, ox + 16, oy + 9, 3, 1, C.skin);

  // Sword above
  drawSword(ctx, ox + 14, oy - 20, 26);

  rect(ctx, ox + 11, oy + 15, 4, 3, C.skin);
  drawFace(ctx, ox + 8, oy + 8);
  drawHair(ctx, ox + 6, oy + 2);
}

function drawKO(ctx, ox, oy) {
  // Fallen on ground - drawn horizontally
  const gx = ox;
  const gy = oy + 34;

  // Boots (left side)
  rect(ctx, gx, gy + 2, 4, 6, C.boots);
  rect(ctx, gx, gy + 2, 4, 1, C.bootsDt);
  rect(ctx, gx - 1, gy + 1, 1, 7, C.outline);
  rect(ctx, gx + 4, gy + 2, 1, 6, C.outline);

  // Legs
  rect(ctx, gx + 4, gy + 2, 8, 4, C.pants);
  rect(ctx, gx + 4, gy + 2, 8, 1, C.pantsLt);

  // Belt
  rect(ctx, gx + 12, gy + 2, 2, 4, C.belt);

  // Torso
  rect(ctx, gx + 14, gy + 1, 8, 6, C.armor);
  rect(ctx, gx + 14, gy + 1, 8, 1, C.armorLt);
  rect(ctx, gx + 14, gy + 6, 8, 1, C.armorDk);

  // Pauldron
  rect(ctx, gx + 16, gy - 1, 4, 3, C.pauld);
  rect(ctx, gx + 16, gy - 1, 4, 1, C.pauldHi);

  // Head
  rect(ctx, gx + 22, gy + 1, 5, 5, C.skin);
  rect(ctx, gx + 22, gy + 1, 5, 1, C.skinSh);
  // X eyes
  px(ctx, gx + 23, gy + 2, C.outline);
  px(ctx, gx + 24, gy + 3, C.outline);
  px(ctx, gx + 24, gy + 2, C.outline);
  px(ctx, gx + 23, gy + 3, C.outline);

  // Hair
  rect(ctx, gx + 25, gy - 1, 3, 3, C.hairMd);
  rect(ctx, gx + 27, gy - 2, 2, 2, C.hairLt);
  rect(ctx, gx + 26, gy, 2, 2, C.hairDk);

  // Sword fallen beside (horizontal keyboard on ground)
  rect(ctx, gx + 2, gy + 9, 22, 5, C.kbFrame);
  rect(ctx, gx + 3, gy + 10, 20, 3, C.kbGap);
  // Spacebar (left end)
  rect(ctx, gx + 3, gy + 10, 3, 3, C.kbKeyLt);
  rect(ctx, gx + 3, gy + 12, 3, 1, C.kbKey);
  // Key blocks
  for (let i = 0; i < 5; i++) {
    const kx = gx + 7 + i * 3;
    rect(ctx, kx, gy + 10, 2, 1, C.kbKeyLt);
    rect(ctx, kx, gy + 12, 2, 1, C.kbKeyLt);
    rect(ctx, kx, gy + 11, 2, 1, C.kbKey);
  }
  // Cyan edge glow
  rect(ctx, gx + 2, gy + 11, 1, 1, C.cyan);
  rect(ctx, gx + 23, gy + 11, 1, 1, C.cyan);
  rect(ctx, gx + 2, gy + 9, 22, 1, C.outline);
  rect(ctx, gx + 2, gy + 14, 22, 1, C.outline);
  rect(ctx, gx + 1, gy + 9, 1, 6, C.outline);
  rect(ctx, gx + 24, gy + 9, 1, 6, C.outline);
}

function drawOverworldIdle(ctx, ox, oy) {
  // Front-facing (looking at player)
  // Sword handle visible over right shoulder

  // Sword peeking over shoulder (behind, visible keyboard)
  rect(ctx, ox + 19, oy + 3, 5, 20, C.kbFrame);
  rect(ctx, ox + 20, oy + 4, 3, 18, C.kbGap);
  // Spacebar near bottom
  rect(ctx, ox + 20, oy + 18, 3, 2, C.kbKeyLt);
  rect(ctx, ox + 20, oy + 19, 3, 1, C.kbKey);
  // Key rows
  for (let r = 0; r < 4; r++) {
    rect(ctx, ox + 20, oy + 5 + r * 3, 3, 2, C.kbKeyLt);
    rect(ctx, ox + 20, oy + 6 + r * 3, 3, 1, C.kbKey);
  }
  // Cyan edge glow
  rect(ctx, ox + 19, oy + 4, 1, 18, C.kbGlowDk);
  rect(ctx, ox + 23, oy + 4, 1, 18, C.kbGlowDk);
  px(ctx, ox + 19, oy + 10, C.cyan);
  px(ctx, ox + 23, oy + 10, C.cyan);
  // Blade tip glow
  rect(ctx, ox + 20, oy + 2, 3, 1, C.cyan);
  px(ctx, ox + 21, oy + 1, C.cyan);

  // Legs
  rect(ctx, ox + 9, oy + 34, 4, 9, C.pants);
  rect(ctx, ox + 15, oy + 34, 4, 9, C.pants);
  rect(ctx, ox + 8, oy + 34, 1, 9, C.outline);
  rect(ctx, ox + 13, oy + 34, 1, 9, C.outline);
  rect(ctx, ox + 14, oy + 34, 1, 9, C.outline);
  rect(ctx, ox + 19, oy + 34, 1, 9, C.outline);

  // Boots
  rect(ctx, ox + 8, oy + 43, 6, 4, C.boots);
  rect(ctx, ox + 14, oy + 43, 6, 4, C.boots);
  rect(ctx, ox + 9, oy + 43, 4, 1, C.bootsDt);
  rect(ctx, ox + 15, oy + 43, 4, 1, C.bootsDt);
  rect(ctx, ox + 7, oy + 43, 1, 4, C.outline);
  rect(ctx, ox + 14, oy + 43, 1, 4, C.outline);
  rect(ctx, ox + 13, oy + 43, 1, 4, C.outline);
  rect(ctx, ox + 20, oy + 43, 1, 4, C.outline);
  rect(ctx, ox + 7, oy + 47, 7, 1, C.outline);
  rect(ctx, ox + 13, oy + 47, 8, 1, C.outline);

  // Torso
  rect(ctx, ox + 8, oy + 20, 12, 11, C.armor);
  rect(ctx, ox + 10, oy + 20, 8, 11, C.armorMd);
  rect(ctx, ox + 13, oy + 20, 2, 11, C.armorLt);
  rect(ctx, ox + 7, oy + 20, 1, 11, C.outline);
  rect(ctx, ox + 20, oy + 20, 1, 11, C.outline);

  // Belt
  rect(ctx, ox + 8, oy + 31, 12, 2, C.belt);
  rect(ctx, ox + 8, oy + 31, 12, 1, C.beltLt);
  px(ctx, ox + 13, oy + 31, C.pauldHi);
  rect(ctx, ox + 9, oy + 33, 3, 1, C.pouch);
  rect(ctx, ox + 16, oy + 33, 3, 1, C.pouch);

  // Pauldrons (both visible from front)
  rect(ctx, ox + 4, oy + 18, 5, 4, C.pauld);
  rect(ctx, ox + 4, oy + 18, 5, 1, C.pauldHi);
  px(ctx, ox + 5, oy + 20, C.cyan);
  rect(ctx, ox + 19, oy + 18, 5, 4, C.pauldDk);
  rect(ctx, ox + 19, oy + 18, 5, 1, C.pauld);

  // Arms
  rect(ctx, ox + 5, oy + 22, 3, 8, C.armor);
  rect(ctx, ox + 20, oy + 22, 3, 8, C.armor);
  rect(ctx, ox + 5, oy + 30, 3, 2, C.skin);
  rect(ctx, ox + 20, oy + 30, 3, 2, C.skin);
  rect(ctx, ox + 4, oy + 22, 1, 10, C.outline);
  rect(ctx, ox + 8, oy + 22, 1, 10, C.outline);
  rect(ctx, ox + 19, oy + 22, 1, 10, C.outline);
  rect(ctx, ox + 23, oy + 22, 1, 10, C.outline);

  // Neck
  rect(ctx, ox + 11, oy + 17, 5, 3, C.skin);

  // Head / Face (front-facing)
  rect(ctx, ox + 8, oy + 9, 11, 8, C.skin);
  rect(ctx, ox + 8, oy + 9, 11, 1, C.skinSh);
  rect(ctx, ox + 7, oy + 9, 1, 8, C.outline);
  rect(ctx, ox + 19, oy + 9, 1, 8, C.outline);
  rect(ctx, ox + 8, oy + 17, 11, 1, C.outline);
  // Eyes
  px(ctx, ox + 10, oy + 12, C.eyeW); px(ctx, ox + 11, oy + 12, C.eyeB);
  px(ctx, ox + 10, oy + 13, C.outline); px(ctx, ox + 11, oy + 13, C.outline);
  px(ctx, ox + 15, oy + 12, C.eyeB); px(ctx, ox + 16, oy + 12, C.eyeW);
  px(ctx, ox + 15, oy + 13, C.outline); px(ctx, ox + 16, oy + 13, C.outline);
  // Mouth
  rect(ctx, ox + 12, oy + 15, 3, 1, C.skinSh);

  // Hair
  rect(ctx, ox + 7, oy + 6, 13, 5, C.hairMd);
  rect(ctx, ox + 8, oy + 6, 11, 2, C.hairLt);
  rect(ctx, ox + 7, oy + 9, 2, 3, C.hairDk);
  rect(ctx, ox + 18, oy + 9, 1, 3, C.hairDk);
  // Spikes
  rect(ctx, ox + 8, oy + 3, 3, 3, C.hairMd);
  rect(ctx, ox + 9, oy + 2, 2, 1, C.hairLt);
  rect(ctx, ox + 12, oy + 4, 2, 2, C.hairMd);
  rect(ctx, ox + 13, oy + 3, 2, 1, C.hairLt);
  rect(ctx, ox + 16, oy + 4, 3, 2, C.hairMd);
  rect(ctx, ox + 17, oy + 3, 2, 1, C.hairLt);
  rect(ctx, ox + 19, oy + 5, 2, 2, C.hairDk);
  rect(ctx, ox + 6, oy + 5, 2, 2, C.hairDk);
  // Top spike
  rect(ctx, ox + 11, oy + 1, 2, 2, C.hairMd);
  rect(ctx, ox + 12, oy + 0, 2, 1, C.hairHi);
}

// ═══════════════════════════════════════════════════
// SPRITE LAYOUT
// ═══════════════════════════════════════════════════
const FRAMES = [
  { draw: drawBattleIdle, name: 'Battle Idle 1' },
  { draw: drawBattleIdle2, name: 'Battle Idle 2' },
  { draw: drawAttack1, name: 'Attack: Raise' },
  { draw: drawAttack2, name: 'Attack: Swing' },
  { draw: drawAttack3, name: 'Attack: Follow' },
  { draw: drawMagicCast, name: 'Magic Cast' },
  { draw: drawHurtPose, name: 'Hurt' },
  { draw: drawVictory, name: 'Victory' },
  { draw: drawOverworldIdle, name: 'Overworld' },
  { draw: drawKO, name: 'KO' },
];

const GRID_COLS = 5;
const GRID_ROWS = Math.ceil(FRAMES.length / GRID_COLS);

export default function SpriteSheet() {
  const sheetRef = useRef(null);
  const animRef = useRef(null);
  const [animFrame, setAnimFrame] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [activeAnim, setActiveAnim] = useState('idle');

  const ANIM_SETS = {
    idle: { label: 'BATTLE IDLE', indices: [0, 1] },
    attack: { label: 'ATTACK COMBO', indices: [0, 2, 3, 4, 0] },
    magic: { label: 'MAGIC CAST', indices: [0, 5, 5, 0] },
    hurt: { label: 'HURT', indices: [0, 6, 6, 0] },
    victory: { label: 'VICTORY', indices: [7, 7, 0] },
  };

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setAnimFrame(f => f + 1), 200);
    return () => clearInterval(id);
  }, [playing]);

  // Draw sprite sheet
  useEffect(() => {
    const canvas = sheetRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#12121e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    FRAMES.forEach((frame, i) => {
      const col = i % GRID_COLS;
      const row = Math.floor(i / GRID_COLS);
      const ox = col * (SW + 8) * SCALE + 16;
      const oy = row * (SH + 16) * SCALE + 20;

      // Cell background
      ctx.fillStyle = 'rgba(255,255,255,0.02)';
      ctx.fillRect(ox - 4, oy - 4, SW * SCALE + 8, SH * SCALE + 8);

      // Draw sprite scaled
      ctx.save();
      ctx.scale(SCALE, SCALE);
      frame.draw(ctx, (ox) / SCALE, (oy) / SCALE);
      ctx.restore();

      // Label
      ctx.fillStyle = '#556';
      ctx.font = '10px monospace';
      ctx.fillText(frame.name, ox, oy + SH * SCALE + 16);
    });
  }, []);

  // Draw animation preview
  useEffect(() => {
    const canvas = animRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#12121e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const set = ANIM_SETS[activeAnim];
    const idx = set.indices[animFrame % set.indices.length];
    const frame = FRAMES[idx];

    const bigScale = 6;
    ctx.save();
    ctx.scale(bigScale, bigScale);
    frame.draw(ctx, 10, 4);
    ctx.restore();

    // Label
    ctx.fillStyle = '#00ddff';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(set.label, 20, canvas.height - 12);
    ctx.fillStyle = '#445';
    ctx.font = '10px monospace';
    ctx.fillText(`Frame ${(animFrame % set.indices.length) + 1}/${set.indices.length}`, 20, canvas.height - 28);

  }, [animFrame, activeAnim]);

  const handleExport = useCallback((scale) => {
    const canvas = document.createElement('canvas');
    const cols = GRID_COLS;
    const rows = GRID_ROWS;
    canvas.width = cols * SW * scale;
    canvas.height = rows * SH * scale;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.scale(scale, scale);
    FRAMES.forEach((frame, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      frame.draw(ctx, col * SW, row * SH);
    });
    ctx.restore();

    const link = document.createElement('a');
    link.download = `the-marketer-sprites-${scale}x.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, []);

  const sheetW = (GRID_COLS * (SW + 8)) * SCALE + 32;
  const sheetH = (GRID_ROWS * (SH + 16)) * SCALE + 40;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a14',
      color: '#c0c0cc',
      fontFamily: "'Courier New', monospace",
      padding: '20px',
    }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <h1 style={{ color: '#00ddff', fontSize: 18, letterSpacing: 3, margin: 0 }}>
          THE MARKETER
        </h1>
        <p style={{ color: '#445', fontSize: 11, margin: '4px 0 20px' }}>
          32×48px battle sprites • PS1-era JRPG • Keyboard Buster Sword
        </p>

        {/* ANIMATION PREVIEW */}
        <div style={{
          display: 'flex',
          gap: 20,
          marginBottom: 24,
          flexWrap: 'wrap',
        }}>
          <div>
            <canvas
              ref={animRef}
              width={SW * 6 + 80}
              height={SH * 6 + 80}
              style={{
                border: '1px solid #1a1a2e',
                borderRadius: 4,
                imageRendering: 'pixelated',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ color: '#00ddff', fontSize: 10, fontWeight: 'bold', marginBottom: 4 }}>
              PREVIEW ANIMATION
            </span>
            {Object.entries(ANIM_SETS).map(([key, set]) => (
              <button
                key={key}
                onClick={() => { setActiveAnim(key); setAnimFrame(0); }}
                style={{
                  background: activeAnim === key ? '#00ddff' : 'transparent',
                  color: activeAnim === key ? '#000' : '#667',
                  border: `1px solid ${activeAnim === key ? '#00ddff' : '#222'}`,
                  padding: '5px 12px',
                  fontSize: 10,
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  borderRadius: 2,
                  textAlign: 'left',
                }}
              >
                {set.label}
              </button>
            ))}
            <button
              onClick={() => setPlaying(!playing)}
              style={{
                background: 'transparent',
                color: playing ? '#888' : '#00ddff',
                border: '1px solid #222',
                padding: '5px 12px',
                fontSize: 10,
                fontFamily: 'monospace',
                cursor: 'pointer',
                borderRadius: 2,
                marginTop: 4,
              }}
            >
              {playing ? '⏸ PAUSE' : '▶ PLAY'}
            </button>
          </div>
        </div>

        {/* FULL SHEET */}
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: '#00ddff', fontSize: 10, fontWeight: 'bold' }}>
            FULL SPRITE SHEET
          </span>
        </div>
        <canvas
          ref={sheetRef}
          width={sheetW}
          height={sheetH}
          style={{
            border: '1px solid #1a1a2e',
            borderRadius: 4,
            imageRendering: 'pixelated',
            width: '100%',
            maxWidth: sheetW,
            marginBottom: 16,
          }}
        />

        {/* EXPORT */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
          <button onClick={() => handleExport(1)} style={btnStyle('#00ddff', true)}>
            EXPORT 1× RAW
          </button>
          <button onClick={() => handleExport(2)} style={btnStyle('#00ddff', false)}>
            EXPORT 2×
          </button>
          <button onClick={() => handleExport(4)} style={btnStyle('#00ddff', false)}>
            EXPORT 4×
          </button>
          <button onClick={() => handleExport(8)} style={btnStyle('#00ddff', false)}>
            EXPORT 8× PREVIEW
          </button>
        </div>

        {/* PALETTE */}
        <div style={{ marginBottom: 24 }}>
          <span style={{ color: '#00ddff', fontSize: 10, fontWeight: 'bold', display: 'block', marginBottom: 8 }}>
            COLOR PALETTE ({Object.keys(C).length} colors)
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {Object.entries(C).map(([name, color]) => (
              <div key={name} style={{
                display: 'flex', alignItems: 'center', gap: 4,
                padding: '2px 6px', background: '#111', borderRadius: 2,
              }}>
                <div style={{
                  width: 12, height: 12, backgroundColor: color,
                  border: '1px solid #333', borderRadius: 1,
                }} />
                <span style={{ fontSize: 8, color: '#556' }}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: '#223', fontSize: 9 }}>
          Export 1× for game engine (nearest-neighbor upscale). 8× for social media / reference art.
        </p>
      </div>
    </div>
  );
}

function btnStyle(color, filled) {
  return {
    background: filled ? color : 'transparent',
    color: filled ? '#000' : color,
    border: `1px solid ${color}`,
    padding: '8px 16px',
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: 2,
  };
}
