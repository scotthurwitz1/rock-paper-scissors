let rps = ['rock', "paper", "scissors"];

function computerPlay() {
    let computerSelection = rps[Math.floor(Math.random()*rps.length)]
    return computerSelection
}

function playerPlay() {
    let playerSelection = prompt("Type Rock, Paper, or Scissors").toLowerCase();
    if (rps.includes(playerSelection) == false) {
        alert("Try again");
        playerPlay();
    } else {
        return playerSelection
    }
}

function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    if (playerSelection===computerSelection) {
        alert("Draw!")
        playRound()
    } 
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Player Wins");
            playerScore += 1;
        } else { console.log("Computer wins");
            computerScore += 1;}
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("Player Wins");
            playerScore += 1;
        } else {console.log("Computer wins")
            computerScore += 1;}
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("Player Wins");
            playerScore += 1;
        } else {console.log("Computer wins")
            computerScore += 1;}
    }
}

let playerScore = 0;
let computerScore = 0;

for (let i=0; i<5; i++){
    playRound()
}

console.log("Final Score:")
console.log("Computer: "+computerScore)
console.log("Player: "+playerScore)






