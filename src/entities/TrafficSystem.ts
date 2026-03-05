import * as THREE from 'three';

const BRAKE_DISTANCE = 14;
const STOP_DISTANCE  = 8;
const RESUME_RATE    = 6;

// Distinct car shapes — each has unique proportions
type CarType = 'sedan' | 'suv' | 'sports' | 'pickup' | 'police' | 'taxi' | 'van' | 'hatchback';

const CAR_SPECS: Record<CarType, { bw: number; bh: number; bl: number; rw: number; rh: number; rl: number; rz: number }> = {
  //               body: w    h     l      roof: w    h    l     rz (roof z offset)
  sedan:    { bw:2.2, bh:0.8, bl:4.4,  rw:1.8, rh:0.7, rl:2.6,  rz:-0.2 },
  hatchback:{ bw:2.1, bh:0.9, bl:3.8,  rw:1.8, rh:0.8, rl:2.4,  rz: 0.1 },
  suv:      { bw:2.3, bh:1.1, bl:4.6,  rw:2.0, rh:0.9, rl:3.0,  rz:-0.1 },
  sports:   { bw:2.2, bh:0.6, bl:4.6,  rw:1.9, rh:0.5, rl:2.2,  rz:-0.3 },
  pickup:   { bw:2.3, bh:0.9, bl:5.2,  rw:2.0, rh:0.9, rl:2.4,  rz:-1.0 },
  police:   { bw:2.2, bh:0.8, bl:4.4,  rw:1.8, rh:0.7, rl:2.6,  rz:-0.2 },
  taxi:     { bw:2.2, bh:0.9, bl:4.4,  rw:1.8, rh:0.8, rl:2.6,  rz:-0.2 },
  van:      { bw:2.2, bh:1.4, bl:4.8,  rw:2.1, rh:0.4, rl:3.6,  rz: 0.2 },
};

// Bounding half-dims for collision (along travel axis = hd, perp = hw)
const CAR_COLLISION: Record<CarType, { hw: number; hd: number }> = {
  sedan:    { hw:1.10, hd:2.20 },
  hatchback:{ hw:1.05, hd:1.90 },
  suv:      { hw:1.15, hd:2.30 },
  sports:   { hw:1.10, hd:2.30 },
  pickup:   { hw:1.15, hd:2.60 },
  police:   { hw:1.10, hd:2.20 },
  taxi:     { hw:1.10, hd:2.20 },
  van:      { hw:1.10, hd:2.40 },
};

const GENERIC_TYPES: CarType[] = ['sedan', 'hatchback', 'suv', 'sports', 'pickup', 'van'];
const BODY_COLORS = [0xE63946, 0x2196F3, 0xFFB300, 0x4CAF50, 0x9C27B0, 0xFF6B35, 0x00BCD4, 0xF5F5F5, 0xCCCCCC];

