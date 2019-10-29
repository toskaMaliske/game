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

        if (frameCount > 480 && frameCount % 240 === 0) {
            this.quests.push(new Quests());
            //console.log("create new quests");
        }

        this.quests.forEach((quest, index) => {
            // console.log("----", quest)
            quest.draw();
            if (quest.x + quest.width <= 0) {
                this.quests.splice(index, 1);
            }


            //USE COLLISION OF OBSTACLES & PLAYER TO TRIGGER THE QUESTS

            // if (this.isCollision(quest, this.player)) {
            //trigger quest
            //if (quest answered correct){this.player.score++};
            // }


        });
        if (frameCount > 240 && frameCount % 120 === 0) {
            this.obstacles.push(new Obstacles());
            //console.log("create new obstacle");
        }

        this.obstacles.forEach((obstacle, index) => {
            console.log("----", obstacle)
            obstacle.draw();
            if (obstacle.x + obstacle.width <= 1) {
                this.obstacles.splice(index, 1);
            }
        });
    }

    //=============================================================

}




//CHECK IF QUESTS WERE ANSWERED CORRECTLY, ADD POINTS TO SCORE / SUBTRACT LIVES

// INITIALIZE DIFFERENT BACKGROUNDS? => /DECLARE LEVEL VERIABEL 