class Player {
    constructor() {
        // this.name = name;
        this.score = 0;
        this.lives = 3;
        this.x = 100;
        // this.y = 100;
        this.velocity = 0;
        this.gravity = 0.13;
        this.jumpCount = 0;

    }

    setup() {
        this.y = height - 170;
        // console.log(this.x, this.y);

        this.originalY = this.y

    }

    draw() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        this.height = pinkMonster.height * 4;
        this.width = pinkMonster.width * 4;

        if (this.y > this.originalY) {
            this.y = this.originalY;
            this.jumpCount = 0;
        }
        // console.log(this.width, this.height)
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