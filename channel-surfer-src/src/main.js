import "./style.css";
import { createAudio } from "./audio.js";
import { createGame } from "./game.js";
import { channelFromCode } from "./sim.js";

const W = 960;
const H = 780;
const stage = document.getElementById("stage");
const canvas = document.getElementById("view");
const audio = createAudio();

let game;
try {
  game = createGame(canvas, audio);
} catch (err) {
  const node = document.getElementById("boot-error");
  if (node) node.textContent = "The picture failed to come up. " + (err && err.message ? err.message : "");
  throw err;
}

const held = new Set();
const mouse = { lookX: 0, lookY: 0, fire: false, channel: null, cycle: 0, use: false };
let bannerSerial = -1;

const healthFill = document.getElementById("health-fill");
const healthNum = document.getElementById("health-num");
const signalFill = document.getElementById("signal-fill");
const signalNum = document.getElementById("signal-num");
const chName = document.getElementById("ch-name");
const remoteReadout = document.getElementById("remote-readout");
const enemyCount = document.getElementById("enemy-count");
const roomLabel = document.getElementById("room-label");
const countLabel = document.getElementById("count-label");
const riteEl = document.getElementById("rite");
const promptEl = document.getElementById("prompt");
const bossWrap = document.getElementById("boss-wrap");
const bossFill = document.getElementById("boss-fill");
const tipEl = document.getElementById("tip");
const bannerEl = document.getElementById("banner");
const hurtEl = document.getElementById("hurt");
const flashEl = document.getElementById("flash");
const panel = document.getElementById("panel");
const panelKicker = document.getElementById("panel-kicker");
const panelTitle = document.getElementById("panel-title");
const panelBody = document.getElementById("panel-body");
const panelMeta = document.getElementById("panel-meta");
const primary = document.getElementById("panel-primary");
const secondary = document.getElementById("panel-secondary");

function fit() {
  const scale = Math.min(window.innerWidth / W, window.innerHeight / H);
  stage.style.transform = `scale(${Math.max(0.05, scale)})`;
}
fit();
window.addEventListener("resize", fit);
window.addEventListener("orientationchange", fit);

function lock() {
  if (document.pointerLockElement !== canvas) canvas.requestPointerLock();
}

function confirm() {
  audio.ensure();
  if (game.mode === "title") {
    game.start();
    lock();
  } else if (game.mode === "pause") {
    game.resume();
    lock();
  } else if (game.mode === "clear" || game.mode === "dead") {
    game.replay();
    lock();
  }
}

document.getElementById("start").addEventListener("click", (event) => {
  event.stopPropagation();
  confirm();
});
primary.addEventListener("click", (event) => {
  event.stopPropagation();
  confirm();
});
secondary.addEventListener("click", (event) => {
  event.stopPropagation();
  audio.ensure();
  if (game.mode === "pause" || game.mode === "clear" || game.mode === "dead") {
    if (game.mode === "pause") game.replay();
    else game.toTitle();
    if (game.mode === "play") lock();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.repeat) return;
  if (event.code === "Space" || event.code.startsWith("Arrow")) event.preventDefault();
  held.add(event.code);
  const channel = channelFromCode(event.code);
  if (channel && game.mode === "play") mouse.channel = channel;
  if (event.code === "KeyQ" && game.mode === "play") mouse.cycle += 1;
  if (event.code === "KeyE" && game.mode === "play") mouse.use = true;
  if (event.code === "KeyM") audio.toggle();
  if (event.code === "Escape" && game.mode === "play") game.pause();
  if (event.code === "Enter") confirm();
  if (event.code === "KeyR" && (game.mode === "pause" || game.mode === "clear" || game.mode === "dead")) {
    audio.ensure();
    game.replay();
    lock();
  }
});
window.addEventListener("keyup", (event) => held.delete(event.code));

window.addEventListener("mousemove", (event) => {
  if (game.mode !== "play") return;
  mouse.lookX += event.movementX || 0;
  mouse.lookY += event.movementY || 0;
});
window.addEventListener("mousedown", (event) => {
  if (event.button !== 0) return;
  if (event.target.closest && event.target.closest("button")) return;
  if (game.mode === "title") {
    confirm();
    return;
  }
  if (game.mode === "play") {
    lock();
    mouse.fire = true;
  }
});
window.addEventListener("mouseup", (event) => {
  if (event.button === 0) mouse.fire = false;
});
window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    if (game.mode !== "play" || Math.abs(event.deltaY) < 4) return;
    mouse.cycle += event.deltaY > 0 ? 1 : -1;
  },
  { passive: false }
);
window.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("pointerlockchange", () => {
  if (document.pointerLockElement !== canvas && game.mode === "play") game.pause();
});
window.addEventListener("blur", () => {
  if (game.mode === "play") {
    game.pause();
    if (document.pointerLockElement) document.exitPointerLock();
  }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden && game.mode === "play") {
    game.pause();
    if (document.pointerLockElement) document.exitPointerLock();
  }
});

