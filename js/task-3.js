"use strict";

let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = function () {
    nameOutput.innerHTML = 'Anonymous';
    if (input.value === '') {
        nameOutput.innerHTML = nameOutput.textContent;
    }
    else {
        nameOutput.innerHTML = input.value;
    }
}