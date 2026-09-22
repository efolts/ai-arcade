import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { BLOCKS, HIJACK_SPAWNS, PICKUPS, VEIL_Z, activeColliders } from "./level.js";
import { makeSign, makeTextures } from "./textures.js";

function std(params) {
  return new THREE.MeshStandardMaterial({ envMapIntensity: 0.32, ...params });
}

function tangents(geo) {
  if (geo?.index && geo.attributes?.uv && geo.attributes?.normal && !geo.attributes.tangent) geo.computeTangents();
  return geo;
}

function tiled(tex, x, y) {
  const copy = tex.clone();
  copy.repeat.set(x, y);
  copy.needsUpdate = true;
  return copy;
}

export function createWorld(scene) {
  const textures = makeTextures();
  const materials = {
    floor: std({
      map: textures.floor,
      normalMap: textures.floorNormal,
      roughnessMap: textures.floorRough,
      roughness: 1,
      metalness: 0.03,
    }),
    wall: std({ map: textures.wall, roughness: 0.88, metalness: 0.03 }),
    ceiling: std({ map: textures.ceiling, roughness: 0.96, metalness: 0 }),
    trim: std({ map: textures.trim, roughness: 0.74, metalness: 0.08 }),
    metal: std({ color: 0x6d7378, roughness: 0.38, metalness: 0.62 }),
    wood: std({
      map: tiled(textures.wood, 2, 2),
      normalMap: tiled(textures.woodNormal, 2, 2),
      roughnessMap: tiled(textures.woodRough, 2, 2),
      roughness: 1,
      metalness: 0.04,
    }),
    runner: std({ color: 0x4a4038, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }),
    dark: std({ color: 0x141210, roughness: 0.9 }),
    brass: std({
      map: tiled(textures.gold, 2, 2),
      normalMap: tiled(textures.goldNormal, 2, 2),
      roughnessMap: tiled(textures.goldRough, 2, 2),
      roughness: 1,
      metalness: 0.84,
      envMapIntensity: 0.75,
    }),
    plant: std({ color: 0x4d4938, roughness: 0.92 }),
    glass: std({
      color: 0xc5d0d2,
      roughness: 0.08,
      metalness: 0.05,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
    }),
    hazard: std({
      map: textures.hazard,
      roughness: 0.55,
      metalness: 0.12,
      transparent: true,
      opacity: 0.96,
      emissive: 0x5a3a10,
      emissiveIntensity: 0.18,
    }),
  };
  materials.hazard.side = THREE.DoubleSide;
  materials.floor.normalScale.set(0.7, 0.7);
  materials.wood.normalScale.set(0.85, 0.85);
  materials.wood.side = THREE.DoubleSide;
  materials.brass.normalScale.set(0.4, 0.4);

  const buckets = new Map();
  function addBox(mat, x, y, z, w, h, d) {
    const geo = new THREE.BoxGeometry(w, h, d);
    geo.translate(x, y, z);
    if (!buckets.has(mat)) buckets.set(mat, []);
    buckets.get(mat).push(geo);
  }

  const gates = [];
  let doorGroup = null;
  const doorBaseY = 3.6;
  let veilMesh = null;
  const veilMat = std({
    color: 0xf4efe4,
    roughness: 0.42,
    metalness: 0.18,
    transparent: true,
    opacity: 0.94,
    emissive: 0xd4b15a,
    emissiveIntensity: 0.32,
  });
  veilMat.side = THREE.DoubleSide;
  const DRESSED = new Set([
    "pew-1",
    "pew-2",
    "pew-3",
    "pew-4",
    "altar",
    "fountain-n",
    "fountain-s-l",
    "fountain-s-r",
    "fountain-w",
    "fountain-e",
  ]);

  for (const block of BLOCKS) {
    if (block.veil) {
      veilMesh = new THREE.Mesh(new THREE.BoxGeometry(block.w, block.h, block.d), veilMat);
      veilMesh.position.set(block.x, block.y, block.z);
      veilMesh.visible = false;
      scene.add(veilMesh);
      continue;
    }
    if (block.door) {
      doorGroup = new THREE.Group();
      const slab = new THREE.Mesh(
        new THREE.BoxGeometry(block.w * 0.92, block.h * 0.98, block.d * 0.62),
        std({ color: 0xe7e0d2, roughness: 0.58, metalness: 0.08, envMapIntensity: 0.35 })
      );
      const panelMat = std({ color: 0xd5cec2, roughness: 0.66, metalness: 0.05 });
      for (const py of [-block.h * 0.18, block.h * 0.16]) {
        const panel = new THREE.Mesh(new THREE.BoxGeometry(block.w * 0.62, block.h * 0.28, 0.045), panelMat);
        panel.position.set(0, py, block.d * 0.36);
        panel.castShadow = true;
        doorGroup.add(panel);
      }
      const frame = new THREE.Mesh(tangents(new THREE.BoxGeometry(block.w, 0.16, block.d * 0.8)), materials.brass);
      frame.position.y = block.h * 0.42;
      const stripe = new THREE.Mesh(tangents(new THREE.BoxGeometry(0.14, block.h * 0.72, block.d * 0.78)), materials.brass);
      const plaque = new THREE.Mesh(
        new THREE.PlaneGeometry(1.7, 0.5),
        new THREE.MeshBasicMaterial({ map: makeSign("RADIO", "WING", "#1c140c", "#f0d48a") })
      );
      plaque.position.set(0, 0.35, block.d * 0.42);
      doorGroup.add(slab, frame, stripe, plaque);
      doorGroup.position.set(block.x, block.y, block.z);
      scene.add(doorGroup);
      continue;
    }
    if (DRESSED.has(block.id)) continue;
    if (block.phaseGate) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(block.w, block.h, block.d), materials.hazard);
      mesh.position.set(block.x, block.y, block.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      gates.push(mesh);
      continue;
    }
    addBox(block.mat, block.x, block.y, block.z, block.w, block.h, block.d);
  }

  addBox("runner", 0, 0.02, -1.2, 2.6, 0.02, 18);
  addBox("dark", -7.4, 1.3, -13.15, 6.4, 2.6, 0.4);
  addBox("dark", -5.2, 1.3, -13.15, 2.4, 2.6, 0.4);
  addBox("dark", 5.4, 1.3, -13.15, 2.4, 2.6, 0.4);
  addBox("dark", 8.6, 1.3, -13.15, 6.4, 2.6, 0.4);
  addBox("runner", 0, 0.025, -21.4, 1.5, 0.02, 12);
  addBox("brass", 0, 2.55, -2.15, 0.12, 3.5, 0.12);
  addBox("brass", 0, 4.15, -2.15, 1.35, 0.08, 1.35);
  addBox("plant", -3.3, 0.28, -2.5, 0.7, 0.45, 0.7);
  addBox("plant", 3.35, 0.28, 1.4, 0.7, 0.45, 0.7);
  addBox("plant", -3.2, 0.55, 2.4, 0.45, 0.7, 0.45);
  addBox("metal", -14.2, 0.9, -8.4, 1.1, 0.12, 3.2);

  for (const x of [-12, -4, 4, 12]) {
    for (const z of [-8, 0, 8]) {
      addBox("metal", x, 6.85, z, 1.6, 0.08, 0.28);
    }
  }
  for (let x = -14; x <= 14; x += 2.2) {
    addBox("metal", x, 4.55, -10.45, 0.06, 0.7, 0.06);
  }
  addBox("metal", 0, 4.55, -10.45, 28, 0.05, 0.05);

  for (const [name, geos] of buckets) {
    const merged = geos.length === 1 ? geos[0] : mergeGeometries(geos);
    if (materials[name].normalMap) tangents(merged);
    const mesh = new THREE.Mesh(merged, materials[name]);
    mesh.castShadow = name !== "floor" && name !== "ceiling" && name !== "runner";
    mesh.receiveShadow = true;
    scene.add(mesh);
  }

  const stone = std({
    map: textures.floor,
    normalMap: textures.floorNormal,
    roughnessMap: textures.floorRough,
    roughness: 1,
    metalness: 0.05,
  });
  stone.normalScale.set(0.55, 0.55);
  function dress(geo, material, x, y, z) {
    if (material.normalMap) tangents(geo);
    const obj = new THREE.Mesh(geo, material);
    obj.position.set(x, y, z);
    obj.castShadow = true;
    obj.receiveShadow = true;
    scene.add(obj);
    return obj;
  }
  function curb(x, y, z, w, h, d) {
    dress(new THREE.BoxGeometry(w, h * 0.78, d * 0.92), stone, x, y - h * 0.08, z);
    dress(new THREE.BoxGeometry(w * 1.04, h * 0.18, d * 1.08), materials.trim, x, y + h * 0.4, z);
  }
  curb(0, 0.4, -2.2, 4.5, 0.8, 0.5);
  curb(-1.75, 0.4, 2.05, 1.7, 0.8, 0.5);
  curb(1.75, 0.4, 2.05, 1.7, 0.8, 0.5);
  curb(-2.25, 0.4, -0.05, 0.5, 0.8, 3.55);
  curb(2.25, 0.4, -0.05, 0.5, 0.8, 3.55);
  const bowl = dress(
    new THREE.LatheGeometry(
      [
        new THREE.Vector2(0.15, 0.04),
        new THREE.Vector2(0.7, 0.06),
        new THREE.Vector2(1.15, 0.1),
        new THREE.Vector2(1.38, 0.28),
        new THREE.Vector2(1.22, 0.4),
        new THREE.Vector2(1.05, 0.34),
      ],
      32
    ),
    std({ map: textures.trim, roughness: 0.55, metalness: 0.18, envMapIntensity: 0.45 }),
    0,
    0.02,
    -0.05
  );
  bowl.castShadow = true;
  const lip = new THREE.Mesh(new THREE.TorusGeometry(1.28, 0.045, 8, 28), materials.brass);
  lip.rotation.x = Math.PI / 2;
  lip.position.set(0, 0.36, -0.05);
  lip.castShadow = true;
  scene.add(lip);
  const spout = dress(new THREE.CylinderGeometry(0.06, 0.09, 0.34, 12), materials.brass, 0, 0.22, -0.05);
  const water = new THREE.Mesh(
    new THREE.CircleGeometry(1.05, 28),
    std({ color: 0x1e2c30, roughness: 0.08, metalness: 0.62, envMapIntensity: 0.9 })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, 0.16, -0.05);
  water.receiveShadow = true;
  scene.add(water);

  const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 0.12, 12), materials.brass);
  dish.position.set(0, 4.28, -2.15);
  dish.rotation.x = 0.55;
  dish.castShadow = true;
  scene.add(dish);

  const windowGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.15, 0.7),
    new THREE.MeshBasicMaterial({ color: 0xffb14a })
  );
  windowGlow.position.set(10.7, 1.85, -5.1);
  windowGlow.rotation.y = -Math.PI / 2;
  scene.add(windowGlow);

  const decal = new THREE.Mesh(
    new THREE.PlaneGeometry(1.7, 1.7),
    std({ map: textures.hazard, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1 })
  );
  decal.rotation.x = -Math.PI / 2;
  decal.position.set(9.45, 0.03, 0);
  decal.receiveShadow = true;
  scene.add(decal);

  const boothGlass = new THREE.Mesh(new THREE.BoxGeometry(5.4, 2.2, 0.06), materials.glass);
  boothGlass.position.set(9.4, 1.8, 8.7);
  scene.add(boothGlass);

  const monitor = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.45, 0.06),
    new THREE.MeshBasicMaterial({ map: textures.snow })
  );
  monitor.position.set(9.2, 1.25, 8.72);
  scene.add(monitor);
  const monitor2 = monitor.clone();
  monitor2.position.x = 10.15;
  scene.add(monitor2);
  const tally = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.08, 0.08),
    new THREE.MeshBasicMaterial({ color: 0xffb14a })
  );
  tally.position.set(10.55, 1.55, 8.7);
  scene.add(tally);

  function addSign(title, sub, x, y, z, w, h, ry, bg, fg) {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ map: makeSign(title, sub, bg, fg), transparent: false })
    );
    mesh.position.set(x, y, z);
    mesh.rotation.y = ry;
    scene.add(mesh);
    return mesh;
  }

  addSign("KRCD 7", "MALL COURT", 0, 5.55, -6.4, 3.6, 1.05, 0);
  addSign("RECORDS", "CLOSED", -7.4, 2.85, -12.55, 2.3, 0.62, 0);
  addSign("OPTICAL", "DARK", -5.2, 2.85, -12.55, 2.1, 0.62, 0);
  addSign("RADIO WING", "NORTH DOOR", 0, 3.42, -10.7, 2.5, 0.64, 0, "#1c140c", "#f0d48a");
  addSign("WE'LL BE RIGHT BACK", "", 8.4, 2.8, -12.55, 3.3, 0.55, 0);
  addSign("FOOD HALL", "", -10.2, 1.85, 8.48, 2.6, 0.48, Math.PI);
  addSign("KRCD BOOTH", "OFF AIR", 9.4, 2.55, 8.62, 2.5, 0.7, Math.PI);
  addSign("DIRECTORY", "OFFLINE", -3.35, 1.15, 6.95, 0.72, 0.48, 0);
  addSign("DEAD AIR", "SHUTTER", 9.15, 2.05, 0.02, 1.8, 0.78, -Math.PI / 2);
  addSign("ANCHOR DARK", "", -15.85, 3.1, 0.2, 2.4, 0.55, Math.PI / 2);
  addSign("SERVICE", "NORTH END OPEN", 13.6, 2.6, -9.2, 2.2, 0.6, Math.PI);
  addSign("RADIO", "SERVICE", 7.95, 2.7, -18.2, 1.8, 0.55, -Math.PI / 2, "#1c140c", "#f0d48a");
  addSign("PA", "HORN", -7.35, 3.2, -17.35, 0.95, 0.42, Math.PI / 2, "#1c140c", "#f0d48a");

  const seal = new THREE.Mesh(
    new THREE.PlaneGeometry(3.15, 0.34),
    std({ map: textures.seal, roughness: 0.38, metalness: 0.62, envMapIntensity: 0.55 })
  );
  seal.receiveShadow = true;
  seal.rotation.x = -Math.PI / 2;
  seal.position.set(0, 0.045, VEIL_Z);
  scene.add(seal);

  const hornDef = HIJACK_SPAWNS[0];
  const hornMat = std({
    map: textures.gold,
    normalMap: textures.goldNormal,
    roughnessMap: textures.goldRough,
    roughness: 1,
    metalness: 0.8,
    emissive: 0xd4b15a,
    emissiveIntensity: 0.12,
    envMapIntensity: 0.7,
  });
  const horn = new THREE.Group();
  const bell = new THREE.Mesh(
    tangents(
      new THREE.LatheGeometry(
        [
          new THREE.Vector2(0.05, -0.28),
          new THREE.Vector2(0.09, -0.08),
          new THREE.Vector2(0.16, 0.08),
          new THREE.Vector2(0.28, 0.24),
          new THREE.Vector2(0.34, 0.32),
          new THREE.Vector2(0.3, 0.36),
        ],
        20
      )
    ),
    hornMat
  );
  bell.rotation.z = -Math.PI / 2;
  bell.castShadow = true;
  const grille = new THREE.Mesh(new THREE.CircleGeometry(0.26, 16), std({ color: 0x2a2418, roughness: 0.45, metalness: 0.4 }));
  grille.rotation.y = Math.PI / 2;
  grille.position.x = 0.34;
  const neck = new THREE.Mesh(tangents(new THREE.CylinderGeometry(0.055, 0.07, 0.36, 12)), materials.brass);
  neck.rotation.z = Math.PI / 2;
  neck.position.x = -0.42;
  const plate = new THREE.Mesh(tangents(new THREE.BoxGeometry(0.06, 0.36, 0.28)), materials.brass);
  plate.position.set(-0.62, 0, 0);
  plate.castShadow = true;
  const bracket = new THREE.Mesh(tangents(new THREE.BoxGeometry(0.1, 0.08, 0.16)), materials.brass);
  bracket.position.set(-0.62, -0.2, 0);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 10), new THREE.MeshBasicMaterial({ color: 0xffb14a }));
  bulb.position.x = 0.28;
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.55, 0.03, 8, 24),
    new THREE.MeshBasicMaterial({ color: 0xfff1c8, transparent: true, opacity: 0, depthWrite: false })
  );
  ring.rotation.y = Math.PI / 2;
  horn.add(bell, grille, neck, plate, bracket, bulb, ring);
  for (const [offset, radius] of [[-0.05, 0.1], [0.08, 0.16], [0.2, 0.26]]) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.012, 6, 16), materials.brass);
    rib.rotation.y = Math.PI / 2;
    rib.position.x = offset;
    rib.castShadow = true;
    horn.add(rib);
  }
  horn.position.set(hornDef.x, hornDef.y, hornDef.z);
  scene.add(horn);
  const hornLight = new THREE.PointLight(0xffb15a, 7, 5.5, 2);
  hornLight.position.set(hornDef.x + 0.4, hornDef.y, hornDef.z);
  scene.add(hornLight);

  function candle(x, z) {
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.46, 6), materials.brass);
    stick.position.set(x, 0.28, z);
    const flame = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xffb14a })
    );
    flame.position.set(x, 0.54, z);
    scene.add(stick, flame);
  }
  candle(-4.9, -18.2);
  candle(4.9, -18.2);
  candle(-4.9, -20.45);
  candle(4.9, -20.45);
  candle(-1.35, -27.15);
  candle(1.35, -27.15);

  const nave = new THREE.Mesh(
    new THREE.PlaneGeometry(15.2, 13.2),
    std({
      map: textures.nave,
      normalMap: textures.naveNormal,
      roughnessMap: textures.naveRough,
      roughness: 1,
      metalness: 0.05,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    })
  );
  nave.material.normalScale.set(0.8, 0.8);
  nave.material.lightMap = textures.naveLight;
  nave.material.lightMapIntensity = 0.72;
  tangents(nave.geometry);
  nave.geometry.setAttribute("uv2", nave.geometry.attributes.uv.clone());
  nave.rotation.x = -Math.PI / 2;
  nave.position.set(0, 0.018, -21.55);
  nave.receiveShadow = true;
  scene.add(nave);
  const naveWood = materials.wood.clone();
  naveWood.lightMap = textures.naveLight;
  naveWood.lightMapIntensity = 0.7;
  const naveStone = stone.clone();
  naveStone.lightMap = textures.naveLight;
  naveStone.lightMapIntensity = 0.66;
  const naveBrass = materials.brass.clone();
  naveBrass.lightMap = textures.naveLight;
  naveBrass.lightMapIntensity = 0.45;
  const naveWall = materials.wall.clone();
  naveWall.lightMap = textures.naveLight;
  naveWall.lightMapIntensity = 0.85;
  naveWall.polygonOffset = true;
  naveWall.polygonOffsetFactor = -1;
  naveWall.polygonOffsetUnits = -1;
  const lightUv = new THREE.Vector3();
  function litDress(geo, material, x, y, z) {
    const copy = geo.clone();
    const obj = dress(copy, material, x, y, z);
    obj.updateMatrixWorld(true);
    const pos = copy.attributes.position;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      lightUv.fromBufferAttribute(pos, i).applyMatrix4(obj.matrixWorld);
      uv[i * 2] = (lightUv.x + 7.6) / 15.2;
      uv[i * 2 + 1] = (-21.55 - lightUv.z) / 13.2 + 0.5;
    }
    copy.setAttribute("uv2", new THREE.BufferAttribute(uv, 2));
    return obj;
  }
  const west = litDress(new THREE.PlaneGeometry(14.2, 6.2), naveWall, -8.08, 3.15, -21.75);
  west.rotation.y = Math.PI / 2;
  const east = litDress(new THREE.PlaneGeometry(14.2, 6.2), naveWall, 8.08, 3.15, -21.75);
  east.rotation.y = -Math.PI / 2;
  const north = litDress(new THREE.PlaneGeometry(15.4, 6.2), naveWall, 0, 3.15, -28.72);
  for (const wall of [west, east, north]) {
    wall.castShadow = false;
    wall.updateMatrixWorld(true);
    const pos = wall.geometry.attributes.position;
    const uv2 = wall.geometry.attributes.uv2.array;
    const uv = wall.geometry.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      lightUv.fromBufferAttribute(pos, i).applyMatrix4(wall.matrixWorld);
      uv2[i * 2] = (lightUv.x + 7.6) / 15.2;
      uv2[i * 2 + 1] = (-21.55 - lightUv.z) / 13.2 + 0.5;
      uv.setXY(i, uv.getX(i) * 4, uv.getY(i) * 2);
    }
    wall.geometry.attributes.uv2.needsUpdate = true;
    uv.needsUpdate = true;
  }

  const railGeo = new THREE.CylinderGeometry(0.028, 0.028, 2.28, 10);
  railGeo.rotateZ(Math.PI / 2);
  const noseGeo = new THREE.CylinderGeometry(0.03, 0.03, 2.32, 12);
  noseGeo.rotateZ(Math.PI / 2);
  const backArc = new THREE.CylinderGeometry(0.62, 0.62, 2.22, 16, 1, true, -0.42, 0.84);
  backArc.rotateZ(Math.PI / 2);
  function pew(px, pz) {
    litDress(new THREE.BoxGeometry(2.32, 0.05, 0.32), naveWood, px, 0.46, pz - 0.04);
    litDress(noseGeo, naveWood, px, 0.45, pz - 0.2);
    for (const sx of [-1.02, 1.02]) {
      litDress(new THREE.BoxGeometry(0.055, 0.4, 0.05), naveWood, px + sx, 0.22, pz - 0.12);
      litDress(new THREE.BoxGeometry(0.055, 0.4, 0.05), naveWood, px + sx, 0.22, pz + 0.06);
    }
    for (const sx of [-1.2, 1.2]) {
      litDress(new THREE.BoxGeometry(0.07, 0.82, 0.4), naveWood, px + sx, 0.44, pz + 0.02);
    }
    const arc = litDress(backArc, naveWood, px, 0.68, pz - 0.36);
    arc.castShadow = true;
    litDress(railGeo, naveWood, px, 0.9, pz + 0.2);
    litDress(new THREE.BoxGeometry(2.05, 0.028, 0.1), naveWood, px, 0.3, pz + 0.04);
    litDress(new THREE.BoxGeometry(1.9, 0.035, 0.07), naveWood, px, 0.16, pz - 0.02);
  }
  for (const [px, pz] of [
    [-3.15, -18.2],
    [-3.15, -20.45],
    [3.15, -18.2],
    [3.15, -20.45],
  ]) {
    pew(px, pz);
  }
  litDress(new THREE.BoxGeometry(2.15, 0.16, 0.62), naveStone, 0, 0.1, -27.55);
  litDress(new THREE.BoxGeometry(1.82, 0.2, 0.5), naveStone, 0, 0.27, -27.55);
  litDress(new THREE.BoxGeometry(1.5, 0.18, 0.4), naveStone, 0, 0.45, -27.55);
  litDress(new THREE.BoxGeometry(2.2, 0.07, 0.66), naveBrass, 0, 0.62, -27.55);
  const frontal = dress(new THREE.BoxGeometry(1.35, 0.32, 0.035), materials.brass, 0, 0.36, -27.26);
  frontal.position.z = -27.26;
  const altarSeal = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.016, 8, 20), materials.brass);
  altarSeal.position.set(0, 0.38, -27.22);
  scene.add(altarSeal);
  for (const sx of [-0.72, 0.72]) {
    dress(new THREE.CylinderGeometry(0.028, 0.04, 0.22, 8), materials.brass, sx, 0.76, -27.52);
    const flame = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 8, 6),
      new THREE.MeshBasicMaterial({ color: 0xffb14a })
    );
    flame.position.set(sx, 0.9, -27.52);
    flame.castShadow = false;
    scene.add(flame);
  }
  const aoCanvas = document.createElement("canvas");
  aoCanvas.width = 64;
  aoCanvas.height = 64;
  const aoCtx = aoCanvas.getContext("2d");
  const aoGrad = aoCtx.createRadialGradient(32, 32, 4, 32, 32, 32);
  aoGrad.addColorStop(0, "rgba(0,0,0,0.38)");
  aoGrad.addColorStop(1, "rgba(0,0,0,0)");
  aoCtx.fillStyle = aoGrad;
  aoCtx.fillRect(0, 0, 64, 64);
  const aoMap = new THREE.CanvasTexture(aoCanvas);
  const aoMat = new THREE.MeshBasicMaterial({ map: aoMap, transparent: true, depthWrite: false });
  function aoDisc(radius, x, z) {
    const disc = new THREE.Mesh(new THREE.CircleGeometry(radius, 18), aoMat);
    disc.rotation.x = -Math.PI / 2;
    disc.position.set(x, 0.028, z);
    scene.add(disc);
  }
  aoDisc(1.7, 0, -0.05);
  aoDisc(1.3, 0, -27.55);
  for (const [px, pz] of [
    [-3.15, -18.2],
    [-3.15, -20.45],
    [3.15, -18.2],
    [3.15, -20.45],
  ]) {
    aoDisc(1.2, px, pz);
  }

  const cacheDef = PICKUPS.find((p) => p.kind === "signal");
  const aidDef = PICKUPS.find((p) => p.kind === "health");
  const cache = new THREE.Group();
  const cacheBody = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.38), materials.brass);
  const cacheCore = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.16, 0.16),
    new THREE.MeshBasicMaterial({ color: 0xffb14a })
  );
  cacheCore.position.y = 0.22;
  cache.add(cacheBody, cacheCore);
  cache.position.set(cacheDef.x, 0.35, cacheDef.z);
  scene.add(cache);

  const aid = new THREE.Group();
  const aidBox = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.22, 0.26), std({ color: 0xe7e2d8, roughness: 0.6 }));
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.28), std({ color: 0x8d3a2a, roughness: 0.5 }));
  stripe.position.y = 0.08;
  aid.add(aidBox, stripe);
  aid.position.set(aidDef.x, 0.2, aidDef.z);
  scene.add(aid);

  const hemi = new THREE.HemisphereLight(0xe8e0d4, 0x3a3228, 0.74);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff1dc, 2.35);
  sun.position.set(8, 18, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.near = 2;
  sun.shadow.camera.far = 48;
  sun.shadow.camera.left = -16;
  sun.shadow.camera.right = 16;
  sun.shadow.camera.top = 16;
  sun.shadow.camera.bottom = -16;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.035;
  sun.shadow.radius = 2;
  sun.target.position.set(0, 0, -8);
  scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight(0xffe2c4, 0.7);
  fill.position.set(-10, 8, -6);
  fill.castShadow = false;
  scene.add(fill);

  const practicals = [];
  function practical(x, y, z, intensity = 36, distance = 8) {
    const light = new THREE.PointLight(0xffb15a, intensity, distance, 2);
    light.position.set(x, y, z);
    scene.add(light);
    practicals.push(light);
    return light;
  }
  practical(0, 3.2, -2.1, 18, 7);
  practical(-10, 2.4, 8.2, 28, 8);
  practical(9.2, 2.6, 8.4, 26, 7);
  practical(13.5, 2.8, -5, 34, 8);
  practical(-6, 3.4, -8, 22, 8);
  practical(4, 3.4, -8, 20, 8);
  practical(0, 5.2, 2, 30, 14);
  practical(0, 4.4, -21.5, 34, 16);
  practical(0, 3.3, -26.4, 16, 7);
  const flicker = practical(13.4, 2.6, 1.2, 24, 6);

  let doorLift = 0;
  let doorGoal = 0;
  let hornAimed = false;
  let hornHot = false;
  let pulse = 0;
  let lastTime = 0;

  scene.background = new THREE.Color(0xb3ab9f);
  scene.fog = new THREE.Fog(0xb3ab9f, 12, 40);

  return {
    colliders: activeColliders(),
    gates,
    cache,
    aid,
    textures,
    setDoor(open, instant = false) {
      doorGoal = open ? 1 : 0;
      if (!instant) return;
      doorLift = doorGoal;
      if (doorGroup) doorGroup.position.y = doorBaseY + doorLift * 6.4;
    },
    setVeil(up, channel) {
      if (!veilMesh) return;
      veilMesh.visible = !!up;
      if (!up) return;
      const ghost = channel === "DEAD_AIR";
      veilMat.opacity = ghost ? 0.16 : 0.94;
      veilMat.depthWrite = !ghost;
      veilMat.emissiveIntensity = ghost ? 0.62 : 0.3;
    },
    setHijack({ aimed, hot }) {
      hornAimed = !!aimed;
      hornHot = !!hot;
    },
    pulseHijack() {
      pulse = 0.48;
    },
    setChannel(channel) {
      const fog = scene.fog;
      if (channel === "STATIC") {
        fog.color.setHex(0x9aa0a4);
        fog.near = 12;
        fog.far = 38;
        scene.background.setHex(0x90969a);
      } else if (channel === "DEAD_AIR") {
        fog.color.setHex(0x2a3038);
        fog.near = 10;
        fog.far = 36;
        scene.background.setHex(0x242830);
      } else {
        fog.color.setHex(0xb3ab9f);
        fog.near = 12;
        fog.far = 40;
        scene.background.setHex(0xb3ab9f);
      }
      for (const gate of gates) {
        gate.material.opacity = channel === "DEAD_AIR" ? 0.14 : 0.97;
        gate.material.depthWrite = channel !== "DEAD_AIR";
        gate.material.emissiveIntensity = channel === "DEAD_AIR" ? 0.45 : 0.18;
      }
    },
    setPickup(which, visible) {
      if (which === "cache") cache.visible = visible;
      if (which === "aid") aid.visible = visible;
    },
    update(time, channel, focus) {
      if (focus) {
        const snap = 4;
        const sx = Math.round(focus.x / snap) * snap;
        const sz = Math.round(focus.z / snap) * snap;
        sun.position.set(sx + 8, 18, sz + 10);
        sun.target.position.set(sx, 0, sz);
      }
      const dt = Math.min(0.05, Math.max(0, time - lastTime || 0));
      lastTime = time;
      doorLift += (doorGoal - doorLift) * Math.min(1, dt * 4.2);
      if (doorGroup) doorGroup.position.y = doorBaseY + doorLift * 6.4;
      if (pulse > 0) pulse = Math.max(0, pulse - dt);
      ring.material.opacity = pulse > 0 ? pulse / 0.48 : 0;
      ring.scale.setScalar(pulse > 0 ? 1 + (1 - pulse / 0.48) * 2.4 : 1);
      hornMat.emissive.setHex(hornHot ? 0xfff6dd : 0xd4b15a);
      hornMat.emissiveIntensity = hornHot ? 1.15 : hornAimed ? 0.85 : 0.12;
      bulb.material.color.setHex(hornHot ? 0xfff1c8 : 0xffb14a);
      hornLight.color.setHex(hornHot ? 0xffe2a0 : 0xffb15a);
      hornLight.intensity = hornHot ? 22 : hornAimed ? 14 : 7;
      flicker.intensity = 18 + Math.sin(time * 28) * 10 + (Math.random() < 0.04 ? -12 : 0);
      if (channel === "STATIC") {
        const s = 1 + Math.sin(time * 6) * 0.08;
        cache.scale.setScalar(s);
      } else {
        cache.scale.setScalar(1);
      }
      windowGlow.material.color.setHSL(0.09, 0.85, channel === "DEAD_AIR" ? 0.18 : 0.55);
    },
    practicals,
  };
}

