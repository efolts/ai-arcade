import atriumUrl from "./art/arena-topdown.jpg";
import foodUrl from "./art/rooms/food-court.jpg";
import fashionsUrl from "./art/rooms/fashions.jpg";
import radioUrl from "./art/rooms/radio.jpg";
import serviceUrl from "./art/rooms/service.jpg";
import bossUrl from "./art/rooms/boss.jpg";

export const GATES = [
  { name: "N", x: 0.5, y: 0.06, ang: 0 },
  { name: "S", x: 0.5, y: 0.94, ang: Math.PI },
  { name: "W", x: 0.07, y: 0.5, ang: -Math.PI / 2 },
  { name: "E", x: 0.93, y: 0.5, ang: Math.PI / 2 },
];

export const OPPOSITE = { N: "S", S: "N", E: "W", W: "E" };
export const INWARD = {
  N: { x: 0, y: 1 },
  S: { x: 0, y: -1 },
  W: { x: 1, y: 0 },
  E: { x: -1, y: 0 },
};

const WING_IDS = ["food", "fashions", "radio"];

function load(src) {
  const img = new Image();
  img.src = src;
  return img;
}

export const ROOMS = {
  atrium: {
    id: "atrium",
    name: "THE ATRIUM",
    short: "ATRIUM",
    chyron: "THE ATRIUM  //  ABANDONED MALL FEED",
    floor: load(atriumUrl),
    doors: { N: "food", S: "service", W: "fashions", E: "radio" },
    map: { c: 1, r: 1 },
    props: "atrium",
    grade: { mul: "#6ec8c8", mulA: 0.32, veil: "rgba(20,90,100,0.18)" },
    waves: [
      {
        title: "GET READY — LIVE FROM THE ATRIUM",
        ready: 2.4,
        queue: [
          { kind: "grunt", n: 3, gap: 0.65, gates: ["S", "E"] },
          { kind: "rusher", n: 1, gap: 0.2, gates: ["N"] },
          { kind: "mannequin", n: 1, gap: 0.2, gates: ["W"] },
          { kind: "shotgun", n: 1, gap: 0.2, gates: ["E"] },
        ],
      },
      {
        title: "THE FULL SET — EVERY KIND OF TROUBLE",
        ready: 1.1,
        queue: [
          { kind: "grunt", n: 2, gap: 0.4, gates: ["S"] },
          { kind: "rusher", n: 2, gap: 0.22, gates: ["N", "E"] },
          { kind: "mannequin", n: 2, gap: 0.45, gates: ["W"] },
          { kind: "shotgun", n: 1, gap: 0.2, gates: ["E"] },
          { kind: "security", n: 1, gap: 0.2, gates: ["S"] },
        ],
      },
    ],
  },
  food: {
    id: "food",
    name: "FOOD COURT",
    short: "FOOD CT",
    chyron: "FOOD COURT  //  SICK FLUORESCENTS",
    floor: load(foodUrl),
    doors: { S: "atrium" },
    map: { c: 1, r: 0 },
    props: "center",
    grade: { mul: "#d4c24a", mulA: 0.38, veil: "rgba(90,80,10,0.16)" },
    waves: [
      {
        title: "FOOD COURT — THEY SMELL THE GREASE",
        ready: 1.15,
        queue: [
          { kind: "rusher", n: 2, gap: 0.12, gates: ["N"] },
          { kind: "rusher", n: 2, gap: 0.12, gates: ["E"] },
          { kind: "rusher", n: 2, gap: 0.12, gates: ["W"] },
          { kind: "grunt", n: 1, gap: 0.2, gates: ["S"] },
        ],
      },
      {
        title: "TRAY LINE STAMPEDE",
        ready: 0.85,
        queue: [
          { kind: "rusher", n: 3, gap: 0.1, gates: ["N"] },
          { kind: "rusher", n: 3, gap: 0.1, gates: ["E"] },
          { kind: "rusher", n: 2, gap: 0.1, gates: ["W"] },
          { kind: "shotgun", n: 1, gap: 0.2, gates: ["S"] },
        ],
      },
      {
        title: "FOOD COURT FEEDING FRENZY",
        ready: 0.7,
        queue: [
          { kind: "rusher", n: 3, gap: 0.08, gates: ["N"] },
          { kind: "rusher", n: 3, gap: 0.08, gates: ["E"] },
          { kind: "rusher", n: 3, gap: 0.08, gates: ["W"] },
          { kind: "rusher", n: 2, gap: 0.08, gates: ["S"] },
          { kind: "shotgun", n: 2, gap: 0.35, gates: ["S", "E"] },
        ],
      },
    ],
  },
  fashions: {
    id: "fashions",
    name: "FASHIONS",
    short: "FASHIONS",
    chyron: "FASHIONS  //  ROSE MANNEQUINS",
    floor: load(fashionsUrl),
    doors: { E: "atrium" },
    map: { c: 0, r: 1 },
    props: "racks",
    grade: { mul: "#d4909a", mulA: 0.36, veil: "rgba(80,30,40,0.16)" },
    waves: [
      {
        title: "MANNEQUIN WINDOWS",
        ready: 1.15,
        queue: [
          { kind: "mannequin", n: 2, gap: 0.55, gates: ["W", "N"] },
          { kind: "grunt", n: 2, gap: 0.5, gates: ["S"] },
        ],
      },
      {
        title: "DISPLAY FLOOR — DO NOT TOUCH",
        ready: 0.85,
        queue: [
          { kind: "mannequin", n: 4, gap: 0.4, gates: ["W", "N", "S"] },
          { kind: "grunt", n: 1, gap: 0.3, gates: ["E"] },
        ],
      },
      {
        title: "MANNEQUINS ON AISLE FOUR",
        ready: 0.7,
        queue: [
          { kind: "mannequin", n: 6, gap: 0.28, gates: ["W", "N", "S"] },
          { kind: "shotgun", n: 1, gap: 0.2, gates: ["E"] },
        ],
      },
    ],
  },
  radio: {
    id: "radio",
    name: "RADIO",
    short: "RADIO",
    chyron: "RADIO SHACK  //  CRT WALL LIVE",
    floor: load(radioUrl),
    doors: { W: "atrium" },
    map: { c: 2, r: 1 },
    props: "counter",
    grade: { mul: "#3cb0b8", mulA: 0.4, veil: "rgba(10,50,60,0.2)" },
    waves: [
      {
        title: "TUBE GLOW — KEEP BACK",
        ready: 1.15,
        queue: [
          { kind: "shotgun", n: 2, gap: 0.55, gates: ["E", "N"] },
          { kind: "grunt", n: 2, gap: 0.45, gates: ["S"] },
        ],
      },
      {
        title: "STATIC SHOTGUNNERS",
        ready: 0.85,
        queue: [
          { kind: "shotgun", n: 3, gap: 0.42, gates: ["E", "N", "S"] },
          { kind: "grunt", n: 1, gap: 0.3, gates: ["W"] },
        ],
      },
      {
        title: "STATIC ON ALL FREQUENCIES",
        ready: 0.7,
        queue: [
          { kind: "shotgun", n: 4, gap: 0.35, gates: ["E", "N", "S"] },
          { kind: "grunt", n: 1, gap: 0.25, gates: ["W"] },
        ],
      },
    ],
  },
  service: {
    id: "service",
    name: "SERVICE",
    short: "SERVICE",
    chyron: "SERVICE CORRIDOR  //  SODIUM NIGHT",
    floor: load(serviceUrl),
    doors: { N: "atrium", S: "boss" },
    map: { c: 1, r: 2 },
    props: "corners",
    grade: { mul: "#d48840", mulA: 0.4, veil: "rgba(70,35,8,0.18)" },
    waves: [
      {
        title: "BACK OF HOUSE",
        ready: 1.15,
        queue: [
          { kind: "security", n: 1, gap: 0.2, gates: ["W"] },
          { kind: "shotgun", n: 1, gap: 0.25, gates: ["E"] },
          { kind: "grunt", n: 3, gap: 0.4, gates: ["E", "W"] },
        ],
      },
      {
        title: "SODIUM SWEEP",
        ready: 0.85,
        queue: [
          { kind: "security", n: 2, gap: 0.55, gates: ["W", "E"] },
          { kind: "shotgun", n: 1, gap: 0.25, gates: ["S"] },
          { kind: "grunt", n: 2, gap: 0.4, gates: ["S"] },
        ],
      },
      {
        title: "ALL UNITS TO SERVICE",
        ready: 0.7,
        queue: [
          { kind: "security", n: 3, gap: 0.45, gates: ["W", "E", "S"] },
          { kind: "shotgun", n: 1, gap: 0.25, gates: ["N"] },
        ],
      },
    ],
  },
  boss: {
    id: "boss",
    name: "DIRECTORY",
    short: "DIRECTORY",
    chyron: "DIRECTORY CORE  //  FINAL FEED",
    floor: load(bossUrl),
    doors: { N: "service" },
    map: { c: 1, r: 3 },
    props: "kiosks",
    grade: { mul: "#38d8e0", mulA: 0.42, veil: "rgba(10,70,80,0.22)" },
    waves: [
      {
        title: "DIRECTORY OVERRIDE",
        boss: true,
        ready: 1.5,
        queue: [{ kind: "boss", n: 1, gap: 0.15 }],
      },
    ],
  },
};

