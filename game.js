class Game {
    constructor() {
        this.background = new Background();

        this.player = new Player();

        this.quests = [];

        this.obstacles = [];
    }


    // SETUP PLAYER (+ MODES?)
    setup() {
        // mode = 0;
        this.player.setup();
    }


    //DRAW BACKGROUND, PLAYER & OBSTACLE 
    draw() {
        // clear();
        if (mode == 0) {
            textSize(21);
            let welcomeText = "Welcome to ";
            let startText = "Press space to start the game!";
            textSize(30);
            let startTitle = "Web Dev Bootcamp 101";

            text(welcomeText + startTitle + startText, width / 3, height / 3, width / 3, height / 3);
        }
        if (mode == 1) {

            this.background.draw();
            this.player.draw();

            text("Score: " + this.player.score, width - 200, height - 800); //y-position not working?
            text("Lives: " + this.player.lives, width - 200, height - 750);
            fill(255, 255, 255);



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
                    this.triggerQuiz();
                }

            });


            if (frameCount > 60 && frameCount % 240 === 0) {
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
                    this.player.lives -= 1;
                    if (this.player.lives === 0) {
                        mode = 3;
                    }
                }

            });
        }

        //End of draw()=============================================================
    }



    playerCollision(item, player) {
        if (player.x + player.width < item.x || item.x + item.width < player.x) { //try to set half of the width so that collision is not occuring to early  
            return false;
        }
        if (player.y > item.y + item.height || item.y > player.y + player.height) {
            return false;
        }
        return true;
    }

    triggerQuiz() {
        input = createInput();
        input.position(20, 65);

        // inputName = createcreateElement("");
        // inputName.position(20, 20);

        button = createButton('submit');
        button.position(input.x + input.width, 65);
        button.mousePressed(this.triggerQuiz);

        greeting = createElement('h2', 'Solve a Javascript question to earn 2 score points');
        greeting.position(20, 5);
        fill(255, 255, 255);
        textAlign(CENTER);
        textSize(50);


        for (let i = 0; i < quiz.length; i++) {
            // inputName = quiz[i].prompt;
            let response = input.value();
            if (response == quiz[i].answer) {
                console.log("right!");
                this.player.score += 2;
            }
        }

    }



}
if (mode == 3) {
    createCanvas();
    background('#222222');
    textSize(30);
    let gameOverTitle = "Game Over";
    text(gameOverTitle, width / 3, height / 3, width / 3, height / 3);
    //game over + score screen 
}


//end of game()=============================================================    
}




// if (mode == 2) { //triggered by quests
//     console.log("mode: " + mode);
//     for (let i = 0; i < quiz.length; i++) {
//         let response = window.prompt(quiz[i].prompt);
//         if (response == quiz[i].answer) {
//             console.log("right!");
//             // this.player.score++;
//         }
//     }
// }



//==========================================================


//CHECK IF QUESTS WERE ANSWERED CORRECTLY, ADD POINTS TO SCORE / SUBTRACT LIVES