class Game {
    constructor() {
        this.background = new Background();

        this.player = new Player();

        this.quests = [];

        this.obstacles = [];
    }


    // SETUP PLAYER (+ BACKGROUNDS?)
    setup() {
        this.player.setup();
    }


    //DRAW BACKGROUND, PLAYER & OBSTACLE 
    draw() {
        this.background.draw();
        this.player.draw();

        text("Score: ", +this.player.score, 10, 500); //y-position not working?
        fill(255, 255, 255);

        // if (Math.random(frameCount > 480)){
        if (frameCount > 480 && frameCount % 240 === 0) {
            this.quests.push(new Quests());
            //console.log("create new quests");
        }

        this.quests.forEach((quest, index) => {
            // console.log("----", quest)
            quest.draw();
            if (quest.x + quest.width <= 1 && quest.y + quest.height >= 1) {
                // if (quest.x - width <= 0 || quest.x + width >= width || quest.y - height <= 0 || quest.y + height >= height) {
                this.quests.splice(index, 1);
            }
            if (this.playerCollision(quest, this.player)) {
                console.log("Quest Collision");
                noLoop();
            }

        });


        if (frameCount > 240 && frameCount % 120 === 0) {
            this.obstacles.push(new Obstacles());
            //console.log("create new obstacle");
        }

        this.obstacles.forEach((obstacle, index) => {
            // console.log("----", obstacle)
            obstacle.draw();
            if (obstacle.x + obstacle.width <= 1 && obstacle.y + obstacle.height >= 1) { //bottom (max-y not working!)
                this.obstacles.splice(index, 1);
            }
            if (this.playerCollision(obstacle, this.player)) {
                console.log("Obstacle collision");
                noLoop();
            }
        });
    }


    playerCollision(item, player) {
        if (player.x + player.width <= item.x || item.x + player.width <= player.x) {
            return false;
        }
        if (player.y > item.y + item.height || item.y > player.y + player.height) {
            return false;
        }
        return true;

    }


    //=============================================================
}



//TRIGGER QUESTS

//CHECK IF QUESTS WERE ANSWERED CORRECTLY, ADD POINTS TO SCORE / SUBTRACT LIVES

//INITIALIZE DIFFERENT BACKGROUNDS? => /DECLARE LEVEL VERIABEL 