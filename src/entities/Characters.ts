import * as THREE from 'three';

/** Fixed city positions for each crew member */
const CREW_CITY_POSITIONS: Record<string, { x: number; z: number }> = {
  Jose:     { x: -80,  z: -40 },  // Brunswick
  Jarrad:   { x:  40,  z: -80 },  // St Kilda edge
  Matt:     { x:  80,  z:  40 },  // Richmond
  Phil:     { x: -40,  z:  80 },  // Brunswick north
  Tsuyoshi: { x: 120,  z: -40 },  // Richmond far
  Fabio:    { x: -120, z:  40 },  // Footscray
};

/**
 * TEM Crew Characters — low-poly 3D avatars
 * Crew are scattered at fixed city positions. Each has a pickup indicator
 * (yellow/gold ground circle) beneath them.
 */
export class Characters {
  private scene: THREE.Scene;
  /** Map from crew name → THREE.Group (the character + indicator) */
  private crewGroups: Map<string, THREE.Group> = new Map();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  /**
   * Spawn each crew member at their fixed city position.
   * Each gets a yellow ground circle pickup indicator beneath them.
   */
  spawnCrewAtCityPositions(): void {
    const builders: Record<string, () => THREE.Group> = {
      Jose:     () => this.buildJose(),
      Jarrad:   () => this.buildJarrad(),
      Matt:     () => this.buildMatt(),
      Phil:     () => this.buildPhil(),
      Tsuyoshi: () => this.buildTsuyoshi(),
      Fabio:    () => this.buildFabio(),
    };

    for (const [name, pos] of Object.entries(CREW_CITY_POSITIONS)) {
      const wrapper = new THREE.Group();

      // Build and add character mesh
      const character = builders[name]();
      character.scale.set(2, 2, 2);
      wrapper.add(character);

      // Yellow/gold ground circle pickup indicator
      const indicator = this._buildPickupIndicator();
      indicator.position.set(0, 0.05, 0);
      wrapper.add(indicator);

      // Floating name billboard above character
      const nameCanvas = document.createElement('canvas');
      nameCanvas.width = 256;
      nameCanvas.height = 64;
      const nCtx = nameCanvas.getContext('2d')!;
      nCtx.fillStyle = 'rgba(0,0,0,0.7)';
      nCtx.roundRect(4, 4, 248, 56, 10);
      nCtx.fill();
      nCtx.fillStyle = '#FFE566';
      nCtx.font = 'bold 36px Arial, sans-serif';
      nCtx.textAlign = 'center';
      nCtx.textBaseline = 'middle';
      nCtx.fillText(name, 128, 32);

      const nameTexture = new THREE.CanvasTexture(nameCanvas);
      const nameMat = new THREE.SpriteMaterial({ map: nameTexture, transparent: true, depthTest: false });
      const nameSprite = new THREE.Sprite(nameMat);
      nameSprite.scale.set(4, 1, 1);   // wide enough to read
      nameSprite.position.set(0, 8, 0); // floats above character (after 2x scale, head is at ~6)
      wrapper.add(nameSprite);

      wrapper.position.set(pos.x, 0, pos.z);
      wrapper.rotation.y = 0; // all characters face +Z (toward workshop/spawn)
      this.scene.add(wrapper);
      this.crewGroups.set(name, wrapper);
    }
  }

  /** Returns the fixed world position for a crew member */
  getCrewPosition(name: string): { x: number; z: number } {
    return CREW_CITY_POSITIONS[name] ?? { x: 0, z: 0 };
  }

  /** Hides a crew member from the scene (picked up) */
  hideCrew(name: string): void {
    const group = this.crewGroups.get(name);
    if (group) group.visible = false;
  }

  /** Shows all crew members again (call after job complete) */
  showAllCrew(): void {
    for (const group of this.crewGroups.values()) {
      group.visible = true;
    }
  }

  /** Build a flat yellow/gold disc as a pickup indicator */
  private _buildPickupIndicator(): THREE.Mesh {
    const geo = new THREE.CylinderGeometry(2.2, 2.2, 0.08, 20);
    const mat = new THREE.MeshLambertMaterial({
      color: 0xFFD700,
      transparent: true,
      opacity: 0.85,
    });
    return new THREE.Mesh(geo, mat);
  }

