import * as THREE from "three";
import { PRIEST_SPAWN, createChapelEnemies, createEnemies } from "./level.js";
import { geos, mesh } from "./meshkit.js";

let contactMat = null;
function contactBlob(radius) {
  if (!contactMat) {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const g = canvas.getContext("2d");
    const grd = g.createRadialGradient(32, 32, 2, 32, 32, 31);
    grd.addColorStop(0, "rgba(0,0,0,0.48)");
    grd.addColorStop(0.5, "rgba(0,0,0,0.2)");
    grd.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = grd;
    g.fillRect(0, 0, 64, 64);
    const map = new THREE.CanvasTexture(canvas);
    map.colorSpace = THREE.SRGBColorSpace;
    contactMat = new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false });
  }
  const blob = new THREE.Mesh(new THREE.CircleGeometry(radius, 24), contactMat);
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.025;
  blob.castShadow = false;
  blob.receiveShadow = false;
  return blob;
}

function mark(material, rest = 0x000000, restI = 0) {
  material.userData.rest = rest;
  material.userData.restI = restI;
  material.emissive = new THREE.Color(rest);
  material.emissiveIntensity = restI;
  return material;
}

function palette(textures, envMap) {
  const pearl = mark(
    new THREE.MeshPhysicalMaterial({
      map: textures.pearl,
      normalMap: textures.pearlNormal,
      roughnessMap: textures.pearlRough,
      roughness: 0.85,
      metalness: 0.02,
      clearcoat: 0.58,
      clearcoatRoughness: 0.24,
      envMapIntensity: 0.36,
    })
  );
  pearl.normalScale.set(0.45, 0.45);
  const worn = mark(
    new THREE.MeshStandardMaterial({
      map: textures.pearlWorn,
      normalMap: textures.pearlNormal,
      roughnessMap: textures.pearlRough,
      roughness: 1,
      metalness: 0.02,
      envMapIntensity: 0.22,
    })
  );
  worn.normalScale.set(0.65, 0.65);
  const joint = mark(
    new THREE.MeshStandardMaterial({
      map: textures.joint,
      color: 0x1a1a1a,
      roughness: 0.38,
      metalness: 0.62,
      envMapIntensity: 0.45,
    })
  );
  const visor = mark(
    new THREE.MeshPhysicalMaterial({
      color: 0x07090e,
      roughness: 0.035,
      metalness: 0.12,
      clearcoat: 1,
      clearcoatRoughness: 0.03,
      iridescence: 0,
      ior: 1.55,
      envMapIntensity: envMap ? 1.15 : 0.72,
      reflectivity: 1,
      envMap: envMap || null,
    })
  );
  visor.polygonOffset = true;
  visor.polygonOffsetFactor = -2;
  visor.polygonOffsetUnits = -2;
  const cloth = mark(
    new THREE.MeshPhysicalMaterial({
      map: textures.cloth,
      normalMap: textures.clothNormal,
      roughnessMap: textures.clothRough,
      roughness: 1,
      metalness: 0,
      sheen: 0.42,
      sheenRoughness: 0.55,
      sheenColor: new THREE.Color(0xf6f1e8),
      envMapIntensity: 0.32,
    })
  );
  cloth.normalScale.set(0.4, 0.4);
  const gold = mark(
    new THREE.MeshStandardMaterial({
      map: textures.gold,
      normalMap: textures.goldNormal,
      roughnessMap: textures.goldRough,
      roughness: 1,
      metalness: 0.86,
      envMapIntensity: 0.9,
    }),
    0x6a5018,
    0.16
  );
  gold.normalScale.set(0.35, 0.35);
  const amber = new THREE.MeshBasicMaterial({ color: 0xffb14a });
  return { pearl, worn, joint, visor, cloth, gold, amber };
}

function jointSphere(material, radius, x, y, z) {
  const obj = mesh(geos().joint, material, x, y, z);
  obj.scale.setScalar(radius);
  return obj;
}

function paint(list, amount, tint = 0xfff6ee) {
  for (const material of list) {
    if (amount > 0.02) {
      material.emissive.setHex(tint);
      material.emissiveIntensity = amount;
    } else {
      material.emissive.setHex(material.userData.rest || 0x000000);
      material.emissiveIntensity = material.userData.restI || 0;
    }
  }
}

