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
        "Troweled Earth is the best product on the market. Full stop. Don't argue.",
        "Jose has a whole music room and a cigar collection but can't reply to a text message. That's the guy.",
        "I've been up since 4am and done 80 square metres. How's your morning?",
        "Jarrad's got opinions on how everyone else lives their life. Zero opinions on his own. Interesting.",
        "Antique Stucco, Hemp Render, Tadelakt — I'll do all three before lunch.",
        "Jose called himself Wall Jesus in front of a client. An actual client. I was standing right there.",
        "Jarrad once sent me a 400-word message about something I said. I read the first line. Seemed about right.",
        "Right. Tools out. Let's get this done.",
    ],
    Jose: [
        "I didn't apply plaster. I gave the wall a soul. Big difference.",
        "Matt is a great man. Big heart. Absolutely no volume control. You can hear him from the next suburb.",
        "I was in my music room last night finishing a track. Then I invented a new finish. Big night.",
        "My cigar costs more than your primer. It is worth it.",
        "Jarrad sends meeting agendas. For conversations. Between two people. In a van.",
        "Wall Jesus doesn't do touch-ups. Wall Jesus does originals.",
        "Matt apologises for nothing. I respect it. Also it is sometimes a problem.",
        "Other plasterers apply product. I apply vision. Light a cigar and watch.",
    ],
    Jarrad: [
        "Been waiting fifteen minutes. Did you read the TDS? Because I did. Twice.",
        "Hang on — just finishing something.",
        "Jose has a whole spiritual identity built around being mysterious. He's from Footscray. I looked it up.",
        "I'm not micro-managing. I'm preventing the disaster you are about to cause.",
        "Matt once introduced himself to a client by saying 'I don't do small talk'. To their face. At the door.",
        "Have you seen my sister? She's supposed to be here. She's doing jump rope.",
        "I would do it myself but then nothing else would get done. Look, I've already typed up a plan.",
        "Mikayla borrowed my trowel again. I have a spare. I'm not lending that one either.",
        "This is interesting. Have you heard of this Epstein list thing?",
        "Who designed this waypoint system? Actually — don't answer that. I'll figure it out.",
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
        "My trowel... she is like samurai sword. Must be respected.",
        "In Japan, we say... actually this is different in Australia. But same feeling.",
        "I study engineering. Also I study this wall. Both are... very complex.",
        "The angle of application is most important. Like blade angle. Very critical.",
        "I think about the wall much. The wall also thinks, I believe.",
        "This surface... it is speaking to me. I will listen before I apply.",
        "My sensei say: good craftsman blame tool. But I never blame my trowel. She is perfect.",
        "One day I will design the building. And also I will plaster it. Both very satisfying.",
    ],
    Fabio: [
        "Ehhhh — in Italy, we do not rush the plaster. She knows when she is ready.",
        "I am Fabio. You have heard of me, yes? Ehhhh — of course you have.",
        "Last night I find a pizza place — thin base, wood fire, proper San Marzano. Ehhhh. I almost cry.",
        "I have plastered villas in Tuscany. This job is also... acceptable. Ehhhh.",
        "The colour must be chosen with the soul, not the brain. Ehhhh — the brain is for pizza toppings.",
        "I put my heart into every wall. Same as I put my heart into a good margherita. Ehhhh.",
        "Madonna mia, this surface has potential. Not as much potential as a good pizza, but still.",
        "Other men apply plaster. Fabio makes love to the wall. Artistically speaking. Ehhhh.",
        "You want to know the secret of perfect render? Patience. Same as perfect pizza dough. Ehhhh — same thing.",
        "I carry my trowel like a man carries his last slice. With respect. With both hands.",
    ],
    Joe: [
        "Don't judge me by the helmet. I contain multitudes.",
        "Good honest work. That's all any of us can do.",
        "I don't talk politics on site. But I do have a bumper sticker.",
        "Hard work, good product, fair pay. That's the whole philosophy.",
        "Free Palestine. That's all I'll say. Back to work.",
        "I've been boycotting certain brands for three years. You'd be surprised.",
        "The helmet stays on. Most of the opinions stay in.",
        "Solid crew. Good product. Just don't ask me about the news.",
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
