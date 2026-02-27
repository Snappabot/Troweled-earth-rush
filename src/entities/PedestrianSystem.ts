import * as THREE from 'three';

// ── Colours ──────────────────────────────────────────────────────────────────
const BODY_COLORS = [
  0xF4A261, 0xE76F51, 0x2A9D8F, 0x264653,
  0xE9C46A, 0xA8DADC, 0xFF6B6B, 0x6B4226,
];
const SKIN_COLOR  = 0xFFDBAC;
const ROOS_COLOR  = 0xC8A05A; // kangaroo tan
const VERONICA_BODY = 0xFF69B4; // hot pink
const VERONICA_HAIR = 0xFFD700; // blonde

const GRID   = 40;
const ROAD_W = 8;

const SPLAT_DIST      = 1.6;   // van distance to trigger splat
const YELL_DIST       = 14;    // Veronica yells at van
const SPLAT_REWARD    = 10_000; // sats per splat
const SPLAT_LIFE      = 14;    // seconds before goo fades
const RESPAWN_DELAY   = 10;    // seconds before entity reappears

// ── Types ─────────────────────────────────────────────────────────────────────
interface Pedestrian {
  group:        THREE.Group;
  axis:         'x' | 'z';
  roadPos:      number;
  segStart:     number;
  segEnd:       number;
  pos:          number;
  dir:          1 | -1;
  speed:        number;
  scattering:   boolean;
  scatterTimer: number;
  scatterDirX:  number;
  scatterDirZ:  number;
  walkCycle:    number;
  leftArm:      THREE.Mesh;
  rightArm:     THREE.Mesh;
  leftLeg:      THREE.Mesh;
  rightLeg:     THREE.Mesh;
  // splat state
  splatted:       boolean;
  respawnTimer:   number;
  spawnAxis:      'x' | 'z';  // remember original axis for respawn
  // Veronica-specific
  isVeronica:     boolean;
  veronicaYelled: boolean;
}

interface Kangaroo {
  group:          THREE.Group;
  axis:           'x' | 'z';
  roadPos:        number;
  segStart:       number;
  segEnd:         number;
  pos:            number;
  dir:            1 | -1;
  speed:          number;
  hopCycle:       number;
  dirChangeTimer: number;
  splatted:       boolean;
  respawnTimer:   number;
}

interface SplatDecal {
  mesh: THREE.Mesh;
  life: number;
}

// ── Build Helpers ─────────────────────────────────────────────────────────────

function buildPedestrian(bodyColor: number): {
  group: THREE.Group;
  leftArm: THREE.Mesh; rightArm: THREE.Mesh;
  leftLeg: THREE.Mesh; rightLeg: THREE.Mesh;
} {
  const group   = new THREE.Group();
  const bodyMat = new THREE.MeshLambertMaterial({ color: bodyColor });
  const skinMat = new THREE.MeshLambertMaterial({ color: SKIN_COLOR });

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.1, 7), bodyMat);
  body.position.set(0, 0.55, 0); group.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 6, 5), skinMat);
  head.position.set(0, 1.28, 0); group.add(head);

  const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.65, 0.15), bodyMat);
  leftArm.position.set(-0.45, 0.75, 0); leftArm.rotation.z = 0.15; group.add(leftArm);

  const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.65, 0.15), bodyMat);
  rightArm.position.set(0.45, 0.75, 0); rightArm.rotation.z = -0.15; group.add(rightArm);

  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), bodyMat);
  leftLeg.position.set(-0.18, 0, 0.05); group.add(leftLeg);

  const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), bodyMat);
  rightLeg.position.set(0.18, 0, -0.05); group.add(rightLeg);

  return { group, leftArm, rightArm, leftLeg, rightLeg };
}

