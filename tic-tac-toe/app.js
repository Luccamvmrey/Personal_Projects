import { Util } from "./util.js";

class App {
  constructor() {
    this.onInit();
  }

  onInit() {
    this.spots = document.querySelectorAll(".spot");
    this.mesArea = document.getElementById("message");

    const clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", this.clear);

    this.spots.forEach((item) => {
      item.addEventListener("click", this.selectSpot.bind(null, item));
    });

    this.spotsArr = Util.createSpots(this.spots, 3, 3);

    this.startCounter();
    this.moves = 0;
  }

  startCounter = () => {
    this.counter = 0;
    if (this.counter == 0) {
      this.mesArea.textContent = "Player 1";
    }
  };

  clear = () => {
    this.spots.forEach((i) => {
      i.textContent = "";
    });
    this.startCounter();
    this.moves = 0;
  };

  selectSpot = (i) => {
    const modulo = this.counter % 2;
    let playerSign;

    if (modulo == 0) {
      i.textContent = "X";
      playerSign = "X";
      this.mesArea.textContent = "Player 2";
    } else if (modulo == 1) {
      i.textContent = "O";
      playerSign = "O";
      this.mesArea.textContent = "Player 1";
    }

    this.checkWin(playerSign);
    this.counter++;
  };
  
  checkWin = (ps) => {
    this.moves++;
    for (let i = 0; i < 3; i++) {
      if (
        //Checks Rows
        (this.spotsArr[i][0].textContent == ps &&
        this.spotsArr[i][1].textContent == ps &&
        this.spotsArr[i][2].textContent == ps) ||
        //Checks Columns
        (this.spotsArr[0][i].textContent == ps &&
          this.spotsArr[1][i].textContent == ps &&
          this.spotsArr[2][i].textContent == ps) ||
        //Checks Diagonals
        ((this.spotsArr[0][0].textContent == ps &&
          this.spotsArr[1][1].textContent == ps &&
          this.spotsArr[2][2].textContent == ps) ||
        (this.spotsArr[0][2].textContent == ps &&
          this.spotsArr[1][1].textContent == ps &&
          this.spotsArr[2][0].textContent == ps))  
      ) {
        this.endGame(ps);
      } else if (this.moves == 9) {
        this.endGame("draw");
      }
    }
    console.log(this.moves);
  };

  endGame = (ps) => {
    let result, message;

    if (ps == "X") {
      result = "Player 1";
      message = `${result} won! Click me to play again!`
    } else if (ps == "O") {
      result = "Player 2";
      message = `${result} won! Click me to play again!`
    } else if (ps == "draw") {
      message = `It's a draw! Cick me to play again!`
    }

    this.mesArea.textContent = message;

    this.mesArea.style.fontWeight = "700";
    this.mesArea.style.cursor = "pointer";

    this.mesArea.addEventListener("click", () => {
      this.clear();

      this.mesArea.style.fontWeight = "400";
      this.mesArea.style.cursor = "default";
    });
  };
}

const app = new App();
