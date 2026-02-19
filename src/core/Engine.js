import * as THREE from 'three';
import { CameraController } from '../world/CameraController';
export class Engine {
    renderer;
    scene;
    camera;
    updateCallbacks = [];
    lastTime = 0;
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
        sun.position.set(80, 120, 40);
        this.scene.add(sun);
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
    seed(x, z, salt = 0) {
        const n = Math.sin(x * 127.1 + z * 311.7 + salt * 74.3) * 43758.5453123;
        return n - Math.floor(n);
    }
    createCityGround() {
        const RANGE = 240;
        const GRID = 40;
        const ROAD_W = 8;
        const BLOCK = GRID - ROAD_W;
        const baseMat = new THREE.MeshLambertMaterial({ color: 0x888880 });
        const baseGround = new THREE.Mesh(new THREE.PlaneGeometry(2048, 2048), baseMat);
        baseGround.rotation.x = -Math.PI / 2;
        baseGround.position.y = 0;
        this.scene.add(baseGround);
        for (let bx = -RANGE; bx < RANGE; bx += GRID) {
            for (let bz = -RANGE; bz < RANGE; bz += GRID) {
                const cx = bx + GRID / 2;
                const cz = bz + GRID / 2;
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
    createCity() {
        const RANGE = 240;
        const GRID = 40;
        const ROAD_W = 8;
        const len = RANGE * 2;
        // ── Shared base materials ──
        const asphaltMat = new THREE.MeshLambertMaterial({ color: 0x2a2a2a });
        const whiteMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
        const yellowMat = new THREE.MeshLambertMaterial({ color: 0xf0c040 });
        const sidewalkMat = new THREE.MeshLambertMaterial({ color: 0xc8c0b0 });
        // ── Shared detail materials ──
        const mCrosswalk = new THREE.MeshLambertMaterial({ color: 0xeeeeee });
        const mStopLine = new THREE.MeshLambertMaterial({ color: 0xdddddd });
        const mTLPole = new THREE.MeshLambertMaterial({ color: 0x333333 });
        const mTLHead = new THREE.MeshLambertMaterial({ color: 0x222222 });
        const mTLRed = new THREE.MeshLambertMaterial({ color: 0xdd2222 });
        const mTLAmber = new THREE.MeshLambertMaterial({ color: 0xddaa00 });
        const mTLGreen = new THREE.MeshLambertMaterial({
            color: 0x22dd44,
            emissive: new THREE.Color(0x22dd44),
            emissiveIntensity: 0.6,
        });
        const mSlPole = new THREE.MeshLambertMaterial({ color: 0x555555 });
        const mSlHousing = new THREE.MeshLambertMaterial({ color: 0x333333 });
        const mSlGlow = new THREE.MeshLambertMaterial({
            color: 0xffffaa,
            emissive: new THREE.Color(0xffffaa),
            emissiveIntensity: 0.8,
        });
        const mBench = new THREE.MeshLambertMaterial({ color: 0x8B6914 });
        const mBenchLeg = new THREE.MeshLambertMaterial({ color: 0x666666 });
        const mBin = new THREE.MeshLambertMaterial({ color: 0x336633 });
        const mBinLid = new THREE.MeshLambertMaterial({ color: 0x224422 });
        const mBikeLane = new THREE.MeshLambertMaterial({ color: 0x3a8a3a });
        const mPatch = new THREE.MeshLambertMaterial({ color: 0x333333 });
        const mWheel = new THREE.MeshLambertMaterial({ color: 0x111111 });
        const mWindshield = new THREE.MeshLambertMaterial({ color: 0x223344 });
        const mTrayPanel = new THREE.MeshLambertMaterial({ color: 0x888888 });
        // ── Shared geometry for repeated assets ──
        const slPoleGeo = new THREE.CylinderGeometry(0.12, 0.15, 8, 6);
        const slArmGeoZ = new THREE.BoxGeometry(0.15, 0.15, 3); // arm extending in Z
        const slArmGeoX = new THREE.BoxGeometry(3, 0.15, 0.15); // arm extending in X
        const slHousingGeo = new THREE.BoxGeometry(0.6, 0.25, 0.6);
        const slGlowGeo = new THREE.SphereGeometry(0.3, 6, 4);
        const tlPoleGeo = new THREE.CylinderGeometry(0.1, 0.1, 5, 6);
        const tlHeadGeo = new THREE.BoxGeometry(0.5, 1.2, 0.4);
        const tlLightGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 8);
        // Crosswalk stripes: cwH spans vertical road in X; cwV spans horizontal road in Z
        const cwHGeo = new THREE.BoxGeometry(ROAD_W, 0.05, 0.5); // for north/south crossings on vertical road
        const cwVGeo = new THREE.BoxGeometry(0.5, 0.05, ROAD_W); // for east/west crossings on horizontal road
        const stopHGeo = new THREE.BoxGeometry(0.4, 0.05, 8); // stop line on horizontal road (spans Z)
        const stopVGeo = new THREE.BoxGeometry(8, 0.05, 0.4); // stop line on vertical road (spans X)
        const patchGeo = new THREE.BoxGeometry(6, 0.02, 0.3);
        // ── Horizontal roads (constant Z, extending along X) ──
        for (let z = -RANGE; z <= RANGE; z += GRID) {
            // Road surface
            const road = new THREE.Mesh(new THREE.PlaneGeometry(len, ROAD_W), asphaltMat);
            road.rotation.x = -Math.PI / 2;
            road.position.set(0, 0.01, z);
            this.scene.add(road);
            // Bike lane strip on one side
            const bikeSideH = this.seed(0, z, 300) > 0.5 ? 1 : -1;
            const bikeH = new THREE.Mesh(new THREE.BoxGeometry(len, 0.03, 1.0), mBikeLane);
            bikeH.position.set(0, 0.015, z + bikeSideH * 3);
            this.scene.add(bikeH);
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
            // Trees along sidewalks
            for (let x = -RANGE; x <= RANGE; x += 20) {
                for (const side of [-1, 1]) {
                    const tx = x + (this.seed(x, z, 50 + side) - 0.5) * 2;
                    const tz = z + side * 5.5;
                    const rem = ((tx % GRID) + GRID) % GRID;
                    if (Math.min(rem, GRID - rem) <= 6)
                        continue;
                    this.addTree(tx, tz, x * 10 + side, z * 10 + 1);
                }
            }
            // Improved parked vehicles
            for (let x = -RANGE + 8; x < RANGE; x += 17) {
                const cr = this.seed(x, z, 60);
                if (cr > 0.45) {
                    const side = cr > 0.72 ? 1 : -1;
                    const px = x + (this.seed(x, z, 61) - 0.5) * 4;
                    const pz = z + side * (ROAD_W / 2 + 1.1);
                    // skip near intersections
                    const remV = ((px % GRID) + GRID) % GRID;
                    if (Math.min(remV, GRID - remV) <= 5)
                        continue;
                    this.addImprovedVehicle(px, pz, x + side * 3, z + 7, true, mWheel, mWindshield, mTrayPanel);
                }
            }
            // Streetlights every 30 units, alternating sides
            for (let x = -RANGE; x <= RANGE; x += 30) {
                const remV = ((x % GRID) + GRID) % GRID;
                if (Math.min(remV, GRID - remV))
                    ;
            }
        }
    }
}
