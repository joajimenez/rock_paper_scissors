// Variables

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

//playerSelection

let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

//Computer Selection

function computerPlay() {
  const cp = Math.random();
  if (cp < 0.34) {
    return 'Rock';
  } else if (cp <= 0.63) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

let ps = playerSelection;
let cs = computerPlay();

// PlayRoundFunction

function playRound(ps, cs) {
  if (playerSelection == 'paper' && cs == 'Rock') {
    playerScore++;
    roundWinner = 'player';
    return 'You Win! Paper beats Rock';
  } else if (ps == 'paper' && cs == 'Scissors') {
    computerScore++;
    roundWinner = 'computer';
    return 'You Lose! Scissors beats Paper';
  } else if (ps == 'rock' && cs == 'Scissors') {
    playerScore++;
    roundWinner = 'player';
    return 'You Win! Rock beats Scissors';
  } else if (ps == 'rock' && cs == 'Paper') {
    computerScore++;
    roundWinner = 'computer';
    return 'You Lose! Paper beats Rock';
  } else if (ps == 'scissors' && cs == 'Paper') {
    playerScore++;
    roundWinner = 'player';
    return 'You Win! Scissors beats Paper';
  } else if (ps == 'scissors' && cs == 'Rock') {
    computerScore++;
    roundWinner = 'computer';
    return 'You lose! Rock beats Scissors';
  } else {
    console.log(ps + ' vs ' + cs + ' finally is a tie!');
  }
}

function gameOver() {
  return playerScore == 5 || computerScore == 5;
}

for (let round = 0; round <= 5; round++) {
  playRound();
}

console.log(playRound(playerSelection, computerPlay()));
console.log(
  `You have ${playerScore} points, and the computer has ${computerScore} points`
);

/*
function game() {
  playRound();
}
*/
