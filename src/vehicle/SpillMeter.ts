export class SpillMeter {
  amount = 0; // 0-100
  private maxAmount = 100;

  addSpill(amount: number) {
    this.amount = Math.min(this.maxAmount, this.amount + amount);
  }

  get percentage() {
    return this.amount / this.maxAmount;
  }
}