  /**
   * Generate a canvas texture with the TEM tree logo, "TROWELED EARTH" text,
   * and the crew member's name — used as a shirt front panel.
   */
  private createShirtTexture(name: string, shirtColor: number): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Background — shirt colour
    ctx.fillStyle = `#${shirtColor.toString(16).padStart(6, '0')}`;
    ctx.fillRect(0, 0, 512, 512);

    // TEM Tree logo (top half of canvas)
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 8;

    // Trunk — vertical line, bottom-centre
    ctx.beginPath();
    ctx.moveTo(256, 380);
    ctx.lineTo(256, 220);
    ctx.stroke();

    // Main branches — spreading outward from trunk
    const branches = [
      [256, 320, 160, 240],  // left-mid
      [256, 320, 352, 240],  // right-mid
      [256, 270, 180, 200],  // left-upper
      [256, 270, 332, 200],  // right-upper
      [256, 240, 200, 170],  // left-top
      [256, 240, 312, 170],  // right-top
      [256, 215, 230, 155],  // left-crown
      [256, 215, 282, 155],  // right-crown
    ] as [number, number, number, number][];

    for (const [x1, y1, x2, y2] of branches) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Small leaf dots at branch tips
    ctx.fillStyle = '#FFFFFF';
    const leafTips = [[160,240],[352,240],[180,200],[332,200],[200,170],[312,170],[230,155],[282,155],[256,145]];
    for (const [lx, ly] of leafTips) {
      ctx.beginPath();
      ctx.arc(lx, ly, 10, 0, Math.PI * 2);
      ctx.fill();
    }

    // "TROWELED EARTH" text — bottom of canvas
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 44px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('TROWELED', 256, 430);
    ctx.fillText('EARTH', 256, 480);

    // Character name tag — small, above "TROWELED EARTH"
    ctx.font = '28px Arial, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText(name.toUpperCase(), 256, 395);

