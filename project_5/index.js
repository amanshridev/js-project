let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector("#submit-btn");
let userInput = document.querySelector("#input-value");
let enteredNumber = document.querySelector(".entered-number");
let remainingNumber = document.querySelector(".remaining-turn");
let resultField = document.querySelector(".result");
let lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.result');

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateValue(guess);
    // console.log(guess);
  });
}

function validateValue(guess) {
  if (isNaN(guess)) {
    alert("Enter True Value");
  } else if (guess < 1) {
    alert("Enter Value Bigger then 1");
  } else if (guess > 100) {
    alert("Enter Value Smaller then 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      checkValueMessages(`Game Over Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkValue(guess);
    }
  }
}

function checkValue(guess) {
  if (guess === randomNumber) {
    checkValueMessages(`Corret Answer`);
    endGame();
  } else if (guess < randomNumber) {
    checkValueMessages("Incorrect");
  } else if (guess > randomNumber) {
    checkValueMessages("Incorrect");
  }
}

function checkValueMessages(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = "";
  enteredNumber.innerHTML += `${guess}, `;
  numGuess++;
  remainingNumber.innerHTML = `${11 - numGuess}`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    enteredNumber.innerHTML = '';
    remainingNumber.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
