import { Counter } from "./counter.js";

class App {
  constructor() {
    this.mainBtn = document.getElementById("main-button");
    this.mainBtn.addEventListener("click", () => {
      if (!localStorage.getItem("started")) {
        this.renderClick();
      } else {
        this.onClick();
      }

    });
    // if (!localStorage.getItem("started")) {
    //   this.mainBtn.addEventListener("click", this.renderClick);
    // }
    this.checkStart();
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
}

const app = new App();