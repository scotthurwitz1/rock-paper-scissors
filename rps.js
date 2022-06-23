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
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Player Wins")
        } else {console.log("Computer wins")}
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("Player Wins")
        } else {console.log("Computer wins")}
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("Player Wins")
        } else {console.log("Computer wins")}
    }
}


playRound();