function buildTessera(textures, options = {}) {
  const group = new THREE.Group();
  const g = geos();
  const mat = palette(textures, options.envMap);
  const parts = [];

  const torso = mesh(g.torso, mat.pearl);
  const belt = mesh(new THREE.CylinderGeometry(0.188, 0.188, 0.048, 18), mat.joint, 0, 1.02, 0);
  const collar = mesh(g.collar, mat.joint, 0, 1.5, 0);
  const head = new THREE.Group();
  head.position.set(0, 1.66, 0);
  const helmet = mesh(g.helmet, mat.pearl);
  helmet.scale.set(1.06, 0.96, 1.08);
  const visor = mesh(new THREE.SphereGeometry(0.172, 40, 24), mat.visor, 0, -0.045, 0.168);
  visor.scale.set(1.18, 1.14, 0.36);
  const sensor = mesh(new THREE.SphereGeometry(0.026, 12, 8), mat.pearl, 0, 0.148, 0.12);
  sensor.scale.set(1, 0.65, 0.5);
  const weak = mesh(g.seam, mat.amber, 0, -0.02, 0.185);
  weak.visible = false;
  weak.castShadow = false;
  head.add(helmet, visor, sensor, weak);

  parts.push(torso, belt, collar, head);

  function limb(side, shoulder) {
    const pivot = new THREE.Group();
    if (shoulder) {
      pivot.add(jointSphere(mat.joint, 0.055, 0, 0, 0));
      pivot.add(mesh(g.upper, mat.pearl, 0, -0.16, 0));
      pivot.add(jointSphere(mat.joint, 0.042, 0, -0.3, 0));
      pivot.add(mesh(g.forearm, mat.joint, 0, -0.42, 0));
      pivot.add(mesh(g.hand, mat.joint, 0, 0.08, 0));
      const pad = mesh(g.joint, mat.pearl, side * 0.02, 0.02, 0.01);
      pad.scale.set(0.09, 0.055, 0.078);
      pivot.add(pad);
    } else {
      pivot.add(jointSphere(mat.joint, 0.058, 0, 0, 0));
      pivot.add(mesh(g.thigh, mat.pearl, 0, -0.2, 0));
      pivot.add(jointSphere(mat.joint, 0.048, 0, -0.38, 0));
      pivot.add(mesh(g.shin, mat.worn, 0, -0.56, 0));
      const foot = mesh(g.foot, mat.worn, 0, -0.76, 0.03);
      pivot.add(foot);
    }
    return pivot;
  }

  const lLeg = limb(-1, false);
  lLeg.position.set(-0.12, 0.8, 0);
  lLeg.rotation.z = 0.08;
  const rLeg = limb(1, false);
  rLeg.position.set(0.12, 0.8, 0);
  rLeg.rotation.z = -0.08;
  const lArm = limb(-1, true);
  lArm.position.set(-0.32, 1.4, 0);
  lArm.rotation.z = 0.42;
  const rArm = limb(1, true);
  rArm.position.set(0.32, 1.4, 0);
  rArm.rotation.z = -0.36;

  const gun = mesh(g.gun, mat.joint, 0.045, 0.02, 0.02);
  const muzzle = mesh(g.muzzle, mat.amber, 0.045, -0.525, 0.22);
  muzzle.castShadow = false;
  rArm.add(gun, muzzle);

  const shadow = contactBlob(0.48);

  group.add(...parts, lLeg, rLeg, lArm, rArm, shadow);

  let cloth = null;
  if (options.vestment) {
    const tabard = mesh(g.tabard, mat.cloth, 0, 0.92, 0.16);
    const back = mesh(new THREE.BoxGeometry(0.28, 0.42, 0.04), mat.cloth, 0, 0.95, -0.14);
    const stole = mesh(g.stole, mat.gold, 0, 1.16, 0.18);
    const mantle = mesh(
      new THREE.LatheGeometry(
        [new THREE.Vector2(0.18, 0), new THREE.Vector2(0.32, 0.04), new THREE.Vector2(0.24, 0.1)],
        24
      ),
      mat.cloth,
      0,
      1.4,
      0
    );
    const skirt = motionMesh(
      sculptCloth(
        new THREE.LatheGeometry(
          [
            new THREE.Vector2(0.2, 0.02),
            new THREE.Vector2(0.36, 0.2),
            new THREE.Vector2(0.4, 0.46),
            new THREE.Vector2(0.3, 0.74),
            new THREE.Vector2(0.22, 0.96),
          ],
          28
        ),
        6,
        0.016
      ),
      mat.cloth,
      0,
      0.06,
      0
    );
    cloth = skirt;
    group.add(tabard, back, stole, mantle, skirt);
  }
  stampTangents(group);

  return {
    group,
    weak,
    lLeg,
    rLeg,
    lArm,
    rArm,
    muzzle,
    shadow,
    cloth,
    flashMats: [mat.pearl, mat.worn, mat.joint, mat.visor, mat.cloth, mat.gold],
    flash: 0,
  };
}