/** Cubemap from the aisle so visors reflect candles and the nave. No cyan. */
export function bakeAisleProbe(renderer, pmrem) {
  const probe = new THREE.Scene();
  probe.background = new THREE.Color(0x2c261f);
  const room = new THREE.Mesh(
    new THREE.BoxGeometry(18, 9, 18),
    new THREE.MeshBasicMaterial({ color: 0x2c261f, side: THREE.BackSide })
  );
  probe.add(room);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(18, 18), new THREE.MeshBasicMaterial({ color: 0x3a332c }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.6;
  probe.add(floor);
  const origin = new THREE.Vector3(0, 1.6, -20);
  const candles = [
    [-4.9, 0.55, -18.2],
    [4.9, 0.55, -18.2],
    [-4.9, 0.55, -20.45],
    [4.9, 0.55, -20.45],
    [-1.35, 0.95, -27.15],
    [1.35, 0.95, -27.15],
  ];
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffb14a });
  for (const [x, y, z] of candles) {
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), flameMat);
    flame.position.set(x - origin.x, y - origin.y, z - origin.z);
    probe.add(flame);
  }
  const altar = new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.1, 0.7), new THREE.MeshBasicMaterial({ color: 0xc6a15a }));
  altar.position.set(0, 0.55 - origin.y, -27.55 - origin.z);
  probe.add(altar);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.06, 8, 24), new THREE.MeshBasicMaterial({ color: 0xe6c56a }));
  halo.position.set(0, 2.2 - origin.y, -26.55 - origin.z);
  probe.add(halo);
  return pmrem.fromScene(probe, 0.04).texture;
}
