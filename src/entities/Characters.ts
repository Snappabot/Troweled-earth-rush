import * as THREE from 'three';

/**
 * TEM Crew Characters — low-poly 3D avatars
 * Jose:  dreadlocks, olive skin, teal glasses, black TEM shirt, slim
 * Jarrad: bald, olive skin, dark stubble, tattoo on arm, navy shirt, athletic
 * Matt:   beard, fair skin, black glasses, charcoal hoodie, stocky/tall
 */
export class Characters {
  private scene: THREE.Scene;
  private characters: THREE.Group[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  /** Spawn the crew at a world position */
  spawnCrew(x: number, z: number): void {
    const jose   = this.buildJose();
    const jarrad = this.buildJarrad();
    const matt   = this.buildMatt();

    jose.position.set(x - 2.5, 0, z);
    jarrad.position.set(x, 0, z);
    matt.position.set(x + 2.8, 0, z);

    // Slight random Y rotations so they're not all facing the same way
    jose.rotation.y   = 0.3;
    jarrad.rotation.y = -0.1;
    matt.rotation.y   = -0.4;

    this.scene.add(jose, jarrad, matt);
    this.characters.push(jose, jarrad, matt);
  }

  // ── Jose ──────────────────────────────────────────────────────────────────
  // Slim, dreadlocks, olive skin, teal glasses, black TEM shirt
  private buildJose(): THREE.Group {
    const g = new THREE.Group();
    const skin   = 0xC49A70;  // warm olive
    const shirt  = 0x111111;  // black TEM shirt
    const pants  = 0x2A2A2A;  // dark grey work pants
    const locs   = 0x7A5030;  // dreadlock brown

    // Legs
    this.addBox(g, pants, 0.38, 0.9, 0.32, -0.16, 0.45, 0);
    this.addBox(g, pants, 0.38, 0.9, 0.32,  0.16, 0.45, 0);

    // Body / shirt (slim torso)
    this.addBox(g, shirt, 0.72, 1.0, 0.42, 0, 1.4, 0);

    // TEM logo hint (small white rectangle on chest)
    this.addBox(g, 0xEEEEEE, 0.28, 0.14, 0.05, -0.1, 1.55, 0.22);

    // Arms
    this.addBox(g, skin, 0.2, 0.8, 0.2, -0.5, 1.2, 0);
    this.addBox(g, skin, 0.2, 0.8, 0.2,  0.5, 1.2, 0);

    // Neck
    this.addBox(g, skin, 0.22, 0.22, 0.22, 0, 2.01, 0);

    // Head
    this.addSphere(g, skin, 0.38, 0, 2.5, 0);

    // Dreadlocks — irregular blob extending down from head
    this.addSphere(g, locs, 0.44, 0, 2.55, 0);          // main dread mass
    this.addBox(g, locs, 0.25, 0.55, 0.25, 0, 2.25, -0.08);  // hanging dreads back
    this.addBox(g, locs, 0.18, 0.4,  0.18, -0.25, 2.2, -0.05);
    this.addBox(g, locs, 0.18, 0.35, 0.18,  0.22, 2.15, -0.04);
    this.addBox(g, locs, 0.12, 0.3,  0.12,  0.0,  2.1,  0.08);  // side drads

    // Teal glasses — two flat rectangles on face
    this.addBox(g, 0x3AADA0, 0.22, 0.1, 0.04, -0.15, 2.5, 0.36);
    this.addBox(g, 0x3AADA0, 0.22, 0.1, 0.04,  0.15, 2.5, 0.36);
    this.addBox(g, 0x3AADA0, 0.08, 0.05, 0.02, 0,    2.5, 0.37); // bridge

    // Shoes
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52, -0.16, 0.06, 0.08);
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52,  0.16, 0.06, 0.08);