/** Veronica — hot-pink dress, blonde hair, permanently angry stance */
function buildVeronica(): {
  group: THREE.Group;
  leftArm: THREE.Mesh; rightArm: THREE.Mesh;
  leftLeg: THREE.Mesh; rightLeg: THREE.Mesh;
} {
  const group    = new THREE.Group();
  const bodyMat  = new THREE.MeshLambertMaterial({ color: VERONICA_BODY });
  const skinMat  = new THREE.MeshLambertMaterial({ color: 0xFFD0A0 });
  const hairMat  = new THREE.MeshLambertMaterial({ color: VERONICA_HAIR });

  // Dress (wider cone for skirt)
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.6, 0.8, 8), bodyMat);
  skirt.position.set(0, 0.4, 0); group.add(skirt);

  // Torso
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.38, 0.55, 7), bodyMat);
  torso.position.set(0, 1.0, 0); group.add(torso);

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.30, 6, 5), skinMat);
  head.position.set(0, 1.45, 0); group.add(head);

  // Blonde hair bun
  const bun = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 5), hairMat);
  bun.position.set(0, 1.78, 0); group.add(bun);

  // Name tag floating above (tiny pink box)
  const tag = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.18, 0.04),
    new THREE.MeshBasicMaterial({ color: 0xFF1493 })
  );
  tag.position.set(0, 2.1, 0); group.add(tag);

  // Arms raised (wagging finger)
  const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.6, 0.15), bodyMat);
  leftArm.position.set(-0.48, 1.0, 0);
  leftArm.rotation.z = 0.6;
  group.add(leftArm);

  const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.6, 0.15), bodyMat);
  rightArm.position.set(0.48, 1.0, 0);
  rightArm.rotation.z = -0.8; // pointing / accusatory
  group.add(rightArm);

  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.4, 0.18), skinMat);
  leftLeg.position.set(-0.18, 0, 0.05); group.add(leftLeg);

  const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.4, 0.18), skinMat);
  rightLeg.position.set(0.18, 0, -0.05); group.add(rightLeg);

  return { group, leftArm, rightArm, leftLeg, rightLeg };
}

/** Kangaroo — tan body, big back legs, small arms, long ears, tail */
function buildKangaroo(): THREE.Group {
  const group   = new THREE.Group();
  const bodyMat = new THREE.MeshLambertMaterial({ color: ROOS_COLOR });
  const bellyMat= new THREE.MeshLambertMaterial({ color: 0xE8C88A });

  // Body (tilted forward)
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.38, 0.7, 4, 8), bodyMat);
  body.position.set(0, 1.1, 0.1);
  body.rotation.x = 0.35;
  group.add(body);

  // Belly patch
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.22, 5, 4), bellyMat);
  belly.position.set(0, 0.95, 0.38);
  group.add(belly);

  // Head (small, forward)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 6, 5), bodyMat);
  head.position.set(0, 1.78, 0.35);
  group.add(head);

  // Snout
  const snout = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.22), bellyMat);
  snout.position.set(0, 1.72, 0.58);
  group.add(snout);

  // Left ear
  const earGeo = new THREE.CylinderGeometry(0.04, 0.07, 0.38, 5);
  const leftEar = new THREE.Mesh(earGeo, bodyMat);
  leftEar.position.set(-0.14, 2.1, 0.28);
  leftEar.rotation.z = -0.2;
  group.add(leftEar);

  // Right ear
  const rightEar = new THREE.Mesh(earGeo, bodyMat);
  rightEar.position.set(0.14, 2.1, 0.28);
  rightEar.rotation.z = 0.2;
  group.add(rightEar);

  // Back legs (big, strong)
  const legGeo = new THREE.CapsuleGeometry(0.14, 0.55, 3, 6);
  const leftBackLeg = new THREE.Mesh(legGeo, bodyMat);
  leftBackLeg.position.set(-0.22, 0.55, -0.08);
  group.add(leftBackLeg);

  const rightBackLeg = new THREE.Mesh(legGeo, bodyMat);
  rightBackLeg.position.set(0.22, 0.55, -0.08);
  group.add(rightBackLeg);

  // Tail (thick, low)
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.06, 0.9, 5), bodyMat);
  tail.position.set(0, 0.7, -0.55);
  tail.rotation.x = -0.6;
  group.add(tail);

  // Small front arms
  const armGeo = new THREE.BoxGeometry(0.1, 0.35, 0.1);
  const lArm = new THREE.Mesh(armGeo, bodyMat);
  lArm.position.set(-0.25, 1.15, 0.32);
  lArm.rotation.z = 0.4;
  group.add(lArm);

  const rArm = new THREE.Mesh(armGeo, bodyMat);
  rArm.position.set(0.25, 1.15, 0.32);
  rArm.rotation.z = -0.4;
  group.add(rArm);

  return group;
}

