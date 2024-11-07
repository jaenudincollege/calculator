const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let currentInput = "";
let operator = null;
let firstOperand = null;

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
const modulo = (a, b) => a % b;

const calc = (operator, a, b) => operator(a, b);

for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    const input = btn.textContent;
    if (display.textContent === "0") display.textContent = input;
    else display.textContent += input;

    if (btn.textContent === "AC") display.textContent = 0;
    else if (btn.textContent === "DEL")
      display.textContent = display.textContent.slice(0, -4);
  });
}
