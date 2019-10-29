let mode;

class Background {
    constructor() {
        this.x = 0;
    }

    //DRAW BACKGORUND
    draw() {
        if (mode = 0) {
            background('rgba(169, 169, 169, 0.25');
            text("Type in your name and press enter to start", 20, 40);
            console.log(mode);
        } else if (mode = 1) {
            clear();

            this.x -= 1;
            image(bgGame, this.x, 0, width, height);
            image(bgGame, this.x + width, 0, width, height);

            if (this.x <= -width) {
                this.x = 0;

            }
        } else if (mode = 2) {
            background('rgba(169, 169, 169, 0.25');

        }
    }
}

//CHANGING BACKGROUNDS THROUGH IMPLEMENTING DIFFERENT BACKGROUND CLASSES?
//     start-background ()
//     play-background ()
//     game-over-background()