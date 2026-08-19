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
      { title: "GET READY / THEY'RE LIVE", ready: 3, queue: [{ kind: "grunt", n: 5, gap: 1.55, gates: ["S", "E"] }] },
      { title: "THEY'RE IN THE ATRIUM", queue: [{ kind: "grunt", n: 6, gap: 0.55 }, { kind: "rusher", n: 4, gap: 0.5 }] },
      { title: "LAST CALL — ATRIUM", queue: [{ kind: "shotgun", n: 3, gap: 0.7 }, { kind: "grunt", n: 4, gap: 0.45 }] },
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
      { title: "TRAY LINE HOSTILES", queue: [{ kind: "grunt", n: 6, gap: 0.5, gates: ["N", "E", "W"] }] },
      { title: "FOOD COURT RUSHERS", queue: [{ kind: "rusher", n: 6, gap: 0.38 }, { kind: "grunt", n: 3, gap: 0.55 }] },
      { title: "CLOSING TIME", queue: [{ kind: "shotgun", n: 3, gap: 0.65 }, { kind: "rusher", n: 3, gap: 0.45 }] },
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
      { title: "MANNEQUIN AISLE", queue: [{ kind: "grunt", n: 6, gap: 0.48, gates: ["W", "N", "S"] }] },
      { title: "FITTING ROOM SHOTGUNS", queue: [{ kind: "shotgun", n: 3, gap: 0.7 }, { kind: "grunt", n: 4, gap: 0.5 }] },
      { title: "SECURITY ON THE FLOOR", queue: [{ kind: "security", n: 1, gap: 0.2 }, { kind: "rusher", n: 4, gap: 0.45 }] },
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
      { title: "STATIC ON AISLE THREE", queue: [{ kind: "rusher", n: 6, gap: 0.4, gates: ["E", "N", "S"] }] },
      { title: "TUBE GLOW SHOTGUNS", queue: [{ kind: "shotgun", n: 4, gap: 0.6 }, { kind: "grunt", n: 3, gap: 0.5 }] },
      { title: "SIGN-OFF", queue: [{ kind: "security", n: 1, gap: 0.2 }, { kind: "rusher", n: 4, gap: 0.4 }] },
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
      { title: "BACK OF HOUSE", queue: [{ kind: "grunt", n: 6, gap: 0.45, gates: ["W", "E"] }] },
      { title: "LOADING DOCK RUSHERS", queue: [{ kind: "rusher", n: 6, gap: 0.35 }, { kind: "shotgun", n: 2, gap: 0.7 }] },
      { title: "KEY THE SOUTH LOCK", queue: [{ kind: "security", n: 1, gap: 0.2 }, { kind: "shotgun", n: 2, gap: 0.65 }, { kind: "grunt", n: 3, gap: 0.45 }] },
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
        ready: 1.4,
        queue: [{ kind: "boss", n: 1, gap: 0.15 }, { kind: "rusher", n: 4, gap: 1.2 }],
      },
    ],
  },
};

export const TRASH_WAVE = {
  title: "STRAY SIGNAL",
  queue: [{ kind: "grunt", n: 2, gap: 0.9 }],
};

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
  if (id === "radio") {
    return [
      { x: cx, y: cy + 8, r: 28 },
      { x: cx - 34, y: cy + 18, r: 20 },
      { x: cx + 34, y: cy + 18, r: 20 },
    ];
  }
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
