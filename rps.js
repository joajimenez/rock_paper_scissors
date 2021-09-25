let playerPoints = 0;
let robotPoints = 0;

//Human's selection
let playerSelection = prompt("Choose wisely: Rock, Paper or Scissors?");

//Computer's Selection

function computerSelection() {
  let cp = Math.random() * 1;
  if (cp <= 0) {
    return "Rock";
  } else if ((cp = 1)) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

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
  }
}

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

//function scoreTracker (_pp, _rp) {
