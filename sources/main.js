const game = new Game();


function setup() {
    //console.log("setup");
    createCanvas(900, 304); //responsive behaviour is not working (window.innerHeight))?
    game.setup();
}

function draw() {
    // console.log ("draw");
    game.draw();
}

//CREATE FUNCTION FOR STARTING THE GAME ON THE SECOND BACKGROUND
//if (keyCode === 32){
//load the second background;
//}


// CREATE FUNCTION FOR THE PLAYER TO JUMP UP 
function keyPressed() {
    if (keyCode === 38) {
        game.player.jump();
    }
}