// // Computer Choice
// function getComputerChoice() {
// const n = Math.floor(Math.random() * 3);

//   if (n === 0) {
//     return "Rock";
//   } else if (n === 1) {
//     return "Paper";
//   } else {
//     return "Scissor";
//   }
// }
// // console.log(getComputerChoice())

// // Human Choice

// function getHumanChoice() {
//   //   let userInput = prompt("Your turn: ");
//   const fs = require("fs");

//   console.log("Your turn:");
//   // Reads the line and removes trailing newlines/spaces
//   const userInput = fs.readFileSync(0, "utf-8").trim();
//   return userInput;
// }
// // console.log(getHumanChoice());

// const humanScore = 0,
//   computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//   playerMove = humanChoice.toLowerCase();
//   computerMove = computerChoice.toLowerCase();

//   if(playerMove === computerMove){
//     console.log("It's a tie!");
//   } else if (playerMove === "rock" && computerMove === "scissor") {
//     humanScore++;
//   } else if (playerMove === "scissor" && computerMove === "paper") {
//     humanScore++;
//   } else if (playerMove === "paper" && computerMove === "rock") {
//     humanScore++;
//   } else if (playerMove === "scissor" && computerMove === "rock") {
//     computerScore++;
//   } else if (playerMove === "paper" && computerMove === "scissor") {
//     computerScore++;
//   } else if (playerMove === "rock" && computerMove === "paper") {
//     computerScore++;
//   }
// }

// function playGame() {
//   for (let i = 1; i <= 5; i++) {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//   }
// }

// playGame();
// console.log(humanScore, computerScore);

// ------------------------------------------------

// V2

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);
  if (n === 0) return "rock";
  else if (n === 1) return "paper";
  else return "scissor";
}

function getHumanChoice() {
  let userInput = prompt("Your turn: ");
  return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let humanMove = humanChoice.toLowerCase();
  let computerMove = computerChoice.toLowerCase();

  if (humanMove === computerMove) {
    console.log("Tie!!!");
  } else if (
    (humanMove === "rock" && computerMove === "scissor") ||
    (humanMove === "scissor" && computerMove === "paper") ||
    (humanMove === "paper" && computerMove === "rock")
  ) {
    console.log("You win! Computer lose :)");
    humanScore++;
  } else {
    console.log("You lose! Computer win :(");
    computerScore++;
  }
}

//  const humanSelection = getHumanChoice();
//  const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

//  console.log(humanSelection);
//  console.log(computerSelection);

function playGame(){
  for(let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    // console.log(humanSelection)
    // console.log(computerSelection)
  }
}
playGame()
console.log(humanScore, computerScore)