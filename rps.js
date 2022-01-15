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

// Play Round Function

function playRound() {
  if (userChoice === computerChoice) {
    result = 'Its a DRAW!';
    draw++;
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    result = 'You LOSE!';
    computerPoints++;
    loseRoundSound();
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    result = 'You WIN!';
    playerPoints++;
    winRoundSound();
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    result = 'You LOSE!';
    computerPoints++;
    loseRoundSound();
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    result = 'You WIN!';
    playerPoints++;
    winRoundSound();
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    result = 'You LOSE!';
    computerPoints++;
    loseRoundSound();
  } else {
    result = 'You WIN!';
    playerPoints++;
    winRoundSound();
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

playPauseButton();

// game();

// Declare Winner
// if (computerPoints ==== 5) {
//   console.log(`Game Over - COMPUTER Wins 😪️`);
// } else if (playerPoints ==== 5) {
//   console.log(`Game Over - YOU WIN!!! 😎️`);
// }
