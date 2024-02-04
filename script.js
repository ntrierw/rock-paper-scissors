
// get computer choice
// returns a random selection of r, p, s
function getComputerChoice() {
    // init array of rock, paper, scissors
    const choice = ["rock", "paper", "scissors"];

    // pick a random number between 0 and 2
    const index = Math.floor(Math.random() * 3);

    // return the value of array at rand index
    return choice[index];
}

function playRound(playerSelection, computerSelection) {
  
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
