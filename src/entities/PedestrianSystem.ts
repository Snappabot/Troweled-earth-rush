import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CollisionWorld } from '../core/CollisionWorld';

// ── Colours ──────────────────────────────────────────────────────────────────
const BODY_COLORS = [
  // Shirts
  0xF4A261, 0xE76F51, 0x2A9D8F, 0x264653,
  0xE9C46A, 0xA8DADC, 0xFF6B6B, 0x6B4226,
  0x3D5A80, 0x98C1D9, 0xE84855, 0x2B2D42,
  0x8D99AE, 0xEF233C, 0x06D6A0, 0xFFB703,
  0x023047, 0xFB8500, 0x219EBC, 0x8ECAE6,
];
const SKIN_COLOR  = 0xFFDBAC;
const ROOS_COLOR  = 0xC8A05A; // kangaroo tan
const BORONICA_BODY = 0xFF69B4; // hot pink
const BORONICA_HAIR = 0xFFD700; // blonde

const GRID   = 40;
const ROAD_W = 8;

// ── NPC population caps (tune here for performance) ───────────────────────────
// Mobile safe ceiling: ~80 total NPCs. Each GLB NPC ≈ 10 draw calls.
// Current: PED_COUNT×2 + 1 Boronica + KANGAROO_COUNT + 10 hit chars
const PED_COUNT      = 30;  // per axis (x + z) = 60 regular peds total
const KANGAROO_COUNT = 6;

const SPLAT_DIST      = 1.6;   // van distance to trigger splat
const YELL_DIST       = 14;    // Boronica yells at van
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
  // Boronica-specific
  isBoronica:     boolean;
  boronicaYelled: boolean;
  mixer?:         THREE.AnimationMixer;
  isGLB?:         boolean;
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

// ── Hit Characters ─────────────────────────────────────────────────────────────
interface HitCharDef {
  charId: string;
  bodyColor: number;
  accentColor: number;
  preLine: string;
  splatToast: string;
}

const HIT_CHAR_DEFS: HitCharDef[] = [
  { charId: 'trump',        bodyColor: 0xE2834F, accentColor: 0xFFD700, preLine: 'I love a good deal',                              splatToast: 'Hitting me with the car was not a good deal 💸 +10K!' },
  { charId: 'elon',         bodyColor: 0x555566, accentColor: 0x222222, preLine: 'To the moon! ...oh.',                             splatToast: '🚀 Elon re-enters the atmosphere harder than expected. +10K!' },
  { charId: 'karen',        bodyColor: 0xFFB6C1, accentColor: 0xFFD700, preLine: 'I want to speak to the driver!',                  splatToast: '📞 Karen has been spoken to. +10K!' },
  { charId: 'flatEarther',  bodyColor: 0x7B5E42, accentColor: 0xCCCCCC, preLine: 'The van is a PSYOP!',                             splatToast: '🌍 Flat Earther went ROUND. +10K!' },
  { charId: 'antiVaxxer',   bodyColor: 0x4CAF50, accentColor: 0x7B3F00, preLine: 'Essential oils will protect me!',                 splatToast: '💉 Turns out they did not. +10K!' },
  { charId: 'cryptoBro',    bodyColor: 0xFF4500, accentColor: 0xFF8800, preLine: 'This is bullish for crypto!',                     splatToast: '📉 Market correction. +10K!' },
  { charId: 'zuckerberg',   bodyColor: 0x888888, accentColor: 0xFFDBAC, preLine: 'I am a human. I enjoy human activities.',         splatToast: '🤖 Zuck.exe has stopped responding. +10K!' },
  { charId: 'alexJones',    bodyColor: 0xFF4444, accentColor: 0xCC2222, preLine: 'THE VAN IS MAKING THE PEDESTRIANS GAY!',          splatToast: '📢 Infowars: Van confirmed real. +10K!' },
  { charId: 'kanyeWest',    bodyColor: 0x111111, accentColor: 0x222222, preLine: 'I am a genius and the van knows it.',             splatToast: '🎤 The mic has been dropped. Permanently. +10K!' },
  { charId: 'conspiracyGuy',bodyColor: 0x444444, accentColor: 0xFFFFFF, preLine: 'They are all connected, man. The van... the plaster...', splatToast: '🕵️ He connected with the van. +10K!' },
];

