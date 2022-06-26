const display = document.querySelector(".display");
display.innerHTML = "";

const keys = document.querySelectorAll(".key");

function clear() {
  display.innerHTML = "";
  numOne = "";
  numTwo = "";
  operator = "";
  result = "";
}

let numOne = "";
let numTwo = "";
let operator = "";
keys.forEach((item) => {
  item.addEventListener("click", function () {
    let digit = item.innerHTML;
    let result;
    let lastSymbol;
    function isOperator(symbol) {
      if (
        symbol === "+" ||
        symbol === "-" ||
        symbol === "*" ||
        symbol === "/"
      ) {
        return true;
      }
    }

    function isThereOp() {
      if (
        display.innerHTML.includes("+") ||
        display.innerHTML.includes("-") ||
        display.innerHTML.includes("*") ||
        display.innerHTML.includes("/")
      ) {
        return true;
      }
    }

    function calc(op) {
      let firstNum = parseFloat(numOne);
      let secondNum = parseFloat(numTwo);

      if (op === "+") {
        result = firstNum + secondNum;
      } else if (op === "-") {
        result = firstNum - secondNum;
      } else if (op === "*") {
        result = firstNum * secondNum;
      } else if (op === "/") {
        result = firstNum / secondNum;
      }

      numOne = result;
      numTwo = "";
      operator = "";

      let round = Math.round((result + Number.EPSILON) * 100) / 100;
      display.innerHTML = round;
    }

    if (
      display.innerHTML.length > 24 ||
      (isOperator(lastSymbol) && isOperator(digit))
      // (isOperator(digit) && isThereOp())
    ) {
      return;
    } else if (digit === "enter") {
      console.log(numOne);
      console.log(numTwo);
      console.log(operator);
      calc(operator);
    } else if (isOperator(digit) && isThereOp()) {
      calc(operator);
      display.innerHTML += " " + digit + " ";
      operator = digit;
    } else if (digit === "C") {
      clear();
    } else if (isOperator(digit)) {
      display.innerHTML += " " + digit + " ";
      operator = digit;
    } else if (!isThereOp()) {
      display.innerHTML += digit;
      numOne += digit;
    } else if (isThereOp()) {
      display.innerHTML += digit;
      numTwo += digit;
    }

    lastSymbol = digit;
  });
});
