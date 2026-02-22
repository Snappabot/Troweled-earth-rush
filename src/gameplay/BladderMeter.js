export class BladderMeter {
    level = 0; // 0.0–1.0
    isUrgent = false;
    lastUrgentToast = 0; // timestamp ms
    update(dt, vanSpeed) {
        if (Math.abs(vanSpeed) > 2) {
            this.level = Math.min(1, this.level + dt * 0.012);
        }
        else {
            this.level = Math.max(0, this.level - dt * 0.005);
        }
        this.isUrgent = this.level > 0.8;
    }
    tryRelief(vanX, vanZ) {
        const dx = vanX - 120;
        const dz = vanZ - 80;
        if (Math.sqrt(dx * dx + dz * dz) > 14)
            return false;
        if (this.level === 0)
            return false;
        this.level = 0;
        this.isUrgent = false;
        return true;
    }
    get spillMultiplier() {
        return this.isUrgent ? 1.8 : 1.0;
    }
}