function fmt(seconds) {
  if (!(seconds > 0)) return "—";
  return seconds.toFixed(1) + "s";
}

function paint(hud) {
  const channelClass = hud.channel === "DEAD_AIR" ? "ch-dead" : hud.channel === "STATIC" ? "ch-static" : "ch-live";
  stage.className = `mode-${hud.mode} ${channelClass}`;
  healthFill.style.width = Math.max(0, hud.health) + "%";
  signalFill.style.width = Math.max(0, hud.signal) + "%";
  healthNum.textContent = String(Math.ceil(hud.health));
  signalNum.textContent = String(Math.ceil(hud.signal));
  chName.textContent = hud.channel === "DEAD_AIR" ? "DEAD AIR" : hud.channel;
  if (remoteReadout) remoteReadout.textContent = `${hud.remote || ""}  ${hud.ammo ?? 0}/${hud.ammoMax ?? 0}`;
  enemyCount.textContent = String(hud.enemies);
  roomLabel.textContent = hud.roomLabel || "COURT";
  countLabel.textContent = hud.countLabel || "TESSERA";
  riteEl.textContent = hud.rite || "";
  promptEl.textContent = hud.prompt || "";
  promptEl.className = hud.promptKind || "";
  if (hud.boss == null) bossWrap.classList.remove("on");
  else {
    bossWrap.classList.add("on");
    bossFill.style.width = Math.max(0, Math.min(100, hud.boss * 100)) + "%";
  }
  tipEl.textContent = hud.tip || "";
  hurtEl.style.opacity = hud.health < 35 ? "0.28" : "0";
  if (hud.hurt > 0.2) hurtEl.style.opacity = "0.55";
  flashEl.style.opacity = String(Math.max(0, Math.min(0.7, hud.flash)));
  if (hud.bannerSerial !== bannerSerial) {
    bannerSerial = hud.bannerSerial;
    if (hud.banner) {
      bannerEl.textContent = hud.banner;
      bannerEl.classList.remove("show");
      void bannerEl.offsetWidth;
      bannerEl.classList.add("show");
    }
  }
  const showPanel = hud.mode === "pause" || hud.mode === "clear" || hud.mode === "dead";
  panel.hidden = !showPanel;
  if (!showPanel) return;
  if (hud.mode === "pause") {
    panelKicker.textContent = "KRCD 7 · STILL ON AIR";
    panelTitle.textContent = "PAUSED";
    panelBody.textContent = "Esc released the mouse. Click resume to lock it again.";
    panelMeta.textContent = hud.muted ? "MUTED" : "";
    primary.textContent = "Resume";
    secondary.textContent = "Restart";
  } else if (hud.mode === "clear") {
    panelKicker.textContent = "KRCD 7 · RADIO";
    panelTitle.textContent = "WING CLEAR";
    panelBody.textContent = "The Visor Priest is off the air. The mall is still broadcasting.";
    panelMeta.textContent = `TIME ${fmt(hud.time)} · BEST ${fmt(hud.best)} · ${hud.swaps} CHANNEL CHANGES`;
    primary.textContent = "Replay";
    secondary.textContent = "Title";
  } else if (hud.checkpoint) {
    panelKicker.textContent = "KRCD 7 · RADIO";
    panelTitle.textContent = "WING LOST";
    panelBody.textContent = "The court stays clear. Retry from the radio door.";
    panelMeta.textContent = `TIME ${fmt(hud.time)} · BEST ${fmt(hud.best)}`;
    primary.textContent = "Retry wing";
    secondary.textContent = "Title";
  } else {
    panelKicker.textContent = "KRCD 7 · NO CARRIER";
    panelTitle.textContent = "SIGNAL LOST";
    panelBody.textContent = "The court keeps the carrier. Retune and walk it again.";
    panelMeta.textContent = `BEST ${fmt(hud.best)}`;
    primary.textContent = "Retry";
    secondary.textContent = "Title";
  }
}

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (!document.hidden) {
    game.update(dt, {
      forward: held.has("KeyW"),
      back: held.has("KeyS"),
      left: held.has("KeyA"),
      right: held.has("KeyD"),
      lookX: mouse.lookX,
      lookY: mouse.lookY,
      fireDown: mouse.fire && game.mode === "play",
      channel: mouse.channel,
      cycle: mouse.cycle,
      use: mouse.use,
    });
    paint(game.hud());
  }
  mouse.lookX = 0;
  mouse.lookY = 0;
  mouse.channel = null;
  mouse.cycle = 0;
  mouse.use = false;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
