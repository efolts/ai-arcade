/** Broadcast Echo. A short radio-wing tape, replayed as amber ghosts. Pure: no renderer. */

export const ECHO_TUNING = {
  maxShots: 12,
  recordWindow: 10,
  boltDamage: 8,
  identBeats: 4,
  identGap: 0.85,
  identLead: 0.4,
};

export function createEcho() {
  return {
    recording: false,
    t: 0,
    shots: [],
    sealed: false,
    playing: false,
    playT: 0,
    fired: 0,
    schedule: [],
  };
}

export function beginEcho(echo) {
  if (!echo || echo.sealed) return echo || createEcho();
  return { ...echo, recording: true };
}

export function noteEchoShot(echo, channel) {
  if (!echo.recording || echo.sealed) return echo;
  if (echo.shots.length >= ECHO_TUNING.maxShots) return echo;
  if (echo.t > ECHO_TUNING.recordWindow) return echo;
  return { ...echo, shots: echo.shots.concat({ t: echo.t, channel }) };
}

export function tickEchoRecord(echo, dt) {
  if (!echo.recording || echo.sealed) return echo;
  const t = echo.t + Math.max(0, dt);
  if (t >= ECHO_TUNING.recordWindow) {
    return { ...echo, t: ECHO_TUNING.recordWindow, recording: false, sealed: true };
  }
  return { ...echo, t };
}

export function sealEcho(echo) {
  return { ...echo, recording: false, sealed: true };
}

export function echoSchedule(echo) {
  if (echo.shots.length) return echo.shots.map((shot) => ({ t: shot.t, channel: shot.channel }));
  const beats = [];
  for (let i = 0; i < ECHO_TUNING.identBeats; i++) {
    beats.push({
      t: ECHO_TUNING.identLead + i * ECHO_TUNING.identGap,
      channel: "LIVE",
      ident: true,
    });
  }
  return beats;
}

export function startEchoPlayback(echo) {
  const sealed = sealEcho(echo);
  return {
    ...sealed,
    playing: true,
    playT: 0,
    fired: 0,
    schedule: echoSchedule(sealed),
  };
}

export function tickEchoPlay(echo, dt) {
  if (!echo.playing) return { echo, shots: [] };
  const playT = echo.playT + Math.max(0, dt);
  const schedule = echo.schedule || [];
  const shots = [];
  let fired = echo.fired || 0;
  while (fired < schedule.length && schedule[fired].t <= playT) {
    shots.push(schedule[fired]);
    fired += 1;
  }
  return {
    echo: { ...echo, playT, fired, playing: fired < schedule.length },
    shots,
  };
}