/** Flat red goo splat decal */
function buildSplat(scene: THREE.Scene, x: number, z: number): THREE.Mesh {
  const geo = new THREE.CircleGeometry(0.9 + Math.random() * 0.4, 8);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xBB0000, transparent: true, opacity: 0.88, side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(x, 0.04, z);
  // Random rotation for variation
  mesh.rotation.z = Math.random() * Math.PI * 2;
  // Random scale blob
  const sx = 0.8 + Math.random() * 0.6;
  const sz = 0.8 + Math.random() * 0.6;
  mesh.scale.set(sx, sz, 1);
  scene.add(mesh);
  return mesh;
}

// ── Shared spawn helpers ──────────────────────────────────────────────────────
const roadLines: number[] = [];
for (let r = -200; r <= 200; r += 40) roadLines.push(r);

function randomRoadPos(): number {
  return roadLines[Math.floor(Math.random() * roadLines.length)];
}
function randomSidewalk(): number {
  const rp = randomRoadPos();
  return rp + (Math.random() > 0.5 ? 5 : -5);
}
function randomSegment(): { segStart: number; segEnd: number; pos: number } {
  const ixList: number[] = [];
  for (let ix = -240; ix < 240; ix += 40) ixList.push(ix);
  const ix = ixList[Math.floor(Math.random() * ixList.length)];
  const segStart = ix + ROAD_W / 2;
  const segEnd   = ix + GRID - ROAD_W / 2;
  const pos = segStart + Math.random() * (segEnd - segStart);
  return { segStart, segEnd, pos };
}

// ── Main class ────────────────────────────────────────────────────────────────
export class PedestrianSystem {
  private pedestrians: Pedestrian[] = [];
  private kangaroos:   Kangaroo[]   = [];
  private splats:      SplatDecal[] = [];
  private scene: THREE.Scene;

