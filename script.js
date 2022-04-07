const MOVES = ["Rock", "Paper", "Scissors"];

function playRound() {
    this.classList.add("selected");
    const computerChoice = MOVES[Math.floor(Math.random() * MOVES.length)];
    const playerChoice = this.textContent;
    const computerIndex = MOVES.indexOf(computerChoice);
    const playerIndex = MOVES.indexOf(playerChoice);
    const indexDiff = computerIndex - playerIndex;
    moves.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.`;
    if (indexDiff === 0) {
        roundResults.textContent = "Nobody gains any points!";
    } else if (indexDiff === 1 || indexDiff === -2) {
        currentComputerScore += 1;
        computerScore.textContent = currentComputerScore;
        roundResults.textContent = "You lose! 1 point to the computer!";
    } else {
        currentPlayerScore += 1;
        playerScore.textContent = currentPlayerScore;
        roundResults.textContent = "You win! 1 point to the player!";
    }
    if (currentPlayerScore >= 5) {
        victory.textContent = "You win the game!";
        buttons.forEach(button => button.removeEventListener("click", playRound));
    } else if (currentComputerScore >= 5) {
        victory.textContent = "The computer won this one."
        buttons.forEach(button => button.removeEventListener("click", playRound));
    }
}

const buttons = document.querySelectorAll("button");
const moves = document.querySelector(".moves");
const roundResults = document.querySelector(".round-results");
const victory = document.querySelector(".victory");

const playerScore = document.querySelector(".player-score");
let currentPlayerScore = parseInt(playerScore.textContent);

const computerScore = document.querySelector(".computer-score");
let currentComputerScore = parseInt(computerScore.textContent);

console.log(buttons);

buttons.forEach(button => button.addEventListener("click", playRound));