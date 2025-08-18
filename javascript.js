let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
       return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    let humanChoice = window.prompt("Choose Rock, Paper, or Scissors!");
    return humanChoice.toLowerCase();
}

function playGame(round) {
    
    function playRound (humanSelection, computerSelection){
    
        if (humanSelection === computerSelection) {
            console.log("It's a draw.")
        } else if (humanSelection === "scissors" && computerSelection === "paper") {
            console.log("You win! :)");
            humanScore += 1;
        } else if (humanSelection === "rock" && computerSelection === "scissors") {
            console.log("You win! :)");
            humanScore += 1;
        } else if (humanSelection === "paper" && computerSelection === "rock") {
            console.log("You win! :)");
            humanScore += 1;
        } else {
            console.log("You lose! :(");
            computerScore += 1;
            }
    
    console.log("Your Score: " + humanScore + ".")
    console.log("Computer Score: " + computerScore + ".")
    gameRound += 1
    }

    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()

    console.log("You chose " + humanSelection + ".")
    console.log("Computer chose " + computerSelection + ".")

    playRound(humanSelection, computerSelection);

}

console.log("Let's play some Rock, Paper, Scissors!")

for (let i=0; i<5; i++) {
    playGame(i+1);
    ;
}