  /** Fired on splat: (satsEarned, entityName?) */
  onSplat: ((sats: number, name?: string) => void) | null = null;
  /** Fired when van gets close to Veronica and she yells */
  onVeronicaYell: (() => void) | null = null;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this._spawnPedestrians();
    this._spawnKangaroos();
  }

  // ── Spawn ───────────────────────────────────────────────────────────────────

  private _spawnPedestrians(): void {
    const spawnOne = (axis: 'x' | 'z', isVeronica = false): void => {
      const bodyColor = isVeronica
        ? VERONICA_BODY
        : BODY_COLORS[Math.floor(Math.random() * BODY_COLORS.length)];

      const built = isVeronica
        ? buildVeronica()
        : buildPedestrian(bodyColor);
      const { group, leftArm, rightArm, leftLeg, rightLeg } = built;

      const roadPos = randomSidewalk();
      const { segStart, segEnd, pos } = randomSegment();
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      const speed = isVeronica ? 3.5 : 2 + Math.random() * 1.5;

      const ped: Pedestrian = {
        group, axis, roadPos, segStart, segEnd, pos, dir, speed,
        scattering: false, scatterTimer: 0, scatterDirX: 0, scatterDirZ: 0,
        walkCycle: Math.random() * Math.PI * 2,
        leftArm, rightArm, leftLeg, rightLeg,
        splatted: false, respawnTimer: 0, spawnAxis: axis,
        isVeronica, veronicaYelled: false,
      };

      this.pedestrians.push(ped);
      this.scene.add(group);
      this._applyPedPosition(ped);
      this._applyPedFacing(ped);
    };

    for (let i = 0; i < 20; i++) spawnOne('x');
    for (let i = 0; i < 20; i++) spawnOne('z');
    // Veronica — always on a z-axis sidewalk so she's visible
    spawnOne('z', true);
  }

  private _spawnKangaroos(): void {
    for (let i = 0; i < 6; i++) {
      const group = buildKangaroo();
      // Roos wander on sidewalks & verges
      const axis: 'x' | 'z' = Math.random() > 0.5 ? 'x' : 'z';
      const roadPos = randomSidewalk();
      const { segStart, segEnd, pos } = randomSegment();
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      const speed = 4 + Math.random() * 3;

      const kang: Kangaroo = {
        group, axis, roadPos, segStart, segEnd, pos, dir, speed,
        hopCycle: Math.random() * Math.PI * 2,
        dirChangeTimer: 2 + Math.random() * 4,
        splatted: false, respawnTimer: 0,
      };

      this.kangaroos.push(kang);
      this.scene.add(group);
      this._applyKangPosition(kang);
    }
  }

  // ── Position helpers ────────────────────────────────────────────────────────

  private _applyPedPosition(ped: Pedestrian): void {
    if (ped.axis === 'x') {
      ped.group.position.set(ped.pos, 0, ped.roadPos);
    } else {
      ped.group.position.set(ped.roadPos, 0, ped.pos);
    }
  }

  private _applyPedFacing(ped: Pedestrian): void {
    if (ped.scattering) {
      ped.group.rotation.y = Math.atan2(ped.scatterDirX, ped.scatterDirZ);
      return;
    }
    if (ped.axis === 'x') {
      ped.group.rotation.y = ped.dir === 1 ? -Math.PI / 2 : Math.PI / 2;
    } else {
      ped.group.rotation.y = ped.dir === 1 ? Math.PI : 0;
    }
  }

  private _applyKangPosition(k: Kangaroo): void {
    if (k.axis === 'x') {
      k.group.position.set(k.pos, 0, k.roadPos);
    } else {
      k.group.position.set(k.roadPos, 0, k.pos);
    }
  }

  // ── Splat ───────────────────────────────────────────────────────────────────

  private _splatEntity(x: number, z: number, group: THREE.Group, name?: string): void {
    group.visible = false;
    const splatMesh = buildSplat(this.scene, x, z);
    this.splats.push({ mesh: splatMesh, life: SPLAT_LIFE });
    this.onSplat?.(SPLAT_REWARD, name);
  }

  // ── Respawn helpers ─────────────────────────────────────────────────────────

  private _respawnPed(ped: Pedestrian): void {
    const roadPos = randomSidewalk();
    const { segStart, segEnd, pos } = randomSegment();
    ped.roadPos   = roadPos;
    ped.segStart  = segStart;
    ped.segEnd    = segEnd;
    ped.pos       = pos;
    ped.dir       = Math.random() > 0.5 ? 1 : -1;
    ped.splatted  = false;
    ped.scattering = false;
    ped.veronicaYelled = false;
    this._applyPedPosition(ped);
    ped.group.visible = true;
  }

  private _respawnKang(k: Kangaroo): void {
    const roadPos = randomSidewalk();
    const { segStart, segEnd, pos } = randomSegment();
    k.roadPos  = roadPos;
    k.segStart = segStart;
    k.segEnd   = segEnd;
    k.pos      = pos;
    k.dir      = Math.random() > 0.5 ? 1 : -1;
    k.splatted = false;
    this._applyKangPosition(k);
    k.group.visible = true;
  }

  // ── Update ──────────────────────────────────────────────────────────────────

  update(dt: number, vanX: number, vanZ: number): void {
    // ── Pedestrians ────────────────────────────────────────────────────────
    for (const ped of this.pedestrians) {
      // Respawn countdown
      if (ped.splatted) {
        ped.respawnTimer -= dt;
        if (ped.respawnTimer <= 0) this._respawnPed(ped);
        continue;
      }

      const px = ped.group.position.x;
      const pz = ped.group.position.z;
      const dx = px - vanX;
      const dz = pz - vanZ;
      const dist = Math.sqrt(dx * dx + dz * dz);

      // Veronica yell
      if (ped.isVeronica && !ped.veronicaYelled && dist < YELL_DIST) {
        ped.veronicaYelled = true;
        this.onVeronicaYell?.();
      }

      // Splat check
      if (dist < SPLAT_DIST) {
        ped.splatted = true;
        ped.respawnTimer = RESPAWN_DELAY + Math.random() * 5;
        this._splatEntity(px, pz, ped.group, ped.isVeronica ? 'veronica' : undefined);
        continue;
      }

      // Scatter when van is close
      if (!ped.scattering && dist < 7) {
        ped.scattering = true;
        ped.scatterTimer = 2.5;
        const len = Math.max(dist, 0.01);
        ped.scatterDirX = dx / len;
        ped.scatterDirZ = dz / len;
      }

      if (ped.scattering) {
        ped.group.position.x += ped.scatterDirX * 12 * dt;
        ped.group.position.z += ped.scatterDirZ * 12 * dt;
        ped.scatterTimer -= dt;
        if (ped.scatterTimer <= 0) {
          ped.scattering = false;
          if (ped.axis === 'x') {
            ped.pos = Math.max(ped.segStart, Math.min(ped.segEnd, ped.group.position.x));
          } else {
            ped.pos = Math.max(ped.segStart, Math.min(ped.segEnd, ped.group.position.z));
          }
          this._applyPedPosition(ped);
        }
      } else {
        ped.pos += ped.dir * ped.speed * dt;
        if (ped.pos >= ped.segEnd)   { ped.pos = ped.segEnd;   ped.dir = -1; }
        else if (ped.pos <= ped.segStart) { ped.pos = ped.segStart; ped.dir = 1; }
        this._applyPedPosition(ped);
      }

      this._applyPedFacing(ped);

      // Walk cycle
      const effSpeed = ped.scattering ? 12 : ped.speed;
      ped.walkCycle += effSpeed * dt * 2;
      const swing = Math.sin(ped.walkCycle);
      ped.leftArm.rotation.z  =  swing * 0.4 + 0.15;
      ped.rightArm.rotation.z = -swing * 0.4 - 0.15;
      ped.leftLeg.rotation.x  =  swing * 0.5;
      ped.rightLeg.rotation.x = -swing * 0.5;
    }

    // ── Kangaroos ───────────────────────────────────────────────────────────
    for (const k of this.kangaroos) {
      if (k.splatted) {
        k.respawnTimer -= dt;
        if (k.respawnTimer <= 0) this._respawnKang(k);
        continue;
      }

      const kx = k.group.position.x;
      const kz = k.group.position.z;
      const dx = kx - vanX;
      const dz = kz - vanZ;
      const dist = Math.sqrt(dx * dx + dz * dz);

      // Splat
      if (dist < SPLAT_DIST + 0.3) {  // roos are a bit bigger
        k.splatted = true;
        k.respawnTimer = RESPAWN_DELAY + Math.random() * 8;
        this._splatEntity(kx, kz, k.group, 'kangaroo');
        continue;
      }

      // Random direction changes (roos are erratic)
      k.dirChangeTimer -= dt;
      if (k.dirChangeTimer <= 0) {
        k.dir = (Math.random() > 0.5 ? 1 : -1) as 1 | -1;
        k.dirChangeTimer = 1.5 + Math.random() * 3;
      }

      // Move
      k.pos += k.dir * k.speed * dt;
      if (k.pos >= k.segEnd)   { k.pos = k.segEnd;   k.dir = -1; }
      else if (k.pos <= k.segStart) { k.pos = k.segStart; k.dir = 1; }
      this._applyKangPosition(k);

      // Facing direction
      if (k.axis === 'x') {
        k.group.rotation.y = k.dir === 1 ? -Math.PI / 2 : Math.PI / 2;
      } else {
        k.group.rotation.y = k.dir === 1 ? Math.PI : 0;
      }

      // Hop animation — Y bounce
      k.hopCycle += k.speed * dt * 3.5;
      const hop = Math.max(0, Math.sin(k.hopCycle)) * 0.55;
      k.group.position.y = hop;
    }

    // ── Splat decals fade ───────────────────────────────────────────────────
    for (let i = this.splats.length - 1; i >= 0; i--) {
      const s = this.splats[i];
      s.life -= dt;
      if (s.life <= 0) {
        this.scene.remove(s.mesh);
        this.splats.splice(i, 1);
      } else if (s.life < 3) {
        // Fade out last 3 seconds
        (s.mesh.material as THREE.MeshBasicMaterial).opacity = (s.life / 3) * 0.88;
      }
    }
  }
}
