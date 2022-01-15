<<<<<<< HEAD
let playerPoints = 0;
let robotPoints = 0;

//Human's selection
let playerSelection = prompt("Choose wisely: Rock, Paper or Scissors?");
=======
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
>>>>>>> rps-ui

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

<<<<<<< HEAD
function computerSelection() {
  let cp = Math.random() * 1;
  if (cp <= 0) {
    return "Rock";
  } else if ((cp = 1)) {
    return "Paper";
=======
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
    tieColor();
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    result = 'You LOSE!';
    computerPoints++;
    loseRoundSound();
    loseColor();
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    result = 'You WIN!';
    playerPoints++;
    winRoundSound();
    winColor();
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    result = 'You LOSE!';
    computerPoints++;
    loseRoundSound();
    loseColor();
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    result = 'You WIN!';
    playerPoints++;
    winRoundSound();
    winColor();
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    result = 'You LOSE!';
    computerPoints++;
    loseRoundSound();
    loseColor();
>>>>>>> rps-ui
  } else {
    result = 'You WIN!';
    playerPoints++;
    winRoundSound();
    winColor();
  }
  rounds++;
  resultDisplay.innerText = result;
}

<<<<<<< HEAD
//Play Round Function

function playRound(ps, cs) {
  if (ps != "paper" && ps != "scissors" && ps != "rock") {
    return "Good at spelling, you are not.";
  } else if (ps.toLowerCase() == "paper" && cs == "Rock") {
    playerPoints++;
    playerPoints += playerPoints;
    return ["You Win! Paper beats Rock" + playerPoints];
  } else if (ps.toLowerCase() == "paper" && cs == "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (ps.toLowerCase() == "rock" && cs == "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (ps.toLowerCase() == "rock" && cs == "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (ps.toLowerCase() == "scissors" && cs == "Paper") {
    return "You Win! Scissors beats Paper";
  } else if (ps.toLowerCase() == "scissors" && cs == "Rock") {
    return "You lose! Rock beats Scissors";
  } else {
    return "Finally, is a tie!";
=======
playPauseButton.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerText = 'Pause Audio 🔇';
  } else {
    audio.pause();
    playPauseButton.innerText = 'Play Audio 🔊';
>>>>>>> rps-ui
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

<<<<<<< HEAD
//Game function
function game() {
  return [
    playRound(playerSelection, computerSelection()),
    alert(
      "You selected " +
        playerSelection.toUpperCase() +
        " and the computer selected " +
        computerSelection()
    ),
  ];
}

//Users' UI
alert(game());
=======
function winColor() {
  document.getElementById('result').style.color = '#92cc41';
}

function loseColor() {
  document.getElementById('result').style.color = '#e76e55';
}

function tieColor() {
  document.getElementById('result').style.color = '#d3d3d3';
}

playPauseButton();

// game();
>>>>>>> rps-ui

// Declare Winner
// if (computerPoints ==== 5) {
//   console.log(`Game Over - COMPUTER Wins 😪️`);
// } else if (playerPoints ==== 5) {
//   console.log(`Game Over - YOU WIN!!! 😎️`);
// }
