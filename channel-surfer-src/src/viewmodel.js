import * as THREE from "three";

export function createViewmodel(camera, textures) {
  const root = new THREE.Group();
  root.position.set(0.12, -0.26, -0.46);
  camera.add(root);

  const leather = new THREE.MeshStandardMaterial({ color: 0x2c1d14, roughness: 0.74, metalness: 0.04 });
  const cuff = new THREE.MeshStandardMaterial({ color: 0x14110e, roughness: 0.86 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x8e9296, roughness: 0.32, metalness: 0.72 });
  const wood = new THREE.MeshStandardMaterial({ map: textures.wood, roughness: 0.58, metalness: 0.04 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.55 });
  const lensMat = new THREE.MeshBasicMaterial({ color: 0x67f6ff });

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.042, 0.34), metal);
  body.position.set(0.06, -0.02, -0.02);
  const leftWood = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.05, 0.32), wood);
  leftWood.position.set(0.0, -0.02, -0.02);
  const rightWood = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.05, 0.32), wood);
  rightWood.position.set(0.12, -0.02, -0.02);
  root.add(body, leftWood, rightWood);

  for (let i = 0; i < 5; i++) {
    const btn = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.01, 0.028), i === 0 ? lensMat : dark);
    btn.position.set(0.06, 0.006, 0.08 - i * 0.045);
    root.add(btn);
  }

  const lens = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.02, 0.018), lensMat);
  lens.position.set(0.06, 0.0, -0.2);
  root.add(lens);

  const flashMat = new THREE.MeshBasicMaterial({
    color: 0xd8fbff,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const flash = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.16), flashMat);
  flash.position.set(0.06, 0.0, -0.26);
  flash.visible = false;
  root.add(flash);

  const glow = new THREE.PointLight(0x67f6ff, 2.2, 1.6, 2);
  glow.position.copy(lens.position);
  root.add(glow);

  function hand(x, z, rot) {
    const group = new THREE.Group();
    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.045, 0.11), leather);
    const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.07, 0.12), cuff);
    sleeve.position.z = 0.1;
    const thumb = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.05), leather);
    thumb.position.set(0.04, 0.02, -0.02);
    group.add(palm, sleeve, thumb);
    group.position.set(x, -0.045, z);
    group.rotation.y = rot;
    group.rotation.z = rot > 0 ? 0.25 : -0.2;
    root.add(group);
  }
  hand(-0.04, 0.04, 0.55);
  hand(0.16, 0.06, -0.65);

  root.traverse((obj) => {
    obj.castShadow = false;
    obj.receiveShadow = false;
    obj.frustumCulled = false;
  });

  let kick = 0;
  let flashT = 0;
  let bob = 0;
  let channel = "LIVE";

  return {
    setChannel(next) {
      channel = next;
      if (next === "LIVE") {
        lensMat.color.setHex(0x67f6ff);
        glow.color.setHex(0x67f6ff);
        glow.intensity = 2.4;
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
      kick = kind === "spread" ? 0.1 : 0.04;
      flashT = kind === "none" ? 0 : 0.05;
      flashMat.color.set(kind === "spread" ? 0xf4f4f4 : 0xc6fbff);
    },
    setVisible(visible) {
      root.visible = visible;
    },
    update(dt, speed) {
      bob += dt * (3.2 + Math.min(speed, 8) * 1.6);
      const amp = Math.min(speed, 8) * 0.0016;
      kick += (0 - kick) * (1 - Math.exp(-11 * dt));
      flashT -= dt;
      flash.visible = flashT > 0;
      if (channel === "STATIC") {
        const v = 0.45 + Math.random() * 0.55;
        lensMat.color.setRGB(v, v, v);
      }
      root.position.y = -0.26 + Math.sin(bob) * amp;
      root.position.x = 0.12 + Math.cos(bob * 0.5) * amp * 0.35;
      root.position.z = -0.46 + kick * 0.4;
      root.rotation.x = kick * 1.5;
    },
  };
}
