// Computer Choice
function getComputerChoice() {
const n = Math.floor(Math.random() * 3);

  if (n === 0) {
    return "Rock";
  } else if (n === 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}
// console.log(getComputerChoice())

// Human Choice

function getHumanChoice() {
  //   let userInput = prompt("Your turn: ");
  const fs = require("fs");

  console.log("Your turn:");
  // Reads the line and removes trailing newlines/spaces
  const userInput = fs.readFileSync(0, "utf-8").trim();
  return userInput;
}
// console.log(getHumanChoice());

const humanScore = 0,
  computerScore = 0;

function playRound(humanChoice, computerChoice) {
  playerMove = humanChoice.toLowerCase();
  computerMove = computerChoice.toLowerCase();
  
  if(playerMove === computerMove){
    console.log("It's a tie!");
  } else if (playerMove === "rock" && computerMove === "scissor") {
    humanScore++;
  } else if (playerMove === "scissor" && computerMove === "paper") {
    humanScore++;
  } else if (playerMove === "paper" && computerMove === "rock") {
    humanScore++;
  } else if (playerMove === "scissor" && computerMove === "rock") {
    computerScore++;
  } else if (playerMove === "paper" && computerMove === "scissor") {
    computerScore++;
  } else if (playerMove === "rock" && computerMove === "paper") {
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame();
console.log(humanScore, computerScore);