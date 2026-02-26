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
import { isAllCollected } from './minigames/TrowelingGame';
import { RewardScreen } from './ui/RewardScreen';
import { TEMRadio } from './audio/TEMRadio';
import { IntroSequence } from './ui/IntroSequence';
import { StartMenu } from './ui/StartMenu';
import { GameMenu } from './ui/GameMenu';
import { CrewSelector } from './ui/CrewSelector';
import { crewBreakImmune, crewPayMult, crewTimerBonus, getActiveCrew } from './data/CrewPerks';
import { submitScore, getPlayerName } from './services/LeaderboardService';
import { PlayerNamePrompt } from './ui/PlayerNamePrompt';
import { MarbellinoMixer } from './minigames/MarbellinoMixer';
import { BattleScreen } from './ui/BattleScreen';
import { getRandomRival } from './data/RivalCrews';
import { TowerDefence } from './minigames/TowerDefence';
import type { TDConfig } from './minigames/TowerDefence';
import { ContractWarsPanel } from './ui/ContractWarsPanel';
import { PhotoReveal } from './minigames/PhotoReveal';

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

  // ── Intro cinematic → Start menu ─────────────────────────────────────────────
  const introAudio = await new IntroSequence().play();
  await new StartMenu().show(introAudio);

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
            waypointSystem.setTarget(JobManager.WORKSHOP_POS);
            hud.setActiveJob(job, 1);
            hud.updateCrewStatus([], [], false);
            // Schedule random breaks — skipped entirely if Phil is in crew
            jobElapsed = 0;
            if (!crewBreakImmune()) {
              const firstAt  = 20 + Math.random() * 60 + extraTime;
              const secondAt = firstAt + 20 + Math.random() * 50;
              if (Math.random() > 0.5) {
                coffeeBreakAt = firstAt; toiletBreakAt = secondAt;
              } else {
                toiletBreakAt = firstAt; coffeeBreakAt = secondAt;
              }
            } else {
              coffeeBreakAt = Infinity; toiletBreakAt = Infinity;
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

  // ── Spill penalty callback ───────────────────────────────────────────────────
  spillMeter.onSpill = (penalty: number) => {
    jobManager.money = Math.max(0, jobManager.money - penalty);
    hud.updateMoney(jobManager.money);
    hud.showSpillPenalty(penalty);
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
  const marbellinoMixer = new MarbellinoMixer();

  // ── Game Menu (☰) — contains radio, money, photo, jobs, mixer, contract wars ──
  const radio = new TEMRadio();
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
    undefined, // Contract Wars panel removed from menu (accessible post-match)
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
  const _namePrompt = new PlayerNamePrompt();

  // ── Random break interrupt system ─────────────────────────────────────────────
  // Breaks can fire at any point during a job — random timing each run
  const COFFEE_POS = { x: -60, z: -100 };
  const TOILET_POS = { x: 100, z: 60 };
  type BreakKind = 'coffee' | 'toilet';
  // ── Opening cinematic state ──────────────────────────────────────────────────
  let cinematicActive = true;
  let cinematicTime   = 0;
  const CINEMATIC_DURATION = 5.0; // seconds

  const _eio = (t: number) => t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
  const _lrp = (a: number, b: number, t: number) => a + (b - a) * t;

  let jobElapsed = 0;
  let coffeeBreakAt = -1;  // seconds into job when coffee urge fires (-1 = done/unused)
  let toiletBreakAt = -1;  // seconds into job when toilet urge fires
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
      if (jobActive) spillMeter.triggerCrash();
    }

    waypointSystem.update(dt, vanX, vanZ);

    // ── Travel timer ──────────────────────────────────────────────────────────
    if (jobManager.activeJob) {
      const result = jobManager.tickTravel(dt);
      hud.updateTravelTimer(jobManager.travelTimer);
      if (result?.failed) {
        spillMeter.level = 0;
        breakActive = null; savedWaypoint = null;
        coffeeBreakAt = -1; toiletBreakAt = -1;
        waypointSystem.setTarget(null);
        hud.updateTravelTimer(null);
        hud.showTimerFail(150_000);
        hud.setActiveJob(null, 1);
        hud.updateMoney(jobManager.money);
        hud.updateCrewStatus([], [], false);
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
    }

    // ── Break arrival ─────────────────────────────────────────────────────────
    if (jobManager.activeJob && breakActive && !jobCompleting) {
      const breakPos = breakActive === 'coffee' ? COFFEE_POS : TOILET_POS;
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
        } else {
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
            // Launch Marbellino Mixer as the material-pickup game
            marbellinoMixer.show((_pts) => {
              // Mixer done — advance to crew pickup
              connie.playLaugh();
              const crewNames = jobManager.crewToPickup.join(' + ');
              dialoguePause.show(
                '📦 Materials Loaded!',
                `Perfect mix. Buckets in the van.\n\nNow go pick up the crew:\n👷 ${crewNames}\n\nYour waypoint will guide you.`,
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

            // ── Shared job-complete handler ────────────────────────────────
            const finishJob = (finalQuality: number, isContestWin = false) => {
              // ── Photo Reveal gate — tap tiles to reveal finished work ────
              photoReveal.show(arrived.title, () => {
                radio.setVisible(true);
                if (isContestWin) {
                  const completionSecs = (Date.now() - _contestedStartTime) / 1000;
                  submitScore({
                    player_name:       getPlayerName() ?? 'TEM Crew',
                    job_title:         _contestedJobTitle.replace(/^⚔️\s*/, '').trim(),
                    crew_ids:          getActiveCrew(),
                    completion_time_s: Math.round(completionSecs),
                    payout:            Math.max(0, arrived.pay),
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
                coffeeBreakAt = -1; toiletBreakAt = -1;
                jobCompleting = false;
                if (isAllCollected() && !RewardScreen.isUnlocked()) {
                  setTimeout(() => rewardScreen.trigger(), 2000);
                } else {
                  setTimeout(() => {
                    const available = jobManager.getAvailableJobs();
                    if (available.length > 0) jobBoard.show(available);
                  }, 3500);
                }
              });
            };

            // ── Stage 1: Scaffold Game (all jobs) ────────────────────────
            miniGameManager.startScaffold((scaffoldResult) => {
              if (arrived.isContested) {
                // ── Stage 2: Tower Defence (contested jobs only) ─────────
                // Brief announcement overlay before TD launches
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
                  // Show TD — no silent catch fallthrough; surface errors visibly
                  towerDefence.show(tdCfg, (tdResult) => {
                    if (tdResult.won) {
                      finishJob(1, true);
                    } else {
                      // TD lost — contract stolen
                      radio.setVisible(true);
                      hud.showToast('⚔️ CONTRACT STOLEN — Better crew next time 😤', 0xFF3333);
                      characters.showAllCrew();
                      breakActive = null; savedWaypoint = null;
                      coffeeBreakAt = -1; toiletBreakAt = -1;
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
                // Regular job — scaffold result determines pay
                finishJob(1, false);
              }
            });
          },
          randomFrom(BRAND_SLOGANS)
        );
      }
    }

    engine.camera.follow(van.mesh.position, van.velocity, van.heading);
    hud.update(physics.speed, spillMeter.level);
  });

  // Show job board on first load (mix in contested jobs 20% of the time)
  setTimeout(() => {
    const jobs = jobManager.getAvailableJobs();
    jobBoard.show(jobs);
  }, 1000);

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
