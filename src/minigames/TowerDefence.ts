// ── Tower Defence — Troweled Earth Rush: 3D Three.js Tower Defence ──────────
import * as THREE from 'three';

/* ═══════════════════════════════════════════════════════════════════════════
   PUBLIC API — kept identical so main.ts doesn't change
   ═══════════════════════════════════════════════════════════════════════════ */

export interface TDConfig {
  jobTitle:  string;
  payout:    number;
  crewIds:   string[];
  rival:     { name: string; color: string; difficulty: number };
}

export interface TDResult {
  won:          boolean;
  earned:       number;
  wavesCleared: number;
  qualityPct:   number;
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONSTANTS & DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const GRID_W = 22;       // grid columns (wider for multi-path)
const GRID_H = 12;       // grid rows
const CELL   = 2;        // world units per cell
const WORLD_W = GRID_W * CELL;
const WORLD_H = GRID_H * CELL;

// Crew data
interface CrewData { name: string; role: string; skin: string; color: string; damage: number; range: number; fireRate: number; cost: number; special: string; desc: string; }
const CREW: Record<string, CrewData> = {
  jose:     { name:'Jose',     role:'Wall Maestro',  skin:'#C8856A', color:'#E8A830', damage:35,  range:6,  fireRate:1.2, cost:60,  special:'slow',    desc:'Slows enemies' },
  matt:     { name:'Matt',     role:'Negotiator',    skin:'#E0B494', color:'#4A90D9', damage:20,  range:8,  fireRate:0.8, cost:80,  special:'payout',  desc:'+50% kill payout' },
  tsuyoshi: { name:'Tsuyoshi', role:'Rush Tower',    skin:'#F0D4B0', color:'#FF4444', damage:15,  range:4,  fireRate:3.0, cost:50,  special:'none',    desc:'Fast attacker' },
  jarrad:   { name:'Jarrad',   role:'Blueprint',     skin:'#D8A878', color:'#9B59B6', damage:25,  range:6,  fireRate:1.0, cost:70,  special:'double3', desc:'3rd shot = 2× dmg' },
  fabio:    { name:'Fabio',    role:'Pressure',      skin:'#D4A070', color:'#27AE60', damage:30,  range:5,  fireRate:1.5, cost:65,  special:'splash',  desc:'AOE splash damage' },
  phil:     { name:'Phil',     role:'Veteran Wall',  skin:'#D8B89A', color:'#7F8C8D', damage:50,  range:4,  fireRate:0.5, cost:90,  special:'block',   desc:'Blocks the path' },
  joe:      { name:'Joe',      role:'Intel Scout',   skin:'#EED8C0', color:'#E67E22', damage:10,  range:10, fireRate:2.0, cost:55,  special:'reveal',  desc:'Reveals camo' },
  connie:   { name:'Connie',   role:'Command',       skin:'#F0C8A0', color:'#E74C3C', damage:20,  range:5,  fireRate:0,   cost:75,  special:'aura',    desc:'AOE aura damage/s' },
  mikayla:  { name:'Mikayla',  role:'Admin',         skin:'#F0C8A0', color:'#1ABC9C', damage:5,   range:4,  fireRate:0.8, cost:45,  special:'income',  desc:'Earns sats passively' },
};

// Equipment towers
interface EquipData { name: string; color: string; damage: number; range: number; fireRate: number; cost: number; special: string; desc: string; }
const EQUIP: Record<string, EquipData> = {
  trowel:    { name:'Auto-Trowel',       color:'#C0C0C0', damage:25,  range:8,  fireRate:0.8, cost:70,  special:'pierce',  desc:'Pierces in a line' },
  mixer:     { name:'Render Mixer',      color:'#8B4513', damage:40,  range:5,  fireRate:0.6, cost:85,  special:'aoebomb', desc:'Explosive splash' },
  barricade: { name:'Scaffold Barricade',color:'#DAA520', damage:0,   range:3,  fireRate:0,   cost:40,  special:'slowzone',desc:'Slows path segment' },
  drone:     { name:'Spray Drone',       color:'#00CED1', damage:15,  range:12, fireRate:4.0, cost:95,  special:'follow',  desc:'Follows slowest enemy' },
  beam:      { name:'Polish Beam',       color:'#FF69B4', damage:100, range:7,  fireRate:0.2, cost:120, special:'beam',    desc:'Charged beam, melts bosses' },
};

// Enemy types
interface EnemyDef { name: string; hp: number; speed: number; reward: number; color: string; scale: number; special: string; }
const ENEMIES: Record<string, EnemyDef> = {
  bucket:    { name:'Bucket Boy',       hp:80,   speed:4.0, reward:10, color:'#FF6B6B', scale:0.6, special:'none' },
  heavy:     { name:'Union Heavy',      hp:400,  speed:1.5, reward:25, color:'#4A4A8A', scale:1.0, special:'none' },
  splitter:  { name:'Knock-off Crew',   hp:120,  speed:2.5, reward:15, color:'#FFA500', scale:0.7, special:'split' },
  camo:      { name:'Night Shift',      hp:100,  speed:3.0, reward:20, color:'#2F4F4F', scale:0.65,special:'camo' },
  flier:     { name:'Drone Swarm',      hp:60,   speed:3.5, reward:12, color:'#87CEEB', scale:0.5, special:'fly' },
  standard:  { name:'Rogue Apprentice', hp:150,  speed:2.5, reward:15, color:'#CD853F', scale:0.75,special:'none' },
  support:   { name:'Site Foreman',     hp:200,  speed:2.0, reward:30, color:'#32CD32', scale:0.8, special:'heal' },
  boss:      { name:'Rival Master',     hp:2000, speed:1.0, reward:150,color:'#8B0000', scale:1.4, special:'boss' },
};

/* ═══════════════════════════════════════════════════════════════════════════
   LEVEL DEFINITIONS
   ═══════════════════════════════════════════════════════════════════════════ */

interface LevelDef {
  name: string;
  subtitle: string;
  paths: [number, number][][];  // multiple paths, each is array of [gx, gz] waypoints
}

// All levels share a central house at grid [11,6] — enemies approach from
// different entry points and all converge on the house in the centre.
const LEVELS: LevelDef[] = [
  {
    // 1 entry — learn the mechanic
    name: 'BRUNSWICK',
    subtitle: 'defend the house',
    paths: [
      // West entry — horseshoe curve, enters from left
      [[-1,6],[3,6],[3,2],[7,2],[7,6],[11,6]],
    ],
  },
  {
    // 2 entries — west + east flanks
    name: 'FOOTSCRAY',
    subtitle: 'two fronts',
    paths: [
      // West entry — same horseshoe as level 1
      [[-1,6],[3,6],[3,2],[7,2],[7,6],[10,6],[11,6]],
      // East entry — hooks south then back north
      [[22,6],[17,6],[17,10],[13,10],[13,7],[11,7],[11,6]],
    ],
  },
  {
    // 3 entries — west, east, and north all converge on the house
    name: 'ST KILDA',
    subtitle: '3 entries — hold the house',
    paths: [
      // West entry
      [[-1,6],[3,6],[3,2],[7,2],[7,6],[10,6],[11,6]],
      // East entry — loops south
      [[22,6],[17,6],[17,10],[13,10],[13,7],[11,7],[11,6]],
      // North entry — drops down then J-curves in from the top
      [[11,-1],[11,3],[8,3],[8,5],[11,5],[11,6]],
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   BANTER SYSTEM
   ═══════════════════════════════════════════════════════════════════════════ */

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const BANTER: Record<string, string[]> = {
  wave_start: [
    "Send 'em boys! 🦈",
    "This wall is MINE.",
    "TEM can't stop what's coming.",
    "Let's see your precious crew now.",
    "My boys are hungry. Go!",
    "Time to earn that contract.",
  ],
  enemy_reaches: [
    "YES! Get in there! 💀",
    "Ha! Your plaster is crumbling.",
    "One step closer... keep going!",
    "The wall is ours!",
  ],
  player_kills: [
    "You got lucky.",
    "One down, ten more coming.",
    "Nice shot. Won't matter.",
    "My boys don't stay dead.",
  ],
  boss_wave: [
    "Meet the big guy. 😤",
    "Our Render Master doesn't fall.",
    "This one's personal.",
    "Send the boss!",
  ],
  player_winning: [
    "Alright alright... impressive.",
    "Don't get comfortable.",
    "Fine. But the contract's still mine.",
  ],
};

// Wave definitions generator
function generateWaves(difficulty: number): { enemies: { type: string; count: number }[]; delay: number }[] {
  const numWaves = Math.min(5 + Math.floor(difficulty * 2), 10);
  const waves: { enemies: { type: string; count: number }[]; delay: number }[] = [];
  const types = ['bucket','standard','heavy','splitter','camo','flier','support'];
  for (let w = 0; w < numWaves; w++) {
    const ents: { type: string; count: number }[] = [];
    const baseCount = 4 + w * 2 + Math.floor(difficulty * 3);
    if (w < 2) {
      ents.push({ type:'bucket', count: baseCount });
      if (w === 1) ents.push({ type:'standard', count: Math.floor(baseCount * 0.4) });
    } else {
      // Mix of types
      const pick = types.slice(0, Math.min(2 + w, types.length));
      for (const t of pick) {
        ents.push({ type: t, count: Math.max(1, Math.floor(baseCount / pick.length * (0.5 + Math.random()))) });
      }
    }
    // Boss every 5 waves
    if ((w + 1) % 5 === 0) ents.push({ type:'boss', count: 1 });
    waves.push({ enemies: ents, delay: Math.max(0.4, 1.2 - w * 0.08) });
  }
  return waves;
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN CLASS
   ═══════════════════════════════════════════════════════════════════════════ */

export class TowerDefence {
  private overlay: HTMLDivElement | null = null;
  private running = false;
  private animId = 0;

  async show(config: TDConfig, onComplete: (r: TDResult) => void): Promise<void> {
    const self = this;
    if (self.running) self.hide();
    self.running = true;

    /* ─── Level Select Screen ─── */
    const levelSelectEl = document.createElement('div');
    Object.assign(levelSelectEl.style, {
      position:'fixed', inset:'0', zIndex:'14001',
      background:'rgba(0,0,0,0.95)', display:'flex',
      flexDirection:'column', alignItems:'center', justifyContent:'center',
      fontFamily:'system-ui,sans-serif',
    });
    document.body.appendChild(levelSelectEl);

    levelSelectEl.innerHTML = `
      <div style="color:#FFD700;font-size:22px;font-weight:900;letter-spacing:3px;margin-bottom:6px">⚔️ CONTRACT WARS</div>
      <div style="color:#aaa;font-size:13px;margin-bottom:24px">vs ${config.rival.name}</div>
      <div style="color:#fff;font-size:14px;font-weight:700;letter-spacing:2px;margin-bottom:16px">CHOOSE LEVEL</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        ${LEVELS.map((lv, i) => `
          <div data-level="${i}" style="
            width:140px;padding:16px;border-radius:12px;cursor:pointer;text-align:center;
            background:rgba(255,255,255,0.06);border:2px solid rgba(255,255,255,0.2);
            transition:border-color 0.2s,background 0.2s;touch-action:manipulation;
          ">
            <div style="font-size:20px;margin-bottom:6px">${(['🏘️','🏗️','🌊'] as string[])[i] || '🎯'}</div>
            <div style="color:#FFD700;font-weight:900;font-size:14px;letter-spacing:1px">${lv.name}</div>
            <div style="color:#aaa;font-size:11px;margin-top:4px">${lv.subtitle}</div>
            <div style="color:#888;font-size:10px;margin-top:4px">${lv.paths.length} path${lv.paths.length > 1 ? 's' : ''}</div>
          </div>
        `).join('')}
      </div>
    `;

    // Hover effects
    levelSelectEl.querySelectorAll('[data-level]').forEach(el => {
      (el as HTMLElement).addEventListener('mouseenter', () => {
        (el as HTMLElement).style.background = 'rgba(255,255,255,0.12)';
        (el as HTMLElement).style.borderColor = config.rival.color;
      });
      (el as HTMLElement).addEventListener('mouseleave', () => {
        (el as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
        (el as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
      });
    });

    await new Promise<void>(resolveLevelSelect => {
      levelSelectEl.querySelectorAll('[data-level]').forEach(el => {
        el.addEventListener('click', () => {
          const levelIdx = Number((el as HTMLElement).dataset.level);
          (self as any)._pendingLevelIdx = levelIdx;
          levelSelectEl.remove();
          resolveLevelSelect();
        });
      });
      // Also touchstart for mobile
      levelSelectEl.querySelectorAll('[data-level]').forEach(el => {
        el.addEventListener('touchstart', (ev) => {
          ev.preventDefault();
          const levelIdx = Number((el as HTMLElement).dataset.level);
          (self as any)._pendingLevelIdx = levelIdx;
          levelSelectEl.remove();
          resolveLevelSelect();
        }, { passive: false });
      });
    });

    const levelIdx = (self as any)._pendingLevelIdx ?? 0;
    delete (self as any)._pendingLevelIdx;
    const levelDef = LEVELS[levelIdx];

    // ── Create overlay ──
    const overlay = document.createElement('div');
    overlay.id = 'td-overlay';
    Object.assign(overlay.style, {
      position:'fixed', top:'0', left:'0', width:'100%', height:'100%',
      zIndex:'14000', background:'#1a1a2e', overflow:'hidden',
      fontFamily:'"Segoe UI",system-ui,sans-serif', touchAction:'none',
    });
    document.body.appendChild(overlay);
    self.overlay = overlay;

    // ── Three.js Setup ──
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    overlay.appendChild(renderer.domElement);
    renderer.domElement.style.display = 'block';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#1e2d3d');
    scene.fog = new THREE.Fog('#1e2d3d', 65, 95);

    // Camera — isometric-ish overhead
    const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
    const camTarget = new THREE.Vector3(WORLD_W / 2, 0, WORLD_H / 2);
    let camDist = 38;
    const updateCam = () => {
      cam.position.set(camTarget.x + camDist * 0.6, camDist * 0.8, camTarget.z + camDist * 0.6);
      cam.lookAt(camTarget);
    };
    updateCam();

    // Lights
    const ambient = new THREE.AmbientLight('#B8C8D8', 0.5);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight('#FFE0B0', 0.9);
    dirLight.position.set(20, 30, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(1024, 1024);
    dirLight.shadow.camera.near = 1; dirLight.shadow.camera.far = 80;
    dirLight.shadow.camera.left = -30; dirLight.shadow.camera.right = 30;
    dirLight.shadow.camera.top = 30; dirLight.shadow.camera.bottom = -30;
    scene.add(dirLight);
    // Cool blue fill from opposite side — dusk Melbourne sky feel
    const fillLight = new THREE.DirectionalLight('#4A70B0', 0.35);
    fillLight.position.set(-20, 15, -10);
    scene.add(fillLight);

    // ── Ground — checkerboard construction yard ──
    const borderGeo = new THREE.PlaneGeometry(WORLD_W + 12, WORLD_H + 12);
    const borderMat = new THREE.MeshStandardMaterial({ color:'#4a5248', roughness:0.95 });
    const borderGround = new THREE.Mesh(borderGeo, borderMat);
    borderGround.rotation.x = -Math.PI / 2;
    borderGround.position.set(WORLD_W / 2, -0.07, WORLD_H / 2);
    borderGround.receiveShadow = true;
    scene.add(borderGround);
    // Checkerboard tiles
    const tileGeo = new THREE.PlaneGeometry(CELL, CELL);
    const tileMat0 = new THREE.MeshStandardMaterial({ color:'#556055', roughness:0.95 });
    const tileMat1 = new THREE.MeshStandardMaterial({ color:'#687068', roughness:0.9 });
    for (let gx = 0; gx < GRID_W; gx++) {
      for (let gz = 0; gz < GRID_H; gz++) {
        const tile = new THREE.Mesh(tileGeo, (gx + gz) % 2 === 0 ? tileMat0 : tileMat1);
        tile.rotation.x = -Math.PI / 2;
        tile.position.set(gx * CELL + CELL / 2, -0.03, gz * CELL + CELL / 2);
        tile.receiveShadow = true;
        scene.add(tile);
      }
    }

    // ── Grid cells (placeable) ──
    const gridOccupied: boolean[][] = Array.from({ length: GRID_W }, () => Array(GRID_H).fill(false));
    const gridMeshes: (THREE.Mesh | null)[][] = Array.from({ length: GRID_W }, () => Array(GRID_H).fill(null));
    const cellGeo = new THREE.BoxGeometry(CELL * 0.92, 0.1, CELL * 0.92);
    const cellMatNormal = new THREE.MeshStandardMaterial({ color:'#4a7a3a', roughness:0.85, transparent:true, opacity:0.55 });
    const cellMatHover = new THREE.MeshStandardMaterial({ color:'#6aaf50', roughness:0.8, transparent:true, opacity:0.75 });

    // ── Build path curves for each path in this level ──
    const pathCurves: THREE.CatmullRomCurve3[] = levelDef.paths.map(pathGrid => {
      const pts = pathGrid.map(([gx, gz]) => new THREE.Vector3(gx * CELL, 0, gz * CELL));
      return new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.3);
    });

    // Mark ALL path cells as occupied
    const pathCells = new Set<string>();
    for (const pathGrid of levelDef.paths) {
      for (let i = 0; i < pathGrid.length - 1; i++) {
        const [ax, az] = pathGrid[i], [bx, bz] = pathGrid[i + 1];
        const steps = Math.max(Math.abs(bx - ax), Math.abs(bz - az));
        for (let s = 0; s <= steps; s++) {
          const t = steps > 0 ? s / steps : 0;
          const gx = Math.round(ax + (bx - ax) * t);
          const gz = Math.round(az + (bz - az) * t);
          const cgx = Math.max(0, Math.min(GRID_W - 1, gx));
          const cgz = Math.max(0, Math.min(GRID_H - 1, gz));
          if (gx >= 0 && gx < GRID_W && gz >= 0 && gz < GRID_H) {
            gridOccupied[cgx][cgz] = true;
            pathCells.add(`${cgx},${cgz}`);
          }
        }
      }
    }

    // Render grid cells
    for (let gx = 0; gx < GRID_W; gx++) {
      for (let gz = 0; gz < GRID_H; gz++) {
        if (gridOccupied[gx][gz]) continue;
        const mesh = new THREE.Mesh(cellGeo, cellMatNormal.clone());
        mesh.position.set(gx * CELL + CELL / 2, 0.05, gz * CELL + CELL / 2);
        mesh.receiveShadow = true;
        mesh.userData = { gx, gz };
        scene.add(mesh);
        gridMeshes[gx][gz] = mesh;
      }
    }

    // ── Path rendering — flat tarmac road segments + construction cones ──
    const roadMat = new THREE.MeshStandardMaterial({ color:'#8B7355', roughness:0.88 });
    const dashMat = new THREE.MeshStandardMaterial({ color:'#FFF8DC', roughness:0.7 });
    const coneMat = new THREE.MeshStandardMaterial({ color:'#FF6600', roughness:0.75 });
    const coneBaseMat = new THREE.MeshStandardMaterial({ color:'#FFFFFF', roughness:0.7 });
    const coneGeo = new THREE.ConeGeometry(0.12, 0.35, 6);
    const coneBaseGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.04, 6);
    const roadSegGeo = new THREE.BoxGeometry(CELL * 0.97, 0.09, CELL * 0.97);

    for (const curve of pathCurves) {
      const pathPoints = curve.getPoints(200);

      // Flat road tile at each path cell
      const visitedRoad = new Set<string>();
      for (const pt of pathPoints) {
        const rx = Math.round(pt.x / CELL - 0.5);
        const rz = Math.round(pt.z / CELL - 0.5);
        const key = `${rx},${rz}`;
        if (!visitedRoad.has(key)) {
          visitedRoad.add(key);
          const road = new THREE.Mesh(roadSegGeo, roadMat);
          road.position.set(rx * CELL + CELL / 2, 0.045, rz * CELL + CELL / 2);
          road.receiveShadow = true;
          scene.add(road);
        }
      }

      // Centre dashes
      const dashGeo = new THREE.BoxGeometry(0.1, 0.02, 0.42);
      for (let i = 0; i < pathPoints.length; i += 8) {
        const d = new THREE.Mesh(dashGeo, dashMat);
        d.position.copy(pathPoints[i]);
        d.position.y = 0.1;
        if (i + 1 < pathPoints.length) {
          const ahead = pathPoints[Math.min(i + 1, pathPoints.length - 1)];
          d.lookAt(ahead.x, 0.1, ahead.z);
        }
        scene.add(d);
      }

      // Construction cones along path edges
      for (let i = 4; i < pathPoints.length; i += 14) {
        const pt = pathPoints[i];
        const ahead = pathPoints[Math.min(i + 1, pathPoints.length - 1)];
        const dir = new THREE.Vector3(ahead.x - pt.x, 0, ahead.z - pt.z).normalize();
        const perp = new THREE.Vector3(-dir.z, 0, dir.x);
        for (const side of [-1, 1]) {
          const cx = pt.x + perp.x * side * 1.05;
          const cz = pt.z + perp.z * side * 1.05;
          const cone = new THREE.Mesh(coneGeo, coneMat);
          cone.position.set(cx, 0.18, cz);
          cone.castShadow = true;
          scene.add(cone);
          const coneBase = new THREE.Mesh(coneBaseGeo, coneBaseMat);
          coneBase.position.set(cx, 0.02, cz);
          scene.add(coneBase);
        }
      }
    }

    // ── House / Wall Mesh at end of path 0 — Melbourne terrace style ──
    const endPt = levelDef.paths[0][levelDef.paths[0].length - 1];
    const houseGroup = new THREE.Group();

    // Main brick body
    const houseBody = new THREE.Mesh(
      new THREE.BoxGeometry(2.8, 2.4, 2.0),
      new THREE.MeshLambertMaterial({ color: 0xA06848 })
    );
    houseBody.position.y = 1.2;
    houseBody.castShadow = true;
    houseGroup.add(houseBody);

    // White render facade on front face
    const facade = new THREE.Mesh(
      new THREE.BoxGeometry(2.82, 1.3, 0.05),
      new THREE.MeshLambertMaterial({ color: 0xF0EDE0 })
    );
    facade.position.set(0, 0.75, 1.02);
    houseGroup.add(facade);

    // Windows (dark squares with white frames)
    const winMat = new THREE.MeshLambertMaterial({ color: 0x1A2A3A });
    const frameMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    for (const wx of [-0.75, 0.75]) {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.58, 0.04), frameMat);
      frame.position.set(wx, 1.45, 1.04);
      houseGroup.add(frame);
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.46, 0.06), winMat);
      win.position.set(wx, 1.45, 1.05);
      houseGroup.add(win);
    }

    // Door
    const door = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.9, 0.06),
      new THREE.MeshLambertMaterial({ color: 0x3A2010 })
    );
    door.position.set(0, 0.45, 1.04);
    houseGroup.add(door);
    // Door knob
    const knob = new THREE.Mesh(
      new THREE.SphereGeometry(0.04, 5, 5),
      new THREE.MeshLambertMaterial({ color: 0xFFD700 })
    );
    knob.position.set(0.18, 0.45, 1.08);
    houseGroup.add(knob);

    // Flat terrace roof (parapet-style)
    const roofSlab = new THREE.Mesh(
      new THREE.BoxGeometry(3.0, 0.18, 2.2),
      new THREE.MeshLambertMaterial({ color: 0x8B4A4A })
    );
    roofSlab.position.y = 2.5;
    roofSlab.castShadow = true;
    houseGroup.add(roofSlab);
    // Parapet front wall
    const parapetFront = new THREE.Mesh(
      new THREE.BoxGeometry(3.05, 0.38, 0.14),
      new THREE.MeshLambertMaterial({ color: 0xA06848 })
    );
    parapetFront.position.set(0, 2.78, 1.08);
    houseGroup.add(parapetFront);

    // Small front fence/gate
    const fenceMat2 = new THREE.MeshLambertMaterial({ color: 0xF4F0E8 });
    for (const fi of [-0.7, 0.7]) {
      const fpost = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.65, 0.07), fenceMat2);
      fpost.position.set(fi, 0.33, 1.5);
      houseGroup.add(fpost);
    }
    const frail = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.06, 0.06), fenceMat2);
    frail.position.set(0, 0.6, 1.5);
    houseGroup.add(frail);

    // Garden strip (green patch in front)
    const gardenPatch = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.06, 0.55),
      new THREE.MeshLambertMaterial({ color: 0x3A6B2A })
    );
    gardenPatch.position.set(0, 0.03, 1.3);
    houseGroup.add(gardenPatch);

    // Glow ring on ground
    const glowGeo = new THREE.RingGeometry(1.8, 2.2, 32);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
    const glowRing = new THREE.Mesh(glowGeo, glowMat);
    glowRing.rotation.x = -Math.PI / 2;
    glowRing.position.y = 0.1;
    houseGroup.add(glowRing);

    houseGroup.position.set(endPt[0] * CELL + CELL / 2, 0, endPt[1] * CELL + CELL / 2);
    scene.add(houseGroup);

    // Warm golden point light near house
    const houseLight = new THREE.PointLight('#FF9944', 1.6, 22);
    houseLight.position.set(endPt[0] * CELL + CELL / 2, 4.5, endPt[1] * CELL + CELL / 2);
    scene.add(houseLight);

    // Mark house cell as occupied
    if (endPt[0] >= 0 && endPt[0] < GRID_W && endPt[1] >= 0 && endPt[1] < GRID_H) {
      gridOccupied[endPt[0]][endPt[1]] = true;
    }

    // ── Rival Figures — one per path entry ──
    const rivalFigures: THREE.Group[] = [];
    const rivalCol = new THREE.Color(config.rival.color);
    for (let pi = 0; pi < levelDef.paths.length; pi++) {
      const entryPt = levelDef.paths[pi][0];
      const figGroup = new THREE.Group();

      // Body
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 1.2, 0.5),
        new THREE.MeshLambertMaterial({ color: rivalCol })
      );
      body.position.y = 1.0;
      figGroup.add(body);

      // Head
      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 8, 8),
        new THREE.MeshLambertMaterial({ color: 0xD4A878 })
      );
      head.position.y = 2.1;
      figGroup.add(head);

      // Hard hat (rival style — dark)
      const rHat = new THREE.Mesh(
        new THREE.CylinderGeometry(0.38, 0.42, 0.18, 8),
        new THREE.MeshLambertMaterial({ color: 0x222222 })
      );
      rHat.position.y = 2.45;
      figGroup.add(rHat);

      // Arms raised (sending enemies)
      for (const [side, angle] of [[-1, 0.4], [1, -0.4]] as [number, number][]) {
        const arm = new THREE.Mesh(
          new THREE.BoxGeometry(0.22, 0.9, 0.22),
          new THREE.MeshLambertMaterial({ color: rivalCol })
        );
        arm.position.set(side * 0.55, 1.3, 0);
        arm.rotation.z = angle;
        figGroup.add(arm);
      }

      // Position at entry point, slightly outside the grid
      const ex = entryPt[0] < 0 ? entryPt[0] * CELL - 1 : entryPt[0] > GRID_W ? WORLD_W + 2 : entryPt[0] * CELL;
      const ez = entryPt[1] < 0 ? entryPt[1] * CELL - 1 : entryPt[1] > GRID_H ? WORLD_H + 2 : entryPt[1] * CELL;
      figGroup.position.set(ex, 0, ez);
      scene.add(figGroup);
      rivalFigures.push(figGroup);
    }

    // ── Perimeter — low brick wall ──
    const brickMat = new THREE.MeshStandardMaterial({ color:'#8B5E3C', roughness:0.9 });
    const brickCapMat = new THREE.MeshStandardMaterial({ color:'#A0704A', roughness:0.85 });
    const wallEWGeo = new THREE.BoxGeometry(CELL, 0.8, 0.3);
    const wallCapEWGeo = new THREE.BoxGeometry(CELL + 0.1, 0.12, 0.42);
    const wallNSGeo = new THREE.BoxGeometry(0.3, 0.8, CELL);
    const wallCapNSGeo = new THREE.BoxGeometry(0.42, 0.12, CELL + 0.1);
    for (const sx of [-0.55, WORLD_W + 0.25]) {
      for (let gzw = 0; gzw < GRID_H; gzw++) {
        const wall = new THREE.Mesh(wallEWGeo, brickMat);
        wall.position.set(sx, 0.4, gzw * CELL + CELL / 2);
        wall.castShadow = true; scene.add(wall);
        const cap = new THREE.Mesh(wallCapEWGeo, brickCapMat);
        cap.position.set(sx, 0.86, gzw * CELL + CELL / 2);
        scene.add(cap);
      }
    }
    for (const sz of [-0.55, WORLD_H + 0.25]) {
      for (let gxw = 0; gxw < GRID_W; gxw++) {
        const wall = new THREE.Mesh(wallNSGeo, brickMat);
        wall.position.set(gxw * CELL + CELL / 2, 0.4, sz);
        wall.castShadow = true; scene.add(wall);
        const cap = new THREE.Mesh(wallCapNSGeo, brickCapMat);
        cap.position.set(gxw * CELL + CELL / 2, 0.86, sz);
        scene.add(cap);
      }
    }

    // ── Distant Melbourne skyline silhouettes ──
    const skylineMat = new THREE.MeshStandardMaterial({ color:'#162030', roughness:1.0 });
    for (const [bx, bz, bw, bh, bd] of [
      [-10, WORLD_H / 2,      3,  12, 3],
      [-14, WORLD_H / 2 - 4,  2,   8, 2],
      [-12, WORLD_H / 2 + 5,  2.5,15, 2.5],
      [WORLD_W + 10, WORLD_H / 2,     3,  10, 3],
      [WORLD_W + 14, WORLD_H / 2 + 4, 2,  14, 2],
      [WORLD_W + 12, WORLD_H / 2 - 5, 2.5, 9, 2.5],
      [WORLD_W / 2 - 6, -10, 3,  11, 3],
      [WORLD_W / 2 + 6, -10, 2,   8, 2],
      [WORLD_W / 2,  WORLD_H + 10, 4, 13, 3],
      [WORLD_W / 2 - 10, WORLD_H + 10, 2.5, 10, 2.5],
    ] as [number, number, number, number, number][]) {
      const bMesh = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), skylineMat);
      bMesh.position.set(bx, bh / 2, bz);
      scene.add(bMesh);
    }

    // ── Street lamps near path ──
    const lampPostMat = new THREE.MeshStandardMaterial({ color:'#888888', metalness:0.5 });
    const lampGlowMat = new THREE.MeshBasicMaterial({ color:'#FFEE88', transparent:true, opacity:0.9 });
    const lampPostGeo = new THREE.CylinderGeometry(0.05, 0.07, 3.5, 6);
    const lampHeadGeo = new THREE.SphereGeometry(0.18, 8, 6);
    const lampArmGeo = new THREE.BoxGeometry(0.5, 0.05, 0.05);
    for (const [lx, lz] of [
      [3, 0], [9, 0], [15, 0],
      [3, GRID_H - 1], [9, GRID_H - 1], [15, GRID_H - 1],
    ] as [number, number][]) {
      if (pathCells.has(`${lx},${lz}`) || gridOccupied[lx]?.[lz]) continue;
      const lPost = new THREE.Mesh(lampPostGeo, lampPostMat);
      lPost.position.set(lx * CELL + CELL / 2, 1.75, lz * CELL + CELL / 2);
      lPost.castShadow = true; scene.add(lPost);
      const lArm = new THREE.Mesh(lampArmGeo, lampPostMat);
      lArm.position.set(lx * CELL + CELL / 2 + 0.25, 3.55, lz * CELL + CELL / 2);
      scene.add(lArm);
      const lHead = new THREE.Mesh(lampHeadGeo, lampGlowMat);
      lHead.position.set(lx * CELL + CELL / 2 + 0.5, 3.55, lz * CELL + CELL / 2);
      scene.add(lHead);
      const lLight = new THREE.PointLight('#FFEE88', 0.65, 9);
      lLight.position.set(lx * CELL + CELL / 2 + 0.5, 3.5, lz * CELL + CELL / 2);
      scene.add(lLight);
    }

    // ── Decorative props on ~15% of empty non-path cells ──
    const propBagMat    = new THREE.MeshStandardMaterial({ color:'#C8B88A', roughness:0.95 });
    const propBarrelMat = new THREE.MeshStandardMaterial({ color:'#4A5A3A', roughness:0.8 });
    const propBucketMat = new THREE.MeshStandardMaterial({ color:'#E8A830', roughness:0.8 });
    const propBoxMat    = new THREE.MeshStandardMaterial({ color:'#CC3A1A', roughness:0.85 });
    // Deterministic PRNG so layout is stable
    let _rngState = 12345;
    const nextRng = () => {
      _rngState = (_rngState * 1664525 + 1013904223) & 0x7fffffff;
      return _rngState / 0x7fffffff;
    };
    for (let gx = 0; gx < GRID_W; gx++) {
      for (let gz = 0; gz < GRID_H; gz++) {
        if (gridOccupied[gx][gz] || pathCells.has(`${gx},${gz}`)) continue;
        if (nextRng() > 0.15) continue;
        const pType = Math.floor(nextRng() * 4);
        const wx2 = gx * CELL + CELL / 2 + (nextRng() - 0.5) * 0.5;
        const wz2 = gz * CELL + CELL / 2 + (nextRng() - 0.5) * 0.5;
        let propMesh: THREE.Mesh;
        if (pType === 0) {
          propMesh = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.26, 0.26), propBagMat);
          propMesh.position.set(wx2, 0.13, wz2);
        } else if (pType === 1) {
          propMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.42, 8), propBarrelMat);
          propMesh.position.set(wx2, 0.21, wz2);
        } else if (pType === 2) {
          propMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.22, 8), propBucketMat);
          propMesh.position.set(wx2, 0.11, wz2);
        } else {
          propMesh = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.18, 0.22), propBoxMat);
          propMesh.position.set(wx2, 0.09, wz2);
        }
        propMesh.rotation.y = nextRng() * Math.PI * 2;
        propMesh.castShadow = true;
        scene.add(propMesh);
      }
    }

    // ── TEM Van at first path entry ──
    const vanEntry = levelDef.paths[0][0];
    const vanZ = Math.max(0, vanEntry[1]) * CELL;
    const vanBody2 = new THREE.Mesh(
      new THREE.BoxGeometry(3, 1.8, 1.5),
      new THREE.MeshStandardMaterial({ color:'#E8A830' })
    );
    vanBody2.position.set(-3, 1, vanZ);
    vanBody2.castShadow = true;
    scene.add(vanBody2);
    const vanTop = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.8, 1.5),
      new THREE.MeshStandardMaterial({ color:'#E8A830' })
    );
    vanTop.position.set(-2.5, 2.2, vanZ);
    scene.add(vanTop);
    const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 8);
    const wheelMat = new THREE.MeshStandardMaterial({ color:'#222' });
    for (const wx of [-3.8, -2.0]) {
      for (const wz of [-0.8, 0.8]) {
        const w = new THREE.Mesh(wheelGeo, wheelMat);
        w.rotation.x = Math.PI / 2;
        w.position.set(wx, 0.3, vanZ + wz);
        scene.add(w);
      }
    }

    // ── GAME STATE ──
    let lives = 20;
    let sats = config.payout;
    let earned = 0;
    let currentWave = 0;
    let wavesCleared = 0;
    type Phase = 'prep' | 'wave' | 'announce' | 'between' | 'done';
    let phase: Phase = 'prep';
    let phaseTimer = 12;
    let gameOver = false;
    let selectedTowerType: string | null = null;
    let selectedPlacedTower: PlacedTower | null = null;
    let killsThisWave = 0;
    let killTriggerSent = false;

    const difficulty = config.rival.difficulty;
    const waves = generateWaves(difficulty);
    const rivalColor3 = new THREE.Color(config.rival.color);

    // ── BANTER UI ──
    const banterEl = document.createElement('div');
    Object.assign(banterEl.style, {
      position: 'absolute', top: '60px', right: '10px',
      background: 'rgba(0,0,0,0.85)', border: `2px solid ${config.rival.color}`,
      borderRadius: '12px', padding: '8px 14px',
      color: '#FFF', fontSize: '12px', fontWeight: 'bold',
      zIndex: '14006', display: 'none', maxWidth: '200px',
      textAlign: 'center', lineHeight: '1.4',
      boxShadow: `0 0 12px ${config.rival.color}44`,
      pointerEvents: 'none',
    });
    overlay.appendChild(banterEl);

    let banterTimeout: ReturnType<typeof setTimeout> | null = null;
    function showBanter(line: string, duration = 4000) {
      if (banterTimeout) clearTimeout(banterTimeout);
      banterEl.innerHTML = `<span style="color:${config.rival.color}">${config.rival.name}</span><br>${line}`;
      banterEl.style.display = 'block';
      banterTimeout = setTimeout(() => { banterEl.style.display = 'none'; banterTimeout = null; }, duration);
    }

    // ── TOWER STATE ──
    interface PlacedTower {
      id: string;
      gx: number; gz: number;
      mesh: THREE.Group;
      level: number;
      damage: number; range: number; fireRate: number;
      special: string;
      cooldown: number;
      shotCount: number;
      target: Enemy | null;
      rangeMesh: THREE.Mesh;
      incomeCooldown: number;
      beamCharge: number;
      beamMesh: THREE.Mesh | null;
      droneTarget: Enemy | null;
      droneMesh: THREE.Mesh | null;
    }
    const towers: PlacedTower[] = [];

    // ── ENEMY STATE ──
    interface Enemy {
      def: EnemyDef;
      hp: number; maxHp: number;
      pathProgress: number;
      pathIdx: number;          // which path this enemy follows
      speed: number;
      mesh: THREE.Group;
      hpBar: THREE.Mesh;
      hpBarBg: THREE.Mesh;
      alive: boolean;
      revealed: boolean;
      slowed: number;
      flying: boolean;
    }
    const enemies: Enemy[] = [];

    // ── PROJECTILE STATE ──
    interface Projectile {
      mesh: THREE.Mesh;
      target: Enemy;
      pos: THREE.Vector3;
      speed: number;
      damage: number;
      special: string;
      towerColor: string;
      fromTower: PlacedTower;
    }
    const projectiles: Projectile[] = [];

    // ── FLOATING TEXT ──
    interface FloatText { el: HTMLDivElement; life: number; }
    const floatTexts: FloatText[] = [];

    // ── PARTICLES ──
    interface Particle { mesh: THREE.Mesh; vel: THREE.Vector3; life: number; }
    const particles: Particle[] = [];

    // ── Spawn queue ──
    let spawnQueue: { type: string; delay: number }[] = [];
    let spawnTimer = 0;

    /* ═══════════════════════ 3D HELPERS ═══════════════════════ */

    function createCrewMesh(id: string): THREE.Group {
      const data = CREW[id];
      const g = new THREE.Group();
      const crewCol = new THREE.Color(data.color);
      const skinCol = new THREE.Color(data.skin);

      // Legs (dark work pants)
      const legMat = new THREE.MeshStandardMaterial({ color:'#2A2A3A' });
      for (const lx of [-0.13, 0.13]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.52, 0.17), legMat);
        leg.position.set(lx, 0.26, 0);
        leg.castShadow = true; g.add(leg);
      }
      // Boots
      const bootMat = new THREE.MeshStandardMaterial({ color:'#2A1A0A' });
      for (const lx of [-0.13, 0.13]) {
        const boot = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.1, 0.22), bootMat);
        boot.position.set(lx, 0.05, 0.02);
        g.add(boot);
      }

      // Torso (hi-vis crew-colour shirt)
      const torso = new THREE.Mesh(
        new THREE.BoxGeometry(0.52, 0.6, 0.3),
        new THREE.MeshStandardMaterial({ color: crewCol })
      );
      torso.position.y = 0.84;
      torso.castShadow = true; g.add(torso);

      // TEM logo chest plate (gold)
      const logoPlate = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.13, 0.02),
        new THREE.MeshStandardMaterial({ color:'#FFD700', emissive:'#AA8800', emissiveIntensity:0.3 })
      );
      logoPlate.position.set(0, 0.88, 0.165);
      g.add(logoPlate);

      // Arms
      const armMat = new THREE.MeshStandardMaterial({ color: crewCol });
      for (const [ax, angle] of [[-0.35, 0.22], [0.35, -0.22]] as [number, number][]) {
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.48, 0.15), armMat);
        arm.position.set(ax, 0.8, 0);
        arm.rotation.z = angle;
        arm.castShadow = true; g.add(arm);
      }

      // Head (skin tone)
      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.24, 8, 8),
        new THREE.MeshStandardMaterial({ color: skinCol })
      );
      head.position.y = 1.42;
      head.castShadow = true; g.add(head);

      // Yellow hard hat
      const hat = new THREE.Mesh(
        new THREE.CylinderGeometry(0.27, 0.29, 0.12, 8),
        new THREE.MeshStandardMaterial({ color:'#FFD700' })
      );
      hat.position.y = 1.62; g.add(hat);
      const hatBrim = new THREE.Mesh(
        new THREE.CylinderGeometry(0.33, 0.33, 0.04, 8),
        new THREE.MeshStandardMaterial({ color:'#FFD700' })
      );
      hatBrim.position.y = 1.57; g.add(hatBrim);

      // Distinctive features per crew member
      if (id === 'jose') {
        // Dreadlocks — radial cylinder strands
        const dreadMat = new THREE.MeshStandardMaterial({ color:'#3A1E0A' });
        for (let d = 0; d < 7; d++) {
          const ang = (d / 7) * Math.PI * 2;
          const dr = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.02, 0.3, 4), dreadMat);
          dr.position.set(Math.cos(ang) * 0.17, 1.26, Math.sin(ang) * 0.17);
          g.add(dr);
        }
      } else if (id === 'matt') {
        // Blonde flat hair slab
        const hair = new THREE.Mesh(
          new THREE.BoxGeometry(0.48, 0.08, 0.48),
          new THREE.MeshStandardMaterial({ color:'#D4AA44' })
        );
        hair.position.y = 1.65; g.add(hair);
      } else if (id === 'jarrad') {
        // Topknot bun + stem
        const knotStem = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04, 0.04, 0.18, 5),
          new THREE.MeshStandardMaterial({ color:'#2A1A0A' })
        );
        knotStem.position.y = 1.62; g.add(knotStem);
        const bun = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 6, 6),
          new THREE.MeshStandardMaterial({ color:'#2A1A0A' })
        );
        bun.position.y = 1.74; g.add(bun);
      } else if (id === 'phil') {
        // Silver hair + glasses
        const greyHair = new THREE.Mesh(
          new THREE.BoxGeometry(0.48, 0.07, 0.48),
          new THREE.MeshStandardMaterial({ color:'#BBBBBB' })
        );
        greyHair.position.y = 1.65; g.add(greyHair);
        const glassMat = new THREE.MeshStandardMaterial({ color:'#333333', metalness:0.6 });
        for (const gfx of [-0.1, 0.1]) {
          const lens = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.014, 4, 8), glassMat);
          lens.position.set(gfx, 1.41, 0.23);
          lens.rotation.y = Math.PI / 2;
          g.add(lens);
        }
        // Nose bridge
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.014, 0.014), glassMat);
        bridge.position.set(0, 1.41, 0.23);
        g.add(bridge);
      }

      return g;
    }

    function createEquipMesh(id: string): THREE.Group {
      const data = EQUIP[id];
      const g = new THREE.Group();
      const color = data.color;
      if (id === 'trowel') {
        const blade = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.2, 0.6), new THREE.MeshStandardMaterial({ color, metalness:0.5 }));
        blade.position.y = 1.0; g.add(blade);
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.6, 6), new THREE.MeshStandardMaterial({ color:'#8B4513' }));
        handle.position.y = 0.3; g.add(handle);
      } else if (id === 'mixer') {
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.4, 1.0, 8), new THREE.MeshStandardMaterial({ color }));
        barrel.position.y = 0.8; barrel.castShadow = true; g.add(barrel);
        const rim = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.06, 6, 12), new THREE.MeshStandardMaterial({ color:'#666' }));
        rim.position.y = 1.3; rim.rotation.x = Math.PI / 2; g.add(rim);
      } else if (id === 'barricade') {
        for (let i = 0; i < 3; i++) {
          const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2, 6), new THREE.MeshStandardMaterial({ color }));
          pole.position.set((i - 1) * 0.4, 1, 0); pole.castShadow = true; g.add(pole);
        }
        const crossbar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.08, 0.08), new THREE.MeshStandardMaterial({ color:'#FF4500' }));
        crossbar.position.y = 1.5; g.add(crossbar);
      } else if (id === 'drone') {
        const dBody = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 8), new THREE.MeshStandardMaterial({ color }));
        dBody.position.y = 2.5; g.add(dBody);
        for (let i = 0; i < 4; i++) {
          const arm = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.04, 0.04), new THREE.MeshStandardMaterial({ color:'#333' }));
          arm.position.y = 2.5; arm.rotation.y = i * Math.PI / 2;
          arm.position.x = Math.cos(i * Math.PI / 2) * 0.3;
          arm.position.z = Math.sin(i * Math.PI / 2) * 0.3;
          g.add(arm);
        }
      } else { // beam
        const base = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, 0.6, 8), new THREE.MeshStandardMaterial({ color:'#444' }));
        base.position.y = 0.4; g.add(base);
        const lens = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity:0.5 }));
        lens.position.y = 1.0; g.add(lens);
      }
      return g;
    }

    function createEnemyMesh(def: EnemyDef): THREE.Group {
      const g = new THREE.Group();
      const sc = def.scale;
      const isBoss = def.special === 'boss';
      const isFly  = def.special === 'fly';
      const isCamo = def.special === 'camo';
      const yOff   = isFly ? 2 : 0;
      const opacity = isCamo ? 0.15 : 1;
      const bodyCol = isBoss ? rivalColor3 : new THREE.Color(def.color);
      const matOpts: THREE.MeshStandardMaterialParameters = { color: bodyCol, transparent: isCamo, opacity };

      // Legs
      const legMat = new THREE.MeshStandardMaterial({ color:'#1A1A2A', transparent: isCamo, opacity });
      for (const lx of [-0.12 * sc, 0.12 * sc]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.15 * sc, 0.44 * sc, 0.15 * sc), legMat);
        leg.position.set(lx, 0.22 * sc + yOff, 0);
        leg.castShadow = true; g.add(leg);
      }

      // Torso (hi-vis / work jacket in def color)
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.44 * sc, 0.52 * sc, 0.26 * sc),
        new THREE.MeshStandardMaterial(matOpts)
      );
      body.position.y = 0.7 * sc + yOff;
      body.castShadow = true; g.add(body);

      // Arms
      const armMat = new THREE.MeshStandardMaterial(matOpts);
      for (const [ax, ang] of [[-0.3 * sc, 0.2], [0.3 * sc, -0.2]] as [number, number][]) {
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.13 * sc, 0.42 * sc, 0.13 * sc), armMat);
        arm.position.set(ax, 0.66 * sc + yOff, 0);
        arm.rotation.z = ang; g.add(arm);
      }

      // Head
      const headMat = new THREE.MeshStandardMaterial({
        color: isBoss ? 0xCC9966 : 0xD4A878, transparent: isCamo, opacity,
      });
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.22 * sc, 7, 7), headMat);
      head.position.y = 1.12 * sc + yOff;
      head.castShadow = true; g.add(head);

      // Hat / distinctive headgear per type
      if (isBoss) {
        // Boss: dark red hard hat + rival banner on pole
        const bossHat = new THREE.Mesh(
          new THREE.CylinderGeometry(0.31 * sc, 0.34 * sc, 0.15 * sc, 8),
          new THREE.MeshStandardMaterial({ color:'#CC1111' })
        );
        bossHat.position.y = 1.33 * sc + yOff; g.add(bossHat);
        const bossHatBrim = new THREE.Mesh(
          new THREE.CylinderGeometry(0.38 * sc, 0.38 * sc, 0.04 * sc, 8),
          new THREE.MeshStandardMaterial({ color:'#CC1111' })
        );
        bossHatBrim.position.y = 1.27 * sc + yOff; g.add(bossHatBrim);
        // Banner pole + flag
        const pole = new THREE.Mesh(
          new THREE.CylinderGeometry(0.03, 0.03, 1.5 * sc, 5),
          new THREE.MeshStandardMaterial({ color:'#888888' })
        );
        pole.position.set(0.28 * sc, 1.6 * sc + yOff, 0); g.add(pole);
        const flag = new THREE.Mesh(
          new THREE.BoxGeometry(0.55 * sc, 0.28 * sc, 0.02),
          new THREE.MeshStandardMaterial({ color: bodyCol })
        );
        flag.position.set(0.55 * sc, 2.18 * sc + yOff, 0); g.add(flag);
      } else if (isFly) {
        // Flier: dark hard hat + spinning rotor hub
        const flyHat = new THREE.Mesh(
          new THREE.CylinderGeometry(0.24 * sc, 0.26 * sc, 0.12 * sc, 8),
          new THREE.MeshStandardMaterial({ color:'#222222' })
        );
        flyHat.position.y = 1.26 * sc + yOff; g.add(flyHat);
        const rotorHub = new THREE.Mesh(
          new THREE.CylinderGeometry(0.06, 0.06, 0.14, 6),
          new THREE.MeshStandardMaterial({ color:'#444444' })
        );
        rotorHub.position.y = 1.38 * sc + yOff; g.add(rotorHub);
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.7 * sc, 0.03, 0.08),
          new THREE.MeshStandardMaterial({ color:'#AAAAAA', transparent:true, opacity:0.75 })
        );
        blade.position.y = 1.46 * sc + yOff; g.add(blade);
      } else {
        // Standard / Heavy / others: dark hard hat
        const hatColor = sc >= 1.0 ? '#222244' : '#333333';
        const normHat = new THREE.Mesh(
          new THREE.CylinderGeometry(0.25 * sc, 0.28 * sc, 0.13 * sc, 8),
          new THREE.MeshStandardMaterial({ color: hatColor })
        );
        normHat.position.y = 1.28 * sc + yOff; g.add(normHat);
        const normBrim = new THREE.Mesh(
          new THREE.CylinderGeometry(0.32 * sc, 0.32 * sc, 0.04 * sc, 8),
          new THREE.MeshStandardMaterial({ color: hatColor })
        );
        normBrim.position.y = 1.22 * sc + yOff; g.add(normBrim);
      }

      // HP bar
      const hpBgGeo = new THREE.PlaneGeometry(1.0 * sc, 0.12);
      const hpBg = new THREE.Mesh(hpBgGeo, new THREE.MeshBasicMaterial({ color:'#333' }));
      hpBg.position.y = 1.6 * sc + yOff;
      hpBg.rotation.x = -0.5; g.add(hpBg);
      const hpGeo = new THREE.PlaneGeometry(1.0 * sc, 0.12);
      const hpMesh = new THREE.Mesh(hpGeo, new THREE.MeshBasicMaterial({ color:'#44FF44' }));
      hpMesh.position.y = 1.6 * sc + yOff;
      hpMesh.position.z = 0.01;
      hpMesh.rotation.x = -0.5; g.add(hpMesh);

      g.userData.hpBar  = hpMesh;
      g.userData.hpBg   = hpBg;
      g.userData.body   = body;
      return g;
    }

    function worldToScreen(pos: THREE.Vector3): { x: number; y: number } {
      const v = pos.clone().project(cam);
      return {
        x: (v.x * 0.5 + 0.5) * window.innerWidth,
        y: (-v.y * 0.5 + 0.5) * window.innerHeight,
      };
    }

    function showFloatText(text: string, worldPos: THREE.Vector3, color: string) {
      const el = document.createElement('div');
      Object.assign(el.style, {
        position:'absolute', pointerEvents:'none', color, fontSize:'14px', fontWeight:'bold',
        textShadow:'0 1px 3px rgba(0,0,0,0.8)', whiteSpace:'nowrap', zIndex:'14010',
      });
      el.textContent = text;
      overlay.appendChild(el);
      const screen = worldToScreen(worldPos);
      el.style.left = screen.x + 'px';
      el.style.top = screen.y + 'px';
      floatTexts.push({ el, life: 1.5 });
    }

    function spawnParticles(pos: THREE.Vector3, color: string, count: number) {
      const c = new THREE.Color(color);
      for (let i = 0; i < count; i++) {
        const geo = new THREE.SphereGeometry(0.08, 4, 4);
        const mat = new THREE.MeshBasicMaterial({ color: c });
        const m = new THREE.Mesh(geo, mat);
        m.position.copy(pos);
        scene.add(m);
        particles.push({
          mesh: m,
          vel: new THREE.Vector3((Math.random() - 0.5) * 6, Math.random() * 5 + 2, (Math.random() - 0.5) * 6),
          life: 0.8 + Math.random() * 0.5,
        });
      }
    }

    /* ═══════════════════════ TOWER PLACEMENT ═══════════════════════ */

    function placeTower(id: string, gx: number, gz: number): boolean {
      const isCrew = id in CREW;
      const isEquip = id in EQUIP;
      if (!isCrew && !isEquip) return false;
      const data = isCrew ? CREW[id] : EQUIP[id];
      const cost = data.cost * 1000;
      if (sats < cost) return false;

      const isPath = pathCells.has(`${gx},${gz}`);
      if (isPath && id !== 'phil') return false;
      if (!isPath && gridOccupied[gx]?.[gz]) return false;

      sats -= cost;
      gridOccupied[gx][gz] = true;
      if (gridMeshes[gx][gz]) {
        scene.remove(gridMeshes[gx][gz]!);
        gridMeshes[gx][gz] = null;
      }

      const mesh = isCrew ? createCrewMesh(id) : createEquipMesh(id);
      const wx = gx * CELL + CELL / 2;
      const wz = gz * CELL + CELL / 2;
      mesh.position.set(wx, 0, wz);
      scene.add(mesh);

      const rangeGeo = new THREE.RingGeometry(data.range - 0.1, data.range, 32);
      const rangeMat = new THREE.MeshBasicMaterial({ color: data.color, transparent:true, opacity:0, side: THREE.DoubleSide });
      const rangeMesh = new THREE.Mesh(rangeGeo, rangeMat);
      rangeMesh.rotation.x = -Math.PI / 2;
      rangeMesh.position.set(wx, 0.15, wz);
      scene.add(rangeMesh);

      const pulseGeo = new THREE.RingGeometry(0.5, 1.5, 32);
      const pulseMat = new THREE.MeshBasicMaterial({ color: isCrew ? (data as CrewData).color : (data as EquipData).color, transparent:true, opacity:0.6, side:THREE.DoubleSide });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      pulseMesh.rotation.x = -Math.PI / 2;
      pulseMesh.position.set(wx, 0.2, wz);
      scene.add(pulseMesh);
      let pulseScale = 1;
      const pulseAnim = setInterval(() => {
        pulseScale += 0.15;
        pulseMat.opacity -= 0.05;
        pulseMesh.scale.set(pulseScale, pulseScale, pulseScale);
        if (pulseMat.opacity <= 0) { clearInterval(pulseAnim); scene.remove(pulseMesh); pulseMat.dispose(); pulseGeo.dispose(); }
      }, 30);

      const tower: PlacedTower = {
        id, gx, gz, mesh, level: 1,
        damage: data.damage, range: data.range, fireRate: data.fireRate,
        special: data.special, cooldown: 0, shotCount: 0, target: null,
        rangeMesh, incomeCooldown: 0, beamCharge: 0, beamMesh: null,
        droneTarget: null, droneMesh: null,
      };
      towers.push(tower);
      updateUI();
      return true;
    }

    function sellTower(t: PlacedTower) {
      const isCrew = t.id in CREW;
      const data = isCrew ? CREW[t.id] : EQUIP[t.id];
      const refund = Math.floor(data.cost * 1000 * 0.65);
      sats += refund;
      scene.remove(t.mesh);
      scene.remove(t.rangeMesh);
      if (t.beamMesh) scene.remove(t.beamMesh);
      gridOccupied[t.gx][t.gz] = pathCells.has(`${t.gx},${t.gz}`);
      if (!gridOccupied[t.gx][t.gz]) {
        const mesh = new THREE.Mesh(cellGeo, cellMatNormal.clone());
        mesh.position.set(t.gx * CELL + CELL / 2, 0.05, t.gz * CELL + CELL / 2);
        mesh.receiveShadow = true;
        mesh.userData = { gx: t.gx, gz: t.gz };
        scene.add(mesh);
        gridMeshes[t.gx][t.gz] = mesh;
        gridOccupied[t.gx][t.gz] = false;
      }
      const idx = towers.indexOf(t);
      if (idx >= 0) towers.splice(idx, 1);
      selectedPlacedTower = null;
      showFloatText(`+${refund} ⚡`, t.mesh.position, '#44FF44');
      updateUI();
    }

    function upgradeTower(t: PlacedTower) {
      if (t.level >= 3) return;
      const baseCost = (t.id in CREW ? CREW[t.id].cost : EQUIP[t.id].cost) * 1000;
      const cost = baseCost * (t.level === 1 ? 0.6 : 1.0);
      if (sats < cost) return;
      sats -= cost;
      t.level++;
      t.damage = Math.floor(t.damage * 1.35);
      t.range *= 1.15;
      if (t.level === 3) t.fireRate *= 1.3;
      t.mesh.scale.setScalar(1 + (t.level - 1) * 0.12);
      scene.remove(t.rangeMesh);
      const rangeGeo2 = new THREE.RingGeometry(t.range - 0.1, t.range, 32);
      const rangeMat2 = new THREE.MeshBasicMaterial({ color: (t.id in CREW ? CREW[t.id].color : EQUIP[t.id].color), transparent:true, opacity:0, side:THREE.DoubleSide });
      t.rangeMesh = new THREE.Mesh(rangeGeo2, rangeMat2);
      t.rangeMesh.rotation.x = -Math.PI / 2;
      t.rangeMesh.position.set(t.gx * CELL + CELL / 2, 0.15, t.gz * CELL + CELL / 2);
      scene.add(t.rangeMesh);
      updateUI();
    }

    /* ═══════════════════════ ENEMY SPAWN ═══════════════════════ */

    function spawnEnemy(type: string, assignedPathIdx?: number) {
      const def = { ...ENEMIES[type] };
      const hpMult = 1 + currentWave * 0.2 + difficulty * 0.3;
      const spdMult = 1 + currentWave * 0.05;
      def.hp = Math.floor(def.hp * hpMult);
      def.speed *= spdMult;

      const mesh = createEnemyMesh(def);
      scene.add(mesh);

      const pathIdx = assignedPathIdx ?? Math.floor(Math.random() * pathCurves.length);

      const enemy: Enemy = {
        def, hp: def.hp, maxHp: def.hp,
        pathProgress: 0,
        pathIdx,
        speed: def.speed,
        mesh,
        hpBar: mesh.userData.hpBar,
        hpBarBg: mesh.userData.hpBg,
        alive: true,
        revealed: def.special !== 'camo',
        slowed: 0,
        flying: def.special === 'fly',
      };
      enemies.push(enemy);
    }

    function damageEnemy(e: Enemy, dmg: number, tower: PlacedTower) {
      if (!e.alive) return;
      e.hp -= dmg;

      const body = e.mesh.userData.body as THREE.Mesh;
      if (body) {
        const orig = (body.material as THREE.MeshStandardMaterial).color.clone();
        (body.material as THREE.MeshStandardMaterial).color.set('#FFFFFF');
        setTimeout(() => { if (body.material) (body.material as THREE.MeshStandardMaterial).color.copy(orig); }, 80);
      }

      showFloatText(`-${dmg}`, e.mesh.position.clone().add(new THREE.Vector3(0, 2, 0)), '#FF4444');

      const pct = Math.max(0, e.hp / e.maxHp);
      e.hpBar.scale.x = pct;
      (e.hpBar.material as THREE.MeshBasicMaterial).color.set(pct > 0.5 ? '#44FF44' : pct > 0.25 ? '#FFAA00' : '#FF4444');

      if (e.hp <= 0) {
        killEnemy(e, tower);
      }
    }

    function killEnemy(e: Enemy, tower: PlacedTower) {
      e.alive = false;
      scene.remove(e.mesh);
      let reward = e.def.reward * 1000;
      if (tower.special === 'payout') reward = Math.floor(reward * 1.5);
      sats += reward;
      earned += reward;
      showFloatText(`+${(reward / 1000).toFixed(0)}k ⚡`, e.mesh.position, '#FFD700');
      spawnParticles(e.mesh.position, e.def.color, 8);

      if (e.def.special === 'boss') {
        spawnParticles(e.mesh.position, '#FFD700', 25);
      }

      // Track kills for banter
      killsThisWave++;
      if (killsThisWave >= 5 && !killTriggerSent) {
        killTriggerSent = true;
        showBanter(randomFrom(BANTER.player_kills));
      }
      // Occasionally banter when player is winning
      if (wavesCleared > waves.length / 2 && Math.random() < 0.05) {
        showBanter(randomFrom(BANTER.player_winning));
      }

      // Splitter
      if (e.def.special === 'split') {
        for (let i = 0; i < 2; i++) {
          const miniDef = { ...ENEMIES.bucket };
          miniDef.hp = Math.floor(miniDef.hp * 0.5);
          const miniMesh = createEnemyMesh(miniDef);
          scene.add(miniMesh);
          const mini: Enemy = {
            def: miniDef, hp: miniDef.hp, maxHp: miniDef.hp,
            pathProgress: e.pathProgress + (i - 0.5) * 0.01,
            pathIdx: e.pathIdx,
            speed: miniDef.speed, mesh: miniMesh,
            hpBar: miniMesh.userData.hpBar, hpBarBg: miniMesh.userData.hpBg,
            alive: true, revealed: true, slowed: 0, flying: false,
          };
          enemies.push(mini);
        }
      }
      updateUI();
    }

    /* ═══════════════════════ HTML UI ═══════════════════════ */

    const uiTop = document.createElement('div');
    Object.assign(uiTop.style, {
      position:'absolute', top:'0', left:'0', right:'0', height:'50px',
      background:'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'0 12px', color:'#FFF', fontSize:'15px', fontWeight:'bold', zIndex:'14002',
    });
    overlay.appendChild(uiTop);

    const uiWave = document.createElement('span');
    const uiLives = document.createElement('span');
    const uiSats = document.createElement('span');
    uiTop.appendChild(uiWave);
    uiTop.appendChild(uiLives);
    uiTop.appendChild(uiSats);

    // Level name badge
    const uiLevelBadge = document.createElement('div');
    Object.assign(uiLevelBadge.style, {
      position: 'absolute', top: '52px', left: '50%',
      transform: 'translateX(-50%)',
      background: `rgba(0,0,0,0.7)`,
      border: `1px solid ${config.rival.color}`,
      borderRadius: '6px', padding: '2px 10px',
      color: config.rival.color, fontSize: '11px', fontWeight: '700',
      letterSpacing: '2px', zIndex: '14002', pointerEvents: 'none',
    });
    uiLevelBadge.textContent = `${levelDef.name} · ${levelDef.subtitle}`;
    overlay.appendChild(uiLevelBadge);

    const uiTray = document.createElement('div');
    Object.assign(uiTray.style, {
      position:'absolute', bottom:'0', left:'0', right:'0',
      background:'rgba(0,0,0,0.85)', padding:'6px 4px', zIndex:'14002',
      display:'flex', flexDirection:'column', gap:'4px',
    });
    overlay.appendChild(uiTray);

    const trayLabel = document.createElement('div');
    trayLabel.style.cssText = 'color:#AAA;font-size:11px;padding:0 4px;';
    trayLabel.textContent = 'TAP TOWER → TAP GRID TO PLACE';
    uiTray.appendChild(trayLabel);

    const trayRow = document.createElement('div');
    trayRow.style.cssText = 'display:flex;gap:4px;overflow-x:auto;padding:2px 0;';
    uiTray.appendChild(trayRow);

    const uiInfo = document.createElement('div');
    Object.assign(uiInfo.style, {
      position:'absolute', bottom:'90px', left:'8px', right:'8px',
      background:'rgba(0,0,0,0.9)', borderRadius:'8px', padding:'10px',
      color:'#FFF', fontSize:'13px', zIndex:'14003', display:'none',
    });
    overlay.appendChild(uiInfo);

    const uiAnnounce = document.createElement('div');
    Object.assign(uiAnnounce.style, {
      position:'absolute', top:'0', left:'0', right:'0', bottom:'0',
      display:'none', alignItems:'center', justifyContent:'center',
      background:'rgba(0,0,0,0.7)', zIndex:'14005', flexDirection:'column',
    });
    overlay.appendChild(uiAnnounce);
    const announceTitle = document.createElement('div');
    announceTitle.style.cssText = 'color:#FFD700;font-size:28px;font-weight:bold;text-shadow:0 2px 8px rgba(0,0,0,0.8);';
    uiAnnounce.appendChild(announceTitle);
    const announceSub = document.createElement('div');
    announceSub.style.cssText = 'color:#DDD;font-size:16px;margin-top:8px;text-align:center;';
    uiAnnounce.appendChild(announceSub);

    function buildTray() {
      trayRow.innerHTML = '';
      const available: { id: string; name: string; color: string; cost: number; desc: string }[] = [];
      for (const cid of config.crewIds) {
        if (CREW[cid]) available.push({ id:cid, name:CREW[cid].name, color:CREW[cid].color, cost:CREW[cid].cost, desc:CREW[cid].desc });
      }
      for (const eid of Object.keys(EQUIP)) {
        available.push({ id:eid, name:EQUIP[eid].name, color:EQUIP[eid].color, cost:EQUIP[eid].cost, desc:EQUIP[eid].desc });
      }
      for (const item of available) {
        const btn = document.createElement('div');
        const isSelected = selectedTowerType === item.id;
        Object.assign(btn.style, {
          minWidth:'70px', padding:'6px 4px', borderRadius:'6px', textAlign:'center',
          background: isSelected ? item.color : '#2a2a3a', color:'#FFF', fontSize:'11px',
          border: `2px solid ${isSelected ? '#FFF' : item.color}`, cursor:'pointer', flexShrink:'0',
          opacity: sats >= item.cost * 1000 ? '1' : '0.4',
        });
        btn.innerHTML = `<div style="font-weight:bold;font-size:12px">${item.name}</div><div>${item.cost}k⚡</div>`;
        btn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          selectedTowerType = selectedTowerType === item.id ? null : item.id;
          selectedPlacedTower = null;
          uiInfo.style.display = 'none';
          buildTray();
          updateGridHighlights();
        });
        trayRow.appendChild(btn);
      }
    }

    function updateGridHighlights() {
      for (let gx = 0; gx < GRID_W; gx++) {
        for (let gz = 0; gz < GRID_H; gz++) {
          const m = gridMeshes[gx][gz];
          if (!m) continue;
          m.material = selectedTowerType ? cellMatHover.clone() : cellMatNormal.clone();
        }
      }
    }

    function updateUI() {
      uiWave.textContent = `⚔️ Wave ${currentWave + 1}/${waves.length}`;
      uiLives.textContent = `❤️ ${lives}`;
      uiSats.textContent = `⚡ ${(sats / 1000).toFixed(0)}k`;
      buildTray();
    }

    function showTowerInfo(t: PlacedTower) {
      const isCrew = t.id in CREW;
      const data = isCrew ? CREW[t.id] : EQUIP[t.id];
      const baseCost = data.cost * 1000;
      const upgCost = t.level < 3 ? Math.floor(baseCost * (t.level === 1 ? 0.6 : 1.0)) : 0;
      const sellVal = Math.floor(baseCost * 0.65);

      uiInfo.style.display = 'block';
      uiInfo.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <span style="color:${isCrew ? (data as CrewData).color : (data as EquipData).color};font-weight:bold;font-size:15px">
              ${data.name}
            </span>
            <span style="color:#999;margin-left:8px">Lv.${t.level}</span>
          </div>
          <div style="display:flex;gap:8px">
            ${t.level < 3 ? `<button id="td-upg" style="background:#27AE60;color:#FFF;border:none;padding:6px 12px;border-radius:4px;font-size:12px;font-weight:bold;${sats >= upgCost ? '' : 'opacity:0.4'}">⬆️ ${(upgCost/1000).toFixed(0)}k</button>` : '<span style="color:#888;font-size:12px">MAX</span>'}
            <button id="td-sell" style="background:#C0392B;color:#FFF;border:none;padding:6px 12px;border-radius:4px;font-size:12px;font-weight:bold">💰 ${(sellVal/1000).toFixed(0)}k</button>
          </div>
        </div>
        <div style="color:#999;font-size:11px;margin-top:4px">DMG: ${t.damage} | RNG: ${t.range.toFixed(1)} | SPD: ${t.fireRate.toFixed(1)}/s | ${(data as any).desc || ''}</div>
      `;
      const upgBtn = document.getElementById('td-upg');
      if (upgBtn) upgBtn.addEventListener('click', (ev) => { ev.stopPropagation(); upgradeTower(t); showTowerInfo(t); });
      const sellBtn = document.getElementById('td-sell');
      if (sellBtn) sellBtn.addEventListener('click', (ev) => { ev.stopPropagation(); sellTower(t); uiInfo.style.display = 'none'; });
    }

    /* ═══════════════════════ INPUT ═══════════════════════ */

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function onTap(clientX: number, clientY: number) {
      if (gameOver) return;
      pointer.x = (clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(pointer, cam);

      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const intersection = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersection);
      if (!intersection) return;

      const gx = Math.floor(intersection.x / CELL);
      const gz = Math.floor(intersection.z / CELL);

      const clickedTower = towers.find(t => t.gx === gx && t.gz === gz);
      if (clickedTower && !selectedTowerType) {
        if (selectedPlacedTower && selectedPlacedTower !== clickedTower) {
          (selectedPlacedTower.rangeMesh.material as THREE.MeshBasicMaterial).opacity = 0;
        }
        selectedPlacedTower = clickedTower;
        (clickedTower.rangeMesh.material as THREE.MeshBasicMaterial).opacity = 0.25;
        showTowerInfo(clickedTower);
        return;
      }

      if (selectedTowerType && gx >= 0 && gx < GRID_W && gz >= 0 && gz < GRID_H) {
        if (placeTower(selectedTowerType, gx, gz)) {
          selectedTowerType = null;
          updateGridHighlights();
        }
        return;
      }

      if (selectedPlacedTower) {
        (selectedPlacedTower.rangeMesh.material as THREE.MeshBasicMaterial).opacity = 0;
        selectedPlacedTower = null;
        uiInfo.style.display = 'none';
      }
      selectedTowerType = null;
      buildTray();
      updateGridHighlights();
    }

    const handleClick = (e: MouseEvent) => onTap(e.clientX, e.clientY);
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        onTap(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    renderer.domElement.addEventListener('click', handleClick);
    renderer.domElement.addEventListener('touchstart', handleTouch, { passive: false });

    let lastPinchDist = 0;
    renderer.domElement.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (lastPinchDist > 0) {
          camDist *= lastPinchDist / dist;
          camDist = Math.max(15, Math.min(55, camDist));
          updateCam();
        }
        lastPinchDist = dist;
      }
    }, { passive: false });
    renderer.domElement.addEventListener('touchend', () => { lastPinchDist = 0; });

    const handleResize = () => {
      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    /* ═══════════════════════ GAME PHASES ═══════════════════════ */

    function startPrepPhase() {
      phase = 'announce';
      phaseTimer = 3.5;
      uiAnnounce.style.display = 'flex';
      announceTitle.textContent = `⚔️ WAVE ${currentWave + 1}/${waves.length}`;
      const waveData = waves[currentWave];
      const hasBoss = waveData.enemies.some(e => e.type === 'boss');
      announceSub.textContent = waveData.enemies.map(e => `${e.count}× ${ENEMIES[e.type]?.name || e.type}`).join(' + ');
      // Banter
      if (hasBoss) showBanter(randomFrom(BANTER.boss_wave), 5000);
      else showBanter(randomFrom(BANTER.wave_start));
      // Reset kill counter
      killsThisWave = 0;
      killTriggerSent = false;
    }

    function startWave() {
      phase = 'wave';
      uiAnnounce.style.display = 'none';
      const waveData = waves[currentWave];
      spawnQueue = [];
      for (const eg of waveData.enemies) {
        for (let i = 0; i < eg.count; i++) {
          spawnQueue.push({ type: eg.type, delay: waveData.delay });
        }
      }
      spawnTimer = 0.5;
    }

    function checkWaveComplete() {
      if (spawnQueue.length === 0 && enemies.filter(e => e.alive).length === 0) {
        wavesCleared = currentWave + 1;
        currentWave++;
        if (currentWave >= waves.length) {
          endGame(true);
        } else {
          phase = 'between';
          phaseTimer = 12;
          uiAnnounce.style.display = 'flex';
          announceTitle.textContent = '🔨 PREP TIME';
          announceSub.textContent = `Next: Wave ${currentWave + 1} — Place towers! (${Math.ceil(phaseTimer)}s)`;
        }
      }
    }

    function endGame(won: boolean) {
      if (gameOver) return;
      gameOver = true;
      phase = 'done';
      uiAnnounce.style.display = 'flex';
      const qualityPct = Math.max(0, Math.min(1, lives / 20));
      const finalEarned = won ? Math.floor(config.payout * qualityPct) : Math.floor(earned * 0.3);

      announceTitle.textContent = won ? '🏆 CONTRACT WON!' : '💀 CONTRACT LOST';
      announceTitle.style.color = won ? '#FFD700' : '#FF4444';
      announceSub.innerHTML = `
        <div style="margin-top:12px">
          <div>Waves: ${wavesCleared}/${waves.length}</div>
          <div>Quality: ${Math.round(qualityPct * 100)}%</div>
          <div>Earned: ${(finalEarned / 1000).toFixed(0)}k ⚡</div>
        </div>
        <button id="td-done" style="margin-top:20px;padding:12px 32px;background:#E8A830;color:#000;border:none;border-radius:8px;font-size:18px;font-weight:bold;cursor:pointer">
          ${won ? '✅ CONTINUE' : '😤 BACK'}
        </button>
      `;
      setTimeout(() => {
        const doneBtn = document.getElementById('td-done');
        if (doneBtn) doneBtn.addEventListener('click', () => {
          onComplete({ won, earned: finalEarned, wavesCleared, qualityPct });
          self.hide();
        });
      }, 100);
    }

    /* ═══════════════════════ GAME LOOP ═══════════════════════ */

    let lastTime = performance.now();
    updateUI();
    startPrepPhase();

    const gameLoop = () => {
      if (!self.running) return;
      self.animId = requestAnimationFrame(gameLoop);

      const now = performance.now();
      const dt = Math.min(0.1, (now - lastTime) / 1000);
      lastTime = now;

      // ── Animate rival figures ──
      const t = now / 1000;
      for (const fig of rivalFigures) {
        fig.position.y = Math.sin(t * 2.5) * 0.15;
        fig.rotation.y = Math.sin(t * 1.5) * 0.2;
      }

      // ── Phase timers ──
      if (phase === 'announce') {
        phaseTimer -= dt;
        announceTitle.textContent = `⚔️ WAVE ${currentWave + 1}/${waves.length} — ${Math.ceil(phaseTimer)}`;
        if (phaseTimer <= 0) startWave();
      } else if (phase === 'between') {
        phaseTimer -= dt;
        announceSub.textContent = `Next: Wave ${currentWave + 1} — Place towers! (${Math.ceil(phaseTimer)}s)`;
        if (phaseTimer <= 0) startPrepPhase();
      }

      // ── Spawn enemies ──
      if (phase === 'wave' && spawnQueue.length > 0) {
        spawnTimer -= dt;
        if (spawnTimer <= 0) {
          const next = spawnQueue.shift()!;
          spawnEnemy(next.type);
          spawnTimer = next.delay;
        }
      }

      // ── Move enemies ──
      for (const e of enemies) {
        if (!e.alive) continue;
        const speed = e.speed * (e.slowed > 0 ? 0.5 : 1);
        e.slowed = Math.max(0, e.slowed - dt);

        const curve = pathCurves[e.pathIdx] ?? pathCurves[0];
        const pathLen = curve.getLength();
        e.pathProgress += (speed / pathLen) * dt;

        if (e.pathProgress >= 1) {
          e.alive = false;
          scene.remove(e.mesh);
          lives--;
          // Flash house red
          (houseBody.material as THREE.MeshLambertMaterial).color.set(0xFF2222);
          setTimeout(() => { (houseBody.material as THREE.MeshLambertMaterial).color.set(0xC8A870); }, 300);
          // Rival banter
          showBanter(randomFrom(BANTER.enemy_reaches));
          if (lives <= 0) endGame(false);
          updateUI();
          continue;
        }

        const pos = curve.getPointAt(Math.min(e.pathProgress, 0.999));
        e.mesh.position.set(pos.x, e.flying ? 2 : 0, pos.z);

        if (e.pathProgress < 0.99) {
          const ahead = curve.getPointAt(Math.min(e.pathProgress + 0.01, 0.999));
          e.mesh.lookAt(ahead.x, e.mesh.position.y, ahead.z);
        }

        // Support heal
        if (e.def.special === 'heal') {
          for (const other of enemies) {
            if (other === e || !other.alive) continue;
            if (other.mesh.position.distanceTo(e.mesh.position) < 3) {
              other.hp = Math.min(other.maxHp, other.hp + 5 * dt);
            }
          }
        }

        // Camo visibility
        if (e.def.special === 'camo') {
          const body = e.mesh.userData.body as THREE.Mesh;
          if (body) {
            const revealed = towers.some(t2 => t2.special === 'reveal' &&
              t2.mesh.position.distanceTo(e.mesh.position) <= t2.range);
            e.revealed = revealed;
            (body.material as THREE.MeshStandardMaterial).opacity = revealed ? 0.8 : 0.15;
            e.hpBar.visible = revealed;
            e.hpBarBg.visible = revealed;
          }
        }
      }

      // ── Tower AI ──
      for (const tower of towers) {
        const tPos = tower.mesh.position;

        if (tower.special === 'income') {
          tower.incomeCooldown -= dt;
          if (tower.incomeCooldown <= 0) {
            const amount = 5000 * tower.level;
            sats += amount;
            earned += amount;
            tower.incomeCooldown = 10;
            showFloatText(`+${(amount/1000).toFixed(0)}k 💰`, tPos.clone().add(new THREE.Vector3(0, 2.5, 0)), '#1ABC9C');
            updateUI();
          }
        }

        if (tower.special === 'aura') {
          for (const e of enemies) {
            if (!e.alive || (!e.revealed && e.def.special === 'camo')) continue;
            if (tPos.distanceTo(e.mesh.position) <= tower.range) {
              e.hp -= tower.damage * dt;
              if (e.hp <= 0) killEnemy(e, tower);
            }
          }
          continue;
        }

        if (tower.special === 'slowzone') {
          for (const e of enemies) {
            if (!e.alive || e.flying) continue;
            if (tPos.distanceTo(e.mesh.position) <= tower.range) {
              e.slowed = 0.5;
            }
          }
          continue;
        }

        if (tower.special === 'follow') {
          let slowest: Enemy | null = null;
          let minSpd = Infinity;
          for (const e of enemies) {
            if (!e.alive || (!e.revealed && e.def.special === 'camo')) continue;
            if (e.speed < minSpd) { minSpd = e.speed; slowest = e; }
          }
          if (slowest) {
            tower.cooldown -= dt;
            if (tower.cooldown <= 0) {
              damageEnemy(slowest, tower.damage, tower);
              tower.cooldown = 1 / tower.fireRate;
            }
          }
          continue;
        }

        if (tower.fireRate <= 0 && tower.special !== 'beam') continue;

        let target: Enemy | null = null;
        let bestProg = -1;
        for (const e of enemies) {
          if (!e.alive) continue;
          if (!e.revealed && e.def.special === 'camo') continue;
          if (e.flying && tower.special === 'block') continue;
          const dist = tPos.distanceTo(e.mesh.position);
          if (dist <= tower.range && e.pathProgress > bestProg) {
            bestProg = e.pathProgress;
            target = e;
          }
        }

        if (tower.special === 'beam') {
          if (target) {
            tower.beamCharge += dt;
            if (tower.beamCharge >= 2) {
              damageEnemy(target, Math.floor(tower.damage * dt * 3), tower);
              if (!tower.beamMesh) {
                const beamGeo = new THREE.CylinderGeometry(0.05, 0.05, 1, 4);
                beamGeo.rotateX(Math.PI / 2);
                const beamMat = new THREE.MeshBasicMaterial({ color:'#FF69B4', transparent:true, opacity:0.7 });
                tower.beamMesh = new THREE.Mesh(beamGeo, beamMat);
                scene.add(tower.beamMesh);
              }
              const mid = tPos.clone().add(target.mesh.position).multiplyScalar(0.5);
              mid.y = 1.5;
              tower.beamMesh.position.copy(mid);
              tower.beamMesh.scale.z = tPos.distanceTo(target.mesh.position);
              tower.beamMesh.lookAt(target.mesh.position);
            }
          } else {
            tower.beamCharge = Math.max(0, tower.beamCharge - dt * 0.5);
            if (tower.beamMesh) { scene.remove(tower.beamMesh); tower.beamMesh = null; }
          }
          continue;
        }

        tower.cooldown -= dt;
        if (target && tower.cooldown <= 0) {
          tower.cooldown = 1 / tower.fireRate;
          tower.shotCount++;

          tower.mesh.rotation.x = -0.3;
          setTimeout(() => { if (tower.mesh) tower.mesh.rotation.x = 0; }, 150);

          let dmg = tower.damage;
          if (tower.special === 'double3' && tower.shotCount % 3 === 0) dmg *= 2;

          const projGeo = new THREE.SphereGeometry(tower.special === 'pierce' ? 0.06 : 0.12, 6, 6);
          const pColor = tower.id in CREW ? CREW[tower.id].color : EQUIP[tower.id].color;
          const projMat = new THREE.MeshBasicMaterial({ color: pColor });
          const proj = new THREE.Mesh(projGeo, projMat);
          proj.position.copy(tPos).add(new THREE.Vector3(0, 1.5, 0));
          scene.add(proj);

          projectiles.push({
            mesh: proj, target, pos: proj.position.clone(),
            speed: 20, damage: dmg, special: tower.special,
            towerColor: pColor, fromTower: tower,
          });
        }
      }

      // ── Move projectiles ──
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const p = projectiles[i];
        if (!p.target.alive) {
          scene.remove(p.mesh);
          projectiles.splice(i, 1);
          continue;
        }
        const targetPos = p.target.mesh.position.clone().add(new THREE.Vector3(0, 0.5, 0));
        const dir = targetPos.sub(p.pos).normalize();
        p.pos.add(dir.multiplyScalar(p.speed * dt));
        p.mesh.position.copy(p.pos);

        if (p.pos.distanceTo(p.target.mesh.position) < 0.5) {
          damageEnemy(p.target, p.damage, p.fromTower);

          if (p.special === 'slow') p.target.slowed = 2;

          if (p.special === 'splash' || p.special === 'aoebomb') {
            const splashR = p.special === 'aoebomb' ? 3 : 2;
            for (const e of enemies) {
              if (e === p.target || !e.alive) continue;
              if (e.mesh.position.distanceTo(p.target.mesh.position) < splashR) {
                damageEnemy(e, Math.floor(p.damage * 0.5), p.fromTower);
              }
            }
            spawnParticles(p.pos, p.towerColor, 5);
          }

          if (p.special === 'pierce') {
            const eCurve = pathCurves[p.target.pathIdx] ?? pathCurves[0];
            const dir2 = eCurve.getTangentAt(Math.min(p.target.pathProgress, 0.99));
            for (const e of enemies) {
              if (e === p.target || !e.alive) continue;
              const toE = e.mesh.position.clone().sub(p.pos);
              const along = toE.dot(dir2);
              const perp = toE.clone().sub(dir2.clone().multiplyScalar(along)).length();
              if (along > 0 && along < 5 && perp < 0.8) {
                damageEnemy(e, Math.floor(p.damage * 0.7), p.fromTower);
              }
            }
          }

          scene.remove(p.mesh);
          projectiles.splice(i, 1);
        }
      }

      // ── Check wave complete ──
      if (phase === 'wave') checkWaveComplete();

      // ── Update particles ──
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= dt;
        p.vel.y -= 12 * dt;
        p.mesh.position.add(p.vel.clone().multiplyScalar(dt));
        if (p.life <= 0) {
          scene.remove(p.mesh);
          particles.splice(i, 1);
        }
      }

      // ── Update float texts ──
      for (let i = floatTexts.length - 1; i >= 0; i--) {
        const ft = floatTexts[i];
        ft.life -= dt;
        ft.el.style.opacity = String(Math.max(0, ft.life));
        const top = parseFloat(ft.el.style.top);
        ft.el.style.top = (top - 30 * dt) + 'px';
        if (ft.life <= 0) {
          ft.el.remove();
          floatTexts.splice(i, 1);
        }
      }

      // ── HP bar face camera ──
      for (const e of enemies) {
        if (!e.alive) continue;
        e.hpBar.lookAt(cam.position);
        e.hpBarBg.lookAt(cam.position);
      }

      renderer.render(scene, cam);
    };

    self.animId = requestAnimationFrame(gameLoop);

    (this as any)._cleanup = () => {
      cancelAnimationFrame(self.animId);
      if (banterTimeout) clearTimeout(banterTimeout);
      window.removeEventListener('resize', handleResize);
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
        const mat = (obj as THREE.Mesh).material;
        if (mat) {
          if (Array.isArray(mat)) mat.forEach(m => m.dispose());
          else (mat as THREE.Material).dispose();
        }
      });
      renderer.dispose();
      for (const ft of floatTexts) ft.el.remove();
      floatTexts.length = 0;
    };
  }

  hide(): void {
    this.running = false;
    if ((this as any)._cleanup) {
      (this as any)._cleanup();
      (this as any)._cleanup = null;
    }
    if (this.overlay) {
      this.overlay.remove();
      this.overlay = null;
    }
  }
}
