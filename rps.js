let playerPoints = 0;
let robotPoints = 0;
let draw = 0;
let roundWinner = '';

//Player selection
let playerSelection = prompt('Choose wisely: Rock, Paper or Scissors?');

//Computer Selection

function computerSelection() {
  const cp = Math.random();
  if (cp < 0.34) {
    return 'Rock';
  } else if (cp <= 0.63) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

//Play Round Function

function playRound(ps, cs) {
  if (ps != 'paper' && ps != 'scissors' && ps != 'rock') {
    return 'Good at spelling, you are not.';
  } else if (ps.toLowerCase() == 'paper' && cs == 'Rock') {
    playerPoints++;
    roundWinner = 'player';
    return 'You Win! Paper beats Rock';
  } else if (ps.toLowerCase() == 'paper' && cs == 'Scissors') {
    robotPoints++;
    return 'You Lose! Scissors beats Paper';
  } else if (ps.toLowerCase() == 'rock' && cs == 'Scissors') {
    playerPoints++;
    roundWinner = 'player';
    return 'You Win! Rock beats Scissors';
  } else if (ps.toLowerCase() == 'rock' && cs == 'Paper') {
    robotPoints++;
    return 'You Lose! Paper beats Rock';
  } else if (ps.toLowerCase() == 'scissors' && cs == 'Paper') {
    playerPoints++;
    roundWinner = 'player';
    return 'You Win! Scissors beats Paper';
  } else if (ps.toLowerCase() == 'scissors' && cs == 'Rock') {
    robotPoints++;
    return 'You lose! Rock beats Scissors';
  } else {
    draw++;
    return ps.toUpperCase(), cs.toUpperCase(), 'Is a tie!';
  }
}

console.log(playRound(playerSelection, computerSelection()));
console.log(
  `Player Points = ${playerPoints}, Computer Points = ${robotPoints}, and Draws = ${draw}`
);
console.log(`The round winner is ${roundWinner}`);

//Game Function

function game() {
  return playRound();
}
