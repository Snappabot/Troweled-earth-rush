# Troweled Earth Rush — Open World Rebuild Blueprint

> **Version:** 1.0 · **Date:** 2026-02-19 · **Author:** Architect (Opus)
> **Status:** Technical specification for rebuild from 2D Phaser arcade game → 3D open-world GTA 1/2-style browser game.

---

## Table of Contents

1. [Engine Recommendation](#1-engine-recommendation)
2. [Camera System](#2-camera-system)
3. [City Architecture](#3-city-architecture)
4. [Asset Pipeline](#4-asset-pipeline)
5. [Vehicle Physics](#5-vehicle-physics)
6. [Gameplay Loop](#6-gameplay-loop)
7. [Mini-Game Integration](#7-mini-game-integration)
8. [Mobile Controls](#8-mobile-controls)
9. [Performance Strategy](#9-performance-strategy)
10. [Migration Strategy](#10-migration-strategy)
11. [Timeline Estimate](#11-timeline-estimate)

---

## 1. Engine Recommendation

### Decision: **Three.js + custom ECS**

**Why Three.js wins:**

| Criteria | Three.js | Babylon.js | Godot Web |
|----------|----------|------------|-----------|
| Bundle size (gzipped) | ~150 KB | ~500 KB | ~5 MB+ WASM |
| Mobile browser compat | Excellent | Good | Fragile (WASM + WebGL2) |
| Ecosystem / examples | Massive | Good | Small for web |
| Control over renderer | Full | Abstracted | Engine-locked |
| TypeScript support | Native types | Native | GDScript/C# |
| Loading time on 4G | Fast | Acceptable | Painful |

**Babylon.js** is heavier and its abstractions fight you when you need low-level control over draw calls — which you will on mobile. **Godot Web Export** produces a 5+ MB WASM blob, has inconsistent mobile WebGL support, and you lose the ability to do surgical JS-level performance tuning. For a mobile-first browser game, that's disqualifying.

**Stack:**

```
Three.js r170+          — Rendering
TypeScript 5.x          — Language
Vite 6.x               — Build tooling (keep from current project)
Rapier3D (WASM)         — Physics (see §5)
bitECS                  — Entity Component System
Howler.js               — Audio
nipplejs                — Virtual joystick (see §8)
```

**Why ECS?** An open world with hundreds of entities (vehicles, NPCs, obstacles, props) needs data-oriented architecture. bitECS is ~3 KB, runs fast, and pairs well with Three.js. Each Three.js Object3D gets an entity ID; systems iterate components.

---

## 2. Camera System

### GTA 1/2 Perspective in 3D

The classic GTA 1/2 look is an **orthographic-feeling** isometric-ish view, but we want 3D depth. Use a **perspective camera with a narrow FOV at high altitude** to approximate this.

### Camera Parameters

```typescript
const CAMERA_CONFIG = {
  type: 'PerspectiveCamera',
  fov: 30,                    // Narrow FOV = flattened perspective, feels semi-ortho
  near: 10,
  far: 800,
  height: 45,                 // Units above ground
  pitchAngle: 55,             // Degrees from horizontal (0=side, 90=top-down)
  // 55° gives that classic "slightly tilted" GTA1 feel
  // Lower than 50° shows too much horizon; higher than 65° loses depth
  followSmoothing: 0.08,      // Lerp factor per frame (lower = smoother)
  lookAheadDistance: 8,       // Units ahead of vehicle velocity vector
  lookAheadSmoothing: 0.04,
};
```

### Follow Logic

```typescript
function updateCamera(camera: THREE.PerspectiveCamera, van: VanEntity, dt: number) {
  // Target position: offset behind and above van
  const pitchRad = THREE.MathUtils.degToRad(CAMERA_CONFIG.pitchAngle);
  const horizontalDist = CAMERA_CONFIG.height / Math.tan(pitchRad);

  // Look-ahead: shift target toward velocity direction
  const lookAhead = van.velocity.clone()
    .normalize()
    .multiplyScalar(CAMERA_CONFIG.lookAheadDistance);

  const targetLookAt = van.position.clone().add(
    lookAhead.clone().multiplyScalar(CAMERA_CONFIG.lookAheadSmoothing)
  );

  // Camera sits behind the van (south by default, rotates with van heading)
  // BUT — for GTA1/2 feel, camera does NOT rotate with van. It's fixed-north.
  const offset = new THREE.Vector3(0, CAMERA_CONFIG.height, horizontalDist);

  const targetPos = targetLookAt.clone().add(offset);

  // Smooth follow
  camera.position.lerp(targetPos, CAMERA_CONFIG.followSmoothing);
  camera.lookAt(targetLookAt);
}
```

### Key Design Decisions

- **Fixed compass orientation** — Camera always faces north-ish. The van rotates under it. This is the GTA 1/2 feel. Camera does NOT rotate with the vehicle.
- **No camera rotation controls** — Simplifies mobile, keeps the classic feel.
- **Zoom stays fixed** — No pinch-to-zoom. Consistent visual language.
- **Mini-game transitions** — Camera smoothly swoops down/in when entering a mini-game zone (tween height from 45→15, pitch from 55→30 over 0.8s).

---

## 3. City Architecture

### Melbourne-Inspired Layout

```
┌─────────────────────────────────────────────┐
│                 NORTH                        │
│    ┌──────────┐  ┌──────────┐               │
│    │INDUSTRIAL│  │ SUBURBAN  │               │
│    │ Footscray│  │ Brunswick│               │
│    │ warehouses│  │ terraces │               │
│    └──────────┘  └──────────┘               │
│         ┌──────────────┐                     │
│         │     CBD      │                     │
│         │  Flinders St │                     │
│         │  Fed Square  │                     │
│         │  Laneways    │                     │
│         └──────────────┘                     │
│    ┌──────────┐  ┌──────────┐               │
│    │  BEACH   │  │ SUBURBAN │               │
│    │St Kilda  │  │ Richmond│               │
│    │boardwalk │  │ houses  │               │
│    └──────────┘  └──────────┘               │
│                 SOUTH                        │
└─────────────────────────────────────────────┘
```

### World Size

- **Total map:** 2048 × 2048 units (each unit ≈ 1 metre)
- **That's ~2 km²** — enough to feel open, small enough to stream on mobile
- 5 zones, each ~400×400 units with transition areas

### Zones

| Zone | Vibe | Landmarks | Job Types |
|------|------|-----------|-----------|
| **CBD** | High-rises, tram tracks, laneways | Flinders-style station, Fed Square proxy | Office renovations, shopfront renders |
| **Industrial (Footscray)** | Warehouses, rail yards, graffiti | Silos, loading docks | Big commercial plaster jobs |
| **Beach (St Kilda)** | Boardwalk, palm trees, cafés | Luna Park gate, pier | Beachfront apartment renders |
| **Suburban North (Brunswick)** | Terrace houses, cafés, vintage shops | Sydney Road strip | Residential plaster jobs |
| **Suburban East (Richmond)** | Victorian houses, pubs, footy ovals | MCG-style oval | Heritage restoration jobs |

### Chunk System

**Tile grid:** 64×64 unit chunks → 32×32 = 1024 chunks total.

```typescript
interface Chunk {
  x: number;               // Chunk grid coordinate
  z: number;
  groundMesh: THREE.Mesh;  // Road/footpath/grass baked texture
  buildings: THREE.InstancedMesh[];  // Instanced per building type
  props: THREE.InstancedMesh[];      // Street furniture, trees, bins
  colliders: RapierCollider[];
  loaded: boolean;
}
```

**Loading strategy:**
- **Active radius:** 3×3 chunks around player (192×192 units visible)
- **Preload radius:** 5×5 chunks (loaded but hidden)
- **Unload beyond:** 7×7
- At 60 km/h game speed, the van crosses a chunk in ~3.8 seconds — plenty of time to stream the next ring.

### Street Grid

- **Major roads:** 12-unit wide (3 lanes each way) — every 128 units
- **Minor roads:** 8-unit wide — every 64 units
- **Laneways (CBD only):** 4-unit wide — irregular placement
- Roads are baked into ground plane textures per chunk. No separate road meshes.
- **Tram tracks** on major CBD roads (visual only, plus collision for "don't drive on tracks" humour).

### Ground Plane

Each chunk's ground is a single textured quad. Road markings, footpaths, grass, dirt — all baked into a 512×512 texture atlas per chunk. This is the single biggest performance win: **one draw call per chunk ground**.

Generate ground textures procedurally at build time from a road layout JSON definition. Store as compressed PNG in asset bundle.

---

## 4. Asset Pipeline

### Art Style: Low-Poly Flat-Shaded

Think **Crossy Road meets GTA 1**. Flat-shaded, no textures on models (vertex colours or solid materials only). This is:
- Visually distinctive and charming
- Extremely GPU-cheap (no texture sampling on models)
- Fast to produce (AI-assisted or manual)
- Small file sizes

### Polygon Budgets

| Asset | Triangle Budget | Notes |
|-------|----------------|-------|
| Van (Troweled Earth) | 800–1200 | Hero asset, most detail |
| Character (Jose/Jarrad/Matt) | 300–500 | Visible from 45m up, don't need much |
| Building (residential) | 200–400 | Instanced heavily |
| Building (commercial) | 400–800 | Larger, more variety |
| Tree | 50–100 | Billboard LOD at distance |
| Prop (cone, bin, etc) | 30–80 | Instanced |
| Obstacle (kangaroo, emu) | 200–400 | Need to be recognisable |

### Tools

- **Blender 4.x** — All 3D modelling. Free, excellent glTF export.
- **glTF 2.0 (`.glb`)** — Universal format. Three.js loads natively. Binary, compressed.
- **gltf-transform** — CLI tool for optimising: merge buffers, quantize vertices, draco compress.
- **Blockbench** — Alternative for super-low-poly models (Minecraft-style tool, faster for simple shapes).

### Asset Generation Strategy (AI-Assisted)

1. **Buildings:** Create 5–8 base building templates per zone in Blender. Vary with vertex colour palettes and scale at runtime. A suburban zone needs: terrace house, standalone house, corner shop, café, pub. CBD needs: office tower (3 heights), shopfront, station.
2. **Use AI image gen** for texture atlases (ground planes, signage). Feed Melbourne reference photos.
3. **Characters:** Simple capsule bodies with coloured shirts. Jose = high-vis yellow. Jarrad = blue. Matt = red. Recognisable from altitude.

### Compression Pipeline

```bash
# Per model
gltf-transform dedup model.glb model-dedup.glb
gltf-transform quantize model-dedup.glb model-quant.glb
gltf-transform draco model-quant.glb model-final.glb

# Target: <50 KB per building, <100 KB for van, <20 KB per prop
```

### Total Asset Budget

- **Target total download:** < 8 MB for initial zone
- **Full city:** < 25 MB (streamed progressively)
- Ground textures: ~4 MB (512×512 per chunk, 9 chunks visible = ~4 MB with compression)
- Models: ~3 MB for all unique models (instanced at runtime)
- Audio: ~1 MB (compressed, streamed)

---

## 5. Vehicle Physics

### Decision: **Custom arcade physics** (not Rapier for driving)

Rapier3D is used for **collision detection only** (world geometry, obstacles, triggers). Vehicle *movement* is custom because:

- Arcade driving needs to feel responsive and fun, not realistic
- Physics engine cars feel floaty/unpredictable without extensive tuning
- GTA 1/2 had dead-simple driving: accelerate, brake, turn. That's what we want.
- Custom = 100% tuneable for mobile touch input

### Driving Model

```typescript
interface VanState {
  position: THREE.Vector3;
  rotation: number;          // Y-axis heading in radians
  speed: number;             // Current forward speed
  steerAngle: number;        // Current wheel angle
  driftFactor: number;       // 0–1, how much the van is sliding
}

const VAN_CONFIG = {
  maxSpeed: 25,              // Units/sec (~90 km/h feel)
  acceleration: 15,          // Units/sec²
  brakeForce: 30,            // Units/sec²
  friction: 8,               // Natural deceleration
  turnRate: 2.8,             // Radians/sec at low speed
  turnRateAtSpeed: 1.2,      // Radians/sec at max speed
  driftThreshold: 0.6,       // Speed ratio where drift kicks in
  driftRecovery: 3.0,        // How fast drift corrects
  collisionBounce: 0.3,      // Velocity retained on wall hit
  mass: 1.0,                 // For collision response
};

function updateVan(van: VanState, input: InputState, dt: number) {
  // Acceleration
  if (input.throttle > 0) {
    van.speed += VAN_CONFIG.acceleration * input.throttle * dt;
  }
  if (input.brake) {
    van.speed -= VAN_CONFIG.brakeForce * dt;
  }

  // Friction
  van.speed -= VAN_CONFIG.friction * dt * Math.sign(van.speed);
  van.speed = THREE.MathUtils.clamp(van.speed, -5, VAN_CONFIG.maxSpeed);

  // Steering (speed-dependent)
  const speedRatio = Math.abs(van.speed) / VAN_CONFIG.maxSpeed;
  const turnRate = THREE.MathUtils.lerp(
    VAN_CONFIG.turnRate,
    VAN_CONFIG.turnRateAtSpeed,
    speedRatio
  );
  van.rotation += input.steer * turnRate * dt * Math.sign(van.speed);

  // Drift (rear slides out on hard turns at speed)
  if (speedRatio > VAN_CONFIG.driftThreshold && Math.abs(input.steer) > 0.5) {
    van.driftFactor = Math.min(van.driftFactor + dt * 2, 1);
  } else {
    van.driftFactor = Math.max(van.driftFactor - VAN_CONFIG.driftRecovery * dt, 0);
  }

  // Movement: blend forward direction with drift
  const forward = new THREE.Vector3(
    Math.sin(van.rotation),
    0,
    Math.cos(van.rotation)
  );
  // Drift pushes the van sideways
  const right = new THREE.Vector3(forward.z, 0, -forward.x);
  const driftOffset = right.multiplyScalar(
    van.driftFactor * input.steer * van.speed * 0.3 * dt
  );

  van.position.add(forward.multiplyScalar(van.speed * dt));
  van.position.add(driftOffset);
}
```

### Collision with Rapier

- Van has a **kinematic rigid body** in Rapier (position set manually each frame)
- World geometry (buildings, walls) = static colliders
- Obstacles (kangaroos, cones) = dynamic bodies that get knocked around
- **Trigger zones** for job sites, mini-game areas, zone transitions

```typescript
// Collision response (simplified)
rapierWorld.contactPairsWith(vanCollider, (otherCollider) => {
  const normal = getContactNormal(vanCollider, otherCollider);
  van.speed *= VAN_CONFIG.collisionBounce;
  van.position.add(normal.multiplyScalar(0.5)); // Push out
});
```

### Spill Meter (From Original Game)

Spill meter still exists — tied to sharp turns, collisions, and driving over bumps. The drift factor feeds directly into spill accumulation:

```typescript
spill += van.driftFactor * dt * 15;         // Drifting spills
spill += collisionImpact * 20;              // Hitting stuff spills
spill = Math.max(0, spill - 2 * dt);        // Slow recovery
```

---

## 6. Gameplay Loop

### Core Loop

```
PHONE RINGS → CHECK JOB BOARD → DRIVE TO SITE → COMPLETE MINI-GAME → GET PAID → REPEAT
```

### Job System

```typescript
interface Job {
  id: string;
  type: 'residential' | 'commercial' | 'heritage' | 'emergency';
  zone: Zone;
  position: THREE.Vector3;
  miniGames: MiniGameType[];     // Sequence of mini-games for this job
  timeLimit: number;             // Seconds to complete all mini-games
  payBase: number;               // Base payment
  bonusMultiplier: number;       // Quality bonus (wall coverage, speed, etc.)
  client: string;                // Funny Aussie name + dialogue
  description: string;           // "Karen in Toorak wants her feature wall re-rendered"
}

type MiniGameType =
  | 'mixing'
  | 'troweling'
  | 'coffee_break'
  | 'food_stop'
  | 'pee_break';
```

### Flow in Detail

1. **Morning Start:** Game begins at the Troweled Earth depot (Industrial zone). Jose, Jarrad, and Matt pile into the van. Phone notification pops up showing available jobs.

2. **Job Board UI:** Overlay screen showing 3–5 available jobs pinned on a mini-map. Each shows:
   - Location (zone + street name)
   - Job type icon
   - Pay range
   - Time pressure indicator
   - Funny one-liner description

3. **Accept Job:** Player taps a job. Waypoint marker appears in 3D world (floating diamond above destination, visible through buildings). GPS line drawn on ground plane showing route.

4. **Drive There:** Open world driving. Encounter random obstacles. Spill meter active. Time ticking if it's a rush job. Radio plays (Aussie banter between Jose/Jarrad/Matt).

5. **Arrive at Site:** Van enters trigger zone. Camera transitions. Mini-game sequence begins.

6. **Complete Mini-Games:** 1–3 mini-games per job in sequence. Score tracked per game.

7. **Job Complete:** Payment calculated. Stars/rating shown. Funny client reaction dialogue. Return to van → new jobs available on phone.

### Progression

- **Day system:** Each "day" = ~15 minutes real time. Complete 3–5 jobs per day.
- **Upgrades:** Spend earnings on van upgrades (better suspension = less spill, turbo = faster, bigger mixer = more capacity).
- **Reputation:** Higher rep unlocks harder/better-paying zones. Start in suburbs, unlock CBD, then heritage jobs.
- **Random events:** "Jarrad needs a servo pie" → food stop mini-game triggers mid-drive. "Matt's gotta go" → pee break triggers. These are comedic interrupts.

### World State

```typescript
interface GameState {
  day: number;
  time: number;                  // 0–1 (morning to evening)
  money: number;
  reputation: Record<Zone, number>;
  activeJob: Job | null;
  completedJobs: string[];
  vanUpgrades: VanUpgrades;
  spill: number;
}
```

---

## 7. Mini-Game Integration

### Architecture: Scene Overlay System

Mini-games render as **separate Three.js scenes** composited on top of the world scene. The world scene stays loaded but paused/dimmed.

```typescript
class MiniGameManager {
  private worldScene: THREE.Scene;
  private miniGameScene: THREE.Scene;
  private miniGameCamera: THREE.Camera;
  private activeGame: MiniGame | null = null;

  startMiniGame(type: MiniGameType) {
    // 1. Pause world simulation
    worldSimulation.pause();

    // 2. Dim world (post-processing or overlay)
    worldDimOverlay.visible = true;

    // 3. Transition camera (tween world camera toward site)
    tweenCamera(this.worldCamera, getSiteCloseup(), 800);

    // 4. Activate mini-game scene
    this.activeGame = MiniGameFactory.create(type);
    this.activeGame.init(this.miniGameScene);
  }

  render(renderer: THREE.WebGLRenderer) {
    // Render world (dimmed)
    renderer.render(this.worldScene, this.worldCamera);
    // Render mini-game on top
    if (this.activeGame) {
      renderer.autoClear = false;
      renderer.render(this.miniGameScene, this.miniGameCamera);
      renderer.autoClear = true;
    }
  }
}
```

### Mini-Game Specifications

#### 🪣 Mixing Buckets
- **3D version:** First-person-ish view of a mixing station. 3D bucket model. Drag-to-pour mechanic with ingredient bottles.
- **Mechanic:** Pour correct ratios of render mix. Tilt phone (accelerometer) or drag slider. Color of mix changes — target a specific shade.
- **Scoring:** Accuracy of mix ratio → affects troweling quality.
- **Keep from current:** Core logic (ratios, scoring thresholds). Rewrite rendering.

#### 🧱 Troweling Walls
- **3D version:** Close-up view of a wall surface. 3D wall plane. Trowel follows finger/touch.
- **Mechanic:** Swipe across wall to apply render. Pressure (speed of swipe) affects thickness. Must achieve even coverage.
- **Scoring:** Wall coverage %, evenness bonus.
- **Keep from current:** Coverage calculation, percentage tracking.

#### ☕ Coffee Break
- **3D version:** Counter-top scene. Coffee machine, cups, milk.
- **Mechanic:** Quick-time-event style. Tap sequences to make coffees for the crew. Each character has a preference (Jose = long black, Jarrad = flat white, Matt = iced latte). Timer.
- **New addition** to replace simple timer from original.

#### 🍔 Food Stop
- **3D version:** Servo counter. Meat pies, sausage rolls, Farmers Union iced coffee.
- **Mechanic:** Memory/matching game. Crew shouts orders, player selects correct items from the counter. Speed bonus.
- **Keep from current:** Order logic if it exists.

#### 🚽 Matt's Pee Break
- **3D version:** Behind a bush/portaloo. Comedy scene.
- **Mechanic:** Aim-based minigame (tilt phone or drag). Avoid making a mess. Timer — the longer it takes, the more the crew yells from the van.
- **Purely comedic.** Low stakes, comic relief between hard jobs.

### Interface Between Mini-Games and World

```typescript
interface MiniGame {
  type: MiniGameType;
  init(scene: THREE.Scene): void;
  update(dt: number, input: InputState): void;
  getScore(): MiniGameScore;
  isComplete(): boolean;
  dispose(): void;
}

interface MiniGameScore {
  percentage: number;      // 0–100
  timeBonus: number;
  spillPenalty: number;
  funnyComment: string;    // "Jarrad reckons that's a 6 out of 10, which is generous"
}
```

---

## 8. Mobile Controls

### Layout

```
┌─────────────────────────────────┐
│                                 │
│         GAME VIEWPORT           │
│                                 │
│    [SPILL METER]    [TIMER]     │
│                                 │
│                                 │
│  ┌─────┐               ┌─────┐ │
│  │     │               │BRAKE│ │
│  │ JOY │               │     │ │
│  │STICK│               │ 🔴  │ │
│  │     │               └─────┘ │
│  └─────┘               ┌─────┐ │
│                         │HORN │ │
│                         └─────┘ │
└─────────────────────────────────┘
```

### Implementation

**Virtual Joystick:** Use `nipplejs` — battle-tested, mobile-optimised, 4 KB.

```typescript
import nipplejs from 'nipplejs';

const joystick = nipplejs.create({
  zone: document.getElementById('joystick-zone'),
  mode: 'static',
  position: { left: '80px', bottom: '100px' },
  size: 120,
  color: 'rgba(255,255,255,0.3)',
});

joystick.on('move', (evt, data) => {
  // data.angle.radian → steering direction
  // data.force (0–1 clamped) → throttle amount
  inputState.steer = Math.cos(data.angle.radian);   // Left-right
  inputState.throttle = Math.min(data.force / 50, 1);
});

joystick.on('end', () => {
  inputState.steer = 0;
  inputState.throttle = 0;
});
```

**Brake Button:** Right side, large tap zone (100×100 CSS px minimum for fat thumbs).

**Horn Button:** Small, below brake. Honks. Scares kangaroos. Purely fun.

### Mini-Game Controls

Each mini-game overrides the control scheme:
- **Troweling:** Full-screen touch drag (joystick hidden)
- **Mixing:** Drag sliders or tilt (accelerometer via DeviceOrientation API)
- **Coffee/Food:** Tap targets
- **Pee break:** Tilt or drag

### Touch Optimisation

- **Touch-action: none** on game canvas (prevents browser gestures)
- **Passive event listeners** where possible
- **60 Hz input polling** — sample touch position every frame, not on every touch event
- **Dead zone** on joystick: 15% inner radius before registering input
- **Haptic feedback** via `navigator.vibrate()` on collisions and mini-game events (short pulses: 50ms hit, 100ms crash, 200ms job complete)

---

## 9. Performance Strategy

### Target: 30 FPS on mid-range phones (2022 Android, iPhone 11+)

### Rendering Budget

| Category | Draw Calls | Triangles |
|----------|-----------|-----------|
| Ground planes (9 chunks) | 9 | 18 |
| Buildings (instanced, ~6 types visible) | 6 | ~15,000 |
| Props (instanced, ~4 types) | 4 | ~3,000 |
| Van + characters | 4 | ~2,500 |
| Obstacles (instanced) | 3 | ~2,000 |
| UI overlays | 2 | ~100 |
| **TOTAL** | **~28** | **~22,600** |

28 draw calls and 23K triangles is extremely comfortable for mobile WebGL.

### Techniques

#### Instanced Meshes (Critical)
Every repeated object (buildings, trees, poles, bins, cones) uses `THREE.InstancedMesh`. One draw call per unique model regardless of instance count.

```typescript
// Example: 200 terrace houses, 1 draw call
const terraceGeo = loadedModels.terraceHouse.geometry;
const terraceMat = new THREE.MeshLambertMaterial({ vertexColors: true });
const instances = new THREE.InstancedMesh(terraceGeo, terraceMat, 200);
// Set transforms per instance...
```

#### Frustum Culling
Three.js does this automatically per object. Ensure bounding boxes are computed on load (`mesh.geometry.computeBoundingBox()`). For instanced meshes, set `frustumCulled = false` and handle manually if needed (or let the GPU cull — at 23K triangles, it's fine).

#### LOD Strategy
At camera height of 45 units and 30° FOV, distant objects are tiny. Simple LOD:

| Distance | Strategy |
|----------|----------|
| 0–100 units | Full model |
| 100–200 units | 50% triangle model |
| 200+ units | Billboard sprite or hidden |

Implement with `THREE.LOD` on non-instanced objects. For instanced meshes, swap the entire InstancedMesh geometry at distance thresholds.

**Trees specifically:** Billboard sprites (a single quad with a tree texture) at all distances. They're viewed from above — a 2D circle with a trunk shadow looks fine from 45 metres up.

#### Chunk Loading
- Load chunks in a Web Worker (parse glTF off main thread using `three-stdlib` loader)
- Transfer `ArrayBuffer` geometry data to main thread
- Budget: 16ms per frame. Chunk loading spread across 3–4 frames.

#### Texture Strategy
- **Models:** NO textures. Vertex colours / flat materials only. Saves GPU memory and texture sampling.
- **Ground:** 512×512 per chunk, compressed. 9 visible = ~9 MB VRAM (fine).
- **UI:** Sprite atlas, single 1024×1024 texture for all HUD elements.

#### Shadows
**No real-time shadows.** Baked ambient occlusion on ground textures. Simple circular blob shadow under the van and obstacles (a dark transparent circle mesh that follows each entity). This alone saves 50%+ of GPU budget.

#### Materials
Use `MeshLambertMaterial` everywhere (one light calculation per vertex, not per pixel). With flat-shaded low-poly, this looks correct and is maximally cheap.

#### Single Directional Light
One `DirectionalLight` (sun). No point lights. No spotlights. Ambient light for fill. That's it.

#### Renderer Settings

```typescript
const renderer = new THREE.WebGLRenderer({
  antialias: false,          // Too expensive on mobile
  powerPreference: 'high-performance',
  alpha: false,
  stencil: false,
  depth: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));  // Cap at 2x
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.sortObjects = false;  // We control render order
```

#### Resolution Scaling
If FPS drops below 25, dynamically reduce render resolution:

```typescript
function adaptiveQuality(fps: number) {
  if (fps < 25) renderer.setPixelRatio(1);      // Drop to 1x
  if (fps < 20) canvas.style.imageRendering = 'pixelated'; // Embrace it
  if (fps > 35) renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); // Restore
}
```

---

## 10. Migration Strategy

### What to Keep

| Current Code | Reuse? | Notes |
|-------------|--------|-------|
| Vite + TypeScript config | ✅ Keep | Same build tooling, update configs |
| Game state management | ✅ Adapt | Core state shape (money, spill, jobs) carries over |
| Mini-game scoring logic | ✅ Adapt | Ratios, thresholds, percentage calculations |
| Obstacle behaviour logic | ✅ Adapt | Kangaroo hop patterns, emu AI — rewrite movement but keep behaviour design |
| Touch input handling | ⚠️ Partial | Replace with nipplejs but keep dead zone / input processing patterns |
| Phaser scenes/rendering | ❌ Throw away | Entirely replaced by Three.js |
| Phaser physics | ❌ Throw away | Replaced by custom + Rapier |
| 2D sprite assets | ❌ Throw away | All-new 3D assets |
| Sound effects | ✅ Keep | Audio files carry over, play via Howler.js |
| Character dialogue/text | ✅ Keep | All written content, jokes, names |

### Build Order (Critical Path)

```
Phase 0: Foundation
├── Three.js + Vite + TypeScript project scaffold
├── Basic scene with ground plane
├── Camera system (§2)
└── Van model + movement (no physics yet)

Phase 1: Driving Core
├── Custom vehicle physics (§5)
├── Rapier collision world
├── One chunk of city (test zone)
├── Obstacle spawning + collision
└── Spill meter

Phase 2: City
├── Chunk loading system
├── All 5 zone ground planes
├── Building instanced meshes
├── Street props
└── Zone transitions

Phase 3: Mini-Games
├── Mini-game overlay system
├── Troweling (most complex)
├── Mixing
├── Coffee break
├── Food stop
├── Pee break
└── Score → payment pipeline

Phase 4: Gameplay Loop
├── Job board UI
├── Waypoint / GPS system
├── Day cycle
├── Progression / upgrades
├── Random events (food stops, pee breaks)
└── Radio/dialogue system

Phase 5: Polish
├── Mobile controls tuning
├── Performance profiling + optimisation
├── Sound design
├── Particle effects (dust, splash)
├── Menu / title screen
├── Tutorial
└── QA + testing on real devices
```

---

## 11. Timeline Estimate

**Team:** 1 human developer + AI coding assistants (Claude, Copilot). Treating AI as a 2–3x multiplier on implementation speed.

| Phase | Duration | Cumulative |
|-------|----------|------------|
| **Phase 0: Foundation** | 1 week | Week 1 |
| **Phase 1: Driving Core** | 2 weeks | Week 3 |
| **Phase 2: City** | 3 weeks | Week 6 |
| **Phase 3: Mini-Games** | 2 weeks | Week 8 |
| **Phase 4: Gameplay Loop** | 2 weeks | Week 10 |
| **Phase 5: Polish** | 2 weeks | Week 12 |
| **Buffer + QA** | 2 weeks | Week 14 |

**Total: ~14 weeks (3.5 months)** for a playable, polished MVP.

### What "Done" Looks Like (MVP)

- Open Melbourne-inspired city with 5 zones, driveable
- 10+ unique job sites
- All 5 mini-games functional
- Progression system (money, reputation, van upgrades)
- Mobile-optimised, runs at 30 FPS on iPhone 11 / mid-range Android
- Deployed as static web app (Vite build → CDN)

### Risks & Mitigations

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Mobile performance issues | Medium | Aggressive polygon budgets, no textures on models, resolution scaling |
| Rapier WASM load time | Low | Lazy-load after initial scene renders, ~200 KB |
| Asset production bottleneck | Medium | AI-assisted modelling (Meshy, Tripo3D), strict low-poly style reduces work |
| Scope creep | High | MVP = 5 zones, 5 mini-games, 10 jobs. Nothing more until that ships. |
| Touch controls feel bad | Medium | Extensive playtesting from Phase 1. Lock controls early, tune late. |

---

## Appendix A: File Structure

```
troweled-earth-rush/
├── src/
│   ├── main.ts                 # Entry point
│   ├── core/
│   │   ├── Engine.ts           # Three.js setup, render loop
│   │   ├── ECS.ts              # bitECS setup, system runner
│   │   ├── AssetLoader.ts      # glTF loading, caching
│   │   └── InputManager.ts     # Touch, joystick, keyboard
│   ├── world/
│   │   ├── ChunkManager.ts     # Load/unload chunks
│   │   ├── CameraController.ts # §2 camera system
│   │   ├── CityData.ts         # Zone definitions, road layouts
│   │   └── Weather.ts          # Time of day, lighting
│   ├── vehicle/
│   │   ├── VanPhysics.ts       # §5 custom driving
│   │   ├── VanModel.ts         # 3D model + animation
│   │   └── SpillMeter.ts       # Spill tracking
│   ├── gameplay/
│   │   ├── JobManager.ts       # §6 job board, active job
│   │   ├── ProgressionManager.ts
│   │   ├── WaypointSystem.ts   # GPS lines, markers
│   │   └── DialogueManager.ts  # Character banter
│   ├── minigames/
│   │   ├── MiniGameManager.ts  # §7 overlay system
│   │   ├── MixingGame.ts
│   │   ├── TrowelingGame.ts
│   │   ├── CoffeeGame.ts
│   │   ├── FoodStopGame.ts
│   │   └── PeeBreakGame.ts
│   ├── entities/
│   │   ├── Obstacles.ts        # Kangaroo, emu, cone systems
│   │   ├── NPCs.ts             # Pedestrians, workers
│   │   └── Props.ts            # Street furniture
│   ├── ui/
│   │   ├── HUD.ts              # Spill, timer, money
│   │   ├── JobBoard.ts         # Job selection overlay
│   │   ├── Controls.ts         # Joystick + buttons
│   │   └── MenuScreen.ts
│   └── audio/
│       ├── AudioManager.ts     # Howler.js wrapper
│       └── RadioSystem.ts      # Van radio / banter
├── assets/
│   ├── models/                 # .glb files
│   ├── textures/               # Ground planes, UI atlas
│   └── audio/                  # SFX + music
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Appendix B: Key Dependencies

```json
{
  "dependencies": {
    "three": "^0.170.0",
    "@dimforge/rapier3d-compat": "^0.14.0",
    "bitecs": "^0.3.40",
    "nipplejs": "^0.10.2",
    "howler": "^2.2.4"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "vite": "^6.1.0",
    "@types/three": "^0.170.0",
    "gltf-transform-cli": "^4.0.0"
  }
}
```

**Total production dependency weight (gzipped):** ~250 KB (Three.js 150 KB + Rapier WASM 80 KB + rest ~20 KB). Extremely lean for a 3D open world game.

---

*This blueprint is opinionated by design. Follow it as-is for Phase 0–1, then iterate based on what you learn from real device testing.*
