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
    const jose     = this.buildJose();
    const jarrad   = this.buildJarrad();
    const matt     = this.buildMatt();
    const phil     = this.buildPhil();
    const tsuyoshi = this.buildTsuyoshi();
    const joe      = this.buildJoe();

    jose.position.set(x - 5.5, 0, z);
    jarrad.position.set(x - 2.5, 0, z + 1);
    matt.position.set(x + 0.5, 0, z);
    phil.position.set(x + 4, 0, z + 0.5);
    tsuyoshi.position.set(x - 4, 0, z + 3.5);
    joe.position.set(x + 7, 0, z + 1);  // Site foreman standing nearby

    jose.rotation.y   =  0.3;
    jarrad.rotation.y = -0.1;
    matt.rotation.y   = -0.3;
    phil.rotation.y   = -0.5;
    tsuyoshi.rotation.y = 0.8;
    joe.rotation.y    = -1.2;  // Facing the TEM crew, clipboard energy

    const fabio = this.buildFabio();
    fabio.position.set(x + 2.5, 0, z + 3.5);  // Centre stage (naturally)
    fabio.rotation.y = -0.6;

    this.scene.add(jose, jarrad, matt, phil, tsuyoshi, joe, fabio);
    this.characters.push(jose, jarrad, matt, phil, tsuyoshi, joe, fabio);
  }

  // ── Jose ──────────────────────────────────────────────────────────────────
  // Slim, near-BLACK thick dreadlocks, olive skin, NO glasses,
  // headphones around neck, black long-sleeve TEM shirt
  private buildJose(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xC49A70;  // warm olive
    const shirt = 0x0A0A0A;  // black long-sleeve TEM shirt
    const pants = 0x2A2A2A;
    const locs  = 0x1A1410;  // near-black thick dreadlocks

    // Legs
    this.addBox(g, pants, 0.38, 0.9, 0.32, -0.16, 0.45, 0);
    this.addBox(g, pants, 0.38, 0.9, 0.32,  0.16, 0.45, 0);

    // Body — slim, long-sleeve black shirt
    this.addBox(g, shirt, 0.72, 1.0, 0.42, 0, 1.4, 0);

    // TEM logo (white tree graphic on chest)
    this.addBox(g, 0xDDDDDD, 0.22, 0.22, 0.05, -0.05, 1.42, 0.22);

    // Arms — long-sleeve (full arm in shirt colour)
    this.addBox(g, shirt, 0.21, 0.82, 0.21, -0.5, 1.22, 0);
    this.addBox(g, shirt, 0.21, 0.82, 0.21,  0.5, 1.22, 0);
    // Wrists/hands
    this.addBox(g, skin, 0.18, 0.18, 0.18, -0.5, 0.78, 0);
    this.addBox(g, skin, 0.18, 0.18, 0.18,  0.5, 0.78, 0);

    // Neck
    this.addBox(g, skin, 0.22, 0.22, 0.22, 0, 2.01, 0);

    // Head
    this.addSphere(g, skin, 0.38, 0, 2.5, 0);

    // Near-black thick dreadlocks — chunky, shoulder length
    this.addSphere(g, locs, 0.46, 0, 2.58, 0);           // main mass on top
    this.addBox(g, locs, 0.38, 0.60, 0.38,  0,    2.22, -0.08);  // back dreads hanging
    this.addBox(g, locs, 0.22, 0.55, 0.22, -0.30, 2.20, -0.04);  // left side
    this.addBox(g, locs, 0.22, 0.50, 0.22,  0.28, 2.18, -0.04);  // right side
    this.addBox(g, locs, 0.16, 0.40, 0.16,  0.10, 2.10,  0.10);  // front drads
    this.addBox(g, locs, 0.14, 0.30, 0.14, -0.10, 2.05,  0.08);

    // Teal rectangular glasses (visible in group shot through dreads)
    this.addBox(g, 0x2A9A90, 0.22, 0.11, 0.04, -0.13, 2.52, 0.37);
    this.addBox(g, 0x2A9A90, 0.22, 0.11, 0.04,  0.13, 2.52, 0.37);
    this.addBox(g, 0x2A9A90, 0.07, 0.06, 0.03,  0,    2.52, 0.38);

    // Headphones AROUND NECK (not on head) — white/silver cord
    this.addBox(g, 0x888888, 0.06, 0.06, 0.55, 0, 2.10, 0);   // band behind neck
    this.addBox(g, 0x555555, 0.1, 0.1, 0.1, -0.22, 2.04, 0.25);  // left bud
    this.addBox(g, 0x555555, 0.1, 0.1, 0.1,  0.22, 2.04, 0.25);  // right bud

    // Shoes
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52, -0.16, 0.06, 0.08);
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52,  0.16, 0.06, 0.08);

    return g;
  }

  // ── Jarrad ────────────────────────────────────────────────────────────────
  // Slim-medium, dark brown short fluffy hair, DARK RECTANGULAR GLASSES,
  // short dark beard stubble, fair/medium skin, black TEM shirt
  private buildJarrad(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xC8A080;  // fair-medium
    const shirt = 0x111111;  // black TEM shirt
    const pants = 0x2A2A2A;
    const hair  = 0x1E1008;  // very dark brown hair

    // Legs
    this.addBox(g, pants, 0.40, 0.9, 0.33, -0.17, 0.45, 0);
    this.addBox(g, pants, 0.40, 0.9, 0.33,  0.17, 0.45, 0);

    // Body
    this.addBox(g, shirt, 0.76, 1.0, 0.43, 0, 1.4, 0);

    // TEM logo
    this.addBox(g, 0xDDDDDD, 0.22, 0.22, 0.05, -0.05, 1.48, 0.23);

    // Arms
    this.addBox(g, skin, 0.21, 0.80, 0.21, -0.52, 1.22, 0);
    this.addBox(g, skin, 0.21, 0.80, 0.21,  0.52, 1.22, 0);

    // Neck
    this.addBox(g, skin, 0.22, 0.22, 0.22, 0, 2.01, 0);

    // Head
    this.addSphere(g, skin, 0.38, 0, 2.50, 0);

    // Dark brown short fluffy hair (NOT bald — short on top, slightly messy)
    this.addBox(g, hair, 0.72, 0.20, 0.72, 0, 2.84, -0.02);   // top
    this.addBox(g, hair, 0.20, 0.28, 0.20, -0.36, 2.68, -0.02); // side L
    this.addBox(g, hair, 0.20, 0.28, 0.20,  0.36, 2.68, -0.02); // side R
    this.addBox(g, hair, 0.60, 0.16, 0.25,  0,    2.72, -0.24); // back

    // Short dark beard stubble on jaw/chin
    this.addBox(g, 0x2A1808, 0.36, 0.22, 0.07, 0, 2.36, 0.35);

    // Dark rectangular glasses (signature Jarrad look)
    this.addBox(g, 0x1A1A1A, 0.24, 0.13, 0.04, -0.13, 2.52, 0.37);
    this.addBox(g, 0x1A1A1A, 0.24, 0.13, 0.04,  0.13, 2.52, 0.37);
    this.addBox(g, 0x1A1A1A, 0.07, 0.07, 0.03,  0,    2.52, 0.38); // bridge
    this.addBox(g, 0x1A1A1A, 0.04, 0.08, 0.26, -0.32, 2.52, 0.25); // arm L
    this.addBox(g, 0x1A1A1A, 0.04, 0.08, 0.26,  0.32, 2.52, 0.25); // arm R

    // Shoes
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52, -0.17, 0.06, 0.08);
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52,  0.17, 0.06, 0.08);

    return g;
  }

  // ── Matt ──────────────────────────────────────────────────────────────────
  // Medium build, dark brown hair, full reddish-brown beard, no glasses,
  // BLACK EAR MUFFS (signature), dark grey splattered TEM t-shirt
  private buildMatt(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xC8956A;  // medium fair, slightly tanned
    const shirt = 0x333330;  // dark grey TEM tee (paint splattered)
    const pants = 0x282828;
    const beard = 0x3A2010;  // reddish-dark brown beard
    const hair  = 0x2E1E0E;  // dark brown hair

    // Legs
    this.addBox(g, pants, 0.44, 0.95, 0.34, -0.19, 0.475, 0);
    this.addBox(g, pants, 0.44, 0.95, 0.34,  0.19, 0.475, 0);

    // Body — medium build, dark grey TEM shirt
    this.addBox(g, shirt, 0.88, 1.05, 0.46, 0, 1.475, 0);

    // Paint splatter hints on shirt
    this.addBox(g, 0xE8E4DC, 0.08, 0.08, 0.05,  0.2,  1.6, 0.24);
    this.addBox(g, 0xE8E4DC, 0.12, 0.06, 0.05, -0.15, 1.3, 0.24);

    // Arms (medium)
    this.addBox(g, skin, 0.23, 0.82, 0.22, -0.58, 1.26, 0);
    this.addBox(g, skin, 0.23, 0.82, 0.22,  0.58, 1.26, 0);

    // Neck
    this.addBox(g, skin, 0.24, 0.22, 0.23, 0, 2.08, 0);

    // Head
    this.addSphere(g, skin, 0.40, 0, 2.58, 0);

    // Dark brown hair — short, proper coverage on top
    this.addBox(g, hair, 0.76, 0.16, 0.78, 0, 2.94, -0.02);   // main top hair
    this.addBox(g, hair, 0.72, 0.22, 0.30, 0, 2.88, -0.28);   // back hair
    this.addBox(g, hair, 0.25, 0.30, 0.22, -0.38, 2.72, -0.05); // side hair L
    this.addBox(g, hair, 0.25, 0.30, 0.22,  0.38, 2.72, -0.05); // side hair R

    // Full reddish-brown beard
    this.addBox(g, beard, 0.44, 0.32, 0.10, 0, 2.42, 0.36);  // main beard
    this.addBox(g, beard, 0.40, 0.20, 0.09, 0, 2.58, 0.38);  // moustache
    this.addBox(g, beard, 0.20, 0.40, 0.10, -0.34, 2.46, 0.28);  // sideburn L
    this.addBox(g, beard, 0.20, 0.40, 0.10,  0.34, 2.46, 0.28);  // sideburn R

    // ── Black ear muffs — signature detail ──
    // Headband arc over top
    this.addBox(g, 0x111111, 0.06, 0.06, 0.88, 0, 3.05, 0);  // arc cross piece
    // Left ear cup
    this.addSphere(g, 0x111111, 0.18, -0.54, 2.72, 0);
    this.addBox(g, 0x222222, 0.28, 0.28, 0.10, -0.54, 2.72, 0);
    // Right ear cup
    this.addSphere(g, 0x111111, 0.18, 0.54, 2.72, 0);
    this.addBox(g, 0x222222, 0.28, 0.28, 0.10,  0.54, 2.72, 0);
    // Arms connecting band to cups
    this.addBox(g, 0x111111, 0.06, 0.38, 0.06, -0.50, 2.89, 0);
    this.addBox(g, 0x111111, 0.06, 0.38, 0.06,  0.50, 2.89, 0);

    // Shoes
    this.addBox(g, 0x222222, 0.46, 0.15, 0.54, -0.19, 0.06, 0.08);
    this.addBox(g, 0x222222, 0.46, 0.15, 0.54,  0.19, 0.06, 0.08);

    return g;
  }

  // ── Phil ──────────────────────────────────────────────────────────────────
  // Old Man Phil — stocky/broad, silver-grey short hair, silver rectangular
  // glasses, white TEM shirt, blue work jeans, big friendly smile
  private buildPhil(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xD4A880;  // fair, slightly weathered
    const shirt = 0xF0EDE8;  // white TEM shirt
    const jeans = 0x3A5080;  // blue work jeans
    const hair  = 0xC0C0B8;  // silver-grey hair

    // Legs — blue jeans (broader stance, older bloke)
    this.addBox(g, jeans, 0.50, 1.0, 0.38, -0.22, 0.5, 0);
    this.addBox(g, jeans, 0.50, 1.0, 0.38,  0.22, 0.5, 0);

    // Body — white TEM shirt, broader/stockier torso
    this.addBox(g, shirt, 1.0, 1.1, 0.52, 0, 1.55, 0);

    // TEM logo on white shirt (dark text visible)
    this.addBox(g, 0x333333, 0.24, 0.22, 0.05, -0.05, 1.58, 0.27);

    // Arms (broader)
    this.addBox(g, skin, 0.26, 0.82, 0.24, -0.66, 1.36, 0);
    this.addBox(g, skin, 0.26, 0.82, 0.24,  0.66, 1.36, 0);

    // Neck
    this.addBox(g, skin, 0.28, 0.24, 0.26, 0, 2.21, 0);

    // Head (rounder, older)
    this.addSphere(g, skin, 0.44, 0, 2.72, 0);

    // Silver-grey short hair
    this.addBox(g, hair, 0.80, 0.18, 0.80, 0, 3.08, -0.02);   // top
    this.addBox(g, hair, 0.28, 0.30, 0.26, -0.42, 2.88, -0.02); // side L
    this.addBox(g, hair, 0.28, 0.30, 0.26,  0.42, 2.88, -0.02); // side R
    this.addBox(g, hair, 0.70, 0.18, 0.30,  0,    2.82, -0.28); // back

    // Silver/light rectangular glasses
    this.addBox(g, 0xA8A8A0, 0.26, 0.13, 0.04, -0.14, 2.74, 0.42);
    this.addBox(g, 0xA8A8A0, 0.26, 0.13, 0.04,  0.14, 2.74, 0.42);
    this.addBox(g, 0xA8A8A0, 0.08, 0.07, 0.03,  0,    2.74, 0.43);
    this.addBox(g, 0xA8A8A0, 0.04, 0.08, 0.30, -0.36, 2.74, 0.28);
    this.addBox(g, 0xA8A8A0, 0.04, 0.08, 0.30,  0.36, 2.74, 0.28);

    // Big friendly smile hint (slightly lighter area)
    this.addBox(g, 0xC08060, 0.28, 0.08, 0.05, 0, 2.56, 0.43);

    // Shoes (white sneakers — visible in photo)
    this.addBox(g, 0xEEEEE8, 0.52, 0.16, 0.58, -0.22, 0.06, 0.09);
    this.addBox(g, 0xEEEEE8, 0.52, 0.16, 0.58,  0.22, 0.06, 0.09);

    return g;
  }

  // ── Tsuyoshi — The Samurai Master ─────────────────────────────────────────
  // Medium-tan, DRAMATIC MOHAWK (tall black spikes, shaved sides),
  // dark charcoal TEM long-sleeve shirt, lean athletic, big smile
  private buildTsuyoshi(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xB88858;  // medium tan/olive
    const shirt = 0x1A1A18;  // dark charcoal TEM shirt
    const pants = 0x222220;
    const hawk  = 0x0A0A08;  // near-black mohawk

    // Legs
    this.addBox(g, pants, 0.40, 0.92, 0.34, -0.17, 0.46, 0);
    this.addBox(g, pants, 0.40, 0.92, 0.34,  0.17, 0.46, 0);

    // Body — lean, long-sleeve charcoal shirt
    this.addBox(g, shirt, 0.78, 1.0, 0.44, 0, 1.42, 0);

    // TEM logo
    this.addBox(g, 0xDDDDDD, 0.22, 0.22, 0.05, -0.05, 1.52, 0.23);

    // Arms — long-sleeve
    this.addBox(g, shirt, 0.21, 0.82, 0.21, -0.52, 1.24, 0);
    this.addBox(g, shirt, 0.21, 0.82, 0.21,  0.52, 1.24, 0);
    this.addBox(g, skin, 0.19, 0.18, 0.19, -0.52, 0.80, 0);
    this.addBox(g, skin, 0.19, 0.18, 0.19,  0.52, 0.80, 0);

    // Neck
    this.addBox(g, skin, 0.22, 0.22, 0.22, 0, 2.03, 0);

    // Head
    this.addSphere(g, skin, 0.38, 0, 2.52, 0);

    // Shaved sides (very close to head colour — just slightly darker)
    this.addBox(g, 0x1A1A18, 0.06, 0.35, 0.72, -0.38, 2.60, 0);
    this.addBox(g, 0x1A1A18, 0.06, 0.35, 0.72,  0.38, 2.60, 0);

    // ── MOHAWK — the hero feature, unmissable silhouette ──
    // Base strip
    this.addBox(g, hawk, 0.22, 0.18, 0.72, 0, 2.88, 0);
    // Central spike cluster — tall and dramatic
    this.addBox(g, hawk, 0.16, 0.60, 0.18, 0, 3.18, 0);       // main centre spike
    this.addBox(g, hawk, 0.12, 0.50, 0.14, -0.08, 3.12, -0.14); // spike left-back
    this.addBox(g, hawk, 0.12, 0.50, 0.14,  0.08, 3.12, -0.14); // spike right-back
    this.addBox(g, hawk, 0.14, 0.42, 0.14,  0, 3.08, 0.18);    // spike front
    this.addBox(g, hawk, 0.10, 0.35, 0.12, -0.06, 3.00, 0.22); // side spike L
    this.addBox(g, hawk, 0.10, 0.35, 0.12,  0.06, 3.00, 0.22); // side spike R

    // Shoes
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52, -0.17, 0.06, 0.08);
    this.addBox(g, 0x222222, 0.42, 0.15, 0.52,  0.17, 0.06, 0.08);

    return g;
  }

  // ── Fabio ─────────────────────────────────────────────────────────────────
  // The most beautiful man in the cosmos — Italian, shaved head,
  // warm Mediterranean olive skin, stylish dark stubble, tattoo on right arm,
  // athletic build, grey plaster-splattered work tee, megawatt smile
  private buildFabio(): THREE.Group {
    const g = new THREE.Group();
    const skin  = 0xBE8E60;  // warm Mediterranean olive-tan
    const shirt = 0x607080;  // grey-blue work tee
    const pants = 0x282830;

    // Legs (athletic stance)
    this.addBox(g, pants, 0.44, 0.95, 0.36, -0.19, 0.475, 0);
    this.addBox(g, pants, 0.44, 0.95, 0.36,  0.19, 0.475, 0);

    // Body — athletic, grey work tee
    this.addBox(g, shirt, 0.84, 1.0, 0.46, 0, 1.42, 0);

    // Plaster splatter marks on shirt (white-grey)
    this.addBox(g, 0xD8D4CC, 0.10, 0.10, 0.05,  0.18, 1.60, 0.24);
    this.addBox(g, 0xD8D4CC, 0.16, 0.08, 0.05, -0.20, 1.30, 0.24);
    this.addBox(g, 0xD8D4CC, 0.08, 0.14, 0.05,  0.05, 1.48, 0.24);

    // Arms — athletic, slightly broader
    this.addBox(g, skin, 0.25, 0.82, 0.24, -0.57, 1.24, 0);
    this.addBox(g, skin, 0.25, 0.82, 0.24,  0.57, 1.24, 0);

    // Tattoo on RIGHT upper arm (colourful, artistic)
    this.addBox(g, 0x4A60A0, 0.27, 0.24, 0.26,  0.57, 1.52, 0);  // main tat blue
    this.addBox(g, 0xC06840, 0.27, 0.14, 0.26,  0.57, 1.36, 0);  // tat detail orange

    // Neck
    this.addBox(g, skin, 0.26, 0.24, 0.24, 0, 2.07, 0);

    // Head — shaved/bald, smooth and proud
    this.addSphere(g, skin, 0.41, 0, 2.58, 0);

    // Very subtle hair stubble (barely there — essentially bald)
    this.addBox(g, 0x1A1008, 0.72, 0.06, 0.76, 0, 2.96, 0);

    // Stylish dark beard stubble (not a full beard — trimmed, fashionable)
    this.addBox(g, 0x2A1A08, 0.38, 0.20, 0.08, 0, 2.42, 0.37);  // chin/jaw
    this.addBox(g, 0x2A1A08, 0.34, 0.12, 0.07, 0, 2.56, 0.38);  // moustache line

    // ── The Smile — megawatt, slightly wider than the others ──
    this.addBox(g, 0xE8B898, 0.26, 0.07, 0.05, 0, 2.48, 0.41);  // teeth hint
    this.addBox(g, 0xFFFFFF, 0.18, 0.05, 0.04, 0, 2.49, 0.42);  // bright teeth

    // Shoes — dark work boots
    this.addBox(g, 0x1E1810, 0.46, 0.18, 0.56, -0.19, 0.06, 0.10);
    this.addBox(g, 0x1E1810, 0.46, 0.18, 0.56,  0.19, 0.06, 0.10);

    return g;
  }

  // ── Joe ───────────────────────────────────────────────────────────────────
  // Tall lanky site foreman — WHITE HARD HAT, LIME-GREEN high-vis polo,
  // safety vest with reflective strips, short dark hair, clean-shaven
  private buildJoe(): THREE.Group {
    const g = new THREE.Group();
    const skin   = 0xC8A070;  // warm light tan
    const polo   = 0x88CC22;  // lime-green high-vis polo
    const vest   = 0xDDCC00;  // hi-vis yellow-lime safety vest
    const pants  = 0x222228;  // dark work pants
    const hat    = 0xEEEEE8;  // white hard hat

    // Legs (tall — slightly longer)
    this.addBox(g, pants, 0.38, 1.05, 0.32, -0.16, 0.525, 0);
    this.addBox(g, pants, 0.38, 1.05, 0.32,  0.16, 0.525, 0);

    // Body — lime green polo underneath vest
    this.addBox(g, polo, 0.76, 1.05, 0.44, 0, 1.525, 0);

    // Safety vest over the polo (slightly proud of polo)
    this.addBox(g, vest, 0.82, 1.0, 0.10, 0, 1.52, 0.23);   // front panel
    this.addBox(g, vest, 0.82, 1.0, 0.10, 0, 1.52, -0.23);  // back panel
    // Vest shoulder straps
    this.addBox(g, vest, 0.12, 0.90, 0.10, -0.28, 1.62, 0);
    this.addBox(g, vest, 0.12, 0.90, 0.10,  0.28, 1.62, 0);
    // Reflective strips (silver horizontal bands)
    this.addBox(g, 0xDDDDD0, 0.84, 0.10, 0.12, 0, 1.42, 0.23);
    this.addBox(g, 0xDDDDD0, 0.84, 0.10, 0.12, 0, 1.62, 0.23);

    // Arms — lime polo sleeves, slim
    this.addBox(g, polo, 0.19, 0.80, 0.19, -0.50, 1.28, 0);
    this.addBox(g, polo, 0.19, 0.80, 0.19,  0.50, 1.28, 0);
    // Wrists/hands
    this.addBox(g, skin, 0.17, 0.18, 0.17, -0.50, 0.84, 0);
    this.addBox(g, skin, 0.17, 0.18, 0.17,  0.50, 0.84, 0);

    // Neck
    this.addBox(g, skin, 0.20, 0.22, 0.20, 0, 2.11, 0);

    // Head (slightly long face)
    this.addSphere(g, skin, 0.38, 0, 2.60, 0);

    // Short dark black hair (under the hat, barely visible)
    this.addBox(g, 0x0A0A08, 0.60, 0.12, 0.64, 0, 2.92, -0.02);

    // ── WHITE HARD HAT — the signature detail ──
    // Helmet dome
    this.addSphere(g, hat, 0.46, 0, 3.04, 0);
    // Brim — flat wide ring all around
    this.addBox(g, hat, 1.10, 0.08, 1.10, 0, 2.84, 0);
    // Inner shadow line
    this.addBox(g, 0xCCCCC8, 0.92, 0.06, 0.92, 0, 2.82, 0);

    // Shoes — dark work boots
    this.addBox(g, 0x2A2218, 0.42, 0.18, 0.56, -0.16, 0.06, 0.10);
    this.addBox(g, 0x2A2218, 0.42, 0.18, 0.56,  0.16, 0.06, 0.10);

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
