// Gameboard object
const Gameboard = {
    myBoard: ["", "", "", "", "", "", "", "", ""],
    cleanBoard: function () {
        this.myBoard = ["", "", "", "", "", "", "", "", ""];
    }
}

function createPlayer(name) {
    return {
        name,
        score: 0
    }
}

function createGameFlow() {
    const player1 = createPlayer("x");
    const player2 = createPlayer("o");

    const winningCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left
        [2, 4, 6]  // Diagonal from top-right
    ];

    return {
        currentPlayer: player1,
        player1: player1,
        player2: player2,

        winningCombination: winningCombinations,

        playerFlow(dataIndex) {
            if (this.endOfGame()) {
                throw new Error("Start a new game!");
            }
            this.changeIndex(dataIndex);
            if (this.winConditions(this.currentPlayer.name)) {
                this.increaseScore();
                this.currentPlayer = player1;
                return true;
            }
            this.switchPlayer();
        },

        endOfGame() {
            if (this.winConditions(this.player1.name) ||
                this.winConditions(this.player2.name)) {
                return true;
            } else {
                return false;
            }
        },

        resetScore() {
            this.player1.score = 0;
            this.player2.score = 0;
        },

        changeIndex(index) {
            Gameboard.myBoard[index] = this.currentPlayer.name;
        },

        switchPlayer() {
            if (this.currentPlayer === this.player1) {
                this.currentPlayer = this.player2;
            } else {
                this.currentPlayer = this.player1;
            }
        },

        increaseScore() {
            if (this.winConditions(this.currentPlayer.name)) {
                this.currentPlayer.score++;
            }
        },

        winConditions(playerName) {
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
        },

        getWinningCombination() {
            for (let combination of winningCombinations) {
                if (
                    (combination.every(index => Gameboard.myBoard[index] === (this.player1.name))) ||
                    (combination.every(index => Gameboard.myBoard[index] === (this.player2.name)))
                )
                    return combination;
            }
        }
    }
}

const gameFlow = createGameFlow();
