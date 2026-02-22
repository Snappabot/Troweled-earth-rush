import * as THREE from 'three';
import { CrewCharacter, CREW_CONFIGS } from './CrewCharacter';
const CREW_CITY_POSITIONS = {
    Jose: { x: -80, z: -40 },
    Jarrad: { x: 40, z: -80 },
    Matt: { x: 80, z: 40 },
    Phil: { x: -40, z: 80 },
    Tsuyoshi: { x: 120, z: -40 },
    Fabio: { x: -120, z: 40 },
    Joe: { x: 0, z: -120 },
};
const CREW_DIALOGUE = {
    Matt: [
        "That Marbellino isn't going to apply itself, mate.",
        "Did you check the cure time? Always check the cure time.",
        "7-year warranty means 7 years. Don't mess it up.",
        "The key to Tadelakt is the polishing stone. Every. Single. Time.",
        "I started this company with a hawk and a trowel. Don't forget that.",
        "No rain for 48 hours after application. Non-negotiable.",
        "Hemp Earthen Render — 3 to 5mm. Not 2. Not 6. 3 to 5.",
        "When in doubt, apply another coat of primer.",
    ],
    Jose: [
        "Bro, I've plastered 400 walls. They all looked the same from a van.",
        "You ever trowel Tadelakt at 2am? I have. Twice.",
        "Primer first. Always primer first. Ask me how I know.",
        "The walls don't lie, hermano.",
        "I could do a full Antique Stucco system in my sleep.",
        "Five more walls and it's Friday, yeah?",
        "The trick with Hemp Render is patience. Which I don't have.",
        "Seven year warranty. My back has a two-week warranty.",
    ],
    Jarrad: [
        "The pH of Antique Stucco is between 11 and 13. Highly alkaline.",
        "I've mapped every building in this city by square meterage.",
        "My spread rate calculations are never wrong. The surface is wrong.",
        "VOC under 50 grams per litre. Green Star compliant. Obviously.",
        "Have you seen my sister Mikayla? She's supposed to be helping. She's doing jump rope.",
        "The sealer should dry in 1 to 2 hours. I timed it. It was 1.4.",
        "Mikayla borrowed my trowel again. I've got a spare. I'm not lending that one.",
        "Technically the cure time is 5 to 7 days. I'm tracking day 6.",
    ],
    Phil: [
        "I've been in this game longer than some of these buildings.",
        "Back in my day we didn't have sealers. We just hoped.",
        "Forty years in plaster. My knees disagree with the timeline.",
        "That's a nice van. My first van had a hole in the floor.",
        "The youngsters think Marbellino is new. I did it before it had a name.",
        "Seven year warranty. I've outlasted three of those already.",
        "If the surface isn't right, no product will fix it. That's wisdom.",
        "I'm too old for emergencies. Call Darren.",
    ],
    Tsuyoshi: [
        "The trowel angle was wrong. I could tell from 10 metres.",
        "I don't do 'good enough'. I do perfect or I do it again.",
        "That surface texture is unacceptable. I won't apologize for standards.",
        "Rokka — 2 to 5mm. I applied it at 2.3. Precisely.",
        "Every wall I finish is a personal statement.",
        "The client said it looked great. I could see three imperfections.",
        "I once recoated an entire hotel lobby because the light hit it wrong.",
        "Precision is not perfectionism. Precision is respect.",
    ],
    Fabio: [
        "Plaster is art. I don't just apply it — I feel it.",
        "The colour must breathe with the wall. The wall must breathe with the room.",
        "I chose this blue shirt because it contrasts with the Earth tones. Intentional.",
        "Tadelino — it has a poetry to it. The polishing stone sings.",
        "I once spent 6 hours on one square metre. No regrets.",
        "A bad plastering job is like a bad painting. It haunts you.",
        "The client didn't appreciate the subtlety of the finish. Their loss.",
        "I am not applying plaster. I am composing a surface.",
    ],
    Joe: [
        "Have you done your site induction? I need to see the paperwork.",
        "No PPE, no entry. That's not a suggestion.",
        "I'm the reason this crew hasn't had an incident in 847 days.",
        "The pH on Antique Stucco is 11 to 13. Wear gloves. I mean it.",
        "Safe Work Australia says... actually I've got the pamphlet here.",
        "That ladder angle is wrong. I'm not moving until you fix it.",
        "Hi-vis saves lives. I have seven of these shirts.",
        "Incident report forms are in the van. I laminated them.",
    ],
};
const TRIGGER_RADIUS = 15;
const DIALOGUE_COOLDOWN = 12_000; // ms between lines per character
export class Characters {
    scene;
    crewMap = new Map();
    lastDialogue = new Map();
    dialogueIndex = new Map();
    constructor(scene) {
        this.scene = scene;
    }
    spawnCrewAtCityPositions() {
        for (const [name, pos] of Object.entries(CREW_CITY_POSITIONS)) {
            const config = CREW_CONFIGS[name];
            if (!config)
                continue;
            const character = new CrewCharacter(config);
            character.group.scale.set(2, 2, 2);
            const wrapper = new THREE.Group();
            wrapper.add(character.group);
            // Yellow ring beneath
            const ring = new THREE.Mesh(new THREE.RingGeometry(1.2, 1.6, 32), new THREE.MeshBasicMaterial({ color: 0xFFCC00, side: THREE.DoubleSide }));
            ring.rotation.x = -Math.PI / 2;
            ring.position.y = 0.05;
            wrapper.add(ring);
            // Name billboard
            const cv = document.createElement('canvas');
            cv.width = 256;
            cv.height = 64;
            const ctx = cv.getContext('2d');
            ctx.fillStyle = 'rgba(0,0,0,0.75)';
            if (ctx.roundRect) {
                ctx.roundRect(2, 2, 252, 60, 8);
            }
            else {
                ctx.rect(2, 2, 252, 60);
            }
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 30px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(name.toUpperCase(), 128, 32);
            const nameBoard = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.55), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false }));
            nameBoard.position.set(0, 8.5, 0);
            nameBoard.renderOrder = 1;
            wrapper.add(nameBoard);
            wrapper.position.set(pos.x, 0, pos.z);
            this.scene.add(wrapper);
            this.crewMap.set(name, { character, wrapper, pos });
            // Init dialogue state
            this.lastDialogue.set(name, 0);
            this.dialogueIndex.set(name, Math.floor(Math.random() * 8));
        }
    }
    updateAll(dt) {
        for (const { character } of this.crewMap.values())
            character.update(dt);
    }
    /**
     * Check if the van is near any crew member who's ready to speak.
     * Returns the first ready character's name, config, position, and line — or null.
     */
    checkProximityDialogue(vanX, vanZ) {
        const now = Date.now();
        for (const [name, { wrapper, pos }] of this.crewMap.entries()) {
            if (!wrapper.visible)
                continue;
            const dx = vanX - pos.x;
            const dz = vanZ - pos.z;
            if (Math.sqrt(dx * dx + dz * dz) > TRIGGER_RADIUS)
                continue;
            const last = this.lastDialogue.get(name) ?? 0;
            if (now - last < DIALOGUE_COOLDOWN)
                continue;
            // Rotate through lines
            const lines = CREW_DIALOGUE[name];
            if (!lines)
                continue;
            const idx = this.dialogueIndex.get(name) ?? 0;
            const line = lines[idx % lines.length];
            this.dialogueIndex.set(name, idx + 1);
            this.lastDialogue.set(name, now);
            return { name, line, pos };
        }
        return null;
    }
    hideCrew(name) {
        const e = this.crewMap.get(name);
        if (e)
            e.wrapper.visible = false;
    }
    showAllCrew() {
        for (const { wrapper } of this.crewMap.values())
            wrapper.visible = true;
    }
    showCrew(name) {
        const e = this.crewMap.get(name);
        if (e)
            e.wrapper.visible = true;
    }
    getCrewPosition(name) {
        return this.crewMap.get(name)?.pos ?? { x: 0, z: 0 };
    }
    dispose() {
        for (const { wrapper } of this.crewMap.values())
            this.scene.remove(wrapper);
        this.crewMap.clear();
    }
}
