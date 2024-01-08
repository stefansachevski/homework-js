let currentInput = '';
let output = document.getElementById('output');

document.querySelectorAll('.number').forEach(function (button) {
  button.addEventListener('click', function () {
    appendToScreen(button.innerText);
  });
});

document.querySelectorAll('.operation').forEach(function(button) {
  button.addEventListener('click', function () {
    appendToScreen(button.innerText);
  });
});

document.querySelector('.equals').addEventListener('click', calculate);
document.querySelector('.delete').addEventListener('click', clearScreen);
document.querySelector('.backspace').addEventListener('click', backspace);
document.querySelector('.dot').addEventListener('click', function () {
    appendToScreen('.');
  });

function backspace() {
  currentInput = currentInput.slice(0, -1);
  output.innerText = currentInput || '0';
}

function appendToScreen(value) {
  currentInput += value;
  output.innerText = currentInput;
}

function clearScreen() {
  currentInput = '';
  output.innerText = '0';
}

function calculate() {
  try {
    let result = Function('"use strict";return (' + currentInput + ')')();
    currentInput = result.toString();
    output.innerText = currentInput;
  } catch (error) {
    output.innerText = 'Error';
  }
}