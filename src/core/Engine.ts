import * as THREE from 'three';
import { CameraController } from '../world/CameraController';

export class Engine {
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  camera!: CameraController;
  private updateCallbacks: Array<(dt: number) => void> = [];
  private lastTime = 0;

  // ── TE Plaster Palette ──
  private readonly C = {
    modernGrey: 0xC8C4BC,   // Cool pearl grey — modern civic
    warmGrey:   0xB8B0A6,   // Warm grey — residential
    terracotta: 0xC49A7A,   // Earthy terracotta — Mediterranean
    deepClay:   0xA07858,   // Deep clay — accents/shadow buildings
    softWhite:  0xE8E4DC,   // Window surrounds, trim, parapets
    charcoal:   0x4A4A4A,   // Iron grilles, metal details
    warmCream:  0xD4C9B8,   // Cream — villas
    oliveGreen: 0x8A9B6A,   // Planting, feature walls
    ironRed:    0xC1666B,   // TEM brand accent (use sparingly)
  };

  async init() {
    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = false;
    document.body.appendChild(this.renderer.domElement);

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB);
    this.scene.fog = new THREE.Fog(0x87CEEB, 200, 500);

    // Camera
    this.camera = new CameraController();
    this.scene.add(this.camera.camera);

    // Lighting — ambient + sun + fill
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xfff4e0, 1.2);
    sun.position.set(80, 120, 40);
    this.scene.add(sun);

    const fill = new THREE.DirectionalLight(0xffe8d0, 0.5);
    fill.position.set(-60, 40, -80);
    this.scene.add(fill);

    // Build city
    this.createCityGround();
    this.createCity();
    this.createTEHouses();

    // Handle resize
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.camera.updateProjectionMatrix();
    });
  }

  // ── Deterministic pseudo-random from position + salt ──
  private seed(x: number, z: number, salt = 0): number {
    const n = Math.sin(x * 127.1 + z * 311.7 + salt * 74.3) * 43758.5453123;
    return n - Math.floor(n);
  }

  // ── Zone detection by block centre position ──
  private getZone(bx: number, bz: number): 'cbd' | 'brunswick' | 'richmond' | 'footscray' | 'stkilda' {
    if (Math.abs(bx) < 80 && Math.abs(bz) < 80) return 'cbd';
    if (bx < -80) return 'footscray';
    if (bx > 80) return 'richmond';
    if (bz < -80) return 'stkilda';
    return 'brunswick';
  }

  // ── Zone → building type, cumulative weights for [A, B, C, D, E] ──
  private pickBuildingType(zone: string, roll: number): 'A' | 'B' | 'C' | 'D' | 'E' {
    const zoneWeights: Record<string, number[]> = {
      cbd:       [0.50, 0.50, 0.90, 1.00, 1.00],  // 50%A 40%C 10%D
      footscray: [0.00, 0.20, 0.20, 0.40, 1.00],  // 20%B 20%D 60%E
      brunswick: [0.30, 0.60, 0.60, 1.00, 1.00],  // 30%A 30%B 40%D
      richmond:  [0.30, 0.30, 0.60, 1.00, 1.00],  // 30%A 30%C 40%D
      stkilda:   [0.00, 0.30, 0.30, 0.70, 1.00],  // 30%B 40%D 30%E
    };
    const weights = zoneWeights[zone] ?? zoneWeights['brunswick'];
    const types: Array<'A' | 'B' | 'C' | 'D' | 'E'> = ['A', 'B', 'C', 'D', 'E'];
    for (let i = 0; i < weights.length; i++) {
      if (roll < weights[i]) return types[i];
    }
    return 'D';
  }

  // ── City ground — zone-based tile colours ──
  private createCityGround() {
    const RANGE = 240;
    const GRID  = 40;
    const ROAD_W = 8;
    const BLOCK  = GRID - ROAD_W;

    // Large base under everything
    const baseMat = new THREE.MeshLambertMaterial({ color: 0x888880 });
    const baseGround = new THREE.Mesh(new THREE.PlaneGeometry(2048, 2048), baseMat);
    baseGround.rotation.x = -Math.PI / 2;
    baseGround.position.y = 0;
    this.scene.add(baseGround);

    const zoneColours: Record<string, number> = {
      cbd:       0x888880,  // urban concrete
      footscray: 0x776655,  // worn industrial
      brunswick: 0x887766,  // mixed
      richmond:  0x7a7870,  // clean urban
      stkilda:   0x8a9080,  // coastal
    };

    for (let bx = -RANGE; bx < RANGE; bx += GRID) {
      for (let bz = -RANGE; bz < RANGE; bz += GRID) {
        const cx = bx + GRID / 2;
        const cz = bz + GRID / 2;
        const zone = this.getZone(cx, cz);
        const r = this.seed(bx, bz, 0);
        // 15% grass blocks for non-road tiles
        const colour = r < 0.15 ? 0x5a7a4a : zoneColours[zone];
        const tileMat = new THREE.MeshLambertMaterial({ color: colour });
        const tile = new THREE.Mesh(new THREE.PlaneGeometry(BLOCK - 2, BLOCK - 2), tileMat);
        tile.rotation.x = -Math.PI / 2;
        tile.position.set(cx, 0.005, cz);
        this.scene.add(tile);
      }
    }
  }

  private createCity() {
    const RANGE  = 240;
    const GRID   = 40;
    const ROAD_W = 8;

    // Shared materials
    const asphaltMat  = new THREE.MeshLambertMaterial({ color: 0x2a2a2a });
    const whiteMat    = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const yellowMat   = new THREE.MeshLambertMaterial({ color: 0xf0c040 });
    const sidewalkMat = new THREE.MeshLambertMaterial({ color: 0xc8c0b0 });

    // ── Horizontal roads (constant Z, extending along X) ──
    for (let z = -RANGE; z <= RANGE; z += GRID) {
      const len = RANGE * 2;

      // Road surface
      const road = new THREE.Mesh(new THREE.PlaneGeometry(len, ROAD_W), asphaltMat);
      road.rotation.x = -Math.PI / 2;
      road.position.set(0, 0.01, z);
      this.scene.add(road);

      // Sidewalks either side
      for (const side of [-1, 1]) {
        const sw = new THREE.Mesh(new THREE.PlaneGeometry(len, 2), sidewalkMat);
        sw.rotation.x = -Math.PI / 2;
        sw.position.set(0, 0.02, z + side * (ROAD_W / 2 + 1));
        this.scene.add(sw);
      }

      // Yellow edge lines
      for (const side of [-1, 1]) {
        const el = new THREE.Mesh(new THREE.PlaneGeometry(len, 0.2), yellowMat);
        el.rotation.x = -Math.PI / 2;
        el.position.set(0, 0.03, z + side * (ROAD_W / 2 - 0.3));
        this.scene.add(el);
      }

      // White dashed centre lines
      for (let x = -RANGE; x <= RANGE; x += 8) {
        const dash = new THREE.Mesh(new THREE.PlaneGeometry(4, 0.15), whiteMat);
        dash.rotation.x = -Math.PI / 2;
        dash.position.set(x, 0.03, z);
        this.scene.add(dash);
      }

      // Trees along sidewalks (horizontal road, z = constant)
      for (let x = -RANGE; x <= RANGE; x += 20) {
        for (const side of [-1, 1]) {
          const tx = x + (this.seed(x, z, 50 + side) - 0.5) * 2;
          const tz = z + side * 5.5;
          const rem = ((tx % GRID) + GRID) % GRID;
          if (Math.min(rem, GRID - rem) <= 6) continue;
          this.addTree(tx, tz, x * 10 + side, z * 10 + 1);
        }
      }

      // Parked cars
      for (let x = -RANGE + 8; x < RANGE; x += 17) {
        const cr = this.seed(x, z, 60);
        if (cr > 0.45) {
          const side = cr > 0.72 ? 1 : -1;
          const px = x + (this.seed(x, z, 61) - 0.5) * 4;
          const pz = z + side * (ROAD_W / 2 + 1.1);
          this.addParkedCar(px, pz, x + side * 3, z + 7);
        }
      }
    }

    // ── Vertical roads (constant X, extending along Z) ──
    for (let x = -RANGE; x <= RANGE; x += GRID) {
      const len = RANGE * 2;

      // Road surface
      const road = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_W, len), asphaltMat);
      road.rotation.x = -Math.PI / 2;
      road.position.set(x, 0.01, 0);
      this.scene.add(road);

      // Sidewalks either side
      for (const side of [-1, 1]) {
        const sw = new THREE.Mesh(new THREE.PlaneGeometry(2, len), sidewalkMat);
        sw.rotation.x = -Math.PI / 2;
        sw.position.set(x + side * (ROAD_W / 2 + 1), 0.02, 0);
        this.scene.add(sw);
      }

      // Yellow edge lines
      for (const side of [-1, 1]) {
        const el = new THREE.Mesh(new THREE.PlaneGeometry(0.2, len), yellowMat);
        el.rotation.x = -Math.PI / 2;
        el.position.set(x + side * (ROAD_W / 2 - 0.3), 0.03, 0);
        this.scene.add(el);
      }

      // White dashed centre lines
      for (let z = -RANGE; z <= RANGE; z += 8) {
        const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 4), whiteMat);
        dash.rotation.x = -Math.PI / 2;
        dash.position.set(x, 0.03, z);
        this.scene.add(dash);
      }

      // Trees along sidewalks (vertical road, x = constant)
      for (let z = -RANGE; z <= RANGE; z += 20) {
        for (const side of [-1, 1]) {
          const tx = x + side * 5.5;
          const tz = z + (this.seed(x, z, 52 + side) - 0.5) * 2;
          const rem = ((tz % GRID) + GRID) % GRID;
          if (Math.min(rem, GRID - rem) <= 6) continue;
          this.addTree(tx, tz, x * 10 + 2, z * 10 + side);
        }
      }

      // Parked cars
      for (let z = -RANGE + 8; z < RANGE; z += 17) {
        const cr = this.seed(x, z, 62);
        if (cr > 0.45) {
          const side = cr > 0.72 ? 1 : -1;
          const px = x + side * (ROAD_W / 2 + 1.1);
          const pz = z + (this.seed(x, z, 63) - 0.5) * 4;
          this.addParkedCar(px, pz, x + 9, z + side * 3);
        }
      }
    }

    // ── Buildings in every block ──
    for (let bx = -RANGE; bx < RANGE; bx += GRID) {
      for (let bz = -RANGE; bz < RANGE; bz += GRID) {
        this.populateBlock(bx, bz, GRID, ROAD_W);
      }
    }
  }

  // ── Tree ──
  private addTree(x: number, z: number, sx: number, sz: number) {
    const r = this.seed(sx, sz, 99);

    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x5c4033 });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 2, 6), trunkMat);
    trunk.position.set(x, 1, z);
    this.scene.add(trunk);

    const green = r > 0.5 ? 0x3d6e3d : 0x2d5e2d;
    const canopyMat = new THREE.MeshLambertMaterial({ color: green });
    let canopy: THREE.Mesh;
    if (r > 0.5) {
      canopy = new THREE.Mesh(new THREE.SphereGeometry(2.5, 6, 5), canopyMat);
      canopy.position.set(x, 3.5, z);
    } else {
      canopy = new THREE.Mesh(new THREE.ConeGeometry(2, 4, 6), canopyMat);
      canopy.position.set(x, 4, z);
    }
    this.scene.add(canopy);
  }

  // ── Parked car ──
  private addParkedCar(x: number, z: number, sx: number, sz: number) {
    const colours = [0xcc3333, 0x3355cc, 0xaaaaaa, 0xdddddd, 0x222222];
    const ci = Math.floor(this.seed(sx, sz, 20) * colours.length);
    const carMat = new THREE.MeshLambertMaterial({ color: colours[ci] });

    const car = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.2, 3), carMat);
    car.position.set(x, 0.6, z);
    this.scene.add(car);

    const wsMat = new THREE.MeshLambertMaterial({ color: 0x223344 });
    const ws = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 0.1), wsMat);
    ws.position.set(x, 1.3, z - 0.9);
    this.scene.add(ws);
  }

  // ── Populate a city block with 1–2 buildings ──
  private populateBlock(bx: number, bz: number, GRID: number, ROAD_W: number) {
    const usable = GRID - ROAD_W - 4; // ~28 units of usable space
    const cx = bx + GRID / 2;
    const cz = bz + GRID / 2;

    const zone = this.getZone(cx, cz);
    const numBuildings = 1 + Math.floor(this.seed(bx, bz, 1) * 2); // 1 or 2

    for (let i = 0; i < numBuildings; i++) {
      const typeRoll = this.seed(bx + i * 3, bz + i * 7, 3);
      const bType   = this.pickBuildingType(zone, typeRoll);

      // Spread two buildings apart, jitter slightly
      const halfU      = usable * 0.22;
      const baseOffset = numBuildings > 1 ? (i === 0 ? -halfU : halfU) : 0;
      const ox = baseOffset + (this.seed(bx + i * 5, bz, 4) - 0.5) * halfU * 0.4;
      const oz = baseOffset + (this.seed(bx, bz + i * 5, 5) - 0.5) * halfU * 0.4;

      const sx = bx + i * 11;
      const sz = bz + i * 13;

      switch (bType) {
        case 'A': this.buildTypeA(cx + ox, cz + oz, sx, sz); break;
        case 'B': this.buildTypeB(cx + ox, cz + oz, sx, sz); break;
        case 'C': this.buildTypeC(cx + ox, cz + oz, sx, sz); break;
        case 'D': this.buildTypeD(cx + ox, cz + oz, sx, sz); break;
        case 'E': this.buildTypeE(cx + ox, cz + oz, sx, sz); break;
      }
    }
  }

  // ── Helper: add a box mesh to a group ──
  private addBox(
    group: THREE.Group,
    color: number,
    w: number, h: number, d: number,
    x: number, y: number, z: number,
    rx = 0, ry = 0, rz = 0
  ) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      new THREE.MeshLambertMaterial({ color })
    );
    mesh.position.set(x, y, z);
    if (rx !== 0) mesh.rotation.x = rx;
    if (ry !== 0) mesh.rotation.y = ry;
    if (rz !== 0) mesh.rotation.z = rz;
    group.add(mesh);
  }

  // ── Helper: add a cylinder mesh to a group ──
  private addCyl(
    group: THREE.Group,
    color: number,
    rt: number, rb: number, h: number, seg: number,
    x: number, y: number, z: number
  ) {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(rt, rb, h, seg),
      new THREE.MeshLambertMaterial({ color })
    );
    mesh.position.set(x, y, z);
    group.add(mesh);
  }

  // ────────────────────────────────────────────────
  // TYPE A — Modern TE Commercial (CBD)
  // Minimalist flat-roof, pearl grey plaster, colonnaded ground floor
  // ────────────────────────────────────────────────
  private buildTypeA(x: number, z: number, sx: number, sz: number) {
    const C = this.C;
    const group = new THREE.Group();

    // Main body
    this.addBox(group, C.modernGrey, 16, 10, 14, 0, 5, 0);

    // Parapet (roof trim)
    this.addBox(group, C.softWhite, 16.4, 0.6, 14.4, 0, 10.3, 0);

    // Ground colonnade — 3 columns along front face (z = -7)
    for (const cx of [-5, 0, 5]) {
      this.addCyl(group, C.charcoal, 0.3, 0.3, 3, 6, cx, 1.5, -7);
    }

    // Colonnade beam across columns
    this.addBox(group, C.charcoal, 14, 0.4, 0.4, 0, 3, -7);

    // Window slots — upper wall, 3 across, recessed 0.1 from front face
    for (const wx of [-4.5, 0, 4.5]) {
      this.addBox(group, 0x223344, 2.5, 1.8, 0.15, wx, 7, -6.93);
    }

    // Base planter in front of building
    this.addBox(group, C.deepClay,   14, 0.5, 1.2, 0, 0.25, -7.6);
    this.addBox(group, C.oliveGreen, 13, 0.4, 1.0, 0, 0.70, -7.6);

    // Random rotation 0/90/180/270°
    group.rotation.y = Math.floor(this.seed(sx, sz, 101) * 4) * (Math.PI / 2);
    group.position.set(x, 0, z);
    this.scene.add(group);
  }

  // ────────────────────────────────────────────────
  // TYPE B — Mediterranean Heritage (Footscray)
  // Thick terracotta walls, small deeply-recessed windows, iron grille hints
  // ────────────────────────────────────────────────
  private buildTypeB(x: number, z: number, sx: number, sz: number) {
    const C = this.C;
    const group = new THREE.Group();

    // Wall thickness shadow hint — slightly behind and offset
    this.addBox(group, C.deepClay, 14.5, 8.2, 12.5, 0.3, 4.0, 0.3);

    // Main body
    this.addBox(group, C.terracotta, 14, 8, 12, 0, 4, 0);

    // Parapet
    this.addBox(group, C.terracotta, 14.6, 1.2, 12.6, 0, 8.6, 0);

    // Parapet cap
    this.addBox(group, C.softWhite, 15, 0.3, 13, 0, 9.35, 0);

    // Windows (2x tall narrow) + surrounds + grilles
    for (const wx of [-3, 3]) {
      // White surround on wall face
      this.addBox(group, C.softWhite, 1.6, 2.6, 0.1, wx, 5.0, -5.99);
      // Dark glass, recessed 0.15 from front face (front face at z=-6)
      this.addBox(group, 0x223344, 1.2, 2.2, 0.2, wx, 5.0, -5.75);
      // Iron grille bars — 3 horizontal per window
      for (const gy of [4.3, 5.0, 5.7]) {
        this.addBox(group, C.charcoal, 1.0, 0.08, 0.12, wx, gy, -5.68);
      }
    }

    // Arched doorway (3 boxes, decreasing width = arch hint)
    this.addBox(group, C.charcoal, 2.0, 3.0, 0.2, 0, 1.5, -6.1);
    this.addBox(group, C.charcoal, 1.5, 0.4, 0.2, 0, 3.2, -6.1);
    this.addBox(group, C.charcoal, 1.0, 0.4, 0.2, 0, 3.7, -6.1);

    // Small herb planter at base
    this.addBox(group, C.deepClay,   2.0, 0.4, 0.6, 0, 0.20, -6.6);
    this.addBox(group, C.oliveGreen, 1.8, 0.1, 0.5, 0, 0.45, -6.6);

    group.rotation.y = Math.floor(this.seed(sx, sz, 101) * 4) * (Math.PI / 2);
    group.position.set(x, 0, z);
    this.scene.add(group);
  }

  // ────────────────────────────────────────────────
  // TYPE C — Glass Tower (CBD/Richmond)
  // Slim modern tower, dark glass panels, horizontal floor bands
  // ────────────────────────────────────────────────
  private buildTypeC(x: number, z: number, sx: number, sz: number) {
    const C = this.C;
    const group = new THREE.Group();

    const h = 30 + Math.floor(this.seed(sx, sz, 31) * 20); // 30–50

    // Lobby base (wider footprint at ground)
    this.addBox(group, C.modernGrey, 8, 4, 8, 0, 2, 0);
    // Lobby glass inside
    this.addBox(group, 0x445566, 7.5, 3.5, 7.5, 0, 2, 0);

    // Main tower body
    this.addBox(group, 0x334455, 7, h, 7, 0, h / 2, 0);

    // Floor bands — every 4 units
    for (let fy = 4; fy <= h; fy += 4) {
      this.addBox(group, C.warmGrey, 7.3, 0.2, 7.3, 0, fy, 0);
    }

    // Roof plant room
    this.addBox(group, C.charcoal, 4, 3, 4, 0, h + 1.5, 0);

    // Towers are square — rotation doesn't matter visually, but keep for consistency
    group.rotation.y = Math.floor(this.seed(sx, sz, 101) * 4) * (Math.PI / 2);
    group.position.set(x, 0, z);
    this.scene.add(group);
  }

  // ────────────────────────────────────────────────
  // TYPE D — Transitional Villa (Brunswick/Richmond residential)
  // Warm cream plaster, bay window projection, arched entry
  // ────────────────────────────────────────────────
  private buildTypeD(x: number, z: number, sx: number, sz: number) {
    const C = this.C;
    const group = new THREE.Group();

    // Main body — front face at z = -5.5
    this.addBox(group, C.warmCream, 13, 7, 11, 0, 3.5, 0);

    // Flat roof
    this.addBox(group, C.softWhite, 13.5, 0.5, 11.5, 0, 7.25, 0);

    // Bay window surround (slightly larger, set back one unit from the bay front)
    this.addBox(group, C.softWhite, 2.8, 3.8, 1.6, 0, 4.0, -6.20);

    // Bay window projection body
    this.addBox(group, C.warmCream, 2.5, 3.5, 1.5, 0, 4.0, -6.25);

    // Bay window glass — 3 panels side by side at front of bay (z = -7.0)
    for (const wx of [-0.8, 0.0, 0.8]) {
      this.addBox(group, 0x334455, 0.7, 2.5, 0.2, wx, 4.0, -7.0);
    }

    // Arched entry hint (stepped arch at ground centre)
    this.addBox(group, C.deepClay, 2.2, 3.2, 0.3, 0, 1.6, -5.65);
    this.addBox(group, C.deepClay, 1.8, 0.4, 0.3, 0, 3.35, -5.65);
    this.addBox(group, C.deepClay, 1.2, 0.4, 0.3, 0, 3.80, -5.65);

    // Side windows — 2 on upper front wall
    for (const wx of [-3.5, 3.5]) {
      // White surround
      this.addBox(group, C.softWhite, 1.8, 1.5, 0.10, wx, 5.5, -5.50);
      // Glass
      this.addBox(group, 0x334455,   1.5, 1.2, 0.15, wx, 5.5, -5.55);
    }

    // Low fence/wall — 1 unit in front of building
    this.addBox(group, C.deepClay, 11, 1.0, 0.3, 0, 0.5, -6.65);

    group.rotation.y = Math.floor(this.seed(sx, sz, 101) * 4) * (Math.PI / 2);
    group.position.set(x, 0, z);
    this.scene.add(group);
  }

  // ────────────────────────────────────────────────
  // TYPE E — Low Warehouse/Workshop (Footscray/St Kilda industrial)
  // Wide low shed, pitched roof
  // ────────────────────────────────────────────────
  private buildTypeE(x: number, z: number, sx: number, sz: number) {
    const C = this.C;
    const group = new THREE.Group();
    const DEG12 = 12 * Math.PI / 180; // 12° in radians

    // Main body — front face at z = -9
    this.addBox(group, 0x778877, 22, 4, 18, 0, 2, 0);

    // Pitched roof — two panels meeting at ridge
    // Left panel (negative z side): slopes up toward centre
    const roofL = new THREE.Mesh(
      new THREE.BoxGeometry(22.5, 0.3, 10),
      new THREE.MeshLambertMaterial({ color: C.deepClay })
    );
    roofL.rotation.x = DEG12;
    roofL.position.set(0, 4.5, -4.5);
    group.add(roofL);

    // Right panel (positive z side)
    const roofR = new THREE.Mesh(
      new THREE.BoxGeometry(22.5, 0.3, 10),
      new THREE.MeshLambertMaterial({ color: C.deepClay })
    );
    roofR.rotation.x = -DEG12;
    roofR.position.set(0, 4.5, 4.5);
    group.add(roofR);

    // Ridge cap
    this.addBox(group, C.charcoal, 22.5, 0.5, 0.6, 0, 5.2, 0);

    // Large roller door on front face
    this.addBox(group, C.charcoal, 4.5, 3.5, 0.2, 0, 1.75, -9.1);

    // Door tracks either side
    this.addBox(group, 0x555555, 0.15, 3.5, 0.2, -2.4, 1.75, -9.1);
    this.addBox(group, 0x555555, 0.15, 3.5, 0.2,  2.4, 1.75, -9.1);

    // Side windows strip — near top of left side wall
    this.addBox(group, 0x334455, 8, 0.8, 0.15, -11.075, 3.5, 0);

    // Downpipe at front-left corner
    this.addCyl(group, C.charcoal, 0.1, 0.1, 4, 5, -11, 2, -9);

    group.rotation.y = Math.floor(this.seed(sx, sz, 101) * 4) * (Math.PI / 2);
    group.position.set(x, 0, z);
    this.scene.add(group);
  }

  // ────────────────────────────────────────────────────────────────────────────
  // TE LANDMARK HOUSES — 5 signature builds based on real Troweled Earth projects
  // ────────────────────────────────────────────────────────────────────────────
  private createTEHouses() {
    this.buildHouseMarbellino(20, 20);     // House 1 — CBD edge
    this.buildHousePorthole(-60, 20);      // House 2 — Brunswick
    this.buildHouseTerracotta(20, -60);    // House 3 — St Kilda edge
    this.buildHouseLoggia(-60, -60);       // House 4 — Brunswick/StKilda
    this.buildHouseRokka(60, -20);         // House 5 — Richmond
  }

  // ── House 1 — Marbellino Modern ──────────────────────────────────────────────
  private buildHouseMarbellino(x: number, z: number) {
    const g = new THREE.Group();

    // Lower level — light beige/cream render
    this.addBox(g, 0xD4CBBA, 18, 4, 14, 0, 2, 0);

    // Upper level — dark charcoal vertical cladding (cantilevered)
    this.addBox(g, 0x2A2A2A, 20, 4, 15, 0, 7, 0);

    // Upper cladding vertical strips (6x)
    for (const cx of [-8, -5, -2, 1, 4, 7]) {
      this.addBox(g, 0x1A1A1A, 0.15, 4, 15, cx, 7, 0);
    }

    // Flat roof parapet (top of upper body = y=9, parapet centre = 9.25)
    this.addBox(g, 0x333333, 20.5, 0.5, 15.5, 0, 9.25, 0);

    // Lower level horizontal strip window
    this.addBox(g, 0x334455, 10, 0.9, 0.15, 0, 3.5, -7.1);
    // Window frame (slightly behind)
    this.addBox(g, 0xC8C4BC, 10.4, 1.1, 0.1, 0, 3.5, -7.05);

    // Upper level vertical slot windows (3x) — emissive
    for (const wx of [-4, 0, 4]) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 2.5, 0.15),
        new THREE.MeshLambertMaterial({
          color: 0x445566,
          emissive: new THREE.Color(0x223344),
          emissiveIntensity: 0.3,
        })
      );
      mesh.position.set(wx, 7.5, -7.6);
      g.add(mesh);
    }

    // Garage door (large, ground floor left)
    this.addBox(g, 0x1A1A1A, 5, 3.8, 0.2, -5.5, 1.9, -7.1);

    // Entry step
    this.addBox(g, 0xC8C4BC, 2, 0.3, 1, 4, 0.15, -7.5);

    // Ground planting strip
    this.addBox(g, 0x8A7060, 14, 0.4, 1, 0, 0.2, -8);
    this.addBox(g, 0x5A7A4A, 12, 0.6, 0.8, 0, 0.6, -8);

    g.position.set(x, 0, z);
    this.scene.add(g);
  }

  // ── House 2 — Angular Porthole House ─────────────────────────────────────────
  private buildHousePorthole(x: number, z: number) {
    const g = new THREE.Group();

    // Main concrete body
    this.addBox(g, 0xB8B4AC, 16, 5.5, 13, 0, 2.75, 0);

    // Diagonal timber feature panel (right side, front face)
    this.addBox(g, 0x8B6040, 7, 5.5, 0.3, 3.5, 2.75, -6.65);
    // Timber strips (5x diagonal suggestion, rotated ~25°)
    for (let i = 0; i < 5; i++) {
      const ty = (i - 2) * 1.2;
      this.addBox(g, 0x6A4820, 7, 0.2, 0.4, 3.5, 2.75 + ty, -6.55, 0, 0, Math.PI / 7.2);
    }

    // Flat roof slab
    this.addBox(g, 0xC8C4BC, 16.5, 0.3, 13.5, 0, 5.65, 0);
    // Roof edge (dark metal)
    this.addBox(g, 0x2A2A2A, 17, 0.5, 14, 0, 5.95, 0);

    // PORTHOLE — surround (cylinder as disc, rotated X=PI/2)
    {
      const surround = new THREE.Mesh(
        new THREE.CylinderGeometry(1.4, 1.4, 0.15, 16),
        new THREE.MeshLambertMaterial({ color: 0x888888 })
      );
      surround.rotation.x = Math.PI / 2;
      surround.position.set(-4, 3.5, -6.7);
      g.add(surround);
    }
    // PORTHOLE — glass (emissive)
    {
      const glass = new THREE.Mesh(
        new THREE.CylinderGeometry(1.1, 1.1, 0.1, 16),
        new THREE.MeshLambertMaterial({
          color: 0x223344,
          emissive: new THREE.Color(0x112233),
          emissiveIntensity: 0.5,
        })
      );
      glass.rotation.x = Math.PI / 2;
      glass.position.set(-4, 3.5, -6.65);
      g.add(glass);
    }

    // Regular windows (2x horizontal)
    this.addBox(g, 0x334455, 3.5, 1.2, 0.15, 1, 3.5, -6.7);
    this.addBox(g, 0x334455, 3.5, 1.2, 0.15, 5, 3.5, -6.7);

    // Entry door recess
    this.addBox(g, 0x3A2A1A, 1.8, 2.8, 0.3, -6, 1.4, -6.8);
    // Door frame
    this.addBox(g, 0x888888, 2.2, 3.0, 0.2, -6, 1.4, -6.65);

    // Low hedge at base
    this.addBox(g, 0x3A6A3A, 10, 0.7, 0.8, 0, 0.35, -7.5);

    g.position.set(x, 0, z);
    this.scene.add(g);
  }

  // ── House 3 — Terracotta Mediterranean Villa ──────────────────────────────────
  private buildHouseTerracotta(x: number, z: number) {
    const g = new THREE.Group();

    // Shadow edge — thick wall illusion (slightly larger, rendered first)
    this.addBox(g, 0x9A7050, 17.6, 7.2, 14.6, 0, 3.5, 0);
    // Main body — terracotta
    this.addBox(g, 0xC49A7A, 17, 7, 14, 0, 3.5, 0);

    // Tall parapet (top of body = y=7, parapet centre = 7+0.75 = 7.75)
    this.addBox(g, 0xC49A7A, 17.8, 1.5, 14.8, 0, 7.75, 0);
    // Parapet cap (top of parapet = 8.5, cap centre = 8.65)
    this.addBox(g, 0xE8E4DC, 18.2, 0.3, 15.2, 0, 8.65, 0);

    // Arched entry — stepped arch (3 boxes on front face)
    this.addBox(g, 0x8A6040, 2.4, 3.5, 0.3, 0, 1.75, -7.1);
    this.addBox(g, 0x8A6040, 2.0, 0.5, 0.3, 0, 3.75, -7.1);
    this.addBox(g, 0x8A6040, 1.4, 0.5, 0.3, 0, 4.25, -7.1);

    // Left window — deep reveal, glass, white surround, iron grilles
    this.addBox(g, 0x8A6040, 1.4, 2.8, 0.5, -4, 4.0, -7.2);   // reveal
    this.addBox(g, 0x223344, 1.0, 2.4, 0.15, -4, 4.0, -7.05); // glass
    this.addBox(g, 0xE8E4DC, 1.6, 3.0, 0.15, -4, 4.0, -6.98); // white surround
    for (const gy of [3.2, 4.0, 4.8]) {
      this.addBox(g, 0x333333, 0.9, 0.08, 0.15, -4, gy, -7.1); // iron grille bars
    }

    // Right window — mirror of left
    this.addBox(g, 0x8A6040, 1.4, 2.8, 0.5, 4, 4.0, -7.2);
    this.addBox(g, 0x223344, 1.0, 2.4, 0.15, 4, 4.0, -7.05);
    this.addBox(g, 0xE8E4DC, 1.6, 3.0, 0.15, 4, 4.0, -6.98);
    for (const gy of [3.2, 4.0, 4.8]) {
      this.addBox(g, 0x333333, 0.9, 0.08, 0.15, 4, gy, -7.1);
    }

    // Side windows (2x per side, smaller)
    for (const sz of [-2, 2]) {
      this.addBox(g, 0x334455, 0.15, 1.5, 1.0,  8.58, 4.0, sz);
      this.addBox(g, 0x334455, 0.15, 1.5, 1.0, -8.58, 4.0, sz);
    }

    // Herb planters at base (2x) + greenery
    this.addBox(g, 0xA07858, 2.5, 0.5, 0.8, -4, 0.25, -7.5);
    this.addBox(g, 0xA07858, 2.5, 0.5, 0.8,  4, 0.25, -7.5);
    this.addBox(g, 0x5A8A4A, 2.0, 0.5, 0.6, -4, 0.65, -7.5);
    this.addBox(g, 0x5A8A4A, 2.0, 0.5, 0.6,  4, 0.65, -7.5);

    // Decorative parapet wall tiles (4x raised squares)
    for (const tx of [-6, -2, 2, 6]) {
      this.addBox(g, 0xE8E4DC, 0.8, 0.8, 0.2, tx, 8.4, -7.4);
    }

    g.position.set(x, 0, z);
    this.scene.add(g);
  }

  // ── House 4 — Concretum Loggia House ─────────────────────────────────────────
  private buildHouseLoggia(x: number, z: number) {
    const g = new THREE.Group();

    // Main building body — smooth concrete
    this.addBox(g, 0xB0ACA4, 20, 6, 15, 0, 3, 0);

    // Roof slab (top of body = y=6, slab centre = 6.2)
    this.addBox(g, 0x9A9690, 20.5, 0.4, 15.5, 0, 6.2, 0);

    // LOGGIA — covered walkway across full front
    this.addBox(g, 0x9A9690, 20, 0.4, 3, 0, 3.2, -10);

    // 4 slim loggia columns
    for (const cx of [-7, -3, 3, 7]) {
      this.addCyl(g, 0x888880, 0.2, 0.2, 3.2, 8, cx, 1.6, -11);
    }

    // Large recessed window band
    this.addBox(g, 0x334455, 14, 2.0, 0.2, 0, 4, -7.5);
    // Window frame (behind)
    this.addBox(g, 0xC8C4BC, 14.4, 2.2, 0.15, 0, 4, -7.4);
    // Window mullions (3 vertical dividers)
    for (const mx of [-5, 0, 5]) {
      this.addBox(g, 0x888880, 0.15, 2.0, 0.2, mx, 4, -7.5);
    }

    // Entry glazed door (emissive)
    {
      const door = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 2.8, 0.2),
        new THREE.MeshLambertMaterial({
          color: 0x334455,
          emissive: new THREE.Color(0x111822),
          emissiveIntensity: 0.2,
        })
      );
      door.position.set(5, 1.4, -7.5);
      g.add(door);
    }
    // Door frame
    this.addBox(g, 0x888880, 2.8, 3.0, 0.15, 5, 1.4, -7.4);

    // Long planter box spanning full front
    this.addBox(g, 0x8A7860, 18, 0.5, 2.5, 0, 0.25, -9);
    this.addBox(g, 0x4A7A4A, 16, 0.7, 2.0, 0, 0.65, -9);

    // Concrete beam hints between roof edge and column tops
    this.addBox(g, 0x888880, 20, 0.3, 0.3, 0, 3.1, -10.2);
    this.addBox(g, 0x888880, 20, 0.3, 0.3, 0, 3.1, -11.8);

    g.position.set(x, 0, z);
    this.scene.add(g);
  }

  // ── House 5 — Rokka Stone Retreat ─────────────────────────────────────────────
  private buildHouseRokka(x: number, z: number) {
    const g = new THREE.Group();

    // Wide single-storey spread form
    this.addBox(g, 0xC4B89A, 22, 4.5, 16, 0, 2.25, 0);

    // Pitched roof — 2 angled panels (body top = y=4.5, panels start above)
    this.addBox(g, 0x9A8C7A, 22.5, 0.3, 9, 0, 4.75, -3.5,  Math.PI * 8 / 180, 0, 0);
    this.addBox(g, 0x9A8C7A, 22.5, 0.3, 9, 0, 4.75,  3.5, -Math.PI * 8 / 180, 0, 0);
    // Ridge cap
    this.addBox(g, 0x6A5A48, 22.5, 0.6, 0.8, 0, 5.1, 0);

    // Stone base course (darker, wraps around base)
    this.addBox(g, 0x9A8870, 22.5, 1.0, 16.5, 0, 0.5, 0);

    // Large bifold/stacking doors — emissive
    {
      const doors = new THREE.Mesh(
        new THREE.BoxGeometry(6, 3.2, 0.2),
        new THREE.MeshLambertMaterial({
          color: 0x334455,
          emissive: new THREE.Color(0x111822),
          emissiveIntensity: 0.3,
        })
      );
      doors.position.set(0, 1.6, -8.1);
      g.add(doors);
    }
    // Door frame
    this.addBox(g, 0x7A6A5A, 6.4, 3.5, 0.15, 0, 1.75, -8.0);
    // Door grid — 3 vertical + 1 horizontal
    for (const dx of [-2, 0, 2]) {
      this.addBox(g, 0x888870, 0.1, 3.2, 0.2, dx, 1.6, -8.1);
    }
    this.addBox(g, 0x888870, 6, 0.1, 0.2, 0, 2.2, -8.1);

    // Flanking windows (2x)
    this.addBox(g, 0x334455, 2.5, 1.5, 0.2, -7, 3.0, -8.1);
    this.addBox(g, 0x334455, 2.5, 1.5, 0.2,  7, 3.0, -8.1);

    // Natural stone pillars at entry (2x)
    this.addBox(g, 0xB0A088, 0.8, 4.5, 0.8, -3.5, 2.25, -8.2);
    this.addBox(g, 0xB0A088, 0.8, 4.5, 0.8,  3.5, 2.25, -8.2);

    // Downpipes at building corners (2x)
    this.addCyl(g, 0x6A5A48, 0.1, 0.1, 4.5, 5, -11, 2.25, -8);
    this.addCyl(g, 0x6A5A48, 0.1, 0.1, 4.5, 5,  11, 2.25, -8);

    // Low boundary wall / garden edge
    this.addBox(g, 0xB0A088, 20, 0.8, 0.3, 0, 0.4, -10);

    g.position.set(x, 0, z);
    this.scene.add(g);
  }

  onUpdate(cb: (dt: number) => void) {
    this.updateCallbacks.push(cb);
  }

  start() {
    const loop = (time: number) => {
      const dt = Math.min((time - this.lastTime) / 1000, 0.05);
      this.lastTime = time;
      for (const cb of this.updateCallbacks) cb(dt);
      this.renderer.render(this.scene, this.camera.camera);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}
