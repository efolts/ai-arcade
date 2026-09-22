import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

/** Hard-edged frustum. Bottom is w0×d0, top is w1×d1, origin at the center. */
export function frustum(w0, d0, w1, d1, h) {
  const y0 = -h / 2;
  const y1 = h / 2;
  const v = [
    [-w0 / 2, y0, d0 / 2],
    [w0 / 2, y0, d0 / 2],
    [w0 / 2, y0, -d0 / 2],
    [-w0 / 2, y0, -d0 / 2],
    [-w1 / 2, y1, d1 / 2],
    [w1 / 2, y1, d1 / 2],
    [w1 / 2, y1, -d1 / 2],
    [-w1 / 2, y1, -d1 / 2],
  ];
  const faces = [
    [0, 1, 5, 4],
    [1, 2, 6, 5],
    [2, 3, 7, 6],
    [3, 0, 4, 7],
    [4, 5, 6, 7],
    [3, 2, 1, 0],
  ];
  const pos = [];
  const uv = [];
  for (const face of faces) {
    const [a, b, c, d] = face.map((index) => v[index]);
    pos.push(...a, ...b, ...c, ...a, ...c, ...d);
    uv.push(0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.computeVertexNormals();
  return geo;
}

/** Faceted lathe. Profile points are [radius, height]. */
export function shell(profile, segments = 10) {
  const pts = profile.map(([radius, y]) => new THREE.Vector2(radius, y));
  const geo = new THREE.LatheGeometry(pts, segments).toNonIndexed();
  geo.computeVertexNormals();
  return geo;
}

/** Indexed lathe so the surface stays smooth. Profile points are [radius, height]. */
export function smoothShell(profile, segments = 24) {
  const pts = profile.map(([radius, y]) => new THREE.Vector2(radius, y));
  const geo = new THREE.LatheGeometry(pts, segments);
  geo.computeVertexNormals();
  return geo;
}

export function mesh(geo, material, x = 0, y = 0, z = 0) {
  const obj = new THREE.Mesh(geo, material);
  obj.position.set(x, y, z);
  obj.castShadow = true;
  obj.receiveShadow = true;
  return obj;
}

export function merged(parts) {
  return mergeGeometries(parts, false);
}

const HELMET_PROFILE = [
  [0.02, 0.2],
  [0.1, 0.175],
  [0.148, 0.11],
  [0.164, 0.04],
  [0.158, -0.03],
  [0.132, -0.09],
  [0.09, -0.135],
  [0.04, -0.158],
];

const TORSO_PROFILE = [
  [0.1, 0.7],
  [0.155, 0.8],
  [0.15, 0.96],
  [0.175, 1.16],
  [0.22, 1.34],
  [0.2, 1.46],
  [0.11, 1.52],
];

const ROBE_PROFILE = [
  [0.42, 0.02],
  [0.52, 0.16],
  [0.5, 0.36],
  [0.42, 0.62],
  [0.36, 0.9],
  [0.39, 1.12],
  [0.3, 1.38],
  [0.22, 1.56],
  [0.15, 1.68],
];

let shared = null;

export function geos() {
  if (shared) return shared;
  const handParts = [];
  const palm = new THREE.SphereGeometry(0.046, 12, 10);
  palm.scale(1.28, 0.7, 1.35);
  palm.translate(0, -0.575, 0.02);
  handParts.push(palm);
  for (let i = 0; i < 4; i++) {
    const x = -0.032 + i * 0.021;
    const len = 0.036 - Math.abs(i - 1.4) * 0.004;
    const curl = 0.22 + (i === 0 || i === 3 ? 0.1 : 0);
    const base = new THREE.CylinderGeometry(0.008, 0.01, len, 6);
    base.translate(0, -len * 0.5, 0);
    base.rotateX(0.12);
    base.translate(x, -0.615, 0.042);
    const tip = new THREE.CylinderGeometry(0.006, 0.008, len * 0.85, 6);
    tip.translate(0, -len * 0.4, 0);
    tip.rotateX(curl);
    tip.translate(x, -0.615 - len * 0.72, 0.05);
    handParts.push(base, tip);
  }
  const thumb = new THREE.CylinderGeometry(0.009, 0.011, 0.04, 6);
  thumb.translate(0, -0.02, 0);
  thumb.rotateZ(0.85);
  thumb.translate(0.048, -0.59, 0.015);
  const thumbTip = new THREE.CylinderGeometry(0.007, 0.009, 0.028, 6);
  thumbTip.translate(0, -0.014, 0);
  thumbTip.rotateZ(1.15);
  thumbTip.rotateX(0.25);
  thumbTip.translate(0.062, -0.6, 0.03);
  handParts.push(thumb, thumbTip);
  const sole = new THREE.BoxGeometry(0.1, 0.025, 0.2);
  sole.translate(0, -0.012, 0.02);
  const shoe = new THREE.BoxGeometry(0.088, 0.038, 0.13);
  shoe.translate(0, 0.016, -0.005);

  const gunParts = [];
  const receiver = new THREE.BoxGeometry(0.05, 0.055, 0.16);
  receiver.translate(0, -0.56, 0.1);
  gunParts.push(receiver);
  const barrel = new THREE.BoxGeometry(0.03, 0.03, 0.07);
  barrel.translate(0, -0.545, 0.16);
  gunParts.push(barrel);
  const grip = new THREE.BoxGeometry(0.038, 0.07, 0.04);
  grip.translate(0, -0.61, 0.04);
  gunParts.push(grip);

  shared = {
    helmet: smoothShell(HELMET_PROFILE, 36),
    torso: smoothShell(TORSO_PROFILE, 32),
    robe: smoothShell(ROBE_PROFILE, 36),
    visor: new THREE.SphereGeometry(0.164, 48, 32, Math.PI / 2 - 1.05, 2.1, Math.PI * 0.36, Math.PI * 0.46),
    chest: frustum(0.34, 0.2, 0.48, 0.26, 0.4),
    abdomen: frustum(0.3, 0.18, 0.34, 0.2, 0.18),
    pelvis: frustum(0.32, 0.2, 0.28, 0.18, 0.14),
    pec: frustum(0.15, 0.1, 0.17, 0.12, 0.2),
    shoulder: frustum(0.1, 0.1, 0.14, 0.12, 0.08),
    thigh: new THREE.CylinderGeometry(0.055, 0.072, 0.34, 12),
    shin: new THREE.CylinderGeometry(0.04, 0.055, 0.32, 12),
    foot: merged([sole, shoe]),
    upper: new THREE.CylinderGeometry(0.04, 0.05, 0.26, 12),
    forearm: new THREE.CylinderGeometry(0.03, 0.04, 0.22, 12),
    hand: merged(handParts),
    gun: merged(gunParts),
    collar: new THREE.CylinderGeometry(0.07, 0.09, 0.08, 8),
    joint: new THREE.SphereGeometry(1, 16, 12),
    skirt: frustum(0.34, 0.16, 0.5, 0.22, 0.62),
    tabard: new THREE.BoxGeometry(0.22, 0.58, 0.045),
    stole: new THREE.BoxGeometry(0.09, 0.5, 0.04),
    muzzle: new THREE.BoxGeometry(0.028, 0.028, 0.04),
    seam: new THREE.BoxGeometry(0.2, 0.028, 0.02),
  };
  for (const geo of Object.values(shared)) {
    if (!geo?.index || geo.attributes.tangent || !geo.attributes.uv || !geo.attributes.normal) continue;
    try {
      geo.computeTangents();
    } catch {
      /* merged props without a clean index still render; they just skip the normal map */
    }
  }
  return shared;
}
