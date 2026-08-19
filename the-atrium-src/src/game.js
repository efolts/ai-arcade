import titlePosterUrl from "./art/title-poster.jpg";
import arenaUrl from "./art/arena-topdown.jpg";
import playerRefUrl from "./art/player-ref.jpg";
import tesseraRefUrl from "./art/tessera-ref.jpg";
import crtCanonUrl from "./art/crt-canon.jpg";
import tesseraCanonUrl from "./art/tessera-canon.jpg";
import {
  drawBolt,
  drawBot,
  drawCrtLife,
  drawEnemyShot,
  drawFountain,
  drawGate,
  drawParticle,
  drawPickup,
  drawPlanter,
  drawPlayer,
} from "./sprites.js";
import { sfx, startMusic, stopMusic, tickMusic, unlockAudio, toggleMute, isMuted } from "./audio.js";

export const W = 960;
export const H = 780;
const HUD_TOP = 50;
const HUD_BOT = 38;
const ARENA = { x: 128, y: HUD_TOP, s: H - HUD_TOP - HUD_BOT };
const HI_KEY = "the-atrium-hi";

const GATES = [
  { name: "N", label: "FOOD CT", x: 0.5, y: 0.06, ang: 0 },
  { name: "S", label: "RADIO", x: 0.5, y: 0.94, ang: Math.PI },
  { name: "W", label: "FASHIONS", x: 0.07, y: 0.5, ang: -Math.PI / 2 },
  { name: "E", label: "ASTORIA", x: 0.93, y: 0.5, ang: Math.PI / 2 },
];

const PICKUPS = {
  spread: { glyph: "SPR", name: "SPREAD SHOT", t: 10 },
  rapid: { glyph: "RPD", name: "RAPID FIRE", t: 9 },
  speed: { glyph: "SPD", name: "PHOSPHOR STEP", t: 8 },
  bomb: { glyph: "BOM", name: "SMART BOMB", t: 0 },
  life: { glyph: "1UP", name: "EXTRA LIFE", t: 0 },
};

function loadImg(src) {
  const img = new Image();
  img.src = src;
  return img;
}

const art = {
  title: loadImg(titlePosterUrl),
  arena: loadImg(arenaUrl),
  player: loadImg(playerRefUrl),
  tessera: loadImg(tesseraRefUrl),
  crt: loadImg(crtCanonUrl),
  botStill: loadImg(tesseraCanonUrl),
};

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}
function len(x, y) {
  return Math.hypot(x, y) || 0;
}
function norm(x, y) {
  const d = Math.hypot(x, y);
  if (!d) return { x: 0, y: 0 };
  return { x: x / d, y: y / d };
}
function angOf(x, y) {
  return Math.atan2(y, x);
}

function gateWorld(g) {
  return {
    x: ARENA.x + g.x * ARENA.s,
    y: ARENA.y + g.y * ARENA.s,
  };
}

function obstacles() {
  const cx = ARENA.x + ARENA.s / 2;
  const cy = ARENA.y + ARENA.s / 2;
  const q = ARENA.s * 0.22;
  return [
    { x: cx, y: cy, r: 30 },
    { x: cx - q, y: cy - q, r: 20 },
    { x: cx + q, y: cy - q, r: 20 },
    { x: cx - q, y: cy + q, r: 20 },
    { x: cx + q, y: cy + q, r: 20 },
  ];
}

function resolveWorld(e, obs) {
  const m = e.r + 8;
  e.x = clamp(e.x, ARENA.x + m, ARENA.x + ARENA.s - m);
  e.y = clamp(e.y, ARENA.y + m, ARENA.y + ARENA.s - m);
  for (const o of obs) {
    const dx = e.x - o.x;
    const dy = e.y - o.y;
    const d = Math.hypot(dx, dy) || 0.001;
    const min = e.r + o.r;
    if (d < min) {
      e.x = o.x + (dx / d) * min;
      e.y = o.y + (dy / d) * min;
    }
  }
}

function hits(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const r = a.r + b.r;
  return dx * dx + dy * dy < r * r;
}

