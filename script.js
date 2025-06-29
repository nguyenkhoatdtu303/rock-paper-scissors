let computerScore = 0;
let humanScore = 0;
let player1 = document.querySelector('.humanScore');
let player2 = document.querySelector('.computerScore');
const result = document.querySelector('.result');
const choices = document.querySelectorAll('.choice');


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) return "rock";
    
    else if (choice == 1) return "paper";

    else return "scissors";
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            result.textContent = "You win! rock beats scissors";
            humanScore += 1;
        } else if (computerChoice === "paper") {
            result.textContent = "You lose! paper beats rock";
            computerScore += 1;
        } else {
            result.textContent = "Draws!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            result.textContent = "You win! paper beats rock";
            humanScore += 1;
        } else if (computerChoice === "scissors") {
            result.textContent = "You lose! scissors beats paper";
            computerScore += 1;
        } else {
            result.textContent = "Draws!";
        } 
    } else if (humanChoice === "scissors") {
        if (computerChoice === "papper") {
            result.textContent = "You win! scissors beats paper";
            humanScore += 1;
        } else if (computerChoice === "rock") {
            result.textContent = "You lose! rock beats scissors";
            computerScore += 1;
        } else {
            result.textContent = "Draws!";
        }
    }
} 

function updateScore(humanScore, computerScore) {
    player1.textContent = humanScore;
    player2.textContent = computerScore;
}


choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        let humanChoice = e.target.value;
        playRound(humanChoice, getComputerChoice());
        
        // update score
        updateScore(humanScore,computerScore);

        if (humanScore === 5) {
            alert("You win!");
            updateScore(0, 0);
            result.textContent = "";
        } else if (computerScore === 5) {
            alert("Computer win!");
            updateScore(0, 0); 
            result.textContent= "";
        }
    });
})