// Spawn positions for hit chars — spread across the map
const HIT_CHAR_POSITIONS: { x: number; z: number }[] = [
  { x:  60, z:  60 },
  { x: -60, z:  60 },
  { x: 120, z: -60 },
  { x:-120, z: -60 },
  { x:  60, z:-120 },
  { x: -60, z: 120 },
  { x: 150, z:   0 },
  { x:-150, z:   0 },
  { x:   0, z: 150 },
  { x:   0, z:-150 },
];

interface HitCharacter {
  group:        THREE.Group;
  charId:       string;
  preLine:      string;
  splatToast:   string;
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
  splatted:       boolean;
  respawnTimer:   number;
  nearbySpoken:   boolean;
  mixer?:         THREE.AnimationMixer;
}

// ── Build Helpers ─────────────────────────────────────────────────────────────

const SKIN_TONES = [0xFFDBAC, 0xF1C27D, 0xE0AC69, 0xC68642, 0x8D5524, 0xFFCBA4, 0xD4A880, 0xB07850];
const PANT_COLORS = [0x2A2A2A, 0x3A5080, 0x222230, 0x4A3020, 0x1A3A1A, 0x3A2A40, 0x50402A, 0x1A2A3A];

function buildPedestrian(bodyColor: number): {
  group: THREE.Group;
  leftArm: THREE.Mesh; rightArm: THREE.Mesh;
  leftLeg: THREE.Mesh; rightLeg: THREE.Mesh;
} {
  const group   = new THREE.Group();
  const bodyMat = new THREE.MeshLambertMaterial({ color: bodyColor });
  const skinColor = SKIN_TONES[Math.floor(Math.random() * SKIN_TONES.length)];
  const pantColor = PANT_COLORS[Math.floor(Math.random() * PANT_COLORS.length)];
  const skinMat = new THREE.MeshLambertMaterial({ color: skinColor });
  const pantMat = new THREE.MeshLambertMaterial({ color: pantColor });

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.1, 7), bodyMat);
  body.position.set(0, 0.55, 0); group.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 6, 5), skinMat);
  head.position.set(0, 1.28, 0); group.add(head);

  const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.65, 0.15), bodyMat);
  leftArm.position.set(-0.45, 0.75, 0); leftArm.rotation.z = 0.15; group.add(leftArm);

  const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.65, 0.15), bodyMat);
  rightArm.position.set(0.45, 0.75, 0); rightArm.rotation.z = -0.15; group.add(rightArm);

  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), pantMat);
  leftLeg.position.set(-0.18, 0, 0.05); group.add(leftLeg);

  const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), pantMat);
  rightLeg.position.set(0.18, 0, -0.05); group.add(rightLeg);

  return { group, leftArm, rightArm, leftLeg, rightLeg };
}

