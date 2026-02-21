import * as THREE from 'three';

const BODY_COLORS = [
  0xF4A261, 0xE76F51, 0x2A9D8F, 0x264653,
  0xE9C46A, 0xA8DADC, 0xFF6B6B, 0x6B4226,
];
const SKIN_COLOR = 0xFFDBAC;
const GRID = 40;
const ROAD_W = 8;

interface Pedestrian {
  group: THREE.Group;
  axis: 'x' | 'z';
  roadPos: number;
  segStart: number;
  segEnd: number;
  pos: number;
  dir: 1 | -1;
  speed: number;
  scattering: boolean;
  scatterTimer: number;
  scatterDirX: number;
  scatterDirZ: number;
  walkCycle: number;
  // refs to animated limbs
  leftArm: THREE.Mesh;
  rightArm: THREE.Mesh;
  leftLeg: THREE.Mesh;
  rightLeg: THREE.Mesh;
}

function buildPedestrian(bodyColor: number): {
  group: THREE.Group;
  leftArm: THREE.Mesh;
  rightArm: THREE.Mesh;
  leftLeg: THREE.Mesh;
  rightLeg: THREE.Mesh;
} {
  const group = new THREE.Group();

  const bodyMat = new THREE.MeshLambertMaterial({ color: bodyColor });
  const skinMat = new THREE.MeshLambertMaterial({ color: SKIN_COLOR });
  const legMat  = new THREE.MeshLambertMaterial({ color: bodyColor });

  // Body
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.1, 7), bodyMat);
  body.position.set(0, 0.55, 0);
  group.add(body);

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 6, 5), skinMat);
  head.position.set(0, 1.28, 0);
  group.add(head);

  // Left arm
  const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.65, 0.15), bodyMat);
  leftArm.position.set(-0.45, 0.75, 0);
  leftArm.rotation.z = 0.15;
  group.add(leftArm);

  // Right arm
  const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.65, 0.15), bodyMat);
  rightArm.position.set(0.45, 0.75, 0);
  rightArm.rotation.z = -0.15;
  group.add(rightArm);

  // Left leg
  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), legMat);
  leftLeg.position.set(-0.18, 0.0, 0.05);
  group.add(leftLeg);

  // Right leg
  const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), legMat);
  rightLeg.position.set(0.18, 0.0, -0.05);
  group.add(rightLeg);

  return { group, leftArm, rightArm, leftLeg, rightLeg };
}

export class PedestrianSystem {
  private pedestrians: Pedestrian[] = [];
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this._spawn();
  }

  private _spawn(): void {
    // Road lines: multiples of 40 from -200 to 200
    const roadLines: number[] = [];
    for (let r = -200; r <= 200; r += 40) roadLines.push(r);

    const spawnPed = (axis: 'x' | 'z') => {
      const bodyColor = BODY_COLORS[Math.floor(Math.random() * BODY_COLORS.length)];
      const { group, leftArm, rightArm, leftLeg, rightLeg } = buildPedestrian(bodyColor);

      const roadPos = roadLines[Math.floor(Math.random() * roadLines.length)];
      // Sidewalk position = roadPos ± (ROAD_W/2 + 1) = roadPos ± 5
      const sidewalkOffset = Math.random() > 0.5 ? 5 : -5;
      const sidewalkPos = roadPos + sidewalkOffset;

      // Segment: pick a random block start. Block gaps are between intersections.
      // segStart = ix + ROAD_W/2, segEnd = ix + GRID - ROAD_W/2
      // For random ix in roadLines (which represent block starts in groups of 40)
      const ixList: number[] = [];
      for (let ix = -240; ix < 240; ix += 40) ixList.push(ix);
      const ix = ixList[Math.floor(Math.random() * ixList.length)];
      const segStart = ix + ROAD_W / 2;   // ix + 4
      const segEnd   = ix + GRID - ROAD_W / 2; // ix + 36

      const pos = segStart + Math.random() * (segEnd - segStart);
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      const speed = 2 + Math.random() * 1.5;

      const ped: Pedestrian = {
        group, axis,
        roadPos: sidewalkPos,
        segStart, segEnd,
        pos, dir, speed,
        scattering: false,
        scatterTimer: 0,
        scatterDirX: 0,
        scatterDirZ: 0,
        walkCycle: Math.random() * Math.PI * 2,
        leftArm, rightArm, leftLeg, rightLeg,
      };

      this.pedestrians.push(ped);
      this.scene.add(group);
      this._applyPosition(ped);
      this._applyFacing(ped);
    };

    for (let i = 0; i < 20; i++) spawnPed('x'); // horizontal sidewalks (travel along X)
    for (let i = 0; i < 20; i++) spawnPed('z'); // vertical sidewalks (travel along Z)
  }

  private _applyPosition(ped: Pedestrian): void {
    if (ped.axis === 'x') {
      ped.group.position.set(ped.pos, 0, ped.roadPos);
    } else {
      ped.group.position.set(ped.roadPos, 0, ped.pos);
    }
  }

  private _applyFacing(ped: Pedestrian): void {
    if (ped.scattering) {
      // Face scatter direction
      ped.group.rotation.y = Math.atan2(ped.scatterDirX, ped.scatterDirZ);
      return;
    }
    if (ped.axis === 'x') {
      ped.group.rotation.y = ped.dir === 1 ? -Math.PI / 2 : Math.PI / 2;
    } else {
      ped.group.rotation.y = ped.dir === 1 ? Math.PI : 0;
    }
  }

  update(dt: number, vanX: number, vanZ: number): void {
    for (const ped of this.pedestrians) {
      const px = ped.group.position.x;
      const pz = ped.group.position.z;
      const dx = px - vanX;
      const dz = pz - vanZ;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (!ped.scattering && dist < 7) {
        // Enter scatter mode
        ped.scattering = true;
        ped.scatterTimer = 2.5;
        const len = Math.max(dist, 0.01);
        ped.scatterDirX = dx / len;
        ped.scatterDirZ = dz / len;
      }

      if (ped.scattering) {
        // Move away fast
        ped.group.position.x += ped.scatterDirX * 12 * dt;
        ped.group.position.z += ped.scatterDirZ * 12 * dt;
        ped.scatterTimer -= dt;

        if (ped.scatterTimer <= 0) {
          ped.scattering = false;
          // Snap back to sidewalk row/column
          if (ped.axis === 'x') {
            ped.pos = Math.max(ped.segStart, Math.min(ped.segEnd, ped.group.position.x));
          } else {
            ped.pos = Math.max(ped.segStart, Math.min(ped.segEnd, ped.group.position.z));
          }
          this._applyPosition(ped);
        }
      } else {
        // Normal patrol
        ped.pos += ped.dir * ped.speed * dt;
        if (ped.pos >= ped.segEnd) {
          ped.pos = ped.segEnd;
          ped.dir = -1;
        } else if (ped.pos <= ped.segStart) {
          ped.pos = ped.segStart;
          ped.dir = 1;
        }
        this._applyPosition(ped);
      }

      this._applyFacing(ped);

      // Walk cycle
      const effSpeed = ped.scattering ? 12 : ped.speed;
      ped.walkCycle += effSpeed * dt * 2;

      const swing = Math.sin(ped.walkCycle);
      ped.leftArm.rotation.z  =  swing * 0.4 + 0.15;
      ped.rightArm.rotation.z = -swing * 0.4 - 0.15;
      ped.leftLeg.rotation.x  =  swing * 0.5;
      ped.rightLeg.rotation.x = -swing * 0.5;
    }
  }
}
