const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const drawDisplay = document.getElementById('draw-score');
const resultDisplay = document.getElementById('result');
const choiceButtons = document.querySelectorAll('.choice');
const roundScorerDisplay = document.getElementById('round-score');
const audio = document.getElementById('myAudio');
const winningSound = document.getElementById('winSound');
const losingSound = document.getElementById('loseSound');
const playPauseButton = document.getElementById('play-pause-btn');
let userChoice;
let computerChoice;
let result;
let draw = 0;
let computerPoints = 0;
let playerPoints = 0;
let rounds = 0;

// //Player selection
choiceButtons.forEach((choiceButton) =>
  choiceButton.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    getComputerChoice();
    playRound();
    userScoreDisplay.innerText = playerPoints;
    computerScoreDisplay.innerText = computerPoints;
    drawDisplay.innerText = draw;
    roundScorerDisplay.innerText = rounds;
    declareWinner();
  })
);

choices = ['rock', 'paper', 'scissors'];

// Computer Selection
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length);
  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerText = computerChoice;
}

playerWinsRoundPhrases = [
  "I'm just being lazy.",
  'Beginners luck.',
  "You're better than this.",
];

playerLoseRoundPhrases = [
  "I'm gonna win.",

  'Aha! rookie mistake.',

  'Analyze that!',

  'Resistance is futile.',
];

// Play Round Function

function playRound() {
  if (userChoice === computerChoice) {
    result = 'Its a DRAW!';
    draw++;
    tieColor();
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    result = 'Ouch!';
    computerPoints++;
    loseRoundSound();
    loseColor();
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    result = 'Nice!';
    playerPoints++;
    winRoundSound();
    winColor();
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    result = 'Ouch!';
    computerPoints++;
    loseRoundSound();
    loseColor();
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    result = 'Nice!';
    playerPoints++;
    winRoundSound();
    winColor();
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    result = 'Ouch!';
    computerPoints++;
    loseRoundSound();
    loseColor();
  } else {
    result = 'Nice!';
    playerPoints++;
    winRoundSound();
    winColor();
  }
  rounds++;
  resultDisplay.innerText = result;
}

playPauseButton.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerText = 'Pause Audio 🔇';
  } else {
    audio.pause();
    playPauseButton.innerText = 'Play Audio 🔊';
  }
});

function winRoundSound() {
  winningSound.currentTime = 0;
  winningSound.play();
}

function loseRoundSound() {
  losingSound.currentTime = 0;
  losingSound.play();
}

function winColor() {
  document.getElementById('result').style.color = '#92cc41';
}

function loseColor() {
  document.getElementById('result').style.color = '#e76e55';
}

function tieColor() {
  document.getElementById('result').style.color = '#d3d3d3';
}

//Game Over

function resetGlobalVariables() {
  draw = 0;
  computerPoints = 0;
  playerPoints = 0;
  rounds = 0;
}

function declareWinner() {
  if (computerPoints === 5) {
    resultDisplay.innerText = 'Game Over - AI Wins 😪️';
    resetGlobalVariables();
  } else if (playerPoints === 5) {
    resultDisplay.innerText = 'Game Over - YOU WIN!!! 😎️';
    resetGlobalVariables();
  }
}
