const game = new Game();


function setup() {
    //console.log("setup");
    createCanvas(window.innerWidth, window.innerHeight);
    game.setup();
    mode = 0;
}

function draw() {
    // console.log ("draw");
    game.draw();
}

//CREATE FUNCTION FOR STARTING THE GAME ON THE SECOND BACKGROUND
//if (keyCode === 32){
//mode = 1;
//}


// CREATE FUNCTION FOR THE PLAYER TO JUMP UP 
function keyPressed() {
    if (keyCode === 38) {
        game.player.jump();
    }
}