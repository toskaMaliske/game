const game = new Game();

function setup() {
    mode = 0;
    createCanvas(window.innerWidth, window.innerHeight);
    game.setup();
}


function draw() {
    game.draw();

}


// CREATE FUNCTION FOR THE PLAYER TO JUMP UP 
function keyPressed() {
    if (keyCode === 32) {
        mode = 1; //set the mode inside of the game and use "game.mode"
    }
    if (keyCode === 38) {
        game.player.jump();
    }

    // if (keyCode === 13) {
    //     console.log("enter");
    //     game.triggerQuiz();
    // }

    // if (mode == 2 && keyCode === 13) {
    //     console.log("enter");
    //     mode = 1;
    //     game.background.loop();
    // }
}