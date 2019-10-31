const game = new Game();

function setup() {
    mode = 0;
    createCanvas(900, 500);
    game.setup();
}

function draw() {
    game.draw();

}


// CREATE FUNCTION FOR THE PLAYER TO JUMP UP 
function keyPressed() {
    if (keyCode === 32) {
        mode = 1;
    }
    if (keyCode === 38) {
        game.player.jump();
    }
    if (keyCode === 13) {
        mode = 1; //not working
    }

    // if (mode == 2 && keyCode === 13) {
    //     console.log("enter");
    //     mode = 1;
    //     game.background.loop();
    // }
}