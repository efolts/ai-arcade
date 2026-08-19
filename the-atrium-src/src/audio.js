let ac = null;
let master = null;
let musicTimer = 0;
let musicOn = false;
let muted = false;

function ctx() {
  if (!ac) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ac = new AC();
    master = ac.createGain();
    master.gain.value = 0.22;
    master.connect(ac.destination);
  }
  return ac;
}

export function unlockAudio() {
  const c = ctx();
  if (c && c.state === "suspended") c.resume();
}

export function toggleMute() {
  muted = !muted;
  if (master) master.gain.value = muted ? 0 : 0.22;
  return muted;
}

export function isMuted() {
  return muted;
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

const BASS = [110, 110, 82.4, 98, 110, 146.8, 82.4, 98];
let step = 0;

export function startMusic() {
  musicOn = true;
}

export function stopMusic() {
  musicOn = false;
}

export function tickMusic(dt) {
  if (!musicOn || muted || !ctx()) return;
  musicTimer += dt;
  if (musicTimer < 0.22) return;
  musicTimer = 0;
  const freq = BASS[step % BASS.length];
  step++;
  tone(freq, 0.18, "square", 0.035);
  if (step % 4 === 0) noise(0.06, 0.04, 80, 0.8);
}
