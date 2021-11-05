//Human's selection
let playerSelection = prompt('Choose wisely: Rock, Paper or Scissors?');

//Computer's Selection

function computerSelection() {
  const cp = Math.random();
  if (cp <= 0.33) {
    return 'Rock';
  } else if (cp >= 34 || cp <= 66) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

//Play Round Function

function playRound(ps, cs) {
  console.log(
    'You selected ' + ps.toUpperCase() + ' and the computer selected ' + cs
  );

  if (ps != 'paper' && ps != 'scissors' && ps != 'rock') {
    return 'Good at spelling, you are not.';
  } else if (ps.toLowerCase() == 'paper' && cs == 'Rock') {
    return 'You Win! Paper beats Rock';
  } else if (ps.toLowerCase() == 'paper' && cs == 'Scissors') {
    return 'You Lose! Scissors beats Paper';
  } else if (ps.toLowerCase() == 'rock' && cs == 'Scissors') {
    return 'You Win! Rock beats Scissors';
  } else if (ps.toLowerCase() == 'rock' && cs == 'Paper') {
    return 'You Lose! Paper beats Rock';
  } else if (ps.toLowerCase() == 'scissors' && cs == 'Paper') {
    return 'You Win! Scissors beats Paper';
  } else if (ps.toLowerCase() == 'scissors' && cs == 'Rock') {
    return 'You lose! Rock beats Scissors';
  } else {
    console.log(ps.toUpperCase(), cs.toUpperCase(), 'finally');
    return 'Is a tie!';
  }
}

console.log(playRound(playerSelection, computerSelection()));

//Game Function

function game() {
  console.log(playRound(playerSelection, computerSelection()));
  console.log(playRound(playerSelection, computerSelection()));
  console.log(playRound(playerSelection, computerSelection()));
  console.log(playRound(playerSelection, computerSelection()));
  console.log(playRound(playerSelection, computerSelection()));
}

let playerPoints;
let robotPoints;

//function scoreTracker (_pp, _rp) {
