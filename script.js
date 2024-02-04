const prompt = require('prompt-sync')();

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
    // if player is rock, beat scissors, lose paper
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win! Rock beats scissors"
        }
        if (computerSelection == "paper") {
            return "You lose! Paper beats rock"
        }
        if (computerSelection == "rock") {
            return "It's a tie! Rock and rock"
        }
    }

    // if player is paper, beat rock, lose scissors
    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You lose! Scissors beats paper"
        }
        if (computerSelection == "paper") {
            return "It's a tie! Paper and paper"
        }
        if (computerSelection == "rock") {
            return "You win! Paper beats rock"
        }
    }

    // if player is scissors, beat paper, lose rock
    if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            return "It's a tie! Scissors beats scissors"
        }
        if (computerSelection == "paper") {
            return "You win! Scissors beats paper"
        }
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors"
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {    
        let playerSelection = prompt("Rock, Paper, or Scissors? ");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();