function buildPriest(textures, envMap) {
  const group = new THREE.Group();
  const mat = palette(textures, envMap);
  const g = geos();

  const robe = motionMesh(sculptCloth(g.robe, 8, 0.04), mat.cloth);
  const mantle = motionMesh(
    new THREE.LatheGeometry(
      [
        new THREE.Vector2(0.22, 0),
        new THREE.Vector2(0.5, 0.06),
        new THREE.Vector2(0.42, 0.16),
        new THREE.Vector2(0.2, 0.22),
      ],
      28
    ),
    mat.cloth,
    0,
    1.46,
    0
  );
  const capeMat = mat.cloth.clone();
  capeMat.side = THREE.DoubleSide;
  const cape = motionMesh(
    new THREE.CylinderGeometry(0.3, 0.56, 1.35, 18, 1, true, Math.PI - 0.9, 1.8),
    capeMat,
    0,
    0.78,
    -0.06
  );
  const cowl = mesh(
    new THREE.LatheGeometry(
      [new THREE.Vector2(0.12, 0), new THREE.Vector2(0.22, 0.06), new THREE.Vector2(0.16, 0.16)],
      24
    ),
    mat.cloth,
    0,
    1.68,
    0
  );
  const hem = mesh(new THREE.TorusGeometry(0.48, 0.018, 8, 32), mat.gold, 0, 0.12, 0);
  hem.rotation.x = Math.PI / 2;
  const belt = mesh(new THREE.TorusGeometry(0.35, 0.02, 8, 28), mat.gold, 0, 1.12, 0);
  belt.rotation.x = Math.PI / 2;
  const stole = mesh(new THREE.BoxGeometry(0.14, 1.05, 0.04), mat.gold, 0, 1.02, 0.22);
  const pendant = mesh(new THREE.SphereGeometry(0.045, 12, 10), mat.gold, 0, 0.7, 0.26);

  const head = new THREE.Group();
  head.position.set(0, 2.05, 0);
  head.scale.setScalar(1.18);
  const helmet = mesh(g.helmet, mat.pearl);
  const sensor = mesh(new THREE.SphereGeometry(0.028, 12, 8), mat.pearl, 0, 0.15, 0.11);
  sensor.scale.set(1, 0.62, 0.48);
  const visor = mesh(new THREE.SphereGeometry(0.175, 40, 24), mat.visor, 0, -0.04, 0.162);
  visor.scale.set(1.22, 1.2, 0.38);
  const seam = mesh(new THREE.BoxGeometry(0.22, 0.03, 0.018), mat.amber, 0, -0.02, 0.175);
  seam.visible = false;
  seam.castShadow = false;
  head.add(helmet, sensor, visor, seam);

  const haloMat = new THREE.MeshStandardMaterial({
    color: 0xe6c56a,
    map: textures.gold,
    normalMap: textures.goldNormal,
    roughnessMap: textures.goldRough,
    roughness: 1,
    metalness: 0.82,
    emissive: 0xe6c56a,
    emissiveIntensity: 0.85,
    transparent: true,
    opacity: 0.94,
    depthWrite: false,
    envMapIntensity: 0.7,
  });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.04, 12, 48), haloMat);
  halo.position.set(0, 2.22, -0.16);
  const inner = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.016, 8, 36), haloMat);
  halo.add(inner);
  const gem = mesh(new THREE.SphereGeometry(0.032, 10, 8), mat.gold, 0.58, 0, 0);
  halo.add(gem);

  function raisedArm(side) {
    const pivot = new THREE.Group();
    const sleeve = mesh(new THREE.CylinderGeometry(0.075, 0.13, 0.52, 14), mat.cloth, 0, 0.26, 0);
    const cuff = mesh(new THREE.TorusGeometry(0.078, 0.016, 8, 16), mat.gold, 0, 0.5, 0);
    cuff.rotation.x = Math.PI / 2;
    const glove = openGlove(mat.pearl, mat.amber, side);
    pivot.add(sleeve, cuff, glove.rig);
    pivot.position.set(side * 0.42, 1.48, 0.02);
    return { pivot, hand: glove.amber, digits: glove.digits };
  }
  const left = raisedArm(-1);
  const right = raisedArm(1);

  for (const y of [1.4, 1.2, 1.0]) {
    const chain = mesh(new THREE.TorusGeometry(0.2, 0.01, 8, 22, Math.PI * 0.9), mat.gold, 0, y, 0.08);
    chain.rotation.x = Math.PI / 2;
    group.add(chain);
  }

  const shadow = contactBlob(0.9);

  group.add(robe, cape, mantle, cowl, hem, belt, stole, pendant, head, halo, left.pivot, right.pivot, shadow);
  group.position.set(PRIEST_SPAWN.x, 0, PRIEST_SPAWN.z);
  stampTangents(group);
  return {
    group,
    halo,
    haloMat,
    seam,
    shadow,
    lArm: left.pivot,
    rArm: right.pivot,
    lHand: left.hand,
    rHand: right.hand,
    lDigits: left.digits,
    rDigits: right.digits,
    cloths: [robe, cape, mantle],
    flashMats: [mat.pearl, mat.cloth, mat.visor, mat.gold],
    flash: 0,
  };
}

