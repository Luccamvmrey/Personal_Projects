export class Counter { 
  constructor() {
    this.multiplier = 1
  }

  click() {
    this.counter = document.getElementById("times-clicked");
    if (this.multiplier == 0) {
      this.counter.textContent = +this.counter.textContent + 1;
    } else {
      this.counter.textContent = +this.counter.textContent + 1 * this.multiplier;
    }
  }

  autoClicker() {
    
  }

  refreshMultiplier() {
    this.multiplier = +localStorage.getItem("multiplier");
  };
}