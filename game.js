class Game {
    //   INITIALIZE BACKGROUND
    constructor() {
        this.background = new Background();
        // console.log("background constructor");

        this.player = new Player();

        this.quests = [];
    }


    // SETUP PLAYER (+ BACKGROUNDS?)
    setup() {
        this.player.setup();
    }


    //DRAW BACKGROUND, PLAYER & OBSTACLE 
    draw() {
        this.background.draw();
        this.player.draw();

        if (frameCount > 240 && frameCount % 120 === 0) {
            this.quests.push(new Quests());
            //console.log("create new obstacle");
        }

        this.quests.forEach((quest, index) => {
            console.log("----", quest)
            quest.draw();
            if (quest.x + quest.width <= 0) {
                this.quests.splice(index, 1);
            }
            // if (this.isCollision(quest, this.player)) {
            //trigger quest
            // }
        });
    }
    //=============================================================

}


//USE COLLISION OF OBSTACLES & PLAYER TO TRIGGER THE QUESTS

//CHECK IF QUESTS WERE ANSWERED CORRECTLY, ADD POINTS TO SCORE / SUBTRACT LIVES

// INITIALIZE DIFFERENT BACKGROUNDS? => /DECLARE LEVEL VERIABEL 