playerScore = 0;
computerScore = 0;
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


let playerSelectionCase = prompt ("Choose rock, paper or scissors");
playerSelection = playerSelectionCase.toLowerCase();


function turnToNumber () {
let number
if (playerSelection == "rock") {
    number = 0 }
    else if (playerSelection == "paper") {
        number = 1; 
    }

     else if (playerSelection == "scissors")
     {number = 2};

 return number;
}
console.log (turnToNumber());

const computerSelection = getComputerChoice ();





