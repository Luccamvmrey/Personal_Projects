import { Counter } from "./Counter.js";
import { postClick } from "./util/postClicks.js";
import { getUpgrades, upgradesArray } from "./util/getUpgrades.js";
import { getProducts, productsArray } from "./util/getProducts.js";

class App {
  constructor() {
    this.mainBtn = document.getElementById("main-button");

    this.startEventListeners();
    this.checkStart();

    this.counter.refreshMultiplier();
  }

  startEventListeners() {
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
        const multiplier = localStorage.getItem("multiplier");

        if (this.checkEnoughClicks(selUpgrade.priceNum)) {
          if (!multiplier) {
            localStorage.setItem("multiplier", selUpgrade.effectNum);
          } else if (+multiplier > 0) {
            const currentMultiplier = multiplier;
            const newMultiplier = currentMultiplier * selUpgrade.effectNum;
            localStorage.setItem("multiplier", newMultiplier);
          }
        }
      });
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
    // postClick(this.clicks);
  }

  checkEnoughClicks(price) {
    if(this.clicks > price) {
      return true;
    } else {
      alert("You don't have enough clicks!");
      return false;
    }
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
