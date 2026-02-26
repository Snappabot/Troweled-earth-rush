import * as THREE from 'three';
import { Engine } from './core/Engine';
import { Characters } from './entities/Characters';
import { VanModel } from './vehicle/VanModel';
import { VanPhysics } from './vehicle/VanPhysics';
import { InputManager } from './core/InputManager';
import { SpillMeter } from './gameplay/SpillMeter';
import { JobManager } from './gameplay/JobManager';
import { WaypointSystem } from './gameplay/WaypointSystem';
import { JobBoard } from './ui/JobBoard';
import { HUD } from './ui/HUD';
import { MiniGameManager } from './minigames/MiniGameManager';
import type { ScaffoldResult } from './minigames/MiniGameManager';
import { AchievementGallery } from './ui/AchievementGallery';
import { PedestrianSystem } from './entities/PedestrianSystem';
import { TrafficSystem } from './entities/TrafficSystem';
import { CoffeeShop } from './entities/CoffeeShop';
import { BladderMeter } from './gameplay/BladderMeter';
import { Mikayla } from './entities/Mikayla';
import { Connie } from './entities/Connie';
import { SpeechBubble } from './ui/SpeechBubble';
import { DialoguePause } from './ui/DialoguePause';
import { CREW_CONFIGS } from './entities/CrewCharacter';
import type { Job } from './gameplay/JobManager';
import { preloadTEMLogo } from './utils/LogoLoader';
import { BRAND_SLOGANS, GAME_TIPS, JOB_OPENERS, randomFrom } from './data/Slogans';
import { isAllCollected, markCollected, getCollected, PHOTO_ACHIEVEMENTS } from './minigames/TrowelingGame';
import { RewardScreen } from './ui/RewardScreen';
import { TEMRadio } from './audio/TEMRadio';
import { IntroSequence } from './ui/IntroSequence';
import { StartMenu } from './ui/StartMenu';
import { GameMenu } from './ui/GameMenu';
import { CrewSelector } from './ui/CrewSelector';
import { crewBreakImmune, crewPayMult, crewTimerBonus, getActiveCrew } from './data/CrewPerks';
import { submitScore, getPlayerName, setPlayerName } from './services/LeaderboardService';
import { PlayerNamePrompt } from './ui/PlayerNamePrompt';
import { CharacterCreator } from './ui/CharacterCreator';
import { BattleScreen } from './ui/BattleScreen';
import { getRandomRival } from './data/RivalCrews';
import { TowerDefence } from './minigames/TowerDefence';
import type { TDConfig } from './minigames/TowerDefence';
import { ContractWarsPanel } from './ui/ContractWarsPanel';
import { PhotoReveal } from './minigames/PhotoReveal';
import { WorkshopShootout } from './minigames/WorkshopShootout';
import { RivalSystem } from './gameplay/RivalSystem';

// ── Crew pickup one-liners ────────────────────────────────────────────────────
const CREW_PICKUP_QUIPS: Record<string, string> = {
  Matt:     "Matt folds himself into the back. \"Took your time.\" He's already on his phone.",
  Jose:     "Jose appears from nowhere, bucket in hand. \"Vámonos — I was getting bored.\"",
  Jarrad:   "Jarrad adjusts his hard hat. \"I've been standing here fifteen minutes.\" He has.",
  Phil:     "Phil sips the last of his tea, unhurried. \"Right then. Let's go.\" He fastens his seatbelt twice.",
  Tsuyoshi: "Tsuyoshi vaults in without opening the door. His mohawk grazes the roof lining.",
  Fabio:    "Fabio loads in, trowel over his shoulder. \"You're late. Ehhhh —\" he waves it off. \"I found a pizza place nearby. Very acceptable.\"",
};

