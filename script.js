const moves = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

function playRound(playerChoice, computerChoice) {
    const computerIndex = moves.indexOf(computerChoice);
    const playerIndex = moves.indexOf(playerChoice);
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
        while (moves.includes(playerChoice) === false) {
            playerChoice = correctCase(window.prompt("Invalid choice. Try again. Rock, Paper, or Scissors?"));
        }
        const computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice));
    }
}

game();