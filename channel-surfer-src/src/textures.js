import * as THREE from "three";

function canvasTex(w, h, draw, repeatX = 1, repeatY = 1) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  draw(canvas.getContext("2d"), w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 8;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  return tex;
}

function noise(g, w, h, count, color, size) {
  g.fillStyle = color;
  for (let i = 0; i < count; i++) {
    const x = (i * 97) % w;
    const y = (i * 53) % h;
    g.fillRect(x, y, size, size);
  }
}

function linearTex(canvas, repeatX = 1, repeatY = 1) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.NoColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 4;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  return tex;
}

function fieldTex(w, h, sample, repeatX = 1, repeatY = 1) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const [r, g, b] = sample(x, y, w, h);
      const i = (y * w + x) * 4;
      img.data[i] = r;
      img.data[i + 1] = g;
      img.data[i + 2] = b;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return linearTex(canvas, repeatX, repeatY);
}

function heightToNormal(w, h, heightAt, strength, repeatX = 1, repeatY = 1) {
  const hgt = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) hgt[y * w + x] = heightAt(x, y, w, h);
  }
  return fieldTex(
    w,
    h,
    (x, y) => {
      const l = hgt[y * w + ((x + w - 1) % w)];
      const r = hgt[y * w + ((x + 1) % w)];
      const u = hgt[((y + h - 1) % h) * w + x];
      const d = hgt[((y + 1) % h) * w + x];
      let nx = (l - r) * strength;
      let ny = (u - d) * strength;
      const nz = 1;
      const len = Math.hypot(nx, ny, nz) || 1;
      return [(nx / len) * 127.5 + 127.5, (ny / len) * 127.5 + 127.5, (nz / len) * 127.5 + 127.5];
    },
    repeatX,
    repeatY
  );
}

function roughTex(w, h, roughAt, repeatX = 1, repeatY = 1) {
  return fieldTex(
    w,
    h,
    (x, y) => {
      const v = Math.max(0, Math.min(1, roughAt(x, y, w, h))) * 255;
      return [v, v, v];
    },
    repeatX,
    repeatY
  );
}

