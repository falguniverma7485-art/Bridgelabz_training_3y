
"use strict";


console.log(score);

announce();

var score = 50;


function announce() {
    console.log("Game started!");
}

let status = "ready";

startGame();

function startGame() {
    console.log("Game status:", status);
}


const showScore = () => {
    console.log("Final score:", score);
};

showScore();
