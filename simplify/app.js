const calcBtn = document.querySelector("button");
const resultBox = document.getElementById("results");

const calculate = () => {
  const num1 = +document.getElementById("num1").value;
  const num2 = +document.getElementById("num2").value;
  const operator = document.getElementById("op").value;
  
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }

  resultBox.innerHTML = result;
}

calcBtn.addEventListener("click", calculate);