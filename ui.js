let gameCells = document.querySelectorAll(".game-cell");

const newGameButton = document.getElementById("new-game-button");
newGameButton.addEventListener("click", () => {
    Gameboard.cleanBoard();
    updateDisplay();
    // gameFlow.currentPlayer = gameFlow.player1;
})

const resetButton = document.getElementById("reset-game-button");
resetButton.addEventListener("click", () => {
    Gameboard.cleanBoard();
    gameFlow.resetScore();
    updateDisplay();
})

gameCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        cell.style.color = "black";
        if (!gameFlow.endOfGame()) {
            gameFlow.playerFlow(cell.dataset.index);
            updateDisplay();
            console.log(Gameboard.myBoard);
        }

        if(gameFlow.getWinningCombination()) {
            gameFlow.getWinningCombination().forEach(index => {
                const winningCell = document.querySelector(`[data-index='${index}']`);
                winningCell.style.color = "red";
            })
        }
    });
});

function updateDisplay() {
    gameCells.forEach((cell) => {
        let player = Gameboard.myBoard[cell.dataset.index];
        cell.textContent = player;
    })

    let scoreDisplayX = document.getElementById("display-x");
    let scoreDisplayO = document.getElementById("display-o");

    scoreDisplayX.textContent = gameFlow.player1.score;
    scoreDisplayO.textContent = gameFlow.player2.score;
}