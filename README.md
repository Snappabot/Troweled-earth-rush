# 🚐 Troweled Earth Rush

A 2D top-down arcade driving game for mobile devices, featuring the crew from Troweled Earth Melbourne!

## 🎮 Play Now

```bash
npm install
npm run dev
# Open http://localhost:3000
```

Or access at: `http://192.168.4.76:3000`

## 🎯 Game Overview

**Genre:** Fast-paced arcade driving with quirky mini-games  
**Platform:** Mobile-first (touch controls), works on desktop  
**Style:** 16-bit inspired pixel art  

### The Mission
Race against the clock to pick up your crew, load up plaster at the factory, dodge Australian obstacles (kangaroos, pies, beach balls!), and arrive at the job site to apply beautiful finishes before time runs out!

## 👷 The Crew

- **Jose** (Driver) - Muscular Latino with dreads, grips the wheel with intensity
- **Jarrad** (Crew) - Bearded Aussie with glasses, holds on for dear life
- **Matt** (Crew) - Tall & lanky, always needs a pee break

## 🎬 Game Flow

1. **Pickup Phase** - Collect crew members
2. **Factory Phase** - Mix plaster (stirring mini-game)
3. **Delivery Drive** - Timed chaos with obstacles & quirky stops:
   - ☕ Coffee Run (Levels 4-5)
   - 🥧 Food Balance (Levels 6-7)
   - 🚽 Pee Break (Levels 8-10)
4. **Application Phase** - Trowel the walls to perfection!

## 🦘 Obstacles

- Kangaroos hopping unpredictably
- Pies flying from trucks
- Rolling road cones
- Giant beach balls
- Escaped chooks (chickens)
- Emus (later levels)

## 🕹️ Controls

**Mobile (Touch):**
- Left side: Virtual joystick to steer/accelerate
- Right side: BRAKE & BOOST buttons
- Tap crew icons: Brace to reduce spills

**Desktop (Keyboard):**
- Arrow keys: Steer/accelerate/reverse
- Space: Brake
- B: Boost

## 📁 Project Structure

```
src/
├── main.ts              # Game initialization
├── scenes/
│   ├── BootScene.ts     # Loading screen
│   ├── PreloadScene.ts  # Asset generation
│   ├── MenuScene.ts     # Main menu
│   ├── GameScene.ts     # Core driving gameplay
│   ├── MixingScene.ts   # Plaster mixing mini-game
│   ├── TrowelingScene.ts # Wall application
│   ├── CoffeeScene.ts   # Coffee catch mini-game
│   ├── FoodScene.ts     # Pie balance mini-game
│   ├── PeeScene.ts      # Matt's emergency stop
│   └── GameOverScene.ts # Results screen
├── objects/
│   ├── Van.ts           # Vehicle physics
│   └── ObstacleManager.ts
├── ui/
│   ├── Joystick.ts      # Touch joystick
│   ├── SpillMeter.ts    # Material tracker
│   └── Timer.ts         # Countdown
├── effects/
│   └── WeatherEffects.ts # Rain/wind for Level 10
└── utils/
    ├── SoundManager.ts  # Audio handling
    └── ScoreManager.ts  # High scores
```

## 🛠️ Tech Stack

- **Engine:** Phaser 3.80+
- **Language:** TypeScript
- **Build:** Vite
- **Mobile:** (Future) Capacitor wrapper

## 🎨 Assets

Currently using procedurally generated placeholder graphics. Future versions will include:
- Custom pixel art sprites
- Animated characters
- Australian-themed environments
- Proper sound effects & music

## 📊 Scoring

- Distance traveled
- Time remaining bonus
- Spill penalty
- Coverage percentage
- Bonus multipliers (No Pee Delay, Spill-Free, etc.)

## 🏆 Achievements

- ⭐ Perfect Coverage
- ⏱️ Speed Demon
- 🏗️ Master Plasterer
- 🦘 Outback Survivor
- 🏆 Brutalist Champion

## 📱 Future Plans

- [ ] iOS/Android app store release
- [ ] Real pixel art sprites
- [ ] Professional sound design
- [ ] Leaderboards
- [ ] More levels & obstacles
- [ ] Endless mode

---

**Made for Troweled Earth Melbourne**  
🌐 troweledearthmelbourne.com.au  
📱 @troweled_earth_melbourne

#TroweledEarthRush
