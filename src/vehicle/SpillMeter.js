export class SpillMeter {
    amount = 0; // 0-100
    maxAmount = 100;
    addSpill(amount) {
        this.amount = Math.min(this.maxAmount, this.amount + amount);
    }
    get percentage() {
        return this.amount / this.maxAmount;
    }
}
