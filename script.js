const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    const input = btn.textContent;
    if (display.textContent === "0") display.textContent = input;
    else display.textContent += input;
  });
}
