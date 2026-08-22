import titlePosterUrl from "./art/title-crt-vs-tessera.png";
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
  drawKiosk,
  drawParticle,
  drawPickup,
  drawPlanter,
  drawPlayer,
} from "./sprites.js";
import { sfx, startMusic, tickMusic, unlockAudio, toggleMute, isMuted } from "./audio.js";
import { gunOrigin, shatterDuration } from "./pix.js";
import {
  BASE_MAX_HP,
  LEVEL_CAP,
  XP_FOR,
  addXp,
  armorBonus,
  armorByTier,
  emptyGear,
  gunSpec,
  isStat,
  kioskPos,
  levelHpBonus,
  playerSkin,
  rankMult,
  rollDrop,
  roomPrimary,
  shopCols,
  skinTint,
  statPrice,
  statRank,
  weaponByTier,
  xpToNext,
} from "./progress.js";
import {
  GATES,
  INWARD,
  OPPOSITE,
  ROOMS,
  applyRoomGrade,
  trashWaveFor,
  doorLabel,
  doorLocked,
  doorOpen,
  drawMinimap,
  roomObstacles,
  wingsCleared,
} from "./rooms.js";

export const W = 960;
export const H = 780;
const HUD_TOP = 50;
const HUD_BOT = 38;
const ARENA = { x: 128, y: HUD_TOP, s: H - HUD_TOP - HUD_BOT };
const HI_KEY = "the-atrium-hi";

const DROP_GLYPH = { token: "TKN", health: "HP", life: "1UP" };

function loadImg(src) {
  const img = new Image();
  img.src = src;
  return img;
}