function openGlove(pearl, amber, side) {
  const rig = new THREE.Group();
  rig.position.set(0, 0.58, 0.1);
  const palmGeo = new THREE.SphereGeometry(0.055, 12, 8);
  palmGeo.scale(1.7, 1.15, 0.4);
  const palm = mesh(palmGeo, pearl);
  palm.castShadow = false;
  rig.add(palm);
  const digits = [];
  const spreads = [-0.058, -0.02, 0.02, 0.058];
  const lengths = [0.09, 0.11, 0.1, 0.078];
  for (let i = 0; i < 4; i++) {
    const knuckle = new THREE.Group();
    knuckle.position.set(spreads[i], 0.04, 0.02);
    const len = lengths[i];
    const base = mesh(new THREE.CylinderGeometry(0.012, 0.014, len, 6), pearl, 0, len * 0.48, 0);
    base.castShadow = false;
    const tipPivot = new THREE.Group();
    tipPivot.position.y = len * 0.9;
    const tipLen = len * 0.7;
    const tip = mesh(new THREE.CylinderGeometry(0.009, 0.012, tipLen, 6), pearl, 0, tipLen * 0.46, 0);
    tip.castShadow = false;
    tipPivot.add(tip);
    knuckle.add(base, tipPivot);
    rig.add(knuckle);
    digits.push({ knuckle, tip: tipPivot });
  }
  const thumb = new THREE.Group();
  thumb.position.set(side * 0.078, -0.006, 0.02);
  thumb.rotation.z = side * 0.85;
  const thumbBase = mesh(new THREE.CylinderGeometry(0.01, 0.012, 0.05, 6), pearl, 0, 0.028, 0);
  thumbBase.castShadow = false;
  const thumbTip = new THREE.Group();
  thumbTip.position.y = 0.05;
  const thumbTipMesh = mesh(new THREE.CylinderGeometry(0.007, 0.01, 0.032, 6), pearl, 0, 0.016, 0);
  thumbTipMesh.castShadow = false;
  thumbTip.add(thumbTipMesh);
  thumb.add(thumbBase, thumbTip);
  rig.add(thumb);
  digits.push({ knuckle: thumb, tip: thumbTip });
  const pad = mesh(new THREE.BoxGeometry(0.09, 0.07, 0.014), amber, 0, 0.01, 0.04);
  pad.castShadow = false;
  rig.add(pad);
  return { rig, digits, amber: pad };
}

