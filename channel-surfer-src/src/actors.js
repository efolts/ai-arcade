import * as THREE from "three";
import { createEnemies } from "./level.js";

function limb(material, w, h, d, jointMat) {
  const pivot = new THREE.Group();
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.y = -h / 2;
  mesh.castShadow = true;
  const joint = new THREE.Mesh(new THREE.SphereGeometry(Math.max(w, d) * 0.55, 8, 8), jointMat);
  pivot.add(mesh, joint);
  return pivot;
}

function buildTessera() {
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
  return { group, pearl, weak, lLeg, rLeg, lArm, rArm, muzzle };
}

export function createActors(scene) {
  const records = new Map();
  for (const enemy of createEnemies()) {
    const built = buildTessera();
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
        rec.death = 0;
        rec.died = false;
        rec.prevX = enemy.x;
        rec.prevZ = enemy.z;
        rec.group.visible = enemy.visible;
        rec.group.position.set(enemy.x, 0, enemy.z);
        rec.group.rotation.set(0, 0, 0);
        rec.pearl.emissiveIntensity = 0;
        rec.weak.visible = false;
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
