/// Teste increase score
function testIncreaseScore(player) {
    console.log(player.score);
    Gameboard.myBoard = [player.name, player.name, player.name, "", "", "", "", "", ""];
    gameFlow.increaseScore(gameFlow.currentPlayer);
    console.log(player.score);
}
testIncreaseScore(gameFlow.currentPlayer);

// test switch players
function testSwitchPlayer() {
    console.log("Testing swish player")
    console.assert(gameFlow.currentPlayer === gameFlow.player1);
    console.debug(gameFlow.currentPlayer);
    gameFlow.switchPlayer();
    console.assert(gameFlow.currentPlayer === gameFlow.player2);
    console.debug(gameFlow.currentPlayer);
    gameFlow.switchPlayer();
    console.assert(gameFlow.currentPlayer === gameFlow.player1);
    console.debug(gameFlow.currentPlayer);
}
testSwitchPlayer()

// test win conditions
function testWinConditions() {
    console.log("testing win first line")
    Gameboard.myBoard = ["x", "x", "x", "", "", "", "", "", ""];
    console.assert(gameFlow.winConditions("x"));

    console.log("testing win second line")
    Gameboard.myBoard = ["", "", "", "x", "x", "x", "", "", ""];
    console.assert(gameFlow.winConditions("x"));

    console.log("testing win third line")
    Gameboard.myBoard = ["", "", "", "", "", "", "x", "x", "x"];
    console.assert(gameFlow.winConditions("x"));

    console.log("testing win first column")
    Gameboard.myBoard = ["x", "", "", "x", "", "", "x", "", ""];
    console.assert(gameFlow.winConditions("x"));

    console.log("testing win second column")
    Gameboard.myBoard = ["", "x", "", "", "x", "", "", "x", ""];
    console.assert(gameFlow.winConditions("x"));

    console.log("testing win third column")
    Gameboard.myBoard = ["", "", "x", "", "", "x", "", "", "x"];
    console.assert(gameFlow.winConditions("x"));

    console.log("testing win first cross")
    Gameboard.myBoard = ["x", "", "", "", "x", "", "", "", "x"];
    console.assert(gameFlow.winConditions("x"));

    console.log("testing win second cross")
    Gameboard.myBoard = ["", "", "x", "", "x", "", "x", "", ""];
    console.assert(gameFlow.winConditions("x"));
}
testWinConditions();

// test play game flow
function testChangeIndex() {
    gameFlow.changeIndex(0);
    console.log(Gameboard.myBoard);
    gameFlow.changeIndex(5);
    console.log(Gameboard.myBoard);
    gameFlow.changeIndex(1);
    console.log(Gameboard.myBoard);
    gameFlow.changeIndex(6);
    console.log(Gameboard.myBoard);
    gameFlow.changeIndex(2);
    console.log(Gameboard.myBoard);
}
testChangeIndex()
Gameboard.cleanBoard();

//test game flow
function testGameFlow() {
    console.log("testing game flow")

    console.log("\ttesting the game starts with gameFlow.player1")
    console.assert(gameFlow.currentPlayer === gameFlow.player1, "current player is not player 1");

    gameFlow.playerFlow(0);

    console.log("\ttesting if player is switched to player2")
    console.assert(gameFlow.currentPlayer === gameFlow.player2, "current player is not player2");

    console.log("\ttesting the score is not updating")
    console.assert(gameFlow.currentPlayer.score === 0);

    gameFlow.playerFlow(4);
    gameFlow.playerFlow(1);
    gameFlow.playerFlow(5);
    gameFlow.playerFlow(2);

    console.log("\ttesting the score is updating")
    console.assert(gameFlow.currentPlayer.score === 2);    
};
testGameFlow();
Gameboard.cleanBoard();