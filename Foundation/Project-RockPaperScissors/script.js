// V1.2

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