const moves = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = correctCase(playerChoice);
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

console.log(playRound("rOcK", "Paper") + "\nCorrect output: You lose! Paper beats Rock.");
console.log(playRound("sCIssorS", "Paper") + "\nCorrect output: You win! Scissors beats Paper.")
console.log(playRound("PAPER", "Paper") + "\nCorrect output: It's a tie! Neither Paper nor Paper wins.");
console.log(computerPlay());