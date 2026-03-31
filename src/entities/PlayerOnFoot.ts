import * as THREE from 'three';
import type { PlayerCharacter } from '../ui/CharacterCreator';

export const WEAPONS = [
  { id: 'trowel', name: 'Trowel',        icon: '🪚', range: 2.5, damage: 1, desc: 'Trowel render onto wall' },
  { id: 'roller', name: 'Float Roller',  icon: '🎨', range: 3.5, damage: 1, desc: 'Roll paint in a wide strip' },
  { id: 'hawk',   name: 'Plaster Hawk',  icon: '🪣', range: 8,   damage: 1, desc: 'Throw plaster (ranged)' },
  { id: 'pole',   name: 'Scaffold Pole', icon: '🔧', range: 4.5, damage: 1, desc: 'Place scaffold platform' },
  { id: 'bucket', name: 'Render Gun',    icon: '🔫', range: 3,   damage: 1, desc: 'Shoot Marbellino at NPCs' },
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

// ── Effect types ──────────────────────────────────────────────────────────────

interface Decal { mesh: THREE.Mesh; timer: number; life: number; }
interface Projectile {
  mesh: THREE.Mesh;
  dir: THREE.Vector3;
  speed: number;
  timer: number;
  paintHex: string;
  isRenderGun?: boolean;
}
interface Scaffold { mesh: THREE.Mesh; timer: number; }

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
  private _actionCooldown = 0;

  // Jump / vertical physics
  private _velY = 0;
  private _grounded = true;

  // Effect pools
  private _decals: Decal[] = [];
  private _projectiles: Projectile[] = [];
  private _scaffolds: Scaffold[] = [];
  private _muzzleFlash: { mesh: THREE.Mesh; timer: number } | null = null;

  // Callback for action results
  onAction: ((msg: string, color: number) => void) | null = null;

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
    const skinMat  = new THREE.MeshLambertMaterial({ color: new THREE.Color(pc.skinTone) });
    const shirtMat = new THREE.MeshLambertMaterial({ color: 0x2A2A2A });
    const pantsMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const hairMat  = new THREE.MeshLambertMaterial({ color: new THREE.Color(pc.hairColor) });

    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.1, 7), shirtMat);
    body.position.set(0, 0.55, 0);
    this.group.add(body);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 6, 5), skinMat);
    head.position.set(0, 1.28, 0);
    this.group.add(head);

    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.30, 6, 5), hairMat);
    hair.position.set(0, 1.40, 0);
    hair.scale.set(1, 0.5, 1);
    this.group.add(hair);

    const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.65, 0.15), shirtMat);
    leftArm.position.set(-0.45, 0.75, 0);
    leftArm.rotation.z = 0.15;
    this.group.add(leftArm);
    this.leftArm = leftArm;

    const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.65, 0.15), shirtMat);
    rightArm.position.set(0.45, 0.75, 0);
    rightArm.rotation.z = -0.15;
    this.group.add(rightArm);
    this.rightArm = rightArm;

    const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), pantsMat);
    leftLeg.position.set(-0.18, 0, 0.05);
    this.group.add(leftLeg);
    this.leftLeg = leftLeg;

    const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), pantsMat);
    rightLeg.position.set(0.18, 0, -0.05);
    this.group.add(rightLeg);
    this.rightLeg = rightLeg;

    const bootMat = new THREE.MeshLambertMaterial({ color: 0x1A1A1A });
    const lBoot = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.18, 0.25), bootMat);
    lBoot.position.set(-0.18, -0.32, 0.05);
    this.group.add(lBoot);
    const rBoot = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.18, 0.25), bootMat);
    rBoot.position.set(0.18, -0.32, -0.05);
    this.group.add(rBoot);
  }

  get position(): THREE.Vector3 { return this.group.position; }

  // ── Forward direction in world space (corrected: sin/−cos convention) ────────
  private _forwardDir(): THREE.Vector3 {
    return new THREE.Vector3(
      Math.sin(this.heading),
      0,
      -Math.cos(this.heading)
    ).normalize();
  }

  // ── Raycast helpers ───────────────────────────────────────────────────────────
  private _raycastPaintable(maxDist: number): THREE.Intersection | null {
    const origin = this.group.position.clone().add(new THREE.Vector3(0, 1, 0));
    const raycaster = new THREE.Raycaster(origin, this._forwardDir(), 0, maxDist);
    const meshes: THREE.Mesh[] = [];
    this.scene.traverse(o => {
      if (o instanceof THREE.Mesh && o.userData['paintable']) meshes.push(o);
    });
    const hits = raycaster.intersectObjects(meshes, false);
    return hits.length ? hits[0] : null;
  }

  // ── Effect: paint decal on wall surface ──────────────────────────────────────
  private _spawnWallDecal(hit: THREE.Intersection, w: number, h: number): void {
    const geo = new THREE.PlaneGeometry(w, h);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(this.selectedPaintHex),
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
    });
    const decal = new THREE.Mesh(geo, mat);

    // Get the face normal in world space
    const hitObj = hit.object as THREE.Mesh;
    const worldNormal = hit.face!.normal.clone().transformDirection(hitObj.matrixWorld).normalize();

    // Place decal at hit point, nudged 3 cm out from surface
    decal.position.copy(hit.point).addScaledVector(worldNormal, 0.03);
    // Orient so plane faces outward along the normal
    decal.lookAt(decal.position.clone().add(worldNormal));

    this.scene.add(decal);
    this._decals.push({ mesh: decal, timer: 10, life: 10 });
  }

  // ── Effect: ground blob (render splash) ───────────────────────────────────────
  private _spawnGroundBlob(x: number, z: number, radius: number, hex: string): void {
    const geo = new THREE.CircleGeometry(radius, 7);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(hex),
      transparent: true, opacity: 0.88, depthWrite: false,
    });
    const blob = new THREE.Mesh(geo, mat);
    blob.rotation.x = -Math.PI / 2;
    blob.position.set(x, 0.05, z);
    this.scene.add(blob);
    this._decals.push({ mesh: blob, timer: 6, life: 6 });
  }

  // ── Jump ──────────────────────────────────────────────────────────────────────
  jump(): void {
    if (!this._grounded) return;
    this._velY = 8;
    this._grounded = false;
  }

  // ── TOOLS ─────────────────────────────────────────────────────────────────────

  /** Trowel — close-range rectangular render stroke on wall */
  private _useTrowel(): void {
    const hit = this._raycastPaintable(2.5);
    if (!hit) return;
    // Apply colour to building mesh
    const mat = (hit.object as THREE.Mesh).material as THREE.MeshLambertMaterial;
    mat.color.set(this.selectedPaintHex);
    mat.needsUpdate = true;
    // Decal: narrow horizontal stroke (trowel shape)
    this._spawnWallDecal(hit, 0.9, 0.22);
    // Extra stroke slightly above
    const hit2 = this._raycastPaintable(2.5);
    if (hit2) this._spawnWallDecal(hit2, 0.7, 0.18);
    this.onAction?.(`🪚 Trowelled on render!`, 0xD4A840);
  }

  /** Roller — wider, taller paint strip on wall */
  private _useRoller(): void {
    const hit = this._raycastPaintable(3.5);
    if (!hit) return;
    const mat = (hit.object as THREE.Mesh).material as THREE.MeshLambertMaterial;
    mat.color.set(this.selectedPaintHex);
    mat.needsUpdate = true;
    // Decal: tall vertical strip (roller width)
    this._spawnWallDecal(hit, 0.55, 1.6);
    // Paint drips — small elongated blobs below the roller strip on ground
    for (let i = 0; i < 4; i++) {
      const ox = (Math.random() - 0.5) * 0.8;
      const oz = (Math.random() - 0.5) * 0.8;
      this._spawnGroundBlob(
        hit.point.x + ox,
        hit.point.z + oz,
        0.08 + Math.random() * 0.12,
        this.selectedPaintHex
      );
    }
    this.onAction?.(`🎨 Rolled a fresh coat!`, 0xC8A040);
  }

  /** Hawk — throws a plaster projectile that splatters on impact */
  private _useHawk(): void {
    const startPos = this.group.position.clone().add(new THREE.Vector3(0, 1.1, 0));
    const projMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 6, 4),
      new THREE.MeshLambertMaterial({ color: 0xE8E4D8 })
    );
    projMesh.position.copy(startPos);
    this.scene.add(projMesh);
    this._projectiles.push({
      mesh: projMesh,
      dir: this._forwardDir().add(new THREE.Vector3(0, 0.08, 0)).normalize(),
      speed: 20,
      timer: 0.45,
      paintHex: this.selectedPaintHex,
    });
    this.onAction?.(`🪣 Plaster hawk launched!`, 0xBBBBBB);
  }

  /** Pole — places a scaffold platform the player can jump onto */
  private _usePole(): void {
    const px = this.group.position.x;
    const pz = this.group.position.z;
    const platform = new THREE.Mesh(
      new THREE.BoxGeometry(3, 0.3, 3),
      new THREE.MeshLambertMaterial({ color: 0xA0A0A0 })
    );
    platform.position.set(px, 2.5, pz);
    this.scene.add(platform);

    // Enforce max 5 scaffolds — remove oldest first
    if (this._scaffolds.length >= 5) {
      const oldest = this._scaffolds.shift()!;
      this.scene.remove(oldest.mesh);
    }
    this._scaffolds.push({ mesh: platform, timer: 15 });
    this.onAction?.(`🔧 Scaffold placed! Jump to reach it.`, 0xA0A0A0);
  }

  /** Render Gun — fires a white plaster ball that awards points on NPC hit */
  private _useBucket(): void {
    const startPos = this.group.position.clone().add(new THREE.Vector3(0, 1.1, 0));
    const projMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 6, 4),
      new THREE.MeshLambertMaterial({ color: 0xFFFFFF })
    );
    projMesh.position.copy(startPos);
    this.scene.add(projMesh);
    this._projectiles.push({
      mesh: projMesh,
      dir: this._forwardDir().clone(),
      speed: 28,
      timer: 0.6,
      paintHex: '#FFFFFF',
      isRenderGun: true,
    });

    // Muzzle flash
    if (this._muzzleFlash) {
      this.scene.remove(this._muzzleFlash.mesh);
      this._muzzleFlash = null;
    }
    const flash = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 5, 4),
      new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
    );
    const fwd = this._forwardDir();
    flash.position.copy(this.group.position).add(new THREE.Vector3(0, 1.1, 0)).addScaledVector(fwd, 0.6);
    this.scene.add(flash);
    this._muzzleFlash = { mesh: flash, timer: 0.1 };
    this.onAction?.(`🔫 Render Gun fired!`, 0xFFFFFF);
  }

  // ── Main action — called by GAS button ────────────────────────────────────────
  useWeapon(): void {
    if (this._actionCooldown > 0) return;
    this.attack(); // play swing animation
    switch (this.selectedWeapon) {
      case 'trowel': this._useTrowel(); break;
      case 'roller': this._useRoller(); break;
      case 'hawk':   this._useHawk();   break;
      case 'pole':   this._usePole();   break;
      case 'bucket': this._useBucket(); break;
    }
    this._actionCooldown = this.selectedWeapon === 'bucket' ? 0.2 : 0.38;
  }

  // ── Update loop ───────────────────────────────────────────────────────────────
  update(dt: number, jx: number, jy: number, sprint: boolean, camAngle = 0): void {
    // Cooldowns
    if (this._actionCooldown > 0) this._actionCooldown -= dt;

    // ── Vertical physics (jump + gravity) ────────────────────────────────────
    this._velY -= 18 * dt;
    this.group.position.y += this._velY * dt;

    // Check scaffold collision — can stand on platforms
    let onScaffold = false;
    const px = this.group.position.x;
    const py = this.group.position.y;
    const pz = this.group.position.z;
    for (const sc of this._scaffolds) {
      const top = sc.mesh.position.y + 0.15; // half height 0.15
      const dx = Math.abs(px - sc.mesh.position.x);
      const dz = Math.abs(pz - sc.mesh.position.z);
      if (dx <= 1.5 && dz <= 1.5 && py >= top - 0.35 && py <= top + 0.4 && this._velY <= 0) {
        this.group.position.y = top;
        this._velY = 0;
        this._grounded = true;
        onScaffold = true;
        break;
      }
    }

    // Ground clamp
    if (!onScaffold && this.group.position.y <= 0) {
      this.group.position.y = 0;
      this._velY = 0;
      this._grounded = true;
    }

    // ── Scaffold fade/expire ──────────────────────────────────────────────────
    for (let i = this._scaffolds.length - 1; i >= 0; i--) {
      const sc = this._scaffolds[i];
      sc.timer -= dt;
      if (sc.timer < 2) {
        const mat = sc.mesh.material as THREE.MeshLambertMaterial;
        mat.transparent = true;
        mat.opacity = Math.max(0, sc.timer / 2);
        mat.needsUpdate = true;
      }
      if (sc.timer <= 0) {
        this.scene.remove(sc.mesh);
        this._scaffolds.splice(i, 1);
      }
    }

    // ── Muzzle flash ─────────────────────────────────────────────────────────
    if (this._muzzleFlash) {
      this._muzzleFlash.timer -= dt;
      if (this._muzzleFlash.timer <= 0) {
        this.scene.remove(this._muzzleFlash.mesh);
        this._muzzleFlash = null;
      }
    }

    const speed = sprint ? 14 : 8;
    const len = Math.sqrt(jx * jx + jy * jy);
    const moving = len > 0.1;

    if (moving) {
      const nx = jx / len;
      const ny = jy / len;
      const worldX = ny * Math.sin(camAngle) + nx * Math.cos(camAngle);
      const worldZ = -ny * Math.cos(camAngle) + nx * Math.sin(camAngle);
      this.group.position.x += worldX * speed * dt;
      this.group.position.z += worldZ * speed * dt;
      this.heading = Math.atan2(worldX, -worldZ);
      this.group.rotation.y = this.heading;
      this._walkCycle += len * speed * dt * 2.0;
      const swing = Math.sin(this._walkCycle);
      this.leftArm.rotation.x  =  swing * 0.5;
      this.rightArm.rotation.x = -swing * 0.5;
      this.leftLeg.rotation.x  = -swing * 0.6;
      this.rightLeg.rotation.x =  swing * 0.6;
    } else {
      this.leftArm.rotation.x  = 0;
      this.rightArm.rotation.x = 0;
      this.leftLeg.rotation.x  = 0;
      this.rightLeg.rotation.x = 0;
    }

    // Swing animation
    if (this._swinging) {
      this._attackTimer -= dt;
      const t = Math.max(0, this._attackTimer) / 0.35;
      this.weaponMesh.rotation.z = Math.sin(t * Math.PI) * 1.2;
      if (this._attackTimer <= 0) {
        this._swinging = false;
        this.weaponMesh.rotation.z = 0;
      }
    }

    // ── Projectiles ──────────────────────────────────────────────────────────
    for (let i = this._projectiles.length - 1; i >= 0; i--) {
      const p = this._projectiles[i];
      p.timer -= dt;
      p.mesh.position.addScaledVector(p.dir, p.speed * dt);

      // Check NPC hit for render gun projectiles
      let splat = false;
      if (!splat && p.isRenderGun) {
        this.scene.traverse(o => {
          if (splat) return;
          if (o.userData['isNPC'] && o.position.distanceTo(p.mesh.position) < 0.8) {
            // Award points
            this.onAction?.(`🔫 +2000 sats! Marbellino hit!`, 0xFFD700);
            // Plaster splat on NPC
            const splatGeo = new THREE.SphereGeometry(0.15, 5, 4);
            const splatMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
            const splatMesh = new THREE.Mesh(splatGeo, splatMat);
            splatMesh.position.copy(p.mesh.position);
            this.scene.add(splatMesh);
            this._decals.push({ mesh: splatMesh, timer: 2, life: 2 });
            splat = true;
          }
        });
      }

      // Check paintable mesh collision
      if (!splat) {
        const meshes: THREE.Mesh[] = [];
        this.scene.traverse(o => {
          if (o instanceof THREE.Mesh && o.userData['paintable']) meshes.push(o);
        });
        const ray = new THREE.Raycaster(
          p.mesh.position.clone(),
          p.dir.clone(),
          0,
          p.speed * dt + 0.5
        );
        const hits = ray.intersectObjects(meshes, false);
        if (hits.length) {
          const hit = hits[0];
          // Paint wall
          const mat = (hit.object as THREE.Mesh).material as THREE.MeshLambertMaterial;
          mat.color.set(p.paintHex);
          mat.needsUpdate = true;
          // Splat decal
          const splatGeo = new THREE.CircleGeometry(0.5 + Math.random() * 0.3, 7);
          const splatMat = new THREE.MeshBasicMaterial({
            color: 0xE8E4D8, transparent: true, opacity: 0.9, depthWrite: false,
            polygonOffset: true, polygonOffsetFactor: -1,
          });
          const splatMesh = new THREE.Mesh(splatGeo, splatMat);
          const worldNormal = hit.face!.normal.clone()
            .transformDirection((hit.object as THREE.Mesh).matrixWorld).normalize();
          splatMesh.position.copy(hit.point).addScaledVector(worldNormal, 0.04);
          splatMesh.lookAt(splatMesh.position.clone().add(worldNormal));
          this.scene.add(splatMesh);
          this._decals.push({ mesh: splatMesh, timer: 8, life: 8 });
          splat = true;
        }
      }

      if (splat || p.timer <= 0) {
        // Ground splat if missed
        if (!splat) {
          this._spawnGroundBlob(p.mesh.position.x, p.mesh.position.z, 0.35, '#E8E4D8');
        }
        this.scene.remove(p.mesh);
        this._projectiles.splice(i, 1);
      }
    }

    // ── Decal fade-out ──────────────────────────────────────────────────────
    for (let i = this._decals.length - 1; i >= 0; i--) {
      const d = this._decals[i];
      d.timer -= dt;
      const mat = d.mesh.material as THREE.MeshBasicMaterial;
      // Fade in last 2 seconds
      if (d.timer < 2) mat.opacity = Math.max(0, (d.timer / 2) * 0.92);
      if (d.timer <= 0) {
        this.scene.remove(d.mesh);
        this._decals.splice(i, 1);
      }
    }
  }

  attack(): void {
    this._swinging = true;
    this._attackTimer = 0.35;
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

  show(): void  { this.group.visible = true; }
  hide(): void  { this.group.visible = false; }

  dispose(): void {
    this._decals.forEach(d => this.scene.remove(d.mesh));
    this._projectiles.forEach(p => this.scene.remove(p.mesh));
    this._scaffolds.forEach(s => this.scene.remove(s.mesh));
    if (this._muzzleFlash) this.scene.remove(this._muzzleFlash.mesh);
    this._decals = [];
    this._projectiles = [];
    this._scaffolds = [];
    this._muzzleFlash = null;
    this.scene.remove(this.group);
  }
}
