
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
console.log (getComputerChoice());