const KEY = "signal-muted";

let muted = false;
let ctx = null;

try {
  muted = localStorage.getItem(KEY) === "1";
} catch {
  muted = false;
}

function ac() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

export function isMuted() {
  return muted;
}

export function setMuted(v) {
  muted = !!v;
  try {
    localStorage.setItem(KEY, muted ? "1" : "0");
  } catch {
    /* ignore */
  }
}

export function toggleMute() {
  setMuted(!muted);
  return muted;
}

function beep(freq, dur, type = "square", gain = 0.04, slide = 0) {
  if (muted) return;
  const c = ac();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, c.currentTime);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), c.currentTime + dur);
  g.gain.setValueAtTime(gain, c.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
  o.connect(g);
  g.connect(c.destination);
  o.start();
  o.stop(c.currentTime + dur + 0.02);
}

export function sfx(name) {
  switch (name) {
    case "play":
      beep(420, 0.08, "square", 0.035, 80);
      break;
    case "attack":
      beep(180, 0.1, "sawtooth", 0.04, -60);
      break;
    case "power":
      beep(620, 0.12, "triangle", 0.03, 200);
      break;
    case "end":
      beep(240, 0.06, "square", 0.025, -80);
      break;
    case "win":
      beep(520, 0.18, "triangle", 0.04, 240);
      break;
    case "lose":
      beep(140, 0.28, "sawtooth", 0.04, -80);
      break;
    case "click":
      beep(760, 0.04, "square", 0.02);
      break;
    case "draw":
      beep(380, 0.07, "triangle", 0.03, 140);
      break;
    case "impact":
      beep(110, 0.08, "sawtooth", 0.045, -40);
      break;
    case "mesh":
      beep(880, 0.07, "triangle", 0.03, -220);
      break;
    case "death":
      beep(160, 0.16, "sawtooth", 0.04, -90);
      break;
    case "fatigue":
      beep(90, 0.14, "square", 0.04, -30);
      break;
    case "equip":
      beep(300, 0.1, "triangle", 0.03, 80);
      break;
    default:
      break;
  }
}
