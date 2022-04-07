const MOVES = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function playRound() {
    const computerChoice = MOVES[Math.floor(Math.random() * MOVES.length)];
    const playerChoice = this.textContent;
    const computerIndex = MOVES.indexOf(computerChoice);
    const playerIndex = MOVES.indexOf(playerChoice);
    const indexDiff = computerIndex - playerIndex;
    moves.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.`;
    if (indexDiff === 0) {
        roundResults.textContent = "Nobody gains any points!";
    } else if (indexDiff === 1 || indexDiff === -2) {
        computerScore += 1;
        roundResults.textContent = "You lose! 1 point to the computer!";
    } else {
        playerScore += 1;
        roundResults.textContent = "You win! 1 point to the player!";
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
        while (MOVES.includes(playerChoice) === false) {
            playerChoice = correctCase(window.prompt("Invalid choice. Try again. Rock, Paper, or Scissors?"));
        }
        const computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice));
    }
}

const buttons = document.querySelectorAll("button");
const moves = document.querySelector(".moves");
const roundResults = document.querySelector(".round-results");
const victory = document.querySelector(".victory");
console.log(buttons);
buttons.forEach(button => button.addEventListener("click", playRound));

//game();