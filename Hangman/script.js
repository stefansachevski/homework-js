let targetWord = "";
let guessedWord = [];
let remainingLives = 5;

let btn = document.getElementById('btnclick');
btn.onclick = function () {
    startGame();
}

function startGame() {
  targetWord = document.getElementById("wordInput").value.toLowerCase();
  guessedWord = Array(targetWord.length).fill('_');
  remainingLives = 5;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("wordDisplay").innerText = guessedWord.join(' ');
  document.getElementById("remainingLives").innerText = remainingLives;
}

let btntwo = document.getElementById('checkbutton');
btntwo.onclick = function (){
    checkLetter();
}

function checkLetter() {
  let letterInput = document.getElementById("letterInput").value.toLowerCase();

  if (!letterInput.match(/^[a-z]$/)) {
    alert("Please enter a valid letter.");
    return;
  }

  if (targetWord.includes(letterInput)) {
    for (let i = 0; i < targetWord.length; i++) {
      if (targetWord[i] === letterInput) {
        guessedWord[i] = letterInput;
      }
    }
  } else {
    remainingLives--;
  }

  updateDisplay();

  if (guessedWord.join('') === targetWord) {
    document.getElementById("message").innerText = "Congratulations! You guessed the word!";
  } else if (remainingLives === 0) {
    document.getElementById("message").innerText = `We're sorry, you lost all your lives. The word was "${targetWord}".`;
  }
}