import { Counter } from "./Counter.js";
import { getUpgrades, upgradesArray } from "./util/getUpgrades.js"

class App {
  constructor() {
    this.mainBtn = document.getElementById("main-button");
    const upgradesBtn = document.getElementById("upgrades-btn");
    const productsBtn = document.getElementById("products-btn");

    this.mainBtn.addEventListener("click", () => {
      if (!localStorage.getItem("started")) {
        this.renderClick();
      } else {
        this.onClick();
      }
    });
    this.checkStart();

    upgradesBtn.addEventListener("click", () => {
      this.openTab("upgrades-tab");
    });
    productsBtn.addEventListener("click", () => {
      this.openTab("products-tab");
    });
  }

  checkStart() {
    if (localStorage.getItem("started") === "true") {
      this.renderClick();
    }
  }

  renderClick() {
    this.clickCounter = document.querySelector(".counter-container");
    this.clickCounter.classList.add("visible");
    localStorage.setItem("started", "true");
    this.counter = new Counter();
  }

  onClick() {
    this.counter.click();
  }

  openTab(tab) {
    let x = document.getElementsByClassName("tab");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
  }
}

const app = new App();

// getUpgrades().then(data => {console.log(data)})
console.log(upgradesArray);

