class Background {
    constructor() {
        this.x = 0;
    }

    //DRAW BACKGORUND
    draw() {
        this.x -= 2;
        image(bgGame, this.x, 0, width, height);
        image(bgGame, this.x + width, 0, width, height);

        if (this.x <= -width) {
            this.x = 0;
        }
    }
}