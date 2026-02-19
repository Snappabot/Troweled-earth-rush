import * as THREE from 'three';
import { CameraController } from '../world/CameraController';

export class Engine {
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  camera!: CameraController;
  private updateCallbacks: Array<(dt: number) => void> = [];
  private lastTime = 0;

  async init() {
    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = false; // Performance: no shadows
    document.body.appendChild(this.renderer.domElement);

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
    this.scene.fog = new THREE.Fog(0x87CEEB, 200, 500);

    // Camera
    this.camera = new CameraController();
    this.scene.add(this.camera.camera);

    // Lighting — ambient + sun + fill
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xfff4e0, 1.2);
    sun.position.set(80, 120, 40); // Dramatic angle
    this.scene.add(sun);

    // Fill light from opposite direction, warm colour
    const fill = new THREE.DirectionalLight(0xffe8d0, 0.5);
    fill.position.set(-60, 40, -80);
    this.scene.add(fill);

    // Build city
    this.createCityGround();
    this.createCity();

    // Handle resize
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.camera.updateProjectionMatrix();
    });
  }

  // Deterministic pseudo-random from position + salt
  private seed(x: number, z: number, salt = 0): number {
    const n = Math.sin(x * 127.1 + z * 311.7 + salt * 74.3) * 43758.5453123;
    return n - Math.floor(n);
  }

  private createCityGround() {
    const RANGE = 240;
    const GRID = 40;
    const ROAD_W = 8;
    const BLOCK = GRID - ROAD_W;

    // Large base under everything
    const baseMat = new THREE.MeshLambertMaterial({ color: 0x888880 });
    const baseGround = new THREE.Mesh(new THREE.PlaneGeometry(2048, 2048), baseMat);
    baseGround.rotation.x = -Math.PI / 2;
    baseGround.position.y = 0;
    this.scene.add(baseGround);

    // Per-block ground tiles between roads
    for (let bx = -RANGE; bx < RANGE; bx += GRID) {
      for (let bz = -RANGE; bz < RANGE; bz += GRID) {
        const cx = bx + GRID / 2;
        const cz = bz + GRID / 2;
        // ~30% grass, 70% urban
        const r = this.seed(bx, bz, 0);
        const colour = r < 0.3 ? 0x4a7c4e : 0x888880;
        const tileMat = new THREE.MeshLambertMaterial({ color: colour });
        const tile = new THREE.Mesh(new THREE.PlaneGeometry(BLOCK - 2, BLOCK - 2), tileMat);
        tile.rotation.x = -Math.PI / 2;
        tile.position.set(cx, 0.005, cz);
        this.scene.add(tile);
      }
    }
  }

  private createCity() {
    const RANGE = 240;
    const GRID = 40;
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
      // Sidewalk strip is 5–6 units from road centre; place at 5.5
      for (let x = -RANGE; x <= RANGE; x += 20) {
        for (const side of [-1, 1]) {
          // Jitter only along the road (x-axis), NOT perpendicular
          const tx = x + (this.seed(x, z, 50 + side) - 0.5) * 2;
          const tz = z + side * 5.5;
          // Skip if within 6 units of a vertical road (intersection)
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
      // Sidewalk strip is 5–6 units from road centre; place at 5.5
      for (let z = -RANGE; z <= RANGE; z += 20) {
        for (const side of [-1, 1]) {
          const tx = x + side * 5.5;
          // Jitter only along the road (z-axis), NOT perpendicular
          const tz = z + (this.seed(x, z, 52 + side) - 0.5) * 2;
          // Skip if within 6 units of a horizontal road (intersection)
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

    // Windscreen hint
    const wsMat = new THREE.MeshLambertMaterial({ color: 0x223344 });
    const ws = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 0.1), wsMat);
    ws.position.set(x, 1.3, z - 0.9);
    this.scene.add(ws);
  }

  // ── Populate a city block with 1–4 buildings ──
  private populateBlock(bx: number, bz: number, GRID: number, ROAD_W: number) {
    const usable = GRID - ROAD_W - 4;
    const cx = bx + GRID / 2;
    const cz = bz + GRID / 2;

    const numBuildings = 1 + Math.floor(this.seed(bx, bz, 1) * 4); // 1-4
    const baseType = Math.floor(this.seed(bx, bz, 2) * 4);

    for (let i = 0; i < numBuildings; i++) {
      const bType = (baseType + Math.floor(this.seed(bx + i * 3, bz + i * 7, 3) * 2)) % 4;
      const halfU = usable / 2;
      const ox = (this.seed(bx + i * 5, bz, 4) - 0.5) * halfU;
      const oz = (this.seed(bx, bz + i * 5, 5) - 0.5) * halfU;
      const bx2 = bx + i * 11;
      const bz2 = bz + i * 13;

      switch (bType) {
        case 0: this.buildingA(cx + ox, cz + oz, bx2, bz2); break;
        case 1: this.buildingB(cx + ox, cz + oz, bx2, bz2); break;
        case 2: this.buildingC(cx + ox, cz + oz, bx2, bz2); break;
        case 3: this.buildingD(cx + ox, cz + oz, bx2, bz2); break;
      }
    }
  }

  // ── Type A: Flat-roof commercial block ──
  private buildingA(x: number, z: number, sx: number, sz: number) {
    const colours = [0xc4a882, 0x8899aa, 0xaa9977, 0x7788aa, 0xbbaa99];
    const ci = Math.floor(this.seed(sx, sz, 10) * colours.length);
    const mat  = new THREE.MeshLambertMaterial({ color: colours[ci] });
    const trim = new THREE.MeshLambertMaterial({ color: colours[(ci + 1) % colours.length] });

    const w = 12 + this.seed(sx, sz, 11) * 8;
    const h = 4  + this.seed(sx, sz, 12) * 8;
    const d = 12 + this.seed(sx, sz, 13) * 8;

    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    body.position.set(x, h / 2, z);
    this.scene.add(body);

    // Rooftop trim (slightly inset, 0.3 tall)
    const roofTrim = new THREE.Mesh(new THREE.BoxGeometry(w - 1, 0.3, d - 1), trim);
    roofTrim.position.set(x, h + 0.15, z);
    this.scene.add(roofTrim);
  }

  // ── Type B: Stepped brutalist ──
  private buildingB(x: number, z: number, sx: number, sz: number) {
    const colours = [0x8a8a7a, 0x9a9080, 0x7a8090];
    const ci  = Math.floor(this.seed(sx, sz, 14) * colours.length);
    const mat = new THREE.MeshLambertMaterial({ color: colours[ci] });
    const mat2 = new THREE.MeshLambertMaterial({ color: colours[(ci + 1) % colours.length] });

    const lower = new THREE.Mesh(new THREE.BoxGeometry(14, 12, 14), mat);
    lower.position.set(x, 6, z);
    this.scene.add(lower);

    const upper = new THREE.Mesh(new THREE.BoxGeometry(8, 6, 8), mat2);
    upper.position.set(x + 1, 15, z + 1);
    this.scene.add(upper);
  }

  // ── Type C: Slim glass tower ──
  private buildingC(x: number, z: number, sx: number, sz: number) {
    const colours = [0x445566, 0x334455];
    const ci  = Math.floor(this.seed(sx, sz, 15) * 2);
    const mat = new THREE.MeshLambertMaterial({ color: colours[ci] });

    const h = 30 + this.seed(sx, sz, 16) * 20;

    const tower = new THREE.Mesh(new THREE.BoxGeometry(6, h, 6), mat);
    tower.position.set(x, h / 2, z);
    this.scene.add(tower);

    // Horizontal floor-line bands every 4 units
    const bandMat = new THREE.MeshLambertMaterial({ color: 0xaabbcc });
    for (let fy = 4; fy < h; fy += 4) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(6.12, 0.12, 6.12), bandMat);
      band.position.set(x, fy, z);
      this.scene.add(band);
    }
  }

  // ── Type D: Low warehouse ──
  private buildingD(x: number, z: number, sx: number, sz: number) {
    const colours = [0x778877, 0x667766];
    const ci  = Math.floor(this.seed(sx, sz, 17) * 2);
    const mat = new THREE.MeshLambertMaterial({ color: colours[ci] });

    const w = 20 + this.seed(sx, sz, 18) * 10;
    const h = 3  + this.seed(sx, sz, 19) * 2;
    const d = 20 + this.seed(sx, sz, 20) * 10;

    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    body.position.set(x, h / 2, z);
    this.scene.add(body);

    // Pitched roof — two angled panels
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x556655 });
    const halfW = w / 2;

    const roofL = new THREE.Mesh(new THREE.BoxGeometry(halfW + 0.5, 0.4, d + 0.5), roofMat);
    roofL.rotation.z = Math.PI / 7;
    roofL.position.set(x - halfW / 2, h + 0.75, z);
    this.scene.add(roofL);

    const roofR = new THREE.Mesh(new THREE.BoxGeometry(halfW + 0.5, 0.4, d + 0.5), roofMat);
    roofR.rotation.z = -Math.PI / 7;
    roofR.position.set(x + halfW / 2, h + 0.75, z);
    this.scene.add(roofR);
  }

  onUpdate(cb: (dt: number) => void) {
    this.updateCallbacks.push(cb);
  }

  start() {
    const loop = (time: number) => {
      const dt = Math.min((time - this.lastTime) / 1000, 0.05); // Cap at 50ms
      this.lastTime = time;
      for (const cb of this.updateCallbacks) cb(dt);
      this.renderer.render(this.scene, this.camera.camera);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}
