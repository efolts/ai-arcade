import * as THREE from "three";
import { PRIEST_SPAWN, createChapelEnemies, createEnemies } from "./level.js";

function limb(material, w, h, d, jointMat) {
  const pivot = new THREE.Group();
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.y = -h / 2;
  mesh.castShadow = true;
  const joint = new THREE.Mesh(new THREE.SphereGeometry(Math.max(w, d) * 0.55, 8, 8), jointMat);
  pivot.add(mesh, joint);
  return pivot;
}

function buildTessera(options = {}) {
  const group = new THREE.Group();
  const pearl = new THREE.MeshStandardMaterial({
    color: 0xf4f1ea,
    roughness: 0.42,
    metalness: 0.08,
    emissive: 0xfff6ea,
    emissiveIntensity: 0,
  });
  const black = new THREE.MeshStandardMaterial({ color: 0x121212, roughness: 0.38, metalness: 0.45 });
  const joint = new THREE.MeshStandardMaterial({ color: 0x0e0e0e, roughness: 0.5, metalness: 0.25 });

  const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.22, 0.24), pearl);
  pelvis.position.y = 0.84;
  pelvis.castShadow = true;
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.58, 0.28), pearl);
  torso.position.y = 1.24;
  torso.castShadow = true;
  const band = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.08, 0.3), black);
  band.position.y = 1.02;
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.32, 0.3), pearl);
  head.position.y = 1.68;
  head.castShadow = true;
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.12, 0.06), black);
  visor.position.set(0, 1.68, 0.16);
  const weak = new THREE.Mesh(
    new THREE.BoxGeometry(0.26, 0.05, 0.03),
    new THREE.MeshBasicMaterial({ color: 0xffb14a })
  );
  weak.position.set(0, 1.68, 0.2);
  weak.visible = false;

  const lLeg = limb(pearl, 0.14, 0.72, 0.14, joint);
  lLeg.position.set(-0.12, 0.74, 0);
  const rLeg = limb(pearl, 0.14, 0.72, 0.14, joint);
  rLeg.position.set(0.12, 0.74, 0);
  const lArm = limb(pearl, 0.1, 0.58, 0.1, joint);
  lArm.position.set(-0.34, 1.42, 0);
  const rArm = limb(pearl, 0.1, 0.58, 0.1, joint);
  rArm.position.set(0.34, 1.42, 0);

  const gun = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.32), black);
  gun.position.set(0, -0.58, 0.12);
  const muzzle = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.05, 0.08),
    new THREE.MeshBasicMaterial({ color: 0xffb14a })
  );
  muzzle.position.set(0, -0.58, 0.3);
  rArm.add(gun, muzzle);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 12),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;

  group.add(pelvis, torso, band, head, visor, weak, lLeg, rLeg, lArm, rArm, shadow);
  if (options.vestment) {
    const robe = new THREE.Mesh(
      new THREE.BoxGeometry(0.64, 0.78, 0.38),
      new THREE.MeshStandardMaterial({ color: 0xf7f4ee, roughness: 0.62, metalness: 0.02 })
    );
    robe.position.set(0, 0.92, 0);
    robe.castShadow = true;
    const stole = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.7, 0.08),
      new THREE.MeshStandardMaterial({ color: 0xd4b15a, roughness: 0.38, metalness: 0.62, emissive: 0x6a5018, emissiveIntensity: 0.12 })
    );
    stole.position.set(0, 1.18, 0.18);
    group.add(robe, stole);
  }
  return { group, pearl, weak, lLeg, rLeg, lArm, rArm, muzzle };
}

