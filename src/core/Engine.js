import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CameraController } from '../world/CameraController';
import { CollisionWorld } from './CollisionWorld';
import { makeTEMRoofTexture } from '../utils/LogoLoader';
export class Engine {
    renderer;
    scene;
    camera;
    collisionWorld = new CollisionWorld();
    composer;
    clouds = [];
    updateCallbacks = [];
    lastTime = 0;
    // ── TE Plaster Palette ──
    C = {
        modernGrey: 0xC8C4BC, // Cool pearl grey — modern civic
        warmGrey: 0xB8B0A6, // Warm grey — residential
        terracotta: 0xC49A7A, // Earthy terracotta — Mediterranean
        deepClay: 0xA07858, // Deep clay — accents/shadow buildings
        softWhite: 0xE8E4DC, // Window surrounds, trim, parapets
        charcoal: 0x4A4A4A, // Iron grilles, metal details
        warmCream: 0xD4C9B8, // Cream — villas
        oliveGreen: 0x8A9B6A, // Planting, feature walls
        ironRed: 0xC1666B, // TEM brand accent (use sparingly)
    };
    async init() {
        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.1;
        document.body.appendChild(this.renderer.domElement);
        this.renderer.domElement.style.position = 'relative';
        this.renderer.domElement.style.zIndex = '1';
        // Scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x87CEEB, 0.0025);
        // Camera
        this.camera = new CameraController();
        this.scene.add(this.camera.camera);
        // ── Post-processing (EffectComposer) ──────────────────────────────────
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera.camera));
        const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.3, // strength — subtle glow on bright surfaces
        0.4, // radius
        0.85 // threshold — only very bright things bloom
        );
        this.composer.addPass(bloom);
        this.composer.addPass(new OutputPass());
        // Lighting — ambient + sun + fill + hemisphere
        const ambient = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambient);
        const sun = new THREE.DirectionalLight(0xfff4e0, 1.4);
        sun.position.set(80, 120, 40);
        sun.castShadow = true;
        sun.shadow.mapSize.width = 2048;
        sun.shadow.mapSize.height = 2048;
        sun.shadow.camera.near = 0.5;
        sun.shadow.camera.far = 600;
        sun.shadow.camera.left = -300;
        sun.shadow.camera.right = 300;
        sun.shadow.camera.top = 300;
        sun.shadow.camera.bottom = -300;
        sun.shadow.bias = -0.001;
        this.scene.add(sun);
        const fill = new THREE.DirectionalLight(0xffe8d0, 0.5);
        fill.position.set(-60, 40, -80);
        this.scene.add(fill);
        const hemi = new THREE.HemisphereLight(0x87CEEB, 0x887766, 0.3);
        this.scene.add(hemi);
        // Build city
        this.createCityGround();
        this.createCity();
        this.createTEHouses();
        this.buildWorkshop(10, 15); // TEM Workshop — near spawn depot
        this.createZebraCrossings();
        this.createRoadCorners();
        this.createStreetFurniture();
        // ── PS3-level graphics additions ──────────────────────────────────────
        this.createSkyDome();
        this.createClouds();
        this.createPuddles();
        // Handle resize
        window.addEventListener('resize', () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.composer.setSize(window.innerWidth, window.innerHeight);
            this.camera.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.camera.updateProjectionMatrix();
        });
    }
    // ── Deterministic pseudo-random from position + salt ──
    seed(x, z, salt = 0) {
        const n = Math.sin(x * 127.1 + z * 311.7 + salt * 74.3) * 43758.5453123;
        return n - Math.floor(n);
    }
    // ── Zone detection by block centre position ──
    getZone(bx, bz) {
        if (Math.abs(bx) < 80 && Math.abs(bz) < 80)
            return 'cbd';
        if (bx < -80)
            return 'footscray';
        if (bx > 80)
            return 'richmond';
        if (bz < -80)
            return 'stkilda';
        return 'brunswick';
    }
    // ── Zone → building type, cumulative weights for [A, B, C, D, E] ──
    pickBuildingType(zone, roll) {
        const zoneWeights = {
            cbd: [0.50, 0.50, 0.90, 1.00, 1.00], // 50%A 40%C 10%D
            footscray: [0.00, 0.20, 0.20, 0.40, 1.00], // 20%B 20%D 60%E
            brunswick: [0.30, 0.60, 0.60, 1.00, 1.00], // 30%A 30%B 40%D
            richmond: [0.30, 0.30, 0.60, 1.00, 1.00], // 30%A 30%C 40%D
            stkilda: [0.00, 0.30, 0.30, 0.70, 1.00], // 30%B 40%D 30%E
        };
        const weights = zoneWeights[zone] ?? zoneWeights['brunswick'];
        const types = ['A', 'B', 'C', 'D', 'E'];
        for (let i = 0; i < weights.length; i++) {
            if (roll < weights[i])
                return types[i];
        }
        return 'D';
    }
    // ── City ground — zone-based tile colours ──
    createCityGround() {
        const RANGE = 240;
        const GRID = 40;
        const ROAD_W = 8;
        const BLOCK = GRID - ROAD_W;
        // Large base under everything
        const baseMat = new THREE.MeshLambertMaterial({ color: 0x888880 });
        const baseGround = new THREE.Mesh(new THREE.PlaneGeometry(2048, 2048), baseMat);
        baseGround.rotation.x = -Math.PI / 2;
        baseGround.position.y = 0;
        baseGround.receiveShadow = true;
        this.scene.add(baseGround);
        const zoneColours = {
            cbd: 0x888880, // urban concrete
            footscray: 0x776655, // worn industrial
            brunswick: 0x887766, // mixed
            richmond: 0x7a7870, // clean urban
            stkilda: 0x8a9080, // coastal
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
                tile.receiveShadow = true;
                this.scene.add(tile);
            }
        }
    }
    createCity() {
        const RANGE = 240;
        const GRID = 40;
        const ROAD_W = 8;
        // Shared materials
        const asphaltMat = new THREE.MeshLambertMaterial({ color: 0x2a2a2a });
        const whiteMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
        const yellowMat = new THREE.MeshLambertMaterial({ color: 0xf0c040 });
        const sidewalkMat = new THREE.MeshLambertMaterial({ color: 0xc8c0b0 });
        const segLen = GRID - ROAD_W; // sidewalk segment length (32 units) — stops at road edge
        // ── Horizontal roads (constant Z, extending along X) ──
        for (let z = -RANGE; z <= RANGE; z += GRID) {
            const len = RANGE * 2;
            // Road surface
            const road = new THREE.Mesh(new THREE.PlaneGeometry(len, ROAD_W), asphaltMat);
            road.rotation.x = -Math.PI / 2;
            road.position.set(0, 0.01, z);
            road.receiveShadow = true;
            this.scene.add(road);
            // Sidewalks either side — segmented between intersections (stops at road edge)
            for (let ix = -RANGE; ix < RANGE; ix += GRID) {
                const segCx = ix + GRID / 2;
                for (const side of [-1, 1]) {
                    const sw = new THREE.Mesh(new THREE.PlaneGeometry(segLen, 2), sidewalkMat);
                    sw.rotation.x = -Math.PI / 2;
                    sw.position.set(segCx, 0.02, z + side * (ROAD_W / 2 + 1));
                    sw.receiveShadow = true;
                    this.scene.add(sw);
                }
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
                    if (Math.min(rem, GRID - rem) <= 6)
                        continue;
                    this.addTree(tx, tz, x * 10 + side, z * 10 + 1);
                }
            }
            // Parked cars — rotated PI/2 so car length runs parallel to road (along X)
            for (let x = -RANGE + 8; x < RANGE; x += 17) {
                const cr = this.seed(x, z, 60);
                if (cr > 0.45) {
                    const side = cr > 0.72 ? 1 : -1;
                    const px = x + (this.seed(x, z, 61) - 0.5) * 4;
                    const pz = z + side * (ROAD_W / 2 + 2.0); // 6.0 from road centre — clear of road edge (4.0)
                    this.addParkedCar(px, pz, x + side * 3, z + 7, Math.PI / 2);
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
            road.receiveShadow = true;
            this.scene.add(road);
            // Sidewalks either side — segmented between intersections (stops at road edge)
            for (let iz = -RANGE; iz < RANGE; iz += GRID) {
                const segCz = iz + GRID / 2;
                for (const side of [-1, 1]) {
                    const sw = new THREE.Mesh(new THREE.PlaneGeometry(2, segLen), sidewalkMat);
                    sw.rotation.x = -Math.PI / 2;
                    sw.position.set(x + side * (ROAD_W / 2 + 1), 0.02, segCz);
                    sw.receiveShadow = true;
                    this.scene.add(sw);
                }
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
                    if (Math.min(rem, GRID - rem) <= 6)
                        continue;
                    this.addTree(tx, tz, x * 10 + 2, z * 10 + side);
                }
            }
            // Parked cars — no rotation, car length naturally runs along Z (parallel to road)
            for (let z = -RANGE + 8; z < RANGE; z += 17) {
                const cr = this.seed(x, z, 62);
                if (cr > 0.45) {
                    const side = cr > 0.72 ? 1 : -1;
                    const px = x + side * (ROAD_W / 2 + 2.0); // 6.0 from road centre — clear of road edge (4.0)
                    const pz = z + (this.seed(x, z, 63) - 0.5) * 4;
                    this.addParkedCar(px, pz, x + 9, z + side * 3, 0);
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
    // ── Tree (rich multi-type: palm / 3-tier layered cone / multi-sphere round) ──
    addTree(x, z, sx, sz) {
        const r = this.seed(sx, sz, 99);
        const treeType = r < 0.15 ? 'palm' : r < 0.5 ? 'round' : 'layered';
        const trunkH = 2 + r * 1.5;
        const trunkMat = new THREE.MeshLambertMaterial({ color: 0x5c4033 });
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, trunkH, 7), trunkMat);
        trunk.position.set(x, trunkH / 2, z);
        trunk.castShadow = true;
        this.scene.add(trunk);
        if (treeType === 'palm') {
            // Tall thin palm — St Kilda coastal
            const palmTrunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.22, 6, 6), new THREE.MeshLambertMaterial({ color: 0x8B7355 }));
            palmTrunk.position.set(x, 3, z);
            this.scene.add(palmTrunk);
            // Fan of 6 fronds drooping outward
            for (let f = 0; f < 6; f++) {
                const angle = (f / 6) * Math.PI * 2;
                const frond = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.08, 2.5), new THREE.MeshLambertMaterial({ color: 0x2A5A1A }));
                frond.position.set(x + Math.cos(angle) * 1.2, 6.5, z + Math.sin(angle) * 1.2);
                frond.rotation.y = angle;
                frond.rotation.z = 0.4;
                this.scene.add(frond);
            }
        }
        else if (treeType === 'layered') {
            // 3-tier layered cone tree — proper street tree
            const greens = [0x2D5E2D, 0x3A6E3A, 0x4A7E4A];
            for (let layer = 0; layer < 3; layer++) {
                const radius = 2.2 - layer * 0.5;
                const layerMesh = new THREE.Mesh(new THREE.ConeGeometry(radius, 2, 8), new THREE.MeshLambertMaterial({ color: greens[layer] }));
                layerMesh.position.set(x, trunkH + 1 + layer * 1.5, z);
                layerMesh.castShadow = true;
                this.scene.add(layerMesh);
            }
        }
        else {
            // Multi-sphere round canopy — 5 overlapping spheres
            const baseGreen = r > 0.7 ? 0x3d6e3d : 0x2d5e2d;
            const offsets = [
                [0, 0, 0], [0.8, -0.3, 0.5], [-0.7, -0.2, 0.3],
                [0.3, 0.4, -0.6], [-0.4, 0.3, -0.5],
            ];
            for (let i = 0; i < offsets.length; i++) {
                const [ox, oy, oz] = offsets[i];
                const radius = 1.8 + this.seed(sx + i * 17, sz + i * 13, 103) * 0.8;
                const sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, 7, 6), new THREE.MeshLambertMaterial({ color: baseGreen }));
                sphere.position.set(x + ox, trunkH + 2.5 + oy, z + oz);
                sphere.castShadow = true;
                this.scene.add(sphere);
            }
        }
    }
    // ── Parked car ──
    // rotY = 0 → car length (3) runs along Z (for vertical roads)
    // rotY = PI/2 → car length (3) runs along X (for horizontal roads, parallel to road)
    addParkedCar(x, z, sx, sz, rotY = 0) {
        const colours = [0xcc3333, 0x3355cc, 0xaaaaaa, 0xdddddd, 0x222222];
        const ci = Math.floor(this.seed(sx, sz, 20) * colours.length);
        const carMat = new THREE.MeshLambertMaterial({ color: colours[ci] });
        const car = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.2, 3), carMat);
        car.position.set(x, 0.6, z);
        car.rotation.y = rotY;
        this.scene.add(car);
        // Windshield — offset toward "front" based on rotation
        const wsMat = new THREE.MeshLambertMaterial({ color: 0x223344 });
        const ws = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 0.1), wsMat);
        const wsOffX = -0.9 * Math.sin(rotY);
        const wsOffZ = -0.9 * Math.cos(rotY);
        ws.position.set(x + wsOffX, 1.3, z + wsOffZ);
        ws.rotation.y = rotY;
        this.scene.add(ws);
    }
    // ── Populate a city block with 1–2 buildings ──
    populateBlock(bx, bz, GRID, ROAD_W) {
        const usable = GRID - ROAD_W - 4; // ~28 units of usable space
        const cx = bx + GRID / 2;
        const cz = bz + GRID / 2;
        const zone = this.getZone(cx, cz);
        const numBuildings = 1 + Math.floor(this.seed(bx, bz, 1) * 2); // 1 or 2
        for (let i = 0; i < numBuildings; i++) {
            const typeRoll = this.seed(bx + i * 3, bz + i * 7, 3);
            const bType = this.pickBuildingType(zone, typeRoll);
            // Type E warehouses (22 wide) are too large to offset — always centre them
            // and only place one per block to avoid clipping roads
            if (bType === 'E') {
                if (i === 0)
                    this.buildTypeE(cx, cz, bx, bz);
                break; // skip second building if E selected
            }
            // Spread two buildings apart, jitter slightly
            // Cap halfU so buildings never clip road edges (road edge = 16 units from block centre)
            const halfU = usable * 0.18; // reduced from 0.22 to keep safe margin
            const baseOffset = numBuildings > 1 ? (i === 0 ? -halfU : halfU) : 0;
            const ox = baseOffset + (this.seed(bx + i * 5, bz, 4) - 0.5) * halfU * 0.3;
            const oz = baseOffset + (this.seed(bx, bz + i * 5, 5) - 0.5) * halfU * 0.3;
            const sx = bx + i * 11;
            const sz = bz + i * 13;
            switch (bType) {
                case 'A':
                    this.buildTypeA(cx + ox, cz + oz, sx, sz);
                    break;
                case 'B':
                    this.buildTypeB(cx + ox, cz + oz, sx, sz);
                    break;
                case 'C':
                    this.buildTypeC(cx + ox, cz + oz, sx, sz);
                    break;
                case 'D':
                    this.buildTypeD(cx + ox, cz + oz, sx, sz);
                    break;
            }
        }
    }
    // ── Helper: add a box mesh to a group ──
    addBox(group, color, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color }));
        mesh.position.set(x, y, z);
        if (rx !== 0)
            mesh.rotation.x = rx;
        if (ry !== 0)
            mesh.rotation.y = ry;
        if (rz !== 0)
            mesh.rotation.z = rz;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);
    }
    // ── Helper: add a cylinder mesh to a group ──
    addCyl(group, color, rt, rb, h, seg, x, y, z) {
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), new THREE.MeshLambertMaterial({ color }));
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);
    }
    // ── Building AABB registration helper ──────────────────────────────────────
    registerBuildingCollider(x, z, hw, hd, sx, sz) {
        const rotIdx = Math.floor(this.seed(sx, sz, 101) * 4) % 4;
        const swapped = rotIdx === 1 || rotIdx === 3;
        this.collisionWorld.addBox(x, z, swapped ? hd : hw, swapped ? hw : hd);
    }
    // ────────────────────────────────────────────────
    // TYPE A — Modern TE Commercial (CBD)
    // Minimalist flat-roof, pearl grey plaster, colonnaded ground floor
    // ────────────────────────────────────────────────
    buildTypeA(x, z, sx, sz) {
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
            this.addGlassBox(group, 0x223344, 2.5, 1.8, 0.15, wx, 7, -6.93);
        }
        // Base planter in front of building
        this.addBox(group, C.deepClay, 14, 0.5, 1.2, 0, 0.25, -7.6);
        this.addBox(group, C.oliveGreen, 13, 0.4, 1.0, 0, 0.70, -7.6);
        // Colonnade awning — canvas canopy above colonnade beam
        const awRA = this.seed(sx, sz, 400);
        const awMatA = new THREE.MeshLambertMaterial({ color: awRA > 0.5 ? 0xC47A40 : 0x4A6A8A });
        const awA = new THREE.Mesh(new THREE.BoxGeometry(14, 0.1, 1.5), awMatA);
        awA.position.set(0, 3.8, -7.75);
        awA.rotation.x = 0.15;
        group.add(awA);
        const valA = new THREE.Mesh(new THREE.BoxGeometry(14, 0.3, 0.08), awMatA);
        valA.position.set(0, 3.45, -8.45);
        group.add(valA);
        // Building number plaque
        this.addBox(group, 0xD8D4CC, 0.8, 0.5, 0.08, -6.5, 1.0, -7.05);
        // Rooftop details
        this.addRooftopDetails(group, 16, 14, 10, sx, sz);
        // Random rotation 0/90/180/270°
        group.rotation.y = Math.floor(this.seed(sx, sz, 101) * 4) * (Math.PI / 2);
        group.position.set(x, 0, z);
        this.scene.add(group);
        this.registerBuildingCollider(x, z, 8.5, 7.5, sx, sz);
    }
    // ────────────────────────────────────────────────
    // TYPE B — Mediterranean Heritage (Footscray)
    // Thick terracotta walls, small deeply-recessed windows, iron grille hints
    // ────────────────────────────────────────────────
    buildTypeB(x, z, sx, sz) {
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
            this.addGlassBox(group, 0x223344, 1.2, 2.2, 0.2, wx, 5.0, -5.75);
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
        this.addBox(group, C.deepClay, 2.0, 0.4, 0.6, 0, 0.20, -6.6);
        this.addBox(group, C.oliveGreen, 1.8, 0.1, 0.5, 0, 0.45, -6.6);
        // Building number plaque
        this.addBox(group, 0xD4B08A, 0.8, 0.5, 0.08, -5.0, 1.0, -6.05);
        // Rooftop details
        this.addRooftopDetails(group, 14, 12, 8, sx, sz);
        group.rotation.y = Math.floor(this.seed(sx, sz, 101) * 4) * (Math.PI / 2);
        group.position.set(x, 0, z);
        this.scene.add(group);
        this.registerBuildingCollider(x, z, 7.5, 6.5, sx, sz);
    }
    // ────────────────────────────────────────────────
    // TYPE C — Glass Tower (CBD/Richmond)
    // Slim modern tower, dark glass panels, horizontal floor bands
    // ────────────────────────────────────────────────
    buildTypeC(x, z, sx, sz) {
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
        this.registerBuildingCollider(x, z, 4.5, 4.5, sx, sz);
    }
    // ────────────────────────────────────────────────
    // TYPE D — Transitional Villa (Brunswick/Richmond residential)
    // Warm cream plaster, bay window projection, arched entry
    // ────────────────────────────────────────────────
    buildTypeD(x, z, sx, sz) {
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
            this.addGlassBox(group, 0x334455, 0.7, 2.5, 0.2, wx, 4.0, -7.0);
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
            this.addGlassBox(group, 0x334455, 1.5, 1.2, 0.15, wx, 5.5, -5.55);
        }
        // Low fence/wall — 1 unit in front of building
        this.addBox(group, C.deepClay, 11, 1.0, 0.3, 0, 0.5, -6.65);
        // Building number plaque
        this.addBox(group, 0xE4D9C8, 0.8, 0.5, 0.08, -5.0, 1.0, -5.55);
        // Rooftop details
        this.addRooftopDetails(group, 13, 11, 7, sx, sz);
        group.rotation.y = Math.floor(this.seed(sx, sz, 101) * 4) * (Math.PI / 2);
        group.position.set(x, 0, z);
        this.scene.add(group);
        this.registerBuildingCollider(x, z, 7.0, 6.0, sx, sz);
    }
    // ────────────────────────────────────────────────
    // TYPE E — Low Warehouse/Workshop (Footscray/St Kilda industrial)
    // Wide low shed, pitched roof — concretum grey with black patina
    // ────────────────────────────────────────────────
    buildTypeE(x, z, sx, sz) {
        const C = this.C;
        const group = new THREE.Group();
        const DEG12 = 12 * Math.PI / 180; // 12° in radians
        // Concretum grey base with subtle patina shadow layer
        this.addBox(group, 0x6A6A62, 22, 4, 18, 0, 2, 0);
        // Black patina shadow — slightly oversized dark layer on base
        this.addBox(group, 0x1A1A16, 22.1, 0.3, 18.1, 0, 0.15, 0);
        // Pitched roof — near-black (dark steel/patina)
        const roofL = new THREE.Mesh(new THREE.BoxGeometry(22.5, 0.3, 10), new THREE.MeshLambertMaterial({ color: 0x1E1E1A }));
        roofL.castShadow = true;
        roofL.receiveShadow = true;
        roofL.rotation.x = DEG12;
        roofL.position.set(0, 4.5, -4.5);
        group.add(roofL);
        const roofR = new THREE.Mesh(new THREE.BoxGeometry(22.5, 0.3, 10), new THREE.MeshLambertMaterial({ color: 0x1E1E1A }));
        roofR.castShadow = true;
        roofR.receiveShadow = true;
        roofR.rotation.x = -DEG12;
        roofR.position.set(0, 4.5, 4.5);
        group.add(roofR);
        // Ridge cap — near-black patina
        this.addBox(group, 0x111110, 22.5, 0.5, 0.6, 0, 5.2, 0);
        // Horizontal patina bands across wall face (weathering lines)
        for (const bz of [-2.0, 0.5, 3.0]) {
            this.addBox(group, 0x111110, 22.2, 0.08, 0.1, 0, 3.5, bz);
        }
        // Large roller door on front face — very dark
        this.addBox(group, 0x111110, 4.5, 3.5, 0.2, 0, 1.75, -9.1);
        // Door tracks either side
        this.addBox(group, 0x222220, 0.15, 3.5, 0.2, -2.4, 1.75, -9.1);
        this.addBox(group, 0x222220, 0.15, 3.5, 0.2, 2.4, 1.75, -9.1);
        // Side windows strip — near top of left side wall
        this.addBox(group, 0x334455, 8, 0.8, 0.15, -11.075, 3.5, 0);
        // Downpipe at front-left corner
        this.addCyl(group, 0x111110, 0.1, 0.1, 4, 5, -11, 2, -9);
        // Awning above roller door (industrial fabric canopy)
        const awRE = this.seed(sx, sz, 401);
        const awMatE = new THREE.MeshLambertMaterial({ color: awRE > 0.5 ? 0xC47A40 : 0x4A6A8A });
        const awE = new THREE.Mesh(new THREE.BoxGeometry(8, 0.1, 1.5), awMatE);
        awE.position.set(0, 4.2, -9.85);
        awE.rotation.x = 0.15;
        group.add(awE);
        const valE = new THREE.Mesh(new THREE.BoxGeometry(8, 0.3, 0.08), awMatE);
        valE.position.set(0, 3.85, -10.6);
        group.add(valE);
        // Two slim support posts under awning
        for (const ax of [-3.5, 3.5]) {
            const supPost = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 4.0, 5), new THREE.MeshLambertMaterial({ color: 0x555550 }));
            supPost.position.set(ax, 2.0, -10.55);
            group.add(supPost);
        }
        // Rooftop details (on shed — limited to small items)
        this.addRooftopDetails(group, 22, 18, 5.2, sx, sz);
        group.rotation.y = Math.floor(this.seed(sx, sz, 101) * 4) * (Math.PI / 2);
        group.position.set(x, 0, z);
        this.scene.add(group);
        this.registerBuildingCollider(x, z, 11.5, 9.5, sx, sz);
    }
    // ────────────────────────────────────────────────────────────────────────────
    // TE LANDMARK HOUSES — 5 signature builds based on real Troweled Earth projects
    // ────────────────────────────────────────────────────────────────────────────
    createTEHouses() {
        this.buildHouseMarbellino(20, 20); // House 1 — CBD edge
        this.collisionWorld.addBox(20, 20, 10.0, 7.5);
        this.buildHousePorthole(-60, 20); // House 2 — Brunswick
        this.collisionWorld.addBox(-60, 20, 8.0, 6.5);
        this.buildHouseTerracotta(20, -60); // House 3 — St Kilda edge
        this.collisionWorld.addBox(20, -60, 9.0, 7.0);
        this.buildHouseLoggia(-60, -60); // House 4 — Brunswick/StKilda
        this.collisionWorld.addBox(-60, -60, 10.0, 7.5);
        this.buildHouseRokka(60, -20); // House 5 — Richmond
        this.collisionWorld.addBox(60, -20, 11.0, 8.0);
        this.buildHouseTimberStone(100, 60); // House 6 — Richmond (Snappa's house)
        this.collisionWorld.addBox(100, 60, 11.0, 7.0);
        this.buildHouseSculpturalPlaster(-100, -20); // House 7 — Brunswick sculptural olive
        this.collisionWorld.addBox(-100, -20, 8.0, 6.0);
        this.buildHouseHaussmann(60, -100); // House 8 — St Kilda Parisian mansion
        this.collisionWorld.addBox(60, -100, 11.0, 7.0);
        this.buildHouseAngularBay(-140, 60); // House 9  — Footscray
        this.collisionWorld.addBox(-140, 60, 9.0, 6.5);
        this.buildHouseBrutalistCompound(20, 100); // House 10 — Brunswick
        this.collisionWorld.addBox(20, 100, 12.0, 5.0);
        this.buildHouseTerracottaMonolith(140, 20); // House 11 — Richmond
        this.collisionWorld.addBox(140, 20, 10.0, 5.0);
        this.buildHouseCurvedBalcony(-20, -140); // House 12 — St Kilda
        this.collisionWorld.addBox(-20, -140, 8.0, 6.0);
        this.buildHouseCortenPlaster(-140, -60); // House 13 — Footscray
        this.collisionWorld.addBox(-140, -60, 10.0, 5.5);
        this.buildCoffeeShop(-60, -100); // Coffee shop — St Kilda pitstop
        this.collisionWorld.addBox(-60, -100, 7.0, 5.0);
        this.buildToiletBlock(100, 60); // Public toilet block — Richmond park
        this.collisionWorld.addBox(100, 60, 6.0, 5.0);
    }
    // ── House 1 — Marbellino Modern ──────────────────────────────────────────────
    buildHouseMarbellino(x, z) {
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
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.5, 0.15), new THREE.MeshLambertMaterial({
                color: 0x445566,
                emissive: new THREE.Color(0x223344),
                emissiveIntensity: 0.3,
            }));
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
    buildHousePorthole(x, z) {
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
            const surround = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.15, 16), new THREE.MeshLambertMaterial({ color: 0x888888 }));
            surround.rotation.x = Math.PI / 2;
            surround.position.set(-4, 3.5, -6.7);
            g.add(surround);
        }
        // PORTHOLE — glass (emissive)
        {
            const glass = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.1, 16), new THREE.MeshLambertMaterial({
                color: 0x223344,
                emissive: new THREE.Color(0x112233),
                emissiveIntensity: 0.5,
            }));
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
    buildHouseTerracotta(x, z) {
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
        this.addBox(g, 0x8A6040, 1.4, 2.8, 0.5, -4, 4.0, -7.2); // reveal
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
            this.addBox(g, 0x334455, 0.15, 1.5, 1.0, 8.58, 4.0, sz);
            this.addBox(g, 0x334455, 0.15, 1.5, 1.0, -8.58, 4.0, sz);
        }
        // Herb planters at base (2x) + greenery
        this.addBox(g, 0xA07858, 2.5, 0.5, 0.8, -4, 0.25, -7.5);
        this.addBox(g, 0xA07858, 2.5, 0.5, 0.8, 4, 0.25, -7.5);
        this.addBox(g, 0x5A8A4A, 2.0, 0.5, 0.6, -4, 0.65, -7.5);
        this.addBox(g, 0x5A8A4A, 2.0, 0.5, 0.6, 4, 0.65, -7.5);
        // Decorative parapet wall tiles (4x raised squares)
        for (const tx of [-6, -2, 2, 6]) {
            this.addBox(g, 0xE8E4DC, 0.8, 0.8, 0.2, tx, 8.4, -7.4);
        }
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ── House 4 — Concretum Loggia House ─────────────────────────────────────────
    buildHouseLoggia(x, z) {
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
            const door = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.8, 0.2), new THREE.MeshLambertMaterial({
                color: 0x334455,
                emissive: new THREE.Color(0x111822),
                emissiveIntensity: 0.2,
            }));
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
    buildHouseRokka(x, z) {
        const g = new THREE.Group();
        // Wide single-storey spread form
        this.addBox(g, 0xC4B89A, 22, 4.5, 16, 0, 2.25, 0);
        // Pitched roof — 2 angled panels (body top = y=4.5, panels start above)
        this.addBox(g, 0x9A8C7A, 22.5, 0.3, 9, 0, 4.75, -3.5, Math.PI * 8 / 180, 0, 0);
        this.addBox(g, 0x9A8C7A, 22.5, 0.3, 9, 0, 4.75, 3.5, -Math.PI * 8 / 180, 0, 0);
        // Ridge cap
        this.addBox(g, 0x6A5A48, 22.5, 0.6, 0.8, 0, 5.1, 0);
        // Stone base course (darker, wraps around base)
        this.addBox(g, 0x9A8870, 22.5, 1.0, 16.5, 0, 0.5, 0);
        // Large bifold/stacking doors — emissive
        {
            const doors = new THREE.Mesh(new THREE.BoxGeometry(6, 3.2, 0.2), new THREE.MeshLambertMaterial({
                color: 0x334455,
                emissive: new THREE.Color(0x111822),
                emissiveIntensity: 0.3,
            }));
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
        this.addBox(g, 0x334455, 2.5, 1.5, 0.2, 7, 3.0, -8.1);
        // Natural stone pillars at entry (2x)
        this.addBox(g, 0xB0A088, 0.8, 4.5, 0.8, -3.5, 2.25, -8.2);
        this.addBox(g, 0xB0A088, 0.8, 4.5, 0.8, 3.5, 2.25, -8.2);
        // Downpipes at building corners (2x)
        this.addCyl(g, 0x6A5A48, 0.1, 0.1, 4.5, 5, -11, 2.25, -8);
        this.addCyl(g, 0x6A5A48, 0.1, 0.1, 4.5, 5, 11, 2.25, -8);
        // Low boundary wall / garden edge
        this.addBox(g, 0xB0A088, 20, 0.8, 0.3, 0, 0.4, -10);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ── House 6 — Timber & Bluestone Richmond (Snappa's house) ──────────────────
    // Two-storey: grey render base, horizontal timber cladding upper, bluestone feature
    // wall right side, black steel carport left, stepping stone path, glass balcony
    buildHouseTimberStone(x, z) {
        const g = new THREE.Group();
        // ── Lower level — smooth mid-grey render ──
        this.addBox(g, 0x888880, 22, 4, 14, 0, 2, 0);
        // Lower level reveal/shadow at base
        this.addBox(g, 0x666660, 22.2, 0.4, 14.2, 0, 0.2, 0);
        // ── Upper level — horizontal timber cladding (warm amber) ──
        // Main timber body
        this.addBox(g, 0xB8742A, 22, 4.5, 13, 0, 6.25, 0);
        // Horizontal cladding strips — 8 bands across full width
        for (let ty = 0; ty < 8; ty++) {
            this.addBox(g, 0x9A5E1A, 22.1, 0.12, 13.1, 0, 4.3 + ty * 0.57, 0);
        }
        // ── Bluestone feature wall — right side, full height ──
        // (dark blue-grey rough stone texture via layered boxes)
        this.addBox(g, 0x4A5055, 5, 8.5, 14.2, 8.5, 4.25, 0);
        // Stone texture variation strips
        for (let sy = 0; sy < 12; sy++) {
            const shade = sy % 2 === 0 ? 0x3A4045 : 0x555A60;
            this.addBox(g, shade, 5.1, 0.3, 14.3, 8.5, 0.5 + sy * 0.65, 0);
        }
        // ── Flat roof slab ──
        this.addBox(g, 0x2A2A2A, 22.5, 0.5, 14.5, 0, 8.75, 0);
        // ── Floor-to-ceiling windows — upper level, 3 large panels ──
        for (const wx of [-6, -2, 2]) {
            // Frame
            this.addBox(g, 0x1A1A1A, 2.8, 3.2, 0.2, wx, 6.0, -6.6);
            // Glass
            const glass = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.9, 0.15), new THREE.MeshLambertMaterial({
                color: 0x8AAABB,
                emissive: new THREE.Color(0x2A4455),
                emissiveIntensity: 0.2,
            }));
            glass.position.set(wx, 6.0, -6.6);
            g.add(glass);
        }
        // ── Glass balcony rail — upper level front ──
        this.addBox(g, 0x1A1A1A, 13, 0.15, 0.5, -3, 8.0, -6.8);
        // Glass panel (semi-transparent look)
        this.addBox(g, 0x9ABACC, 12.5, 0.8, 0.1, -3, 7.6, -6.75);
        // ── Lower level windows — left side ──
        for (const wx of [-7, -4.5]) {
            this.addBox(g, 0x1A1A1A, 2.2, 1.8, 0.2, wx, 2.0, -7.1);
            this.addBox(g, 0x334455, 1.8, 1.5, 0.15, wx, 2.0, -7.0);
        }
        // ── Tall timber entry door (warm brown, centre-right) ──
        this.addBox(g, 0x6A3C1A, 1.8, 3.2, 0.2, 2.5, 1.6, -7.1);
        // Door brass handle hint
        this.addBox(g, 0xB8860A, 0.12, 0.12, 0.15, 3.1, 1.6, -7.1);
        // Entry canopy (black steel, overhangs door)
        this.addBox(g, 0x1A1A1A, 4, 0.15, 2.5, 2.5, 3.5, -7.3);
        this.addCyl(g, 0x1A1A1A, 0.06, 0.06, 3.5, 5, 1.0, 1.75, -8.2);
        this.addCyl(g, 0x1A1A1A, 0.06, 0.06, 3.5, 5, 4.0, 1.75, -8.2);
        // ── Black steel carport — left side ──
        // Flat roof
        this.addBox(g, 0x1A1A1A, 8, 0.18, 6, -9, 4.1, -5.0);
        // 2 support posts
        this.addCyl(g, 0x111111, 0.12, 0.12, 4.1, 6, -6.5, 2.05, -7.8);
        this.addCyl(g, 0x111111, 0.12, 0.12, 4.1, 6, -11.5, 2.05, -7.8);
        // Carport back wall (house-side) — merge with lower level
        // Covered car (parked, with car cover)
        this.addBox(g, 0x999999, 2.0, 0.8, 3.5, -9.5, 0.4, -4.5); // cover
        this.addBox(g, 0xAAAAAA, 1.9, 0.3, 3.4, -9.5, 0.9, -4.5); // roof hump
        // ── Black vertical slat fence — right boundary ──
        for (let fx = 5; fx <= 13; fx += 0.7) {
            this.addBox(g, 0x1A1A1A, 0.12, 1.6, 0.12, fx, 0.8, -8.5);
        }
        // ── Low front boundary wall with aggregate stone ──
        this.addBox(g, 0x666660, 20, 0.8, 0.3, 0, 0.4, -9.5);
        // Stone aggregate texture strip
        this.addBox(g, 0x4A5055, 20, 0.35, 0.4, 0, 0.18, -9.5);
        // ── Stepping stone path (white pavers, grass between) ──
        for (let si = 0; si < 5; si++) {
            this.addBox(g, 0xDDDDCC, 1.4, 0.08, 0.7, 5, 0.05, -10.2 + si * 0.9);
        }
        // ── Front lawn + tropical plants (cordyline / yucca style) ──
        this.addBox(g, 0x4A7A3A, 8, 0.1, 3, 5, 0.0, -9.8);
        // Cordyline plant — spiky form
        for (const [px, pz] of [[3.5, -8.5], [6.5, -8.0]]) {
            this.addCyl(g, 0x5A3820, 0.12, 0.15, 2.5, 6, px, 1.25, pz);
            // Spiky crown (cone)
            const spiky = new THREE.Mesh(new THREE.ConeGeometry(1.0, 2.2, 7), new THREE.MeshLambertMaterial({ color: 0x3A6A2A }));
            spiky.position.set(px, 2.8, pz);
            g.add(spiky);
        }
        // ── Upper level right-side window (on bluestone wall) ──
        this.addBox(g, 0x1A1A1A, 3.5, 1.8, 0.2, 7.5, 6.5, -6.6);
        this.addBox(g, 0x334455, 3.0, 1.5, 0.15, 7.5, 6.5, -6.55);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ── House 7 — Sculptural Olive Plaster, Brunswick ────────────────────────────
    // Raw olive-khaki render, dramatic asymmetric peaked roof with zinc metal panel,
    // deep-set window, stepped wall sections, curved front boundary wall
    buildHouseSculpturalPlaster(x, z) {
        const g = new THREE.Group();
        const olive = 0x848C6A; // warm olive-khaki render — the hero colour
        const oliveDrk = 0x6A7255; // shadow / recessed areas
        const zinc = 0xB4B4AC; // zinc metal roof panel (left slope)
        const black = 0x111111;
        // ── Main tall body ──
        this.addBox(g, olive, 14, 5.5, 12, -3, 2.75, 0);
        // ── Right stepped-down section (lower wing) ──
        this.addBox(g, olive, 7, 3.5, 12, 9, 1.75, 0);
        // Step reveal shadow between the two levels
        this.addBox(g, oliveDrk, 0.3, 5.6, 12, 2.85, 2.75, 0);
        // ── Dramatic asymmetric peaked roof ──
        // Right face: gentle forward-facing slope (olive plaster)
        const rSlope = new THREE.Mesh(new THREE.BoxGeometry(11, 0.35, 12.4), new THREE.MeshLambertMaterial({ color: olive }));
        rSlope.rotation.z = 22 * Math.PI / 180;
        rSlope.position.set(0.5, 8.0, 0);
        g.add(rSlope);
        // Left face: steep slope — zinc/metal cladding
        const lSlope = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.35, 12.4), new THREE.MeshLambertMaterial({ color: zinc }));
        lSlope.rotation.z = -52 * Math.PI / 180;
        lSlope.position.set(-6.2, 8.2, 0);
        g.add(lSlope);
        // Ridge cap at peak
        this.addBox(g, oliveDrk, 0.6, 0.6, 12.4, -3.2, 10.0, 0);
        // ── Large deeply recessed window/door — centre of main body ──
        this.addBox(g, 0x1A1A1A, 2.3, 4.0, 0.5, -3, 2.0, -6.25); // recess shadow
        this.addBox(g, black, 2.6, 4.3, 0.2, -3, 2.1, -6.05); // frame
        // Glass (emissive blue-grey)
        const winGlass = new THREE.Mesh(new THREE.BoxGeometry(2.0, 3.6, 0.12), new THREE.MeshLambertMaterial({
            color: 0x2A3A44,
            emissive: new THREE.Color(0x0A1822),
            emissiveIntensity: 0.3,
        }));
        winGlass.position.set(-3, 2.1, -6.1);
        g.add(winGlass);
        // ── Small recessed opening in lower right section ──
        this.addBox(g, 0x1A1A1A, 1.6, 1.6, 0.4, 8.5, 2.0, -6.2);
        this.addBox(g, black, 1.8, 1.8, 0.18, 8.5, 2.0, -6.05);
        // ── Black cube wall sconce lights (2 visible on front face) ──
        this.addBox(g, black, 0.4, 0.4, 0.4, -6.5, 4.2, -6.05);
        this.addBox(g, black, 0.4, 0.4, 0.4, 6.5, 3.4, -6.05);
        // Light glow hint (tiny warm emissive beneath each fixture)
        for (const lx of [-6.5, 6.5]) {
            const glow = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.3), new THREE.MeshLambertMaterial({
                color: 0xffeecc,
                emissive: new THREE.Color(0xffcc88),
                emissiveIntensity: 0.6,
            }));
            glow.position.set(lx, lx === -6.5 ? 3.95 : 3.15, -6.07);
            g.add(glow);
        }
        // ── Curved front boundary wall ──
        // Approximate arc with 9 rotated box segments
        const wallR = 8.5;
        const wallCz = -11;
        for (let i = -4; i <= 4; i++) {
            const ang = (i / 4) * 40 * Math.PI / 180; // spread ±40°
            const wx = wallR * Math.sin(ang);
            const wz = wallCz + wallR * (Math.cos(ang) - 1);
            const seg = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.2, 0.35), new THREE.MeshLambertMaterial({ color: olive }));
            seg.rotation.y = ang;
            seg.position.set(wx, 0.6, wz);
            g.add(seg);
            // Pale capping strip on top of wall
            const cap = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.12, 0.45), new THREE.MeshLambertMaterial({ color: 0xC0BEA8 }));
            cap.rotation.y = ang;
            cap.position.set(wx, 1.26, wz);
            g.add(cap);
        }
        // ── Low step at entry ──
        this.addBox(g, oliveDrk, 2.5, 0.2, 1.0, -3, 0.1, -7.5);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ── House 8 — Parisian Haussmann Mansion, St Kilda ───────────────────────────
    // Cream limestone render, horizontal rustication, bold cornices, corner tower
    // pilaster, ornate wrought iron balconies, tall French windows with deep reveals
    buildHouseHaussmann(x, z) {
        const g = new THREE.Group();
        const cream = 0xE8DEC8; // warm cream limestone
        const cLight = 0xF0E8D4; // lighter highlights / frame colour
        const cShadow = 0xC8BA9C; // shadow / deep recess
        const iron = 0x111111; // wrought iron
        // ── Main two-storey body ──
        this.addBox(g, cream, 22, 9.5, 14, 0, 4.75, 0);
        // ── Ground floor rustication bands (5 horizontal grooves) ──
        for (let i = 0; i < 5; i++) {
            this.addBox(g, cShadow, 22.3, 0.14, 14.3, 0, 0.5 + i * 0.88, 0);
        }
        // ── Upper floor rustication bands ──
        for (let i = 0; i < 4; i++) {
            this.addBox(g, cShadow, 22.3, 0.12, 14.3, 0, 5.4 + i * 0.85, 0);
        }
        // ── Inter-floor cornice (main moulding between floors) ──
        this.addBox(g, cLight, 22.6, 0.5, 14.6, 0, 4.75, 0);
        this.addBox(g, cShadow, 22.8, 0.2, 14.8, 0, 5.05, 0);
        this.addBox(g, cream, 22.5, 0.3, 14.5, 0, 5.25, 0);
        // ── Roof cornice — bold projecting crown ──
        this.addBox(g, cream, 23.2, 0.5, 15.2, 0, 9.75, 0);
        this.addBox(g, cLight, 22.8, 0.8, 14.8, 0, 10.15, 0);
        this.addBox(g, cShadow, 23.4, 0.25, 15.4, 0, 10.55, 0);
        // ── Corner tower pilaster — rises above roof, left-front corner ──
        // Pilaster body (proud of wall surface)
        this.addBox(g, cLight, 4.0, 11.5, 4.0, -10, 5.75, -6);
        // Rustication on pilaster
        for (let i = 0; i < 6; i++) {
            this.addBox(g, cShadow, 4.2, 0.12, 4.2, -10, 0.5 + i * 1.75, -6);
        }
        // Pilaster inter-floor cornice band
        this.addBox(g, cream, 4.4, 0.4, 4.4, -10, 5.0, -6);
        // Pilaster top cornice (stepped, 3 levels)
        this.addBox(g, cream, 4.6, 0.4, 4.6, -10, 11.3, -6);
        this.addBox(g, cLight, 4.4, 0.6, 4.4, -10, 11.75, -6);
        this.addBox(g, cShadow, 4.8, 0.25, 4.8, -10, 12.12, -6);
        // Pilaster finial block
        this.addBox(g, cream, 2.5, 1.0, 2.5, -10, 12.75, -6);
        // ── Ground floor French windows — 3 across (tall, narrow, deep reveals) ──
        for (const wx of [-6.5, -1, 4.5]) {
            this.addBox(g, cShadow, 2.0, 4.2, 0.5, wx, 2.1, -7.25); // deep recess
            this.addBox(g, cLight, 1.7, 4.0, 0.2, wx, 2.1, -7.05); // frame
            // Glass — emissive
            const glGF = new THREE.Mesh(new THREE.BoxGeometry(1.35, 3.5, 0.12), new THREE.MeshLambertMaterial({
                color: 0x8AABBB,
                emissive: new THREE.Color(0x1A2A33),
                emissiveIntensity: 0.15,
            }));
            glGF.position.set(wx, 2.1, -7.0);
            g.add(glGF);
            // Transom bar
            this.addBox(g, cLight, 1.7, 0.12, 0.15, wx, 3.2, -7.05);
        }
        // ── Upper floor French windows + Juliet balconies ──
        for (const wx of [-6.5, 4.5]) {
            // Deep window reveal
            this.addBox(g, cShadow, 2.0, 3.8, 0.5, wx, 7.5, -7.25);
            this.addBox(g, cLight, 1.7, 3.5, 0.2, wx, 7.5, -7.05);
            // Glass
            const glUF = new THREE.Mesh(new THREE.BoxGeometry(1.35, 3.0, 0.12), new THREE.MeshLambertMaterial({
                color: 0x8AABBB,
                emissive: new THREE.Color(0x1A2A33),
                emissiveIntensity: 0.15,
            }));
            glUF.position.set(wx, 7.5, -7.0);
            g.add(glUF);
            // Transom bar
            this.addBox(g, cLight, 1.7, 0.12, 0.15, wx, 8.5, -7.05);
            // Balcony slab
            this.addBox(g, cream, 3.4, 0.28, 1.4, wx, 5.66, -7.9);
            this.addBox(g, cShadow, 3.5, 0.45, 1.5, wx, 5.38, -7.95);
            // Wrought iron railing — 5 vertical spindles
            for (let bi = 0; bi < 5; bi++) {
                const bx = wx - 1.3 + bi * 0.65;
                this.addBox(g, iron, 0.07, 1.0, 0.07, bx, 6.2, -8.4);
            }
            // Top & bottom rails
            this.addBox(g, iron, 3.2, 0.09, 0.09, wx, 6.72, -8.4);
            this.addBox(g, iron, 3.2, 0.09, 0.09, wx, 5.82, -8.4);
            // Decorative scroll hints (diagonal bars at each end)
            this.addBox(g, iron, 0.07, 1.0, 0.07, wx - 1.3, 6.2, -8.4, 0, 0, 0.35);
            this.addBox(g, iron, 0.07, 1.0, 0.07, wx + 1.3, 6.2, -8.4, 0, 0, -0.35);
        }
        // ── Large glazed bay — right side (floor-to-ceiling grid windows) ──
        this.addBox(g, cLight, 5.0, 6.5, 0.22, 9.5, 3.75, -7.05);
        const glBay = new THREE.Mesh(new THREE.BoxGeometry(4.5, 6.0, 0.12), new THREE.MeshLambertMaterial({
            color: 0x8AABBB,
            emissive: new THREE.Color(0x1A2A33),
            emissiveIntensity: 0.12,
        }));
        glBay.position.set(9.5, 3.75, -7.0);
        g.add(glBay);
        // Grid mullions
        for (let my = 0; my < 3; my++) {
            this.addBox(g, cLight, 5.0, 0.1, 0.15, 9.5, 1.0 + my * 2.0, -7.0);
        }
        for (const mx of [7.5, 9.5, 11.5]) {
            this.addBox(g, cLight, 0.1, 6.0, 0.15, mx, 3.75, -7.0);
        }
        // ── Entry recess / portico ──
        this.addBox(g, cShadow, 3.8, 5.5, 0.6, 1.5, 2.75, -7.4);
        this.addBox(g, cLight, 2.8, 4.8, 0.2, 1.5, 2.4, -7.1);
        const glEntry = new THREE.Mesh(new THREE.BoxGeometry(2.2, 4.2, 0.12), new THREE.MeshLambertMaterial({
            color: 0x8AABBB,
            emissive: new THREE.Color(0x0A1520),
            emissiveIntensity: 0.2,
        }));
        glEntry.position.set(1.5, 2.4, -7.05);
        g.add(glEntry);
        // Door handle
        this.addBox(g, 0xD4AA50, 0.1, 0.1, 0.1, 2.4, 2.2, -7.06);
        // ── Base plinth (building sits on a slight raise) ──
        this.addBox(g, cShadow, 22.5, 0.3, 14.5, 0, 0.15, 0);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ── House 9 — Angular Bay / Footscray Mediterranean ──────────────────────────
    buildHouseAngularBay(x, z) {
        const g = new THREE.Group();
        const cream = 0xF0EBDE; // Mediterranean stucco
        const terracotta = 0xC47A5A; // Roof tiles
        const timber = 0x3A2010; // Dark brown timber
        const iron = 0x111111; // Iron railing
        // Ground floor
        this.addBox(g, cream, 18, 4, 13, 0, 2, 0);
        // Upper floor (main body)
        this.addBox(g, cream, 18, 4, 12, 0, 6, 0);
        // Upper-right corner mass projecting forward
        this.addBox(g, cream, 8, 4, 2.5, 5, 6, -7.25);
        // Angular chimney/bay pillar — protruding on front face, rises above roofline
        this.addBox(g, cream, 3, 10, 2.5, 6.5, 5, -7.5);
        // Gable roof — two angled panels meeting at ridge (~25° = 0.44 rad)
        this.addBox(g, terracotta, 10, 0.5, 14, -4.5, 8.5, 0, 0, 0, 0.44);
        this.addBox(g, terracotta, 10, 0.5, 14, 4.5, 8.5, 0, 0, 0, -0.44);
        // Ridge cap
        this.addBox(g, timber, 1.5, 0.5, 14.5, 0, 10.5, 0);
        // Dark timber fascia at eave level
        this.addBox(g, timber, 19, 0.3, 13.5, 0, 8.05, 0);
        // Front eave soffit underside lining
        this.addBox(g, timber, 19, 0.2, 1.2, 0, 8.05, -7.3);
        // Ground floor windows — white frame + dark glass
        for (const wx of [-6.5, 0]) {
            this.addBox(g, 0xEEEEEE, 2.6, 2.0, 0.12, wx, 1.8, -6.56);
            this.addBox(g, 0x334455, 2.2, 1.6, 0.15, wx, 1.8, -6.5);
        }
        // Upper floor windows
        for (const wx of [-6.5, 0]) {
            this.addBox(g, 0xEEEEEE, 2.6, 2.0, 0.12, wx, 5.8, -6.56);
            this.addBox(g, 0x334455, 2.2, 1.6, 0.15, wx, 5.8, -6.5);
        }
        // Iron balcony railing upper-left: 4 vertical bars
        for (let bi = 0; bi < 4; bi++) {
            this.addBox(g, iron, 0.08, 1.0, 0.08, -8.5 + bi * 0.65, 5.5, -6.7);
        }
        // Top and bottom rails
        this.addBox(g, iron, 2.4, 0.08, 0.08, -7.02, 6.05, -6.7);
        this.addBox(g, iron, 2.4, 0.08, 0.08, -7.02, 5.0, -6.7);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ── House 10 — Brutalist Compound / Brunswick ─────────────────────────────────
    buildHouseBrutalistCompound(x, z) {
        const g = new THREE.Group();
        const taupe = 0xA09878; // Sandy taupe render
        const metal = 0x888880; // Grey metal canopies
        // Volume 1 — leftmost, tallest (7 units high)
        this.addBox(g, taupe, 7, 7, 11, -8.5, 3.5, 0);
        // Volume 2 — centre, medium (5 units)
        this.addBox(g, taupe, 6, 5, 10, -1, 2.5, 0.5);
        // Volume 3 — centre-right (6 units)
        this.addBox(g, taupe, 6, 6, 11, 5.5, 3.0, -0.5);
        // Volume 4 — far right, low (4 units)
        this.addBox(g, taupe, 5, 4, 9, 11, 2.0, 0);
        // Low linking plinth across all volumes
        this.addBox(g, taupe, 24, 1.5, 9, 0, 0.75, 0.5);
        // Grey metal box-awning canopies protruding from upper volumes
        this.addBox(g, metal, 4.0, 0.25, 2.5, -8.5, 7.25, -6.2);
        this.addBox(g, metal, 4.0, 0.25, 2.5, 5.5, 6.25, -6.2);
        // Large floor-to-ceiling sliding glass panels (dark-framed)
        this.addBox(g, 0x223344, 4.0, 5.5, 0.15, -8.5, 3.5, -5.6);
        this.addBox(g, 0x223344, 3.5, 4.5, 0.15, 5.5, 3.0, -5.6);
        // Diagonal feature wall (~15° ry rotation)
        this.addBox(g, taupe, 8, 5, 0.4, 2.0, 2.5, -6.5, 0, 0.26, 0);
        // Curved low perimeter/garden wall — 9 box segments forming a gentle arc
        const wallR = 14;
        const wallSegs = 9;
        const wAngStart = -Math.PI * 0.35;
        const wAngEnd = Math.PI * 0.35;
        for (let si = 0; si < wallSegs; si++) {
            const t = si / (wallSegs - 1);
            const ang = wAngStart + (wAngEnd - wAngStart) * t;
            const wx = Math.sin(ang) * wallR;
            const wz = Math.cos(ang) * wallR - wallR + 4;
            this.addBox(g, taupe, 3.5, 1.5, 0.4, wx, 0.75, wz, 0, -ang, 0);
        }
        // Courtyard trees — thin trunk + sphere canopy
        for (const tx of [-3, 2.5]) {
            this.addCyl(g, 0x5A3A1A, 0.15, 0.2, 3, 5, tx, 1.5, -4);
            const canopy = new THREE.Mesh(new THREE.SphereGeometry(1.2, 6, 5), new THREE.MeshLambertMaterial({ color: 0x3A6A2A }));
            canopy.position.set(tx, 4.0, -4);
            g.add(canopy);
        }
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ── House 11 — Terracotta Monolith / Richmond ─────────────────────────────────
    buildHouseTerracottaMonolith(x, z) {
        const g = new THREE.Group();
        const rose = 0xBB7060; // Dusty rose-terracotta
        const seam = 0x2A1A1A; // Shadow seam lines
        const plant = 0x4A7A3A; // Planting
        // Front boundary wall (~20 wide, 3 tall, 0.5 deep) — forward of main house
        this.addBox(g, rose, 20, 3, 0.5, 0, 1.5, -9.5);
        // Horizontal seam lines on boundary wall
        this.addBox(g, seam, 20.2, 0.1, 0.55, 0, 1.0, -9.5);
        this.addBox(g, seam, 20.2, 0.1, 0.55, 0, 2.0, -9.5);
        // Main house wall — set back, leaving courtyard gap
        this.addBox(g, rose, 20, 6, 10, 0, 3, -2);
        // Horizontal seam lines on main wall
        this.addBox(g, seam, 20.2, 0.1, 10.1, 0, 2.0, -2);
        this.addBox(g, seam, 20.2, 0.1, 10.1, 0, 4.0, -2);
        // Parapet capping the flat roof
        this.addBox(g, rose, 20.3, 0.4, 10.3, 0, 6.2, -2);
        // Planter channel between walls — green fill
        this.addBox(g, plant, 18, 0.3, 1.8, 0, 0.15, -7.5);
        // Grass tufts — thin cones
        for (let pi = -8; pi <= 8; pi += 2.5) {
            const tuft = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.8, 5), new THREE.MeshLambertMaterial({ color: 0x5A8A4A }));
            tuft.position.set(pi, 0.55, -7.5);
            g.add(tuft);
        }
        // Single tall narrow slot window in main wall — recessed black frame + dark glass
        this.addBox(g, 0x111111, 1.2, 3.5, 0.2, 0, 3.5, -7.05);
        this.addBox(g, 0x223344, 0.8, 3.0, 0.15, 0, 3.5, -7.0);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ── House 12 — Curved Balcony / St Kilda ──────────────────────────────────────
    buildHouseCurvedBalcony(x, z) {
        const g = new THREE.Group();
        const creamLow = 0xE8E0CC; // Lower level warm cream
        const whiteUp = 0xF0EDE8; // Upper level flat white
        const concrete = 0xA8A8A0; // Curved balcony wall — grey concrete
        const iron = 0x111111; // Black gutters / downpipes / trim
        // Lower level — warm cream render
        this.addBox(g, creamLow, 16, 4, 12, 0, 2, 0);
        // Upper level — white render
        this.addBox(g, whiteUp, 16, 4, 12, 0, 6, 0);
        // Flat roof slab
        this.addBox(g, whiteUp, 16.5, 0.3, 12.5, 0, 8.15, 0);
        // Dark roof edge trim
        this.addBox(g, iron, 16.6, 0.2, 12.6, 0, 8.3, 0);
        // LARGE SWEEPING CURVED BALCONY WALL — 14 box segments forming an arc
        // Convex barrel-curve protrudes forward across ~9 units wide, 2 units tall
        const arcR = 5.0;
        const arcSegs = 14;
        const arcA0 = -Math.PI * 0.5;
        const arcA1 = Math.PI * 0.5;
        for (let si = 0; si < arcSegs; si++) {
            const t = si / (arcSegs - 1);
            const ang = arcA0 + (arcA1 - arcA0) * t;
            const bx = Math.sin(ang) * arcR;
            const bz = -Math.cos(ang) * arcR - 3.5;
            this.addBox(g, concrete, 1.3, 2.0, 0.5, bx, 5.5, bz, 0, -ang, 0);
        }
        // Ground floor dark-framed casement windows
        for (const wx of [-5, 0, 5]) {
            this.addBox(g, 0x444444, 2.5, 2.0, 0.15, wx, 1.8, -6.1);
            this.addBox(g, 0x223344, 2.0, 1.6, 0.12, wx, 1.8, -6.0);
        }
        // Black gutters/downpipes at corners
        this.addCyl(g, iron, 0.1, 0.1, 8, 5, -8, 4, -6.1);
        this.addCyl(g, iron, 0.1, 0.1, 8, 5, 8, 4, -6.1);
        // Small black cube wall sconce on lower wall
        this.addBox(g, iron, 0.3, 0.3, 0.3, -2, 2.5, -6.15);
        // Flat soffit/canopy at slight angle — dark edge
        this.addBox(g, whiteUp, 17, 0.25, 1.5, 0, 8.0, -7.2, 0.1, 0, 0);
        this.addBox(g, iron, 17.2, 0.1, 1.6, 0, 8.12, -7.2, 0.1, 0, 0);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ── House 13 — Corten + Plaster / Footscray ───────────────────────────────────
    buildHouseCortenPlaster(x, z) {
        const g = new THREE.Group();
        const charcoal = 0x4A4A4A; // Left volume — dark charcoal plaster
        const corten = 0xB85A20; // Right volume — Corten rust-orange
        const pilasterCol = 0x383838; // Seam pilaster
        const claddingLn = 0x8A4010; // Vertical cladding strip lines
        // Left volume — charcoal plaster (~12 wide, 8 tall)
        this.addBox(g, charcoal, 12, 8, 11, -7, 4, 0);
        // Parapet — left
        this.addBox(g, charcoal, 12.3, 0.4, 11.3, -7, 8.2, 0);
        // Right volume — Corten steel (0.5 units taller)
        this.addBox(g, corten, 8, 8.5, 11, 5, 4.25, 0);
        // Parapet — right
        this.addBox(g, corten, 8.3, 0.4, 11.3, 5, 8.7, 0);
        // Tall narrow pilaster/tower column at seam (full height + 1 above)
        this.addBox(g, pilasterCol, 2, 9.5, 11, -0.5, 4.75, 0);
        // Vertical cladding strip lines on Corten volume (6 thin dark lines)
        for (let ci = 0; ci < 6; ci++) {
            this.addBox(g, claddingLn, 0.15, 8.5, 11.1, 1.5 + ci * 1.2, 4.25, 0);
        }
        // Cylindrical wall sconces on charcoal face (2 units)
        this.addCyl(g, 0xCCCC88, 0.15, 0.15, 0.5, 6, -5, 5, -5.6);
        this.addCyl(g, 0xCCCC88, 0.15, 0.15, 0.5, 6, -9, 5, -5.6);
        // Recessed windows — charcoal volume (black frame recess + dark glass)
        this.addBox(g, 0x111111, 2.5, 1.8, 0.3, -6, 4.5, -5.7);
        this.addBox(g, 0x223344, 2.0, 1.4, 0.15, -6, 4.5, -5.6);
        this.addBox(g, 0x111111, 2.5, 1.8, 0.3, -10, 2.5, -5.7);
        this.addBox(g, 0x223344, 2.0, 1.4, 0.15, -10, 2.5, -5.6);
        // Palm tree — tall thin trunk + dark green cone fan at top
        this.addCyl(g, 0x8B5A2B, 0.2, 0.3, 8, 6, -15, 4, -3);
        const palmFan = new THREE.Mesh(new THREE.ConeGeometry(2.5, 1.5, 8), new THREE.MeshLambertMaterial({ color: 0x2A5A1A }));
        palmFan.position.set(-15, 8.75, -3);
        g.add(palmFan);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ────────────────────────────────────────────────────────────────────────────
    // COFFEE SHOP — St Kilda boutique café / pit-stop (x=-60, z=-80)
    // Small, warm, inviting — cream render, terracotta awning, amber windows
    // ────────────────────────────────────────────────────────────────────────────
    buildCoffeeShop(x, z) {
        const g = new THREE.Group();
        // ── Main body — warm cream/white render ──
        this.addBox(g, 0xF0E8D8, 14, 4, 10, 0, 2, 0);
        // ── Flat roof slab ──
        this.addBox(g, 0xE8E0D0, 14.2, 0.18, 10.2, 0, 4.09, 0);
        // Black edge parapet trim
        this.addBox(g, 0x111111, 14.6, 0.38, 10.6, 0, 4.19, 0);
        // ── Large front windows — floor to ceiling, warm amber emissive glow ──
        // Front face of body is at z = -5 in group space
        // Two big windows, black frames, amber glass
        for (const wx of [-3.8, 3.8]) {
            // Black frame surround
            this.addBox(g, 0x111111, 4.0, 3.8, 0.14, wx, 2.1, -5.08);
            // Amber glass — emissive warm interior glow
            const glass = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.4, 0.10), new THREE.MeshLambertMaterial({
                color: 0xC88040,
                emissive: new THREE.Color(0x9A5A20),
                emissiveIntensity: 0.7,
            }));
            glass.position.set(wx, 2.1, -5.06);
            g.add(glass);
        }
        // ── Door — warm timber brown, slightly recessed (centre) ──
        // Frame first
        this.addBox(g, 0x111111, 2.0, 3.0, 0.14, 0, 1.5, -5.08);
        // Timber door
        this.addBox(g, 0x7A4A20, 1.6, 2.8, 0.20, 0, 1.4, -5.10);
        // Handle
        this.addBox(g, 0xCCA060, 0.1, 0.1, 0.12, 0.5, 1.4, -5.10);
        // ── Awning — terracotta/burnt orange fabric canopy ──
        // Extends from z=-5 (building front) to z=-7 (2 units forward), centre at z=-6
        // Full building width, slight slope hint via thin leading-edge drop
        this.addBox(g, 0xC47A40, 13.5, 0.28, 4.0, 0, 3.22, -7.0);
        // Leading edge drop (darker strip for depth)
        this.addBox(g, 0xA45A28, 13.5, 0.60, 0.18, 0, 2.95, -9.05);
        // 3 slim support posts under awning leading edge
        for (const ax of [-4.5, 0, 4.5]) {
            this.addCyl(g, 0x888878, 0.07, 0.07, 3.0, 5, ax, 1.5, -9.1);
        }
        // ── COFFEE sign — white box on the awning fascia ──
        // Sits on the underside/front face of the awning at the front
        this.addBox(g, 0xFFFFFF, 5.0, 0.36, 0.12, 0, 3.06, -8.96);
        // ── Outdoor tables: 3 small round tables with stools (warm wood) ──
        // Placed out in front of the awning (z = -11 to -12 in group space)
        for (const [tx, tz] of [[-5, -11.5], [0, -11.5], [5, -11.5]]) {
            // Table top (flat cylinder)
            this.addCyl(g, 0x8A6040, 0.75, 0.75, 0.10, 12, tx, 1.12, tz);
            // Table leg
            this.addCyl(g, 0x6A4020, 0.07, 0.07, 1.12, 6, tx, 0.56, tz);
            // 2 stools per table (cylinder seat + small leg)
            for (const sOff of [-1.0, 1.0]) {
                this.addCyl(g, 0x8A6040, 0.32, 0.32, 0.09, 8, tx + sOff * 0.85, 0.82, tz);
                this.addCyl(g, 0x6A4020, 0.05, 0.05, 0.82, 5, tx + sOff * 0.85, 0.41, tz);
            }
        }
        // ── Takeaway cup holder — small stack of white cylinders on right wall ──
        // Mounted near front face, right side of building exterior
        for (let ci = 0; ci < 5; ci++) {
            this.addCyl(g, 0xFFFFFF, 0.22 - ci * 0.008, 0.24 - ci * 0.008, 0.30, 8, 7.1, 0.22 + ci * 0.28, -3.5);
        }
        // ── Chalkboard sign — dark slate with white line details ──
        // Leans slightly outside on left of door
        this.addBox(g, 0x333335, 1.10, 1.70, 0.12, -3.5, 1.1, -5.10);
        // White 'text' lines on chalkboard
        this.addBox(g, 0xEEEEEE, 0.72, 0.08, 0.05, -3.5, 1.60, -5.04);
        this.addBox(g, 0xEEEEEE, 0.55, 0.08, 0.05, -3.5, 1.42, -5.04);
        this.addBox(g, 0xEEEEEE, 0.63, 0.08, 0.05, -3.5, 1.24, -5.04);
        this.addBox(g, 0xEEEEEE, 0.48, 0.08, 0.05, -3.5, 1.06, -5.04);
        // ── Small warm point light inside — subtle emissive ceiling ──
        // Tiny warm box on ceiling to hint at pendant lighting
        for (const lx of [-4, 0, 4]) {
            const pendant = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 0.25), new THREE.MeshLambertMaterial({
                color: 0xFFCC88,
                emissive: new THREE.Color(0xFFAA44),
                emissiveIntensity: 0.8,
            }));
            pendant.position.set(lx, 3.7, -2.0);
            g.add(pendant);
        }
        // ── Big billboard sign ────────────────────────────────────────────────────
        // Tall pole (in group-local space: y-centre at 6 means it spans 0–12)
        this.addCyl(g, 0x333333, 0.3, 0.3, 12, 8, 0, 6, -8);
        // Sign board — emissive warm orange
        const signBoard = new THREE.Mesh(new THREE.BoxGeometry(10, 3, 0.4), new THREE.MeshLambertMaterial({
            color: 0xD4622A,
            emissive: new THREE.Color(0x8B3010),
            emissiveIntensity: 0.6,
        }));
        signBoard.position.set(0, 13, -8);
        signBoard.castShadow = true;
        g.add(signBoard);
        // Decorative white stripes on sign face
        this.addBox(g, 0xFFFFFF, 8, 0.2, 0.5, 0, 14.2, -7.85);
        this.addBox(g, 0xFFFFFF, 8, 0.2, 0.5, 0, 12.8, -7.85);
        // Coffee cup shape on top — white cylinder (cup body)
        this.addCyl(g, 0xFFFFFF, 0.8, 1.0, 1.5, 12, 0, 15.5, -8);
        // Brown rim on top of cup
        this.addCyl(g, 0x6B3A2A, 0.4, 0.4, 0.3, 8, 0, 16.4, -8);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ────────────────────────────────────────────────────────────────────────────
    // TEM WORKSHOP — large industrial landmark, prominent brand presence
    // Near spawn at (10, 15). Phase 1 job pickup destination.
    // ────────────────────────────────────────────────────────────────────────────
    buildWorkshop(x, z) {
        const group = new THREE.Group();
        // Colours
        const bodyCol = 0x4A4A44; // TEM dark grey body
        const roofCol = 0x222220; // Dark charcoal pitched roof
        const signCol = 0xEEE8D8; // Bright cream sign board
        const textCol = 0x333330; // Dark text/shadow on sign
        const doorCol = 0x111110; // Roller door dark
        // ── Main building body (30W × 8H × 20D) ────────────────────────────────
        this.addBox(group, bodyCol, 30, 8, 20, 0, 4, 0);
        // Base reveal / shadow strip at ground level
        this.addBox(group, 0x1A1A18, 30.2, 0.35, 20.2, 0, 0.18, 0);
        // ── Pitched roof — two angled panels ────────────────────────────────────
        const DEG12 = 12 * Math.PI / 180;
        const roofMat = new THREE.MeshLambertMaterial({ color: roofCol });
        const roofFront = new THREE.Mesh(new THREE.BoxGeometry(30.5, 0.35, 11), roofMat);
        roofFront.castShadow = true;
        roofFront.rotation.x = DEG12;
        roofFront.position.set(0, 8.6, -4.5);
        group.add(roofFront);
        const roofBack = new THREE.Mesh(new THREE.BoxGeometry(30.5, 0.35, 11), roofMat);
        roofBack.castShadow = true;
        roofBack.rotation.x = -DEG12;
        roofBack.position.set(0, 8.6, 4.5);
        group.add(roofBack);
        // Ridge cap
        this.addBox(group, 0x111110, 30.5, 0.55, 0.8, 0, 9.3, 0);
        // ── TEM sign board across front face ─────────────────────────────────────
        // Cream board background — wide and tall, positioned near roofline
        this.addBox(group, signCol, 24, 3.2, 0.45, 0, 7.4, -10.23);
        // Dark inner board (text shadow / brand dark fill)
        this.addBox(group, textCol, 22, 2.5, 0.28, 0, 7.4, -10.25);
        // Bright top cap strip (TEM brand highlight line)
        this.addBox(group, 0xFFFAF0, 24.2, 0.22, 0.46, 0, 9.11, -10.23);
        // Bottom cap strip
        this.addBox(group, 0xFFFAF0, 24.2, 0.22, 0.46, 0, 5.89, -10.23);
        // Left/right end caps
        this.addBox(group, 0xFFFAF0, 0.22, 3.2, 0.46, -12.11, 7.4, -10.23);
        this.addBox(group, 0xFFFAF0, 0.22, 3.2, 0.46, 12.11, 7.4, -10.23);
        // ── TEM brand accent bar (iron red) under sign ───────────────────────────
        this.addBox(group, 0xC1666B, 24, 0.3, 0.44, 0, 5.75, -10.22);
        // ── Conny's counter sign (bright yellow) above roller door ───────────────
        this.addBox(group, 0xFFCC44, 8, 0.65, 0.35, 0, 5.5, -10.2);
        this.addBox(group, 0x2A2A20, 7.5, 0.42, 0.38, 0, 5.5, -10.21);
        // ── Large roller door (very wide, front face) ─────────────────────────────
        this.addBox(group, doorCol, 12, 5, 0.25, 0, 2.5, -10.15);
        // Door tracks either side
        this.addBox(group, 0x222220, 0.2, 5, 0.25, -6.2, 2.5, -10.15);
        this.addBox(group, 0x222220, 0.2, 5, 0.25, 6.2, 2.5, -10.15);
        // Door horizontal slat lines
        for (let hy = 1; hy <= 4; hy++) {
            this.addBox(group, 0x1A1A18, 11.8, 0.08, 0.28, 0, hy, -10.14);
        }
        // Door header beam
        this.addBox(group, 0x222220, 12.6, 0.4, 0.28, 0, 5.2, -10.14);
        // ── Clerestory windows along top of both side walls ─────────────────────
        const glassCol = 0x334455;
        for (let cz = -6; cz <= 6; cz += 4) {
            // Right side wall (x = +15)
            this.addBox(group, glassCol, 0.16, 1.2, 2.8, 15.09, 7.2, cz);
            // Left side wall (x = -15)
            this.addBox(group, glassCol, 0.16, 1.2, 2.8, -15.09, 7.2, cz);
        }
        // Clerestory frame strips (top/bottom on each side)
        this.addBox(group, 0x222220, 0.2, 0.18, 20, 15.1, 7.9, 0);
        this.addBox(group, 0x222220, 0.2, 0.18, 20, 15.1, 6.6, 0);
        this.addBox(group, 0x222220, 0.2, 0.18, 20, -15.1, 7.9, 0);
        this.addBox(group, 0x222220, 0.2, 0.18, 20, -15.1, 6.6, 0);
        // ── Downpipes at all four corners ────────────────────────────────────────
        this.addCyl(group, 0x222220, 0.12, 0.12, 8, 5, -15, 4, -10);
        this.addCyl(group, 0x222220, 0.12, 0.12, 8, 5, 15, 4, -10);
        this.addCyl(group, 0x222220, 0.12, 0.12, 8, 5, -15, 4, 10);
        this.addCyl(group, 0x222220, 0.12, 0.12, 8, 5, 15, 4, 10);
        // ── Material drums/buckets outside — right of roller door ────────────────
        // Terracotta drum stack
        this.addCyl(group, 0xC49A7A, 0.85, 0.90, 1.5, 10, 9.5, 0.75, -11.5);
        this.addCyl(group, 0x6A6A62, 0.85, 0.90, 1.5, 10, 9.5, 2.35, -11.5);
        // Lids
        this.addCyl(group, 0x888880, 0.92, 0.92, 0.12, 10, 9.5, 1.56, -11.5);
        this.addCyl(group, 0x888880, 0.92, 0.92, 0.12, 10, 9.5, 3.16, -11.5);
        // Extra drum beside the stack (slight offset)
        this.addCyl(group, 0xC49A7A, 0.85, 0.90, 1.5, 10, 11.2, 0.75, -12.2);
        this.addCyl(group, 0x888880, 0.92, 0.92, 0.12, 10, 11.2, 1.56, -12.2);
        // Drum pallet
        this.addBox(group, 0x7A5A38, 4.5, 0.18, 2.5, 10.2, 0.09, -11.8);
        // ── Conny's counter — just inside the roller door (service desk hint) ────
        this.addBox(group, 0x8A7858, 6, 1, 2.2, 0, 0.5, -9.2); // counter base
        this.addBox(group, 0xC8B890, 6.3, 0.18, 2.4, 0, 1.09, -9.2); // counter top (pale timber)
        // Clipboard / papers on counter
        this.addBox(group, 0xEEEECC, 0.8, 0.05, 1.0, 0.8, 1.19, -9.3);
        this.addBox(group, 0x444444, 0.12, 0.25, 0.12, 0.8, 1.22, -9.0);
        // ── Parked mixing equipment — left side of building front ────────────────
        // Mixer body
        this.addBox(group, 0x5A5A52, 2.8, 1.8, 2.8, -8.5, 0.9, -11.5);
        // Mixer drum (tilted cylinder suggesting a concrete mixer)
        const mixDrum = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 2.2, 10), new THREE.MeshLambertMaterial({ color: 0x888880 }));
        mixDrum.rotation.z = 35 * Math.PI / 180;
        mixDrum.position.set(-8.5, 1.6, -11.5);
        mixDrum.castShadow = true;
        group.add(mixDrum);
        // Mixer wheel/axle hint
        this.addCyl(group, 0x333330, 0.4, 0.4, 0.3, 8, -8.5, 0.2, -10.8);
        // Second piece of equipment (larger boxy machine)
        this.addBox(group, 0x4A4A44, 3.5, 2.2, 2.5, -11.5, 1.1, -13);
        this.addBox(group, 0x888880, 3.0, 0.5, 2.0, -11.5, 2.35, -13);
        // Hopper hint (funnel top)
        this.addBox(group, 0x666660, 2.2, 1.2, 1.4, -11.5, 3.1, -13);
        // ── Concrete apron / pad in front of roller door ──────────────────────────
        const apronMat = new THREE.MeshLambertMaterial({ color: 0x9A9890 });
        const apron = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), apronMat);
        apron.rotation.x = -Math.PI / 2;
        apron.position.set(0, 0.008, -14);
        apron.receiveShadow = true;
        group.add(apron);
        // ── Side signage: small TEM logo block on right side ─────────────────────
        this.addBox(group, signCol, 0.3, 2.5, 6, 15.16, 4, 0);
        this.addBox(group, textCol, 0.32, 2.0, 5.5, 15.17, 4, 0);
        // ── TEM tree logo — single large centrepiece on front face ───────────────
        const wsTex = makeTEMRoofTexture(1024);
        const wsMat = new THREE.MeshLambertMaterial({ map: wsTex, transparent: true, depthWrite: false });
        const bigLogo = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), wsMat);
        bigLogo.position.set(0, 4.5, -10.40);
        group.add(bigLogo);
        group.position.set(x, 0, z);
        this.scene.add(group);
        // Workshop is 30W × 20D — register a solid AABB collider
        this.collisionWorld.addBox(x, z, 15.5, 10.5);
    }
    // ── Zebra Crossings (crosswalks) at every road intersection ──
    createZebraCrossings() {
        const stripeMat = new THREE.MeshLambertMaterial({ color: 0xEEEEEE });
        const blackMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
        for (let ix = -200; ix <= 200; ix += 40) {
            for (let iz = -200; iz <= 200; iz += 40) {
                if (Math.abs(ix) > 200 || Math.abs(iz) > 200)
                    continue;
                // Zebra crossing: white + black stripes alternating, length = sidewalk width (2 units)
                // Centred at road edge (iz±5 = middle of 2-unit sidewalk from ±4 to ±6)
                // Stripe width 0.8, gap 0.8 → 5 white + 4 black spread across 8-unit road
                const whiteX = [-3.2, -1.6, 0, 1.6, 3.2];
                const blackX = [-2.4, -0.8, 0.8, 2.4];
                const stripeLen = 2.0; // = sidewalk width
                // North approach (centred at iz-5, length spans iz-4 to iz-6)
                for (const s of whiteX) {
                    const m = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.03, stripeLen), stripeMat);
                    m.position.set(ix + s, 0.05, iz - 5);
                    this.scene.add(m);
                }
                for (const s of blackX) {
                    const m = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.03, stripeLen), blackMat);
                    m.position.set(ix + s, 0.04, iz - 5);
                    this.scene.add(m);
                }
                // South approach (centred at iz+5)
                for (const s of whiteX) {
                    const m = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.03, stripeLen), stripeMat);
                    m.position.set(ix + s, 0.05, iz + 5);
                    this.scene.add(m);
                }
                for (const s of blackX) {
                    const m = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.03, stripeLen), blackMat);
                    m.position.set(ix + s, 0.04, iz + 5);
                    this.scene.add(m);
                }
                // West approach (centred at ix-5, stripes spread across Z)
                for (const s of whiteX) {
                    const m = new THREE.Mesh(new THREE.BoxGeometry(stripeLen, 0.03, 0.8), stripeMat);
                    m.position.set(ix - 5, 0.05, iz + s);
                    this.scene.add(m);
                }
                for (const s of blackX) {
                    const m = new THREE.Mesh(new THREE.BoxGeometry(stripeLen, 0.03, 0.8), blackMat);
                    m.position.set(ix - 5, 0.04, iz + s);
                    this.scene.add(m);
                }
                // East approach (centred at ix+5)
                for (const s of whiteX) {
                    const m = new THREE.Mesh(new THREE.BoxGeometry(stripeLen, 0.03, 0.8), stripeMat);
                    m.position.set(ix + 5, 0.05, iz + s);
                    this.scene.add(m);
                }
                for (const s of blackX) {
                    const m = new THREE.Mesh(new THREE.BoxGeometry(stripeLen, 0.03, 0.8), blackMat);
                    m.position.set(ix + 5, 0.04, iz + s);
                    this.scene.add(m);
                }
            }
        }
    }
    // ── Curved Road Corners — rounded sidewalk corners aligned with block edges ──
    createRoadCorners() {
        const sidewalkMat = new THREE.MeshLambertMaterial({ color: 0xc8c0b0 });
        const curbMat = new THREE.MeshLambertMaterial({ color: 0xa8a098 });
        // Centres at the OUTER sidewalk corner (±6 from intersection centre).
        // Each arc fills the quadrant facing INTO the intersection → convex from road.
        // Road edge = ±4, sidewalk outer edge = ±6, so radius 2 spans exactly the sidewalk width.
        const corners = [
            { dx: -6, dz: -6, theta: 3 * Math.PI / 2 }, // NW outer → SE quadrant fills toward road
            { dx: 6, dz: -6, theta: Math.PI }, // NE outer → SW quadrant
            { dx: -6, dz: 6, theta: 0 }, // SW outer → NE quadrant
            { dx: 6, dz: 6, theta: Math.PI / 2 }, // SE outer → NW quadrant
        ];
        for (let ix = -200; ix <= 200; ix += 40) {
            for (let iz = -200; iz <= 200; iz += 40) {
                for (const { dx, dz, theta } of corners) {
                    const cx = ix + dx;
                    const cz = iz + dz;
                    // Fill the corner gap with sidewalk colour, flush with sidewalk strips (y=0.021)
                    const fill = new THREE.Mesh(new THREE.CircleGeometry(2, 24, theta, Math.PI / 2), sidewalkMat);
                    fill.rotation.x = -Math.PI / 2;
                    fill.position.set(cx, 0.021, cz);
                    fill.receiveShadow = true;
                    this.scene.add(fill);
                    // Curb ring marks the curved inner edge (road-facing side), slightly raised
                    const curb = new THREE.Mesh(new THREE.RingGeometry(1.8, 2.0, 24, 1, theta, Math.PI / 2), curbMat);
                    curb.rotation.x = -Math.PI / 2;
                    curb.position.set(cx, 0.08, cz);
                    curb.receiveShadow = true;
                    this.scene.add(curb);
                }
            }
        }
    }
    onUpdate(cb) {
        this.updateCallbacks.push(cb);
    }
    // ── PS3-level graphics: sky gradient dome ──────────────────────────────
    createSkyDome() {
        const skyGeo = new THREE.SphereGeometry(800, 32, 16);
        skyGeo.scale(-1, 1, 1); // invert normals — visible from inside
        const skyMat = new THREE.ShaderMaterial({
            uniforms: {
                topColor: { value: new THREE.Color(0x4488CC) },
                bottomColor: { value: new THREE.Color(0xC5E8F5) },
                offset: { value: 100 },
                exponent: { value: 0.8 },
            },
            vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
            fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `,
            side: THREE.BackSide,
            depthWrite: false,
        });
        const sky = new THREE.Mesh(skyGeo, skyMat);
        this.scene.add(sky);
    }
    // ── PS3-level graphics: animated cloud clusters ─────────────────────────
    createClouds() {
        const cloudMat = new THREE.MeshLambertMaterial({
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.85,
        });
        for (let i = 0; i < 10; i++) {
            const group = new THREE.Group();
            const numPuffs = 3 + Math.floor(Math.random() * 4);
            for (let j = 0; j < numPuffs; j++) {
                const r = 8 + Math.random() * 12;
                const puff = new THREE.Mesh(new THREE.SphereGeometry(r, 7, 5), cloudMat);
                puff.position.set(j * 15 - numPuffs * 7 + (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 15);
                group.add(puff);
            }
            group.position.set((Math.random() - 0.5) * 600, 80 + Math.random() * 60, (Math.random() - 0.5) * 600);
            this.scene.add(group);
            this.clouds.push({ mesh: group, speed: 0.3 + Math.random() * 0.7 });
        }
    }
    // ── PS3-level graphics: ground puddles (wet sheen) ──────────────────────
    createPuddles() {
        const puddleMat = new THREE.MeshLambertMaterial({
            color: 0x8899AA,
            transparent: true,
            opacity: 0.35,
        });
        for (let i = 0; i < 20; i++) {
            const w = 2 + Math.random() * 4;
            const d = 1 + Math.random() * 2;
            const puddle = new THREE.Mesh(new THREE.PlaneGeometry(w, d), puddleMat);
            puddle.rotation.x = -Math.PI / 2;
            puddle.position.set((Math.random() - 0.5) * 300, 0.015, (Math.random() - 0.5) * 300);
            this.scene.add(puddle);
        }
    }
    // ────────────────────────────────────────────────────────────────────────
    // ROOFTOP DETAILS — AC units, tanks, antennas, dishes, HVAC ducts
    // ────────────────────────────────────────────────────────────────────────
    addRooftopDetails(g, w, d, h, sx, sz) {
        const r = this.seed(sx, sz, 200);
        // AC unit (rooftop box with vent strip)
        if (r > 0.3) {
            const acUnit = new THREE.Group();
            this.addBox(acUnit, 0x888880, 1.5, 0.6, 1.0, 0, 0, 0);
            this.addBox(acUnit, 0x666660, 1.5, 0.1, 0.8, 0, 0.35, 0.05);
            acUnit.position.set(w / 2 - 2, h + 0.3, d / 2 - 2);
            g.add(acUnit);
        }
        // Water tank — cylindrical wood, only on taller buildings
        if (r > 0.7 && h > 8) {
            const tank = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 1.8, 10), new THREE.MeshLambertMaterial({ color: 0x8B7355 }));
            tank.position.set(-w / 2 + 2, h + 0.9, 0);
            g.add(tank);
            // 4 support legs
            for (const [lx, lz] of [[-0.7, -0.7], [0.7, -0.7], [-0.7, 0.7], [0.7, 0.7]]) {
                const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.5, 4), new THREE.MeshLambertMaterial({ color: 0x555550 }));
                leg.position.set(-w / 2 + 2 + lx, h + 0.1, lz);
                g.add(leg);
            }
        }
        // Satellite dish
        if (r > 0.5 && r < 0.8) {
            const dish = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshLambertMaterial({ color: 0xCCCCCC }));
            dish.position.set(w / 2 - 1, h + 0.2, -d / 2 + 1);
            dish.rotation.x = -Math.PI / 4;
            g.add(dish);
        }
        // Rooftop antenna / mast with crossbar
        if (r < 0.4) {
            const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3, 4), new THREE.MeshLambertMaterial({ color: 0x444444 }));
            mast.position.set(0, h + 1.5, 0);
            g.add(mast);
            this.addBox(g, 0x444444, 2, 0.05, 0.05, 0, h + 2.5, 0);
        }
        // Rooftop HVAC duct
        if (r > 0.4 && r < 0.6) {
            this.addBox(g, 0x777770, 2, 0.4, 0.4, w / 4, h + 0.2, -d / 4);
        }
    }
    // ────────────────────────────────────────────────────────────────────────
    // STREET FURNITURE PRIMITIVES
    // ────────────────────────────────────────────────────────────────────────
    addHydrant(x, z) {
        const g = new THREE.Group();
        const mat = new THREE.MeshLambertMaterial({ color: 0xCC2222 });
        const topMat = new THREE.MeshLambertMaterial({ color: 0xAA1111 });
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.28, 0.6, 8), mat);
        body.position.set(0, 0.3, 0);
        g.add(body);
        const top = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.12, 8), topMat);
        top.position.set(0, 0.66, 0);
        g.add(top);
        // Side nubs
        for (const side of [-1, 1]) {
            const nub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.2, 6), mat);
            nub.rotation.z = Math.PI / 2;
            nub.position.set(side * 0.3, 0.3, 0);
            g.add(nub);
        }
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    addBin(x, z) {
        const g = new THREE.Group();
        const bodyMat = new THREE.MeshLambertMaterial({ color: 0x444444 });
        const lidMat = new THREE.MeshLambertMaterial({ color: 0x555555 });
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.7, 8), bodyMat);
        body.position.set(0, 0.35, 0);
        g.add(body);
        const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.08, 8), lidMat);
        lid.position.set(0, 0.74, 0);
        g.add(lid);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    addBollard(x, z) {
        const g = new THREE.Group();
        const mat = new THREE.MeshLambertMaterial({ color: 0x999999 });
        const base = new THREE.MeshLambertMaterial({ color: 0x777777 });
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6, 8), mat);
        post.position.set(0, 0.3, 0);
        g.add(post);
        const b = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.08, 8), base);
        b.position.set(0, 0.04, 0);
        g.add(b);
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    addBench(x, z, ry = 0) {
        const g = new THREE.Group();
        const wood = new THREE.MeshLambertMaterial({ color: 0x8B6040 });
        const metal = new THREE.MeshLambertMaterial({ color: 0x555555 });
        // Seat
        const seat = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 0.4), wood);
        seat.position.set(0, 0.45, 0);
        g.add(seat);
        // Leg supports
        for (const lx of [-0.5, 0.5]) {
            const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 0.4), metal);
            leg.position.set(lx, 0.2, 0);
            g.add(leg);
        }
        // Back rest
        const back = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 0.08), wood);
        back.position.set(0, 0.75, -0.16);
        g.add(back);
        g.rotation.y = ry;
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    addBusStop(x, z, ry = 0) {
        const g = new THREE.Group();
        const silverMat = new THREE.MeshLambertMaterial({ color: 0xCCCCCC });
        const blueMat = new THREE.MeshLambertMaterial({ color: 0x4466AA, transparent: true, opacity: 0.7 });
        // Vertical post
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.5, 6), silverMat);
        post.position.set(0, 1.75, 0);
        g.add(post);
        // Lean-to roof panel
        const roof = new THREE.Mesh(new THREE.BoxGeometry(2, 0.05, 0.8), blueMat);
        roof.position.set(0, 3.3, 0.4);
        g.add(roof);
        // Back wall panel
        const wall = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.5, 0.8), blueMat);
        wall.position.set(0, 2.0, 0);
        g.add(wall);
        g.rotation.y = ry;
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    addStreetLight(x, z, ry = 0, addPointLight = false) {
        const g = new THREE.Group();
        const blackMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
        const coneMat = new THREE.MeshLambertMaterial({
            color: 0xFFE8A0, transparent: true, opacity: 0.06,
        });
        // Pole
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 6, 6), blackMat);
        pole.position.set(0, 3, 0);
        g.add(pole);
        // Curved arm (angled box)
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 1.5), blackMat);
        arm.position.set(0, 6.0, -0.75);
        arm.rotation.x = -0.2;
        g.add(arm);
        // Light housing
        const housing = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.15, 0.3), blackMat);
        housing.position.set(0, 5.9, -1.4);
        g.add(housing);
        // Faint light cone
        const cone = new THREE.Mesh(new THREE.ConeGeometry(1.5, 3, 8, 1, true), coneMat);
        cone.rotation.x = Math.PI;
        cone.position.set(0, 4.4, -1.4);
        g.add(cone);
        g.rotation.y = ry;
        g.position.set(x, 0, z);
        this.scene.add(g);
        if (addPointLight) {
            const pt = new THREE.PointLight(0xFFE8A0, 0.8, 15);
            pt.position.set(x + Math.sin(ry + Math.PI) * 1.4, 5.9, z + Math.cos(ry + Math.PI) * 1.4);
            this.scene.add(pt);
        }
    }
    addTrafficLight(x, z, ry = 0) {
        const g = new THREE.Group();
        const blackMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
        // Pole
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 4.5, 6), blackMat);
        pole.position.set(0, 2.25, 0);
        g.add(pole);
        // Signal head box
        const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.4, 0.4), blackMat);
        head.position.set(0, 4.7, 0);
        g.add(head);
        // Red / Amber / Green discs
        const sigColours = [0xFF2200, 0xFF9900, 0x00CC44];
        for (let i = 0; i < 3; i++) {
            const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.08, 8), new THREE.MeshLambertMaterial({ color: sigColours[i] }));
            disc.rotation.x = Math.PI / 2;
            disc.position.set(0, 5.25 - i * 0.45, -0.21);
            g.add(disc);
        }
        g.rotation.y = ry;
        g.position.set(x, 0, z);
        this.scene.add(g);
    }
    // ────────────────────────────────────────────────────────────────────────
    // STREET LIGHTS along all road corridors
    // ────────────────────────────────────────────────────────────────────────
    createStreetLights() {
        const RANGE = 160;
        const GRID = 40;
        let lightCount = 0;
        const MAX_LIGHTS = 20;
        for (let road = -RANGE; road <= RANGE; road += GRID) {
            for (let pos = -RANGE; pos <= RANGE; pos += 20) {
                const distFromOrigin = Math.sqrt(road * road + pos * pos);
                const nearSpawn = distFromOrigin < 80;
                const addPL = nearSpawn && lightCount < MAX_LIGHTS;
                // Horizontal road lights (z = road, varying x = pos)
                const remX = ((pos % GRID) + GRID) % GRID;
                if (Math.min(remX, GRID - remX) > 6) {
                    this.addStreetLight(pos, road - 5.2, 0, addPL);
                    this.addStreetLight(pos, road + 5.2, Math.PI, addPL);
                    if (addPL)
                        lightCount += 2;
                }
                // Vertical road lights (x = road, varying z = pos)
                const remZ = ((pos % GRID) + GRID) % GRID;
                if (Math.min(remZ, GRID - remZ) > 6) {
                    this.addStreetLight(road + 5.2, pos, Math.PI / 2, addPL);
                    this.addStreetLight(road - 5.2, pos, -Math.PI / 2, addPL);
                    if (addPL)
                        lightCount += 2;
                }
                if (lightCount >= MAX_LIGHTS)
                    return;
            }
        }
    }
    // ────────────────────────────────────────────────────────────────────────
    // TRAFFIC LIGHTS at every road intersection
    // ────────────────────────────────────────────────────────────────────────
    createTrafficLights() {
        const RANGE = 160;
        const GRID = 40;
        const OFF = 5.2; // corner offset from intersection centre
        for (let ix = -RANGE; ix <= RANGE; ix += GRID) {
            for (let iz = -RANGE; iz <= RANGE; iz += GRID) {
                this.addTrafficLight(ix - OFF, iz - OFF, Math.PI / 4);
                this.addTrafficLight(ix + OFF, iz - OFF, -Math.PI / 4);
                this.addTrafficLight(ix - OFF, iz + OFF, 3 * Math.PI / 4);
                this.addTrafficLight(ix + OFF, iz + OFF, -3 * Math.PI / 4);
            }
        }
    }
    // ────────────────────────────────────────────────────────────────────────
    // CREATE ALL STREET FURNITURE — hydrants, bins, bollards, benches, bus stops
    // ────────────────────────────────────────────────────────────────────────
    createStreetFurniture() {
        const RANGE = 160;
        const GRID = 40;
        for (let road = -RANGE; road <= RANGE; road += GRID) {
            for (let pos = -RANGE; pos <= RANGE; pos += 20) {
                const r1 = this.seed(road, pos, 300);
                const r2 = this.seed(road, pos, 301);
                // Horizontal road furniture (z = road, x = pos)
                if (r1 > 0.4) {
                    const side = r1 > 0.7 ? 1 : -1;
                    const xOff = (this.seed(pos, road, 302) - 0.5) * 4;
                    const remX = ((pos % GRID) + GRID) % GRID;
                    if (Math.min(remX, GRID - remX) > 8) {
                        if (r2 < 0.30)
                            this.addHydrant(pos + xOff, road + side * 5.2);
                        else if (r2 < 0.50)
                            this.addBin(pos + xOff, road + side * 5.2);
                        else if (r2 < 0.65)
                            this.addBollard(pos + xOff, road + side * 5.2);
                        else if (r2 < 0.75)
                            this.addBench(pos + xOff, road + side * 5.2);
                    }
                }
                // Vertical road furniture (x = road, z = pos)
                const r3 = this.seed(pos, road, 303);
                const r4 = this.seed(pos, road, 304);
                if (r3 > 0.4) {
                    const side = r3 > 0.7 ? 1 : -1;
                    const zOff = (this.seed(road, pos, 305) - 0.5) * 4;
                    const remZ = ((pos % GRID) + GRID) % GRID;
                    if (Math.min(remZ, GRID - remZ) > 8) {
                        if (r4 < 0.30)
                            this.addHydrant(road + side * 5.2, pos + zOff);
                        else if (r4 < 0.50)
                            this.addBin(road + side * 5.2, pos + zOff);
                        else if (r4 < 0.65)
                            this.addBollard(road + side * 5.2, pos + zOff);
                        else if (r4 < 0.75)
                            this.addBench(road + side * 5.2, pos + zOff, Math.PI / 2);
                    }
                }
            }
        }
        // Bus stops — every ~4 blocks along main roads
        for (let road = -RANGE; road <= RANGE; road += GRID) {
            for (let pos = -RANGE; pos <= RANGE; pos += GRID * 4) {
                const remX = ((pos % GRID) + GRID) % GRID;
                if (Math.min(remX, GRID - remX) > 8) {
                    this.addBusStop(pos, road + 5.5, 0);
                }
                const remZ = ((pos % GRID) + GRID) % GRID;
                if (Math.min(remZ, GRID - remZ) > 8) {
                    this.addBusStop(road + 5.5, pos, Math.PI / 2);
                }
            }
        }
        // Street lights along all roads
        this.createStreetLights();
        // Traffic lights at every intersection
        this.createTrafficLights();
    }
    // ── Helper: add a glass box with emissive window glow ───────────────────
    addGlassBox(group, color, w, h, d, x, y, z) {
        const emissiveColor = Math.random() > 0.6
            ? new THREE.Color(0x223344)
            : new THREE.Color(0x112233);
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({
            color,
            emissive: emissiveColor,
            emissiveIntensity: Math.random() * 0.4,
        }));
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);
    }
    // ────────────────────────────────────────────────────────────────────────────
    // TOILET BLOCK — brutalist concrete public toilet, Richmond area (100, 60)
    // ────────────────────────────────────────────────────────────────────────────
    buildToiletBlock(x, z) {
        const group = new THREE.Group();
        // Main block: 10W × 3.5H × 8D
        this.addBox(group, 0xB0A898, 10, 3.5, 8, 0, 1.75, 0);
        // Roof overhang: 11W × 0.3H × 9D
        this.addBox(group, 0x999088, 11, 0.3, 9, 0, 3.65, 0);
        // Door openings (two stalls) — dark recessed areas front face (z=-4)
        this.addBox(group, 0x222220, 1.6, 2.4, 0.2, -2.2, 1.2, -4.05);
        this.addBox(group, 0x222220, 1.6, 2.4, 0.2, 2.2, 1.2, -4.05);
        // Tiled band: bright white stripe at waist height
        this.addBox(group, 0xE8E8E0, 10.1, 0.4, 8.1, 0, 1.8, 0);
        // "TOILETS" sign: flat board above doors
        this.addBox(group, 0x334455, 8, 0.8, 0.15, 0, 3.1, -4.05);
        this.addBox(group, 0xFFFFFF, 6, 0.2, 0.1, 0, 3.2, -4.03); // white stripe on sign
        // Tall signpost in front
        this.addCyl(group, 0x444440, 0.15, 0.15, 8, 6, 0, 4, -5.5);
        // Sign on top of pole: BoxGeometry 4×1.5×0.3
        this.addBox(group, 0x2196F3, 4, 1.5, 0.3, 0, 8.75, -5.5); // blue sign
        this.addBox(group, 0xFFFFFF, 3, 0.25, 0.1, 0, 9.0, -5.38); // white stripe
        this.addBox(group, 0xFFFFFF, 3, 0.25, 0.1, 0, 8.5, -5.38); // white stripe
        // 🚽 floating sphere above sign (blue tint, emissive)
        const blobMat = new THREE.MeshLambertMaterial({
            color: 0x64B5F6,
            emissive: new THREE.Color(0x1565C0),
            emissiveIntensity: 0.4,
        });
        const blob = new THREE.Mesh(new THREE.SphereGeometry(0.7, 8, 6), blobMat);
        blob.position.set(0, 10.5, -5.5);
        group.add(blob);
        group.position.set(x, 0, z);
        this.scene.add(group);
    }
    start() {
        const loop = (time) => {
            const dt = Math.min((time - this.lastTime) / 1000, 0.05);
            this.lastTime = time;
            for (const cb of this.updateCallbacks)
                cb(dt);
            // Drift clouds slowly westward, wrap around at ±350
            for (const cloud of this.clouds) {
                cloud.mesh.position.x -= cloud.speed * dt;
                if (cloud.mesh.position.x < -350)
                    cloud.mesh.position.x = 350;
            }
            this.composer.render();
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
}
