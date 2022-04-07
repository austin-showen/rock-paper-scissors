const MOVES = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function playRound() {
    const computerChoice = MOVES[Math.floor(Math.random() * MOVES.length)];
    const playerChoice = this.textContent;
    const computerIndex = MOVES.indexOf(computerChoice);
    const playerIndex = MOVES.indexOf(playerChoice);
    const indexDiff = computerIndex - playerIndex;
    if (indexDiff === 0) {
        return (`It's a tie! Neither ${playerChoice} nor ${computerChoice} wins.`);
    } else if (indexDiff === 1 || indexDiff === -2) {
        return (`You lose! ${computerChoice} beats ${playerChoice}.`);
    } else {
        return (`You win! ${playerChoice} beats ${computerChoice}.`);
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
console.log(buttons);
buttons.forEach(button => button.addEventListener("click", playRound));

//game();