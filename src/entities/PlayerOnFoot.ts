import * as THREE from 'three';
import type { PlayerCharacter } from '../ui/CharacterCreator';

export const WEAPONS = [
  { id: 'trowel', name: 'Trowel',        icon: '🪚', range: 2.5, damage: 1, desc: 'Classic + paint buildings' },
  { id: 'roller', name: 'Float Roller',  icon: '🎨', range: 3.5, damage: 1, desc: 'Wide swing' },
  { id: 'hawk',   name: 'Plaster Hawk',  icon: '🪣', range: 8,   damage: 1, desc: 'Throw plaster (ranged)' },
  { id: 'pole',   name: 'Scaffold Pole', icon: '🔧', range: 4.5, damage: 1, desc: 'Slow but powerful' },
  { id: 'bucket', name: 'Render Bucket', icon: '🪤', range: 3,   damage: 1, desc: 'Splash AOE' },
];

// ── Weapon mesh builders ──────────────────────────────────────────────────────

function makeTrowelMesh(): THREE.Mesh {
  const geo = new THREE.BoxGeometry(0.8, 0.05, 0.5);
  const mat = new THREE.MeshLambertMaterial({ color: 0xC8A040 });
  return new THREE.Mesh(geo, mat);
}

function makeRollerMesh(): THREE.Group {
  const g = new THREE.Group();
  const handleMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
  const rollerMat = new THREE.MeshLambertMaterial({ color: 0xE8A020 });
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.6, 8), handleMat);
  handle.position.set(0, 0, 0);
  g.add(handle);
  const rollerHead = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.4, 8), rollerMat);
  rollerHead.position.set(0, 0.5, 0);
  g.add(rollerHead);
  return g;
}

function makeHawkMesh(): THREE.Mesh {
  const geo = new THREE.BoxGeometry(0.6, 0.05, 0.5);
  const mat = new THREE.MeshLambertMaterial({ color: 0x888888 });
  return new THREE.Mesh(geo, mat);
}

function makePoleMesh(): THREE.Mesh {
  const geo = new THREE.CylinderGeometry(0.05, 0.05, 2.0, 8);
  const mat = new THREE.MeshLambertMaterial({ color: 0xA0A0A0 });
  return new THREE.Mesh(geo, mat);
}

function makeBucketMesh(): THREE.Mesh {
  const geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
  const mat = new THREE.MeshLambertMaterial({ color: 0xA06030 });
  return new THREE.Mesh(geo, mat);
}

function buildWeaponMesh(weaponId: string): THREE.Object3D {
  switch (weaponId) {
    case 'roller': return makeRollerMesh();
    case 'hawk':   return makeHawkMesh();
    case 'pole':   return makePoleMesh();
    case 'bucket': return makeBucketMesh();
    default:       return makeTrowelMesh();
  }
}

// ── Main class ────────────────────────────────────────────────────────────────

export class PlayerOnFoot {
  heading = 0;
  selectedWeapon = 'trowel';
  selectedPaintHex = '#F2EDDF';

  private scene: THREE.Scene;
  private group: THREE.Group;
  private weaponMesh: THREE.Object3D;

  // Body parts for animation
  private leftArm!: THREE.Mesh;
  private rightArm!: THREE.Mesh;
  private leftLeg!: THREE.Mesh;
  private rightLeg!: THREE.Mesh;

  private _walkCycle = 0;
  private _swinging = false;
  private _attackTimer = 0;

  constructor(scene: THREE.Scene, pc: PlayerCharacter, startPos: THREE.Vector3) {
    this.scene = scene;
    this.group = new THREE.Group();
    this._buildCharacter(pc);

    this.weaponMesh = buildWeaponMesh('trowel');
    this.weaponMesh.position.set(0.5, 0.75, 0.3);
    this.group.add(this.weaponMesh);

    this.group.position.copy(startPos);
    scene.add(this.group);
  }

