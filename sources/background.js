class Background {
    constructor() {
        this.x = 0;
    }

    //DRAW BACKGORUND
    draw() {
        clear();

        this.x -= 1;
        image(bgGame, this.x, 0, width);
        image(bgGame, this.x + width, 0, width);

        if (this.x <= -width) {
            this.x = 0;

        }
    }
}

//CHANGING BACKGROUNDS THROUGH IMPLEMENTING DIFFERENT BACKGROUND CLASSES?
//     start-background ()
//     play-background ()
//     game-over-background()