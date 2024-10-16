// Gameboard object
const Gameboard = {
    myBoard: ["", "", "", "", "", "", "", "", ""],
}

// Player 1 object
let Player1 = {
    name: "x",
    score: 0
}
// Player 2 object
let Player2 = {
    name: "o",
    score: 0
}

let currentPlayer = Player1;

// Gameflow object

// Show gameboard
// player = Player1
// first player plays
// myBoard list update
// check if ther's a winner
// if yes, increase the score, update score display and reset the board
// if no, switch to Player2
// start again

// ---------- CRIAR TESTES PARA AS FUNÇÕES
function cleanGameboard() {
    Gameboard.myBoard = ["", "", "", "", "", "", "", "", ""];
}

function increaseScore() {
    if (winConditions(currentPlayer.name) === true) {
        currentPlayer.score++;
        cleanGameboard();
    }
}

function winConditions(playerName) {
    if (
        Gameboard.myBoard[0] === playerName &&
        Gameboard.myBoard[1] === playerName &&
        Gameboard.myBoard[2] === playerName ||

        Gameboard.myBoard[3] === playerName &&
        Gameboard.myBoard[4] === playerName &&
        Gameboard.myBoard[5] === playerName ||

        Gameboard.myBoard[6] === playerName &&
        Gameboard.myBoard[7] === playerName &&
        Gameboard.myBoard[8] === playerName ||

        Gameboard.myBoard[0] === playerName &&
        Gameboard.myBoard[3] === playerName &&
        Gameboard.myBoard[6] === playerName ||

        Gameboard.myBoard[1] === playerName &&
        Gameboard.myBoard[4] === playerName &&
        Gameboard.myBoard[7] === playerName ||

        Gameboard.myBoard[2] === playerName &&
        Gameboard.myBoard[5] === playerName &&
        Gameboard.myBoard[8] === playerName ||

        Gameboard.myBoard[0] === playerName &&
        Gameboard.myBoard[4] === playerName &&
        Gameboard.myBoard[8] === playerName ||

        Gameboard.myBoard[2] === playerName &&
        Gameboard.myBoard[4] === playerName &&
        Gameboard.myBoard[6] === playerName
    ) {
        return true;
    } else {
        return false;
    }
}

function switchPlayer() {
    if (currentPlayer === Player1) {
        currentPlayer = Player2;
    } else {
        currentPlayer = Player1;
    }
}

function changeIndex(index) {
    Gameboard.myBoard[index] = currentPlayer.name;
}

function playFlow(dataIndex) {
    changeIndex(dataIndex);
    if (winConditions(currentPlayer.name)) {
        increaseScore();
        cleanGameboard();
    } else {
        switchPlayer();
    }
}
