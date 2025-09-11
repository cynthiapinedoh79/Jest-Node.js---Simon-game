let game = {
    choices: ["button1", "button2", "button3", "button4"],
    playMoves: [],
    currentGame: [],
    score: 0,
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
    addTurn();
}

function addTurn() {
    game.currentGame.push(game.choices[Math.floor(Math.random() * game.choices.length)]);
    game.playerMoves = [];
    //showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, };