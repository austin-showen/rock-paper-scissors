const moves = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return (`It's a tie! Neither ${playerChoice} nor ${computerChoice} wins.`);
    } else if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
            return ("You win! Rock beats Scissors.");
        } else {
            return ("You lose! Paper beats Rock.");
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            return ("You win! Paper beats Rock.");
        } else {
            return ("You lose! Scissors beats Paper.");
        }
    } else if (playerChoice === "Scissors") { 
        if (computerChoice === "Paper") {
            return ("You win! Scissors beats Paper.");
        } else {
            return ("You lose! Rock beats Scissors.");
        }
    }
}

function correctCase(inputString) {
    const lower = inputString.toLowerCase();
    const firstUpper = inputString[0].toUpperCase();
    return (firstUpper + lower.slice(1, lower.length));
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerChoice = correctCase(window.prompt("Do you choose Rock, Paper, or Scissors?"));
        while (moves.includes(playerChoice) === false) {
            playerChoice = correctCase(window.prompt("Invalid choice. Try again. Rock, Paper, or Scissors?"));
        }
        const computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice));
    }
}

game();