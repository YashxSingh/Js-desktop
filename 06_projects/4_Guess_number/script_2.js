const submit = document.querySelector("#submit");
const prev = document.querySelector(".prev");
const chances = document.querySelector(".remaining");
const userInput = document.querySelector("#number");
const newGame = document.querySelector("#newGamebtn");
const dispGuess = document.querySelector(".displayGuess");
const lowOrHigh = document.querySelector(".loworhigh");

let rand = Math.floor(Math.random() * 100) + 1;
let guesses = new Array();
let count = 10;
let playGame = true;

newGame.addEventListener('click', (e) =>{
  e.preventDefault();
  newGamefn();
  guesses = [];
  count = 10;
})

if (playGame) {
  submit.addEventListener("click", (e) => {
    console.log(rand);
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (
    !guess ||
    isNaN(guess) ||
    guess == undefined ||
    guess < 1 ||
    guess > 100
  ) {
    alert("Enter a valid number between 1 to 100.");
  } else {
    guesses.push(guess);
    if (count === 0) {
      displayGuess(guess);
      displayMessage(`Game over. The number was ${rand}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == rand) {
    displayMessage(`Great, you have successfully guessed the number. The number was ${guess}`);
    endGame();
  } else if (guess < rand) {
    displayMessage("Guess a larger number.");
  } else if (guess > rand) {
    displayMessage("Guess a smaller number.");
  }
}

function displayGuess(guess) {
  count--;
  userInput.value = "";
  dispGuess.innerHTML = `${guess}`;
  prev.innerHTML = `${guesses.toString()}`;
  chances.innerHTML = `${(count==-1?0:count)}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}<h2>`;
}

function endGame() {
  // guesses = [];
  // count = 10;
  playGame = false;
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  userInput.value ="";
}

function newGamefn() {
  submit.removeAttribute("disabled");
  userInput.removeAttribute("disabled");
  playGame = true;
  rand = Math.floor(Math.random() * 100) + 1;
  userInput.value ="";
  prev.innerHTML = "";
  chances.innerHTML = "10";
  dispGuess.innerHTML = "";
  lowOrHigh.innerHTML = "";
}