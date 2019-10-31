class Game {
    constructor() {
        this.background = new Background();

        this.player = new Player();

        this.quests = [];

        this.obstacles = [];
    }


    // SETUP PLAYER (+ MODES?)
    setup() {
        this.player.setup();
    }


    //DRAW BACKGROUND, PLAYER & OBSTACLE 
    draw() {
        clear();
        if (mode == 0) {
            background('#222222');
            textAlign(CENTER);
            textSize(25);
            let welcomeText = "Welcome to ";
            text(welcomeText, width / 3, height / 3, width / 3, height / 3);

            textSize(30);
            let startTitle = "Web Dev Bootcamp 101 ";
            text(startTitle, width / 3, height / 2.5, width / 3, height / 2.5);

            let startText = "Press SPACE to start the game!";
            textSize(25);
            text(startText, width / 3, height / 2, width / 3, height / 2);
            fill("white");



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
                    this.quests.splice(index, 1);
                }

                if (this.playerCollision(quest, this.player)) {
                    console.log("Quest Collision");
                    this.quests.splice(index, 1);
                    this.player.score += 1;
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
                    console.log(this.player.x, this.player.y);
                    console.log(obstacle.x, obstacle.y);
                    this.obstacles.splice(index, 1);
                    this.player.lives -= 1;
                }

                if (this.player.lives === 0) {
                    mode = 3;
                }
                // }

            });


            //end of mode 1 ===========================================================            
        }

        if (mode == 3) {

            background('#222222');
            textAlign(CENTER);
            textSize(30);
            let gameOverTitle = "Game Over";
            text(gameOverTitle, width / 3, height / 3, width / 3, height / 3);

            let restart = "You're final score: ";
            text(restart + this.player.score, width / 3, height / 2, width / 3, height / 2);
            fill("white");

            // let restart = "Press SPACE to restart the game";
            // text(restart, width / 3, height / 2, width / 3, height / 2);
            // fill("white");

            keyPressed(); //restart the game


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


        // input = createSelect();
        input = createInput();
        input.position(20, 65);

        button = createButton('submit');
        button.position(input.x + input.width, 65);
        button.mousePressed(this.triggerQuiz);

        greeting = createElement('h2', 'Solve a Javascript question to earn 2 score points');
        gretting2 = createElement("h3", random(quiz.prompt));
        greeting.position(20, 5);
        fill(255, 255, 255);
        textAlign(CENTER);
        textSize(50);


        //     for (let i = 0; i < quiz.length; i++) {
        //         let response = input.value(quiz[i].prompt);
        //         if (response == quiz[i].answer) {
        //             this.player.score += 2;
        //         }
        // }
        button.mousePressed(clear(this.triggerQuiz));
    }



    //end of game()=============================================================    
}








//==========================================================


//CHECK IF QUESTS WERE ANSWERED CORRECTLY, ADD POINTS TO SCORE / SUBTRACT LIVES


// for (let i = 0; i < quiz.length; i++) {
//     let response = window.prompt(quiz[i].prompt);
//     if (response == quiz[i].answer) {
//         console.log("right!");
//         // this.player.score++;
//     }
// }