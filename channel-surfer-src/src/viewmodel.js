import * as THREE from "three";

export function createViewmodel(camera, textures) {
  const root = new THREE.Group();
  root.position.set(0.18, -0.28, -0.48);
  camera.add(root);

  const leather = new THREE.MeshStandardMaterial({
    map: textures.leather,
    normalMap: textures.leatherNormal,
    roughnessMap: textures.leatherRough,
    roughness: 1,
    metalness: 0.06,
    envMapIntensity: 0.35,
  });
  leather.normalScale.set(0.7, 0.7);
  const cuffMat = new THREE.MeshStandardMaterial({ map: textures.trench, roughness: 0.86, metalness: 0.02, envMapIntensity: 0.2 });
  const metal = new THREE.MeshStandardMaterial({ map: textures.brushed, roughness: 0.32, metalness: 0.78, envMapIntensity: 0.7 });
  const wood = new THREE.MeshStandardMaterial({
    map: textures.wood,
    normalMap: textures.woodNormal,
    roughnessMap: textures.woodRough,
    roughness: 1,
    metalness: 0.04,
    envMapIntensity: 0.3,
  });
  wood.normalScale.set(0.85, 0.85);
  const dark = new THREE.MeshStandardMaterial({ color: 0x121212, roughness: 0.45, metalness: 0.18, envMapIntensity: 0.25 });
  const plastic = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.35, metalness: 0.05, envMapIntensity: 0.3 });
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
      const btn = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.012, 0.03), plastic);
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

  const digits = [];
  function glove(x, z, rot) {
    const group = new THREE.Group();
    const palmGeo = new THREE.SphereGeometry(0.046, 14, 10);
    palmGeo.scale(1.05, 0.48, 1.35);
    const palm = new THREE.Mesh(palmGeo, leather);
    const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.07, 0.16), cuffMat);
    sleeve.position.set(0, 0.01, 0.12);
    const knuckleBar = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), leather);
    knuckleBar.scale.set(2.1, 0.7, 0.8);
    knuckleBar.position.set(0, 0.02, -0.04);
    group.add(palm, sleeve, knuckleBar);
    const lengths = [0.03, 0.038, 0.036, 0.028];
    for (let i = 0; i < 4; i++) {
      const fx = -0.034 + i * 0.022;
      const len = lengths[i];
      const knuckle = new THREE.Group();
      knuckle.position.set(fx, 0.016, -0.052);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.0075, 0.0095, len, 8), leather);
      base.rotation.x = Math.PI / 2;
      base.position.set(0, 0, -len * 0.42);
      const tipPivot = new THREE.Group();
      tipPivot.position.set(0, -0.002, -len * 0.78);
      tipPivot.rotation.x = 0.22;
      const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.0055, 0.0075, len * 0.82, 8), leather);
      tip.rotation.x = Math.PI / 2;
      tip.position.set(0, 0, -len * 0.36);
      tipPivot.add(tip);
      knuckle.add(base, tipPivot);
      group.add(knuckle);
      digits.push({ knuckle, tip: tipPivot, tipRest: 0.22 });
    }
    const thumb = new THREE.Group();
    thumb.position.set(rot > 0 ? 0.042 : -0.042, 0.018, -0.02);
    thumb.rotation.z = rot > 0 ? -0.7 : 0.7;
    const thumbBase = new THREE.Mesh(new THREE.CylinderGeometry(0.0085, 0.011, 0.034, 8), leather);
    thumbBase.rotation.x = 0.35;
    thumbBase.position.set(0, 0.01, -0.012);
    const thumbTip = new THREE.Group();
    thumbTip.position.set(0, 0.006, -0.028);
    thumbTip.rotation.x = 0.2;
    const thumbTipMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.0065, 0.0085, 0.026, 8), leather);
    thumbTipMesh.rotation.x = 0.45;
    thumbTipMesh.position.set(0, 0, -0.014);
    thumbTip.add(thumbTipMesh);
    thumb.add(thumbBase, thumbTip);
    group.add(thumb);
    digits.push({ knuckle: thumb, tip: thumbTip, tipRest: 0.2 });
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
    const geo = obj.geometry;
    if (!obj.isMesh || !obj.material?.normalMap || !geo?.index || geo.attributes.tangent) return;
    if (geo.attributes.uv && geo.attributes.normal) geo.computeTangents();
  });

  let kick = 0;
  let click = 0;
  let grip = 0;
  let flashT = 0;
  let bob = 0;
  let channel = "LIVE";
  let primed = false;
  const rest = { x: 0.18, y: -0.28, z: -0.48 };

  return {
    setChannel(next) {
      if (primed && next !== channel) {
        click = 0.09;
        grip = Math.max(grip, 0.45);
      }
      primed = true;
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
      if (kind !== "none") grip = kind === "spread" ? 0.85 : 0.62;
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
      click += (0 - click) * (1 - Math.exp(-14 * dt));
      grip += (0 - grip) * (1 - Math.exp(-7 * dt));
      const idle = Math.sin(bob * 1.3) * 0.05;
      for (let i = 0; i < digits.length; i++) {
        const digit = digits[i];
        const curl = idle + grip * (0.42 + (i % 5) * 0.05);
        digit.knuckle.rotation.x = curl;
        digit.tip.rotation.x = digit.tipRest + curl * 1.15;
      }
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
      root.rotation.x = kick * 1.7 + click * 1.5 + Math.sin(bob * 2) * amp * 2.2;
      root.rotation.y = 0.06 - kick * 0.25;
      root.rotation.z = -strafe * 0.035 + Math.sin(bob) * amp * 1.4;
    },
  };
}
