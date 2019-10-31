class Trophies {
    constructor() {
        this.x = width;
        this.y = random(0, height);

        this.width = 50;
        this.height = 50;
    }


    //DRAW OBSTACLES
    draw() {
        image(trophyImg, this.x, this.y, this.width, this.height);
        this.x -= 3;
    }

}