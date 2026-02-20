import * as THREE from 'three';
/**
 * TEM Crew Characters — low-poly 3D avatars
 * Jose:  dreadlocks, olive skin, teal glasses, black TEM shirt, slim
 * Jarrad: bald, olive skin, dark stubble, tattoo on arm, navy shirt, athletic
 * Matt:   beard, fair skin, black glasses, charcoal hoodie, stocky/tall
 */
export class Characters {
    scene;
    characters = [];
    constructor(scene) {
        this.scene = scene;
    }
    /** Spawn the crew at a world position */
    spawnCrew(x, z) {
        const jose = this.buildJose();
        const jarrad = this.buildJarrad();
        const matt = this.buildMatt();
        jose.position.set(x - 2.5, 0, z);
        jarrad.position.set(x, 0, z);
        matt.position.set(x + 2.8, 0, z);
        // Slight random Y rotations so they're not all facing the same way
        jose.rotation.y = 0.3;
        jarrad.rotation.y = -0.1;
        matt.rotation.y = -0.4;
        this.scene.add(jose, jarrad, matt);
        this.characters.push(jose, jarrad, matt);
    }
    // ── Jose ──────────────────────────────────────────────────────────────────
    // Slim, near-BLACK thick dreadlocks, olive skin, NO glasses,
    // headphones around neck, black long-sleeve TEM shirt
    buildJose() {
        const g = new THREE.Group();
        const skin = 0xC49A70; // warm olive
        const shirt = 0x0A0A0A; // black long-sleeve TEM shirt
        const pants = 0x2A2A2A;
        const locs = 0x1A1410; // near-black thick dreadlocks
        // Legs
        this.addBox(g, pants, 0.38, 0.9, 0.32, -0.16, 0.45, 0);
        this.addBox(g, pants, 0.38, 0.9, 0.32, 0.16, 0.45, 0);
        // Body — slim, long-sleeve black shirt
        this.addBox(g, shirt, 0.72, 1.0, 0.42, 0, 1.4, 0);
        // TEM logo (white tree graphic on chest)
        this.addBox(g, 0xDDDDDD, 0.22, 0.22, 0.05, -0.05, 1.42, 0.22);
        // Arms — long-sleeve (full arm in shirt colour)
        this.addBox(g, shirt, 0.21, 0.82, 0.21, -0.5, 1.22, 0);
        this.addBox(g, shirt, 0.21, 0.82, 0.21, 0.5, 1.22, 0);
        // Wrists/hands
        this.addBox(g, skin, 0.18, 0.18, 0.18, -0.5, 0.78, 0);
        this.addBox(g, skin, 0.18, 0.18, 0.18, 0.5, 0.78, 0);
        // Neck
        this.addBox(g, skin, 0.22, 0.22, 0.22, 0, 2.01, 0);
        // Head
        this.addSphere(g, skin, 0.38, 0, 2.5, 0);
        // Near-black thick dreadlocks — chunky, shoulder length
        this.addSphere(g, locs, 0.46, 0, 2.58, 0); // main mass on top
        this.addBox(g, locs, 0.38, 0.60, 0.38, 0, 2.22, -0.08); // back dreads hanging
        this.addBox(g, locs, 0.22, 0.55, 0.22, -0.30, 2.20, -0.04); // left side
        this.addBox(g, locs, 0.22, 0.50, 0.22, 0.28, 2.18, -0.04); // right side
        this.addBox(g, locs, 0.16, 0.40, 0.16, 0.10, 2.10, 0.10); // front drads
        this.addBox(g, locs, 0.14, 0.30, 0.14, -0.10, 2.05, 0.08);
        // Headphones AROUND NECK (not on head) — white/silver cord
        this.addBox(g, 0x888888, 0.06, 0.06, 0.55, 0, 2.10, 0); // band behind neck
        this.addBox(g, 0x555555, 0.1, 0.1, 0.1, -0.22, 2.04, 0.25); // left bud
        this.addBox(g, 0x555555, 0.1, 0.1, 0.1, 0.22, 2.04, 0.25); // right bud
        // Shoes
        this.addBox(g, 0x222222, 0.42, 0.15, 0.52, -0.16, 0.06, 0.08);
        this.addBox(g, 0x222222, 0.42, 0.15, 0.52, 0.16, 0.06, 0.08);
        return g;
    }
    // ── Jarrad ────────────────────────────────────────────────────────────────
    // Slim-medium, dark brown short fluffy hair, DARK RECTANGULAR GLASSES,
    // short dark beard stubble, fair/medium skin, black TEM shirt
    buildJarrad() {
        const g = new THREE.Group();
        const skin = 0xC8A080; // fair-medium
        const shirt = 0x111111; // black TEM shirt
        const pants = 0x2A2A2A;
        const hair = 0x1E1008; // very dark brown hair
        // Legs
        this.addBox(g, pants, 0.40, 0.9, 0.33, -0.17, 0.45, 0);
        this.addBox(g, pants, 0.40, 0.9, 0.33, 0.17, 0.45, 0);
        // Body
        this.addBox(g, shirt, 0.76, 1.0, 0.43, 0, 1.4, 0);
        // TEM logo
        this.addBox(g, 0xDDDDDD, 0.22, 0.22, 0.05, -0.05, 1.48, 0.23);
        // Arms
        this.addBox(g, skin, 0.21, 0.80, 0.21, -0.52, 1.22, 0);
        this.addBox(g, skin, 0.21, 0.80, 0.21, 0.52, 1.22, 0);
        // Neck
        this.addBox(g, skin, 0.22, 0.22, 0.22, 0, 2.01, 0);
        // Head
        this.addSphere(g, skin, 0.38, 0, 2.50, 0);
        // Dark brown short fluffy hair (NOT bald — short on top, slightly messy)
        this.addBox(g, hair, 0.72, 0.20, 0.72, 0, 2.84, -0.02); // top
        this.addBox(g, hair, 0.20, 0.28, 0.20, -0.36, 2.68, -0.02); // side L
        this.addBox(g, hair, 0.20, 0.28, 0.20, 0.36, 2.68, -0.02); // side R
        this.addBox(g, hair, 0.60, 0.16, 0.25, 0, 2.72, -0.24); // back
        // Short dark beard stubble on jaw/chin
        this.addBox(g, 0x2A1808, 0.36, 0.22, 0.07, 0, 2.36, 0.35);
        // Dark rectangular glasses (signature Jarrad look)
        this.addBox(g, 0x1A1A1A, 0.24, 0.13, 0.04, -0.13, 2.52, 0.37);
        this.addBox(g, 0x1A1A1A, 0.24, 0.13, 0.04, 0.13, 2.52, 0.37);
        this.addBox(g, 0x1A1A1A, 0.07, 0.07, 0.03, 0, 2.52, 0.38); // bridge
        this.addBox(g, 0x1A1A1A, 0.04, 0.08, 0.26, -0.32, 2.52, 0.25); // arm L
        this.addBox(g, 0x1A1A1A, 0.04, 0.08, 0.26, 0.32, 2.52, 0.25); // arm R
        // Shoes
        this.addBox(g, 0x222222, 0.42, 0.15, 0.52, -0.17, 0.06, 0.08);
        this.addBox(g, 0x222222, 0.42, 0.15, 0.52, 0.17, 0.06, 0.08);
        return g;
    }
    // ── Matt ──────────────────────────────────────────────────────────────────
    // Medium build, dark brown hair, full reddish-brown beard, no glasses,
    // BLACK EAR MUFFS (signature), dark grey splattered TEM t-shirt
    buildMatt() {
        const g = new THREE.Group();
        const skin = 0xC8956A; // medium fair, slightly tanned
        const shirt = 0x333330; // dark grey TEM tee (paint splattered)
        const pants = 0x282828;
        const beard = 0x3A2010; // reddish-dark brown beard
        const hair = 0x2E1E0E; // dark brown hair
        // Legs
        this.addBox(g, pants, 0.44, 0.95, 0.34, -0.19, 0.475, 0);
        this.addBox(g, pants, 0.44, 0.95, 0.34, 0.19, 0.475, 0);
        // Body — medium build, dark grey TEM shirt
        this.addBox(g, shirt, 0.88, 1.05, 0.46, 0, 1.475, 0);
        // Paint splatter hints on shirt
        this.addBox(g, 0xE8E4DC, 0.08, 0.08, 0.05, 0.2, 1.6, 0.24);
        this.addBox(g, 0xE8E4DC, 0.12, 0.06, 0.05, -0.15, 1.3, 0.24);
        // Arms (medium)
        this.addBox(g, skin, 0.23, 0.82, 0.22, -0.58, 1.26, 0);
        this.addBox(g, skin, 0.23, 0.82, 0.22, 0.58, 1.26, 0);
        // Neck
        this.addBox(g, skin, 0.24, 0.22, 0.23, 0, 2.08, 0);
        // Head
        this.addSphere(g, skin, 0.40, 0, 2.58, 0);
        // Dark brown hair — short, proper coverage on top
        this.addBox(g, hair, 0.76, 0.16, 0.78, 0, 2.94, -0.02); // main top hair
        this.addBox(g, hair, 0.72, 0.22, 0.30, 0, 2.88, -0.28); // back hair
        this.addBox(g, hair, 0.25, 0.30, 0.22, -0.38, 2.72, -0.05); // side hair L
        this.addBox(g, hair, 0.25, 0.30, 0.22, 0.38, 2.72, -0.05); // side hair R
        // Full reddish-brown beard
        this.addBox(g, beard, 0.44, 0.32, 0.10, 0, 2.42, 0.36); // main beard
        this.addBox(g, beard, 0.40, 0.20, 0.09, 0, 2.58, 0.38); // moustache
        this.addBox(g, beard, 0.20, 0.40, 0.10, -0.34, 2.46, 0.28); // sideburn L
        this.addBox(g, beard, 0.20, 0.40, 0.10, 0.34, 2.46, 0.28); // sideburn R
        // ── Black ear muffs — signature detail ──
        // Headband arc over top
        this.addBox(g, 0x111111, 0.06, 0.06, 0.88, 0, 3.05, 0); // arc cross piece
        // Left ear cup
        this.addSphere(g, 0x111111, 0.18, -0.54, 2.72, 0);
        this.addBox(g, 0x222222, 0.28, 0.28, 0.10, -0.54, 2.72, 0);
        // Right ear cup
        this.addSphere(g, 0x111111, 0.18, 0.54, 2.72, 0);
        this.addBox(g, 0x222222, 0.28, 0.28, 0.10, 0.54, 2.72, 0);
        // Arms connecting band to cups
        this.addBox(g, 0x111111, 0.06, 0.38, 0.06, -0.50, 2.89, 0);
        this.addBox(g, 0x111111, 0.06, 0.38, 0.06, 0.50, 2.89, 0);
        // Shoes
        this.addBox(g, 0x222222, 0.46, 0.15, 0.54, -0.19, 0.06, 0.08);
        this.addBox(g, 0x222222, 0.46, 0.15, 0.54, 0.19, 0.06, 0.08);
        return g;
    }
    // ── Helpers ───────────────────────────────────────────────────────────────
    addBox(g, color, w, h, d, x, y, z) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color }));
        m.position.set(x, y, z);
        m.castShadow = true;
        m.receiveShadow = true;
        g.add(m);
    }
    addSphere(g, color, r, x, y, z) {
        const m = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), new THREE.MeshLambertMaterial({ color }));
        m.position.set(x, y, z);
        m.castShadow = true;
        g.add(m);
    }
    dispose() {
        for (const c of this.characters) {
            this.scene.remove(c);
        }
        this.characters = [];
    }
}