function buildCar(type: CarType): THREE.Group {
  const g   = new THREE.Group();
  const s   = CAR_SPECS[type];
  const isPolice = type === 'police';
  const isTaxi   = type === 'taxi';
  const bodyColor = isPolice ? 0xDDDDEE : isTaxi ? 0xFFCC00 : BODY_COLORS[Math.floor(Math.random() * BODY_COLORS.length)];

  const bodyMat  = new THREE.MeshLambertMaterial({ color: bodyColor });
  const roofMat  = isPolice ? new THREE.MeshLambertMaterial({ color: 0xFFFFFF }) : bodyMat;
  const winMat   = new THREE.MeshLambertMaterial({ color: 0x223344 });
  const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
  const rimMat   = new THREE.MeshLambertMaterial({ color: 0x888888 });
  const headMat  = new THREE.MeshLambertMaterial({ color: 0xffffdd, emissive: 0xffffdd, emissiveIntensity: 0.6 });
  const tailMat  = new THREE.MeshLambertMaterial({ color: 0xff2200, emissive: 0xff2200, emissiveIntensity: 0.6 });

  // Body
  const body = new THREE.Mesh(new THREE.BoxGeometry(s.bw, s.bh, s.bl), bodyMat);
  body.position.y = s.bh / 2;
  body.castShadow = true;
  g.add(body);

  // Roof / cabin
  const roof = new THREE.Mesh(new THREE.BoxGeometry(s.rw, s.rh, s.rl), roofMat);
  roof.position.set(0, s.bh + s.rh / 2, s.rz);
  roof.castShadow = true;
  g.add(roof);

  // Windscreens
  const wsH = Math.min(s.rh, 0.55);
  const ws = new THREE.Mesh(new THREE.BoxGeometry(s.rw * 0.9, wsH, 0.08), winMat);
  ws.position.set(0, s.bh + wsH / 2 + 0.05, s.rz - s.rl / 2);
  g.add(ws);
  const wsR = new THREE.Mesh(new THREE.BoxGeometry(s.rw * 0.9, wsH, 0.08), winMat);
  wsR.position.set(0, s.bh + wsH / 2 + 0.05, s.rz + s.rl / 2);
  g.add(wsR);

  // Wheels
  const wr = 0.38, wt = 0.26;
  const wheelGeo = new THREE.CylinderGeometry(wr, wr, wt, 10);
  const rimGeo   = new THREE.CylinderGeometry(wr * 0.55, wr * 0.55, wt + 0.02, 8);
  const wz1 = s.bl * 0.36, wz2 = -s.bl * 0.36;
  const wx  = s.bw / 2 + wt / 2;
  for (const [wpx, wpz] of [[ wx, wz1],[ wx, wz2],[-wx, wz1],[-wx, wz2]] as [number,number][]) {
    const wh = new THREE.Mesh(wheelGeo, wheelMat);
    wh.rotation.z = Math.PI / 2; wh.position.set(wpx, wr, wpz); wh.castShadow = true; g.add(wh);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.z = Math.PI / 2; rim.position.set(wpx + (wpx > 0 ? 0.04 : -0.04), wr, wpz); g.add(rim);
  }

  // Headlights + taillights
  const lw = s.bw * 0.28, lh = 0.18, ld = 0.06;
  for (const lx of [-s.bw * 0.28, s.bw * 0.28]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(lw, lh, ld), headMat);
    hl.position.set(lx, s.bh * 0.65, -s.bl / 2); g.add(hl);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(lw, lh, ld), tailMat);
    tl.position.set(lx, s.bh * 0.65, s.bl / 2); g.add(tl);
  }

  // Police light bar
  if (isPolice) {
    const barMat = new THREE.MeshLambertMaterial({ color: 0x1133FF, emissive: 0x1133FF, emissiveIntensity: 0.8 });
    const bar = new THREE.Mesh(new THREE.BoxGeometry(s.rw * 0.6, 0.18, 0.5), barMat);
    bar.position.set(0, s.bh + s.rh + 0.1, s.rz); g.add(bar);
  }

  // Taxi sign
  if (isTaxi) {
    const signMat = new THREE.MeshLambertMaterial({ color: 0xFFEE00, emissive: 0xFFEE00, emissiveIntensity: 0.4 });
    const sign = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.28, 0.35), signMat);
    sign.position.set(0, s.bh + s.rh + 0.14, s.rz); g.add(sign);
  }

  // Pickup truck bed (flat section at rear)
  if (type === 'pickup') {
    const bedMat = new THREE.MeshLambertMaterial({ color: 0x222222 });
    const bed = new THREE.Mesh(new THREE.BoxGeometry(s.bw * 0.9, 0.08, 1.8), bedMat);
    bed.position.set(0, s.bh + 0.04, s.bl * 0.3); g.add(bed);
  }

  return g;
}

interface TrafficCar {
  group: THREE.Group;
  axis: 'x' | 'z';
  roadPos: number;
  laneOffset: number;
  baseSpeed: number;
  currentSpeed: number;
  dir: 1 | -1;
  pos: number;
  nudgeVel: number;
  hw: number;
  hd: number;
}