    return new THREE.CanvasTexture(canvas);
  }

  // ── Jose ──────────────────────────────────────────────────────────────────
  // Slim, near-BLACK thick dreadlocks, olive skin, teal glasses,
  // headphones around neck, black long-sleeve TEM shirt
  private buildJose(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xC49A70;
    const shirt = 0x0A0A0A;
    const pants = 0x2A2A2A;
    const locs  = 0x1A1410;

    this.addBox(g, pants, 0.38, 0.9, 0.32, -0.16, 0.45, 0);
    this.addBox(g, pants, 0.38, 0.9, 0.32,  0.16, 0.45, 0);
    this.addBox(g, shirt, 0.72, 1.0, 0.42, 0, 1.4, 0);
    this.addBox(g, 0xDDDDDD, 0.22, 0.22, 0.05, -0.05, 1.42, 0.22);
    this.addBox(g, shirt, 0.21, 0.82, 0.21, -0.5, 1.22, 0);
    this.addBox(g, shirt, 0.21, 0.82, 0.21,  0.5, 1.22, 0);
    this.addBox(g, skin, 0.18, 0.18, 0.18, -0.5, 0.78, 0);
    this.addBox(g, skin, 0.18, 0.18, 0.18,  0.5, 0.78, 0);
    this.addBox(g, skin, 0.22, 0.22, 0.22, 0, 2.01, 0);
    this.addSphere(g, skin, 0.38, 0, 2.5, 0);
    this.addSphere(g, locs, 0.46, 0, 2.58, 0);
    this.addBox(g, locs, 0.38, 0.60, 0.38,  0,    2.22, -0.08);
    this.addBox(g, locs, 0.22, 0.55, 0.22, -0.30, 2.20, -0.04);
    this.addBox(g, locs, 0.22, 0.50, 0.22,  0.28, 2.18, -0.04);
    this.addBox(g, locs, 0.16, 0.40, 0.16,  0.10, 2.10,  0.10);
    this.addBox(g, locs, 0.14, 0.30, 0.14, -0.10, 2.05,  0.08);
    this.addBox(g, 0x2A9A90, 0.22, 0.11, 0.04, -0.13, 2.52, 0.37);
    this.addBox(g, 0x2A9A90, 0.22, 0.11, 0.04,  0.13, 2.52, 0.37);
    this.addBox(g, 0x2A9A90, 0.07, 0.06, 0.03,  0,    2.52, 0.38);
    this.addBox(g, 0x888888, 0.06, 0.06, 0.55, 0, 2.10, 0);
    this.addBox(g, 0x555555, 0.1, 0.1, 0.1, -0.22, 2.04, 0.25);
    this.addBox(g, 0x555555, 0.1, 0.1, 0.1,  0.22, 2.04, 0.25);
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52, -0.16, 0.06, 0.08);
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52,  0.16, 0.06, 0.08);

    // Name badge (left chest)
    this.addBox(g, 0xFFFFFF, 0.12, 0.08, 0.02, 0.2, 1.7, 0.22);

    // Plaster splat marks on shirt
    this.addSphere(g, 0xF5F5F5, 0.04, -0.15, 1.55, 0.215);
    this.addSphere(g, 0xF5F5F5, 0.04,  0.10, 1.30, 0.215);
    this.addSphere(g, 0xF5F5F5, 0.04,  0.20, 1.65, 0.215);

    // Shirt logo panel (front face of shirt)
    // shirt box: 0.72 wide, 1.0 tall, 0.42 deep, centre y=1.4 → front z = 0.21 + 0.005 = 0.215
    const shirtTex = this.createShirtTexture('Jose', shirt);
    const logoPanelMat = new THREE.MeshBasicMaterial({ map: shirtTex, transparent: false });
    const logoPanel = new THREE.Mesh(new THREE.PlaneGeometry(0.68, 0.92), logoPanelMat);
    logoPanel.position.set(0, 1.4, 0.215);
    g.add(logoPanel);

    return g;
  }

  // ── Jarrad ────────────────────────────────────────────────────────────────
  private buildJarrad(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xC8A080;
    const shirt = 0x111111;
    const pants = 0x2A2A2A;
    const hair  = 0x1E1008;

    this.addBox(g, pants, 0.40, 0.9, 0.33, -0.17, 0.45, 0);
    this.addBox(g, pants, 0.40, 0.9, 0.33,  0.17, 0.45, 0);
    this.addBox(g, shirt, 0.76, 1.0, 0.43, 0, 1.4, 0);
    this.addBox(g, 0xDDDDDD, 0.22, 0.22, 0.05, -0.05, 1.48, 0.23);
    this.addBox(g, skin, 0.21, 0.80, 0.21, -0.52, 1.22, 0);
    this.addBox(g, skin, 0.21, 0.80, 0.21,  0.52, 1.22, 0);
    this.addBox(g, skin, 0.22, 0.22, 0.22, 0, 2.01, 0);
    this.addSphere(g, skin, 0.38, 0, 2.50, 0);
    this.addBox(g, hair, 0.72, 0.20, 0.72, 0, 2.84, -0.02);
    this.addBox(g, hair, 0.20, 0.28, 0.20, -0.36, 2.68, -0.02);
    this.addBox(g, hair, 0.20, 0.28, 0.20,  0.36, 2.68, -0.02);
    this.addBox(g, hair, 0.60, 0.16, 0.25,  0,    2.72, -0.24);
    this.addBox(g, 0x2A1808, 0.36, 0.22, 0.07, 0, 2.36, 0.35);
    this.addBox(g, 0x1A1A1A, 0.24, 0.13, 0.04, -0.13, 2.52, 0.37);
    this.addBox(g, 0x1A1A1A, 0.24, 0.13, 0.04,  0.13, 2.52, 0.37);
    this.addBox(g, 0x1A1A1A, 0.07, 0.07, 0.03,  0,    2.52, 0.38);
    this.addBox(g, 0x1A1A1A, 0.04, 0.08, 0.26, -0.32, 2.52, 0.25);
    this.addBox(g, 0x1A1A1A, 0.04, 0.08, 0.26,  0.32, 2.52, 0.25);
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52, -0.17, 0.06, 0.08);
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52,  0.17, 0.06, 0.08);

    // Name badge (left chest)
    this.addBox(g, 0xFFFFFF, 0.12, 0.08, 0.02, 0.2, 1.7, 0.23);

    // Plaster splat marks on shirt
    this.addSphere(g, 0xF5F5F5, 0.04, -0.18, 1.58, 0.22);
    this.addSphere(g, 0xF5F5F5, 0.04,  0.12, 1.32, 0.22);
    this.addSphere(g, 0xF5F5F5, 0.04,  0.22, 1.68, 0.22);

    // Shirt logo panel (front face of shirt)
    // shirt box: 0.76 wide, 1.0 tall, 0.43 deep, centre y=1.4 → front z = 0.215 + 0.005 = 0.22
    const shirtTex = this.createShirtTexture('Jarrad', shirt);
    const logoPanelMat = new THREE.MeshBasicMaterial({ map: shirtTex, transparent: false });
    const logoPanel = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.92), logoPanelMat);
    logoPanel.position.set(0, 1.4, 0.22);
    g.add(logoPanel);

    return g;
  }

  // ── Matt ──────────────────────────────────────────────────────────────────
  private buildMatt(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xC8956A;
    const shirt = 0x333330;
    const pants = 0x282828;
    const beard = 0x3A2010;
    const hair  = 0x2E1E0E;

    this.addBox(g, pants, 0.44, 0.95, 0.34, -0.19, 0.475, 0);
    this.addBox(g, pants, 0.44, 0.95, 0.34,  0.19, 0.475, 0);
    this.addBox(g, shirt, 0.88, 1.05, 0.46, 0, 1.475, 0);
    this.addBox(g, 0xE8E4DC, 0.08, 0.08, 0.05,  0.2,  1.6, 0.24);
    this.addBox(g, 0xE8E4DC, 0.12, 0.06, 0.05, -0.15, 1.3, 0.24);
    this.addBox(g, skin, 0.23, 0.82, 0.22, -0.58, 1.26, 0);
    this.addBox(g, skin, 0.23, 0.82, 0.22,  0.58, 1.26, 0);
    this.addBox(g, skin, 0.24, 0.22, 0.23, 0, 2.08, 0);
    this.addSphere(g, skin, 0.40, 0, 2.58, 0);
    this.addBox(g, hair, 0.76, 0.16, 0.78, 0, 2.94, -0.02);
    this.addBox(g, hair, 0.72, 0.22, 0.30, 0, 2.88, -0.28);
    this.addBox(g, hair, 0.25, 0.30, 0.22, -0.38, 2.72, -0.05);
    this.addBox(g, hair, 0.25, 0.30, 0.22,  0.38, 2.72, -0.05);
    this.addBox(g, beard, 0.44, 0.32, 0.10, 0, 2.42, 0.36);
    this.addBox(g, beard, 0.40, 0.20, 0.09, 0, 2.58, 0.38);
    this.addBox(g, beard, 0.20, 0.40, 0.10, -0.34, 2.46, 0.28);
    this.addBox(g, beard, 0.20, 0.40, 0.10,  0.34, 2.46, 0.28);
    this.addBox(g, 0x111111, 0.06, 0.06, 0.88, 0, 3.05, 0);
    this.addSphere(g, 0x111111, 0.18, -0.54, 2.72, 0);
    this.addBox(g, 0x222222, 0.28, 0.28, 0.10, -0.54, 2.72, 0);
    this.addSphere(g, 0x111111, 0.18, 0.54, 2.72, 0);
    this.addBox(g, 0x222222, 0.28, 0.28, 0.10,  0.54, 2.72, 0);
    this.addBox(g, 0x111111, 0.06, 0.38, 0.06, -0.50, 2.89, 0);
    this.addBox(g, 0x111111, 0.06, 0.38, 0.06,  0.50, 2.89, 0);
    this.addBox(g, 0x222222, 0.46, 0.15, 0.54, -0.19, 0.06, 0.08);
    this.addBox(g, 0x222222, 0.46, 0.15, 0.54,  0.19, 0.06, 0.08);

    // Name badge (left chest)
    this.addBox(g, 0xFFFFFF, 0.12, 0.08, 0.02, 0.2, 1.7, 0.235);

    // Plaster splat marks on shirt
    this.addSphere(g, 0xF5F5F5, 0.04, -0.20, 1.60, 0.235);
    this.addSphere(g, 0xF5F5F5, 0.04,  0.15, 1.35, 0.235);
    this.addSphere(g, 0xF5F5F5, 0.04,  0.25, 1.70, 0.235);

    // Shirt logo panel (front face of shirt)
    // shirt box: 0.88 wide, 1.05 tall, 0.46 deep, centre y=1.475 → front z = 0.23 + 0.005 = 0.235
    const shirtTex = this.createShirtTexture('Matt', shirt);
    const logoPanelMat = new THREE.MeshBasicMaterial({ map: shirtTex, transparent: false });
    const logoPanel = new THREE.Mesh(new THREE.PlaneGeometry(0.84, 0.97), logoPanelMat);
    logoPanel.position.set(0, 1.475, 0.235);
    g.add(logoPanel);

    return g;
  }

  // ── Phil ──────────────────────────────────────────────────────────────────
  private buildPhil(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xD4A880;
    const shirt = 0xF0EDE8;
    const jeans = 0x3A5080;
    const hair  = 0xC0C0B8;

    this.addBox(g, jeans, 0.50, 1.0, 0.38, -0.22, 0.5, 0);
    this.addBox(g, jeans, 0.50, 1.0, 0.38,  0.22, 0.5, 0);
    this.addBox(g, shirt, 1.0, 1.1, 0.52, 0, 1.55, 0);
    this.addBox(g, 0x333333, 0.24, 0.22, 0.05, -0.05, 1.58, 0.27);
    this.addBox(g, skin, 0.26, 0.82, 0.24, -0.66, 1.36, 0);
    this.addBox(g, skin, 0.26, 0.82, 0.24,  0.66, 1.36, 0);
    this.addBox(g, skin, 0.28, 0.24, 0.26, 0, 2.21, 0);
    this.addSphere(g, skin, 0.44, 0, 2.72, 0);
    this.addBox(g, hair, 0.80, 0.18, 0.80, 0, 3.08, -0.02);
    this.addBox(g, hair, 0.28, 0.30, 0.26, -0.42, 2.88, -0.02);
    this.addBox(g, hair, 0.28, 0.30, 0.26,  0.42, 2.88, -0.02);
    this.addBox(g, hair, 0.70, 0.18, 0.30,  0,    2.82, -0.28);
    this.addBox(g, 0xA8A8A0, 0.26, 0.13, 0.04, -0.14, 2.74, 0.42);
    this.addBox(g, 0xA8A8A0, 0.26, 0.13, 0.04,  0.14, 2.74, 0.42);
    this.addBox(g, 0xA8A8A0, 0.08, 0.07, 0.03,  0,    2.74, 0.43);
    this.addBox(g, 0xA8A8A0, 0.04, 0.08, 0.30, -0.36, 2.74, 0.28);
    this.addBox(g, 0xA8A8A0, 0.04, 0.08, 0.30,  0.36, 2.74, 0.28);
    this.addBox(g, 0xC08060, 0.28, 0.08, 0.05, 0, 2.56, 0.43);
    this.addBox(g, 0xEEEEE8, 0.52, 0.16, 0.58, -0.22, 0.06, 0.09);
    this.addBox(g, 0xEEEEE8, 0.52, 0.16, 0.58,  0.22, 0.06, 0.09);

    // Name badge (left chest)
    this.addBox(g, 0x333333, 0.12, 0.08, 0.02, 0.2, 1.75, 0.265);

    // Plaster splat marks on shirt (darker marks for light shirt)
    this.addSphere(g, 0xCCC8C0, 0.04, -0.22, 1.65, 0.265);
    this.addSphere(g, 0xCCC8C0, 0.04,  0.18, 1.40, 0.265);
    this.addSphere(g, 0xCCC8C0, 0.04,  0.28, 1.75, 0.265);

    // Shirt logo panel (front face of shirt)
    // shirt box: 1.0 wide, 1.1 tall, 0.52 deep, centre y=1.55 → front z = 0.26 + 0.005 = 0.265
    const shirtTex = this.createShirtTexture('Phil', shirt);
    const logoPanelMat = new THREE.MeshBasicMaterial({ map: shirtTex, transparent: false });
    const logoPanel = new THREE.Mesh(new THREE.PlaneGeometry(0.96, 1.02), logoPanelMat);
    logoPanel.position.set(0, 1.55, 0.265);
    g.add(logoPanel);

    return g;
  }

  // ── Tsuyoshi ──────────────────────────────────────────────────────────────
  private buildTsuyoshi(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xB88858;
    const shirt = 0x1A1A18;
    const pants = 0x222220;
    const hawk  = 0x0A0A08;

    this.addBox(g, pants, 0.40, 0.92, 0.34, -0.17, 0.46, 0);
    this.addBox(g, pants, 0.40, 0.92, 0.34,  0.17, 0.46, 0);
    this.addBox(g, shirt, 0.78, 1.0, 0.44, 0, 1.42, 0);
    this.addBox(g, 0xDDDDDD, 0.22, 0.22, 0.05, -0.05, 1.52, 0.23);
    this.addBox(g, shirt, 0.21, 0.82, 0.21, -0.52, 1.24, 0);
    this.addBox(g, shirt, 0.21, 0.82, 0.21,  0.52, 1.24, 0);
    this.addBox(g, skin, 0.19, 0.18, 0.19, -0.52, 0.80, 0);
    this.addBox(g, skin, 0.19, 0.18, 0.19,  0.52, 0.80, 0);
    this.addBox(g, skin, 0.22, 0.22, 0.22, 0, 2.03, 0);
    this.addSphere(g, skin, 0.38, 0, 2.52, 0);
    this.addBox(g, 0x1A1A18, 0.06, 0.35, 0.72, -0.38, 2.60, 0);
    this.addBox(g, 0x1A1A18, 0.06, 0.35, 0.72,  0.38, 2.60, 0);
    this.addBox(g, hawk, 0.22, 0.18, 0.72, 0, 2.88, 0);
    this.addBox(g, hawk, 0.16, 0.60, 0.18, 0, 3.18, 0);
    this.addBox(g, hawk, 0.12, 0.50, 0.14, -0.08, 3.12, -0.14);
    this.addBox(g, hawk, 0.12, 0.50, 0.14,  0.08, 3.12, -0.14);
    this.addBox(g, hawk, 0.14, 0.42, 0.14,  0, 3.08, 0.18);
    this.addBox(g, hawk, 0.10, 0.35, 0.12, -0.06, 3.00, 0.22);
    this.addBox(g, hawk, 0.10, 0.35, 0.12,  0.06, 3.00, 0.22);
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52, -0.17, 0.06, 0.08);
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52,  0.17, 0.06, 0.08);

    // Name badge (left chest)
    this.addBox(g, 0xFFFFFF, 0.12, 0.08, 0.02, 0.2, 1.7, 0.225);

    // Plaster splat marks on shirt
    this.addSphere(g, 0xF5F5F5, 0.04, -0.16, 1.56, 0.225);
    this.addSphere(g, 0xF5F5F5, 0.04,  0.10, 1.32, 0.225);
    this.addSphere(g, 0xF5F5F5, 0.04,  0.20, 1.65, 0.225);

    // Shirt logo panel (front face of shirt)
    // shirt box: 0.78 wide, 1.0 tall, 0.44 deep, centre y=1.42 → front z = 0.22 + 0.005 = 0.225
    const shirtTex = this.createShirtTexture('Tsuyoshi', shirt);
    const logoPanelMat = new THREE.MeshBasicMaterial({ map: shirtTex, transparent: false });
    const logoPanel = new THREE.Mesh(new THREE.PlaneGeometry(0.74, 0.92), logoPanelMat);
    logoPanel.position.set(0, 1.42, 0.225);
    g.add(logoPanel);

    return g;
  }

  // ── Fabio ─────────────────────────────────────────────────────────────────
  private buildFabio(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xBE8E60;
    const shirt = 0x607080;
    const pants = 0x282830;

    this.addBox(g, pants, 0.44, 0.95, 0.36, -0.19, 0.475, 0);
    this.addBox(g, pants, 0.44, 0.95, 0.36,  0.19, 0.475, 0);
    this.addBox(g, shirt, 0.84, 1.0, 0.46, 0, 1.42, 0);
    this.addBox(g, 0xD8D4CC, 0.10, 0.10, 0.05,  0.18, 1.60, 0.24);
    this.addBox(g, 0xD8D4CC, 0.16, 0.08, 0.05, -0.20, 1.30, 0.24);
    this.addBox(g, 0xD8D4CC, 0.08, 0.14, 0.05,  0.05, 1.48, 0.24);
    this.addBox(g, skin, 0.25, 0.82, 0.24, -0.57, 1.24, 0);
    this.addBox(g, skin, 0.25, 0.82, 0.24,  0.57, 1.24, 0);
    this.addBox(g, 0x4A60A0, 0.27, 0.24, 0.26,  0.57, 1.52, 0);
    this.addBox(g, 0xC06840, 0.27, 0.14, 0.26,  0.57, 1.36, 0);
    this.addBox(g, skin, 0.26, 0.24, 0.24, 0, 2.07, 0);
    this.addSphere(g, skin, 0.41, 0, 2.58, 0);
    this.addBox(g, 0x1A1008, 0.72, 0.06, 0.76, 0, 2.96, 0);
    this.addBox(g, 0x2A1A08, 0.38, 0.20, 0.08, 0, 2.42, 0.37);
    this.addBox(g, 0x2A1A08, 0.34, 0.12, 0.07, 0, 2.56, 0.38);
    this.addBox(g, 0xE8B898, 0.26, 0.07, 0.05, 0, 2.48, 0.41);
    this.addBox(g, 0xFFFFFF, 0.18, 0.05, 0.04, 0, 2.49, 0.42);
    this.addBox(g, 0x1E1810, 0.46, 0.18, 0.56, -0.19, 0.06, 0.10);
    this.addBox(g, 0x1E1810, 0.46, 0.18, 0.56,  0.19, 0.06, 0.10);

    // Name badge (left chest)
    this.addBox(g, 0xFFFFFF, 0.12, 0.08, 0.02, 0.2, 1.7, 0.235);

    // Plaster splat marks on shirt
    this.addSphere(g, 0xF5F5F5, 0.04, -0.18, 1.58, 0.235);
    this.addSphere(g, 0xF5F5F5, 0.04,  0.12, 1.33, 0.235);
    this.addSphere(g, 0xF5F5F5, 0.04,  0.22, 1.68, 0.235);

    // Shirt logo panel (front face of shirt)
    // shirt box: 0.84 wide, 1.0 tall, 0.46 deep, centre y=1.42 → front z = 0.23 + 0.005 = 0.235
    const shirtTex = this.createShirtTexture('Fabio', shirt);
    const logoPanelMat = new THREE.MeshBasicMaterial({ map: shirtTex, transparent: false });
    const logoPanel = new THREE.Mesh(new THREE.PlaneGeometry(0.80, 0.92), logoPanelMat);
    logoPanel.position.set(0, 1.42, 0.235);
    g.add(logoPanel);

    return g;
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  private addBox(
    g: THREE.Group, color: number,
    w: number, h: number, d: number,
    x: number, y: number, z: number
  ): void {
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      new THREE.MeshLambertMaterial({ color })
    );
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
  }

  private addSphere(
    g: THREE.Group, color: number,
    r: number, x: number, y: number, z: number
  ): void {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(r, 10, 8),
      new THREE.MeshLambertMaterial({ color })
    );
    m.position.set(x, y, z);
    m.castShadow = true;
    g.add(m);
  }

  dispose(): void {
    for (const group of this.crewGroups.values()) {
      this.scene.remove(group);
    }
    this.crewGroups.clear();
  }
}
