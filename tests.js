/// Teste increase score
function testIncreaseScore(player) {
    console.log(player.score);
    Gameboard.myBoard = [player.name, player.name, player.name, "", "", "", "", "", ""];
    increaseScore(currentPlayer);
    console.log(player.score);
}
testIncreaseScore(currentPlayer);

// test switch players
function testSwitchPlayer() {
    console.log("Testing swish player")
    console.assert(currentPlayer === Player1);
    console.debug(currentPlayer);
    switchPlayer();
    console.assert(currentPlayer === Player2);
    console.debug(currentPlayer);
    switchPlayer();
    console.assert(currentPlayer === Player1);
    console.debug(currentPlayer);
}
testSwitchPlayer()

// test win conditions
function testWinConditions() {
    console.log("testing win first line")
    Gameboard.myBoard = ["x", "x", "x", "", "", "", "", "", ""];
    console.assert(winConditions("x"));

    console.log("testing win second line")
    Gameboard.myBoard = ["", "", "", "x", "x", "x", "", "", ""];
    console.assert(winConditions("x"));

    console.log("testing win third line")
    Gameboard.myBoard = ["", "", "", "", "", "", "x", "x", "x"];
    console.assert(winConditions("x"));

    console.log("testing win first column")
    Gameboard.myBoard = ["x", "", "", "x", "", "", "x", "", ""];
    console.assert(winConditions("x"));

    console.log("testing win second column")
    Gameboard.myBoard = ["", "x", "", "", "x", "", "", "x", ""];
    console.assert(winConditions("x"));

    console.log("testing win third column")
    Gameboard.myBoard = ["", "", "x", "", "", "x", "", "", "x"];
    console.assert(winConditions("x"));

    console.log("testing win first cross")
    Gameboard.myBoard = ["x", "", "", "", "x", "", "", "", "x"];
    console.assert(winConditions("x"));

    console.log("testing win second cross")
    Gameboard.myBoard = ["", "", "x", "", "x", "", "x", "", ""];
    console.assert(winConditions("x"));
}
testWinConditions();

// test play game flow
function testChangeIndex() {
    changeIndex(0);
    console.log(Gameboard.myBoard);
    changeIndex(5);
    console.log(Gameboard.myBoard);
    changeIndex(1);
    console.log(Gameboard.myBoard);
    changeIndex(6);
    changeIndex(2);
    console.log(Gameboard.myBoard);
}
testChangeIndex()
cleanGameboard();

