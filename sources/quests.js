//DESCRIBE QUESTS class
class Quests {
    constructor() {
        this.x = random(width, height);
        this.y = random(0, height);

        this.width = 30;
        this.height = 30;
    }

    //DRAW QUESTS
    draw() {

        image(starImg, this.x, this.y, this.width, this.height);
        this.x -= 4
    }
}