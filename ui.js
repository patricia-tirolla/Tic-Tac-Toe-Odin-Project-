let gameCells = document.querySelectorAll(".game-cell");

const newGameButton = document.getElementById("new-game-button");
newGameButton.addEventListener("click", () => {
    Gameboard.cleanBoard();
    updateDisplay();
    gameFlow.currentPlayer = gameFlow.player1;
})


gameCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        gameFlow.playerFlow(cell.dataset.index);
        updateDisplay();
        updateScore();
        console.log(Gameboard.myBoard);
        true;
    });
});

function updateDisplay() {
    gameCells.forEach((cell) => {
        let player = Gameboard.myBoard[cell.dataset.index];
        cell.textContent = player;
    })
}

function updateScore() {
    let scoreDisplayX = document.getElementById("display-x");
    let scoreDisplayO = document.getElementById("display-o");

    scoreDisplayX.textContent = gameFlow.player1.score;
    scoreDisplayO.textContent = gameFlow.player2.score;
}