function flexHand(digits, amount) {
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    const bias = i === digits.length - 1 ? 0.55 : 1;
    digit.knuckle.rotation.x = -amount * bias;
    digit.tip.rotation.x = -amount * 0.8 * bias;
  }
}

function swayCloth(meshes, time, phase = 0, scale = 1) {
  if (!meshes) return;
  const list = Array.isArray(meshes) ? meshes : [meshes];
  for (const obj of list) {
    if (!obj?.morphTargetInfluences) continue;
    obj.morphTargetInfluences[0] = Math.sin(time * 0.75 + phase) * 0.6 * scale;
    obj.morphTargetInfluences[1] = Math.sin(time * 0.5 + phase + 0.8) * 0.4 * scale;
  }
}

function clothMotion(geo) {
  const pos = geo.attributes.position;
  let minY = Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  const span = Math.max(0.001, maxY - minY);
  const sway = new Float32Array(pos.count * 3);
  const billow = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const hem = Math.pow(Math.max(0, (maxY - pos.getY(i)) / span), 1.35);
    sway[i * 3] = hem * 0.08;
    billow[i * 3 + 2] = hem * 0.055;
  }
  geo.morphAttributes.position = [
    new THREE.Float32BufferAttribute(sway, 3),
    new THREE.Float32BufferAttribute(billow, 3),
  ];
  return geo;
}

function motionMesh(geo, material, x = 0, y = 0, z = 0) {
  clothMotion(geo);
  const obj = mesh(geo, material, x, y, z);
  obj.updateMorphTargets();
  return obj;
}

function sculptCloth(geo, waves = 7, amp = 0.02) {
  const copy = geo.clone();
  const pos = copy.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const radius = Math.hypot(x, z) || 1;
    const ang = Math.atan2(x, z);
    const front = 0.4 + 0.6 * Math.max(0, z / radius);
    const drape = 0.4 + 0.6 * Math.min(1, Math.max(0, (1.35 - y) / 1.35));
    const fold = Math.sin(ang * waves) * amp * front * drape;
    pos.setXYZ(i, x + (x / radius) * fold, y, z + (z / radius) * fold);
  }
  pos.needsUpdate = true;
  copy.computeVertexNormals();
  if (copy.getAttribute("tangent")) copy.deleteAttribute("tangent");
  return copy;
}

function stampTangents(group) {
  group.traverse((obj) => {
    const geo = obj.geometry;
    if (!obj.isMesh || !obj.material?.normalMap || !geo?.index || geo.attributes.tangent) return;
    if (!geo.attributes.uv || !geo.attributes.normal) return;
    try {
      geo.computeTangents();
    } catch {
      /* a prop without a clean index still draws; it just skips the normal map */
    }
  });
}