const TRASH = {
  atrium: { title: "STRAY SIGNAL — MIXED SET", ready: 1, queue: [{ kind: "rusher", n: 1, gap: 0.2, gates: ["N"] }, { kind: "mannequin", n: 1, gap: 0.35, gates: ["W"] }] },
  food: { title: "STRAY RUSHERS", ready: 1, queue: [{ kind: "rusher", n: 3, gap: 0.18, gates: ["N", "E", "W"] }] },
  fashions: { title: "STRAY MANNEQUINS", ready: 1, queue: [{ kind: "mannequin", n: 2, gap: 0.4, gates: ["W", "N"] }] },
  radio: { title: "STRAY STATIC", ready: 1, queue: [{ kind: "shotgun", n: 1, gap: 0.2, gates: ["E"] }, { kind: "grunt", n: 1, gap: 0.4, gates: ["N"] }] },
  service: { title: "STRAY SECURITY", ready: 1, queue: [{ kind: "security", n: 1, gap: 0.2, gates: ["W"] }] },
  boss: { title: "STRAY SIGNAL", ready: 1, queue: [{ kind: "rusher", n: 2, gap: 0.3 }] },
};

export const TRASH_WAVE = TRASH.atrium;

export function trashWaveFor(roomId) {
  return TRASH[roomId] || TRASH.atrium;
}

