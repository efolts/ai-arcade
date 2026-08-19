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
  water.addColorStop(0, `rgba(180,255,255,${0.85 * pulse})`);
  water.addColorStop(0.5, `rgba(40,230,240,${0.55 * pulse})`);
  water.addColorStop(1, "rgba(10,80,90,0.5)");
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

export function drawGate(ctx, x, y, ang, label, t) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(ang);
  const flicker = 0.35 + Math.sin(t * 7 + x) * 0.08;
  ctx.fillStyle = `rgba(0,0,0,${0.72 + flicker * 0.1})`;
  roundRect(ctx, -34, -18, 68, 36, 4);
  ctx.fill();
  ctx.strokeStyle = "rgba(255,80,160,0.18)";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = `rgba(94,246,255,${0.22 + flicker})`;
  ctx.font = "bold 8px Trebuchet MS, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 0, 0);
  ctx.restore();
}

export function drawPlayer(ctx, e, t) {
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

  drawShadow(ctx, 0, 10, 13, 5, 0.45);

  ctx.rotate(aim);
  ctx.translate(0, bob);

  ctx.strokeStyle = "#1a1210";
  ctx.lineWidth = 3.2;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-4, 6);
  ctx.lineTo(-5, 12 + stride);
  ctx.moveTo(4, 6);
  ctx.lineTo(5, 12 - stride);
  ctx.stroke();
  ctx.fillStyle = "#1c1614";
  ctx.beginPath();
  ctx.arc(-5, 13 + stride, 2.3, 0, Math.PI * 2);
  ctx.arc(5, 13 - stride, 2.3, 0, Math.PI * 2);
  ctx.fill();

  const coat = ctx.createLinearGradient(-12, -8, 12, 14);
  coat.addColorStop(0, "#2a221c");
  coat.addColorStop(0.5, "#161210");
  coat.addColorStop(1, "#0c0a09");
  ctx.fillStyle = coat;
  ctx.beginPath();
  ctx.moveTo(-11, -6);
  ctx.quadraticCurveTo(-14, 4, -8, 12);
  ctx.lineTo(8, 12);
  ctx.quadraticCurveTo(14, 4, 11, -6);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#3a3228";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.strokeStyle = "#4a4034";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(-3, -4);
  ctx.lineTo(-2, 8);
  ctx.moveTo(3, -4);
  ctx.lineTo(2, 8);
  ctx.stroke();

  ctx.fillStyle = "#2a241c";
  ctx.beginPath();
  ctx.moveTo(-7, -8);
  ctx.lineTo(-11, -2);
  ctx.lineTo(-4, -2);
  ctx.closePath();
  ctx.moveTo(7, -8);
  ctx.lineTo(11, -2);
  ctx.lineTo(4, -2);
  ctx.closePath();
  ctx.fill();

  const arm = 10;
  for (const side of [-1, 1]) {
    ctx.save();
    ctx.translate(side * 8, -1);
    ctx.rotate(side * 0.12);
    ctx.strokeStyle = "#1a1410";
    ctx.lineWidth = 2.6;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(arm, -1);
    ctx.stroke();
    ctx.fillStyle = "#111";
    roundRect(ctx, arm - 2, -4, 11, 6, 1);
    ctx.fill();
    ctx.fillStyle = "#3a3a3a";
    for (let i = 0; i < 6; i++) {
      ctx.fillRect(arm + 1 + (i % 3) * 2.2, -2.4 + Math.floor(i / 3) * 2.2, 1.4, 1.4);
    }
    ctx.fillStyle = "#8a8a8a";
    ctx.fillRect(arm + 9, -0.7, 10, 1.4);
    if (side < 0) {
      ctx.beginPath();
      ctx.arc(arm + 20, 0, 2, 0, Math.PI * 2);
      ctx.strokeStyle = "#aaa";
      ctx.lineWidth = 1;
      ctx.stroke();
    } else {
      ctx.strokeStyle = "#aaa";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(arm + 19, -2);
      ctx.lineTo(arm + 22, 0);
      ctx.lineTo(arm + 19, 2);
      ctx.stroke();
    }
    if (flash) {
      const g = ctx.createRadialGradient(arm + 22, 0, 0, arm + 22, 0, 14);
      g.addColorStop(0, "rgba(220,255,255,0.95)");
      g.addColorStop(0.4, "rgba(80,255,255,0.45)");
      g.addColorStop(1, "rgba(80,255,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(arm + 22, 0, 14, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  ctx.translate(0, -16);
  ctx.fillStyle = "#2a1c10";
  roundRect(ctx, -2, -16, 4, 8, 1);
  ctx.fill();
  ctx.strokeStyle = "#8a8a8a";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(-4, -16);
  ctx.lineTo(-8, -22);
  ctx.moveTo(4, -16);
  ctx.lineTo(8, -22);
  ctx.stroke();

  const wood = ctx.createLinearGradient(-13, -14, 13, 6);
  wood.addColorStop(0, "#5a3a1c");
  wood.addColorStop(0.45, "#3a2414");
  wood.addColorStop(1, "#2a1a10");
  ctx.fillStyle = wood;
  roundRect(ctx, -13, -14, 26, 20, 2.5);
  ctx.fill();
  ctx.strokeStyle = "#1a1008";
  ctx.lineWidth = 1.2;
  ctx.stroke();

  ctx.fillStyle = "#0a3030";
  roundRect(ctx, -10, -11, 17, 14, 1.5);
  ctx.fill();
  const scr = ctx.createLinearGradient(-10, -11, 7, 3);
  scr.addColorStop(0, "#b8fff8");
  scr.addColorStop(0.4, "#3cf0e8");
  scr.addColorStop(1, "#0a8a88");
  ctx.fillStyle = scr;
  ctx.globalAlpha = ghost ? 0.5 : 0.95;
  roundRect(ctx, -9.2, -10.2, 15.4, 12.4, 1);
  ctx.fill();
  ctx.globalAlpha = ghost ? 0.45 : 1;
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "#7ffff8";
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.arc(-4.2, -4, 2.3, 0, Math.PI * 2);
  ctx.arc(2.4, -4, 2.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.fillStyle = "#1a120c";
  ctx.beginPath();
  ctx.arc(10.2, -6, 1.6, 0, Math.PI * 2);
  ctx.arc(10.2, -1.5, 1.6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#2a2218";
  for (let i = 0; i < 4; i++) ctx.fillRect(9.4, 2 + i * 1.3, 2.4, 0.7);

  ctx.restore();
}

export function drawBot(ctx, e, t) {
  const walk = e.speed > 0.1 ? t * (8 + (e.kind === "rusher" ? 4 : 0)) : t * 2;
  const bob = Math.sin(walk * 10) * (e.kind === "rusher" ? 1.6 : 1);
  const stride = Math.sin(walk * 10) * (e.r * 0.22);
  const s = e.scale || 1;
  const dying = e.deadT || 0;

  ctx.save();
  ctx.translate(e.x, e.y);
  if (dying) {
    ctx.globalAlpha = Math.max(0, 1 - dying);
    ctx.translate(0, dying * 8);
    ctx.scale(1 + dying * 0.15, 1 - dying * 0.55);
  }

  drawShadow(ctx, 0, e.r * 0.85, e.r * 0.85, e.r * 0.32, 0.4);
  ctx.rotate(e.facing);
  ctx.scale(s, s);
  ctx.translate(0, bob);

  const body = e.kind === "security" ? 1.15 : e.kind === "boss" ? 1.25 : 1;
  const white = e.kind === "security" ? "#e8e4dc" : "#f4f1ea";
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
  ctx.arc(-10 * body, -6, 3.4, 0, Math.PI * 2);
  ctx.arc(10 * body, -6, 3.4, 0, Math.PI * 2);
  ctx.fill();

  ctx.translate(0, -13);
  ctx.fillStyle = white;
  ctx.beginPath();
  ctx.ellipse(0, 0, 7.2 * body, 6.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#0a0a0c";
  ctx.beginPath();
  ctx.ellipse(0, -0.4, 6.2 * body, 3.6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.18)";
  ctx.beginPath();
  ctx.ellipse(-1.5, -1.4, 2.2, 1.1, -0.4, 0, Math.PI * 2);
  ctx.fill();

  if (e.kind === "rusher") {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(-6, 8, 12, 2);
  }

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
  ctx.shadowBlur = 12;
  const g = ctx.createLinearGradient(-10, 0, 10, 0);
  g.addColorStop(0, "rgba(80,255,255,0)");
  g.addColorStop(0.4, "#8ffff8");
  g.addColorStop(1, "#ffffff");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.ellipse(0, 0, 9, 2.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function drawEnemyShot(ctx, b) {
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.fillStyle = "#2a2a2e";
  ctx.strokeStyle = "rgba(255,220,180,0.5)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(0, 0, b.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

export function drawPickup(ctx, p, t) {
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
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = on ? 1 : 0.22;
  ctx.fillStyle = "#3a2414";
  roundRect(ctx, -8, -6, 16, 12, 1.5);
  ctx.fill();
  ctx.fillStyle = on ? "#5ef6ff" : "#244";
  roundRect(ctx, -6, -4, 12, 8, 1);
  ctx.fill();
  if (on) {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(-2, 0, 1.4, 0, Math.PI * 2);
    ctx.arc(2, 0, 1.4, 0, Math.PI * 2);
    ctx.fill();
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
