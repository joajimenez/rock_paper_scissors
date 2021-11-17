// Variables

let playerPoints = parseInt(0);
let computerPoints = parseInt(0);
let draw = parseInt(0);
let roundWinner = '';

// Player selection
//const prompt = require('prompt-sync')();
let playerSelection = prompt(
  ' Write your selection: Rock, Paper or Scissors? '
);

// Computer Selection
function computerSelection() {
  const cp = Math.random();
  if (cp < 0.33) {
    return 'rock';
  } else if (cp < 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Play Round Function

function playRound(ps, cs) {
  if (ps != 'paper' && ps != 'scissors' && ps != 'rock') {
    return 'Good at spelling you are not. ';
  } else if (ps == 'paper' && cs == 'rock') {
    playerPoints++;
    roundWinner = 'Player';
    return 'You Win! Paper beats Rock ';
  } else if (ps == 'paper' && cs == 'scissors') {
    computerPoints++;
    roundWinner = 'Computer';
    return 'You Lose! Scissors beats Paper ';
  } else if (ps == 'rock' && cs == 'scissors') {
    playerPoints++;
    roundWinner = 'Player';
    return 'You Win! Rock beats Scissors ';
  } else if (ps == 'rock' && cs == 'paper') {
    computerPoints++;
    roundWinner = 'Computer';
    return 'You Lose! Paper beats Rock ';
  } else if (ps == 'scissors' && cs == 'paper') {
    playerPoints++;
    roundWinner = 'Player';
    return 'You Win! Scissors beats Paper ';
  } else if (ps == 'scissors' && cs == 'rock') {
    computerPoints++;
    roundWinner = 'Computer';
    return 'You lose! Rock beats Scissors ';
  } else {
    draw++;
    return (
      ps.toUpperCase(), cs.toUpperCase(), 'Oh, no! Is a tie. Please try again.'
    );
  }
}

// User Interface(in the console)
console.log('========= FIRST ROUND =========');
console.log(playRound(playerSelection.toLowerCase(), computerSelection()));
console.log(
  `Player Points = ${playerPoints}, Computer Points = ${computerPoints}, and Draws = ${draw}`
);
console.log('========= NEW ROUND =========');

//Game Function - While Loop

function game() {
  while (playerPoints != 5 || computerPoints != 5) {
    let playerSelection = prompt('  Choose wisely: Rock, Paper or Scissors? ');
    if (roundWinner == 'Computer' || roundWinner == 'Player') {
      console.log(
        `You have ${playerPoints} points. Computer has ${computerPoints} points. And there are ${draw} ties.`
      );
      console.log(
        playRound(playerSelection.toLowerCase(), computerSelection())
      );
      console.log('========= NEW ROUND =========');
    } else {
      console.log('No winners this time. Try again!');
      console.log(
        playRound(playerSelection.toLowerCase(), computerSelection())
      );
      console.log('========= NEW ROUND =========');
    }

    //Stop game - Winning condition
    if (playerPoints == 5 || computerPoints == 5) {
      break;
    }
  }
}

game();

// Declare Winner
if (computerPoints === 5) {
  console.log(`Game Over - COMPUTER Wins 😪️`);
} else if (playerPoints === 5) {
  console.log(`Game Over - YOU WIN!!! 😎️`);
}