export function wingsCleared(cleared) {
  return WING_IDS.every((id) => cleared[id]);
}

export function doorDest(roomId, dir) {
  return ROOMS[roomId].doors[dir] || null;
}

export function doorOpen(roomId, dir, cleared, enterFrom) {
  const dest = doorDest(roomId, dir);
  if (!dest) return false;
  if (dest === "boss" && !wingsCleared(cleared)) return false;
  if (cleared[roomId]) return true;
  if (enterFrom === dir) return true;
  return false;
}

export function doorLocked(roomId, dir, cleared) {
  const dest = doorDest(roomId, dir);
  return dest === "boss" && !wingsCleared(cleared);
}

export function doorLabel(roomId, dir, cleared) {
  const dest = doorDest(roomId, dir);
  if (!dest) return "SEALED";
  if (doorLocked(roomId, dir, cleared)) return "LOCKED";
  return ROOMS[dest].short;
}

function stampLine(out, x0, y0, x1, y1, r, spacing) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  const n = Math.max(1, Math.round(len / spacing));
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    out.push({ x: x0 + dx * t, y: y0 + dy * t, r });
  }
}

/** radio.jpg is 1024² and cover-fits the square arena 1:1. Desk footprint from the paint. */
function radioDeskObstacles(arena) {
  const k = arena.s / 1024;
  const X = (px) => arena.x + px * k;
  const Y = (py) => arena.y + py * k;
  const out = [];
  const r = 22;
  const step = 13;
  // Art: closed SOUTH bar, arms run NORTH, mouth OPEN on the north.
  // Do not stamp a north lid — that was an invisible wall across the gap.
  stampLine(out, X(328), Y(648), X(696), Y(648), r, step);
  stampLine(out, X(348), Y(360), X(348), Y(648), r, step);
  stampLine(out, X(676), Y(360), X(676), Y(648), r, step);
  return out;
}

