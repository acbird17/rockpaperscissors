var outcomes = ["r", "p", "s"];

userInput = prompt("Input r for Rock, p for Paper, s for Scissors");
console.log(userInput);

var randomIndex = Math.floor(Math.random() * 3);

var computerChoice = outcomes[randomIndex].toLowerCase();
console.log(computerChoice);

if (userInput === "r" && computerChoice === "s") {
  alert("Computer chose Scissors, you win!");
} else if (computerChoice === "r" && userInput === "s") {
  alert("Computer chose Rock, you lose.");
} else if (userInput === "p" && computerChoice === "r") {
  alert("Computer chose Rock, you win!");
} else if (computerChoice === "p" && userInput === "r") {
  alert("Computer chose Paper, you lose.");
} else if (userInput === "s" && computerChoice === "p") {
  alert("Computer chose Paper, you win!");
} else if (computerChoice === "s" && userInput === "p") {
  alert("Computer chose Scissors, you lose.");
} else if (userInput === "r" && computerChoice === "r") {
  alert("Computer chose Rock, it's a draw.");
} else if (userInput === "p" && computerChoice === "p") {
  alert("Computer chose Paper, it's a draw.");
} else if (userInput === "s" && computerChoice === "s") {
  alert("Computer chose Scissors, it's a draw.");
} else {
  alert("Invalid input, you lose.");
}
