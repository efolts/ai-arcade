export function createInput(canvas, sticks) {
  const keys = new Set();
  const mouse = { x: 480, y: 390, down: false, clicked: false, moved: false, lastMove: 0 };
  const pad = { mx: 0, my: 0, ax: 0, ay: 0, fire: false, connected: false };
  const touch = {
    active: false,
    move: { x: 0, y: 0 },
    aim: { x: 0, y: 0 },
    firing: false,
  };

  const keyMap = {
    KeyW: "up",
    KeyA: "left",
    KeyS: "down",
    KeyD: "right",
    ArrowUp: "up",
    ArrowLeft: "left",
    ArrowDown: "down",
    ArrowRight: "right",
    Space: "fire",
    KeyZ: "fire",
    KeyJ: "fire",
    KeyK: "fire",
    Enter: "start",
    KeyM: "mute",
    KeyP: "pause",
    Escape: "esc",
  };

  function canvasPoint(ev) {
    const r = canvas.getBoundingClientRect();
    return {
      x: ((ev.clientX - r.left) / r.width) * canvas.width,
      y: ((ev.clientY - r.top) / r.height) * canvas.height,
    };
  }

  let startTap = false;
  window.addEventListener(
    "keydown",
    (e) => {
      if (!e.repeat && (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "Space")) {
        startTap = true;
        e.preventDefault();
      }
      const k = keyMap[e.code];
      if (!k) return;
      if (e.repeat && (k === "start" || k === "mute" || k === "esc")) return;
      keys.add(k);
      if (k === "fire" || k === "start") e.preventDefault();
    },
    true,
  );
  window.addEventListener("keyup", (e) => {
    const k = keyMap[e.code];
    if (k) keys.delete(k);
  });

  canvas.addEventListener("mousemove", (e) => {
    const p = canvasPoint(e);
    mouse.x = p.x;
    mouse.y = p.y;
    mouse.moved = true;
    mouse.lastMove = performance.now();
  });
  function onDown(e) {
    if (e.button != null && e.button !== 0) return;
    mouse.down = true;
    mouse.clicked = true;
    if (e.clientX != null) {
      const p = canvasPoint(e);
      mouse.x = p.x;
      mouse.y = p.y;
    }
  }
  canvas.addEventListener("mousedown", onDown);
  window.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
      mouse.down = true;
      mouse.clicked = true;
    }
  });
  window.addEventListener("mouseup", () => {
    mouse.down = false;
  });
  canvas.addEventListener("contextmenu", (e) => e.preventDefault());

  function bindStick(el, which) {
    const knob = el.querySelector("i");
    const active = new Map();

    function update(id, clientX, clientY) {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      let dx = clientX - cx;
      let dy = clientY - cy;
      const max = r.width * 0.36;
      const mag = Math.hypot(dx, dy) || 1;
      if (mag > max) {
        dx = (dx / mag) * max;
        dy = (dy / mag) * max;
      }
      knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      const nx = dx / max;
      const ny = dy / max;
      if (which === "move") {
        touch.move.x = nx;
        touch.move.y = ny;
      } else {
        touch.aim.x = nx;
        touch.aim.y = ny;
        touch.firing = nx * nx + ny * ny > 0.08;
      }
      active.set(id, true);
    }

    function clear(id) {
      active.delete(id);
      if (active.size) return;
      knob.style.transform = "translate(-50%, -50%)";
      if (which === "move") {
        touch.move.x = 0;
        touch.move.y = 0;
      } else {
        touch.aim.x = 0;
        touch.aim.y = 0;
        touch.firing = false;
      }
    }

    el.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        for (const t of e.changedTouches) update(t.identifier, t.clientX, t.clientY);
      },
      { passive: false },
    );
    el.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault();
        for (const t of e.changedTouches) update(t.identifier, t.clientX, t.clientY);
      },
      { passive: false },
    );
    const end = (e) => {
      for (const t of e.changedTouches) clear(t.identifier);
    };
    el.addEventListener("touchend", end);
    el.addEventListener("touchcancel", end);
  }

  bindStick(sticks.left, "move");
  bindStick(sticks.right, "aim");

  window.addEventListener(
    "touchstart",
    () => {
      touch.active = true;
      sticks.root.hidden = false;
    },
    { passive: true },
  );

  if (window.matchMedia("(pointer: coarse)").matches) {
    touch.active = true;
    sticks.root.hidden = false;
  }

  function pollGamepad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = pads[0];
    if (!gp) {
      pad.connected = false;
      pad.mx = pad.my = pad.ax = pad.ay = 0;
      pad.fire = false;
      return;
    }
    pad.connected = true;
    const dead = (v) => (Math.abs(v) < 0.22 ? 0 : v);
    pad.mx = dead(gp.axes[0] || 0);
    pad.my = dead(gp.axes[1] || 0);
    pad.ax = dead(gp.axes[2] || 0);
    pad.ay = dead(gp.axes[3] || 0);
    pad.fire =
      (gp.buttons[7] && gp.buttons[7].pressed) ||
      (gp.buttons[5] && gp.buttons[5].pressed) ||
      pad.ax * pad.ax + pad.ay * pad.ay > 0.12;
  }

  const consumed = new Set();

  return {
    keys,
    mouse,
    pad,
    touch,
    pollGamepad,
    pressed(name) {
      return keys.has(name);
    },
    consume(name) {
      if (!keys.has(name) || consumed.has(name)) return false;
      consumed.add(name);
      return true;
    },
    consumeStart() {
      if (!startTap) return false;
      startTap = false;
      return true;
    },
    endFrame() {
      for (const k of consumed) {
        if (!keys.has(k)) consumed.delete(k);
      }
    },
    keyboardMove() {
      let x = 0;
      let y = 0;
      if (keys.has("left")) x -= 1;
      if (keys.has("right")) x += 1;
      if (keys.has("up")) y -= 1;
      if (keys.has("down")) y += 1;
      return { x, y };
    },
  };
}
