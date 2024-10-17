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
    return {
        currentPlayer: player1,
        player1: player1,
        player2: player2,

        playerFlow(dataIndex) {
            this.changeIndex(dataIndex);
            if (this.winConditions(this.currentPlayer.name)) {
                this.increaseScore();
                this.currentPlayer = player1;
                alert(`${this.currentPlayer.name} wins!`)
                return true;
            } 
            this.switchPlayer();
        },

        changeIndex(index) {
            Gameboard.myBoard[index] = this.currentPlayer.name;
        },

        switchPlayer() {
            if (this.currentPlayer === player1) {
                this.currentPlayer = player2;
            } else {
                this.currentPlayer = player1;
            }
        },

        increaseScore() {
            if (this.winConditions(this.currentPlayer.name) === true) {
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
        }
    }
}

const gameFlow = createGameFlow();