  private _buildCharacter(pc: PlayerCharacter): void {
    const skinColor = new THREE.Color(pc.skinTone);
    const skinMat = new THREE.MeshLambertMaterial({ color: skinColor });
    // TEM dark shirt
    const shirtMat = new THREE.MeshLambertMaterial({ color: 0x2A2A2A });
    // Dark pants
    const pantsMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
    // Hair
    const hairColor = new THREE.Color(pc.hairColor);
    const hairMat = new THREE.MeshLambertMaterial({ color: hairColor });

    // Body (torso)
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.1, 7), shirtMat);
    body.position.set(0, 0.55, 0);
    this.group.add(body);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 6, 5), skinMat);
    head.position.set(0, 1.28, 0);
    this.group.add(head);

    // Hair
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.30, 6, 5), hairMat);
    hair.position.set(0, 1.40, 0);
    hair.scale.set(1, 0.5, 1);
    this.group.add(hair);

    // Left arm
    const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.65, 0.15), shirtMat);
    leftArm.position.set(-0.45, 0.75, 0);
    leftArm.rotation.z = 0.15;
    this.group.add(leftArm);
    this.leftArm = leftArm;

    // Right arm
    const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.65, 0.15), shirtMat);
    rightArm.position.set(0.45, 0.75, 0);
    rightArm.rotation.z = -0.15;
    this.group.add(rightArm);
    this.rightArm = rightArm;

    // Left leg
    const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), pantsMat);
    leftLeg.position.set(-0.18, 0, 0.05);
    this.group.add(leftLeg);
    this.leftLeg = leftLeg;

    // Right leg
    const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), pantsMat);
    rightLeg.position.set(0.18, 0, -0.05);
    this.group.add(rightLeg);
    this.rightLeg = rightLeg;

    // Boots
    const bootMat = new THREE.MeshLambertMaterial({ color: 0x1A1A1A });
    const leftBoot = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.18, 0.25), bootMat);
    leftBoot.position.set(-0.18, -0.32, 0.05);
    this.group.add(leftBoot);
    const rightBoot = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.18, 0.25), bootMat);
    rightBoot.position.set(0.18, -0.32, -0.05);
    this.group.add(rightBoot);
  }

  get position(): THREE.Vector3 {
    return this.group.position;
  }

  update(dt: number, jx: number, jy: number, sprint: boolean): void {
    const speed = sprint ? 14 : 8;
    const len = Math.sqrt(jx * jx + jy * jy);
    const moving = len > 0.1;

    if (moving) {
      const nx = jx / len;
      const ny = jy / len;
      // jx maps to world X, jy maps to world Z (forward)
      const moveX = nx * speed * dt;
      const moveZ = -ny * speed * dt;

      this.group.position.x += moveX;
      this.group.position.z += moveZ;

      // Update heading (atan2 of movement direction in world space)
      this.heading = Math.atan2(nx, ny);
      this.group.rotation.y = this.heading;

      // Walk animation
      this._walkCycle += len * speed * dt * 2.0;
      const swing = Math.sin(this._walkCycle);
      this.leftArm.rotation.x  =  swing * 0.5;
      this.rightArm.rotation.x = -swing * 0.5;
      this.leftLeg.rotation.x  = -swing * 0.6;
      this.rightLeg.rotation.x =  swing * 0.6;
    } else {
      // Idle: reset walk cycle gradually
      this.leftArm.rotation.x  = 0;
      this.rightArm.rotation.x = 0;
      this.leftLeg.rotation.x  = 0;
      this.rightLeg.rotation.x = 0;
    }

    // Attack animation
    if (this._swinging) {
      this._attackTimer -= dt;
      const t = Math.max(0, this._attackTimer) / 0.35;
      this.weaponMesh.rotation.z = Math.sin(t * Math.PI) * 1.2;
      if (this._attackTimer <= 0) {
        this._swinging = false;
        this.weaponMesh.rotation.z = 0;
      }
    }
  }

  attack(): void {
    this._swinging = true;
    this._attackTimer = 0.35;
  }

  trowelBuilding(_scene: THREE.Scene): string | null {
    const raycaster = new THREE.Raycaster();
    const dir = new THREE.Vector3(
      Math.sin(this.heading),
      0,
      Math.cos(this.heading)
    ).normalize();
    raycaster.set(this.group.position.clone().add(new THREE.Vector3(0, 1, 0)), dir);
    raycaster.far = 10;

    // Collect all meshes in scene
    const meshes: THREE.Mesh[] = [];
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh && obj.userData['paintable'] === true) {
        meshes.push(obj);
      }
    });

    const intersects = raycaster.intersectObjects(meshes, false);
    if (intersects.length > 0) {
      const hit = intersects[0].object as THREE.Mesh;
      const mat = hit.material as THREE.MeshLambertMaterial;
      mat.color.set(this.selectedPaintHex);
      mat.needsUpdate = true;
      const buildingName: string = (hit.userData['buildingName'] as string) || 'Building';
      return buildingName;
    }
    return null;
  }

  setWeapon(id: string): void {
    this.selectedWeapon = id;
    this.group.remove(this.weaponMesh);
    this.weaponMesh = buildWeaponMesh(id);
    this.weaponMesh.position.set(0.5, 0.75, 0.3);
    this.group.add(this.weaponMesh);
  }

  distanceTo(pos: THREE.Vector3): number {
    return this.group.position.distanceTo(pos);
  }

  show(): void {
    this.group.visible = true;
  }

  hide(): void {
    this.group.visible = false;
  }

  dispose(): void {
    this.scene.remove(this.group);
  }
}