function buildPriest() {
  const group = new THREE.Group();
  const robeMat = new THREE.MeshStandardMaterial({
    color: 0xf7f4ee,
    roughness: 0.58,
    metalness: 0.04,
    emissive: 0x000000,
    emissiveIntensity: 0,
  });
  const pearlMat = new THREE.MeshStandardMaterial({
    color: 0xf4f1ea,
    roughness: 0.4,
    metalness: 0.12,
    emissive: 0x000000,
    emissiveIntensity: 0,
  });
  const blackMat = new THREE.MeshStandardMaterial({ color: 0x121212, roughness: 0.35, metalness: 0.48 });
  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xd4b15a,
    roughness: 0.34,
    metalness: 0.72,
    emissive: 0x8a6820,
    emissiveIntensity: 0.16,
  });
  const amberMat = new THREE.MeshBasicMaterial({ color: 0xffb14a });

  const robe = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.72, 0.52), robeMat);
  robe.position.y = 1.02;
  robe.castShadow = true;
  const stole = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.35, 0.08), goldMat);
  stole.position.set(0, 1.12, 0.28);
  const belt = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.1, 0.56), goldMat);
  belt.position.y = 1.18;
  const hem = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.08, 0.56), goldMat);
  hem.position.y = 0.22;

  const helmet = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.42, 0.42), pearlMat);
  helmet.position.y = 2.05;
  helmet.castShadow = true;
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.16, 0.08), blackMat);
  visor.position.set(0, 2.04, 0.2);
  const seam = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.045, 0.03), amberMat);
  seam.position.set(0, 2.04, 0.25);
  seam.visible = false;

  const haloMat = new THREE.MeshStandardMaterial({
    color: 0xe6c56a,
    roughness: 0.28,
    metalness: 0.64,
    emissive: 0xe6c56a,
    emissiveIntensity: 0.85,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
  });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.055, 10, 28), haloMat);
  halo.position.set(0, 2.22, -0.16);

  function raisedArm(side) {
    const pivot = new THREE.Group();
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.72, 0.15), pearlMat);
    mesh.position.y = 0.36;
    mesh.castShadow = true;
    const cuff = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.18), goldMat);
    cuff.position.y = 0.08;
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), amberMat);
    hand.position.y = 0.78;
    pivot.add(mesh, cuff, hand);
    pivot.position.set(side * 0.58, 1.48, 0.08);
    pivot.rotation.z = side * -0.85;
    return { pivot, hand };
  }
  const left = raisedArm(-1);
  const right = raisedArm(1);
  const lArm = left.pivot;
  const rArm = right.pivot;
  const lHand = left.hand;
  const rHand = right.hand;

  for (const y of [1.45, 1.22, 0.98]) {
    const chain = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.035, 0.035), goldMat);
    chain.position.set(0, y, 0.3);
    group.add(chain);
  }

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.72, 14),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;

  group.add(robe, stole, belt, hem, helmet, visor, seam, halo, lArm, rArm, shadow);
  group.position.set(PRIEST_SPAWN.x, 0, PRIEST_SPAWN.z);
  return { group, robe: robeMat, pearl: pearlMat, halo, haloMat, seam, lArm, rArm, lHand, rHand };
}