function waveDef(n) {
  if (n === 6 || (n > 6 && n % 6 === 0)) {
    return {
      title: n === 6 ? "DIRECTORY OVERRIDE" : `CORE LOCK  ${n}`,
      boss: true,
      queue: [{ kind: "boss", n: 1, gap: 0.2 }, { kind: "rusher", n: 6, gap: 1.1 }],
    };
  }
  const tables = [
    { title: "GET READY / THEY'RE LIVE", queue: [{ kind: "grunt", n: 5, gap: 1.55, gates: ["S", "E"] }], ready: 3 },
    { title: "THEY'RE COMING FROM FASHIONS", queue: [{ kind: "grunt", n: 8, gap: 0.45 }, { kind: "rusher", n: 6, gap: 0.4 }] },
    { title: "SHOTGUNS IN ASTORIA", queue: [{ kind: "grunt", n: 8, gap: 0.4 }, { kind: "shotgun", n: 5, gap: 0.7 }] },
    { title: "MALL SECURITY", queue: [{ kind: "rusher", n: 8, gap: 0.35 }, { kind: "shotgun", n: 4, gap: 0.6 }, { kind: "security", n: 2, gap: 1.2 }] },
    { title: "FOOD COURT FEEDING FRENZY", queue: [{ kind: "grunt", n: 10, gap: 0.3 }, { kind: "rusher", n: 8, gap: 0.28 }, { kind: "shotgun", n: 4, gap: 0.5 }] },
  ];
  const base = tables[(n - 1) % tables.length];
  const extra = Math.floor((n - 1) / 5);
  return {
    title: n > 5 ? `${base.title}  +${extra}` : base.title,
    boss: false,
    ready: base.ready || 0,
    queue: base.queue.map((q) => ({ ...q, n: q.n + extra * (q.kind === "grunt" ? 3 : 1) })),
  };
}

function botStats(kind, wave) {
  const f = 1 + (wave - 1) * 0.06;
  const table = {
    grunt: { hp: 1, speed: 52, r: 20, score: 100, scale: 1 },
    rusher: { hp: 1, speed: 110, r: 16, score: 150, scale: 0.94 },
    shotgun: { hp: 3, speed: 50, r: 20, score: 250, scale: 1.08 },
    security: { hp: 14, speed: 40, r: 26, score: 500, scale: 1.4 },
    boss: { hp: 90 + wave * 8, speed: 36, r: 36, score: 5000, scale: 1.9 },
  };
  const s = table[kind];
  return { ...s, speed: s.speed * (kind === "boss" ? 1 : f) };
}

