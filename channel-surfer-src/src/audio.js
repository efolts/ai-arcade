const MUTE_KEY = "channel-surfer-mute";

export function createAudio() {
  const AC = typeof window !== "undefined" ? window.AudioContext || window.webkitAudioContext : null;
  let ctx = null;
  let master = null;
  let muffler = null;
  let hiss = null;
  let droneGain = null;
  let started = false;
  let muted = false;
  try {
    muted = localStorage.getItem(MUTE_KEY) === "1";
  } catch {
    muted = false;
  }

  function ensure() {
    if (!AC) return null;
    if (!ctx) {
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = muted ? 0 : 0.85;
      muffler = ctx.createBiquadFilter();
      muffler.type = "lowpass";
      muffler.frequency.value = 16000;
      muffler.connect(master);
      master.connect(ctx.destination);

      const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const noiseData = noiseBuf.getChannelData(0);
      for (let i = 0; i < noiseData.length; i++) noiseData[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuf;
      noise.loop = true;
      const band = ctx.createBiquadFilter();
      band.type = "highpass";
      band.frequency.value = 1200;
      hiss = ctx.createGain();
      hiss.gain.value = 0;
      noise.connect(band);
      band.connect(hiss);
      hiss.connect(muffler);
      noise.start();

      droneGain = ctx.createGain();
      droneGain.gain.value = 0.018;
      const a = ctx.createOscillator();
      const b = ctx.createOscillator();
      a.type = "sine";
      b.type = "triangle";
      a.frequency.value = 55;
      b.frequency.value = 82.4;
      a.connect(droneGain);
      b.connect(droneGain);
      droneGain.connect(muffler);
      a.start();
      b.start();
    }
    if (ctx.state === "suspended") ctx.resume();
    started = true;
    return ctx;
  }

  function env(duration, peak) {
    const g = ctx.createGain();
    const now = ctx.currentTime;
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), now + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, now + Math.max(0.03, duration));
    g.connect(muffler);
    return g;
  }

  function tone(freq, dur, type, peak, slide) {
    if (!started || !ctx || muted) return;
    const o = ctx.createOscillator();
    o.type = type;
    const now = ctx.currentTime;
    o.frequency.setValueAtTime(freq, now);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, slide), now + dur);
    o.connect(env(dur, peak));
    o.start();
    o.stop(now + dur + 0.03);
  }

  function noiseBurst(dur, peak, freq) {
    if (!started || !ctx || muted) return;
    const frames = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buffer = ctx.createBuffer(1, frames, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = freq;
    filter.Q.value = 0.7;
    const g = env(dur, peak);
    src.connect(filter);
    filter.connect(g);
    src.start();
  }

  return {
    ensure,
    get muted() {
      return muted;
    },
    toggle() {
      muted = !muted;
      if (master) master.gain.value = muted ? 0 : 0.85;
      try {
        localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
      } catch {
        /* private mode */
      }
      return muted;
    },
    setChannel(channel) {
      if (!started || !ctx) return;
      const now = ctx.currentTime;
      const freq = channel === "DEAD_AIR" ? 380 : channel === "STATIC" ? 3800 : 15000;
      muffler.frequency.linearRampToValueAtTime(freq, now + 0.07);
      hiss.gain.linearRampToValueAtTime(channel === "STATIC" ? 0.02 : 0, now + 0.08);
      droneGain.gain.linearRampToValueAtTime(channel === "DEAD_AIR" ? 0.028 : 0.016, now + 0.1);
    },
    play(name) {
      if (!started || muted) return;
      switch (name) {
        case "live":
          noiseBurst(0.045, 0.14, 2400);
          tone(940, 0.08, "square", 0.045, 360);
          break;
        case "static":
          noiseBurst(0.13, 0.22, 640);
          break;
        case "deny":
          tone(86, 0.09, "sine", 0.07, 48);
          break;
        case "switch-live":
          tone(523, 0.11, "square", 0.04);
          tone(784, 0.13, "square", 0.03);
          break;
        case "switch-static":
          noiseBurst(0.08, 0.1, 500);
          tone(190, 0.12, "sawtooth", 0.03);
          break;
        case "switch-dead":
          tone(74, 0.18, "sine", 0.07, 42);
          break;
        case "hit":
          tone(1500, 0.05, "square", 0.04, 480);
          break;
        case "hurt":
          noiseBurst(0.11, 0.16, 220);
          tone(120, 0.16, "sawtooth", 0.05, 60);
          break;
        case "death":
          noiseBurst(0.26, 0.18, 280);
          tone(210, 0.32, "triangle", 0.06, 48);
          break;
        case "pickup":
          tone(660, 0.08, "sine", 0.05);
          tone(990, 0.12, "sine", 0.04);
          break;
        case "ui":
          tone(480, 0.05, "square", 0.03);
          break;
        case "bolt":
          tone(300, 0.09, "square", 0.03, 130);
          break;
        case "nosignal":
          noiseBurst(0.16, 0.12, 180);
          break;
        default:
          break;
      }
    },
  };
}
