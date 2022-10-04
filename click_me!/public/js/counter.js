export class Counter { 
  constructor() {
    this.multiplier = 1
  }

  click() {
    const counter = document.getElementById("times-clicked");
    counter.textContent = +counter.textContent + 1 * this.multiplier;
  }

  autoClicker() {
    
  }
}