/** Boronica — hot-pink dress, blonde hair, permanently angry stance */
function buildBoronica(): {
  group: THREE.Group;
  leftArm: THREE.Mesh; rightArm: THREE.Mesh;
  leftLeg: THREE.Mesh; rightLeg: THREE.Mesh;
} {
  const group    = new THREE.Group();
  const bodyMat  = new THREE.MeshLambertMaterial({ color: BORONICA_BODY });
  const skinMat  = new THREE.MeshLambertMaterial({ color: 0xFFD0A0 });
  const hairMat  = new THREE.MeshLambertMaterial({ color: BORONICA_HAIR });

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

/** Build a hit character — base pedestrian + distinctive accent accessory */
function buildHitChar(charId: string, bodyColor: number, accentColor: number): {
  group: THREE.Group;
  leftArm: THREE.Mesh; rightArm: THREE.Mesh;
  leftLeg: THREE.Mesh; rightLeg: THREE.Mesh;
} {
  const { group, leftArm, rightArm, leftLeg, rightLeg } = buildPedestrian(bodyColor);
  const accentMat = new THREE.MeshLambertMaterial({ color: accentColor });

  if (charId === 'trump') {
    // Gold tie
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.05), accentMat);
    tie.position.set(0, 0.75, 0.36);
    group.add(tie);
    // Blonde hair (yellow sphere on top)
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.3, 6, 4), accentMat);
    hair.scale.set(1, 0.6, 1);
    hair.position.set(0, 1.58, 0);
    group.add(hair);
  } else if (charId === 'elon') {
    // Dark hair
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 4), accentMat);
    hair.scale.set(1.1, 0.5, 1);
    hair.position.set(0, 1.55, -0.05);
    group.add(hair);
  } else if (charId === 'karen') {
    // Blonde bob
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.32, 6, 4), accentMat);
    hair.scale.set(1.1, 0.65, 1);
    hair.position.set(0, 1.35, 0);
    group.add(hair);
  } else if (charId === 'flatEarther') {
    // Tinfoil hat (silver cone)
    const hat = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.55, 6), accentMat);
    hat.position.set(0, 1.68, 0);
    group.add(hat);
  } else if (charId === 'antiVaxxer') {
    // Ponytail (cylinder at back)
    const pony = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.04, 0.45, 5), accentMat);
    pony.position.set(0, 1.2, -0.3);
    pony.rotation.x = 0.5;
    group.add(pony);
  } else if (charId === 'cryptoBro') {
    // Backwards cap (flat cylinder)
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.1, 8), accentMat);
    cap.position.set(0, 1.42, 0.06);
    cap.rotation.z = 0.15;
    group.add(cap);
  } else if (charId === 'zuckerberg') {
    // Bald — no hair, just slightly stiff arms (already stiff from buildPedestrian)
    // Add a tiny blue collar tab
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.08, 0.08), accentMat);
    collar.position.set(0, 1.12, 0.3);
    group.add(collar);
  } else if (charId === 'alexJones') {
    // Scale up body for big build
    group.scale.set(1.25, 1.25, 1.25);
    // Red megaphone at hand
    const mega = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.18, 0.4, 6), accentMat);
    mega.rotation.z = Math.PI / 2;
    mega.position.set(0.7, 0.85, 0.2);
    group.add(mega);
  } else if (charId === 'kanyeWest') {
    // Sunglasses (two small dark boxes)
    const glassMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const lGlass = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.07, 0.06), glassMat);
    lGlass.position.set(-0.1, 1.3, 0.25);
    group.add(lGlass);
    const rGlass = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.07, 0.06), glassMat);
    rGlass.position.set(0.1, 1.3, 0.25);
    group.add(rGlass);
  } else if (charId === 'conspiracyGuy') {
    // Wide white eyes
    const eyeMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    const lEye = new THREE.Mesh(new THREE.SphereGeometry(0.07, 5, 4), eyeMat);
    lEye.position.set(-0.1, 1.32, 0.24);
    group.add(lEye);
    const rEye = new THREE.Mesh(new THREE.SphereGeometry(0.07, 5, 4), eyeMat);
    rEye.position.set(0.1, 1.32, 0.24);
    group.add(rEye);
    // Trench coat collar
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.25, 0.08), accentMat);
    collar.position.set(0, 1.0, 0.3);
    group.add(collar);
  }

  return { group, leftArm, rightArm, leftLeg, rightLeg };
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
  private hitChars:    HitCharacter[] = [];
  private splats:      SplatDecal[] = [];
  private scene: THREE.Scene;
  private collisionWorld: CollisionWorld | null = null;

  /** Fired on splat: (satsEarned, entityName?) */
  onSplat: ((sats: number, name?: string) => void) | null = null;
  /** Fired when van gets close to Boronica and she yells */
  onBoronicaYell: (() => void) | null = null;
  /** Fired when van gets close to a hit character */
  onHitCharNear: ((charId: string, line: string) => void) | null = null;
  /** Fired when van splats a hit character */
  onHitCharSplat: ((charId: string, toast: string) => void) | null = null;

  constructor(scene: THREE.Scene, collisionWorld?: CollisionWorld) {
    this.scene = scene;
    this.collisionWorld = collisionWorld ?? null;
    this._spawnPedestrians();
    this._spawnKangaroos();
    this._spawnHitCharacters();
  }

  // ── Spawn ───────────────────────────────────────────────────────────────────

  private _spawnPedestrians(): void {
    // Boronica — keep as procedural (she has a unique look)
    const spawnBoronica = (): void => {
      const { group, leftArm, rightArm, leftLeg, rightLeg } = buildBoronica();
      const roadPos = randomSidewalk();
      const { segStart, segEnd, pos } = randomSegment();
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      const ped: Pedestrian = {
        group, axis: 'z', roadPos, segStart, segEnd, pos, dir, speed: 3.5,
        scattering: false, scatterTimer: 0, scatterDirX: 0, scatterDirZ: 0,
        walkCycle: Math.random() * Math.PI * 2,
        leftArm, rightArm, leftLeg, rightLeg,
        splatted: false, respawnTimer: 0, spawnAxis: 'z',
        isBoronica: true, boronicaYelled: false,
      };
      this.pedestrians.push(ped);
      this.scene.add(group);
      this._applyPedPosition(ped);
      this._applyPedFacing(ped);
    };

    // Regular peds — KayKit adventurer GLB with Walk animation, colour-tinted clones
    const base = (import.meta as any).env.BASE_URL as string;
    const loader = new GLTFLoader();
    const dummy = new THREE.Mesh();

    // Shirt/body colour tints applied to body mesh
    const SHIRT_COLORS = [
      0xF4A261, 0xE76F51, 0x2A9D8F, 0x264653, 0xE9C46A,
      0xA8DADC, 0xFF6B6B, 0x3D5A80, 0x98C1D9, 0xE84855,
      0x2B2D42, 0x06D6A0, 0xFFB703, 0x219EBC, 0xFB8500,
    ];

    let pedGLTF: any = null;
    const pendingPeds: { axis: 'x'|'z' }[] = [];

    const spawnFromGLTF = (axis: 'x'|'z', gltf: any): void => {
      const shirtColor = SHIRT_COLORS[Math.floor(Math.random() * SHIRT_COLORS.length)];
      const model = gltf.scene.clone(true);

      // Tint the body mesh with a random shirt colour
      model.traverse((c: any) => {
        if (c.isMesh && c.name && c.name.toLowerCase().includes('body')) {
          c.material = c.material.clone();
          c.material.color.setHex(shirtColor);
        }
      });

      // Auto-normalise height to 1.75
      const TARGET_HEIGHT = 1.75;
      model.updateMatrixWorld(true);
      const bbox = new THREE.Box3().setFromObject(model);
      const mh = bbox.max.y - bbox.min.y;
      const sc = mh > 0.01 ? TARGET_HEIGHT / mh : 1.0;
      model.scale.setScalar(sc);
      model.updateMatrixWorld(true);
      const bbox2 = new THREE.Box3().setFromObject(model);
      model.position.y = -bbox2.min.y;

      model.traverse((c: any) => { if (c.isMesh) c.castShadow = true; });

      const group = new THREE.Group();
      group.add(model);
      group.userData['isNPC'] = true;
      group.userData['isPed'] = true;

      const roadPos = randomSidewalk();
      const { segStart, segEnd, pos } = randomSegment();
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      const speed = 2 + Math.random() * 1.5;

      const ped: Pedestrian = {
        group, axis, roadPos, segStart, segEnd, pos, dir, speed,
        scattering: false, scatterTimer: 0, scatterDirX: 0, scatterDirZ: 0,
        walkCycle: Math.random() * Math.PI * 2,
        leftArm: dummy, rightArm: dummy, leftLeg: dummy, rightLeg: dummy,
        splatted: false, respawnTimer: 0, spawnAxis: axis,
        isBoronica: false, boronicaYelled: false,
        isGLB: true,
      };

      // Walk animation
      const walkClip = gltf.animations.find((a: any) => a.name.toLowerCase().includes('walk'));
      if (walkClip) {
        const mixer = new THREE.AnimationMixer(model);
        // Offset start time so peds don't all step in sync
        const action = mixer.clipAction(walkClip);
        action.play();
        action.time = Math.random() * walkClip.duration;
        mixer.update(0);
        ped.mixer = mixer;
      }

      this.pedestrians.push(ped);
      this.scene.add(group);
      this._applyPedPosition(ped);
      this._applyPedFacing(ped);
    };

    const spawnGLBPed = (axis: 'x'|'z'): void => {
      if (pedGLTF) {
        spawnFromGLTF(axis, pedGLTF);
      } else {
        pendingPeds.push({ axis });
      }
    };

    loader.load(`${base}models/characters/ped-adventurer.glb`, (gltf) => {
      pedGLTF = gltf;
      // Spawn all queued peds now that model is loaded
      pendingPeds.forEach(p => spawnFromGLTF(p.axis, pedGLTF));
      pendingPeds.length = 0;
    }, undefined, () => {
      // Fallback: procedural if GLB fails
      const spawnProceduralPed = (axis: 'x'|'z'): void => {
        const bodyColor = BODY_COLORS[Math.floor(Math.random() * BODY_COLORS.length)];
        const roadPos = randomSidewalk();
        const { segStart, segEnd, pos } = randomSegment();
        const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
        const speed = 2 + Math.random() * 1.5;
        const built = buildPedestrian(bodyColor);
        built.group.userData['isNPC'] = true;
        built.group.userData['isPed'] = true;
        const ped: Pedestrian = {
          group: built.group, axis, roadPos, segStart, segEnd, pos, dir, speed,
          scattering: false, scatterTimer: 0, scatterDirX: 0, scatterDirZ: 0,
          walkCycle: Math.random() * Math.PI * 2,
          leftArm: built.leftArm, rightArm: built.rightArm,
          leftLeg: built.leftLeg, rightLeg: built.rightLeg,
          splatted: false, respawnTimer: 0, spawnAxis: axis,
          isBoronica: false, boronicaYelled: false,
        };
        this.pedestrians.push(ped);
        this.scene.add(built.group);
        this._applyPedPosition(ped);
        this._applyPedFacing(ped);
      };
      for (let i = 0; i < PED_COUNT; i++) spawnProceduralPed('x');
      for (let i = 0; i < PED_COUNT; i++) spawnProceduralPed('z');
    });

    for (let i = 0; i < PED_COUNT; i++) spawnGLBPed('x');
    for (let i = 0; i < PED_COUNT; i++) spawnGLBPed('z');
    spawnBoronica();
  }

  private _spawnKangaroos(): void {
    for (let i = 0; i < KANGAROO_COUNT; i++) {
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

  private _charIdToFile(charId: string): string {
    const map: Record<string, string> = {
      trump:         'trump',
      elon:          'elon',
      karen:         'karen',
      flatEarther:   'flat-earther',
      antiVaxxer:    'anti-vaxxer',
      cryptoBro:     'crypto-bro',
      zuckerberg:    'zuckerberg',
      alexJones:     'alex-jones',
      kanyeWest:     'kanye',
      conspiracyGuy: 'conspiracy-guy',
    };
    return map[charId] ?? charId;
  }

  private _spawnHitCharacters(): void {
    const base = (import.meta as any).env.BASE_URL as string;
    const loader = new GLTFLoader();

    // Models known to have broken geometry (head-only, buried below ground, etc.)
    // These always use procedural fallback
    const BROKEN_MODELS = new Set(['alexJones', 'kanyeWest']);

    HIT_CHAR_DEFS.forEach((def, i) => {
      const filename = this._charIdToFile(def.charId);
      const url = `${base}models/characters/${filename}.glb`;

      if (BROKEN_MODELS.has(def.charId)) {
        // Skip GLB load — spawn procedural immediately
        const spawnXZ = HIT_CHAR_POSITIONS[i];
        const axis: 'x' | 'z' = Math.abs(spawnXZ.x) >= Math.abs(spawnXZ.z) ? 'x' : 'z';
        const roadPos = randomSidewalk();
        const { segStart, segEnd, pos } = randomSegment();
        const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
        const { group, leftArm, rightArm, leftLeg, rightLeg } = buildHitChar(def.charId, def.bodyColor, def.accentColor);
        const hc: HitCharacter = {
          group, charId: def.charId, preLine: def.preLine, splatToast: def.splatToast,
          axis, roadPos, segStart, segEnd, pos, dir, speed: 1.25 + Math.random() * 0.5,
          scattering: false, scatterTimer: 0, scatterDirX: 0, scatterDirZ: 0,
          walkCycle: Math.random() * Math.PI * 2,
          leftArm, rightArm, leftLeg, rightLeg,
          splatted: false, respawnTimer: 0, nearbySpoken: false,
        };
        if (axis === 'x') group.position.set(pos, 0, roadPos);
        else group.position.set(roadPos, 0, pos);
        this.scene.add(group);
        this.hitChars.push(hc);
        return;
      }

      loader.load(url, (gltf) => {
        const model = gltf.scene;

        // Auto-normalise: compute actual bounding box and scale to TARGET_HEIGHT
        const TARGET_HEIGHT = 1.75; // units — matches crew character height
        model.updateMatrixWorld(true);
        const bbox = new THREE.Box3().setFromObject(model);
        const modelHeight = bbox.max.y - bbox.min.y;
        const autoScale = modelHeight > 0.01 ? TARGET_HEIGHT / modelHeight : 1.0;
        model.scale.setScalar(autoScale);
        // Recompute after scale and lift feet to y=0
        model.updateMatrixWorld(true);
        const bbox2 = new THREE.Box3().setFromObject(model);
        model.position.y = -bbox2.min.y;

        model.traverse(c => { if ((c as THREE.Mesh).isMesh) { c.castShadow = true; } });

        const wrapper = new THREE.Group();
        wrapper.add(model);

        // Add a name label above the character
        const cv = document.createElement('canvas'); cv.width = 256; cv.height = 64;
        const ctx = cv.getContext('2d')!;
        ctx.fillStyle = 'rgba(180,0,0,0.85)';
        if ((ctx as any).roundRect) { (ctx as any).roundRect(2,2,252,60,8); } else { ctx.rect(2,2,252,60); }
        ctx.fill();
        ctx.fillStyle = '#fff'; ctx.font = 'bold 26px Arial';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(def.charId === 'flatEarther' ? 'FLAT EARTHER' :
                     def.charId === 'antiVaxxer'  ? 'ANTI-VAXXER'  :
                     def.charId === 'cryptoBro'   ? 'CRYPTO BRO'   :
                     def.charId === 'alexJones'   ? 'ALEX JONES'   :
                     def.charId === 'kanyeWest'   ? 'KANYE WEST'   :
                     def.charId === 'conspiracyGuy'? 'CONSPIRACY GUY':
                     def.charId.toUpperCase(), 128, 32);
        const label = new THREE.Mesh(
          new THREE.PlaneGeometry(2.4, 0.6),
          new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false })
        );
        label.position.set(0, 2.4, 0);
        label.renderOrder = 1;
        wrapper.add(label);

        // Dummy mesh — walk animation rotates these (no-op on loaded models)
        const dummy = new THREE.Mesh();

        const spawnXZ = HIT_CHAR_POSITIONS[i];
        const axis: 'x' | 'z' = Math.abs(spawnXZ.x) >= Math.abs(spawnXZ.z) ? 'x' : 'z';
        const roadPos = randomSidewalk();
        const { segStart, segEnd, pos } = randomSegment();
        const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;

        const hc: HitCharacter = {
          group: wrapper, charId: def.charId, preLine: def.preLine, splatToast: def.splatToast,
          axis, roadPos, segStart, segEnd, pos, dir, speed: 1.25 + Math.random() * 0.5,
          scattering: false, scatterTimer: 0, scatterDirX: 0, scatterDirZ: 0,
          walkCycle: Math.random() * Math.PI * 2,
          leftArm: dummy, rightArm: dummy, leftLeg: dummy, rightLeg: dummy,
          splatted: false, respawnTimer: 0, nearbySpoken: false,
        };

        if (axis === 'x') wrapper.position.set(pos, 0, roadPos);
        else wrapper.position.set(roadPos, 0, pos);

        // Set up Mixamo walk animation if the GLB has embedded clips
        if (gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model);
          mixer.clipAction(gltf.animations[0]).play();
          hc.mixer = mixer;
        }

        this.scene.add(wrapper);
        this.hitChars.push(hc);

      }, undefined, (_err) => {
        // Fallback to procedural geometry if model fails to load
        console.warn(`[TEM] Model not found for ${def.charId}, using fallback geometry`);
        const { group, leftArm, rightArm, leftLeg, rightLeg } = buildHitChar(def.charId, def.bodyColor, def.accentColor);
        const spawnXZ = HIT_CHAR_POSITIONS[i];
        const axis: 'x' | 'z' = Math.abs(spawnXZ.x) >= Math.abs(spawnXZ.z) ? 'x' : 'z';
        const roadPos = randomSidewalk();
        const { segStart, segEnd, pos } = randomSegment();
        const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
        const hc: HitCharacter = {
          group, charId: def.charId, preLine: def.preLine, splatToast: def.splatToast,
          axis, roadPos, segStart, segEnd, pos, dir, speed: 1.25 + Math.random() * 0.5,
          scattering: false, scatterTimer: 0, scatterDirX: 0, scatterDirZ: 0,
          walkCycle: Math.random() * Math.PI * 2,
          leftArm, rightArm, leftLeg, rightLeg,
          splatted: false, respawnTimer: 0, nearbySpoken: false,
        };
        if (axis === 'x') group.position.set(pos, 0, roadPos);
        else group.position.set(roadPos, 0, pos);
        this.scene.add(group);
        this.hitChars.push(hc);
      });
    });
  }

  private _respawnHitChar(hc: HitCharacter): void {
    const roadPos = randomSidewalk();
    const { segStart, segEnd, pos } = randomSegment();
    hc.roadPos = roadPos; hc.segStart = segStart; hc.segEnd = segEnd; hc.pos = pos;
    hc.dir = Math.random() > 0.5 ? 1 : -1;
    hc.splatted = false; hc.scattering = false; hc.nearbySpoken = false;
    hc.walkCycle = Math.random() * Math.PI * 2;
    if (hc.axis === 'x') hc.group.position.set(hc.pos, 0, hc.roadPos);
    else hc.group.position.set(hc.roadPos, 0, hc.pos);
    hc.group.visible = true;
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
    ped.boronicaYelled = false;
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

      // Boronica yell
      if (ped.isBoronica && !ped.boronicaYelled && dist < YELL_DIST) {
        ped.boronicaYelled = true;
        this.onBoronicaYell?.();
      }

      // Splat check
      if (dist < SPLAT_DIST) {
        ped.splatted = true;
        ped.respawnTimer = RESPAWN_DELAY + Math.random() * 5;
        this._splatEntity(px, pz, ped.group, ped.isBoronica ? 'boronica' : undefined);
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
        ped.group.position.x += ped.scatterDirX * 8 * dt;
        ped.group.position.z += ped.scatterDirZ * 8 * dt;
        // Keep running until they flee off the map edge — no snap-back
        if (Math.abs(ped.group.position.x) > 240 || Math.abs(ped.group.position.z) > 240) {
          ped.splatted = true;
          ped.respawnTimer = RESPAWN_DELAY + Math.random() * 5;
          ped.group.visible = false;
          ped.scattering = false;
        }
      } else {
        ped.pos += ped.dir * ped.speed * dt;
        if (ped.pos >= ped.segEnd)   { ped.pos = ped.segEnd;   ped.dir = -1; }
        else if (ped.pos <= ped.segStart) { ped.pos = ped.segStart; ped.dir = 1; }
        this._applyPedPosition(ped);
      }

      // Building collision
      if (this.collisionWorld) {
        const resolved = this.collisionWorld.resolveCircle(ped.group.position.x, ped.group.position.z, 0.4);
        ped.group.position.x = resolved.x;
        ped.group.position.z = resolved.z;
      }

      this._applyPedFacing(ped);

      // Walk animation
      if (ped.mixer) {
        ped.mixer.update(dt);
      } else if (ped.isGLB) {
        // Body bob for static Kenney GLB models (no embedded walk anim)
        ped.walkCycle += (ped.scattering ? 8 : ped.speed) * dt * 2;
        ped.group.position.y = Math.max(0, Math.abs(Math.sin(ped.walkCycle)) * 0.1);
      } else {
        // Procedural arm/leg swing (Boronica + fallback peds)
        const effSpeed = ped.scattering ? 8 : ped.speed;
        ped.walkCycle += effSpeed * dt * 2;
        const swing = Math.sin(ped.walkCycle);
        ped.leftArm.rotation.z  =  swing * 0.4 + 0.15;
        ped.rightArm.rotation.z = -swing * 0.4 - 0.15;
        ped.leftLeg.rotation.x  =  swing * 0.5;
        ped.rightLeg.rotation.x = -swing * 0.5;
      }
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

    // ── Hit Characters ──────────────────────────────────────────────────────
    for (const hc of this.hitChars) {
      if (hc.splatted) {
        hc.respawnTimer -= dt;
        if (hc.respawnTimer <= 0) this._respawnHitChar(hc);
        continue;
      }

      const hx = hc.group.position.x;
      const hz = hc.group.position.z;
      const dx = hx - vanX;
      const dz = hz - vanZ;
      const dist = Math.sqrt(dx * dx + dz * dz);

      // Pre-hit proximity dialogue
      if (!hc.nearbySpoken && dist < 16) {
        hc.nearbySpoken = true;
        this.onHitCharNear?.(hc.charId, hc.preLine);
      }

      // Splat
      if (dist < SPLAT_DIST) {
        hc.splatted = true;
        hc.respawnTimer = 20 + Math.random() * 5;
        hc.group.visible = false;
        const splatMesh = buildSplat(this.scene, hx, hz);
        this.splats.push({ mesh: splatMesh, life: SPLAT_LIFE });
        this.onHitCharSplat?.(hc.charId, hc.splatToast);
        continue;
      }

      // Scatter when van is close
      if (!hc.scattering && dist < 7) {
        hc.scattering = true;
        hc.scatterTimer = 6.0;  // long enough to flee dramatically but always stay on map
        const len = Math.max(dist, 0.01);
        hc.scatterDirX = dx / len;
        hc.scatterDirZ = dz / len;
      }

      if (hc.scattering) {
        hc.group.position.x += hc.scatterDirX * 8 * dt;
        hc.group.position.z += hc.scatterDirZ * 8 * dt;
        // Bounce off map boundary — named NPCs always stay on the map
        const BOUND = 225;
        if (Math.abs(hc.group.position.x) >= BOUND) {
          hc.scatterDirX *= -1;
          hc.group.position.x = Math.sign(hc.group.position.x) * BOUND;
        }
        if (Math.abs(hc.group.position.z) >= BOUND) {
          hc.scatterDirZ *= -1;
          hc.group.position.z = Math.sign(hc.group.position.z) * BOUND;
        }
        hc.scatterTimer -= dt;
        if (hc.scatterTimer <= 0) {
          hc.scattering = false;
          // Sync patrol to wherever they ended up — no teleport snap-back
          const { segStart, segEnd } = randomSegment();
          hc.segStart = segStart;
          hc.segEnd   = segEnd;
          hc.roadPos  = hc.axis === 'x' ? hc.group.position.z : hc.group.position.x;
          hc.pos      = hc.axis === 'x' ? hc.group.position.x : hc.group.position.z;
          hc.pos      = Math.max(hc.segStart, Math.min(hc.segEnd, hc.pos));
          hc.dir      = Math.random() > 0.5 ? 1 : -1;
        }
      } else {
        hc.pos += hc.dir * hc.speed * dt;
        if (hc.pos >= hc.segEnd)       { hc.pos = hc.segEnd;   hc.dir = -1; }
        else if (hc.pos <= hc.segStart){ hc.pos = hc.segStart; hc.dir =  1; }
        if (hc.axis === 'x') hc.group.position.set(hc.pos, 0, hc.roadPos);
        else hc.group.position.set(hc.roadPos, 0, hc.pos);
      }

      // Building collision — push hit char out of any building AABB
      if (this.collisionWorld) {
        const resolved = this.collisionWorld.resolveCircle(hc.group.position.x, hc.group.position.z, 0.5);
        hc.group.position.x = resolved.x;
        hc.group.position.z = resolved.z;
        if (hc.axis === 'x') hc.pos = resolved.x;
        else hc.pos = resolved.z;
      }

      // Facing
      if (!hc.scattering) {
        if (hc.axis === 'x') hc.group.rotation.y = hc.dir === 1 ? -Math.PI / 2 : Math.PI / 2;
        else hc.group.rotation.y = hc.dir === 1 ? Math.PI : 0;
      } else {
        hc.group.rotation.y = Math.atan2(hc.scatterDirX, hc.scatterDirZ);
      }

      // Body bob applied to ALL hit chars — guarantees visible movement even if GLB has
      // no embedded animation or a very subtle one (Alex Jones, Kanye have 0 clips)
      hc.walkCycle += hc.speed * dt * 2;
      const hcSwing = Math.sin(hc.walkCycle);
      hc.group.position.y = Math.max(0, Math.abs(hcSwing) * 0.14);

      // Also run Mixamo mixer for models that have embedded walk clips (Trump, Elon, Zuck)
      if (hc.mixer) {
        hc.mixer.update(dt);
      }
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

  /**
   * Immediately respawn all splatted NPCs.
   * Call this at mission complete so the world feels fully populated for the next run.
   */
  respawnAll(): void {
    for (const ped of this.pedestrians) {
      if (ped.splatted) this._respawnPed(ped);
    }
    for (const k of this.kangaroos) {
      if (k.splatted) this._respawnKang(k);
    }
    for (const hc of this.hitChars) {
      if (hc.splatted) this._respawnHitChar(hc);
    }
  }
}
