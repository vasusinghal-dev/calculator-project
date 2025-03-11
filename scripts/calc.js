let calculation = localStorage.getItem("result") || "";

displayResult();

function updateCalculation(n) {
  const lastChar = String(calculation).slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(lastChar) && operators.includes(n)) {
    calculation = calculation.slice(0, -1) + n;
  } else {
    calculation += n;
  }

  displayResult();
}

function backspace() {
  calculation = String(calculation).slice(0, -1);
  displayResult();
}

function calculateResult() {
  let equation = calculation;
  if (!equation) {
    return;
  }
  try {
    calculation = Number(eval(calculation).toPrecision(4));
    equation = equation + ` = ${calculation}`;
    document.querySelector(".js-display").innerHTML = equation;
    localStorage.setItem("result", calculation);
  } catch (error) {
    document.querySelector(".js-display").innerHTML = "Error!";
    calculation = "";
  }
}

function clearCalculation() {
  calculation = "";
  localStorage.removeItem("result");
  displayResult();
}

function displayResult() {
  document.querySelector(".js-display").innerHTML = calculation || "0";
}
