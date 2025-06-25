let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) return "rock";
    
    else if (choice == 1) return "paper";

    else return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Your choice: ");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! rock beats scissors")
            humanScore += 1;
        } else if (computerChoice === "paper") {
            console.log("You lose! paper beats rock")
            computerScore += 1;
        } else {
            console.log("Draws!");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! paper beats rock")
            humanScore += 1;
        } else if (computerChoice === "scissors") {
            console.log("You lose! scissors beats paper")
            computerScore += 1;
        } else {
            console.log("Draws!");
        } 
    } else if (humanChoice === "scissors") {
        if (computerChoice === "papper") {
            console.log("You win! scissors beats paper")
            humanScore += 1;
        } else if (computerChoice === "rock") {
            console.log("You lose! rock beats scissors")
            computerScore += 1;
        } else {
            console.log("Draws!");
        }
    }
} 

playRound(getHumanChoice(), getComputerChoice());
console.log(humanScore, computerScore);