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
import { TrafficSystem } from './entities/TrafficSystem';
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

  // ── Job accepted → show briefing, then start Phase 1 ────────────────────────
  const jobBoard = new JobBoard((job: Job) => {
    jobBoard.hide();
    dialoguePause.show(
      `📋 ${job.title}`,
      `Client: ${job.client}\n\n${job.description}\n\n💰 Pay: $${job.pay.toLocaleString()}\n\n🏭 Head to the TEM workshop to collect supplies.`,
      () => {
        jobManager.acceptJob(job);
        waypointSystem.setTarget(JobManager.WORKSHOP_POS);
        hud.setActiveJob(job, 1);
        hud.updateCrewStatus([], [], false);
        // Schedule random breaks — can fire at any point during the job
        jobElapsed = 0;
        const firstAt  = 20 + Math.random() * 60;   // 20–80s in
        const secondAt = firstAt + 20 + Math.random() * 50; // 20–70s later
        if (Math.random() > 0.5) {
          coffeeBreakAt = firstAt; toiletBreakAt = secondAt;
        } else {
          toiletBreakAt = firstAt; coffeeBreakAt = secondAt;
        }
        breakActive = null;
        savedWaypoint = null;
      },
      randomFrom(JOB_OPENERS)
    );
  });

  // ── Spill penalty callback ───────────────────────────────────────────────────
  spillMeter.onSpill = (penalty: number) => {
    jobManager.money = Math.max(0, jobManager.money - penalty);
    hud.updateMoney(jobManager.money);
    hud.showSpillPenalty(penalty);
  };

  // ── JOBS button ──────────────────────────────────────────────────────────────
  const jobsBtn = document.createElement('button');
  jobsBtn.textContent = '📋 JOBS';
  jobsBtn.style.cssText = `
    position: fixed;
    top: 16px;
    right: 16px;
    background: rgba(193, 102, 107, 0.9);
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    font-family: system-ui, sans-serif;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    letter-spacing: 0.5px;
    min-height: 48px;
    transition: background 0.15s, transform 0.1s;
    touch-action: manipulation;
  `;
  jobsBtn.addEventListener('pointerenter', () => {
    jobsBtn.style.background = 'rgba(212, 120, 125, 0.95)';
    jobsBtn.style.transform = 'translateY(-2px)';
  });
  jobsBtn.addEventListener('pointerleave', () => {
    jobsBtn.style.background = 'rgba(193, 102, 107, 0.9)';
    jobsBtn.style.transform = '';
  });
  jobsBtn.addEventListener('click', () => {
    if (jobBoard.isVisible()) {
      jobBoard.hide();
    } else {
      jobBoard.show(jobManager.getAvailableJobs());
    }
  });
  document.body.appendChild(jobsBtn);

  // ── Traffic + Pedestrian systems ────────────────────────────────────────────
  const traffic = new TrafficSystem(engine.scene);
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

  // ── 📸 Photos button + Achievement Gallery + Rewards ─────────────────────────
  const achievementGallery = new AchievementGallery();
  const rewardScreen = new RewardScreen();

  const photosBtn = document.createElement('button');
  photosBtn.textContent = '📸';
  photosBtn.title = 'Photo Collection';
  photosBtn.style.cssText = `
    position: fixed; top: 16px; left: 16px;
    z-index: 1000; background: rgba(70,70,70,0.9);
    color: #fff; border: none; border-radius: 50%;
    width: 52px; height: 52px; font-size: 22px;
    cursor: pointer; touch-action: manipulation;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    transition: background 0.15s, transform 0.1s;
  `;
  photosBtn.addEventListener('pointerenter', () => {
    photosBtn.style.background = 'rgba(100,100,100,0.95)';
    photosBtn.style.transform = 'scale(1.1)';
  });
  photosBtn.addEventListener('pointerleave', () => {
    photosBtn.style.background = 'rgba(70,70,70,0.9)';
    photosBtn.style.transform = '';
  });
  photosBtn.addEventListener('click', () => achievementGallery.show());
  document.body.appendChild(photosBtn);

  // Guard to prevent job completion firing more than once per arrival
  let jobCompleting = false;

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

  // ── Debug panel ──────────────────────────────────────────────────────────────
  const dbg = document.createElement('div');
  dbg.style.cssText = `
    position:fixed; top:8px; left:8px; z-index:5000;
    background:rgba(0,0,0,0.6); color:#fff; font-size:11px;
    font-family:monospace; padding:6px 10px; border-radius:6px;
    pointer-events:none; line-height:1.5;
  `;
  document.body.appendChild(dbg);

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

    traffic.update(dt, vanX, vanZ);
    pedestrians.update(dt, vanX, vanZ);

    // Traffic collision — eject van immediately
    const trafficResolved = traffic.resolveVan(vanX, vanZ);
    if (trafficResolved.hit) {
      van.mesh.position.x = trafficResolved.x;
      van.mesh.position.z = trafficResolved.z;
      physics.applyImpulse(0, 0);
      if (jobManager.activePhase >= 2) spillMeter.triggerCrash();
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
        setTimeout(() => jobBoard.show(jobManager.getAvailableJobs()), 3500);
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
            miniGameManager.startRandom((result) => {
              const earned = jobManager.completeJob(arrived, result.qualityPct);
              if (earned < 0) {
                hud.showPenalty(arrived.title, Math.abs(earned));
              } else {
                hud.showJobComplete(arrived.title, earned);
              }
              hud.updateMoney(jobManager.money);
              characters.showAllCrew();
              breakActive = null;
              savedWaypoint = null;
              coffeeBreakAt = -1;
              toiletBreakAt = -1;
              jobCompleting = false;
              // 🏆 Reward trigger — fires once when all photos collected
              if (isAllCollected() && !RewardScreen.isUnlocked()) {
                setTimeout(() => rewardScreen.trigger(), 2000);
              } else {
                setTimeout(() => {
                  const available = jobManager.getAvailableJobs();
                  if (available.length > 0) jobBoard.show(available);
                }, 3500);
              }
            });
          },
          randomFrom(BRAND_SLOGANS)
        );
      }
    }

    engine.camera.follow(van.mesh.position, van.velocity, van.heading);
    hud.update(physics.speed, spillMeter.level);

    // Debug panel
    const job = jobManager.activeJob;
    const phase = job ? `P${jobManager.activePhase}` : 'idle';
    const dist = job
      ? (jobManager.activePhase === 1
          ? Math.round(jobManager.distanceToWorkshop(vanX, vanZ))
          : jobManager.activePhase === 2
            ? Math.round(jobManager.distanceToPoint(vanX, vanZ,
                ...((): [number, number] => {
                  const nc = jobManager.nextCrewNeeded();
                  if (!nc) return [vanX, vanZ];
                  const p = characters.getCrewPosition(nc);
                  return [p.x, p.z];
                })()))
            : Math.round(jobManager.distanceTo(vanX, vanZ)))
      : 0;
    const crew = job ? `crew:${jobManager.crewPickedUp.length}/${jobManager.crewToPickup.length}` : '';
    dbg.textContent = `${phase} | dist:${dist} | ${crew} | lock:${jobCompleting} | mg:${miniGameManager.isActive()}`;
  });

  // Show job board on first load
  setTimeout(() => {
    jobBoard.show(jobManager.getAvailableJobs());
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