export function createActors(scene, textures, envMap) {
  const records = new Map();
  const chapelIds = new Set(createChapelEnemies().map((enemy) => enemy.id));
  for (const enemy of [...createEnemies(), ...createChapelEnemies()]) {
    const built = buildTessera(textures, { vestment: chapelIds.has(enemy.id), envMap });
    built.group.position.set(enemy.x, 0, enemy.z);
    built.group.visible = enemy.visible;
    built.death = 0;
    built.died = false;
    built.phase = Math.random() * Math.PI * 2;
    built.prevX = enemy.x;
    built.prevZ = enemy.z;
    scene.add(built.group);
    records.set(enemy.id, built);
  }

  const priestRec = buildPriest(textures, envMap);
  priestRec.died = false;
  priestRec.death = 0;
  priestRec.pose = 0;
  scene.add(priestRec.group);

  const boltGeo = new THREE.SphereGeometry(0.08, 7, 5);
  const boltMat = new THREE.MeshBasicMaterial({ color: 0xffb020 });
  const boltMeshes = [];
  for (let i = 0; i < 16; i++) {
    const bolt = new THREE.Mesh(boltGeo, boltMat);
    bolt.visible = false;
    bolt.frustumCulled = false;
    scene.add(bolt);
    boltMeshes.push(bolt);
  }

  return {
    reset(enemies) {
      for (const enemy of enemies) {
        const rec = records.get(enemy.id);
        if (!rec) continue;
        rec.prevX = enemy.x;
        rec.prevZ = enemy.z;
        rec.group.position.set(enemy.x, 0, enemy.z);
        rec.group.rotation.set(0, 0, 0);
        rec.group.scale.setScalar(1);
        rec.flash = 0;
        paint(rec.flashMats, 0);
        rec.weak.visible = false;
        if (!enemy.alive) {
          rec.died = true;
          rec.death = 0;
          rec.group.visible = false;
          continue;
        }
        rec.death = 0;
        rec.died = false;
        rec.group.visible = enemy.visible;
      }
    },
    resetPriest(priest) {
      priestRec.died = false;
      priestRec.death = 0;
      priestRec.pose = 0;
      priestRec.flash = 0;
      priestRec.group.visible = true;
      priestRec.group.rotation.set(0, 0, 0);
      priestRec.group.position.set(priest.x, 0, priest.z);
      priestRec.halo.scale.setScalar(1);
      paint(priestRec.flashMats, 0);
      priestRec.seam.visible = false;
    },
    syncPriest(priest, dt, time, channel) {
      if (!priest.alive) {
        if (!priestRec.died) {
          priestRec.died = true;
          priestRec.death = 1.05;
        }
        priestRec.death -= dt;
        const k = 1 - Math.max(priestRec.death, 0) / 1.05;
        priestRec.group.visible = priestRec.death > 0;
        priestRec.group.rotation.x = k * 1.25;
        priestRec.group.position.set(priest.x, -k * 0.55, priest.z);
        priestRec.shadow.visible = false;
        priestRec.halo.scale.setScalar(Math.max(0, 1 - k));
        priestRec.seam.visible = false;
        priestRec.lArm.rotation.x = 0.9;
        priestRec.rArm.rotation.x = 0.7;
        flexHand(priestRec.lDigits, 0.85);
        flexHand(priestRec.rDigits, 0.75);
        paint(priestRec.flashMats, k < 0.45 ? (1 - k / 0.45) * 2.4 : 0);
        return;
      }
      priestRec.died = false;
      priestRec.death = 0;
      priestRec.group.visible = true;
      priestRec.group.rotation.set(0, priest.yaw || 0, Math.sin(time * 0.8) * 0.008);
      const breathe = Math.sin(time * 1.15) * 0.015;
      priestRec.group.position.set(priest.x, breathe, priest.z);
      priestRec.shadow.visible = true;
      priestRec.shadow.position.y = 0.025 - breathe;
      priestRec.halo.rotation.z = time * 0.15;
      const rite = priest.phase === "rite";
      const splay = rite ? 1.28 : priest.windup > 0 ? 0.4 : 1.12;
      const reach = priest.windup > 0 ? -0.85 : rite ? -0.25 : -0.12;
      priestRec.lArm.rotation.set(reach, 0, splay);
      priestRec.rArm.rotation.set(reach, 0, -splay);
      swayCloth(priestRec.cloths, time, 0.2, 1);
      const curl = priest.windup > 0 ? 0.62 : rite ? 0.1 + Math.sin(time * 2.2) * 0.04 : 0.2 + Math.sin(time * 1.35) * 0.07;
      flexHand(priestRec.lDigits, curl);
      flexHand(priestRec.rDigits, curl);
      const riteHalo = !!priest.haloVisible;
      const revealed = riteHalo && channel === "STATIC";
      priestRec.halo.visible = true;
      const pulse = riteHalo ? 1 + Math.sin(time * 7) * 0.06 : 1;
      priestRec.halo.scale.setScalar(pulse);
      priestRec.haloMat.opacity = revealed ? 1 : riteHalo ? 0.96 : 0.9;
      priestRec.haloMat.emissiveIntensity = revealed ? 2.4 : riteHalo ? 1.55 : 0.85;
      priestRec.seam.visible = !!priest.exposed;
      const hot = priest.windup > 0 || priest.phase === "rite";
      priestRec.lHand.visible = hot;
      priestRec.rHand.visible = hot;
      const hand = hot ? 1.45 : 1;
      priestRec.lHand.scale.setScalar(hand);
      priestRec.rHand.scale.setScalar(hand);
      if (priest.hurt > 0) priestRec.flash = 0.2;
      priestRec.flash = Math.max(0, priestRec.flash - dt);
      paint(priestRec.flashMats, priestRec.flash > 0 ? (priestRec.flash / 0.2) * 2.6 : 0);
    },
    sync(enemies, dt, time, channel) {
      for (const enemy of enemies) {
        const rec = records.get(enemy.id);
        if (!enemy.alive) {
          if (!rec.died) {
            rec.died = true;
            rec.death = 0.85;
          }
          rec.death -= dt;
          const k = 1 - Math.max(rec.death, 0) / 0.85;
          rec.group.visible = rec.death > 0;
          rec.group.rotation.x = k * 1.35;
          rec.group.position.set(enemy.x, -k * 0.4, enemy.z);
          rec.shadow.visible = false;
          rec.group.scale.setScalar(1);
          rec.lArm.rotation.x = 0.5 + k * 0.6;
          rec.rArm.rotation.x = 0.3 + k * 0.9;
          rec.lLeg.rotation.x = -0.25 * k;
          rec.rLeg.rotation.x = 0.4 * k;
          rec.weak.visible = false;
          paint(rec.flashMats, k < 0.4 ? (1 - k / 0.4) * 2.4 : 0);
          continue;
        }
        rec.died = false;
        rec.death = 0;
        rec.group.visible = !!enemy.visible;
        const moved = Math.hypot(enemy.x - rec.prevX, enemy.z - rec.prevZ);
        rec.prevX = enemy.x;
        rec.prevZ = enemy.z;
        const bob = Math.sin(time * 1.4 + rec.phase) * (moved > 0.004 ? 0.02 : 0.012);
        rec.group.rotation.set(0, enemy.yaw || 0, Math.sin(time * 1.1 + rec.phase) * 0.012);
        rec.group.position.set(enemy.x, bob, enemy.z);
        rec.shadow.visible = true;
        rec.shadow.position.y = 0.025 - bob;
        const swing = moved > 0.004 ? Math.sin(time * 8 + rec.phase) : Math.sin(time * 1.6 + rec.phase) * 0.15;
        rec.lLeg.rotation.x = swing * 0.7;
        rec.rLeg.rotation.x = -swing * 0.7;
        rec.lArm.rotation.x = -swing * 0.45;
        rec.rArm.rotation.x = swing * 0.25 + (enemy.windup > 0 ? -0.95 : -0.06);
        rec.weak.visible = !!enemy.exposed;
        if (enemy.hurt > 0) rec.flash = 0.16;
        rec.flash = Math.max(0, rec.flash - dt);
        if (rec.flash > 0) {
          paint(rec.flashMats, (rec.flash / 0.16) * 2.8);
          rec.group.scale.setScalar(1.035);
        } else if (enemy.cloaked && enemy.visible) {
          const pulse = 0.22 + Math.sin(time * 9) * 0.1;
          paint(rec.flashMats, pulse, 0xffd7a8);
          rec.group.scale.setScalar(1);
        } else {
          paint(rec.flashMats, 0);
          rec.group.scale.setScalar(1);
        }
        rec.muzzle.scale.setScalar(enemy.windup > 0 ? 1.8 : 1);
        if (rec.cloth) swayCloth(rec.cloth, time, rec.phase, 0.85);
        if (enemy.cloaked && enemy.visible && channel !== "STATIC" && enemy.reveal < 0.5) {
          rec.group.visible = Math.sin(time * 46) > -0.2;
        }
      }
    },
    syncBolts(bolts) {
      for (let i = 0; i < boltMeshes.length; i++) {
        const boltMesh = boltMeshes[i];
        const bolt = bolts[i];
        if (!bolt) {
          boltMesh.visible = false;
          continue;
        }
        boltMesh.visible = true;
        boltMesh.position.set(bolt.x, bolt.y, bolt.z);
      }
    },
  };
}
