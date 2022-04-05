const moves = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
}

function correctCase(inputString) {
    const lower = inputString.toLowerCase();
    const firstUpper = inputString[0].toUpperCase();
    return (firstUpper + lower.slice(1, lower.length));
}

console.log(correctCase("bArNaClEs"));
console.log(computerPlay());