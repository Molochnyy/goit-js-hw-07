function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
let amount = 0;

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  amount = Number(inputEl.value);
  createBoxes(amount);
});

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    inputEl.value = "";
    const elements = [];
    for (let index = 0; index < amount; index += 1) {
      const boxEl = document.createElement("div");
      boxEl.style.width = `${30 + 10 * index}px`;
      boxEl.style.height = `${30 + 10 * index}px`;
      boxEl.style.backgroundColor = getRandomHexColor();
      elements.push(boxEl);
    }
    divBoxes.append(...elements);
  }
}

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function destroyBoxes() {
  divBoxes.innerHTML = "";
}