export function makeTextures() {
  const floor = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = "#5c564c";
    g.fillRect(0, 0, w, h);
    const tile = 64;
    for (let y = 0; y < h; y += tile) {
      for (let x = 0; x < w; x += tile) {
        const n = ((x * 3 + y * 7) % 17) / 17;
        const shade = n > 0.66 ? "#6a6358" : n > 0.33 ? "#574f46" : "#4e4840";
        g.fillStyle = shade;
        g.fillRect(x + 2, y + 2, tile - 4, tile - 4);
        g.fillStyle = "rgba(20,16,12,0.35)";
        g.fillRect(x, y, tile, 2);
        g.fillRect(x, y, 2, tile);
      }
    }
    g.fillStyle = "rgba(30,22,14,0.28)";
    g.beginPath();
    g.ellipse(48, 180, 28, 10, 0.4, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.ellipse(190, 60, 22, 8, -0.5, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "rgba(90,70,40,0.18)";
    g.fillRect(8, 8, 18, 6);
  }, 8, 6);

  const wall = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = "#c8bfb2";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#b3a898";
    for (let x = 0; x < w; x += 64) g.fillRect(x, 0, 3, h);
    g.fillStyle = "#9c9184";
    g.fillRect(0, 168, w, 10);
    g.fillStyle = "#6e655c";
    g.fillRect(0, 214, w, 42);
    g.fillStyle = "#8a8176";
    g.fillRect(0, 210, w, 6);
    g.fillStyle = "rgba(70,50,30,0.12)";
    for (let i = 0; i < 20; i++) g.fillRect((i * 41) % w, 20 + ((i * 17) % 120), 16, 5);
    noise(g, w, h, 30, "rgba(255,255,255,0.04)", 2);
  }, 3, 2);

  const trim = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#8d8478";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#756c62";
    for (let x = 0; x < w; x += 16) g.fillRect(x, 0, 2, h);
    g.fillStyle = "rgba(40,30,20,0.2)";
    g.fillRect(0, h - 18, w, 18);
    g.fillStyle = "#a39888";
    g.fillRect(0, 8, w, 4);
  }, 2, 2);

  const ceiling = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#b7b1a6";
    g.fillRect(0, 0, w, h);
    g.strokeStyle = "#8e877c";
    g.lineWidth = 3;
    g.strokeRect(1, 1, w - 2, h - 2);
    g.fillStyle = "#c9c3b6";
    g.fillRect(8, 8, w - 16, h - 16);
    g.fillStyle = "rgba(80,70,50,0.15)";
    g.fillRect(18, 40, 30, 8);
    g.fillRect(70, 80, 22, 6);
  }, 6, 6);

  const wood = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#5c3a22";
    g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 3) {
      const shade = 70 + ((y * 17) % 50);
      g.strokeStyle = `rgb(${shade + 36}, ${shade - 4}, ${shade - 32})`;
      g.beginPath();
      g.moveTo(0, y);
      g.quadraticCurveTo(w * 0.5, y + ((y % 9) - 4), w, y);
      g.stroke();
    }
    g.fillStyle = "rgba(30,16,6,0.35)";
    g.fillRect(18, 0, 4, h);
    g.fillRect(78, 0, 3, h);
    g.beginPath();
    g.ellipse(46, 40, 8, 14, 0.2, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.ellipse(96, 90, 6, 10, -0.3, 0, Math.PI * 2);
    g.fill();
  });

  const hazard = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#16130f";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#e2a23a";
    const band = 18;
    for (let i = -8; i < 16; i++) {
      g.beginPath();
      g.moveTo(i * band, 0);
      g.lineTo(i * band + band * 0.55, 0);
      g.lineTo(i * band + band * 0.55 - h, h);
      g.lineTo(i * band - h, h);
      g.fill();
    }
  });

  const snow = canvasTex(128, 64, (g, w, h) => {
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const v = (x * 17 + y * 13) % 40;
        const c = 140 + v * 2;
        g.fillStyle = `rgb(${c},${c},${c - 10})`;
        g.fillRect(x, y, 1, 1);
      }
    }
    g.fillStyle = "rgba(0,0,0,0.45)";
    for (let y = 0; y < h; y += 3) g.fillRect(0, y, w, 1);
  });

  const pearl = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#efe8de";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#fbf7f1";
    g.fillRect(10, 10, w - 20, h - 20);
    g.strokeStyle = "rgba(40,34,28,0.45)";
    g.lineWidth = 3;
    g.strokeRect(8, 8, w - 16, h - 16);
    g.strokeStyle = "rgba(40,34,28,0.28)";
    g.beginPath();
    g.moveTo(18, h / 2);
    g.lineTo(w - 18, h / 2);
    g.moveTo(w / 2, 18);
    g.lineTo(w / 2, h - 18);
    g.stroke();
    noise(g, w, h, 24, "rgba(60,48,30,0.16)", 2);
  });

  const pearlWorn = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#d5cec3";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#c4b6a2";
    g.fillRect(0, h * 0.55, w, h * 0.45);
    g.fillStyle = "rgba(90,70,46,0.35)";
    g.fillRect(0, h - 16, w, 16);
    noise(g, w, h, 40, "rgba(70,54,32,0.28)", 2);
    g.strokeStyle = "rgba(40,34,28,0.4)";
    g.strokeRect(6, 6, w - 12, h - 12);
  });

  const joint = canvasTex(64, 64, (g, w, h) => {
    g.fillStyle = "#141414";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#2a2a2a";
    for (let i = -8; i < 16; i++) {
      g.fillRect(i * 8, 0, 2, h);
    }
    g.fillStyle = "#3a3a3a";
    g.fillRect(0, 4, w, 3);
    g.fillStyle = "#0a0a0a";
    g.fillRect(0, h - 8, w, 8);
  });

  const gold = canvasTex(64, 64, (g, w, h) => {
    g.fillStyle = "#c6a15a";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#e6c97a";
    g.fillRect(0, 2, w, 6);
    g.fillStyle = "#8a6a32";
    g.fillRect(0, h - 8, w, 8);
    g.strokeStyle = "rgba(60,40,10,0.45)";
    g.beginPath();
    g.moveTo(8, 0);
    g.lineTo(18, h);
    g.moveTo(40, 0);
    g.lineTo(30, h);
    g.stroke();
  });

  const cloth = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#f3efe6";
    g.fillRect(0, 0, w, h);
    for (let x = 8; x < w; x += 14) {
      g.strokeStyle = x % 28 === 8 ? "rgba(170,150,110,0.35)" : "rgba(120,100,70,0.18)";
      g.beginPath();
      g.moveTo(x, 0);
      g.quadraticCurveTo(x + 4, h / 2, x - 2, h);
      g.stroke();
    }
    g.fillStyle = "rgba(90,70,40,0.08)";
    g.fillRect(0, h - 20, w, 20);
  });

  const leather = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#3a2418";
    g.fillRect(0, 0, w, h);
    noise(g, w, h, 80, "rgba(20,10,6,0.45)", 2);
    noise(g, w, h, 40, "rgba(120,80,50,0.2)", 1);
    g.strokeStyle = "rgba(10,6,4,0.7)";
    g.lineWidth = 3;
    g.beginPath();
    g.moveTo(0, 20);
    g.lineTo(w, 28);
    g.stroke();
  });

  const trench = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#241810";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#1a110c";
    for (let x = 0; x < w; x += 10) g.fillRect(x, 0, 3, h);
    g.fillStyle = "rgba(80,50,30,0.15)";
    g.fillRect(0, 0, w, 8);
  });

  const nave = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = "#3e3832";
    g.fillRect(0, 0, w, h);
    const tile = 64;
    for (let y = 0; y < h; y += tile) {
      for (let x = 0; x < w; x += tile) {
        g.fillStyle = (x + y) % 128 === 0 ? "#4a433b" : "#35302b";
        g.fillRect(x + 3, y + 3, tile - 6, tile - 6);
      }
    }
    g.strokeStyle = "rgba(166,132,70,0.35)";
    g.lineWidth = 2;
    for (let i = 0; i <= w; i += tile) {
      g.beginPath();
      g.moveTo(i, 0);
      g.lineTo(i, h);
      g.stroke();
      g.beginPath();
      g.moveTo(0, i);
      g.lineTo(w, i);
      g.stroke();
    }
  }, 4, 4);

  const brushed = canvasTex(64, 64, (g, w, h) => {
    g.fillStyle = "#8d9298";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "rgba(255,255,255,0.18)";
    for (let y = 0; y < h; y += 3) g.fillRect(0, y, w, 1);
    g.fillStyle = "#5e646a";
    g.fillRect(0, 0, w, 4);
  });

  const pearlNormal = heightToNormal(128, 128, (x, y, w, h) => {
    const u = x / w;
    const v = y / h;
    const edge = Math.min(u, 1 - u, v, 1 - v);
    const bevel = Math.min(1, edge * 10);
    const groove = Math.abs(u - 0.5) < 0.012 || Math.abs(v - 0.5) < 0.012 ? 0.2 : 1;
    return bevel * groove;
  }, 3.2);
  const pearlRough = roughTex(128, 128, (x, y, w, h) => {
    const u = x / w;
    const v = y / h;
    const edge = Math.min(u, 1 - u, v, 1 - v);
    return 0.18 + (1 - Math.min(1, edge * 7)) * 0.34;
  });
  const goldNormal = heightToNormal(64, 64, (x, y, w, h) => {
    const brush = Math.sin(x * 0.85 + y * 0.2) * 0.08;
    const lip = y < 5 ? 0.25 : y > h - 6 ? -0.2 : 0;
    return 0.55 + brush + lip;
  }, 2.4);
  const goldRough = roughTex(64, 64, (x, y) => 0.22 + (Math.sin(x * 0.7) * 0.5 + 0.5) * 0.12 + (y % 9 === 0 ? 0.08 : 0));
  const clothNormal = heightToNormal(128, 128, (x, y) => {
    const weave = Math.sin(x * 0.85) * 0.05 + Math.sin(y * 1.15) * 0.04;
    const thread = x % 8 === 0 ? -0.06 : 0;
    return 0.5 + weave + thread;
  }, 2.2);
  const clothRough = roughTex(128, 128, (x, y, w, h) => 0.78 + (y / h) * 0.1 + (x % 8 === 0 ? 0.06 : 0));
  const floorNormal = heightToNormal(
    256,
    256,
    (x, y) => {
      const tile = 64;
      const lx = x % tile;
      const ly = y % tile;
      const edge = Math.min(lx, ly, tile - 1 - lx, tile - 1 - ly);
      return edge < 3 ? 0.05 : 0.72 + Math.sin(x * 0.17) * Math.sin(y * 0.13) * 0.06;
    },
    4.5,
    8,
    6
  );
  const floorRough = roughTex(
    256,
    256,
    (x, y) => {
      const tile = 64;
      const edge = Math.min(x % tile, y % tile, tile - 1 - (x % tile), tile - 1 - (y % tile));
      return edge < 3 ? 0.95 : 0.78;
    },
    8,
    6
  );
  const naveNormal = heightToNormal(
    256,
    256,
    (x, y) => {
      const tile = 64;
      const edge = Math.min(x % tile, y % tile, tile - 1 - (x % tile), tile - 1 - (y % tile));
      return edge < 4 ? 0 : 0.66;
    },
    5,
    4,
    4
  );
  const naveRough = roughTex(
    256,
    256,
    (x, y) => {
      const tile = 64;
      const edge = Math.min(x % tile, y % tile);
      return edge < 4 ? 0.96 : 0.84;
    },
    4,
    4
  );
  const woodNormal = heightToNormal(128, 128, (x, y) => {
    const grain = Math.sin(y * 0.42 + Math.sin(x * 0.07) * 2.4) * 0.14;
    const pore = x % 22 === 0 ? -0.08 : 0;
    return 0.5 + grain + pore;
  }, 3.1);
  const woodRough = roughTex(128, 128, (x, y, w, h) => 0.48 + (Math.sin(y * 0.35) * 0.5 + 0.5) * 0.22 + (y / h) * 0.08);
  const leatherNormal = heightToNormal(128, 128, (x, y, w, h) => {
    const pore = Math.sin(x * 1.6) * Math.sin(y * 1.25) * 0.05;
    const crease = Math.abs(y / h - 0.22) < 0.018 ? -0.22 : 0;
    return 0.55 + pore + crease;
  }, 2.6);
  const leatherRough = roughTex(128, 128, (x, y, w, h) => 0.62 + (Math.sin(x * 0.4 + y * 0.2) * 0.5 + 0.5) * 0.2 + (y / h) * 0.08);

  const seal = canvasTex(256, 64, (g, w, h) => {
    g.fillStyle = "#3c362e";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#2e2924";
    for (let i = 0; i < w; i += 32) g.fillRect(i, 0, 2, h);
    g.strokeStyle = "#e6c56a";
    g.lineWidth = 3;
    g.strokeRect(6, 8, w - 12, h - 16);
    g.lineWidth = 2;
    g.beginPath();
    g.ellipse(w / 2, h / 2, 30, 18, 0, 0, Math.PI * 2);
    g.stroke();
    g.beginPath();
    g.ellipse(w / 2, h / 2, 16, 9, 0, 0, Math.PI * 2);
    g.stroke();
    g.fillStyle = "#f0d48a";
    g.beginPath();
    g.arc(w / 2, h / 2, 3.5, 0, Math.PI * 2);
    g.fill();
  });

  return {
    floor,
    wall,
    ceiling,
    wood,
    hazard,
    snow,
    pearl,
    pearlWorn,
    joint,
    gold,
    cloth,
    leather,
    trench,
    nave,
    trim,
    brushed,
    pearlNormal,
    pearlRough,
    goldNormal,
    goldRough,
    clothNormal,
    clothRough,
    floorNormal,
    floorRough,
    naveNormal,
    naveRough,
    woodNormal,
    woodRough,
    leatherNormal,
    leatherRough,
    seal,
  };
}

export function makeSign(title, sub, bg = "#16130f", fg = "#f4efe6") {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = sub ? 160 : 128;
  const g = canvas.getContext("2d");
  g.fillStyle = bg;
  g.fillRect(0, 0, canvas.width, canvas.height);
  g.strokeStyle = "#e2a23a";
  g.lineWidth = 8;
  g.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);
  g.fillStyle = fg;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.font = "700 58px Trebuchet MS, sans-serif";
  g.fillText(title, canvas.width / 2, sub ? 68 : canvas.height / 2 + 2);
  if (sub) {
    g.font = "600 28px Trebuchet MS, sans-serif";
    g.fillStyle = "#e2a23a";
    g.fillText(sub, canvas.width / 2, 118);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
