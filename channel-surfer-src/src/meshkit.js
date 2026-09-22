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
  [0.02, 0.18],
  [0.09, 0.16],
  [0.145, 0.1],
  [0.158, 0.02],
  [0.15, -0.05],
  [0.12, -0.11],
  [0.075, -0.15],
];

let shared = null;

export function geos() {
  if (shared) return shared;
  const handParts = [];
  const palm = new THREE.BoxGeometry(0.074, 0.05, 0.09);
  palm.translate(0, -0.62, 0.02);
  handParts.push(palm);
  for (let i = 0; i < 4; i++) {
    const finger = new THREE.BoxGeometry(0.014, 0.05, 0.016);
    finger.translate(-0.024 + i * 0.016, -0.67, 0.045);
    handParts.push(finger);
  }
  const thumb = new THREE.BoxGeometry(0.016, 0.04, 0.016);
  thumb.translate(0.046, -0.62, 0.03);
  thumb.rotateZ(0.7);
  handParts.push(thumb);

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
    helmet: shell(HELMET_PROFILE, 10),
    chest: frustum(0.34, 0.2, 0.48, 0.26, 0.4),
    abdomen: frustum(0.3, 0.18, 0.34, 0.2, 0.18),
    pelvis: frustum(0.32, 0.2, 0.28, 0.18, 0.14),
    pec: frustum(0.15, 0.1, 0.17, 0.12, 0.2),
    shoulder: frustum(0.1, 0.1, 0.14, 0.12, 0.08),
    thigh: frustum(0.11, 0.11, 0.085, 0.085, 0.32),
    shin: frustum(0.08, 0.09, 0.065, 0.065, 0.3),
    foot: new THREE.BoxGeometry(0.1, 0.055, 0.18),
    upper: frustum(0.085, 0.085, 0.07, 0.07, 0.24),
    forearm: frustum(0.064, 0.064, 0.05, 0.052, 0.2),
    hand: merged(handParts),
    gun: merged(gunParts),
    collar: new THREE.CylinderGeometry(0.07, 0.09, 0.08, 8),
    joint: new THREE.SphereGeometry(1, 6, 5),
    skirt: frustum(0.34, 0.16, 0.5, 0.22, 0.62),
    tabard: new THREE.BoxGeometry(0.22, 0.58, 0.045),
    stole: new THREE.BoxGeometry(0.09, 0.5, 0.04),
    muzzle: new THREE.BoxGeometry(0.028, 0.028, 0.04),
    seam: new THREE.BoxGeometry(0.2, 0.028, 0.02),
  };
  return shared;
}
