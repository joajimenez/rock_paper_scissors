const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const drawDisplay = document.getElementById('draw-score');
const resultDisplay = document.getElementById('result');
const choiceButtons = document.querySelectorAll('button');
const roundScorerDisplay = document.getElementById('round-score');
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
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    result = 'You WIN!';
    playerPoints++;
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    result = 'You LOSE!';
    computerPoints++;
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    result = 'You WIN!';
    playerPoints++;
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    result = 'You LOSE!';
    computerPoints++;
  } else {
    result = 'You WIN!';
    playerPoints++;
  }
  rounds++;
  resultDisplay.innerText = result;
}

// User Interface(in the console)
// console.log('============= FIRST ROUND =============');
// console.log(playRound(playerSelection.toLowerCase(), computerSelection()));
// console.log(
//   `Player Points = ${playerPoints}, Computer Points = ${computerPoints}, and Draws = ${draw}`
// );
// console.log('============= NEW ROUND =============');

//Game Function - While Loop

// // function game() {
// //   while (playerPoints != 5 || computerPoints != 5) {
// //     //let playerSelection = prompt('  Choose wisely: Rock, Paper or Scissors? ');
// //     if (roundWinner === 'Computer' || roundWinner === 'Player') {
// //       rockBtn.addEventListener('click', () => playRound('rock'));

// //       paperBtn.addEventListener('click', () => playRound('paper'));

// //       scissorsBtn.addEventListener('click', () => playRound('scissors'));
// //     }

// //     //Stop game - Winning condition
// //     if (playerPoints === 5 || computerPoints === 5) {
// //       break;
// //     }
// //   }
// }

// function game() {
//   rockBtn.addEventListener('click', () => playRound('rock', computerChoice));
//   paperBtn.addEventListener('click', () => playRound('paper', computerChoice));
//   scissorsBtn.addEventListener('click', () =>
//     playRound('scissors', computerChoice)
//   );
// }

// game();

// Declare Winner
// if (computerPoints ==== 5) {
//   console.log(`Game Over - COMPUTER Wins 😪️`);
// } else if (playerPoints ==== 5) {
//   console.log(`Game Over - YOU WIN!!! 😎️`);
// }
