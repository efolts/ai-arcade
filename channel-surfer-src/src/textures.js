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

export function makeTextures() {
  const floor = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = "#6d665b";
    g.fillRect(0, 0, w, h);
    const tile = 32;
    for (let y = 0; y < h; y += tile) {
      for (let x = 0; x < w; x += tile) {
        const n = ((x * 3 + y * 5) % 11) / 11;
        g.fillStyle = n > 0.5 ? "#756e62" : "#655e54";
        g.fillRect(x + 1, y + 1, tile - 2, tile - 2);
      }
    }
    g.strokeStyle = "rgba(30,24,18,0.35)";
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
    g.fillStyle = "rgba(40,28,18,0.22)";
    g.beginPath();
    g.ellipse(70, 150, 36, 16, 0.5, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.ellipse(190, 70, 24, 14, -0.4, 0, Math.PI * 2);
    g.fill();
  }, 10, 8);

  const wall = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = "#cfc6b8";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#b7aea0";
    for (let y = 0; y < h; y += 64) g.fillRect(0, y, w, 8);
    g.fillStyle = "#a39888";
    g.fillRect(0, 168, w, 18);
    g.fillStyle = "rgba(90,70,50,0.08)";
    for (let i = 0; i < 18; i++) {
      g.fillRect((i * 47) % w, (i * 29) % h, 14, 6);
    }
  }, 4, 2);

  const ceiling = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#b9b3a8";
    g.fillRect(0, 0, w, h);
    g.strokeStyle = "#a39c90";
    g.strokeRect(2, 2, w - 4, h - 4);
    g.fillStyle = "#c8c2b6";
    g.fillRect(8, 8, w - 16, h - 16);
  }, 8, 8);

  const wood = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = "#6a4528";
    g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 4) {
      const shade = 80 + ((y * 13) % 40);
      g.strokeStyle = `rgb(${shade + 30}, ${shade - 10}, ${shade - 40})`;
      g.beginPath();
      g.moveTo(0, y);
      g.lineTo(w, y + ((y % 8) - 4));
      g.stroke();
    }
    g.fillStyle = "rgba(40,20,8,0.25)";
    g.fillRect(20, 0, 3, h);
    g.fillRect(70, 0, 2, h);
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

  return { floor, wall, ceiling, wood, hazard, snow };
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