export function roomObstacles(roomId, arena) {
  const cx = arena.x + arena.s / 2;
  const cy = arena.y + arena.s / 2;
  const s = arena.s;
  const q = s * 0.22;
  const id = roomId;
  if (id === "atrium") {
    return [
      { x: cx, y: cy, r: 30 },
      { x: cx - q, y: cy - q, r: 20 },
      { x: cx + q, y: cy - q, r: 20 },
      { x: cx - q, y: cy + q, r: 20 },
      { x: cx + q, y: cy + q, r: 20 },
    ];
  }
  if (id === "food") return [{ x: cx, y: cy, r: 36 }];
  if (id === "fashions") {
    const racks = [-0.22, 0, 0.22].flatMap((oy) => [
      { x: cx - s * 0.2, y: cy + oy * s, r: 22 },
      { x: cx + s * 0.2, y: cy + oy * s, r: 22 },
    ]);
    return [
      { x: cx, y: cy, r: 30 },
      ...racks,
      { x: cx - q, y: cy - q, r: 16 },
      { x: cx + q, y: cy - q, r: 16 },
      { x: cx - q, y: cy + q, r: 16 },
      { x: cx + q, y: cy + q, r: 16 },
    ];
  }
  if (id === "radio") return radioDeskObstacles(arena);
  if (id === "service") {
    return [
      { x: arena.x + 70, y: arena.y + 70, r: 26 },
      { x: arena.x + s - 70, y: arena.y + 70, r: 24 },
      { x: arena.x + 70, y: arena.y + s - 70, r: 26 },
      { x: arena.x + s - 70, y: arena.y + s - 70, r: 24 },
    ];
  }
  if (id === "boss") {
    const d = s * 0.2;
    return [
      { x: cx, y: cy, r: 34 },
      { x: cx - d, y: cy - d, r: 22 },
      { x: cx + d, y: cy - d, r: 22 },
      { x: cx - d, y: cy + d, r: 22 },
      { x: cx + d, y: cy + d, r: 22 },
    ];
  }
  return [{ x: cx, y: cy, r: 28 }];
}

export function applyRoomGrade(ctx, roomId, arena) {
  const g = ROOMS[roomId].grade;
  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.globalAlpha = g.mulA;
  ctx.fillStyle = g.mul;
  ctx.fillRect(arena.x, arena.y, arena.s, arena.s);
  ctx.restore();
  ctx.save();
  ctx.fillStyle = g.veil;
  ctx.fillRect(arena.x, arena.y, arena.s, arena.s);
  ctx.restore();
}