    return g;
  }

  // ── Jarrad ────────────────────────────────────────────────────────────────
  // Athletic, shaved bald head, dark stubble, navy shirt, tattoo on right arm
  private buildJarrad(): THREE.Group {
    const g = new THREE.Group();
    const skin   = 0xC49060;  // warm olive-tan
    const shirt  = 0x1A2B4A;  // navy blue
    const pants  = 0x2A2A2A;

    // Legs (slightly wider than Jose — more athletic)
    this.addBox(g, pants, 0.42, 0.9, 0.34, -0.18, 0.45, 0);
    this.addBox(g, pants, 0.42, 0.9, 0.34,  0.18, 0.45, 0);

    // Body (broader shoulders)
    this.addBox(g, shirt, 0.82, 1.0, 0.44, 0, 1.4, 0);

    // Arms (muscular — slightly thicker)
    this.addBox(g, skin, 0.24, 0.78, 0.22, -0.56, 1.22, 0);
    this.addBox(g, skin, 0.24, 0.78, 0.22,  0.56, 1.22, 0);

    // Tattoo on right upper arm — colourful band
    this.addBox(g, 0x4A7AB8, 0.26, 0.18, 0.24,  0.56, 1.48, 0);
    this.addBox(g, 0xC1666B, 0.26, 0.10, 0.24,  0.56, 1.35, 0);

    // Neck
    this.addBox(g, skin, 0.25, 0.22, 0.24, 0, 2.01, 0);

    // Head — slightly larger, bald (just the skin sphere, no hair)
    this.addSphere(g, skin, 0.40, 0, 2.52, 0);

    // Dark stubble/shadow on lower face
    this.addBox(g, 0x4A3020, 0.38, 0.18, 0.06, 0, 2.36, 0.36);

    // Shoes
    this.addBox(g, 0x222222, 0.44, 0.15, 0.54, -0.18, 0.06, 0.08);
    this.addBox(g, 0x222222, 0.44, 0.15, 0.54,  0.18, 0.06, 0.08);

    return g;
  }

  // ── Matt ──────────────────────────────────────────────────────────────────
  // Tall, stocky, fair skin, full dark beard, black glasses, dark charcoal hoodie
  private buildMatt(): THREE.Group {
    const g = new THREE.Group();
    const skin   = 0xD4A888;  // fair/pink-undertone
    const hoodie = 0x2E2E2E;  // dark charcoal
    const pants  = 0x282828;
    const beard  = 0x2A1A10;  // very dark brown beard

    // Legs (tall + stocky — slightly longer)
    this.addBox(g, pants, 0.46, 1.0, 0.36, -0.2, 0.5, 0);
    this.addBox(g, pants, 0.46, 1.0, 0.36,  0.2, 0.5, 0);

    // Body — hoodie (wider/stockier build)
    this.addBox(g, hoodie, 0.96, 1.1, 0.50, 0, 1.55, 0);

    // Hoodie pocket/pouch at front
    this.addBox(g, 0x282828, 0.50, 0.25, 0.06, 0, 1.2, 0.26);

    // Arms (stocky)
    this.addBox(g, hoodie, 0.28, 0.85, 0.26, -0.64, 1.35, 0);
    this.addBox(g, hoodie, 0.28, 0.85, 0.26,  0.64, 1.35, 0);

    // Neck
    this.addBox(g, skin, 0.26, 0.22, 0.24, 0, 2.21, 0);

    // Head (tall — proportionally slightly taller total height)
    this.addSphere(g, skin, 0.42, 0, 2.72, 0);

    // Hair — mostly bald top, slight grey fringe on sides
    this.addBox(g, 0x888888, 0.36, 0.08, 0.36, 0, 3.05, 0);  // very thin remnant on top

    // Full beard — covers lower half of face
    this.addBox(g, beard, 0.42, 0.28, 0.08,  0, 2.56, 0.38);  // main beard block
    this.addBox(g, beard, 0.38, 0.18, 0.08,  0, 2.72, 0.38);  // moustache area

    // Black rectangular glasses
    this.addBox(g, 0x111111, 0.22, 0.12, 0.04, -0.15, 2.78, 0.42);
    this.addBox(g, 0x111111, 0.22, 0.12, 0.04,  0.15, 2.78, 0.42);
    this.addBox(g, 0x111111, 0.08, 0.06, 0.03,  0,    2.78, 0.43);  // bridge
    // Arms of glasses — wrap around sides
    this.addBox(g, 0x111111, 0.04, 0.07, 0.28, -0.35, 2.78, 0.29);
    this.addBox(g, 0x111111, 0.04, 0.07, 0.28,  0.35, 2.78, 0.29);

    // Shoes
    this.addBox(g, 0x111111, 0.48, 0.16, 0.56, -0.2, 0.06, 0.09);
    this.addBox(g, 0x111111, 0.48, 0.16, 0.56,  0.2, 0.06, 0.09);

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
    for (const c of this.characters) {
      this.scene.remove(c);
    }
    this.characters = [];
  }
}
