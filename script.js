const moves = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}
console.log(computerPlay());