export function createGame(canvas, input) {
  const ctx = canvas.getContext("2d");
  const obs = obstacles();
  let state = "title";
  let t = 0;
  let shake = 0;
  let flash = 0;
  let announce = "";
  let announceT = 0;
  let hi = Number(localStorage.getItem(HI_KEY) || 0);
  let muted = false;

  const world = {
    player: null,
    bots: [],
    bullets: [],
    eShots: [],
    pickups: [],
    parts: [],
    floats: [],
    score: 0,
    wave: 1,
    lives: 3,
    mult: 1,
    multT: 0,
    spawn: [],
    spawnT: 0,
    wavePause: 0,
    readyT: 0,
    spawnGates: null,
    boss: null,
  };

  function resetRun() {
    const cx = ARENA.x + ARENA.s / 2;
    const cy = ARENA.y + ARENA.s / 2 + 48;
    world.player = {
      x: cx,
      y: cy,
      r: 22,
      aim: -Math.PI / 2,
      vx: 0,
      vy: 0,
      fireT: 0,
      muzzle: 0,
      iframes: 3.2,
      powers: { spread: 0, rapid: 0, speed: 0 },
    };
    world.bots = [];
    world.bullets = [];
    world.eShots = [];
    world.pickups = [];
    world.parts = [];
    world.floats = [];
    world.score = 0;
    world.wave = 1;
    world.lives = 3;
    world.mult = 1;
    world.multT = 0;
    world.boss = null;
    startWave(1);
  }

  function startWave(n) {
    world.wave = n;
    const def = waveDef(n);
    world.spawn = [];
    for (const q of def.queue) {
      for (let i = 0; i < q.n; i++) {
        world.spawn.push({ kind: q.kind, wait: i * q.gap, gates: q.gates || null });
      }
    }
    world.spawn.sort((a, b) => a.wait - b.wait);
    world.spawnT = 0;
    world.wavePause = 0;
    world.readyT = def.ready || (n === 1 ? 3 : 0.8);
    world.spawnGates = def.queue[0] && def.queue[0].gates ? def.queue[0].gates : null;
    announce = n === 1 ? "GET READY / THEY'RE LIVE" : `WAVE ${n}  —  ${def.title}`;
    announceT = n === 1 ? 3.1 : 2.3;
    if (def.boss) sfx.boss();
    else sfx.wave();
  }

  function spawnBot(kind, gateNames) {
    const pool = gateNames
      ? GATES.filter((g) => gateNames.includes(g.name))
      : GATES;
    const g = (pool.length ? pool : GATES)[(Math.random() * (pool.length || GATES.length)) | 0];
    const p = gateWorld(g);
    const st = botStats(kind, world.wave);
    const bot = {
      kind,
      x: p.x,
      y: p.y,
      r: st.r,
      hp: st.hp,
      max: st.hp,
      speed: st.speed,
      score: st.score,
      scale: st.scale,
      facing: 0,
      fireT: 0.4 + Math.random() * 0.6,
      stun: world.wave === 1 ? 0.85 : 0.55,
      deadT: 0,
      dead: false,
    };
    world.bots.push(bot);
    if (kind === "boss") world.boss = bot;
    burst(p.x, p.y, 10, "#bbb", 0.3);
  }

  function burst(x, y, n, color, life = 0.45, staticBurst = false) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 20 + Math.random() * 90;
      world.parts.push({
        x,
        y,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        r: 1.2 + Math.random() * 2.2,
        color,
        life,
        max: life,
        static: staticBurst,
        w: 2 + Math.random() * 4,
        h: 1 + Math.random() * 2,
      });
    }
  }

  function floater(x, y, text, color = "#5ef6ff") {
    world.floats.push({ x, y, text, color, life: 0.85, max: 0.85 });
  }

  function addScore(n, x, y) {
    const gained = Math.floor(n * world.mult);
    world.score += gained;
    world.mult = clamp(world.mult + 0.2, 1, 9);
    world.multT = 4;
    if (x != null) floater(x, y - 18, `+${gained}`);
    if (world.score > hi) {
      hi = world.score;
      localStorage.setItem(HI_KEY, String(hi));
    }
  }

  function dropPickup(x, y, force) {
    const roll = force || (Math.random() < 0.22 ? pickWeighted() : null);
    if (!roll) return;
    world.pickups.push({ x, y, r: 16, kind: roll, glyph: PICKUPS[roll].glyph, t: 12 });
  }

  function pickWeighted() {
    const bag = ["spread", "rapid", "speed", "spread", "rapid", "bomb", "life"];
    return bag[(Math.random() * bag.length) | 0];
  }

  function applyPickup(kind) {
    const p = world.player;
    if (kind === "spread") p.powers.spread = PICKUPS.spread.t;
    if (kind === "rapid") p.powers.rapid = PICKUPS.rapid.t;
    if (kind === "speed") p.powers.speed = PICKUPS.speed.t;
    if (kind === "life") {
      world.lives = clamp(world.lives + 1, 0, 9);
      sfx.life();
      announce = "EXTRA LIFE";
      announceT = 1.2;
      return;
    }
    if (kind === "bomb") {
      smartBomb();
      return;
    }
    sfx.pickup();
    announce = PICKUPS[kind].name;
    announceT = 1.2;
  }

  function smartBomb() {
    sfx.bomb();
    flash = 0.35;
    shake = 14;
    for (const b of world.bots) {
      if (b.dead) continue;
      if (b.kind === "boss" || b.kind === "security") b.hp -= 22;
      else b.hp = 0;
      if (b.hp <= 0) killBot(b);
    }
    world.eShots.length = 0;
    burst(world.player.x, world.player.y, 40, "#7ffff8", 0.5);
  }

  function killBot(b) {
    if (b.dead) return;
    b.dead = true;
    b.deadT = 0.001;
    addScore(b.score, b.x, b.y);
    sfx.crunch();
    if (b.kind === "boss") {
      announce = "DIRECTORY UNIT DOWN  —  KRCD 7";
      announceT = 2;
    } else if (world.mult >= 4 && Math.random() < 0.35) {
      announce = "PHOSPHOR ON AISLE FOUR";
      announceT = 1.1;
    }
    shake = Math.max(shake, b.kind === "boss" ? 22 : 12);
    burst(b.x, b.y, b.kind === "boss" ? 48 : 28, "#e8e8e8", 0.55, true);
    dropPickup(b.x, b.y, b.kind === "boss" ? "bomb" : null);
    if (b.kind === "boss") world.boss = null;
  }

  function hurtPlayer() {
    const p = world.player;
    if (p.iframes > 0) return;
    world.lives -= 1;
    p.iframes = 1.6;
    world.mult = 1;
    world.multT = 0;
    shake = 12;
    flash = 0.18;
    sfx.playerHit();
    burst(p.x, p.y, 18, "#5ef6ff", 0.4);
    if (world.lives <= 0) {
      world.lives = 0;
      state = "gameover";
      stopMusic();
      sfx.roar();
      announce = "SIGNAL LOST";
      announceT = 99;
    }
  }

  function firePlayer() {
    const p = world.player;
    const rate = p.powers.rapid > 0 ? 0.05 : 0.09;
    if (p.fireT > 0) return;
    p.fireT = rate;
    p.muzzle = 0.09;
    const angles = p.powers.spread > 0 ? [-0.22, 0, 0.22] : [0];
    for (const off of angles) {
      const a = p.aim + off;
      world.bullets.push({
        x: p.x + Math.cos(a) * 22,
        y: p.y + Math.sin(a) * 22,
        vx: Math.cos(a) * 560,
        vy: Math.sin(a) * 560,
        ang: a,
        r: 4,
        life: 0.7,
      });
    }
    p.x -= Math.cos(p.aim) * 2.2;
    p.y -= Math.sin(p.aim) * 2.2;
    sfx.shoot();
    shake = Math.max(shake, 3.4);
  }

  function nearestBot(p) {
    let best = null;
    let bd = 1e9;
    for (const b of world.bots) {
      if (b.dead) continue;
      const d = (b.x - p.x) ** 2 + (b.y - p.y) ** 2;
      if (d < bd) {
        bd = d;
        best = b;
      }
    }
    return best;
  }

  function startPlay() {
    unlockAudio();
    startMusic();
    sfx.ui();
    sfx.roar();
    state = "play";
    resetRun();
  }

  function update(dt) {
    t += dt;
    tickMusic(dt);
    if (input.consume("mute")) muted = toggleMute();
    if (state === "title") {
      if (
        input.consume("start") ||
        input.consume("fire") ||
        input.consumeStart() ||
        input.mouse.clicked ||
        input.pad.fire
      ) {
        input.mouse.clicked = false;
        input.mouse.down = false;
        startPlay();
      }
      return;
    }
    if (state === "gameover") {
      if (input.consume("start") || input.consume("fire") || input.mouse.clicked) {
        input.mouse.clicked = false;
        input.mouse.down = false;
        startPlay();
      }
      return;
    }

    input.mouse.clicked = false;
    const p = world.player;
    input.pollGamepad();
    const km = input.keyboardMove();
    let mx = km.x + input.pad.mx + input.touch.move.x;
    let my = km.y + input.pad.my + input.touch.move.y;
    const ml = len(mx, my);
    if (ml > 1) {
      mx /= ml;
      my /= ml;
    }
    const spd = 210 * (p.powers.speed > 0 ? 1.38 : 1);
    p.vx = mx * spd;
    p.vy = my * spd;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    resolveWorld(p, obs);

    const mouseFresh = performance.now() - input.mouse.lastMove < 1600;
    const stickAim = len(input.pad.ax, input.pad.ay) > 0.2;
    const touchAim = len(input.touch.aim.x, input.touch.aim.y) > 0.2;
    if (touchAim) p.aim = angOf(input.touch.aim.x, input.touch.aim.y);
    else if (stickAim) p.aim = angOf(input.pad.ax, input.pad.ay);
    else if (mouseFresh) p.aim = angOf(input.mouse.x - p.x, input.mouse.y - p.y);
    else {
      const n = nearestBot(p);
      if (n) p.aim = angOf(n.x - p.x, n.y - p.y);
      else if (ml > 0.2) p.aim = angOf(mx, my);
    }

    const fallbackGun = !input.mouse.moved && !stickAim && !touchAim;
    const wantFire =
      input.mouse.down ||
      input.pressed("fire") ||
      input.pad.fire ||
      input.touch.firing ||
      (fallbackGun && world.bots.some((b) => !b.dead));
    if (wantFire) firePlayer();

    p.fireT = Math.max(0, p.fireT - dt);
    p.muzzle = Math.max(0, p.muzzle - dt);
    p.iframes = Math.max(0, p.iframes - dt);
    for (const k of Object.keys(p.powers)) p.powers[k] = Math.max(0, p.powers[k] - dt);
    world.multT = Math.max(0, world.multT - dt);
    if (world.multT <= 0) world.mult = 1;
    announceT = Math.max(0, announceT - dt);
    shake *= Math.pow(0.04, dt);
    flash = Math.max(0, flash - dt);

    world.readyT = Math.max(0, (world.readyT || 0) - dt);
    if (world.readyT > 0) {
      p.iframes = Math.max(p.iframes, 0.2);
    } else {
      world.spawnT += dt;
      while (world.spawn.length && world.spawn[0].wait <= world.spawnT) {
        const job = world.spawn.shift();
        spawnBot(job.kind, job.gates);
      }
    }

    for (const b of world.bots) {
      if (b.dead) {
        b.deadT += dt;
        continue;
      }
      b.stun = Math.max(0, (b.stun || 0) - dt);
      if (b.stun > 0) {
        b.facing = angOf(p.x - b.x, p.y - b.y);
        continue;
      }
      const to = norm(p.x - b.x, p.y - b.y);
      let sx = to.x;
      let sy = to.y;
      for (const o of obs) {
        const dx = b.x - o.x;
        const dy = b.y - o.y;
        const d = Math.hypot(dx, dy);
        if (d < o.r + b.r + 16) {
          sx += (dx / (d || 1)) * 0.8;
          sy += (dy / (d || 1)) * 0.8;
        }
      }
      const sl = norm(sx, sy);
      b.x += sl.x * b.speed * dt;
      b.y += sl.y * b.speed * dt;
      b.facing = angOf(sl.x, sl.y);
      resolveWorld(b, obs);
      if (hits(b, p)) hurtPlayer();

      b.fireT -= dt;
      if (b.kind === "shotgun" && b.fireT <= 0) {
        const d = Math.hypot(p.x - b.x, p.y - b.y);
        if (d < 210) {
          b.fireT = 1.15;
          const base = angOf(p.x - b.x, p.y - b.y);
          for (const off of [-0.2, 0, 0.2]) {
            const a = base + off;
            world.eShots.push({
              x: b.x + Math.cos(a) * 16,
              y: b.y + Math.sin(a) * 16,
              vx: Math.cos(a) * 240,
              vy: Math.sin(a) * 240,
              r: 3.5,
              life: 0.55,
            });
          }
        }
      }
      if (b.kind === "boss" && b.fireT <= 0) {
        b.fireT = 1.35;
        const n = 10;
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2 + t;
          world.eShots.push({
            x: b.x + Math.cos(a) * 24,
            y: b.y + Math.sin(a) * 24,
            vx: Math.cos(a) * 160,
            vy: Math.sin(a) * 160,
            r: 4.5,
            life: 2.2,
          });
        }
      }
    }
    world.bots = world.bots.filter((b) => !b.dead || b.deadT < 0.55);

    for (const b of world.bullets) {
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.life -= dt;
      for (const e of world.bots) {
        if (e.dead || !hits(b, e)) continue;
        e.hp -= 1;
        b.life = 0;
        sfx.hit();
        burst(b.x, b.y, 6, "#7ffff8", 0.25);
        shake = Math.max(shake, 3);
        if (e.hp <= 0) killBot(e);
        break;
      }
    }
    world.bullets = world.bullets.filter((b) => b.life > 0 && inArena(b, 20));

    for (const s of world.eShots) {
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.life -= dt;
      if (hits(s, p)) {
        s.life = 0;
        hurtPlayer();
      }
    }
    world.eShots = world.eShots.filter((s) => s.life > 0 && inArena(s, 16));

    for (const u of world.pickups) {
      u.t -= dt;
      if (hits(u, p)) {
        u.t = 0;
        applyPickup(u.kind);
      }
    }
    world.pickups = world.pickups.filter((u) => u.t > 0);

    for (const part of world.parts) {
      part.x += part.vx * dt;
      part.y += part.vy * dt;
      part.vx *= 0.96;
      part.vy *= 0.96;
      part.life -= dt;
    }
    world.parts = world.parts.filter((p) => p.life > 0);

    for (const f of world.floats) {
      f.y -= 22 * dt;
      f.life -= dt;
    }
    world.floats = world.floats.filter((f) => f.life > 0);

    if (!world.spawn.length && world.bots.every((b) => b.dead || !b)) {
      world.wavePause += dt;
      if (world.wavePause > 1.6) startWave(world.wave + 1);
    }
  }

  function inArena(e, pad = 0) {
    return (
      e.x > ARENA.x - pad &&
      e.x < ARENA.x + ARENA.s + pad &&
      e.y > ARENA.y - pad &&
      e.y < ARENA.y + ARENA.s + pad
    );
  }

  function coverImage(img, x, y, w, h) {
    if (!img.complete || !img.naturalWidth) return false;
    const ir = img.naturalWidth / img.naturalHeight;
    const r = w / h;
    let sx = 0;
    let sy = 0;
    let sw = img.naturalWidth;
    let sh = img.naturalHeight;
    if (ir > r) {
      sw = img.naturalHeight * r;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      sh = img.naturalWidth / r;
      sy = (img.naturalHeight - sh) / 2;
    }
    ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
    return true;
  }

  function drawChyron() {
    ctx.fillStyle = "#050608";
    ctx.fillRect(0, 0, W, HUD_TOP);
    ctx.fillRect(0, H - HUD_BOT, W, HUD_BOT);
    ctx.fillStyle = "rgba(94,246,255,0.15)";
    ctx.fillRect(0, HUD_TOP - 2, W, 2);
    ctx.fillRect(0, H - HUD_BOT, W, 2);

    ctx.fillStyle = "#f2f2f0";
    ctx.font = "bold 18px Trebuchet MS, Arial Black, sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText("KRCD 7", 16, 18);
    ctx.fillStyle = "#5ef6ff";
    ctx.font = "bold 12px Trebuchet MS, sans-serif";
    ctx.fillText("LIVE", 92, 19);
    const liveOn = Math.floor(t * 2) % 2 === 0;
    ctx.fillStyle = liveOn ? "#ff2a2a" : "#661111";
    ctx.beginPath();
    ctx.arc(128, 19, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#9aa";
    ctx.font = "11px Courier New, monospace";
    ctx.fillText("THE ATRIUM  //  ABANDONED MALL FEED", 150, 19);

    ctx.textAlign = "right";
    ctx.fillStyle = "#5ef6ff";
    ctx.font = "bold 20px Courier New, monospace";
    ctx.fillText(String(world.score || 0).padStart(7, "0"), W - 18, 20);
    ctx.fillStyle = "#889";
    ctx.font = "10px Courier New, monospace";
    ctx.fillText(`HI ${String(hi).padStart(7, "0")}`, W - 18, 38);

    if (state !== "title") {
      ctx.textAlign = "left";
      ctx.fillStyle = "#ddd";
      ctx.font = "bold 12px Trebuchet MS, sans-serif";
      ctx.fillText(`WAVE ${world.wave}`, 16, H - HUD_BOT / 2);
      for (let i = 0; i < 5; i++) drawCrtLife(ctx, 108 + i * 26, H - HUD_BOT / 2, i < world.lives);
      ctx.fillStyle = "#5ef6ff";
      ctx.font = "bold 14px Courier New, monospace";
      ctx.fillText(`x${world.mult.toFixed(1)}`, 230, H - HUD_BOT / 2 + 1);
      const p = world.player;
      if (p) {
        const bits = [];
        if (p.powers.spread > 0) bits.push(`SPR ${p.powers.spread.toFixed(0)}`);
        if (p.powers.rapid > 0) bits.push(`RPD ${p.powers.rapid.toFixed(0)}`);
        if (p.powers.speed > 0) bits.push(`SPD ${p.powers.speed.toFixed(0)}`);
        ctx.fillStyle = "#8ff";
        ctx.font = "11px Courier New, monospace";
        ctx.fillText(bits.join("   "), 300, H - HUD_BOT / 2 + 1);
      }
      ctx.textAlign = "right";
      ctx.fillStyle = "#667";
      ctx.font = "10px Trebuchet MS, sans-serif";
      ctx.fillText(muted || isMuted() ? "MUTED  M" : "WASD MOVE  MOUSE AIM  M MUTE", W - 16, H - HUD_BOT / 2);
    }
  }

  function drawPlay() {
    const sx = (Math.random() * 2 - 1) * shake;
    const sy = (Math.random() * 2 - 1) * shake;
    ctx.save();
    ctx.translate(sx, sy);

    ctx.fillStyle = "#0a0c10";
    ctx.fillRect(ARENA.x - 8, ARENA.y - 8, ARENA.s + 16, ARENA.s + 16);
    ctx.save();
    ctx.beginPath();
    ctx.rect(ARENA.x, ARENA.y, ARENA.s, ARENA.s);
    ctx.clip();
    ctx.imageSmoothingEnabled = true;
    if (!coverImage(art.arena, ARENA.x, ARENA.y, ARENA.s, ARENA.s)) {
      ctx.fillStyle = "#14110e";
      ctx.fillRect(ARENA.x, ARENA.y, ARENA.s, ARENA.s);
    }
    ctx.fillStyle = "rgba(0,0,0,0.28)";
    ctx.fillRect(ARENA.x, ARENA.y, ARENA.s, ARENA.s);
    ctx.imageSmoothingEnabled = false;

    const cx = ARENA.x + ARENA.s / 2;
    const cy = ARENA.y + ARENA.s / 2;
    drawFountain(ctx, cx, cy, t);
    const q = ARENA.s * 0.22;
    drawPlanter(ctx, cx - q, cy - q);
    drawPlanter(ctx, cx + q, cy - q);
    drawPlanter(ctx, cx - q, cy + q);
    drawPlanter(ctx, cx + q, cy + q);
    for (const g of GATES) {
      const p = gateWorld(g);
      drawGate(ctx, p.x, p.y, g.ang, g.label, t);
    }

    for (const u of world.pickups) drawPickup(ctx, u, t);
    for (const part of world.parts) drawParticle(ctx, part);
    const sorted = [...world.bots].sort((a, b) => a.y - b.y);
    for (const b of sorted) drawBot(ctx, b, t);
    for (const s of world.eShots) drawEnemyShot(ctx, s);
    for (const b of world.bullets) drawBolt(ctx, b);
    for (const f of world.floats) {
      ctx.save();
      ctx.globalAlpha = clamp(f.life / f.max, 0, 1);
      ctx.fillStyle = f.color;
      ctx.font = "bold 12px Courier New, monospace";
      ctx.textAlign = "center";
      ctx.fillText(f.text, f.x, f.y);
      ctx.restore();
    }
    if (world.player && state === "play") {
      drawPlayer(ctx, world.player, t);
      const p = world.player;
      const rx = p.x + Math.cos(p.aim) * 36;
      const ry = p.y + Math.sin(p.aim) * 36;
      ctx.strokeStyle = "rgba(94,246,255,0.7)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(rx, ry, 5, 0, Math.PI * 2);
      ctx.moveTo(rx - 8, ry);
      ctx.lineTo(rx + 8, ry);
      ctx.moveTo(rx, ry - 8);
      ctx.lineTo(rx, ry + 8);
      ctx.stroke();
    }

    if (world.boss && !world.boss.dead) {
      const bx = ARENA.x + 40;
      const by = ARENA.y + 14;
      const bw = ARENA.s - 80;
      ctx.fillStyle = "rgba(0,0,0,0.55)";
      ctx.fillRect(bx, by, bw, 10);
      ctx.fillStyle = "#c44";
      ctx.fillRect(bx, by, bw * clamp(world.boss.hp / world.boss.max, 0, 1), 10);
      ctx.strokeStyle = "#fff";
      ctx.strokeRect(bx, by, bw, 10);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 10px Trebuchet MS, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("DIRECTORY UNIT", cx, by + 8);
    }

    ctx.restore();
    ctx.restore();

    if (flash > 0) {
      ctx.fillStyle = `rgba(200,255,255,${flash * 0.55})`;
      ctx.fillRect(ARENA.x, ARENA.y, ARENA.s, ARENA.s);
    }

    if (announceT > 0 && state === "play") {
      ctx.save();
      ctx.globalAlpha = clamp(announceT, 0, 1);
      ctx.fillStyle = "rgba(0,0,0,0.45)";
      ctx.fillRect(ARENA.x, ARENA.y + 70, ARENA.s, 36);
      ctx.fillStyle = "#5ef6ff";
      ctx.font = "bold 18px Trebuchet MS, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(announce, W / 2, ARENA.y + 88);
      ctx.restore();
    }
  }

  function drawTitle() {
    ctx.fillStyle = "#050608";
    ctx.fillRect(0, 0, W, H);
    coverImage(art.title, 0, 0, W, H);
    ctx.fillStyle = "rgba(0,0,0,0.28)";
    ctx.fillRect(0, 0, W, H);

    if (art.crt.complete && art.crt.naturalWidth) {
      ctx.save();
      ctx.globalAlpha = 0.92;
      ctx.drawImage(art.crt, 14, H - 268, 128, 192);
      ctx.restore();
    }
    if (art.botStill.complete && art.botStill.naturalWidth) {
      ctx.save();
      ctx.globalAlpha = 0.92;
      ctx.drawImage(art.botStill, W - 142, H - 268, 128, 192);
      ctx.restore();
    }

    ctx.fillStyle = "rgba(0,0,0,0.55)";
    ctx.fillRect(0, H - 132, W, 132);
    ctx.fillStyle = "#5ef6ff";
    ctx.font = "bold 16px Trebuchet MS, sans-serif";
    ctx.textAlign = "center";
    const blink = Math.sin(t * 4) > -0.2;
    if (blink) ctx.fillText("PRESS ENTER  /  CLICK  /  TAP   TO BROADCAST", W / 2, H - 96);
    ctx.fillStyle = "#c8c8c4";
    ctx.font = "12px Trebuchet MS, sans-serif";
    ctx.fillText("WASD or LEFT STICK move   •   MOUSE or RIGHT STICK aim / fire   •   ARROWS auto-aim", W / 2, H - 70);
    ctx.fillStyle = "#889";
    ctx.font = "11px Courier New, monospace";
    ctx.fillText(`HI-SCORE  ${String(hi).padStart(7, "0")}     A KRCD 7 LIVE SMASH PRODUCTION`, W / 2, H - 46);
    ctx.fillText("NO UNITY  •  NO UNREAL  •  NO PHASER  •  RAW CANVAS PHOSPHOR", W / 2, H - 28);
  }

  function drawGameOver() {
    drawPlay();
    ctx.fillStyle = "rgba(0,0,0,0.62)";
    ctx.fillRect(0, 0, W, H);
    if (art.crt.complete && art.crt.naturalWidth) {
      ctx.globalAlpha = 0.35;
      ctx.drawImage(art.crt, W / 2 - 70, 120, 140, 210);
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = "#5ef6ff";
    ctx.font = "bold 42px Trebuchet MS, Arial Black, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SIGNAL LOST", W / 2, 360);
    ctx.fillStyle = "#fff";
    ctx.font = "20px Courier New, monospace";
    ctx.fillText(`SCORE  ${String(world.score).padStart(7, "0")}`, W / 2, 410);
    ctx.fillStyle = "#9aa";
    ctx.font = "14px Courier New, monospace";
    ctx.fillText(`BEST  ${String(hi).padStart(7, "0")}`, W / 2, 438);
    ctx.fillStyle = "#5ef6ff";
    ctx.font = "bold 16px Trebuchet MS, sans-serif";
    if (Math.sin(t * 4) > -0.2) ctx.fillText("ENTER / SPACE  —  REBOOT THE FEED", W / 2, 490);
  }

  function draw() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W, H);
    if (state === "title") drawTitle();
    else if (state === "gameover") drawGameOver();
    else drawPlay();
    drawChyron();
    if (state === "title") {
      ctx.fillStyle = "#5ef6ff";
      ctx.font = "bold 11px Courier New, monospace";
      ctx.textAlign = "left";
      ctx.fillText("KRCD 7 LIVE", 16, H - HUD_BOT / 2);
    }
  }

  return {
    update,
    draw,
    startPlay,
    get state() {
      return state;
    },
  };
}