export function createActors(scene) {
  const records = new Map();
  const chapelIds = new Set(createChapelEnemies().map((enemy) => enemy.id));
  for (const enemy of [...createEnemies(), ...createChapelEnemies()]) {
    const built = buildTessera({ vestment: chapelIds.has(enemy.id) });
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

  const priestRec = buildPriest();
  priestRec.died = false;
  priestRec.death = 0;
  priestRec.pose = 0;
  scene.add(priestRec.group);

  const boltGeo = new THREE.SphereGeometry(0.09, 8, 6);
  const boltMat = new THREE.MeshBasicMaterial({ color: 0xffb020 });
  const boltMeshes = [];
  for (let i = 0; i < 16; i++) {
    const mesh = new THREE.Mesh(boltGeo, boltMat);
    mesh.visible = false;
    mesh.frustumCulled = false;
    scene.add(mesh);
    boltMeshes.push(mesh);
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
        rec.pearl.emissiveIntensity = 0;
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
      priestRec.group.visible = true;
      priestRec.group.rotation.set(0, 0, 0);
      priestRec.group.position.set(priest.x, 0, priest.z);
      priestRec.halo.scale.setScalar(1);
      priestRec.robe.emissive.setHex(0x000000);
      priestRec.robe.emissiveIntensity = 0;
      priestRec.pearl.emissiveIntensity = 0;
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
        priestRec.group.rotation.x = k * 1.2;
        priestRec.group.position.set(priest.x, -k * 0.55, priest.z);
        priestRec.halo.scale.setScalar(Math.max(0, 1 - k));
        priestRec.seam.visible = false;
        priestRec.robe.emissive.setHex(0xfff6ea);
        priestRec.robe.emissiveIntensity = Math.max(0, 0.7 - k);
        return;
      }
      priestRec.died = false;
      priestRec.death = 0;
      priestRec.group.visible = true;
      priestRec.group.rotation.set(0, priest.yaw || 0, 0);
      priestRec.group.position.set(priest.x, 0, priest.z);
      const rite = priest.phase === "rite";
      const splay = rite ? 1.05 : priest.windup > 0 ? 0.35 : 0.72;
      const reach = priest.windup > 0 ? -0.85 : rite ? -0.2 : -0.05;
      priestRec.lArm.rotation.set(reach, 0, splay);
      priestRec.rArm.rotation.set(reach, 0, -splay);
      const riteHalo = !!priest.haloVisible;
      const revealed = riteHalo && channel === "STATIC";
      priestRec.halo.visible = true;
      const pulse = riteHalo ? 1 + Math.sin(time * 7) * 0.06 : 1;
      priestRec.halo.scale.setScalar(pulse);
      priestRec.haloMat.opacity = revealed ? 1 : riteHalo ? 0.95 : 0.88;
      priestRec.haloMat.emissiveIntensity = revealed ? 2.4 : riteHalo ? 1.5 : 0.85;
      priestRec.seam.visible = !!priest.exposed;
      const hand = priest.windup > 0 || priest.phase === "rite" ? 1.5 : 1;
      priestRec.lHand.scale.setScalar(hand);
      priestRec.rHand.scale.setScalar(hand);
      if (priest.hurt > 0) {
        priestRec.robe.emissive.setHex(0xfff8ee);
        priestRec.robe.emissiveIntensity = 0.92;
        priestRec.pearl.emissive.setHex(0xfff8ee);
        priestRec.pearl.emissiveIntensity = 0.75;
      } else {
        priestRec.robe.emissive.setHex(0x000000);
        priestRec.robe.emissiveIntensity = 0;
        priestRec.pearl.emissive.setHex(0x000000);
        priestRec.pearl.emissiveIntensity = 0;
      }
    },
    sync(enemies, dt, time, channel) {
      for (const enemy of enemies) {
        const rec = records.get(enemy.id);
        if (!enemy.alive) {
          if (!rec.died) {
            rec.died = true;
            rec.death = 0.75;
          }
          rec.death -= dt;
          const k = 1 - Math.max(rec.death, 0) / 0.75;
          rec.group.visible = rec.death > 0;
          rec.group.rotation.x = k * 1.25;
          rec.group.position.set(enemy.x, -k * 0.35, enemy.z);
          rec.weak.visible = false;
          continue;
        }
        rec.died = false;
        rec.death = 0;
        rec.group.visible = !!enemy.visible;
        rec.group.rotation.set(0, enemy.yaw || 0, 0);
        rec.group.position.set(enemy.x, 0, enemy.z);
        const moved = Math.hypot(enemy.x - rec.prevX, enemy.z - rec.prevZ);
        rec.prevX = enemy.x;
        rec.prevZ = enemy.z;
        const swing = moved > 0.004 ? Math.sin(time * 8 + rec.phase) : Math.sin(time * 1.6 + rec.phase) * 0.15;
        rec.lLeg.rotation.x = swing * 0.75;
        rec.rLeg.rotation.x = -swing * 0.75;
        rec.lArm.rotation.x = -swing * 0.4;
        rec.rArm.rotation.x = swing * 0.3 + (enemy.windup > 0 ? -0.8 : -0.15);
        rec.weak.visible = !!enemy.exposed;
        if (enemy.hurt > 0) {
          rec.pearl.emissive.setHex(0xfff8ee);
          rec.pearl.emissiveIntensity = 0.9;
        } else if (enemy.cloaked && enemy.visible) {
          rec.pearl.emissive.setHex(0xffd7a8);
          rec.pearl.emissiveIntensity = 0.28 + Math.sin(time * 9) * 0.12;
        } else {
          rec.pearl.emissive.setHex(0x000000);
          rec.pearl.emissiveIntensity = 0;
        }
        rec.muzzle.scale.setScalar(enemy.windup > 0 ? 1.8 : 1);
        if (enemy.cloaked && enemy.visible && channel !== "STATIC" && enemy.reveal < 0.5) {
          rec.group.visible = Math.sin(time * 46) > -0.2;
        }
      }
    },
    syncBolts(bolts) {
      for (let i = 0; i < boltMeshes.length; i++) {
        const mesh = boltMeshes[i];
        const bolt = bolts[i];
        if (!bolt) {
          mesh.visible = false;
          continue;
        }
        mesh.visible = true;
        mesh.position.set(bolt.x, bolt.y, bolt.z);
      }
    },
  };
}