export function drawMinimap(ctx, world, t, box) {
  const { x, y, w, h } = box;
  ctx.save();
  ctx.fillStyle = "#0a1012";
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = "rgba(94,246,255,0.45)";
  ctx.lineWidth = 2;
  ctx.strokeRect(x + 1, y + 1, w - 2, h - 2);
  ctx.strokeStyle = "rgba(94,246,255,0.12)";
  ctx.lineWidth = 1;
  for (let i = 4; i < h; i += 5) {
    ctx.beginPath();
    ctx.moveTo(x + 3, y + i);
    ctx.lineTo(x + w - 3, y + i);
    ctx.stroke();
  }

  ctx.fillStyle = "#5ef6ff";
  ctx.font = "bold 8px Courier New, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("MALL MAP", x + w / 2, y + 6);
  ctx.fillStyle = "#889";
  ctx.font = "7px Courier New, monospace";
  ctx.fillText("→ DIRECTORY", x + w / 2, y + 16);

  const nodes = [
    ["food", 1, 0],
    ["fashions", 0, 1],
    ["atrium", 1, 1],
    ["radio", 2, 1],
    ["service", 1, 2],
    ["boss", 1, 3],
  ];
  const ox = x + 18;
  const oy = y + 34;
  const cw = (w - 36) / 2;
  const rh = (h - 58) / 3;
  const pos = {};
  for (const [id, c, r] of nodes) pos[id] = { x: ox + c * cw, y: oy + r * rh };

  const links = [
    ["food", "atrium"],
    ["fashions", "atrium"],
    ["radio", "atrium"],
    ["atrium", "service"],
    ["service", "boss"],
  ];
  ctx.lineWidth = 2;
  for (const [a, b] of links) {
    const pa = pos[a];
    const pb = pos[b];
    const lit = world.cleared[a] || world.cleared[b] || world.roomId === a || world.roomId === b;
    ctx.strokeStyle = lit ? "rgba(94,246,255,0.55)" : "rgba(80,80,90,0.35)";
    ctx.beginPath();
    ctx.moveTo(pa.x, pa.y);
    ctx.lineTo(pb.x, pb.y);
    ctx.stroke();
  }

  for (const [id] of nodes) {
    const p = pos[id];
    const here = world.roomId === id;
    const done = !!world.cleared[id];
    const isBoss = id === "boss";
    const pulse = 0.55 + Math.sin(t * 8) * 0.45;
    ctx.beginPath();
    if (isBoss) {
      ctx.moveTo(p.x, p.y - 7);
      ctx.lineTo(p.x + 7, p.y);
      ctx.lineTo(p.x, p.y + 7);
      ctx.lineTo(p.x - 7, p.y);
      ctx.closePath();
    } else {
      ctx.arc(p.x, p.y, here ? 6 : 5, 0, Math.PI * 2);
    }
    if (here) ctx.fillStyle = `rgba(94,246,255,${0.55 + pulse * 0.4})`;
    else if (done) ctx.fillStyle = "#c8fff8";
    else if (isBoss && wingsCleared(world.cleared)) ctx.fillStyle = "#5ef6ff";
    else ctx.fillStyle = "#2a3034";
    ctx.fill();
    ctx.strokeStyle = here ? "#fff" : isBoss ? "#5ef6ff" : "#556";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  const here = pos[world.roomId];
  if (here) {
    ctx.fillStyle = "#5ef6ff";
    ctx.font = "bold 6px Courier New, monospace";
    ctx.textAlign = "center";
    ctx.fillText("YOU ARE HERE", here.x, here.y - 12);
  }

  const dest = wingsCleared(world.cleared) ? pos.boss : world.cleared.atrium ? pos.service : pos.atrium;
  const from = pos[world.roomId];
  if (from && dest && (from.x !== dest.x || from.y !== dest.y)) {
    const ang = Math.atan2(dest.y - from.y, dest.x - from.x);
    ctx.strokeStyle = "rgba(94,246,255,0.85)";
    ctx.fillStyle = "rgba(94,246,255,0.85)";
    ctx.lineWidth = 1;
    const tx = from.x + Math.cos(ang) * 14;
    const ty = from.y + Math.sin(ang) * 14;
    ctx.beginPath();
    ctx.moveTo(from.x + Math.cos(ang) * 8, from.y + Math.sin(ang) * 8);
    ctx.lineTo(tx, ty);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(tx - Math.cos(ang - 0.5) * 5, ty - Math.sin(ang - 0.5) * 5);
    ctx.lineTo(tx - Math.cos(ang + 0.5) * 5, ty - Math.sin(ang + 0.5) * 5);
    ctx.closePath();
    ctx.fill();
  }

  ctx.fillStyle = "#667";
  ctx.font = "6px Courier New, monospace";
  ctx.textAlign = "center";
  ctx.fillText(ROOMS[world.roomId].short, x + w / 2, y + h - 12);
  ctx.restore();
}
