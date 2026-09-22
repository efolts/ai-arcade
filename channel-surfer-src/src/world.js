import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { BLOCKS, HIJACK_SPAWNS, PICKUPS, VEIL_Z, activeColliders } from "./level.js";
import { makeSign, makeTextures } from "./textures.js";

function std(params) {
  return new THREE.MeshStandardMaterial(params);
}

export function createWorld(scene) {
  const textures = makeTextures();
  const materials = {
    floor: std({ map: textures.floor, roughness: 0.94, metalness: 0.02 }),
    wall: std({ map: textures.wall, roughness: 0.88, metalness: 0.03 }),
    ceiling: std({ map: textures.ceiling, roughness: 0.96, metalness: 0 }),
    trim: std({ map: textures.trim, roughness: 0.74, metalness: 0.08 }),
    metal: std({ color: 0x6d7378, roughness: 0.38, metalness: 0.62 }),
    wood: std({ map: textures.wood, roughness: 0.66, metalness: 0.04 }),
    runner: std({ color: 0x4a4038, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }),
    dark: std({ color: 0x141210, roughness: 0.9 }),
    brass: std({ color: 0xb08d4e, roughness: 0.36, metalness: 0.64 }),
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
        std({ color: 0xe7e0d2, roughness: 0.62, metalness: 0.06 })
      );
      const frame = new THREE.Mesh(new THREE.BoxGeometry(block.w, 0.16, block.d * 0.8), materials.brass);
      frame.position.y = block.h * 0.42;
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.14, block.h * 0.72, block.d * 0.78), materials.brass);
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
    const mesh = new THREE.Mesh(merged, materials[name]);
    mesh.castShadow = name !== "floor" && name !== "ceiling" && name !== "runner";
    mesh.receiveShadow = true;
    scene.add(mesh);
  }

  const basin = new THREE.Mesh(
    new THREE.CylinderGeometry(1.55, 1.55, 0.08, 16),
    std({ color: 0x3e3a34, roughness: 0.95 })
  );
  basin.position.set(0, 0.05, -0.05);
  basin.receiveShadow = true;
  scene.add(basin);

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
    new THREE.MeshBasicMaterial({ color: 0xe6c56a })
  );
  seal.rotation.x = -Math.PI / 2;
  seal.position.set(0, 0.045, VEIL_Z);
  scene.add(seal);

  const hornDef = HIJACK_SPAWNS[0];
  const hornMat = std({
    color: 0xc6a15a,
    roughness: 0.32,
    metalness: 0.7,
    emissive: 0xd4b15a,
    emissiveIntensity: 0.12,
  });
  const horn = new THREE.Group();
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.34, 0.62, 10), hornMat);
  bell.rotation.z = Math.PI / 2;
  bell.castShadow = true;
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 8), materials.brass);
  neck.rotation.z = Math.PI / 2;
  neck.position.x = -0.42;
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffb14a }));
  bulb.position.x = 0.28;
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.55, 0.03, 6, 18),
    new THREE.MeshBasicMaterial({ color: 0x67f6ff, transparent: true, opacity: 0, depthWrite: false })
  );
  ring.rotation.y = Math.PI / 2;
  horn.add(bell, neck, bulb, ring);
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
      roughness: 0.92,
      metalness: 0.04,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    })
  );
  nave.rotation.x = -Math.PI / 2;
  nave.position.set(0, 0.018, -21.55);
  nave.receiveShadow = true;
  scene.add(nave);

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

  const hemi = new THREE.HemisphereLight(0xf0e8dc, 0x3a322a, 0.98);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff3e2, 2.65);
  sun.position.set(7, 16, 8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 70;
  sun.shadow.camera.left = -30;
  sun.shadow.camera.right = 30;
  sun.shadow.camera.top = 30;
  sun.shadow.camera.bottom = -30;
  sun.shadow.bias = -0.00035;
  sun.shadow.normalBias = 0.04;
  sun.target.position.set(0, 0, -8);
  scene.add(sun, sun.target);

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

  scene.background = new THREE.Color(0xc4bdb2);
  scene.fog = new THREE.Fog(0xc4bdb2, 18, 48);

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
        fog.color.setHex(0xc4bdb2);
        fog.near = 18;
        fog.far = 48;
        scene.background.setHex(0xc4bdb2);
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
    update(time, channel) {
      const dt = Math.min(0.05, Math.max(0, time - lastTime || 0));
      lastTime = time;
      doorLift += (doorGoal - doorLift) * Math.min(1, dt * 4.2);
      if (doorGroup) doorGroup.position.y = doorBaseY + doorLift * 6.4;
      if (pulse > 0) pulse = Math.max(0, pulse - dt);
      ring.material.opacity = pulse > 0 ? pulse / 0.48 : 0;
      ring.scale.setScalar(pulse > 0 ? 1 + (1 - pulse / 0.48) * 2.4 : 1);
      hornMat.emissive.setHex(hornHot ? 0x67f6ff : 0xd4b15a);
      hornMat.emissiveIntensity = hornHot ? 1.15 : hornAimed ? 0.85 : 0.12;
      bulb.material.color.setHex(hornHot ? 0x67f6ff : 0xffb14a);
      hornLight.color.setHex(hornHot ? 0x67f6ff : 0xffb15a);
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