export class TrafficSystem {
  private cars: TrafficCar[] = [];
  private scene: THREE.Scene;
  private warmup = 4.0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this._spawn();
  }

  private _spawn(): void {
    const roadLines = [-200, -160, -120, -80, -40, 0, 40, 80, 120, 160, 200];

    const spawnCar = (axis: 'x' | 'z') => {
      const isSpecial = Math.random() < 0.15;
      const type: CarType = isSpecial
        ? (Math.random() < 0.7 ? 'police' : 'taxi')
        : GENERIC_TYPES[Math.floor(Math.random() * GENERIC_TYPES.length)];

      const group = buildCar(type);
      const col   = CAR_COLLISION[type];
      const roadPos    = roadLines[Math.floor(Math.random() * roadLines.length)];
      const laneOffset = Math.random() > 0.5 ? 2.5 : -2.5;
      const baseSpeed  = 10 + Math.random() * 12;
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      let pos = -200 + Math.random() * 400;
      if (Math.abs(pos) < 50) pos = pos < 0 ? -65 : 65;

      group.rotation.y = axis === 'x' ? (dir === 1 ? -Math.PI / 2 : Math.PI / 2) : (dir === 1 ? Math.PI : 0);

      const car: TrafficCar = { group, axis, roadPos, laneOffset, baseSpeed, currentSpeed: baseSpeed, dir, pos, nudgeVel: 0, hw: col.hw, hd: col.hd };
      this.cars.push(car);
      this.scene.add(group);
      this._applyPosition(car);
    };

    for (let i = 0; i < 14; i++) spawnCar('z');
    for (let i = 0; i < 14; i++) spawnCar('x');
  }

  private _applyPosition(car: TrafficCar): void {
    const y = 0;
    if (car.axis === 'x') car.group.position.set(car.pos, y, car.roadPos + car.laneOffset);
    else                  car.group.position.set(car.roadPos + car.laneOffset, y, car.pos);
  }

  update(dt: number, vanX: number, vanZ: number, vanSpeed = 0): void {
    if (this.warmup > 0) this.warmup -= dt;
    const vanIsMoving = vanSpeed > 2;

    for (const car of this.cars) {
      const carX = car.group.position.x, carZ = car.group.position.z;
      let aheadDist = Infinity, lateralDist = Infinity;
      if (car.axis === 'x') { aheadDist = (vanX - carX) * car.dir; lateralDist = Math.abs(vanZ - carZ); }
      else                  { aheadDist = (vanZ - carZ) * car.dir; lateralDist = Math.abs(vanX - carX); }

      const vanInLane = lateralDist < 5, vanAhead = aheadDist > 0 && aheadDist < BRAKE_DISTANCE;

      if (this.warmup > 0 || !vanIsMoving) {
        car.currentSpeed = Math.min(car.baseSpeed, car.currentSpeed + RESUME_RATE * dt);
      } else if (vanInLane && vanAhead) {
        const t = Math.max(0, (aheadDist - STOP_DISTANCE) / (BRAKE_DISTANCE - STOP_DISTANCE));
        car.currentSpeed = car.baseSpeed * t;
      } else {
        car.currentSpeed = Math.min(car.baseSpeed, car.currentSpeed + RESUME_RATE * dt);
      }

      if (Math.abs(car.nudgeVel) > 0.05) { car.pos += car.nudgeVel * dt; car.nudgeVel *= Math.max(0, 1 - 6 * dt); }
      else car.nudgeVel = 0;

      car.pos += car.dir * car.currentSpeed * dt;
      if (car.pos > 235) car.pos = -235;
      if (car.pos < -235) car.pos = 235;
      this._applyPosition(car);
    }
  }

  resolveVan(vanX: number, vanZ: number, vanRadius = 1.8): { x: number; z: number; hit: boolean } {
    let rx = vanX, rz = vanZ; let hit = false;
    for (let pass = 0; pass < 3; pass++) {
      for (const car of this.cars) {
        const cx = car.group.position.x, cz = car.group.position.z;
        const hw = (car.axis === 'x' ? car.hd : car.hw) + vanRadius;
        const hd = (car.axis === 'x' ? car.hw : car.hd) + vanRadius;
        const dx = rx - cx, dz = rz - cz;
        if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
          const ox = hw - Math.abs(dx), oz = hd - Math.abs(dz); const ESCAPE = 6;
          if (ox < oz) { const ps = dx < 0 ? -1 : 1; rx += ps * ox; if (car.axis === 'x') car.pos -= ps*(ox+ESCAPE); else car.pos += car.dir*(oz+ESCAPE); }
          else         { const ps = dz < 0 ? -1 : 1; rz += ps * oz; if (car.axis === 'z') car.pos -= ps*(oz+ESCAPE); else car.pos += car.dir*(ox+ESCAPE); }
          car.currentSpeed = car.baseSpeed; car.nudgeVel = 0; hit = true;
        }
      }
    }
    return { x: rx, z: rz, hit };
  }

  /** @deprecated */
  checkVanCollision(vanX: number, vanZ: number): { hit: boolean; pushX: number; pushZ: number } {
    const r = this.resolveVan(vanX, vanZ); return { hit: r.hit, pushX: r.x - vanX, pushZ: r.z - vanZ };
  }
}