const art = {
  title: loadImg(titlePosterUrl),
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

function closedDoorBlocks(roomId, cleared, enterFrom) {
  const blocks = [];
  for (const g of GATES) {
    if (doorOpen(roomId, g.name, cleared, enterFrom)) continue;
    if (!ROOMS[roomId].doors[g.name]) {
      const p = gateWorld(g);
      blocks.push({ x: p.x, y: p.y, r: 32 });
      continue;
    }
    const p = gateWorld(g);
    blocks.push({ x: p.x, y: p.y, r: 30 });
  }
  return blocks;
}

function resolveWorld(e, obs) {
  const m = e.r + 8;
  e.x = clamp(e.x, ARENA.x + m, ARENA.x + ARENA.s - m);
  e.y = clamp(e.y, ARENA.y + m, ARENA.y + ARENA.s - m);
  for (let n = 0; n < 3; n++) {
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
}

function hitsObs(e, obs) {
  for (const o of obs) {
    const dx = e.x - o.x;
    const dy = e.y - o.y;
    const rr = e.r + o.r;
    if (dx * dx + dy * dy < rr * rr) return true;
  }
  return false;
}

function hits(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const r = a.r + b.r;
  return dx * dx + dy * dy < r * r;
}

function currentObs(world) {
  return roomObstacles(world.roomId, ARENA).concat(closedDoorBlocks(world.roomId, world.cleared, world.enterFrom));
}

function botStats(kind, wave, level, weaponTier = 0, pass = 1) {
  const f = 1 + (wave - 1) * 0.06;
  const rank = rankMult(level || 1, weaponTier, pass);
  const table = {
    grunt: { hp: 1, speed: 58, r: 22, score: 100, scale: 1 },
    rusher: { hp: 1, speed: 128, r: 20, score: 150, scale: 0.94 },
    shotgun: { hp: 5, speed: 46, r: 24, score: 250, scale: 1.08 },
    security: { hp: 18, speed: 32, r: 30, score: 500, scale: 1.4 },
    mannequin: { hp: 5, speed: 12, r: 21, score: 220, scale: 1.02 },
    boss: { hp: 280 + wave * 8, speed: 48, r: 38, score: 5000, scale: 1.9 },
  };
  const s = table[kind] || table.grunt;
  let hpMul = rank.hp;
  if (kind === "rusher" && pass >= 2) hpMul *= 1.15;
  if (pass >= 2 && kind !== "boss") hpMul *= 1.16;
  const hp = Math.max(1, Math.round(s.hp * hpMul));
  let speed = s.speed * (kind === "boss" ? Math.min(1.38, rank.speed) : f * rank.speed);
  if (pass >= 2 && kind !== "boss") speed *= 1.08;
  if (kind !== "boss") speed = Math.min(speed, pass >= 2 ? 210 : 198);
  const resist = rank.resist && (kind === "security" || kind === "boss");
  return { ...s, hp, speed, resist };
}

function bossPhaseOf(b, pass) {
  const u = b.max > 0 ? b.hp / b.max : 1;
  if ((pass || 1) >= 2 && u <= 0.22) return 4;
  if (u <= 1 / 3) return 3;
  if (u <= 2 / 3) return 2;
  return 1;
}

export function createGame(canvas, input) {
  const ctx = canvas.getContext("2d");
  let state = "title";
  let t = 0;
  let punchX = 0;
  let punchY = 0;
  let punchT = 0;
  let punchMax = 0.08;
  let flash = 0;
  let announce = "";
  let announceT = 0;
  let hi = Number(localStorage.getItem(HI_KEY) || 0);
  let muted = false;
  let padSouthWas = false;
  let padEastWas = false;
  let padWestWas = false;
  let padLbWas = false;
  let padRbWas = false;

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
    roomId: "atrium",
    enterFrom: null,
    cleared: { atrium: false, food: false, fashions: false, radio: false, service: false, boss: false },
    visited: { atrium: true },
    roomWave: 0,
    cutT: 0,
    cutMax: 0,
    pendingRoom: null,
    pendingDir: null,
    trashDone: {},
    won: false,
    pass: 1,
    passClearT: 0,
    level: 1,
    xp: 0,
    tokens: 0,
    gear: emptyGear(),
    shopOpen: false,
    shopCol: 0,
    shopRow: 0,
    levelFreeze: 0,
  };

  function resetRun() {
    const cx = ARENA.x + ARENA.s / 2;
    const cy = ARENA.y + ARENA.s / 2 + 48;
    world.player = {
      x: cx,
      y: cy,
      r: 12,
      aim: -Math.PI / 2,
      vx: 0,
      vy: 0,
      fireT: 0,
      muzzle: 0,
      iframes: 2.85,
      dashT: 0,
      dashCd: 0,
      dashX: 0,
      dashY: 0,
      fieldT: 0,
      fieldCd: 0,
      recallT: 0,
      recallCd: 0,
      windUsed: false,
      powers: { spread: 0, rapid: 0, speed: 0 },
      hp: BASE_MAX_HP,
      maxHp: BASE_MAX_HP,
      skin: "base",
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
    world.roomId = "atrium";
    world.enterFrom = null;
    world.cleared = { atrium: false, food: false, fashions: false, radio: false, service: false, boss: false };
    world.visited = { atrium: true };
    world.roomWave = 0;
    world.cutT = 0;
    world.cutMax = 0;
    world.pendingRoom = null;
    world.pendingDir = null;
    world.trashDone = {};
    world.won = false;
    world.pass = 1;
    world.passClearT = 0;
    world.level = 1;
    world.xp = 0;
    world.tokens = 0;
    world.gear = emptyGear();
    world.shopOpen = false;
    world.shopCol = 0;
    world.shopRow = 0;
    world.levelFreeze = 0;
    syncPlayerBody();
    startRoomWaves(false);
  }

  function startNextPass() {
    world.pass += 1;
    world.won = false;
    world.passClearT = 0;
    world.cleared = { atrium: false, food: false, fashions: false, radio: false, service: false, boss: false };
    world.visited = { atrium: true };
    world.roomId = "atrium";
    world.enterFrom = null;
    world.roomWave = 0;
    world.wave = 1;
    world.trashDone = {};
    world.boss = null;
    world.bots = [];
    world.bullets = [];
    world.eShots = [];
    world.pickups = [];
    world.parts = [];
    world.shopOpen = false;
    world.gear.passLives = 0;
    const cx = ARENA.x + ARENA.s / 2;
    const cy = ARENA.y + ARENA.s / 2 + 48;
    const p = world.player;
    p.x = cx;
    p.y = cy;
    p.vx = 0;
    p.vy = 0;
    p.dead = false;
    p.deadT = 0;
    p.iframes = 2.85;
    p.dashT = 0;
    p.dashCd = 0;
    p.fieldT = 0;
    p.fieldCd = 0;
    p.recallT = 0;
    p.recallCd = 0;
    p.windUsed = false;
    syncPlayerBody();
    p.hp = p.maxHp;
    startRoomWaves(false);
    announce = world.pass === 2 ? "LOOP 2 — SIGNAL STRONGER" : `LOOP ${world.pass} — SIGNAL STRONGER`;
    announceT = 2.8;
    flash = 0.28;
    sfx.level();
  }

  function startRoomWaves(revisit) {
    const room = ROOMS[world.roomId];
    world.bots = [];
    world.bullets = [];
    world.eShots = [];
    world.boss = null;
    world.spawn = [];
    world.spawnT = 0;
    world.wavePause = 0;
    if (revisit && world.cleared[world.roomId]) {
      world.roomWave = -1;
      beginWave(trashWaveFor(world.roomId), false);
      return;
    }
    world.roomWave = 0;
    beginWave(room.waves[0], world.roomId === "atrium");
  }

  function beginWave(def, firstAtrium) {
    world.spawn = [];
    for (const q of def.queue) {
      for (let i = 0; i < q.n; i++) {
        world.spawn.push({ kind: q.kind, wait: i * q.gap, gates: q.gates || null });
      }
    }
    world.spawn.sort((a, b) => a.wait - b.wait);
    world.spawnT = 0;
    world.wavePause = 0;
    world.readyT = def.ready || (firstAtrium ? 2.4 : 0.85);
    world.spawnGates = def.queue[0] && def.queue[0].gates ? def.queue[0].gates : null;
    if (world.roomWave >= 0 && !def.boss) {
      const rank = rankMult(world.level, world.gear.weapon, world.pass);
      const primary = roomPrimary(world.roomId);
      const last = def.queue[def.queue.length - 1];
      const lateWait = last ? (last.n - 1) * last.gap + 0.35 : 0.4;
      const extra = rank.extra + (world.roomId === "food" && world.pass >= 2 ? 2 : 0);
      for (let i = 0; i < extra; i++) {
        world.spawn.push({ kind: primary, wait: lateWait + i * 0.22, gates: last && last.gates });
      }
      for (let i = 0; i < rank.elites; i++) {
        world.spawn.push({ kind: primary, wait: lateWait + 0.08 + i * 0.18, gates: last && last.gates, elite: true });
      }
      const waveCount = ROOMS[world.roomId].waves.length;
      const lastWave = world.roomWave >= waveCount - 1;
      const late = world.roomWave >= 1;
      let nShot = 0;
      if (world.roomId === "food") {
        if (lastWave) nShot = world.pass >= 2 ? 2 : 1;
        else if (late) nShot = 1;
      } else if (world.roomId === "fashions") {
        nShot = 0;
      } else if (world.roomId === "radio") {
        nShot = world.pass >= 2 ? rank.shots : late && rank.extraShot ? 1 : 0;
      } else if (world.roomId === "service") {
        nShot = lastWave && (world.pass >= 2 || rank.extraShot) ? 1 : 0;
      } else {
        nShot = lastWave ? 1 : 0;
        if (world.pass >= 2 && rank.shots) nShot += 1;
        if (world.pass >= 2 && lastWave) nShot += 1;
      }
      for (let i = 0; i < nShot; i++) {
        world.spawn.push({ kind: "shotgun", wait: lateWait + 0.2 + i * 0.16, gates: last && last.gates });
      }
    }
    world.spawn.sort((a, b) => a.wait - b.wait);
    announce = def.title;
    announceT = firstAtrium ? 2.6 : def.boss ? 2.4 : 1.7;
    if (def.boss) sfx.boss();
    else sfx.wave();
  }

  function clearRoom() {
    const room = ROOMS[world.roomId];
    const firstClear = !world.cleared[world.roomId];
    world.cleared[world.roomId] = true;
    if (world.roomId === "boss") {
      world.won = false;
      world.passClearT = 2.35;
      sfx.boss();
      announce = "WE'LL BE RIGHT BACK";
      announceT = 2.4;
      flash = 0.22;
      return;
    }
    if (!firstClear) return;
    sfx.wave();
    if (world.roomId === "atrium") {
      announce = "WING CLEAR — E FOR PRIZE BOOTH";
    } else if (wingsCleared(world.cleared) && world.roomId !== "service") {
      announce = "ALL WINGS CLEAR — E FOR PRIZE BOOTH";
    } else {
      announce = "DOOR OPEN  —  " + Object.keys(room.doors)
        .filter((d) => doorOpen(world.roomId, d, world.cleared, world.enterFrom))
        .map((d) => doorLabel(world.roomId, d, world.cleared))
        .join(" / ");
    }
    announceT = 2.6;
    flash = 0.22;
  }

  function enterDoor(dir) {
    const dest = ROOMS[world.roomId].doors[dir];
    if (!dest || !doorOpen(world.roomId, dir, world.cleared, world.enterFrom)) return;
    if (world.cutT > 0) return;
    sfx.ui();
    world.pendingRoom = dest;
    world.pendingDir = dir;
    world.cutT = 0.55;
    world.cutMax = 0.55;
  }

  function finishCut() {
    const dest = world.pendingRoom;
    const used = world.pendingDir;
    if (!dest || !used) return;
    const arrive = OPPOSITE[used];
    world.roomId = dest;
    world.enterFrom = arrive;
    world.visited[dest] = true;
    world.pendingRoom = null;
    world.pendingDir = null;
    const g = GATES.find((x) => x.name === arrive);
    const gp = gateWorld(g);
    const inn = INWARD[arrive];
    world.player.x = gp.x + inn.x * 52;
    world.player.y = gp.y + inn.y * 52;
    world.player.iframes = 1.4;
    world.player.vx = 0;
    world.player.vy = 0;
    startRoomWaves(!!world.cleared[dest]);
    announce = ROOMS[dest].name;
    announceT = Math.max(announceT, 1.3);
  }

  function botCanShoot(kind, extra) {
    if (kind === "rusher") return false;
    if (kind === "shotgun" || kind === "boss" || kind === "security") return true;
    if (extra && extra.elite) return true;
    const room = world.roomId;
    const waves = ROOMS[room] && ROOMS[room].waves;
    const lastWave = waves ? world.roomWave >= waves.length - 1 : false;
    const late = world.roomWave >= 1;
    const pass2 = world.pass >= 2;
    if (kind === "grunt") {
      let p = 0.36;
      if (room === "atrium") p = 0.5;
      if (room === "radio") p = 0.55;
      if (room === "food") p = late ? (lastWave ? 0.5 : 0.32) : 0.1;
      if (room === "fashions") p = lastWave ? 0.15 : late ? 0.1 : 0;
      if (room === "service") p = 0.4;
      if (pass2) p = Math.min(0.76, p + 0.22);
      return Math.random() < p;
    }
    if (kind === "mannequin") {
      if (room === "fashions") return false;
      if (late || lastWave || pass2) return Math.random() < 0.32;
      return Math.random() < 0.1;
    }
    return false;
  }

  function shooterCadence(b) {
    let gap = 0.88;
    if (b.kind === "shotgun") gap = 0.56;
    else if (b.kind === "security") gap = 1.65;
    else if (b.kind === "mannequin") gap = 1.15;
    if (b.elite) gap *= 0.72;
    if (world.pass >= 2) gap *= 0.74;
    return gap;
  }

  function fireAmber(x, y, ang, spd, r = 4) {
    world.eShots.push({
      x,
      y,
      vx: Math.cos(ang) * spd,
      vy: Math.sin(ang) * spd,
      r,
      life: 1,
    });
  }

  function spawnBot(kind, gateNames, extra = {}) {
    const pool = gateNames
      ? GATES.filter((g) => gateNames.includes(g.name))
      : GATES;
    const g = (pool.length ? pool : GATES)[(Math.random() * (pool.length || GATES.length)) | 0];
    const p = gateWorld(g);
    const st = botStats(kind, world.wave, world.level, world.gear.weapon, world.pass);
    const elite = !!extra.elite;
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
      vx: 0,
      vy: 0,
      pose: kind === "mannequin" ? "still" : "",
      stillT: kind === "mannequin" ? 0.95 + Math.random() * 0.55 : 0,
      lungeT: 0,
      addT: kind === "boss" ? 2.8 : 0,
      addI: 0,
      fireT: kind === "shotgun" ? 0.35 + Math.random() * 0.3 : kind === "boss" ? 0.9 : kind === "security" ? 0.9 + Math.random() * 0.5 : 0.5 + Math.random() * 0.6,
      canShoot: botCanShoot(kind, extra),
      stun: world.roomId === "atrium" && world.wave === 1 ? 0.32 : 0.18,
      deadT: 0,
      dead: false,
      elite,
      resist: !!st.resist,
      orbitT: Math.random() * Math.PI * 2,
      dashT: -0.4,
      tele: 0,
      tankDropped: false,
      lastPhase: 1,
      atk: 0,
      spinDir: 1,
      slamT: 0,
    };
    if (elite) {
      bot.hp = Math.max(2, Math.round(bot.hp * 2.2));
      bot.max = bot.hp;
      bot.speed *= 1.12;
      bot.score = Math.round(bot.score * 2);
    }
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

  function dropPickup(x, y, forced) {
    const roll = forced || rollDrop(world.pass, world.gear.luckUp || 0);
    if (!roll) return;
    world.pickups.push({
      x,
      y,
      r: 16,
      kind: roll.kind,
      n: roll.n || 1,
      glyph: roll.kind === "token" ? String(roll.n) : DROP_GLYPH[roll.kind] || "?",
      t: 12,
    });
  }

  function applyPickup(u) {
    const p = world.player;
    if (u.kind === "token") {
      world.tokens += u.n || 1;
      sfx.coin();
      floater(u.x, u.y - 16, `+${u.n} TKN`, "#e8b44a");
      return;
    }
    if (u.kind === "health") {
      p.hp = clamp(p.hp + (u.n || 1), 0, p.maxHp);
      sfx.pickup();
      floater(u.x, u.y - 16, "+HP", "#7cff9a");
      return;
    }
    if (u.kind === "life") {
      world.lives = clamp(world.lives + 1, 0, 9);
      sfx.life();
      announce = "EXTRA LIFE";
      announceT = 1.2;
    }
  }

  function syncPlayerBody() {
    const p = world.player;
    if (!p) return;
    const arm = armorBonus(world.gear.armor);
    const next = BASE_MAX_HP + levelHpBonus(world.level) + arm.hp + (world.gear.hpUp || 0);
    const dh = next - (p.maxHp || BASE_MAX_HP);
    p.maxHp = next;
    p.hp = clamp((p.hp || next) + Math.max(0, dh), 1, next);
    p.skin = playerSkin(world.gear);
    p.skinTint = skinTint(world.gear);
  }

  function cameraPunch(mag, dur = 0.08) {
    const a = Math.random() * Math.PI * 2;
    punchX = Math.cos(a) * mag;
    punchY = Math.sin(a) * mag;
    punchT = dur;
    punchMax = dur;
  }

  /** Light planted punch along the aim vector (recoil = opposite shot). Does not clobber bomb / life-loss. */
  function cameraPunchAim(ang, mag, dur) {
    if (punchT > 0.045) return;
    punchX = -Math.cos(ang) * mag;
    punchY = -Math.sin(ang) * mag;
    punchT = dur;
    punchMax = dur;
  }

  function smartBomb() {
    sfx.bomb();
    flash = 0.35;
    cameraPunch(11, 0.1);
    for (const b of world.bots) {
      if (b.dead) continue;
      if (b.kind === "boss" || b.kind === "security") b.hp -= 22;
      else b.hp = 0;
      b.hitFlash = 0.12;
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
    const xpAmt = b.elite ? XP_FOR.elite + (XP_FOR[b.kind] || 10) : XP_FOR[b.kind] || 10;
    const { ups } = addXp(world, xpAmt);
    if (ups) {
      syncPlayerBody();
      announce = "LEVEL UP";
      announceT = 1.6;
      flash = 0.16;
      world.levelFreeze = 0.42;
      sfx.level();
    }
    if (b.kind === "boss") {
      announce = "DIRECTORY UNIT DOWN  —  KRCD 7";
      announceT = 2;
      dropPickup(b.x, b.y, { kind: "token", n: 10 + ((Math.random() * 6) | 0) });
    } else {
      dropPickup(b.x, b.y);
    }
    if (b.kind === "boss") world.boss = null;
  }

  function hurtPlayer(opts = {}) {
    const p = world.player;
    if (p.dead || (world.readyT || 0) > 0 || p.iframes > 0) return;
    let red = armorBonus(world.gear.armor).red;
    if (world.pass >= 2) red *= 0.7;
    if (opts.contact && red > 0 && Math.random() < red) {
      p.iframes = 0.28;
      floater(p.x, p.y - 16, "GRAZE", "#c8c8c4");
      return;
    }
    p.hp -= 1;
    p.iframes = world.pass >= 2 ? 0.86 : 1.15;
    flash = 0.1;
    sfx.playerHit();
    burst(p.x, p.y, 10, "#5ef6ff", 0.3);
    if (p.hp <= 0 && world.gear.wind && !p.windUsed) {
      p.hp = 1;
      p.windUsed = true;
      p.iframes = 2.35;
      flash = 0.22;
      announce = "SECOND WIND";
      announceT = 1.5;
      floater(p.x, p.y - 20, "SECOND WIND", "#7cff9a");
      burst(p.x, p.y, 16, "#7cff9a", 0.4);
      return;
    }
    if (p.hp > 0) return;
    world.lives -= 1;
    p.hp = p.maxHp;
    p.windUsed = false;
    world.mult = 1;
    world.multT = 0;
    cameraPunch(9, 0.09);
    flash = 0.18;
    burst(p.x, p.y, 18, "#5ef6ff", 0.4);
    if (world.lives <= 0) {
      world.lives = 0;
      p.dead = true;
      p.deadT = 0.001;
      p.iframes = 99;
      p.vx = 0;
      p.vy = 0;
      sfx.roar();
      announce = "SIGNAL LOST";
      announceT = 99;
    }
  }

  function tryStaticField() {
    const p = world.player;
    if (!p || p.dead || !world.gear.static || (p.fieldCd || 0) > 0) return;
    p.fieldCd = 4.4;
    p.fieldT = 0.24;
    cameraPunch(5, 0.07);
    flash = Math.max(flash, 0.08);
    sfx.bomb();
    burst(p.x, p.y, 22, "#7ffff8", 0.34);
    const R = 108;
    for (const b of world.bots) {
      if (b.dead) continue;
      const d = Math.hypot(b.x - p.x, b.y - p.y);
      if (d > R + b.r) continue;
      const dmg = b.kind === "boss" ? 6 : b.kind === "security" ? 5 : 4;
      b.hp -= dmg;
      b.hitFlash = 0.12;
      const n = d > 0.001 ? { x: (b.x - p.x) / d, y: (b.y - p.y) / d } : { x: 0, y: -1 };
      b.x += n.x * 38;
      b.y += n.y * 38;
      b.stun = Math.max(b.stun || 0, 0.38);
      if (b.hp <= 0) killBot(b);
    }
    floater(p.x, p.y - 22, "STATIC", "#7ffff8");
  }

  function tryRemoteRecall() {
    const p = world.player;
    if (!p || p.dead || !world.gear.recall || (p.recallCd || 0) > 0) return;
    p.recallCd = 7.4;
    p.recallT = 3.6;
    sfx.pickup();
    announce = "REMOTE RECALL";
    announceT = 1.1;
    burst(p.x, p.y, 10, "#e8b44a", 0.28);
  }

  function firePlayer() {
    const p = world.player;
    const spec = gunSpec(world.gear.weapon, world.level);
    if (p.fireT > 0) return;
    p.fireT = spec.rate * Math.pow(0.94, world.gear.rateUp || 0);
    p.muzzle = 0.07;
    const hand = gunOrigin(p);
    for (const off of spec.angles) {
      const a = p.aim + off;
      world.bullets.push({
        x: hand.x + Math.cos(a) * 6,
        y: hand.y + Math.sin(a) * 6,
        vx: Math.cos(a) * spec.spd,
        vy: Math.sin(a) * spec.spd,
        ang: a,
        r: 4,
        life: spec.life,
        dmg: spec.dmg,
        streak: 0.033,
      });
    }
    p.x -= Math.cos(p.aim) * 1.4;
    p.y -= Math.sin(p.aim) * 1.4;
    cameraPunchAim(p.aim, 1.7, 0.065);
    sfx.shoot();
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

  function shopAvailable() {
    return !!world.cleared[world.roomId] && world.roomId !== "boss" && world.player && !world.player.dead;
  }

  function openShop() {
    if (!shopAvailable()) return;
    world.shopOpen = true;
    clampShopCursor();
    sfx.shop();
  }

  function closeShop() {
    world.shopOpen = false;
    sfx.ui();
  }

  function shopItem(col, row) {
    const cols = shopCols(world.pass, world.gear);
    return cols[col] && cols[col][row];
  }

  function itemState(col, item) {
    if (!item) return { label: "", can: false };
    if (col === 0) {
      const owned = world.gear.armor >= item.tier;
      const eq = world.gear.armor === item.tier;
      return { owned, eq, can: !eq && world.tokens >= item.price, price: item.price };
    }
    if (col === 1) {
      const owned = world.gear.weapon >= item.tier;
      const eq = world.gear.weapon === item.tier;
      return { owned, eq, can: !eq && world.tokens >= item.price, price: item.price };
    }
    if (isStat(item)) {
      const rank = statRank(world.gear, item);
      const price = statPrice(item, rank);
      const maxed = rank >= item.max;
      return { owned: rank > 0, eq: false, can: !maxed && world.tokens >= price, rank, max: item.max, price, maxed };
    }
    if (item.id === "sneakers") {
      return { owned: world.gear.sneakers, eq: world.gear.sneakers, can: !world.gear.sneakers && world.tokens >= item.price, price: item.price };
    }
    if (item.id === "signal") {
      return { owned: world.gear.signal, eq: world.gear.signal, can: !world.gear.signal && world.tokens >= item.price, price: item.price };
    }
    if (item.id === "dash") {
      return { owned: world.gear.dash, eq: world.gear.dash, can: !world.gear.dash && world.tokens >= item.price, price: item.price };
    }
    if (item.id === "static") {
      return { owned: world.gear.static, eq: world.gear.static, can: !world.gear.static && world.tokens >= item.price, price: item.price };
    }
    if (item.id === "recall") {
      return { owned: world.gear.recall, eq: world.gear.recall, can: !world.gear.recall && world.tokens >= item.price, price: item.price };
    }
    if (item.id === "wind") {
      return { owned: world.gear.wind, eq: world.gear.wind, can: !world.gear.wind && world.tokens >= item.price, price: item.price };
    }
    if (item.id === "1up2") {
      const n = world.gear.passLives;
      return { owned: n >= 2, eq: false, can: n < 2 && world.tokens >= item.price, price: item.price };
    }
    const n = world.gear.extraLives;
    return { owned: n >= 2, eq: false, can: n < 2 && world.tokens >= item.price, price: item.price };
  }

  function shopLayout() {
    return { ox: 146, oy: 148, cw: 164, rh: 86, cardW: 154, cardH: 78 };
  }

  function shopHit(mx, my) {
    const { ox, oy, cw, rh, cardW, cardH } = shopLayout();
    const cols = shopCols(world.pass, world.gear);
    for (let c = 0; c < cols.length; c++) {
      for (let r = 0; r < cols[c].length; r++) {
        const x = ox + c * cw;
        const y = oy + r * rh;
        if (mx >= x && mx <= x + cardW && my >= y && my <= y + cardH) return { c, r };
      }
    }
    return null;
  }

  function clampShopCursor() {
    const cols = shopCols(world.pass, world.gear);
    world.shopCol = clamp(world.shopCol, 0, cols.length - 1);
    const n = Math.max(1, cols[world.shopCol].length);
    world.shopRow = clamp(world.shopRow, 0, n - 1);
  }

  function buySelected() {
    const item = shopItem(world.shopCol, world.shopRow);
    const st = itemState(world.shopCol, item);
    if (!item || !st.can) {
      sfx.ui();
      return;
    }
    world.tokens -= st.price != null ? st.price : item.price;
    if (world.shopCol === 0) world.gear.armor = item.tier;
    else if (world.shopCol === 1) world.gear.weapon = item.tier;
    else if (isStat(item)) world.gear[item.rankKey] = (world.gear[item.rankKey] || 0) + 1;
    else if (item.id === "sneakers") world.gear.sneakers = true;
    else if (item.id === "signal") world.gear.signal = true;
    else if (item.id === "dash") world.gear.dash = true;
    else if (item.id === "static") world.gear.static = true;
    else if (item.id === "recall") world.gear.recall = true;
    else if (item.id === "wind") world.gear.wind = true;
    else if (item.id === "1up" || item.id === "1up2") {
      if (item.id === "1up2") world.gear.passLives += 1;
      else world.gear.extraLives += 1;
      world.lives = clamp(world.lives + 1, 0, 9);
    }
    syncPlayerBody();
    sfx.pickup();
    const rankNow = isStat(item) ? statRank(world.gear, item) : 0;
    announce = isStat(item) ? `EQUIPPED  —  ${item.name} +${rankNow}` : "EQUIPPED  —  " + item.name;
    announceT = 1.3;
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
    if (state === "gameover" || state === "win") {
      if (input.consume("start") || input.consume("fire") || input.mouse.clicked) {
        input.mouse.clicked = false;
        input.mouse.down = false;
        startPlay();
      }
      return;
    }

    if (world.cutT > 0) {
      const before = world.cutT;
      world.cutT = Math.max(0, world.cutT - dt);
      if (before > world.cutMax * 0.45 && world.cutT <= world.cutMax * 0.45) finishCut();
      announceT = Math.max(0, announceT - dt);
      return;
    }

    input.pollGamepad();
    const southTap = input.pad.south && !padSouthWas;
    const eastTap = input.pad.east && !padEastWas;
    const westTap = input.pad.west && !padWestWas;
    const lbTap = input.pad.lb && !padLbWas;
    const rbTap = input.pad.rb && !padRbWas;
    padSouthWas = input.pad.south;
    padEastWas = input.pad.east;
    padWestWas = input.pad.west;
    padLbWas = input.pad.lb;
    padRbWas = input.pad.rb;
    if (world.shopOpen) {
      if (input.consume("esc") || eastTap) closeShop();
      if (input.consume("start") || input.consume("shop")) buySelected();
      const cols = shopCols(world.pass, world.gear);
      const nc = cols.length;
      if (input.consume("left")) {
        world.shopCol = (world.shopCol + nc - 1) % nc;
        clampShopCursor();
      }
      if (input.consume("right")) {
        world.shopCol = (world.shopCol + 1) % nc;
        clampShopCursor();
      }
      if (input.consume("up")) {
        const n = Math.max(1, cols[world.shopCol].length);
        world.shopRow = (world.shopRow + n - 1) % n;
      }
      if (input.consume("down")) {
        const n = Math.max(1, cols[world.shopCol].length);
        world.shopRow = (world.shopRow + 1) % n;
      }
      if (input.mouse.clicked) {
        const col = shopHit(input.mouse.x, input.mouse.y);
        if (col) {
          world.shopCol = col.c;
          world.shopRow = col.r;
          buySelected();
        }
      }
      input.mouse.clicked = false;
      announceT = Math.max(0, announceT - dt);
      return;
    }

    if (shopAvailable() && (input.consume("shop") || input.consume("start") || southTap)) {
      openShop();
      input.mouse.clicked = false;
      return;
    }

    input.mouse.clicked = false;
    const p = world.player;
    const obs = currentObs(world);
    p.skin = playerSkin(world.gear);
    p.skinTint = skinTint(world.gear);
    if (world.passClearT > 0) {
      world.passClearT = Math.max(0, world.passClearT - dt);
      announceT = Math.max(announceT, world.passClearT);
      for (const b of world.bots) {
        if (b.dead) b.deadT += dt;
      }
      world.bots = world.bots.filter((b) => !b.dead || b.deadT < shatterDuration(b.kind) + 0.02);
      punchT = Math.max(0, punchT - dt);
      flash = Math.max(0, flash - dt);
      if (world.passClearT <= 0) startNextPass();
      return;
    }
    if (world.levelFreeze > 0) {
      world.levelFreeze = Math.max(0, world.levelFreeze - dt);
      announceT = Math.max(0, announceT - dt);
      flash = Math.max(0, flash - dt);
      return;
    }
    const km = input.keyboardMove();
    let mx = km.x + input.pad.mx + input.touch.move.x;
    let my = km.y + input.pad.my + input.touch.move.y;
    const ml = len(mx, my);
    if (ml > 1) {
      mx /= ml;
      my /= ml;
    }
    if (p.dead) {
      p.deadT = (p.deadT || 0) + dt;
      p.vx = 0;
      p.vy = 0;
      if (p.deadT > 0.78 && state === "play") state = "gameover";
    } else {
      p.dashCd = Math.max(0, (p.dashCd || 0) - dt);
      p.dashT = Math.max(0, (p.dashT || 0) - dt);
      p.fieldCd = Math.max(0, (p.fieldCd || 0) - dt);
      p.fieldT = Math.max(0, (p.fieldT || 0) - dt);
      p.recallCd = Math.max(0, (p.recallCd || 0) - dt);
      p.recallT = Math.max(0, (p.recallT || 0) - dt);
      if (world.gear.dash && p.dashCd <= 0 && (input.consume("dash") || lbTap)) {
        const d = ml > 0.2 ? norm(mx, my) : { x: Math.cos(p.aim), y: Math.sin(p.aim) };
        p.dashT = 0.14;
        p.dashCd = 0.82;
        p.dashX = d.x;
        p.dashY = d.y;
        p.iframes = Math.max(p.iframes, 0.2);
        burst(p.x, p.y, 6, "#5ef6ff", 0.18);
      }
      if (world.gear.static && p.fieldCd <= 0 && (input.consume("field") || rbTap)) {
        tryStaticField();
      }
      if (world.gear.recall && p.recallCd <= 0 && (input.consume("recall") || westTap)) {
        tryRemoteRecall();
      }
      const spd = 210 * (world.gear.sneakers ? 1.28 : 1) * (1 + 0.055 * (world.gear.moveUp || 0));
      if (p.dashT > 0) {
        p.vx = p.dashX * 520;
        p.vy = p.dashY * 520;
      } else {
        p.vx = mx * spd;
        p.vy = my * spd;
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      resolveWorld(p, obs);
      tryDoors(p);
    }

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
    if (wantFire && !p.dead) firePlayer();

    p.fireT = Math.max(0, p.fireT - dt);
    p.muzzle = Math.max(0, p.muzzle - dt);
    p.iframes = Math.max(0, p.iframes - dt);
    for (const k of Object.keys(p.powers)) p.powers[k] = Math.max(0, p.powers[k] - dt);
    world.multT = Math.max(0, world.multT - dt);
    if (world.multT <= 0) world.mult = 1;
    announceT = Math.max(0, announceT - dt);
    punchT = Math.max(0, punchT - dt);
    flash = Math.max(0, flash - dt);

    world.readyT = Math.max(0, (world.readyT || 0) - dt);
    if (world.readyT > 0) {
      p.iframes = Math.max(p.iframes, world.readyT + 0.45);
    } else {
      world.spawnT += dt;
      while (world.spawn.length && world.spawn[0].wait <= world.spawnT) {
        const job = world.spawn.shift();
        spawnBot(job.kind, job.gates, { elite: job.elite });
      }
    }

    for (const b of world.bots) {
      b.hitFlash = Math.max(0, (b.hitFlash || 0) - dt);
      if (b.dead) {
        b.deadT += dt;
        continue;
      }
      b.stun = Math.max(0, (b.stun || 0) - dt);
      if (b.stun > 0) {
        b.facing = angOf(p.x - b.x, p.y - b.y);
        continue;
      }
      const ang = angOf(p.x - b.x, p.y - b.y);
      const dist = Math.hypot(p.x - b.x, p.y - b.y);
      let sx = Math.cos(ang);
      let sy = Math.sin(ang);
      let moveSpd = b.speed;

      if (b.kind === "mannequin") {
        b.stillT = (b.stillT ?? 0.5) - dt;
        b.lungeT = (b.lungeT ?? 0) - dt;
        if (b.pose !== "lunge") b.pose = "still";
        if (b.pose === "still") {
          if (b.stillT > 0.5) {
            sx = 0;
            sy = 0;
            moveSpd = 0;
          } else {
            moveSpd = 12;
          }
          if (dist < 88 || b.stillT <= 0) {
            b.pose = "lunge";
            b.lungeT = 0.52;
          }
        } else {
          moveSpd = 158;
          if (b.lungeT <= 0) {
            b.pose = "still";
            b.stillT = 0.75 + Math.random() * 0.55;
          }
        }
      } else if (b.kind === "shotgun") {
        if (dist < 120) {
          sx = -Math.cos(ang);
          sy = -Math.sin(ang);
          moveSpd = b.speed * 1.08;
        } else if (dist > 190) {
          sx = Math.cos(ang);
          sy = Math.sin(ang);
        } else {
          sx = -Math.sin(ang);
          sy = Math.cos(ang);
          moveSpd = b.speed * 0.88;
        }
      } else if (b.kind === "boss") {
        const phase = bossPhaseOf(b, world.pass);
        if ((b.lastPhase || 1) < phase) {
          b.lastPhase = phase;
          b.tele = 0.3;
          b.fireT = 0.28;
          flash = 0.28;
          cameraPunch(8, 0.1);
          announce = `DIRECTORY PHASE ${phase}`;
          announceT = 2;
          sfx.boss();
        }
        b.orbitT = (b.orbitT || 0) + dt * (1.15 + phase * 0.28);
        const want = 148;
        const side = Math.cos(b.orbitT);
        b.slamT = Math.max(0, (b.slamT || 0) - dt);
        if (b.slamT > 0) {
          sx = Math.cos(ang);
          sy = Math.sin(ang);
          moveSpd = b.speed * (3.15 + phase * 0.1);
          if (b.slamT <= dt) {
            const n = phase >= 4 ? 14 : 10;
            for (let i = 0; i < n; i++) {
              const a = (i / n) * Math.PI * 2;
              fireAmber(b.x + Math.cos(a) * 22, b.y + Math.sin(a) * 22, a, 220, 4.5);
            }
            b.tele = 0.18;
          }
        } else if (dist < want - 24) {
          sx = -Math.cos(ang);
          sy = -Math.sin(ang);
        } else if (dist > want + 46) {
          sx = Math.cos(ang);
          sy = Math.sin(ang);
        } else {
          sx = -Math.sin(ang) * side;
          sy = Math.cos(ang) * side;
        }
        if (b.slamT <= 0) moveSpd *= 1 + (phase - 1) * 0.16;
        b.dashT = (b.dashT || 0) - dt;
        const dashWait = phase >= 4 ? 0.68 : phase >= 3 ? 0.88 : phase >= 2 ? 1.04 : 1.25;
        if (b.slamT <= 0 && b.dashT <= -dashWait) {
          b.dashT = 0.22;
          b.tele = 0.16;
        }
        if (b.slamT <= 0 && b.dashT > 0) {
          const cut = ang + (side >= 0 ? 0.7 : -0.7);
          sx = Math.cos(cut);
          sy = Math.sin(cut);
          moveSpd = b.speed * (2.1 + phase * 0.22);
        }
        b.tele = Math.max(0, (b.tele || 0) - dt);
      }

      for (const o of obs) {
        const dx = b.x - o.x;
        const dy = b.y - o.y;
        const d = Math.hypot(dx, dy);
        if (d < o.r + b.r + 16) {
          sx += (dx / (d || 1)) * 0.8;
          sy += (dy / (d || 1)) * 0.8;
        }
      }
      const sl = moveSpd <= 0 && Math.hypot(sx, sy) < 0.01 ? { x: 0, y: 0 } : norm(sx, sy);
      b.vx = sl.x * moveSpd;
      b.vy = sl.y * moveSpd;
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.facing =
        b.kind === "shotgun" || b.kind === "mannequin" || Math.hypot(sl.x, sl.y) < 0.01
          ? ang
          : angOf(sl.x, sl.y);
      resolveWorld(b, obs);
      if (hits(b, p)) {
        if (b.kind === "security") {
          p.x += Math.cos(ang) * 20;
          p.y += Math.sin(ang) * 20;
          resolveWorld(p, obs);
          const d2 = Math.hypot(b.x - p.x, b.y - p.y) || 1;
          const min = b.r + p.r + 2;
          if (d2 < min) {
            b.x = p.x + ((b.x - p.x) / d2) * min;
            b.y = p.y + ((b.y - p.y) / d2) * min;
          }
        }
        if (p.iframes > 0 || (world.readyT || 0) > 0) {
          const dx = b.x - p.x;
          const dy = b.y - p.y;
          const d = Math.hypot(dx, dy) || 1;
          const min = b.r + p.r + 2;
          b.x = p.x + (dx / d) * min;
          b.y = p.y + (dy / d) * min;
        } else {
          hurtPlayer({ contact: true });
        }
      }

      b.fireT -= dt;
      if (b.canShoot && b.kind !== "boss" && b.fireT <= 0) {
        b.fireT = shooterCadence(b);
        if (b.kind === "shotgun") {
          for (const off of [-0.2, 0, 0.2]) {
            const a = ang + off;
            fireAmber(b.x + Math.cos(a) * 16, b.y + Math.sin(a) * 16, a, 270, 4);
          }
        } else if (b.kind === "security") {
          fireAmber(b.x + Math.cos(ang) * 20, b.y + Math.sin(ang) * 20, ang, 190, 5.5);
        } else {
          fireAmber(b.x + Math.cos(ang) * 14, b.y + Math.sin(ang) * 14, ang, 240, 4);
        }
      }
      if (b.kind === "boss" && b.fireT <= 0) {
        const phase = bossPhaseOf(b, world.pass);
        let gap = phase >= 4 ? 0.48 : phase >= 3 ? 0.6 : phase >= 2 ? 0.8 : 1.12;
        if (world.pass >= 2) gap *= 0.84;
        b.fireT = gap;
        b.tele = 0.14;
        b.atk = (b.atk || 0) + 1;
        const aim = ang;
        const ring = (n, spd, rad) => {
          for (let i = 0; i < n; i++) {
            const a = (i / n) * Math.PI * 2 + t;
            fireAmber(b.x + Math.cos(a) * rad, b.y + Math.sin(a) * rad, a, spd, 4.5);
          }
        };
        const aimed = (offs, spd) => {
          for (const off of offs) {
            const a = aim + off;
            fireAmber(b.x + Math.cos(a) * 22, b.y + Math.sin(a) * 22, a, spd, 4.2);
          }
        };
        const cross = () => {
          for (let q = 0; q < 4; q++) {
            const a = q * (Math.PI / 2) + ((b.atk || 0) % 2 === 0 ? 0 : Math.PI / 4);
            for (let k = 0; k < 3; k++) {
              fireAmber(b.x + Math.cos(a) * 18, b.y + Math.sin(a) * 18, a, 150 + k * 42, 4.2);
            }
          }
        };
        const spiral = () => {
          const dir = b.spinDir || 1;
          for (let i = 0; i < 14; i++) {
            const a = t * 1.4 + i * 0.45 * dir;
            fireAmber(b.x + Math.cos(a) * 20, b.y + Math.sin(a) * 20, a, 158 + (i % 3) * 14, 4);
          }
          b.spinDir = -dir;
        };
        if (phase === 1) {
          ring(8, 150, 24);
          if ((b.addI || 0) % 2 === 1) aimed([-0.16, 0, 0.16], 240);
        } else if (phase === 2) {
          if (b.atk % 2 === 0) ring(10, 168, 24);
          else aimed([-0.42, -0.28, -0.14, 0, 0.14, 0.28, 0.42], 255);
        } else if (phase === 3) {
          if (b.atk % 2 === 0) {
            cross();
            aimed([-0.18, 0, 0.18], 260);
          } else {
            spiral();
          }
        } else {
          if (b.atk % 3 === 0) {
            b.slamT = 0.28;
            b.tele = 0.22;
          } else if (b.atk % 3 === 1) {
            spiral();
            aimed([-0.14, 0, 0.14], 280);
          } else {
            ring(16, 88, 20);
            ring(10, 210, 28);
            cross();
          }
        }
      }
      if (b.kind === "boss") {
        const phase = bossPhaseOf(b, world.pass);
        b.addT = (b.addT ?? 2.8) - dt;
        const liveAdds = world.bots.filter((x) => x !== b && !x.dead).length;
        const cap = (phase >= 4 ? 7 : phase >= 3 ? 6 : 5) + (world.pass >= 2 ? 1 : 0);
        const wait = (phase >= 3 ? 3.1 : 3.6) * (world.pass >= 2 ? 0.78 : 1);
        if (b.addT <= 0 && liveAdds < cap) {
          b.addT = wait;
          b.addI = (b.addI || 0) + 1;
          if (announceT < 0.55) {
            if (phase === 1) {
              spawnBot("rusher", ["N", "E"]);
              announce = "THE MALL COMES WITH YOU — RUSHERS";
            } else if (phase === 2) {
              spawnBot("rusher", ["N", "S"]);
              spawnBot("rusher", ["E", "W"]);
              spawnBot("shotgun", ["N", "S"]);
              announce = "THE MALL COMES WITH YOU — STATIC";
            } else {
              spawnBot("rusher", ["N", "E"]);
              spawnBot("shotgun", ["S"]);
              if (!b.tankDropped || phase >= 4) {
                spawnBot("security", ["W", "E"]);
                b.tankDropped = true;
                announce = "THE MALL COMES WITH YOU — SECURITY";
              } else {
                announce = "THE MALL COMES WITH YOU — RUSHERS";
              }
            }
            announceT = 1.4;
          } else if (phase === 1) {
            spawnBot("rusher", ["N", "E"]);
          } else if (phase === 2) {
            spawnBot("rusher", ["N", "S"]);
            spawnBot("rusher", ["E", "W"]);
            spawnBot("shotgun", ["N", "S"]);
          } else {
            spawnBot("rusher", ["N", "E"]);
            spawnBot("shotgun", ["S"]);
            if (!b.tankDropped || phase >= 4) {
              spawnBot("security", ["W", "E"]);
              b.tankDropped = true;
            }
          }
        }
      }
    }
    world.bots = world.bots.filter((b) => !b.dead || b.deadT < shatterDuration(b.kind) + 0.02);

    for (const b of world.bullets) {
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      if (b.streak) b.streak = Math.max(0, b.streak - dt);
      if (hitsObs(b, obs)) {
        b.life = 0;
        burst(b.x, b.y, 4, "#7ffff8", 0.18);
        continue;
      }
      for (const e of world.bots) {
        if (e.dead || !hits(b, e)) continue;
        let dmg = b.dmg || 1;
        if (e.resist) dmg *= 0.55;
        e.hp -= dmg;
        e.hitFlash = 0.12;
        b.life = 0;
        sfx.hit();
        burst(b.x, b.y, 6, "#7ffff8", 0.25);
        if (e.hp <= 0) killBot(e);
        break;
      }
    }
    world.bullets = world.bullets.filter((b) => b.life > 0 && inArena(b, 20));

    for (const s of world.eShots) {
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      if (hitsObs(s, obs)) {
        s.life = 0;
        continue;
      }
      if (hits(s, p)) {
        s.life = 0;
        if (p.iframes > 0 || (world.readyT || 0) > 0) continue;
        hurtPlayer();
      }
    }
    world.eShots = world.eShots.filter((s) => s.life > 0 && inArena(s, 16));

    for (const u of world.pickups) {
      u.t -= dt;
      if ((p.recallT || 0) > 0 && u.kind === "token") {
        const d = Math.hypot(p.x - u.x, p.y - u.y);
        if (d < 230 && d > 2) {
          u.x += ((p.x - u.x) / d) * 280 * dt;
          u.y += ((p.y - u.y) / d) * 280 * dt;
        }
      }
      const grab = (p.recallT || 0) > 0 && u.kind === "token" ? { ...p, r: p.r + 10 } : p;
      if (hits(u, grab)) {
        u.t = 0;
        applyPickup(u);
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
      if (world.wavePause > 1.15) {
        world.wavePause = 0;
        const room = ROOMS[world.roomId];
        if (world.cleared[world.roomId]) return;
        if (world.roomWave >= 0 && world.roomWave < room.waves.length - 1) {
          world.roomWave += 1;
          world.wave += 1;
          beginWave(room.waves[world.roomWave], false);
        } else {
          clearRoom();
        }
      }
    }
  }

  function tryDoors(p) {
    for (const g of GATES) {
      if (!doorOpen(world.roomId, g.name, world.cleared, world.enterFrom)) continue;
      const gp = gateWorld(g);
      const d = Math.hypot(p.x - gp.x, p.y - gp.y);
      if (d < 34) enterDoor(g.name);
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

  function containImage(img, x, y, w, h) {
    if (!img.complete || !img.naturalWidth) return false;
    const ir = img.naturalWidth / img.naturalHeight;
    const r = w / h;
    let dw = w;
    let dh = h;
    let dx = x;
    let dy = y;
    if (ir > r) {
      dh = w / ir;
      dy = y + (h - dh) / 2;
    } else {
      dw = h * ir;
      dx = x + (w - dw) / 2;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
    return true;
  }

  function hpFillColor(ratio) {
    if (ratio > 0.58) return "#3ee86a";
    if (ratio > 0.3) return "#e8d44a";
    return "#ff3a3a";
  }

  function drawPlayerHpBar(x, cy, p) {
    const max = Math.max(1, p.maxHp || 1);
    const hp = clamp(p.hp, 0, max);
    const ratio = hp / max;
    const barW = 132;
    const barH = 12;
    const by = cy - barH / 2;
    ctx.fillStyle = ratio > 0.3 ? "#3ee86a" : "#ff3a3a";
    ctx.beginPath();
    ctx.moveTo(x + 5, cy - 4);
    ctx.lineTo(x + 9, cy);
    ctx.lineTo(x + 5, cy + 4);
    ctx.lineTo(x + 1, cy);
    ctx.closePath();
    ctx.fill();
    const bx = x + 14;
    ctx.fillStyle = "#14180f";
    ctx.fillRect(bx, by, barW, barH);
    ctx.fillStyle = hpFillColor(ratio);
    ctx.fillRect(bx, by, barW * ratio, barH);
    const segs = Math.min(max, 12);
    ctx.strokeStyle = "rgba(0,0,0,0.45)";
    ctx.lineWidth = 1;
    for (let i = 1; i < segs; i++) {
      const tx = bx + (barW * i) / segs;
      ctx.beginPath();
      ctx.moveTo(tx, by + 1);
      ctx.lineTo(tx, by + barH - 1);
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(180,255,180,0.55)";
    ctx.strokeRect(bx, by, barW, barH);
    ctx.fillStyle = "#f2f2f0";
    ctx.font = "bold 10px Courier New, monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(`${hp}/${max}`, bx + barW + 6, cy + 1);
    ctx.textBaseline = "alphabetic";
  }

  function helpLine() {
    const bits = ["WASD MOVE"];
    if (world.gear.dash) bits.push("SHIFT DASH");
    if (world.gear.static) bits.push("Q FIELD");
    if (world.gear.recall) bits.push("F RECALL");
    bits.push("E SHOP", "M MUTE");
    return bits.join("  ");
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
    const feed = state === "title" ? "THE ATRIUM  //  ABANDONED MALL FEED" : ROOMS[world.roomId].chyron;
    ctx.fillText(feed, 150, 14);
    if (state !== "title") {
      ctx.fillStyle = "#e8b44a";
      ctx.font = "bold 11px Courier New, monospace";
      ctx.fillText(`PASS ${world.pass}`, 620, 14);
    }

    if (state !== "title") {
      ctx.fillStyle = "#5ef6ff";
      ctx.font = "bold 11px Courier New, monospace";
      ctx.textAlign = "left";
      ctx.fillText(`LV ${world.level}`, 150, 34);
      const need = xpToNext(world.level);
      const barX = 198;
      const barW = 160;
      const capped = world.level >= LEVEL_CAP || !need;
      ctx.fillStyle = "#122";
      ctx.fillRect(barX, 28, barW, 8);
      ctx.fillStyle = "#5ef6ff";
      ctx.fillRect(barX, 28, barW * (capped ? 1 : clamp(world.xp / need, 0, 1)), 8);
      ctx.strokeStyle = "rgba(94,246,255,0.5)";
      ctx.strokeRect(barX, 28, barW, 8);
      if (capped) {
        ctx.fillStyle = "#022428";
        ctx.font = "bold 8px Courier New, monospace";
        ctx.textAlign = "center";
        ctx.fillText("MAX", barX + barW / 2, 33);
        ctx.textAlign = "left";
      }
      ctx.fillStyle = "#e8b44a";
      ctx.font = "bold 12px Courier New, monospace";
      ctx.fillText(`TKN ${world.tokens}`, 372, 34);
    }

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
      ctx.fillText(`${ROOMS[world.roomId].short}  W${Math.max(1, world.roomWave + 1)}`, 16, H - HUD_BOT / 2);
      for (let i = 0; i < 5; i++) drawCrtLife(ctx, 108 + i * 26, H - HUD_BOT / 2, i < world.lives);
      const p = world.player;
      if (p) {
        drawPlayerHpBar(248, H - HUD_BOT / 2, p);
        const gear = [];
        if (world.gear.armor) gear.push((armorByTier(world.gear.armor) || {}).name);
        if (world.gear.weapon) gear.push((weaponByTier(world.gear.weapon) || {}).name);
        if (world.gear.sneakers) gear.push("SNEAK");
        if (world.gear.dash) gear.push("DASH");
        if (world.gear.static) gear.push("FIELD");
        if (world.gear.recall) gear.push("RECALL");
        if (world.gear.wind) gear.push("WIND");
        if (world.gear.hpUp) gear.push(`HP+${world.gear.hpUp}`);
        ctx.save();
        ctx.beginPath();
        ctx.rect(456, H - HUD_BOT + 4, 200, HUD_BOT - 6);
        ctx.clip();
        ctx.fillStyle = "#8ff";
        ctx.font = "9px Courier New, monospace";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(gear.filter(Boolean).join("  "), 456, H - HUD_BOT / 2 + 1);
        ctx.restore();
      }
      ctx.textAlign = "right";
      ctx.fillStyle = "#667";
      ctx.font = "10px Trebuchet MS, sans-serif";
      const help = muted || isMuted() ? "MUTED  M" : helpLine();
      ctx.fillText(help, W - 16, H - HUD_BOT / 2);
    }
  }

  function drawPlay() {
    const pk = punchMax > 0 ? punchT / punchMax : 0;
    ctx.save();
    ctx.translate(punchX * pk, punchY * pk);

    ctx.fillStyle = "#0a0c10";
    ctx.fillRect(ARENA.x - 8, ARENA.y - 8, ARENA.s + 16, ARENA.s + 16);
    ctx.save();
    ctx.beginPath();
    ctx.rect(ARENA.x, ARENA.y, ARENA.s, ARENA.s);
    ctx.clip();
    ctx.imageSmoothingEnabled = true;
    const floor = ROOMS[world.roomId].floor;
    if (!coverImage(floor, ARENA.x, ARENA.y, ARENA.s, ARENA.s)) {
      ctx.fillStyle = "#14110e";
      ctx.fillRect(ARENA.x, ARENA.y, ARENA.s, ARENA.s);
    }
    applyRoomGrade(ctx, world.roomId, ARENA);
    ctx.imageSmoothingEnabled = false;

    const cx = ARENA.x + ARENA.s / 2;
    const cy = ARENA.y + ARENA.s / 2;
    if (world.roomId === "atrium") {
      drawFountain(ctx, cx, cy, t);
      const q = ARENA.s * 0.22;
      drawPlanter(ctx, cx - q, cy - q);
      drawPlanter(ctx, cx + q, cy - q);
      drawPlanter(ctx, cx - q, cy + q);
      drawPlanter(ctx, cx + q, cy + q);
    }
    for (const g of GATES) {
      const dest = ROOMS[world.roomId].doors[g.name];
      if (!dest) continue;
      const gp = gateWorld(g);
      const open = doorOpen(world.roomId, g.name, world.cleared, world.enterFrom);
      const locked = doorLocked(world.roomId, g.name, world.cleared);
      const mode = locked ? "locked" : open ? "open" : "closed";
      drawGate(ctx, gp.x, gp.y, g.ang, doorLabel(world.roomId, g.name, world.cleared), t, mode);
    }

    if (world.cleared[world.roomId] && world.roomId !== "boss") {
      const k = kioskPos(ARENA);
      drawKiosk(ctx, k.x, k.y, t);
      if (!world.shopOpen && shopAvailable()) {
        ctx.fillStyle = "rgba(232,180,74,0.9)";
        ctx.font = "bold 10px Courier New, monospace";
        ctx.textAlign = "center";
        ctx.fillText("E / ENTER  —  PRIZE BOOTH", k.x, k.y - 28);
      }
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
    if (world.player && (state === "play" || world.player.dead)) {
      drawPlayer(ctx, world.player, t);
      const p = world.player;
      if ((p.fieldT || 0) > 0) {
        const k = p.fieldT / 0.24;
        ctx.strokeStyle = `rgba(94,246,255,${0.25 + k * 0.55})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 40 + (1 - k) * 70, 0, Math.PI * 2);
        ctx.stroke();
      }
      if ((p.recallT || 0) > 0) {
        ctx.strokeStyle = `rgba(232,180,74,${0.2 + (p.recallT % 0.4) * 0.4})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 26 + Math.sin(t * 10) * 3, 0, Math.PI * 2);
        ctx.stroke();
      }
      if (p.dead) {
        /* shatter only */
      } else {
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
    }

    if (world.boss && !world.boss.dead) {
      const bx = ARENA.x + 40;
      const by = ARENA.y + 14;
      const bw = ARENA.s - 80;
      ctx.fillStyle = "rgba(0,0,0,0.55)";
      ctx.fillRect(bx, by, bw, 10);
      ctx.fillStyle = "#c44";
      ctx.fillRect(bx, by, bw * clamp(world.boss.hp / world.boss.max, 0, 1), 10);
      ctx.strokeStyle = "rgba(232,180,74,0.7)";
      ctx.strokeRect(bx, by, bw, 10);
      ctx.fillStyle = "rgba(232,180,74,0.85)";
      ctx.fillRect(bx + bw / 3, by, 1, 10);
      ctx.fillRect(bx + (bw * 2) / 3, by, 1, 10);
      if (world.pass >= 2) ctx.fillRect(bx + bw * 0.22, by, 1, 10);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 10px Trebuchet MS, sans-serif";
      ctx.textAlign = "center";
      const ph = bossPhaseOf(world.boss, world.pass);
      ctx.fillText(`DIRECTORY UNIT  •  P${ph}`, cx, by + 8);
      if ((world.boss.tele || 0) > 0) {
        ctx.strokeStyle = `rgba(196,120,32,${0.35 + world.boss.tele})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(world.boss.x, world.boss.y, 36 + (0.16 - world.boss.tele) * 40, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    ctx.restore();
    ctx.restore();

    if (flash > 0) {
      ctx.fillStyle = `rgba(200,255,255,${flash * 0.55})`;
      ctx.fillRect(ARENA.x, ARENA.y, ARENA.s, ARENA.s);
    }

    if (announceT > 0 && (state === "play" || state === "win")) {
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

    if (world.cutT > 0) {
      const k = world.cutT / (world.cutMax || 0.55);
      const a = k > 0.5 ? (1 - k) * 2 : k * 2;
      ctx.fillStyle = `rgba(0,0,0,${0.15 + a * 0.85})`;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = `rgba(94,246,255,${a * 0.08})`;
      for (let y = 0; y < H; y += 3) ctx.fillRect(0, y, W, 1);
    }

    if (state === "play" || state === "win") {
      drawMinimap(ctx, world, t, { x: 6, y: HUD_TOP + 6, w: 116, h: 200 });
    }
  }

  function drawTitle() {
    ctx.fillStyle = "#050608";
    ctx.fillRect(0, 0, W, H);
    ctx.imageSmoothingEnabled = true;
    containImage(art.title, 0, 0, W, H);
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "rgba(0,0,0,0.18)";
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = "rgba(0,0,0,0.42)";
    ctx.fillRect(0, 64, W, 78);
    ctx.fillStyle = "#f2f2f0";
    ctx.font = "bold 54px Trebuchet MS, Arial Black, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("THE ATRIUM", W / 2, 104);

    ctx.fillStyle = "rgba(0,0,0,0.55)";
    ctx.fillRect(0, H - 132, W, 132);
    ctx.fillStyle = "#5ef6ff";
    ctx.font = "bold 16px Trebuchet MS, sans-serif";
    ctx.textAlign = "center";
    const blink = Math.sin(t * 4) > -0.2;
    if (blink) ctx.fillText("PRESS ENTER  /  CLICK  /  TAP   TO START", W / 2, H - 96);
    ctx.fillStyle = "#c8c8c4";
    ctx.font = "12px Trebuchet MS, sans-serif";
    ctx.fillText("WASD or LEFT STICK move   •   MOUSE or RIGHT STICK aim / fire   •   ARROWS auto-aim   •   M MUTE", W / 2, H - 70);
    ctx.fillStyle = "#889";
    ctx.font = "11px Courier New, monospace";
    ctx.fillText(`HI-SCORE  ${String(hi).padStart(7, "0")}`, W / 2, H - 46);
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

  function drawWin() {
    drawPlay();
    ctx.fillStyle = "rgba(0,0,0,0.55)";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#5ef6ff";
    ctx.font = "bold 36px Trebuchet MS, Arial Black, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("DIRECTORY DOWN", W / 2, 340);
    ctx.fillStyle = "#fff";
    ctx.font = "18px Courier New, monospace";
    ctx.fillText(`SCORE  ${String(world.score).padStart(7, "0")}`, W / 2, 392);
    ctx.fillStyle = "#9aa";
    ctx.font = "13px Courier New, monospace";
    ctx.fillText("KRCD 7  —  THE ATRIUM IS CLEAR", W / 2, 424);
    ctx.fillStyle = "#5ef6ff";
    ctx.font = "bold 16px Trebuchet MS, sans-serif";
    if (Math.sin(t * 4) > -0.2) ctx.fillText("ENTER / SPACE  —  BROADCAST AGAIN", W / 2, 478);
  }

  function draw() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W, H);
    if (state === "title") drawTitle();
    else if (state === "gameover") drawGameOver();
    else if (state === "win") drawWin();
    else drawPlay();
    if (state !== "title") drawChyron();
    if (world.shopOpen && state === "play") drawShop();
  }

  function drawShop() {
    ctx.save();
    ctx.fillStyle = "rgba(4,8,10,0.78)";
    ctx.fillRect(ARENA.x, ARENA.y, ARENA.s, ARENA.s);
    ctx.fillStyle = "#0c1214";
    ctx.fillRect(134, 64, 688, 616);
    ctx.strokeStyle = "#5ef6ff";
    ctx.lineWidth = 2;
    ctx.strokeRect(134, 64, 688, 616);
    ctx.fillStyle = "#e8b44a";
    ctx.font = "bold 20px Trebuchet MS, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(world.pass >= 2 ? "PRIZE BOOTH  —  LOOP GEAR" : "PRIZE BOOTH", W / 2, 88);
    ctx.fillStyle = "#5ef6ff";
    ctx.font = "11px Courier New, monospace";
    ctx.fillText(`TKN ${world.tokens}    LV ${world.level}    PASS ${world.pass}    ESC / B CLOSES`, W / 2, 110);
    const heads = world.pass >= 2 ? ["SIGNAL+ ARMOR", "SIGNAL+ GUNS", "LOOP STOCK", "SIGNAL AMPS"] : ["ARMOR", "WEAPONS", "CHARACTER", "AMPS"];
    const cols = shopCols(world.pass, world.gear);
    const { ox, oy, cw, rh, cardW, cardH } = shopLayout();
    for (let c = 0; c < cols.length; c++) {
      ctx.fillStyle = "#5ef6ff";
      ctx.font = "bold 11px Courier New, monospace";
      ctx.textAlign = "center";
      ctx.fillText(heads[c], ox + c * cw + cardW / 2, oy - 12);
      for (let r = 0; r < cols[c].length; r++) {
        const item = cols[c][r];
        if (!item) continue;
        const x = ox + c * cw;
        const y = oy + r * rh;
        const sel = world.shopCol === c && world.shopRow === r;
        const st = itemState(c, item);
        ctx.fillStyle = sel ? "rgba(94,246,255,0.18)" : "rgba(255,255,255,0.04)";
        ctx.fillRect(x, y, cardW, cardH);
        ctx.strokeStyle = sel ? "#5ef6ff" : st.eq ? "#e8b44a" : "#334";
        ctx.strokeRect(x, y, cardW, cardH);
        ctx.fillStyle = "#f2f2f0";
        ctx.font = "bold 11px Trebuchet MS, sans-serif";
        ctx.textAlign = "left";
        const title = isStat(item) && st.rank ? `${item.name} +${st.rank}` : item.name;
        ctx.fillText(title, x + 8, y + 16);
        ctx.fillStyle = "#9aa";
        ctx.font = "9px Courier New, monospace";
        ctx.fillText(item.blurb, x + 8, y + 34);
        ctx.fillStyle = st.can ? "#e8b44a" : st.eq || st.owned || st.maxed ? "#667" : "#844";
        ctx.font = "bold 11px Courier New, monospace";
        const sold = st.owned && c === 2 && (item.id === "1up" || item.id === "1up2");
        let tag = `${st.price != null ? st.price : item.price} TKN`;
        if (st.eq) tag = "EQUIPPED";
        else if (st.maxed) tag = "MAXED";
        else if (sold) tag = "SOLD OUT";
        else if (st.owned && !isStat(item)) tag = "OWNED";
        ctx.fillText(tag, x + 8, y + 62);
      }
    }
    ctx.restore();
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
