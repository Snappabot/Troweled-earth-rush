# 🚐 Troweled Earth Rush - Game Design Document

## Overview
**Genre:** 2D Top-Down Arcade Driving + Mini-Games
**Platform:** iOS/Android (Mobile-First)
**Engine:** Phaser 3 + Capacitor (for native wrapper)
**Art Style:** 16-bit pixel art, vibrant, humorous

---

## Core Loop
1. **Pickup Phase** - Collect crew members (Jose → Jarrad → Matt)
2. **Factory Phase** - Mixing mini-game (stir buckets)
3. **Delivery Drive** - Timed driving with obstacles & quirky stops
4. **Application Phase** - Troweling mini-game at job site

---

## Characters

### Jose (Driver)
- Muscular Latino, long dreadlocks, goatee
- Intense eyes, grips wheel dramatically
- Always in driver seat

### Jarrad (Crew)
- Ultra-muscular Aussie, beard, glasses
- Confident but strained when bracing
- In van back, holds on for dear life

### Matt (Crew)
- Tall & lanky, long floppy limbs
- Short cropped hair, no tattoos
- Always desperate near pee breaks
- Does hilarious fidget/pee dances

---

## Vehicle
- Black tradie panel van
- "TROWELLED EARTH" signage (orange/brown)
- Trowel + tree logo
- Open back tray with sloshing buckets
- Beige/terracotta clay globs spill on turns

---

## Level Structure (10 Levels)

| Level | House Type | Walls | Stops | Difficulty |
|-------|-----------|-------|-------|------------|
| 1 | Tiny Generic Shack | 1 | 0 | Easy |
| 2 | Small Generic House | 2 | 0 | Easy |
| 3 | Small Generic House | 3 | 0 | Easy |
| 4 | Medium Brutalist Home | 4 | 1 (Coffee) | Medium |
| 5 | Medium Brutalist Home | 5 | 1 (Coffee) | Medium |
| 6 | Medium Brutalist Home | 6 | 2 (Coffee+Food) | Medium |
| 7 | Luxury Brutalist Villa | 8 | 2 (Coffee+Food) | Hard |
| 8 | Luxury Brutalist Villa | 10 | 3 (All+Pee) | Hard |
| 9 | Luxury Brutalist Villa | 12 | 3 (All+Pee) | Hard |
| 10 | Massive Brutalist Mansion | 20+ | 3 (Chained+Weather) | Extreme |

---

## Obstacles (Silly Australian)
- 🦘 Kangaroos hopping unpredictably
- 🥧 Pie trucks dropping food
- 🏗️ Dancing construction workers
- 🔶 Rogue road cones rolling
- 🏐 Giant bouncing beach balls
- 🐔 Escaped chooks flapping
- 🦙 Wandering emus (later levels)
- 💨 Roadworks with dancing workers

---

## Mini-Games

### 1. Mixing (Factory)
- Drag finger in circles to stir
- Too fast = overflow splash
- Too slow = lumpy mix
- Fill 5-10 buckets

### 2. Coffee Break (Levels 4-5)
- Park van
- Tap rhythm to catch flying coffees
- Miss = slow boost penalty

### 3. Food Mission (Levels 6-7)
- Drive-thru stop
- Tilt phone to balance pie stack
- Drop = splat + time penalty

### 4. Matt's Pee Break (Levels 8-10)
- Emergency bush stop
- 10-15 sec timer
- Tap QTE frenzy
- Fail = desperate dance + massive spill

### 5. Troweling (All Levels)
- Side-view wall
- Drag to spread material
- 100% grid coverage goal
- Complex shapes on brutalist houses

---

## Controls (Touch)
- **Left side:** Virtual joystick (steer/accelerate/reverse)
- **Right side:** Brake/handbrake button (hold for drift)
- **Boost tap:** When powered up
- **Crew icons:** Tap to brace (reduce spill)
- **Mini-games:** Swipe/drag gestures

---

## Scoring
- Arrival time buffer
- Remaining material %
- Wall coverage %
- Bonus multipliers:
  - "No Pee Delay"
  - "Spill-Free Sprint"
  - "Clock-Beating Legend"
  - "Matt Didn't Burst"

---

## Audio
- Upbeat Aussie rock/chiptune
- Engine revs, skids
- Crew banter:
  - "Faster, Jose — Matt's crossing his legs!"
  - "Steady on!"
  - "Troweled to bloody perfection!"
  - "Oi, watch the pothole!"
- Goofy fail sounds (boings, splats)
- Success fanfare

---

## UI Elements
- Big countdown timer (top)
- Spill meter (bucket icon filling)
- Mini-map with stops/job
- Speed/boost indicators
- Crew status icons

---

## Monetization (Free-to-Play)
- Optional ads (watch for extra time/lives)
- Share funny fail clips
- No pay-to-win

---

## Tech Stack
- **Engine:** Phaser 3.70+
- **Language:** TypeScript
- **Mobile Wrapper:** Capacitor
- **Assets:** Custom pixel art sprites
- **Audio:** Howler.js (via Phaser)
- **Build:** Vite

---

## File Structure
```
troweled-earth-rush/
├── src/
│   ├── main.ts
│   ├── scenes/
│   │   ├── BootScene.ts
│   │   ├── PreloadScene.ts
│   │   ├── MenuScene.ts
│   │   ├── GameScene.ts
│   │   ├── MixingScene.ts
│   │   ├── TrowelingScene.ts
│   │   └── GameOverScene.ts
│   ├── objects/
│   │   ├── Van.ts
│   │   ├── Crew.ts
│   │   ├── Obstacle.ts
│   │   └── Bucket.ts
│   ├── ui/
│   │   ├── Joystick.ts
│   │   ├── SpillMeter.ts
│   │   └── Timer.ts
│   └── utils/
│       ├── Controls.ts
│       └── Physics.ts
├── assets/
│   ├── sprites/
│   ├── audio/
│   └── tilemaps/
├── index.html
├── package.json
└── vite.config.ts
```
