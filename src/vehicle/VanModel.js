import * as THREE from 'three';
import { makeTEMTreeTexture } from '../utils/TreeTexture';
export class VanModel {
    mesh;
    velocity = new THREE.Vector3();
    heading = 0; // Radians, 0 = north (+Z)
    /** All non-wheel body parts live here so suspension can move them */
    bodyGroup;
    suspensionY = 0;
    suspensionVel = 0;
    constructor(scene) {
        this.mesh = new THREE.Group();
        this.bodyGroup = new THREE.Group();
        this.mesh.add(this.bodyGroup);
        // ── Body ──────────────────────────────────────────────────────────────────
        // Main cargo body (rear 2/3) — dark black
        const cargoMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
        const cargo = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 3.2), cargoMat);
        cargo.position.set(0, 0.8, 0.8); // shifted toward rear
        cargo.castShadow = true;
        cargo.receiveShadow = true;
        this.bodyGroup.add(cargo);
        // Cab (front 1/3) — very dark charcoal
        const cabMat = new THREE.MeshLambertMaterial({ color: 0x181818 });
        const cab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 1.6), cabMat);
        cab.position.set(0, 0.7, -1.6); // front portion
        cab.castShadow = true;
        cab.receiveShadow = true;
        this.bodyGroup.add(cab);
        // Windscreen recess — dark blue-tinted glass
        const wsMat = new THREE.MeshLambertMaterial({ color: 0x223344 });
        const ws = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.0, 0.1), wsMat);
        ws.rotation.x = -0.18; // slight rake
        ws.position.set(0, 1.15, -2.36);
        ws.castShadow = true;
        ws.receiveShadow = true;
        this.bodyGroup.add(ws);
        // Roof — very slightly proud of body
        const roofMat = new THREE.MeshLambertMaterial({ color: 0x151515 });
        const roof = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.15, 4.6), roofMat);
        roof.position.set(0, 1.675, 0);
        roof.castShadow = true;
        roof.receiveShadow = true;
        this.bodyGroup.add(roof);
        // ── Side details ─────────────────────────────────────────────────────────
        // TEM orange/terracotta stripe — both sides
        const stripeMat = new THREE.MeshLambertMaterial({ color: 0xC1666B });
        const stripeL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 3.0), stripeMat);
        stripeL.position.set(-1.23, 0.85, 0.5);
        stripeL.castShadow = true;
        stripeL.receiveShadow = true;
        this.bodyGroup.add(stripeL);
        const stripeR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 3.0), stripeMat);
        stripeR.position.set(1.23, 0.85, 0.5);
        stripeR.castShadow = true;
        stripeR.receiveShadow = true;
        this.bodyGroup.add(stripeR);
        // Side windows on cab — both sides
        const winMat = new THREE.MeshLambertMaterial({ color: 0x334455 });
        const winL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 0.5), winMat);
        winL.position.set(-1.22, 1.1, -1.7);
        winL.castShadow = true;
        winL.receiveShadow = true;
        this.bodyGroup.add(winL);
        const winR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 0.5), winMat);
        winR.position.set(1.22, 1.1, -1.7);
        winR.castShadow = true;
        winR.receiveShadow = true;
        this.bodyGroup.add(winR);
        // Rear door divider lines — two thin vertical boxes on the rear face
        const doorMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
        for (const dx of [-0.3, 0.3]) {
            const divider = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.4, 0.1), doorMat);
            divider.position.set(dx, 0.8, 2.46);
            divider.castShadow = true;
            divider.receiveShadow = true;
            this.bodyGroup.add(divider);
        }
        // ── Cab-to-cargo seam line ──────────────────────────────────────────────
        // At z = -0.8 (junction between cab and cargo bodies)
        const seamMat = new THREE.MeshLambertMaterial({ color: 0x080808 });
        const seamL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.6, 0.05), seamMat);
        seamL.position.set(-1.22, 0.8, -0.8);
        this.bodyGroup.add(seamL);
        const seamR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.6, 0.05), seamMat);
        seamR.position.set(1.22, 0.8, -0.8);
        this.bodyGroup.add(seamR);
        const seamT = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.04, 0.05), seamMat);
        seamT.position.set(0, 1.58, -0.8);
        this.bodyGroup.add(seamT);
        // ── Side mirror housings ─────────────────────────────────────────────────
        const mirrorBodyMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
        const mirrorGlassMat = new THREE.MeshLambertMaterial({ color: 0x334455 });
        for (const side of [-1, 1]) {
            const mxBase = side * 1.3;
            // Housing box
            const mHouse = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.22), mirrorBodyMat);
            mHouse.position.set(mxBase, 1.1, -1.7);
            this.bodyGroup.add(mHouse);
            // Glass face
            const mGlass = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.18), mirrorGlassMat);
            mGlass.position.set(mxBase + side * 0.05, 1.1, -1.7);
            this.bodyGroup.add(mGlass);
        }
        // ── Roof rack bars (2 thin cross bars on van roof) ──────────────────────
        const rackBarMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
        for (const rz of [-0.15, -0.85]) {
            const bar = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.07, 0.07), rackBarMat);
            bar.position.set(0, 1.78, rz);
            this.bodyGroup.add(bar);
        }
        // Side rails connecting the bars
        for (const rx of [-0.95, 0.95]) {
            const rail = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.7), rackBarMat);
            rail.position.set(rx, 1.78, -0.5);
            this.bodyGroup.add(rail);
        }
        // ── TEM tree logo on van roof (white tree, black background) ────────────
        const treeTex = makeTEMTreeTexture(512);
        const treeMat = new THREE.MeshLambertMaterial({ map: treeTex, transparent: false });
        const treePlane = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.6), treeMat);
        treePlane.rotation.x = -Math.PI / 2;
        treePlane.position.set(0, 1.77, 0.6); // centered on cargo section of roof
        this.bodyGroup.add(treePlane);
        // ── Rear door handles ────────────────────────────────────────────────────
        const handleMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
        for (const hx of [-0.6, 0.6]) {
            const handle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.14), handleMat);
            handle.position.set(hx, 0.85, 2.52);
            this.bodyGroup.add(handle);
        }
        // ── Rear horizontal door seam (splits doors top/bottom) ─────────────────
        const rearSeam = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.04, 0.06), seamMat);
        rearSeam.position.set(0, 1.2, 2.47);
        this.bodyGroup.add(rearSeam);
        // ── TEM logo on cargo left panel: orange stripe + T E M letter blocks ────
        const temOrange = new THREE.MeshLambertMaterial({ color: 0xFF5500 });
        const temDark = new THREE.MeshLambertMaterial({ color: 0x111111 });
        // Bright orange stripe background behind letters
        const temStripe = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, 0.82), temOrange);
        temStripe.position.set(-1.255, 0.86, 0.36);
        this.bodyGroup.add(temStripe);
        // T — horizontal top + vertical stem
        const tTop = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 0.16), temDark);
        tTop.position.set(-1.262, 0.96, 0.12);
        this.bodyGroup.add(tTop);
        const tStem = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.15, 0.05), temDark);
        tStem.position.set(-1.262, 0.86, 0.12);
        this.bodyGroup.add(tStem);
        // E — vertical + 3 horizontal bars
        const eVert = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.05), temDark);
        eVert.position.set(-1.262, 0.86, 0.38);
        this.bodyGroup.add(eVert);
        const eTop = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.13), temDark);
        eTop.position.set(-1.262, 0.95, 0.445);
        this.bodyGroup.add(eTop);
        const eMid = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.10), temDark);
        eMid.position.set(-1.262, 0.86, 0.43);
        this.bodyGroup.add(eMid);
        const eBot = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.13), temDark);
        eBot.position.set(-1.262, 0.77, 0.445);
        this.bodyGroup.add(eBot);
        // M — left vert + right vert + two diagonal peaks
        const mLeft = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.05), temDark);
        mLeft.position.set(-1.262, 0.86, 0.61);
        this.bodyGroup.add(mLeft);
        const mRight = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.05), temDark);
        mRight.position.set(-1.262, 0.86, 0.73);
        this.bodyGroup.add(mRight);
        const mPeak = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 0.13), temDark);
        mPeak.position.set(-1.262, 0.92, 0.67);
        this.bodyGroup.add(mPeak);
        // Mirror TEM on right side (mirrored along X)
        const temStripeR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, 0.82), temOrange);
        temStripeR.position.set(1.255, 0.86, 0.36);
        this.bodyGroup.add(temStripeR);
        // ── Wheels (4×) with hubcaps — stay on mesh root (no suspension) ─────────
        const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 10);
        const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
        const hubMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
        // [x, y, z, outerSide]  outerSide: -1 = left, +1 = right
        const wheelDefs = [
            [-1.25, 0.38, -1.2, -1],
            [1.25, 0.38, -1.2, 1],
            [-1.25, 0.38, 1.3, -1],
            [1.25, 0.38, 1.3, 1],
        ];
        for (const [wx, wy, wz, outerSide] of wheelDefs) {
            const wheel = new THREE.Mesh(wheelGeo, wheelMat);
            wheel.rotation.z = Math.PI / 2;
            wheel.position.set(wx, wy, wz);
            wheel.castShadow = true;
            wheel.receiveShadow = true;
            this.mesh.add(wheel);
            // Hubcap on outer face
            const hubGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.06, 10);
            const hub = new THREE.Mesh(hubGeo, hubMat);
            hub.rotation.z = Math.PI / 2;
            hub.position.set(wx + outerSide * 0.15, wy, wz);
            hub.castShadow = true;
            hub.receiveShadow = true;
            this.mesh.add(hub);
            // Tyre sidewall ring — light grey ring on outer face of wheel
            const sidewallMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
            const sidewall = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.38, 0.06, 10), sidewallMat);
            sidewall.rotation.z = Math.PI / 2;
            sidewall.position.set(wx + outerSide * 0.2, wy, wz);
            this.mesh.add(sidewall);
            // Wheel arch flare — slightly wider than tyre, sits over the wheel
            const flareMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
            const flare = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.82), flareMat);
            flare.position.set(wx + outerSide * 0.07, wy + 0.3, wz);
            this.bodyGroup.add(flare);
        }
        // ── Lights ───────────────────────────────────────────────────────────────
        // Headlights — emissive warm white
        const headMat = new THREE.MeshLambertMaterial({
            color: 0xffffdd,
            emissive: 0xffffdd,
            emissiveIntensity: 0.8,
        });
        for (const lx of [-0.8, 0.8]) {
            const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.2, 0.08), headMat);
            headlight.position.set(lx, 0.75, -2.41);
            headlight.castShadow = true;
            headlight.receiveShadow = true;
            this.bodyGroup.add(headlight);
        }
        // Headlight beam cones (very subtle volumetric hint)
        const beamMat = new THREE.MeshBasicMaterial({
            color: 0xFFFFCC,
            transparent: true,
            opacity: 0.08,
            side: THREE.BackSide,
        });
        const beamGeo = new THREE.ConeGeometry(1.5, 8, 8, 1, true);
        for (const bx of [-0.6, 0.6]) {
            const beam = new THREE.Mesh(beamGeo, beamMat);
            beam.rotation.x = Math.PI / 2; // point forward (-z)
            beam.position.set(bx, 0.7, -3);
            this.bodyGroup.add(beam);
        }
        // Tail lights — emissive red
        const tailMat = new THREE.MeshLambertMaterial({
            color: 0xff2200,
            emissive: 0xff2200,
            emissiveIntensity: 0.8,
        });
        for (const lx of [-0.8, 0.8]) {
            const taillight = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.06), tailMat);
            taillight.position.set(lx, 0.75, 2.47);
            taillight.castShadow = true;
            taillight.receiveShadow = true;
            this.bodyGroup.add(taillight);
        }
        // ── Roof rack hint ───────────────────────────────────────────────────────
        const rackMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
        const rack = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.08, 0.8), rackMat);
        rack.position.set(0, 1.77, -0.5);
        rack.castShadow = true;
        rack.receiveShadow = true;
        this.bodyGroup.add(rack);
        // ── Place in scene ───────────────────────────────────────────────────────
        this.mesh.position.set(0, 0, 0);
        scene.add(this.mesh);
    }
    /** Kick the suspension downward — call on curb crossing */
    triggerBump(intensity) {
        this.suspensionVel = -intensity * 6;
    }
    /** Simulate spring-damper suspension every frame */
    updateSuspension(dt) {
        const force = -80 * this.suspensionY - 10 * this.suspensionVel;
        this.suspensionVel += force * dt;
        this.suspensionY += this.suspensionVel * dt;
        // Clamp travel
        this.suspensionY = Math.max(-0.35, Math.min(0.35, this.suspensionY));
        // Apply to body group
        this.bodyGroup.position.y = this.suspensionY;
        // Light body roll — feels chunky
        this.bodyGroup.rotation.z = -this.suspensionY * 0.08;
    }
    /** How much the suspension is moving — useful for effects */
    get suspensionMagnitude() {
        return Math.abs(this.suspensionY) + Math.abs(this.suspensionVel) * 0.04;
    }
}
