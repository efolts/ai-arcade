// Canon: CRT-head = wood TV, two cyan dots, trench. Tessera = pearl-white + black visor.
// In-game bodies are SNES pixel sprites (pix.js). These draws are fallback only.
import { drawCrtSprite, drawPixelLife, drawPixelPickup, drawTesseraSprite } from "./pix.js";

function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function ellipse(ctx, x, y, rx, ry) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
}

export function drawShadow(ctx, x, y, rx, ry, a = 0.4) {
  ctx.save();
  ctx.fillStyle = `rgba(0,0,0,${a})`;
  ellipse(ctx, x, y + 2, rx, ry);
  ctx.fill();
  ctx.restore();
}

export function drawFountain(ctx, x, y, t) {
  const pulse = 0.65 + Math.sin(t * 2.4) * 0.18;
  ctx.save();
  ctx.translate(x, y);
  const glow = ctx.createRadialGradient(0, 0, 6, 0, 0, 78);
  glow.addColorStop(0, `rgba(120,255,255,${0.45 * pulse})`);
  glow.addColorStop(0.35, `rgba(40,220,230,${0.18 * pulse})`);
  glow.addColorStop(1, "rgba(40,220,230,0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, 78, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#1a2224";
  ctx.beginPath();
  ctx.arc(0, 0, 46, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#2c3a3c";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = "#0e1416";
  ctx.beginPath();
  ctx.arc(0, 0, 34, 0, Math.PI * 2);
  ctx.fill();

  const water = ctx.createRadialGradient(0, 0, 2, 0, 0, 30);
  water.addColorStop(0, `rgba(210,255,255,${0.95 * pulse})`);
  water.addColorStop(0.5, `rgba(60,245,250,${0.7 * pulse})`);
  water.addColorStop(1, "rgba(10,80,90,0.55)");
  ctx.fillStyle = water;
  ctx.beginPath();
  ctx.arc(0, 0, 28, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = `rgba(180,255,255,${0.25 + pulse * 0.2})`;
  ctx.lineWidth = 1;
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(0, 0, 10 + i * 7 + Math.sin(t * 3 + i) * 1.4, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

export function drawPlanter(ctx, x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ellipse(ctx, 0, 4, 22, 10);
  ctx.fill();
  ctx.fillStyle = "#3a342c";
  ctx.beginPath();
  ctx.arc(0, 0, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#2a241e";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = "#1a1612";
  ctx.beginPath();
  ctx.arc(0, 0, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#6a5a48";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 2);
  ctx.lineTo(-6, -22);
  ctx.moveTo(0, 2);
  ctx.lineTo(7, -18);
  ctx.moveTo(-2, -8);
  ctx.lineTo(-12, -16);
  ctx.stroke();
  ctx.restore();
}

export function drawGate(ctx, x, y, ang, label, t, mode = "closed") {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(ang);
  const flicker = 0.35 + Math.sin(t * 7 + x) * 0.08;
  const open = mode === "open";
  const locked = mode === "locked";
  if (open) {
    const glow = ctx.createRadialGradient(0, 0, 4, 0, 0, 40);
    glow.addColorStop(0, `rgba(94,246,255,${0.35 + flicker * 0.25})`);
    glow.addColorStop(1, "rgba(94,246,255,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = open ? `rgba(4,22,24,${0.7 + flicker * 0.08})` : `rgba(0,0,0,${0.78 + flicker * 0.08})`;
  roundRect(ctx, -34, -18, 68, 36, 4);
  ctx.fill();
  ctx.strokeStyle = open ? `rgba(94,246,255,${0.55 + flicker})` : locked ? "rgba(180,40,50,0.55)" : "rgba(255,120,160,0.22)";
  ctx.lineWidth = open ? 2 : 1;
  ctx.stroke();
  ctx.fillStyle = open
    ? `rgba(180,255,255,${0.75 + flicker})`
    : locked
      ? "rgba(255,120,120,0.7)"
      : `rgba(255,176,168,${0.35 + flicker * 0.4})`;
  ctx.font = "bold 8px Trebuchet MS, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 0, 0);
  ctx.restore();
}

function drawCrtHead(ctx, ghost) {
  ctx.save();
  ctx.scale(1.55, 1.55);
  ctx.translate(0, -15);

  const wood = ctx.createLinearGradient(-12, -12, 12, 10);
  wood.addColorStop(0, "#6a4a28");
  wood.addColorStop(0.35, "#3d2816");
  wood.addColorStop(0.7, "#2a1a10");
  wood.addColorStop(1, "#1a1008");
  ctx.fillStyle = wood;
  roundRect(ctx, -13, -12, 26, 20, 1.4);
  ctx.fill();
  ctx.strokeStyle = "#140c08";
  ctx.lineWidth = 1.4;
  ctx.stroke();
  ctx.strokeStyle = "rgba(90,60,30,0.35)";
  ctx.lineWidth = 0.6;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(-12, -8 + i * 3.4);
    ctx.lineTo(12, -7 + i * 3.4);
    ctx.stroke();
  }

  ctx.fillStyle = "#041816";
  roundRect(ctx, -10, -9.4, 20, 14.2, 1);
  ctx.fill();
  const scr = ctx.createLinearGradient(0, -9, 0, 5);
  scr.addColorStop(0, "#9ffff6");
  scr.addColorStop(0.45, "#2ee8e0");
  scr.addColorStop(1, "#087870");
  ctx.fillStyle = scr;
  ctx.globalAlpha = ghost ? 0.55 : 1;
  roundRect(ctx, -9.2, -8.6, 18.4, 12.6, 0.8);
  ctx.fill();
  ctx.globalAlpha = ghost ? 0.45 : 0.22;
  ctx.strokeStyle = "#0a4040";
  ctx.lineWidth = 0.5;
  for (let y = -8; y < 4; y += 1.6) {
    ctx.beginPath();
    ctx.moveTo(-9, y);
    ctx.lineTo(9, y);
    ctx.stroke();
  }
  ctx.globalAlpha = ghost ? 0.45 : 1;

  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "#7ffff8";
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.arc(-3.4, -2.2, 2.15, 0, Math.PI * 2);
  ctx.arc(3.4, -2.2, 2.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.restore();
}

export function drawPlayerFallback(ctx, e, t) {
  const aim = e.aim;
  const moving = e.vx * e.vx + e.vy * e.vy > 8;
  const walk = moving ? t * 11 : 0;
  const bob = Math.sin(walk) * 1.1;
  const stride = Math.sin(walk) * 3.4;
  const flash = e.muzzle > 0;
  const ghost = e.iframes > 0 && Math.floor(t * 16) % 2 === 0;

  ctx.save();
  ctx.translate(e.x, e.y);
  if (ghost) ctx.globalAlpha = 0.45;

  const halo = ctx.createRadialGradient(0, -8, 2, 0, -8, 26);
  halo.addColorStop(0, "rgba(94,246,255,0.28)");
  halo.addColorStop(1, "rgba(94,246,255,0)");
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(0, -10, 26, 0, Math.PI * 2);
  ctx.fill();

  drawShadow(ctx, 0, 16, 15, 6, 0.5);

  ctx.save();
  ctx.rotate(aim);
  ctx.scale(1.35, 1.35);
  ctx.translate(0, bob);

  ctx.strokeStyle = "#1a1210";
  ctx.lineWidth = 3.2;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-4, 7);
  ctx.lineTo(-5, 13 + stride);
  ctx.moveTo(4, 7);
  ctx.lineTo(5, 13 - stride);
  ctx.stroke();
  ctx.fillStyle = "#14110f";
  ctx.beginPath();
  ctx.arc(-5, 14 + stride, 2.4, 0, Math.PI * 2);
  ctx.arc(5, 14 - stride, 2.4, 0, Math.PI * 2);
  ctx.fill();

  const coat = ctx.createLinearGradient(-12, -6, 12, 14);
  coat.addColorStop(0, "#2a221c");
  coat.addColorStop(0.5, "#14110e");
  coat.addColorStop(1, "#0a0908");
  ctx.fillStyle = coat;
  ctx.beginPath();
  ctx.moveTo(-10, -4);
  ctx.quadraticCurveTo(-14, 5, -8, 13);
  ctx.lineTo(8, 13);
  ctx.quadraticCurveTo(14, 5, 10, -4);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#2c241c";
  ctx.fillRect(-2.2, -3, 1.2, 10);
  ctx.fillRect(1, -3, 1.2, 10);
  ctx.fillStyle = "#3a3026";
  ctx.beginPath();
  ctx.arc(-3.2, 1, 0.9, 0, Math.PI * 2);
  ctx.arc(3.2, 1, 0.9, 0, Math.PI * 2);
  ctx.arc(-3.2, 5, 0.9, 0, Math.PI * 2);
  ctx.arc(3.2, 5, 0.9, 0, Math.PI * 2);
  ctx.fill();

  const arm = 11;
  for (const side of [-1, 1]) {
    ctx.save();
    ctx.translate(side * 8, 0);
    ctx.strokeStyle = "#1a1410";
    ctx.lineWidth = 2.8;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(arm, 0);
    ctx.stroke();
    ctx.fillStyle = "#111";
    roundRect(ctx, arm - 2, -3.6, 11, 7, 1);
    ctx.fill();
    ctx.fillStyle = "#3a3a3a";
    for (let i = 0; i < 6; i++) {
      ctx.fillRect(arm + 1 + (i % 3) * 2.2, -2.2 + Math.floor(i / 3) * 2.2, 1.4, 1.4);
    }
    ctx.fillStyle = "#8a8a8a";
    ctx.fillRect(arm + 9, -0.6, 10, 1.3);
    if (flash) {
      const g = ctx.createRadialGradient(arm + 20, 0, 0, arm + 20, 0, 13);
      g.addColorStop(0, "rgba(220,255,255,0.95)");
      g.addColorStop(0.4, "rgba(80,255,255,0.45)");
      g.addColorStop(1, "rgba(80,255,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(arm + 20, 0, 13, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
  ctx.restore();

  drawCrtHead(ctx, ghost);
  ctx.restore();
}

export function drawBotFallback(ctx, e, t) {
  const walk = e.speed > 0.1 ? t * (8 + (e.kind === "rusher" ? 4 : 0)) : t * 2;
  const bob = Math.sin(walk * 10) * (e.kind === "rusher" ? 1.6 : 1);
  const stride = Math.sin(walk * 10) * (e.r * 0.22);
  const s = e.scale || 1;
  const dying = e.deadT || 0;

  ctx.save();
  ctx.translate(e.x, e.y);
  if (dying) {
    ctx.globalAlpha = Math.max(0, 1 - dying * 1.4);
  }

  drawShadow(ctx, 0, e.r * 0.85, e.r * 0.85, e.r * 0.32, 0.4);
  ctx.rotate(e.facing);
  ctx.scale(s * 1.28, s * 1.28);
  ctx.translate(0, bob);

  const body = e.kind === "security" ? 1.15 : e.kind === "boss" ? 1.25 : 1;
  const white =
    e.kind === "security"
      ? "#ece8e0"
      : e.kind === "mannequin"
        ? "#e8c4b8"
        : e.kind === "shotgun"
          ? "#d0d6dc"
          : e.kind === "rusher"
            ? "#fff0e6"
            : "#f6f3ec";
  const joint = "#1a1a1c";

  ctx.strokeStyle = joint;
  ctx.lineWidth = 3.4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-4 * body, 6);
  ctx.lineTo(-5 * body, 12 + stride);
  ctx.moveTo(4 * body, 6);
  ctx.lineTo(5 * body, 12 - stride);
  ctx.stroke();
  ctx.fillStyle = white;
  ctx.beginPath();
  ctx.arc(-5 * body, 13 + stride, 2.6, 0, Math.PI * 2);
  ctx.arc(5 * body, 13 - stride, 2.6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#111";
  ctx.fillRect(-7 * body, 13.6 + stride, 4, 1.2);
  ctx.fillRect(3 * body, 13.6 - stride, 4, 1.2);

  ctx.fillStyle = white;
  ctx.beginPath();
  ctx.moveTo(-9 * body, -6);
  ctx.quadraticCurveTo(-12 * body, 2, -7 * body, 10);
  ctx.lineTo(7 * body, 10);
  ctx.quadraticCurveTo(12 * body, 2, 9 * body, -6);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = joint;
  roundRect(ctx, -5 * body, -1, 10 * body, 5, 2);
  ctx.fill();

  ctx.fillStyle = white;
  ellipse(ctx, 0, -4, 8.5 * body, 6);
  ctx.fill();
  ctx.strokeStyle = "rgba(0,0,0,0.12)";
  ctx.lineWidth = 1;
  ctx.stroke();

  if (e.kind === "shotgun") {
    ctx.save();
    ctx.translate(10, 0);
    ctx.fillStyle = "#2a2a2c";
    roundRect(ctx, 0, -2, 12, 4, 1);
    ctx.fill();
    ctx.fillStyle = "#111";
    ctx.fillRect(11, -1.2, 6, 2.4);
    ctx.restore();
  }

  if (e.kind === "boss") {
    ctx.save();
    ctx.translate(0, 2);
    ctx.fillStyle = "#1c1c20";
    roundRect(ctx, -11, -8, 22, 16, 2);
    ctx.fill();
    ctx.strokeStyle = "#8a8a90";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "#d8d8dc";
    ctx.font = "bold 5px Trebuchet MS, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("DIRECTORY", 0, -3);
    ctx.fillStyle = "#c44";
    ctx.beginPath();
    ctx.arc(2, 4, 1.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#888";
    ctx.font = "4px Trebuchet MS, sans-serif";
    ctx.fillText("YOU ARE HERE", 0, 8);
    ctx.restore();
  }

  ctx.fillStyle = white;
  ctx.beginPath();
  ctx.arc(-10 * body, -5.5, 3.3, 0, Math.PI * 2);
  ctx.arc(10 * body, -5.5, 3.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#2a2a2e";
  ctx.beginPath();
  ctx.arc(-12.4 * body, -2, 1.7, 0, Math.PI * 2);
  ctx.arc(12.4 * body, -2, 1.7, 0, Math.PI * 2);
  ctx.fill();

  ctx.translate(0, -13.5);
  ctx.fillStyle = white;
  ctx.beginPath();
  ctx.arc(0, 0, 7.1 * body, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#0a0a0c";
  ctx.beginPath();
  ctx.ellipse(0, -0.6, 5.8 * body, 3.15, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#2a2a2e";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(5.4 * body, 0.6, 1.15, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,0.16)";
  ctx.beginPath();
  ctx.ellipse(-1.6, -1.6, 1.8, 0.8, -0.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  if (dying > 0 && dying < 0.45) {
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.fillStyle = "#d0d0d0";
    for (let i = 0; i < 18; i++) {
      const a = i * 1.7 + dying * 20;
      const r = 6 + dying * 28 + (i % 3) * 4;
      ctx.globalAlpha = 1 - dying * 2;
      ctx.fillRect(Math.cos(a) * r, Math.sin(a) * r, 2 + (i % 3), 1 + (i % 2));
    }
    ctx.restore();
  }
}

export function drawBolt(ctx, b) {
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.rotate(b.ang);
  ctx.shadowColor = "#7ffff8";
  ctx.shadowBlur = 4;
  const g = ctx.createLinearGradient(-8, 0, 8, 0);
  g.addColorStop(0, "rgba(80,255,255,0)");
  g.addColorStop(0.45, "#8ffff8");
  g.addColorStop(1, "#ffffff");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.ellipse(0, 0, 7, 1.7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function drawEnemyShot(ctx, b) {
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.fillStyle = "#14100c";
  ctx.beginPath();
  ctx.arc(0, 0, b.r + 0.8, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#c47820";
  ctx.beginPath();
  ctx.arc(0, 0, b.r * 0.62, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#e8b060";
  ctx.beginPath();
  ctx.arc(-0.7, -0.6, 1.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function drawPlayer(ctx, e, t) {
  if (drawCrtSprite(ctx, e, t)) return;
  drawPlayerFallback(ctx, e, t);
}

export function drawBot(ctx, e, t) {
  if (drawTesseraSprite(ctx, e, t)) return;
  drawBotFallback(ctx, e, t);
}

export function drawPickup(ctx, p, t) {
  drawPixelPickup(ctx, p, t);
}

export function drawPickupFallback(ctx, p, t) {
  const bob = Math.sin(t * 6 + p.x) * 3;
  ctx.save();
  ctx.translate(p.x, p.y + bob);
  const g = ctx.createRadialGradient(0, 0, 2, 0, 0, 16);
  g.addColorStop(0, "rgba(94,246,255,0.35)");
  g.addColorStop(1, "rgba(94,246,255,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#0c1214";
  ctx.strokeStyle = "#5ef6ff";
  ctx.lineWidth = 1.5;
  roundRect(ctx, -9, -9, 18, 18, 3);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#5ef6ff";
  ctx.font = "bold 8px Trebuchet MS, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(p.glyph, 0, 1);
  ctx.restore();
}

export function drawCrtLife(ctx, x, y, on) {
  drawPixelLife(ctx, x, y, on);
}

export function drawCrtLifeFallback(ctx, x, y, on) {
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = on ? 1 : 0.22;
  ctx.fillStyle = "#3a2414";
  roundRect(ctx, -10, -7, 20, 14, 2);
  ctx.fill();
  ctx.fillStyle = on ? "#5ef6ff" : "#244";
  roundRect(ctx, -7.5, -5, 15, 10, 1);
  ctx.fill();
  if (on) {
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "#7ffff8";
    ctx.shadowBlur = 4;
    ctx.beginPath();
    ctx.arc(-2.6, 0, 1.7, 0, Math.PI * 2);
    ctx.arc(2.6, 0, 1.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }
  ctx.restore();
}

export function drawParticle(ctx, p) {
  ctx.save();
  ctx.globalAlpha = Math.max(0, p.life / p.max);
  ctx.fillStyle = p.color;
  if (p.static) {
    ctx.fillRect(p.x, p.y, p.w || 2, p.h || 1);
  } else {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

export function drawKiosk(ctx, x, y, t) {
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.beginPath();
  ctx.ellipse(x, y + 6, 16, 5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#3a2a18";
  ctx.fillRect(Math.round(x - 14), Math.round(y - 18), 28, 22);
  ctx.fillStyle = "#5a4030";
  ctx.fillRect(Math.round(x - 16), Math.round(y - 22), 32, 6);
  ctx.fillStyle = "#0a1012";
  ctx.fillRect(Math.round(x - 10), Math.round(y - 16), 20, 12);
  const glow = 0.45 + Math.sin(t * 6) * 0.25;
  ctx.fillStyle = `rgba(94,246,255,${glow})`;
  ctx.fillRect(Math.round(x - 8), Math.round(y - 14), 16, 8);
  ctx.fillStyle = "#e8b44a";
  ctx.font = "bold 7px Courier New, monospace";
  ctx.textAlign = "center";
  ctx.fillText("PRIZE", x, y + 2);
  ctx.fillText("BOOTH", x, y + 10);
  ctx.restore();
}
