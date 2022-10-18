export class Counter { 
  constructor() {
    this.multiplier = 1
  }

  click() {
    const counter = document.getElementById("times-clicked");
    if (this.multiplier == 0) {
      counter.textContent = +counter.textContent + 1;
    } else {
      counter.textContent = +counter.textContent + 1 * this.multiplier;
    }
  }

  autoClicker() {
    
  }

  refreshMultiplier() {
    this.multiplier = +localStorage.getItem("multiplier");
  };
}