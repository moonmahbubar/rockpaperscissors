function computerPlay() {
    let min = 1;
    let max = 3;
    let chance = Math.floor(Math.random()*(max-min+1)+min);
    switch(chance) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default: 
            return "";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let draw = "It's a draw between ";
    let lose = "You lose to ";
    let win = "You win against ";

    switch(playerSelection) {
        case computerSelection:
            return draw + computerSelection;
        case "ROCK":
            return ((computerSelection == "SCISSORS") ? win: lose) + computerSelection;
        case "PAPER": 
            return ((computerSelection == "ROCK") ? win: lose) + computerSelection;
        case "SCISSORS": 
            return ((computerSelection == "PAPER") ? win: lose) + computerSelection;                }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your move?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}