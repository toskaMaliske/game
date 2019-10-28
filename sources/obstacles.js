class Obstacles {
    constructor() {
        this.x = width;

        this.y = height;

        this.width = 100;
        this.height = 50;
    }

    //PRELOAD OBSTACLE IMAGE 
    preload() {
        this.img = loadImage("/assets/tileset1.png")
    }


    //DRAW OBSTACLES
    draw() {
        Image(this.img, this.x, this.y, this.width, this.height);
        this.x -= 4;
    }

}