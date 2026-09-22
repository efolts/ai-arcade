import * as THREE from "three";

export function createViewmodel(camera, textures) {
  const root = new THREE.Group();
  root.position.set(0.18, -0.28, -0.48);
  camera.add(root);

  const leather = new THREE.MeshStandardMaterial({ map: textures.leather, roughness: 0.78, metalness: 0.04 });
  const cuffMat = new THREE.MeshStandardMaterial({ map: textures.trench, roughness: 0.86, metalness: 0.02 });
  const metal = new THREE.MeshStandardMaterial({ map: textures.brushed, roughness: 0.34, metalness: 0.74 });
  const wood = new THREE.MeshStandardMaterial({ map: textures.wood, roughness: 0.62, metalness: 0.05 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.5, metalness: 0.2 });
  const lensMat = new THREE.MeshBasicMaterial({ color: 0x67f6ff });

  const caseBody = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.055, 0.38), wood);
  caseBody.position.set(0.02, -0.02, 0.02);
  const face = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.02, 0.3), dark);
  face.position.set(0.02, 0.012, 0.03);
  const bezel = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.03, 0.04), metal);
  bezel.position.set(0.02, -0.005, -0.16);
  root.add(caseBody, face, bezel);

  for (let col = 0; col < 2; col++) {
    for (let row = 0; row < 4; row++) {
      const btn = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.012, 0.03), dark);
      btn.position.set(-0.012 + col * 0.064, 0.026, 0.1 - row * 0.055);
      root.add(btn);
    }
  }

  const lens = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.028, 0.02), lensMat);
  lens.position.set(0.02, -0.004, -0.2);
  root.add(lens);

  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.22, 5), metal);
  antenna.position.set(0.07, 0.02, -0.12);
  antenna.rotation.z = -0.4;
  antenna.rotation.x = 0.5;
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.012, 6, 4), metal);
  tip.position.set(0.11, 0.1, -0.2);
  root.add(antenna, tip);

  const flashMat = new THREE.MeshBasicMaterial({
    color: 0xd8fbff,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const flash = new THREE.Group();
  flash.position.set(0.02, -0.004, -0.24);
  const flareA = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.05), flashMat);
  const flareB = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.05), flashMat);
  flareB.rotation.z = Math.PI / 2;
  const core = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.08), flashMat);
  flash.add(flareA, flareB, core);
  flash.visible = false;
  root.add(flash);

  const glow = new THREE.PointLight(0x67f6ff, 2.4, 1.8, 2);
  glow.position.copy(lens.position);
  root.add(glow);

  function glove(x, z, rot) {
    const group = new THREE.Group();
    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.04, 0.12), leather);
    const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.07, 0.16), cuffMat);
    sleeve.position.set(0, 0.01, 0.12);
    const knuckle = new THREE.Mesh(new THREE.BoxGeometry(0.086, 0.028, 0.03), leather);
    knuckle.position.set(0, 0.02, -0.04);
    group.add(palm, sleeve, knuckle);
    for (let i = 0; i < 4; i++) {
      const finger = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.02, 0.055), leather);
      finger.position.set(-0.03 + i * 0.02, 0.012, -0.07);
      group.add(finger);
    }
    const thumb = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.045), leather);
    thumb.position.set(rot > 0 ? 0.05 : -0.05, 0.02, -0.01);
    thumb.rotation.z = rot > 0 ? -0.5 : 0.5;
    group.add(thumb);
    group.position.set(x, -0.05, z);
    group.rotation.y = rot;
    group.rotation.z = rot > 0 ? 0.22 : -0.18;
    root.add(group);
  }
  glove(-0.07, 0.06, 0.5);
  glove(0.12, 0.08, -0.62);

  root.traverse((obj) => {
    obj.castShadow = false;
    obj.receiveShadow = false;
    obj.frustumCulled = false;
  });

  let kick = 0;
  let flashT = 0;
  let bob = 0;
  let channel = "LIVE";
  const rest = { x: 0.18, y: -0.28, z: -0.48 };

  return {
    setChannel(next) {
      channel = next;
      if (next === "LIVE") {
        lensMat.color.setHex(0x67f6ff);
        glow.color.setHex(0x67f6ff);
        glow.intensity = 2.6;
      } else if (next === "STATIC") {
        lensMat.color.setHex(0xf2f2f2);
        glow.color.setHex(0xffffff);
        glow.intensity = 0.8;
      } else {
        lensMat.color.setHex(0x2a241e);
        glow.intensity = 0;
      }
    },
    fire(kind) {
      kick = kind === "spread" ? 0.12 : 0.055;
      flashT = kind === "none" ? 0 : 0.045;
      flashMat.color.set(kind === "spread" ? 0xf4f4f4 : 0xc6fbff);
      flash.scale.setScalar(kind === "spread" ? 1.35 : 1);
    },
    setVisible(visible) {
      root.visible = visible;
    },
    update(dt, speed, motion = {}) {
      const moving = speed > 0.35;
      bob += dt * (moving ? 7.2 + Math.min(speed, 9) * 0.28 : 1.5);
      const amp = moving ? 0.004 + Math.min(speed, 9) * 0.00115 : 0.0016;
      const strafe = motion.strafe || 0;
      kick += (0 - kick) * (1 - Math.exp(-12 * dt));
      flashT -= dt;
      flash.visible = flashT > 0;
      if (flash.visible) flash.rotation.z = flashT * 18;
      if (channel === "STATIC") {
        const v = 0.45 + Math.random() * 0.55;
        lensMat.color.setRGB(v, v, v);
      }
      root.position.x = rest.x + Math.cos(bob) * amp * 0.7 - strafe * 0.01;
      root.position.y = rest.y + Math.sin(bob * 2) * amp + (moving ? 0 : Math.sin(bob) * 0.003);
      root.position.z = rest.z + kick * 0.62;
      root.rotation.x = kick * 1.7 + Math.sin(bob * 2) * amp * 2.2;
      root.rotation.y = 0.06 - kick * 0.25;
      root.rotation.z = -strafe * 0.035 + Math.sin(bob) * amp * 1.4;
    },
  };
}
