var outcomes = ["r", "p", "s"];

var scores = {
  wins: 0,
  losses: 0,
  draws: 0,
};

var youWin = " you win!";
var youLose = " you lose.";
var youDraw = " it's a draw.";

var randomIndex = Math.floor(Math.random() * 3);

function playRound(userInput, computerChoice) {
  if (userInput === "r" && computerChoice === "s") {
    alert("Computer chose Scissors," + youWin);
  } else if (computerChoice === "r" && userInput === "s") {
    alert("Computer chose Rock," + youLose);
  } else if (userInput === "p" && computerChoice === "r") {
    alert("Computer chose Rock," + youWin);
  } else if (computerChoice === "p" && userInput === "r") {
    alert("Computer chose Paper," + youLose);
  } else if (userInput === "s" && computerChoice === "p") {
    alert("Computer chose Paper," + youWin);
  } else if (computerChoice === "s" && userInput === "p") {
    alert("Computer chose Scissors," + youLose);
  } else if (userInput === "r" && computerChoice === "r") {
    alert("Computer chose Rock," + youDraw);
  } else if (userInput === "p" && computerChoice === "p") {
    alert("Computer chose Paper," + youDraw);
  } else if (userInput === "s" && computerChoice === "s") {
    alert("Computer chose Scissors," + youDraw);
  } else {
    alert("Invalid input, you lose.");
  }
}

for (var i = 0; i < 999; i++) {
  var userInput = prompt("Input r for Rock, p for Paper, s for Scissors");
  var computerChoice = outcomes[randomIndex].toLowerCase();
  console.log(computerChoice);
  var roundResult = playRound(userInput, computerChoice);
  console.log(roundResult);
  gameScore(roundResult);
  confirm(
    "Player score: " +
      scores.wins +
      "\nComputer score: " +
      scores.losses +
      "\nDraws: " +
      scores.draws +
      "\nPress OK to play again, or cancel to quit."
  );
}

function gameScore(result) {
  if (result === youWin) {
    scores.wins++;
  } else if (result === youDraw) {
    scores.draws++;
  } else {
    scores.losses++;
  }
}
