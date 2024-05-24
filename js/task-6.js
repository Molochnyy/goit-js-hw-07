"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amount = document.querySelector("#controls input")
const createElemBtn = document.querySelector("[data-create]")
const destroyElemBtn = document.querySelector('[data-destroy]')
const box = document.querySelector('#boxes')

function createBoxes() {
  let u = 30;
  box.innerHTML = ""
  if (amount.value != "" && amount.value <= 100) {
    for (let i = 1; i <= amount.value; i++) {
      const elem = document.createElement('div')
      elem.style.width = `${u}px`;
      elem.style.height = `${u}px`;
      elem.style.backgroundColor = `${getRandomHexColor()}`
      box.appendChild(elem)
      u = u + 10;
    }
  }
}

createElemBtn.addEventListener("click", createBoxes)
destroyElemBtn.addEventListener('click', () => {
  box.innerHTML = ""
})