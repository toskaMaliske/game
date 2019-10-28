//DESCRIBE QUESTS class
class Quests {
    constructor() {
        this.x = random(width, 0);

        this.y = random(0, height)

        this.width = 20;
        this.height = 20;
    }

    //DRAW QUESTS
    draw() {

        image(starImg, this.x, this.y, this.width, this.height);
        this.x -= 6
    }
}