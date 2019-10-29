class Player {
    constructor() {
        // this.name = name;
        this.score = 0;
        this.lives = 3;
        this.x = 100;
        this.velocity = 0;
        this.gravity = 0.15;
        this.jumpCount = 0;
    }

    setup() {
        //console.log(this.img.width, this.img.height);
        this.y = height - 170;

        this.originalY = this.y

        this.height = pinkMonster.height * 4;
        this.width = pinkMonster.width * 3;
    }

    draw() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > this.originalY) {
            this.y = this.originalY;
            this.jumpCount = 0;
        }

        image(pinkMonster, this.x, this.y, this.width, this.height);
    }

    //JUMP FUNCTIONS

    jump() {
        //console.log("jump");
        if (this.jumpCount < 2) {
            this.velocity = -9;
            this.jumpCount++;
        }
    }



    //TRACK LIFE- & SCORE-POINTS
}