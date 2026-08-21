let ac = null;
let master = null;
let muted = false;
let theme = null;
let wantPlay = false;

const MUTE_KEY = "atrium-muted";
const THEME_URL = "./atrium-theme.mp3";
const MUSIC_VOL = 0.16;
const SFX_VOL = 0.22;

try {
  muted = localStorage.getItem(MUTE_KEY) === "1";
} catch {
  muted = false;
}

function persistMute() {
  try {
    localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
  } catch {
    /* ignore */
  }
}

function ctx() {
  if (!ac) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ac = new AC();
    master = ac.createGain();
    master.gain.value = muted ? 0 : SFX_VOL;
    master.connect(ac.destination);
  }
  return ac;
}

function ensureTheme() {
  if (theme) return theme;
  theme = new Audio(THEME_URL);
  theme.loop = true;
  theme.preload = "auto";
  theme.volume = muted ? 0 : MUSIC_VOL;
  return theme;
}

function applyMute() {
  if (master) master.gain.value = muted ? 0 : SFX_VOL;
  if (!theme) return;
  if (muted) {
    theme.pause();
  } else {
    theme.volume = MUSIC_VOL;
  }
}

export function unlockAudio() {
  const c = ctx();
  if (c && c.state === "suspended") c.resume();
  if (wantPlay && !muted) startMusic();
}

export function startMusic() {
  wantPlay = true;
  const a = ensureTheme();
  applyMute();
  if (muted) return;
  const p = a.play();
  if (p && p.catch) p.catch(() => {});
}

export function stopMusic() {
  /* Theme keeps looping through game over / shop / pass. Mute is the only stop. */
}

export function tickMusic() {
  /* MP3 loop; old synth bed retired so it cannot substitute for the theme. */
}

export function toggleMute() {
  muted = !muted;
  persistMute();
  applyMute();
  if (!muted && wantPlay) startMusic();
  return muted;
}

export function isMuted() {
  return muted;
}

export function armThemeUnlock() {
  const kick = () => {
    unlockAudio();
    startMusic();
  };
  window.addEventListener("pointerdown", kick);
  window.addEventListener("keydown", kick);
  window.addEventListener("gamepadconnected", kick);
}

export function pollThemeUnlock() {
  if (!wantPlay || muted || (theme && !theme.paused)) return;
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  for (const pad of pads) {
    if (!pad) continue;
    for (const b of pad.buttons) {
      if (b && b.pressed) {
        unlockAudio();
        startMusic();
        return;
      }
    }
  }
}

function envGain(duration, peak = 0.2, attack = 0.005) {
  const c = ctx();
  if (!c || muted) return null;
  const g = c.createGain();
  g.connect(master);
  const t = c.currentTime;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  return { g, t, c };
}

function tone(freq, duration, type = "square", peak = 0.12) {
  const e = envGain(duration, peak);
  if (!e) return;
  const o = e.c.createOscillator();
  o.type = type;
  o.frequency.setValueAtTime(freq, e.t);
  o.connect(e.g);
  o.start(e.t);
  o.stop(e.t + duration);
}

function noise(duration, peak = 0.12, freq = 1200, q = 0.8) {
  const e = envGain(duration, peak, 0.002);
  if (!e) return;
  const n = e.c.createBufferSource();
  const buf = e.c.createBuffer(1, Math.floor(e.c.sampleRate * duration), e.c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  n.buffer = buf;
  const f = e.c.createBiquadFilter();
  f.type = "bandpass";
  f.frequency.value = freq;
  f.Q.value = q;
  n.connect(f);
  f.connect(e.g);
  n.start(e.t);
  n.stop(e.t + duration);
}

export const sfx = {
  shoot() {
    tone(980, 0.045, "square", 0.07);
    noise(0.03, 0.05, 2400, 0.6);
  },
  hit() {
    tone(180, 0.08, "sawtooth", 0.1);
    noise(0.07, 0.1, 700, 0.5);
  },
  crunch() {
    noise(0.18, 0.16, 900, 0.4);
    tone(90, 0.16, "triangle", 0.08);
  },
  playerHit() {
    noise(0.25, 0.2, 400, 0.3);
    tone(70, 0.22, "sawtooth", 0.14);
  },
  pickup() {
    tone(520, 0.08, "square", 0.1);
    setTimeout(() => tone(780, 0.1, "square", 0.1), 50);
    setTimeout(() => tone(1040, 0.12, "square", 0.1), 100);
  },
  bomb() {
    noise(0.45, 0.22, 300, 0.2);
    tone(60, 0.4, "sine", 0.16);
  },
  roar() {
    noise(0.7, 0.14, 220, 0.7);
    noise(0.55, 0.1, 1400, 0.4);
  },
  wave() {
    tone(220, 0.15, "square", 0.08);
    setTimeout(() => tone(330, 0.18, "square", 0.08), 90);
    setTimeout(() => this.roar(), 40);
  },
  boss() {
    tone(55, 0.5, "sawtooth", 0.12);
    noise(0.6, 0.14, 180, 0.8);
  },
  life() {
    tone(440, 0.1, "triangle", 0.1);
    setTimeout(() => tone(660, 0.12, "triangle", 0.1), 80);
  },
  ui() {
    tone(640, 0.06, "square", 0.07);
  },
  coin() {
    tone(880, 0.06, "square", 0.08);
    setTimeout(() => tone(1180, 0.08, "square", 0.08), 40);
  },
  level() {
    tone(330, 0.1, "square", 0.1);
    setTimeout(() => tone(440, 0.1, "square", 0.1), 70);
    setTimeout(() => tone(660, 0.16, "square", 0.1), 140);
  },
  shop() {
    tone(196, 0.08, "triangle", 0.08);
    setTimeout(() => tone(262, 0.1, "triangle", 0.08), 60);
  },
};