async function main() {
  // Preload TEM logo before any game objects are created — textures ready instantly
  await preloadTEMLogo();

  // ── Intro cinematic → Start menu → Character creator ─────────────────────────
  const introAudio = await new IntroSequence().play();
  await new StartMenu().show(introAudio);
  const playerChar = await new CharacterCreator().show();
  setPlayerName(playerChar.name); // persist for leaderboard

  const engine = new Engine();
  await engine.init();

  // ── Spawn crew scattered across the city ───────────────────────────────────
  const characters = new Characters(engine.scene);
  characters.spawnCrewAtCityPositions();

  const input = new InputManager();
  const van = new VanModel(engine.scene);

  // ── Start van near the edge of the map (NE corner, road intersection) ───────
  van.mesh.position.set(200, 0, 200);
  van.heading = Math.PI * 1.25; // facing south-west toward city centre

  const spillMeter = new SpillMeter();
  const hud = new HUD();
  hud.setPlayerCharacter(playerChar);
  const dialoguePause = new DialoguePause();

  // ── Job system ──────────────────────────────────────────────────────────────
  const jobManager = new JobManager();

  const physics = new VanPhysics(van, input,
    (intensity: number) => {
      if (jobManager.activePhase >= 2) spillMeter.triggerBump(intensity);
    },
    engine.collisionWorld,
    () => {
      if (jobManager.activePhase >= 2) spillMeter.triggerCrash();
    }
  );
  const waypointSystem = new WaypointSystem(engine.scene);

  // ── Rival System — 3 rival crews race to the job site ─────────────────────
  const rivalSystem = new RivalSystem(engine.scene);

  // ── Crew Selector ────────────────────────────────────────────────────────────
  const crewSelector = new CrewSelector();

  // ── CONTRACT WARS — battle system ────────────────────────────────────────────
  const battleScreen  = new BattleScreen();
  const towerDefence  = new TowerDefence();
  let   _currentRival = getRandomRival();   // updated per contested job

  // ── Job accepted → crew selector → briefing → start Phase 1 ─────────────────
  const jobBoard = new JobBoard((job: Job) => {
    jobBoard.hide();

    // Show crew selector first — player picks their team
    crewSelector.show(job.title, job.pay, (_crew) => {
      // Apply crew timer bonus to pay (perk effects)
      const payWithBonus = Math.round(job.pay * crewPayMult());
      const extraTime = crewTimerBonus();

      /** Shared function: start the job after briefing (or after battle screen) */
      const beginJob = () => {
        dialoguePause.show(
          `📋 ${job.title}`,
          `Client: ${job.client}\n\n${job.description}\n\n💰 Pay: ${payWithBonus.toLocaleString()} sats${payWithBonus !== job.pay ? ` ✦ crew bonus!` : ''}\n\n🏭 Head to the TEM workshop to collect supplies.`,
          () => {
            job.pay = payWithBonus;   // apply crew pay bonus
            const selectedCrewNames = getActiveCrew().map(id => id.charAt(0).toUpperCase() + id.slice(1));
            jobManager.acceptJob(job, selectedCrewNames);
            rivalSystem.start(job.position);
            hud.showRaceStrip(true);
            waypointSystem.setTarget(JobManager.WORKSHOP_POS);
            hud.setActiveJob(job, 1);
            hud.updateCrewStatus([], [], false);
            { const pn = hud.getPlayerChar()?.name ?? 'Driver'; hud.showToast(`🚐 Let's go ${pn}! Pick up supplies first.`, 0xD4A040); }
            // Schedule random breaks — skipped entirely if Phil is in crew
            jobElapsed = 0;
            if (!crewBreakImmune()) {
              // Pick 2 of 3 break types randomly, assign to two time slots
              const allBreaks: BreakKind[] = ['coffee', 'toilet', 'render'];
              const shuffled = allBreaks.sort(() => Math.random() - 0.5);
              const pick1 = shuffled[0], pick2 = shuffled[1];  // pick 2 of 3
              const firstAt  = 25 + Math.random() * 50 + extraTime;
              const secondAt = firstAt + 25 + Math.random() * 40;
              coffeeBreakAt  = -1; toiletBreakAt = -1; renderBreakAt = -1;
              if (pick1 === 'coffee' || pick2 === 'coffee')   coffeeBreakAt  = pick1 === 'coffee' ? firstAt : secondAt;
              if (pick1 === 'toilet' || pick2 === 'toilet')   toiletBreakAt  = pick1 === 'toilet' ? firstAt : secondAt;
              if (pick1 === 'render' || pick2 === 'render')   renderBreakAt  = pick1 === 'render' ? firstAt : secondAt;
            } else {
              coffeeBreakAt = Infinity; toiletBreakAt = Infinity; renderBreakAt = Infinity;
            }
            breakActive = null;
            savedWaypoint = null;
          },
          randomFrom(JOB_OPENERS)
        );
      };

      if (job.isContested) {
        // ── CONTRACT WARS: prompt name → battle screen → rival tracker ────────
        _namePrompt.show((_name) => {
          _currentRival      = getRandomRival();
          _contestedJobTitle = job.title;
          battleScreen.show(getActiveCrew(), _currentRival, () => {
            beginJob();   // TD fires inside the mini-game sequence below
          });
          setTimeout(() => battleScreen.injectLeaderboard(job.title), 50);
        });
      } else {
        beginJob();
      }
    });
  });

  // ── Spill penalty — 30% of active contract (only after materials picked up) ──
  spillMeter.onSpill = () => {
    if (jobManager.activePhase < 2) return; // no materials on board yet
    const contractPay = jobManager.activeJob?.pay ?? 0;
    const penalty = contractPay > 0 ? Math.round(contractPay * 0.30) : 30_000;
    _jobSpillTotal += penalty;
    jobManager.money = Math.max(0, jobManager.money - penalty);
    hud.updateMoney(jobManager.money);
    hud.showSpillPenalty(penalty);
    const pn = hud.getPlayerChar()?.name ?? 'Driver';
    hud.showToast(`🪣 SPILL! ${pn} lost ${Math.round(penalty/1000)}K sats!`, 0xFF4400);
  };

  // ── Traffic + Pedestrian systems ────────────────────────────────────────────
  const traffic    = new TrafficSystem(engine.scene);
  const pedestrians = new PedestrianSystem(engine.scene);

  // ── Coffee shop + Bladder mechanic ──────────────────────────────────────────
  const coffeeShop = new CoffeeShop(engine.scene);
  const bladderMeter = new BladderMeter();
  const mikayla = new Mikayla(engine.scene);
  const connie = new Connie(engine.scene);
  const speechBubble = new SpeechBubble();
  const activeSpeakerPos = new THREE.Vector3(Mikayla.POS.x, 6.0, Mikayla.POS.z);

  // Mini-game manager
  const miniGameManager = new MiniGameManager();

  // ── Achievement Gallery + Rewards ─────────────────────────────────────────
  const achievementGallery = new AchievementGallery();
  const rewardScreen = new RewardScreen();

  // ── Marbellino Mixer mini-game ─────────────────────────────────────────────

  // ── Game Menu (☰) — contains radio, money, photo, jobs, mixer, contract wars ──
  const radio = new TEMRadio();
  input.setRadio(radio);  // wire radio button on-screen control
  const contractWarsPanel = new ContractWarsPanel();
  const photoReveal = new PhotoReveal();
  const gameMenu = new GameMenu(
    () => achievementGallery.show(),
    () => {
      if (jobBoard.isVisible()) jobBoard.hide();
      else {
        const jobs = jobManager.getAvailableJobs();
        jobBoard.show(jobs);
      }
    },
    undefined, // Marbellino Mixer is mission-only (removed from menu)
    () => contractWarsPanel.show(),
  );
  gameMenu.mountMoneyPanel(hud.getMoneyPanel());
  gameMenu.mountRadio(radio.getEl());

  // ── Hide UI during opening cinematic ─────────────────────────────────────
  hud.setVisible(false);
  gameMenu.setVisible(false);

  // Guard to prevent job completion firing more than once per arrival
  let jobCompleting = false;

  // ── Contested job tracking for leaderboard ────────────────────────────────
  let _contestedJobTitle   = '';
  let _contestedStartTime  = 0;   // Date.now() when job mini-game starts
  let _jobSpillTotal       = 0;   // cumulative sats lost to spills this job
  const _namePrompt = new PlayerNamePrompt();

  // ── Random break interrupt system ─────────────────────────────────────────────
  // Breaks can fire at any point during a job — random timing each run
  const COFFEE_POS = { x: -60, z: -100 };
  const TOILET_POS = { x: 100, z: 60 };
  const RENDER_SUPPLY_POS = { x: 180, z: -60 };
  type BreakKind = 'coffee' | 'toilet' | 'render';
  // ── Opening cinematic state ──────────────────────────────────────────────────
  let cinematicActive = true;
  let cinematicTime   = 0;
  const CINEMATIC_DURATION = 5.0; // seconds

  const _eio = (t: number) => t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
  const _lrp = (a: number, b: number, t: number) => a + (b - a) * t;

  let jobElapsed = 0;
  let coffeeBreakAt = -1;  // seconds into job when coffee urge fires (-1 = done/unused)
  let toiletBreakAt = -1;  // seconds into job when toilet urge fires
  let renderBreakAt = -1;   // seconds into job when Darren's supply run fires (-1 = done/unused)
  let breakActive: BreakKind | null = null;       // which break is currently active
  let savedWaypoint: { x: number; z: number } | null = null; // waypoint before break

  // ── Update loop ─────────────────────────────────────────────────────────────
  engine.onUpdate((dt: number) => {
    const vanX = van.mesh.position.x;
    const vanZ = van.mesh.position.z;

    // ── Opening cinematic fly-over ────────────────────────────────────────────
    if (cinematicActive) {
      cinematicTime = Math.min(cinematicTime + dt, CINEMATIC_DURATION);
      const t = cinematicTime / CINEMATIC_DURATION;

      let camX: number, camY: number, camZ: number;

      if (t < 0.35) {
        // Phase 1: High wide-angle overview sweeping down toward city
        const p = _eio(t / 0.35);
        camX = _lrp(vanX * 0.1,  vanX + 10, p);   // start near map centre, move to van
        camY = _lrp(220, 95, p);
        camZ = _lrp(vanZ * 0.1,  vanZ + 40, p);
      } else if (t < 0.72) {
        // Phase 2: Orbit down around van
        const p   = _eio((t - 0.35) / 0.37);
        const ang = _lrp(Math.PI * 0.9, Math.PI * -0.15, p);
        const rad = _lrp(75, 34, p);
        camX = vanX + Math.sin(ang) * rad;
        camY = _lrp(95, 43, p);
        camZ = vanZ + Math.cos(ang) * rad;
      } else {
        // Phase 3: Settle into normal follow position (behind + above van)
        const p      = _eio((t - 0.72) / 0.28);
        const endAng = Math.PI * -0.15;
        const fromX  = vanX + Math.sin(endAng) * 34;
        const fromY  = 43;
        const fromZ  = vanZ + Math.cos(endAng) * 34;
        // Normal follow: camera is behind van (heading ~1.25π ≈ SW), 28 units back, 38 high
        const behX   = Math.sin(van.heading) * -28;
        const behZ   = -Math.cos(van.heading) * -28;
        camX = _lrp(fromX, vanX + behX, p);
        camY = _lrp(fromY, 38, p);
        camZ = _lrp(fromZ, vanZ + behZ, p);
      }

      engine.camera.camera.position.set(camX, camY, camZ);
      engine.camera.camera.lookAt(vanX, 1.5, vanZ);

      if (t >= 1) {
        cinematicActive = false;
        // Reveal UI
        hud.setVisible(true);
        gameMenu.setVisible(true);
        // Hint toast
        hud.showToast('☰  Tap the menu to pick up contracts!', 0xC4920A);
      }
      return; // skip all gameplay during cinematic
    }

    // ── Dialogue pause — freeze game, check for resume input ─────────────────
    if (dialoguePause.isActive) {
      if (input.forward || input.brake) dialoguePause.tryResume();
      // Still animate characters + update camera while paused
      characters.updateAll(dt);
      mikayla.update(dt, vanX, vanZ, speechBubble);
      connie.update(dt, vanX, vanZ, speechBubble);
      engine.camera.follow(van.mesh.position, van.velocity, van.heading);
      // Keep speech bubble projected
      {
        const projected = activeSpeakerPos.clone().project(engine.camera.camera);
        const sx = (projected.x * 0.5 + 0.5) * window.innerWidth;
        const sy = (-projected.y * 0.5 + 0.5) * window.innerHeight;
        speechBubble.setScreenPosition(sx, sy);
      }
      return; // Skip physics, timers, checkpoints
    }

    // ── Normal game loop ──────────────────────────────────────────────────────
    physics.update(dt);
    van.updateSuspension(dt);

    // ── CONTRACT WARS — tick rival progress ───────────────────────────────────
    // (ContractWar replaced by TowerDefence in mini-game sequence)

    const jobActive = jobManager.activeJob !== null && jobManager.activePhase >= 2;
    spillMeter.setVisible(jobActive);
    if (jobActive) {
      spillMeter.update(dt);
    } else {
      spillMeter.level = 0;
    }
    characters.updateAll(dt);

    // ── Coffee shop + Bladder mechanic ────────────────────────────────────────
    coffeeShop.update(dt);
    if (coffeeShop.tryVisit(vanX, vanZ) && breakActive !== 'coffee') {
      // Normal visit — if a coffee break waypoint is active, that handler fires instead
      spillMeter.level = Math.max(0, spillMeter.level - 0.6);
      bladderMeter.drinkCoffee();
      const urgentAfter = bladderMeter.isUrgent;
      if (urgentAfter) {
        hud.showToast('☕ Coffeed up — now find a toilet, fast!', 0xD4622A);
      } else {
        hud.showToast('☕ Coffee hit! Plaster steady, bladder loading...', 0xD4622A);
        // Personalised follow-up toast once the first one fades
        setTimeout(() => { const pn = hud.getPlayerChar()?.name ?? 'Driver'; hud.showToast(`☕ ${pn} grabbed a coffee!`, 0xD4622A); }, 2800);
      }
    }

    bladderMeter.update(dt, jobManager.activeJob ? physics.speed : 0);
    if (bladderMeter.tryRelief(vanX, vanZ) && breakActive !== 'toilet') {
      // Normal visit — if a toilet break waypoint is active, that handler fires instead
      hud.showToast('🚽 Ahhh! Relief! Ready for the next coffee ☕', 0x2196F3);
    }
    if (bladderMeter.isUrgent && jobManager.activeJob) {
      const now = Date.now();
      if (now - bladderMeter.lastUrgentToast > 15000) {
        bladderMeter.lastUrgentToast = now;
        hud.showToast('🚽 Bursting! Find the toilet before you spill!', 0xFF5722);
      }
    }
    spillMeter.spillRateMultiplier = bladderMeter.spillMultiplier;

    // ── Character proximity dialogue ─────────────────────────────────────────
    if (mikayla.update(dt, vanX, vanZ, speechBubble)) {
      activeSpeakerPos.set(Mikayla.POS.x, 6.0, Mikayla.POS.z);
    }
    if (connie.update(dt, vanX, vanZ, speechBubble)) {
      activeSpeakerPos.set(Connie.POS.x, 6.0, Connie.POS.z);
    }

    const crewDialogue = characters.checkProximityDialogue(vanX, vanZ);
    if (crewDialogue) {
      activeSpeakerPos.set(crewDialogue.pos.x, 6.0, crewDialogue.pos.z);
      speechBubble.show(CREW_CONFIGS[crewDialogue.name], crewDialogue.line);
    }

    // Keep bubble anchored above the active speaker every frame
    {
      const projected = activeSpeakerPos.clone().project(engine.camera.camera);
      const sx = (projected.x * 0.5 + 0.5) * window.innerWidth;
      const sy = (-projected.y * 0.5 + 0.5) * window.innerHeight;
      speechBubble.setScreenPosition(sx, sy);
    }

    pedestrians.update(dt, vanX, vanZ);

    // ── Traffic system ────────────────────────────────────────────────────────
    traffic.update(dt, vanX, vanZ);
    const trafficResult = traffic.resolveVan(vanX, vanZ);
    if (trafficResult.hit) {
      van.mesh.position.x = trafficResult.x;
      van.mesh.position.z = trafficResult.z;
      if (jobActive) {
        // Only spill/damage materials after they've been picked up (Phase 2+)
        if (jobManager.activePhase >= 2) {
          spillMeter.triggerCrash(); // +30% to spill meter; may trigger 30% contract penalty
          const crashFee = 15_000;   // flat material damage fee
          _jobSpillTotal += crashFee;
          jobManager.money = Math.max(0, jobManager.money - crashFee);
          hud.updateMoney(jobManager.money);
        }
      }
      if (Math.random() < 0.3) {
        const pn = hud.getPlayerChar()?.name ?? 'Driver';
        const crashMsg = jobManager.activePhase >= 2
          ? `💥 Watch it ${pn}! -15K sats`
          : `💥 Watch it ${pn}!`;
        hud.showToast(crashMsg, 0xFF3333);
      }
    }

    waypointSystem.update(dt, vanX, vanZ);

    // ── Rival System — update vans + HUD race strip ───────────────────────────
    if (rivalSystem.isActive()) {
      rivalSystem.update(dt);
      const phase = jobManager.activePhase;
      const playerProgress = phase === 1 ? 0.1
        : phase === 2 ? 0.35
        : phase === 3 ? 0.65
        : 0;
      hud.updateRaceStrip(playerProgress, rivalSystem.getRaceData());
    }

    // ── Travel timer ──────────────────────────────────────────────────────────
    if (jobManager.activeJob) {
      const result = jobManager.tickTravel(dt);
      hud.updateTravelTimer(jobManager.travelTimer);
      if (result?.failed) {
        spillMeter.level = 0;
        breakActive = null; savedWaypoint = null;
        coffeeBreakAt = -1; toiletBreakAt = -1; renderBreakAt = -1;
        waypointSystem.setTarget(null);
        hud.updateTravelTimer(null);
        hud.showTimerFail(150_000);
        hud.setActiveJob(null, 1);
        hud.updateMoney(jobManager.money);
        hud.updateCrewStatus([], [], false);
        rivalSystem.stop();
        hud.showRaceStrip(false);
        characters.showAllCrew();
        setTimeout(() => {
          const jobs = jobManager.getAvailableJobs();
          jobBoard.show(jobs);
        }, 3500);
      }
    } else {
      hud.updateTravelTimer(null);
    }

    // ── HUD distance update (phase-aware) ─────────────────────────────────────
    if (jobManager.activeJob !== null) {
      if (jobManager.activePhase === 1) {
        hud.updateJobDistance(jobManager.distanceToWorkshop(vanX, vanZ));
      } else if (jobManager.activePhase === 2) {
        const nextCrew = jobManager.nextCrewNeeded();
        if (nextCrew) {
          const crewPos = characters.getCrewPosition(nextCrew);
          hud.updateJobDistance(
            jobManager.distanceToPoint(vanX, vanZ, crewPos.x, crewPos.z)
          );
        }
      } else {
        hud.updateJobDistance(jobManager.distanceTo(vanX, vanZ));
      }
    }

    // ── Random break interrupts (fire any time during active job) ────────────
    if (jobManager.activeJob && !breakActive && !jobCompleting) {
      jobElapsed += dt;

      // Coffee urge fires
      if (coffeeBreakAt > 0 && jobElapsed >= coffeeBreakAt) {
        coffeeBreakAt = -1;
        breakActive = 'coffee';
        savedWaypoint = waypointSystem.currentTarget;
        waypointSystem.setTarget(COFFEE_POS);
        hud.showToast('☕ Gagging for a coffee — hit the cafe NOW!', 0xD4622A);
      }
      // Toilet urge fires
      else if (toiletBreakAt > 0 && jobElapsed >= toiletBreakAt) {
        toiletBreakAt = -1;
        breakActive = 'toilet';
        bladderMeter.level = 0.88;    // force urgent
        bladderMeter.isUrgent = true;
        savedWaypoint = waypointSystem.currentTarget;
        waypointSystem.setTarget(TOILET_POS);
        hud.showToast('🚽 Bursting! Find the toilet before you ruin the plastering!', 0xFF5722);
      }
      else if (renderBreakAt > 0 && jobElapsed >= renderBreakAt) {
        renderBreakAt = -1;
        breakActive = 'render';
        savedWaypoint = waypointSystem.currentTarget;
        waypointSystem.setTarget(RENDER_SUPPLY_POS);
        hud.showToast('🏗️ Darren called — swing by Render Supply Co!', 0x8AAA40);
      }
    }

    // ── Break arrival ─────────────────────────────────────────────────────────
    if (jobManager.activeJob && breakActive && !jobCompleting) {
      const breakPos = breakActive === 'coffee' ? COFFEE_POS
        : breakActive === 'toilet' ? TOILET_POS
        : RENDER_SUPPLY_POS;
      const dx = vanX - breakPos.x;
      const dz = vanZ - breakPos.z;
      if (Math.sqrt(dx * dx + dz * dz) < 14) {
        jobCompleting = true;
        const kind = breakActive;
        breakActive = null;
        const restore = savedWaypoint;
        savedWaypoint = null;

        if (kind === 'coffee') {
          bladderMeter.drinkCoffee();
          dialoguePause.show(
            '☕ Coffee Break!',
            `You grab a flat white. The barista nods — they know the order.\n\nBladder's loading... don't take too long.\n\nBack on the road.`,
            () => {
              waypointSystem.setTarget(restore);
              jobCompleting = false;
            },
            randomFrom(GAME_TIPS)
          );
        } else if (kind === 'toilet') {
          bladderMeter.level = 0;
          bladderMeter.isUrgent = false;
          bladderMeter.caffeinated = false;
          dialoguePause.show(
            '🚽 Phew — Crisis Averted!',
            `Barely made it. Not a word to the crew.\n\nBack on the road.`,
            () => {
              waypointSystem.setTarget(restore);
              jobCompleting = false;
            },
            randomFrom(GAME_TIPS)
          );
        } else if (kind === 'render') {
          // Darren tops up render supplies — calms spill meter
          spillMeter.calm(0.20);  // reduce spill by 20%
          const DARREN_LINES = [
            'Darren sorted you out — extra render loaded. Go get \'em!',
            'Darren says you\'re his best customer. Supplies topped up!',
            'Bags of render in the back. Darren always comes through.',
            'Darren threw in some extra primer too. Ledge.',
          ];
          const line = DARREN_LINES[Math.floor(Math.random() * DARREN_LINES.length)];
          dialoguePause.show(
            '🏗️ Render Supply Co',
            `Darren grins and loads up the van.\n\n"${line}"\n\n📦 Supplies topped up! Spill risk reduced.`,
            () => {
              if (restore) waypointSystem.setTarget(restore);
              jobCompleting = false;
              hud.showToast('📦 Render topped up — cheers Darren!', 0x8AAA40);
            },
            'Stack it or crack it.',
          );
        }
      }
    }

    // ── Phase 1: workshop arrival → Marbellino Mixer → supplies loaded ──────
    if (jobManager.activeJob && jobManager.activePhase === 1 && !breakActive && !jobCompleting) {
      if (jobManager.checkPhase1Arrival(vanX, vanZ)) {
        jobCompleting = true;
        spillMeter.level = 0;
        connie.playLaugh();

        // Brief arrival dialogue, then launch the mixer
        dialoguePause.show(
          '🎨 Mix The Plaster!',
          `Jose and Connie are at the depot. The colour formula is up on the board.\n\nMix it right and load the van — then we go get the crew.`,
          () => {
            // Launch 3D Workshop Shootout as the material-mixing game
            const depotShootout = new WorkshopShootout();
            depotShootout.show({
              jobTitle:   jobManager.activeJob?.title ?? 'Mix Plaster',
              crewIds:    getActiveCrew(),
              playerName: playerChar.name,
            }, (mixResult) => {
              const mixMsg = mixResult.won
                ? `Perfect mix — ${mixResult.colour ?? 'colour matched'}!\nBuckets in the van.`
                : `Close enough! Buckets in the van.`;
              connie.playLaugh();
              const crewNames = jobManager.crewToPickup.join(' + ');
              dialoguePause.show(
                '📦 Materials Loaded!',
                `${mixMsg}\n\nNow go pick up the crew:\n👷 ${crewNames}\n\nYour waypoint will guide you.`,
                () => {
                  jobManager.advanceToPhase2();
                  const firstCrew = jobManager.nextCrewNeeded();
                  if (firstCrew) {
                    const crewPos = characters.getCrewPosition(firstCrew);
                    waypointSystem.setTarget(crewPos);
                  }
                  hud.showPhase1Complete();
                  hud.setActiveJob(jobManager.activeJob, 2);
                  hud.updateCrewStatus(jobManager.crewToPickup, jobManager.crewPickedUp, true);
                  jobCompleting = false;
                },
                randomFrom(BRAND_SLOGANS)
              );
            });
          },
          randomFrom(BRAND_SLOGANS)
        );
      }
    }

    // ── Phase 2: crew pickup ──────────────────────────────────────────────────
    if (jobManager.activeJob && jobManager.activePhase === 2 && !breakActive && !jobCompleting) {
      for (const name of jobManager.crewToPickup) {
        if (jobManager.crewPickedUp.includes(name)) continue;

        const crewPos = characters.getCrewPosition(name);
        const dist = jobManager.distanceToPoint(vanX, vanZ, crewPos.x, crewPos.z);

        if (dist < 10) {
          jobCompleting = true;
          characters.hideCrew(name);
          const allCollected = jobManager.pickupCrew(name);

          hud.updateCrewStatus(
            jobManager.crewToPickup,
            jobManager.crewPickedUp,
            true
          );

          const quip = CREW_PICKUP_QUIPS[name] ?? `${name} hops in.`;

          if (allCollected) {
            dialoguePause.show(
              `🚐 ${name} aboard — Full crew!`,
              `${quip}\n\nFull crew loaded. Everyone's in (sort of).\n\nHead to the job site now. Your waypoint is set.`,
              () => {
                jobManager.advanceToPhase3();
                waypointSystem.setTarget(jobManager.activeJob!.position);
                hud.showCrewPickup(name, null);
                hud.setActiveJob(jobManager.activeJob, 3);
                jobCompleting = false;
              },
              randomFrom(BRAND_SLOGANS)
            );
          } else {
            const nextCrew = jobManager.nextCrewNeeded();
            const stillNeeded = jobManager.crewToPickup
              .filter(n => !jobManager.crewPickedUp.includes(n))
              .join(', ');
            dialoguePause.show(
              `🧑‍🔧 ${name} aboard!`,
              `${quip}\n\nStill need to collect:\n👷 ${stillNeeded}`,
              () => {
                if (nextCrew) {
                  const nextPos = characters.getCrewPosition(nextCrew);
                  waypointSystem.setTarget(nextPos);
                  hud.showCrewPickup(name, nextCrew);
                }
                hud.updateCrewStatus(jobManager.crewToPickup, jobManager.crewPickedUp, true);
                jobCompleting = false;
              },
              randomFrom(GAME_TIPS)
            );
          }
          break;
        }
      }
    }

    // ── Phase 3: job site arrival → briefing → mini-game ─────────────────────
    if (
      jobManager.activeJob &&
      jobManager.activePhase === 3 &&
      !breakActive &&
      !jobCompleting &&
      !miniGameManager.isActive()
    ) {
      const arrived = jobManager.checkArrival(vanX, vanZ);
      if (arrived !== null) {
        jobCompleting = true;
        waypointSystem.setTarget(null);

        dialoguePause.show(
          `🏗️ ${arrived.title}`,
          `${arrived.client} is waiting.\n\n${arrived.description}\n\nTime to get to work. Show them what TEM does.`,
          () => {
            hud.setActiveJob(null, 3);
            hud.updateCrewStatus([], [], false);
            radio.setVisible(false);
            _contestedStartTime = Date.now();
            _jobSpillTotal = 0; // reset spill tracker for this job

            // ── Shared job-complete handler ────────────────────────────────
            const finishJob = (finalQuality: number, isContestWin = false) => {
              rivalSystem.stop();
              hud.showRaceStrip(false);
              // ── Photo Reveal gate — tap tiles to reveal finished work ────
              photoReveal.show(arrived.title, () => {
                radio.setVisible(true);
                if (isContestWin) {
                  const netPayout = Math.max(0, arrived.pay - _jobSpillTotal);
                  submitScore({
                    player_name:       playerChar.name || getPlayerName() || 'TEM Crew',
                    job_title:         _contestedJobTitle.replace(/^⚔️\s*/, '').trim(),
                    crew_ids:          getActiveCrew(),
                    completion_time_s: Math.round((Date.now() - _contestedStartTime) / 1000),
                    payout:            netPayout,
                  });
                }
                const earned = jobManager.completeJob(arrived, finalQuality);
                if (earned < 0) {
                  hud.showPenalty(arrived.title, Math.abs(earned));
                } else {
                  hud.showJobComplete(arrived.title, earned);
                }
                hud.updateMoney(jobManager.money);
                characters.showAllCrew();
                breakActive = null; savedWaypoint = null;
                coffeeBreakAt = -1; toiletBreakAt = -1; renderBreakAt = -1;
                jobCompleting = false;

                // ── Unlock a TEM project photo for the gallery ────────────
                const _uncollected = PHOTO_ACHIEVEMENTS.filter(p => !getCollected().includes(p.id));
                const _photo = _uncollected.length > 0
                  ? _uncollected[Math.floor(Math.random() * _uncollected.length)]
                  : null;
                const _isNew = _photo ? markCollected(_photo.id) : false;
                const _count = getCollected().length;
                const _total = PHOTO_ACHIEVEMENTS.length;
                const _allDone = isAllCollected();

                if (_isNew && _photo) {
                  // Show photo unlock card
                  const card = document.createElement('div');
                  card.style.cssText = `
                    position:fixed;inset:0;z-index:15000;background:rgba(0,0,0,0.88);
                    display:flex;flex-direction:column;align-items:center;justify-content:center;
                    font-family:system-ui,sans-serif;padding:24px;
                  `;
                  card.innerHTML = `
                    <div style="color:#C8A86A;font-size:13px;font-weight:800;letter-spacing:2px;margin-bottom:12px;">
                      📸 PHOTO UNLOCKED
                    </div>
                    <img src="${_photo.file}" style="
                      width:min(320px,85vw);aspect-ratio:4/3;object-fit:cover;
                      border-radius:12px;border:3px solid #C8A86A;
                      box-shadow:0 8px 32px rgba(200,168,106,0.4);margin-bottom:14px;
                    " onerror="this.style.display='none'">
                    <div style="color:#fff;font-size:18px;font-weight:900;margin-bottom:6px;">${_photo.name}</div>
                    <div style="color:#aaa;font-size:13px;margin-bottom:${_allDone ? 16 : 22}px;">
                      ${_count} / ${_total} collected
                    </div>
                    ${_allDone ? `<div style="color:#2ECC40;font-size:14px;font-weight:800;margin-bottom:16px;">
                      🎁 Full collection — 5% off in the TEM app!
                    </div>` : ''}
                    <button style="
                      background:#C1666B;color:#fff;border:none;border-radius:24px;
                      padding:14px 40px;font-size:16px;font-weight:900;cursor:pointer;
                      touch-action:manipulation;
                    " id="photo-unlock-ok">✓ AWESOME</button>
                  `;
                  document.body.appendChild(card);
                  card.querySelector('#photo-unlock-ok')!.addEventListener('click', () => {
                    card.remove();
                    if (_allDone && !RewardScreen.isUnlocked()) {
                      setTimeout(() => rewardScreen.trigger(), 500);
                    } else {
                      setTimeout(() => {
                        const available = jobManager.getAvailableJobs();
                        if (available.length > 0) jobBoard.show(available);
                      }, 800);
                    }
                  });
                } else if (_allDone && !RewardScreen.isUnlocked()) {
                  setTimeout(() => rewardScreen.trigger(), 2000);
                } else {
                  setTimeout(() => {
                    const available = jobManager.getAvailableJobs();
                    if (available.length > 0) jobBoard.show(available);
                  }, 3500);
                }
              });
            };

            // ── Stage 1: Jarrad's Scaffold Climb ─────────────────────────
            miniGameManager.startScaffold((scaffoldResult: ScaffoldResult) => {
              if (scaffoldResult.bonusSats > 0) {
                _jobSpillTotal -= scaffoldResult.bonusSats;
                _jobSpillTotal = Math.max(-arrived.pay * 0.5, _jobSpillTotal);
                hud.showToast(`🏗️ +${Math.round(scaffoldResult.bonusSats / 1000)}K scaffold bonus!`, 0xFFD700);
              }

              // ── Stage 2: Tower Defence (contested jobs only) ─────────────
              if (arrived.isContested) {
                const tdAnnounce = document.createElement('div');
                tdAnnounce.style.cssText = `
                  position:fixed;inset:0;z-index:13999;
                  background:rgba(0,0,0,0.94);
                  display:flex;flex-direction:column;align-items:center;justify-content:center;
                  font-family:system-ui,sans-serif;animation:none;
                `;
                tdAnnounce.innerHTML = `
                  <div style="font-size:46px;margin-bottom:12px;">⚔️</div>
                  <div style="color:#FFD700;font-size:24px;font-weight:900;letter-spacing:2px;">CONTRACT WARS</div>
                  <div style="color:#fff;font-size:15px;margin-top:8px;opacity:0.8;">PHASE 2 — TOWER DEFENCE</div>
                  <div style="color:#aaa;font-size:12px;margin-top:6px;">vs ${_currentRival.name}</div>
                  <div style="color:#FFD700;font-size:13px;margin-top:18px;opacity:0.6;">loading...</div>
                `;
                document.body.appendChild(tdAnnounce);

                const tdCfg: TDConfig = {
                  jobTitle: arrived.title,
                  payout:   arrived.pay,
                  crewIds:  getActiveCrew(),
                  rival:    { name: _currentRival.name, color: _currentRival.color, difficulty: _currentRival.difficulty },
                };

                setTimeout(() => {
                  tdAnnounce.remove();
                  towerDefence.show(tdCfg, (tdResult) => {
                    if (tdResult.won) {
                      const pn = hud.getPlayerChar()?.name ?? 'Driver';
                      hud.showToast(`💰 Nice work ${pn}! Paid!`, 0x44DD88);
                      finishJob(1, true);
                    } else {
                      // TD lost — contract stolen
                      rivalSystem.stop();
                      hud.showRaceStrip(false);
                      radio.setVisible(true);
                      hud.showToast('⚔️ CONTRACT STOLEN — Better crew next time 😤', 0xFF3333);
                      characters.showAllCrew();
                      breakActive = null; savedWaypoint = null;
                      coffeeBreakAt = -1; toiletBreakAt = -1; renderBreakAt = -1;
                      jobCompleting = false;
                      jobManager.completeJob(arrived, 0);
                      hud.updateMoney(jobManager.money);
                      setTimeout(() => {
                        const available = jobManager.getAvailableJobs();
                        if (available.length > 0) jobBoard.show(available);
                      }, 3500);
                    }
                  });
                }, 1800);
              } else {
                // Regular job — straight to photo reveal
                const pn = hud.getPlayerChar()?.name ?? 'Driver';
                hud.showToast(`💰 Nice work ${pn}! Paid!`, 0x44DD88);
                finishJob(1, false);
              }
            }); // end startScaffold
          },
          randomFrom(BRAND_SLOGANS)
        );
      }
    }

    engine.camera.follow(van.mesh.position, van.velocity, van.heading);
    hud.update(physics.speed, spillMeter.level);
  });

  // Job board is opened by the player via the menu — not auto-shown

  engine.start();
}

main().catch((err) => {
  console.error('Game init failed:', err);
  document.body.style.background = '#000';
  const msg = document.createElement('div');
  msg.style.cssText = `
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    color:#fff;font-family:sans-serif;font-size:18px;text-align:center;
    background:rgba(200,40,40,0.9);padding:24px 32px;border-radius:16px;
    max-width:90vw;z-index:9999;
  `;
  msg.innerHTML = `<b>🚨 Game failed to start</b><br><br>${err?.message || String(err)}`;
  document.body.appendChild(msg);
});
