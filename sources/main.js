const game = new Game();
let mode;

function setup() {
    mode = 0;
    createCanvas(window.innerWidth, window.innerHeight);
    if (mode == 1) {
        game.setup();
    }
}


function draw() {
    // clear();
    if (mode == 0) {
        textSize(21);
        let welcomeText = "Welcome to ";
        let startText = "Press space to start the game!";
        textSize(30);
        let startTitle = "Surviving Web Dev Bootcamp. ";

        text(welcomeText + startTitle + startText, width / 3, height / 3, width / 3, height / 3);
    }
    if (mode == 1) {
        game.draw();
    }
    if (mode == 2) {
        //triggered by quests
    }
    if (mode == 3) {
        //game over + score screen 
    }
}



// CREATE FUNCTION FOR THE PLAYER TO JUMP UP 
function keyPressed() {
    if (keyCode === 32) {
        mode = 1; //set the mode inside of the game and use "game.mode"
    }
    if (keyCode === 38) {
        game.player.jump();
    }
    // if (keyCode === 13 && mode == 2){
    //     mode = 1
    // }
}