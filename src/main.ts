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

  // ── Game Menu (☰) — contains radio, money, photo, jobs, mixer ────────────
  const radio = new TEMRadio();
  const gameMenu = new GameMenu(
    () => achievementGallery.show(),
    () => {
      if (jobBoard.isVisible()) jobBoard.hide();
      else {
        const jobs = [...jobManager.getContestedJobs(), ...jobManager.getAvailableJobs()];
        jobBoard.show(jobs);
      }
    },
    () => marbellinoMixer.show((pts) => {
      if (pts > 0) {
        jobManager.money += pts * 1_000;   // reward sats per correct formula
        hud.updateMoney(jobManager.money);
        hud.showToast(`🎨 Formula cracked! +${(pts * 1000).toLocaleString()} sats`, 0x44DD88);
      }
    }),
  );
  gameMenu.mountMoneyPanel(hud.getMoneyPanel());
  gameMenu.mountRadio(radio.getEl());

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
  let jobElapsed = 0;
  let coffeeBreakAt = -1;  // seconds into job when coffee urge fires (-1 = done/unused)
  let toiletBreakAt = -1;  // seconds into job when toilet urge fires
  let breakActive: BreakKind | null = null;       // which break is currently active
  let savedWaypoint: { x: number; z: number } | null = null; // waypoint before break

  // ── Update loop ─────────────────────────────────────────────────────────────
  engine.onUpdate((dt: number) => {
    const vanX = van.mesh.position.x;
    const vanZ = van.mesh.position.z;

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
          const jobs = [...jobManager.getContestedJobs(), ...jobManager.getAvailableJobs()];
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

    // ── Phase 1: workshop arrival → supplies loaded ───────────────────────────
    if (jobManager.activeJob && jobManager.activePhase === 1 && !breakActive && !jobCompleting) {
      if (jobManager.checkPhase1Arrival(vanX, vanZ)) {
        jobCompleting = true;
        spillMeter.level = 0;
        connie.playLaugh();

        const crewNames = jobManager.crewToPickup.join(' + ');
        dialoguePause.show(
          '📦 Supplies Loaded!',
          `Connie's cackle echoes through the factory as the buckets go in.\n\nNow go pick up the crew:\n👷 ${crewNames}\n\nThey're scattered around the city. Your waypoint will guide you.`,
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
                  const available = [...jobManager.getContestedJobs(), ...jobManager.getAvailableJobs()];
                  if (available.length > 0) jobBoard.show(available);
                }, 3500);
              }
            };

            // ── Stage 1: Scaffold Game (all jobs) ────────────────────────
            miniGameManager.startScaffold((scaffoldResult) => {
              if (arrived.isContested) {
                // ── Stage 2: Tower Defence (contested jobs only) ─────────
                const tdCfg: TDConfig = {
                  jobTitle: arrived.title,
                  payout:   arrived.pay,
                  crewIds:  getActiveCrew(),
                  rival:    { name: _currentRival.name, color: _currentRival.color, difficulty: _currentRival.difficulty },
                };
                towerDefence.show(tdCfg, (tdResult) => {
                  if (tdResult.won) {
                    const combined = Math.min(1, (scaffoldResult.qualityPct > 0 ? scaffoldResult.qualityPct * 0.3 : 0) + tdResult.qualityPct * 0.7);
                    finishJob(combined, true);
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
                      const available = [...jobManager.getContestedJobs(), ...jobManager.getAvailableJobs()];
                      if (available.length > 0) jobBoard.show(available);
                    }, 3500);
                  }
                });
              } else {
                // Regular job — scaffold result determines pay
                finishJob(Math.max(0, scaffoldResult.qualityPct), false);
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
    const jobs = [...jobManager.getContestedJobs(), ...jobManager.getAvailableJobs()];
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
