import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const GRID   = 40;
const ROAD_W = 8;
const RANGE  = 240;
const SCALE  = 0.82;

// All vehicle slugs available for parked cars (no ambulance/police — those are traffic)
const PARKED_SLUGS = ['sedan','hatchback','suv','pickup','muscle','sports','taxi'];

interface ParkedSpec { x: number; z: number; rotY: number; slug: string }

function seededRand(x: number, z: number, seed: number): number {
  const s = Math.sin(x * 127.1 + z * 311.7 + seed * 74.3) * 43758.5453;
  return s - Math.floor(s);
}

function posModulo(v: number, m: number): number {
  return ((Math.round(v) % m) + m) % m;
}

function isNearRoad(px: number, pz: number): boolean {
  const xm = posModulo(px, GRID), zm = posModulo(pz, GRID);
  const thresh = ROAD_W / 2 + 2;
  const nearX = xm < thresh || xm > GRID - thresh;
  const nearZ = zm < thresh || zm > GRID - thresh;
  return nearX || nearZ;
}

function buildSpecs(): ParkedSpec[] {
  const specs: ParkedSpec[] = [];

  // Along horizontal roads (constant Z, cars parked to sides, facing along X)
  for (let z = -RANGE; z <= RANGE; z += GRID) {
    for (let x = -RANGE + 8; x < RANGE; x += 17) {
      const cr = seededRand(x, z, 60);
      if (cr < 0.45) continue;
      const side = cr > 0.72 ? 1 : -1;
      const px = x + (seededRand(x, z, 61) - 0.5) * 4;
      const pz = z + side * (ROAD_W / 2 + 2.0);
      if (isNearRoad(px, pz)) continue;
      const slug = PARKED_SLUGS[Math.floor(seededRand(x, z, 64) * PARKED_SLUGS.length)];
      // rotY: car parked parallel to X road → car length along X → rotate -PI/2 or PI/2
      const rotY = seededRand(x, z, 65) > 0.5 ? Math.PI / 2 : -Math.PI / 2;
      specs.push({ x: px, z: pz, rotY, slug });
    }
  }

  // Along vertical roads (constant X, cars parked to sides, facing along Z)
  for (let x = -RANGE; x <= RANGE; x += GRID) {
    for (let z = -RANGE + 8; z < RANGE; z += 17) {
      const cr = seededRand(x, z, 62);
      if (cr < 0.45) continue;
      const side = cr > 0.72 ? 1 : -1;
      const px = x + side * (ROAD_W / 2 + 2.0);
      const pz = z + (seededRand(x, z, 63) - 0.5) * 4;
      if (isNearRoad(px, pz)) continue;
      const slug = PARKED_SLUGS[Math.floor(seededRand(x, z, 66) * PARKED_SLUGS.length)];
      // rotY: car parked parallel to Z road → car length along Z → rotate 0 or PI
      const rotY = seededRand(x, z, 67) > 0.5 ? 0 : Math.PI;
      specs.push({ x: px, z: pz, rotY, slug });
    }
  }

  return specs;
}

export class ParkedCarSystem {
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this._load();
  }

  private _load(): void {
    const base = (import.meta as any).env.BASE_URL as string;
    const loader = new GLTFLoader();
    const specs = buildSpecs();

    // Group specs by slug to minimise loader calls
    const bySlug = new Map<string, ParkedSpec[]>();
    for (const spec of specs) {
      if (!bySlug.has(spec.slug)) bySlug.set(spec.slug, []);
      bySlug.get(spec.slug)!.push(spec);
    }

    for (const [slug, list] of bySlug) {
      loader.load(`${base}assets/traffic/${slug}.glb`, (gltf) => {
        const tmpl = gltf.scene;

        // Safety upright check
        tmpl.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(tmpl);
        const size = box.getSize(new THREE.Vector3());
        if (size.y < 0.3) {
          tmpl.rotation.x = -Math.PI / 2;
          tmpl.updateMatrixWorld(true);
          const b2 = new THREE.Box3().setFromObject(tmpl);
          tmpl.position.y = -b2.min.y;
        }

        tmpl.traverse((child) => {
          if (child instanceof THREE.Mesh) { child.castShadow = true; child.receiveShadow = true; }
        });

        for (const spec of list) {
          const car = tmpl.clone(true);
          car.scale.setScalar(SCALE);
          car.rotation.y = spec.rotY;
          car.position.set(spec.x, 0, spec.z);
          this.scene.add(car);
        }
      });
    }
  }
}
