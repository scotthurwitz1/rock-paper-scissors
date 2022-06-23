let rps = ['rock', "paper", "scissors"];

function computerPlay() {
    let cp = rps[Math.floor(Math.random()*rps.length)]
    return cp
}

function fn2() {
    let pp = document.getElementById("player1").value;
    if (rps.includes(pp.toLowerCase()) == false) {
        alert("Try again");
    }
}

computerPlay()
