import { Counter } from "./Counter.js";
import { getUpgrades, upgradesArray } from "./util/getUpgrades.js";

class App {
  constructor() {
    this.mainBtn = document.getElementById("main-button");
    const upgradesBtn = document.getElementById("upgrades-btn");
    const productsBtn = document.getElementById("products-btn");
    const upgradeBtns = document.querySelectorAll("#upgrades-tab button");
    const productBtns = document.querySelectorAll("#products-tab button");

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

    upgradeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const upgradeIndex = btn.getAttribute("data-upgrade-index");
        const selUpgrade = upgradesArray.filter(
          (up) => up.id === +upgradeIndex
        )[0];

        if (!localStorage.getItem("multiplier")) {
          localStorage.setItem("multiplier", selUpgrade.effectNum);
        } else if (+localStorage.getItem("multiplier") > 0) {
          const currentMultiplier = localStorage.getItem("multiplier");
          const newMultiplier = currentMultiplier * selUpgrade.effectNum;
          localStorage.setItem("multiplier", newMultiplier);
        }

        console.log(this.counter.multiplier);
      });
    });
    this.counter.refreshMultiplier();
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
