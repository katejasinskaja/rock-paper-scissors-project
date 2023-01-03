
function getComputerChoice () {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            console.log ("ROCK");
            break;
        case 1:
            console.log ("PAPER");
            break;
        case 2:
            console.log ("SCISSORS");
            break; 
    }
}


function playRound (playerSelection, computerSelection) {
playerSelection.toLowerCase = playerSelection.toUpperCase;
switch (randomNumber) {
     case 0:
        console.log ("It's a draw");
        break;
    case 1:
        console.log ("You lose! Paper beats Rock");
        break;
    case 2:
        console.log ("You win! Rock beats Scissors");
        break;
}
}
const playerSelection = "ROCK";
const computerSelection = getComputerChoice ();
console.log (playRound(playerSelection, computerSelection));