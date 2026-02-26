import * as THREE from 'three';
import { RivalCrew, RIVAL_CREWS } from '../data/RivalCrews';

export interface RivalState {
  crew: RivalCrew;
  progress: number;       // 0.0 → 1.0 (full mission)
  speedMult: number;      // randomized per-run variation ±20%
  vanPos: THREE.Vector3;  // current world position of rival van
  arrived: boolean;       // has reached job site
  vanMesh?: THREE.Object3D;
  startPos: THREE.Vector3;
  parkOffset: THREE.Vector3;
}

// Fixed start points spread around the city
const RIVAL_START_POINTS = [
  new THREE.Vector3(60,  0, -60),  // east side
  new THREE.Vector3(-40, 0, 120),  // north side
  new THREE.Vector3(120, 0, 60),   // far east
];

function makeRivalVan(color: string): THREE.Group {
  const g = new THREE.Group();
  const col = new THREE.Color(color);

  // Body
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 1.6, 4.8),
    new THREE.MeshLambertMaterial({ color: col })
  );
  body.position.y = 1.2;
  g.add(body);

  // Roof
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 0.6, 3.0),
    new THREE.MeshLambertMaterial({ color: col })
  );
  roof.position.set(0, 2.2, -0.3);
  g.add(roof);

  // Windshield (dark blue)
  const ws = new THREE.Mesh(
    new THREE.BoxGeometry(2.0, 0.7, 0.1),
    new THREE.MeshLambertMaterial({ color: 0x223344 })
  );
  ws.position.set(0, 1.9, -2.35);
  g.add(ws);

  // Wheels x4
  for (const [wx, wz] of [[-1.3, -1.4], [-1.3, 1.4], [1.3, -1.4], [1.3, 1.4]]) {
    const w = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.38, 0.25, 10),
      new THREE.MeshLambertMaterial({ color: 0x111111 })
    );
    w.rotation.z = Math.PI / 2;
    w.position.set(wx, 0.38, wz);
    g.add(w);
  }

  return g;
}

export class RivalSystem {
  private rivals: RivalState[] = [];
  private jobSitePos: THREE.Vector3 = new THREE.Vector3();
  private active = false;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  /** Call when job starts — picks 3 random rivals, spawns vans */
  start(jobSitePos: { x: number; z: number }, rivalCrews?: RivalCrew[]): void {
    this.stop(); // clean up any previous run

    this.jobSitePos.set(jobSitePos.x, 0, jobSitePos.z);
    this.active = true;

    // Pick 1 rival — 1v1 to match mission structure
    let pool: RivalCrew[];
    if (rivalCrews && rivalCrews.length >= 1) {
      pool = rivalCrews.slice(0, 1);
    } else {
      const shuffled = [...RIVAL_CREWS].sort(() => Math.random() - 0.5);
      pool = shuffled.slice(0, 1);
    }

    for (let i = 0; i < 1; i++) {
      const crew = pool[i];
      const startPos = RIVAL_START_POINTS[0].clone();

      // Park offset: side of job site
      const parkOffset = new THREE.Vector3(5, 0, 3);

      // Speed multiplier: ±20% random variation
      const speedMult = 0.8 + Math.random() * 0.4;

      const vanMesh = makeRivalVan(crew.color);
      vanMesh.position.copy(startPos);
      this.scene.add(vanMesh);

      this.rivals.push({
        crew,
        progress: 0,
        speedMult,
        vanPos: startPos.clone(),
        arrived: false,
        vanMesh,
        startPos,
        parkOffset,
      });
    }
  }

  /** Call every frame with delta time in seconds */
  update(dt: number): void {
    if (!this.active) return;

    for (let i = 0; i < this.rivals.length; i++) {
      const rival = this.rivals[i];

      // Advance progress
      rival.progress = Math.min(1.0, rival.progress + dt * rival.crew.speed * rival.speedMult * 0.04);

      // Arrived state
      rival.arrived = rival.progress >= 0.45;

      if (rival.vanMesh) {
        let targetPos: THREE.Vector3;

        if (!rival.arrived) {
          // Moving toward job site: interpolate based on progress / 0.45
          const t = Math.min(rival.progress / 0.45, 1.0);
          targetPos = new THREE.Vector3().lerpVectors(rival.startPos, this.jobSitePos, t);

          // Face direction of travel
          const dir = new THREE.Vector3().subVectors(this.jobSitePos, rival.startPos).normalize();
          if (dir.lengthSq() > 0) {
            const angle = Math.atan2(dir.x, dir.z);
            rival.vanMesh.rotation.y = angle + Math.PI / 2;
          }
        } else {
          // Parked near job site
          targetPos = new THREE.Vector3(
            this.jobSitePos.x + rival.parkOffset.x,
            0,
            this.jobSitePos.z + rival.parkOffset.z + 3
          );
        }

        rival.vanMesh.position.copy(targetPos);
        rival.vanPos.copy(targetPos);
      }
    }
  }

  /** Call when job ends/cancels — removes vans from scene */
  stop(): void {
    for (const rival of this.rivals) {
      if (rival.vanMesh) {
        this.scene.remove(rival.vanMesh);
        rival.vanMesh = undefined;
      }
    }
    this.rivals = [];
    this.active = false;
  }

  /** Returns data for HUD race strip */
  getRaceData(): Array<{ name: string; color: string; progress: number; arrived: boolean }> {
    return this.rivals.map(r => ({
      name:    r.crew.name,
      color:   r.crew.color,
      progress: r.progress,
      arrived: r.arrived,
    }));
  }

  /** Whether the rival system is currently running */
  isActive(): boolean {
    return this.active;
  }
}
