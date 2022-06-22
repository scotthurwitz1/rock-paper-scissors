let rps = ['Rock', "Paper", "Scissors"];

function computerPlay() {
    let cp = rps[Math.floor(Math.random()*rps.length)]
    return cp
}

computerPlay()
