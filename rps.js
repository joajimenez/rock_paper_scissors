//playerSelection
let playerSelection = prompt("Rock, Paper or Scissors?");

//Computer Selection

function computerPlay() {
  const cp = Math.random();
  if (cp < 0.34) {
    return "Rock";
  } else if (cp <= 0.63) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//Computer's Selection Console log
console.log("The robot selected " + computerPlay());
console.log("You selected " + playerSelection);

//single round function



//Computer Selection


//Play Round Function

function playRound(ps, cs) {
  console.log(ps, cs)
  if (ps.toLowerCase() == "paper" && cs == "Rock") {
    return "You Win! Paper beats Rock";
  } else if (
    ps.toLowerCase() == "paper" &&
    cs == "Scissors"
  ) {
    return "You Lose! Scissors beats Paper";
  } else if (
    ps.toLowerCase() == "rock" &&
    cs == "Scissors"
  ) {
    return "You Win! Rock beats Scissors";
  } else if (
    ps.toLowerCase() == "rock" &&
    cs == "Paper"
  ) {
    return "You Lose! Paper beats Rock";
  } else if (
    ps.toLowerCase() == "scissors" &&
    cs == "Paper"
  ) {
    return "You Win! Scissors beats Paper";
  } else if (
    ps.toLowerCase() == "scissors" &&
    cs == "Rock"
  ) {
    return "You lose! Rock beats Scissors";
  } else {
  console.log(ps.toLowerCase(), cs, 'finally')
    return "Is a tie!";
  }
}

console.log(playRound(playerSelection, computerPlay()));

//Game Function
