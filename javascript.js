let humanScore = 0;
let computerScore = 0;
let gameOver = false;  // Track if the game has ended

// Get a random choice for the computer
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(event) {
    return event.target.id;  
}


function playRound(humanSelection, computerSelection) {
    let resultMessage = '';
    
    if (humanSelection === computerSelection) {
        resultMessage = "It's a draw!";
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")
    ) {
        resultMessage = "You win! :)";
        humanScore += 1;
    } else {
        resultMessage = "You lose! :(";
        computerScore += 1;
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>You chose: ${humanSelection}</p>
        <p>Computer chose: ${computerSelection}</p>
        <p>${resultMessage}</p>
        <p>Your Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;

    if (humanScore === 5) {
        resultsDiv.innerHTML += "<p>Congratulations! You win the game!</p>";
        gameOver = true;
    } else if (computerScore === 5) {
        resultsDiv.innerHTML += "<p>Sorry! The computer wins the game!</p>";
        gameOver = true;
    }
}

const buttons = document.querySelectorAll("#buttonContainer button");
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        if (!gameOver) {
            const humanSelection = getHumanChoice(event); 
            const computerSelection = getComputerChoice(); 
            playRound(humanSelection, computerSelection); 
        }
    });
});

console.log("Let's play some Rock, Paper, Scissors!");
