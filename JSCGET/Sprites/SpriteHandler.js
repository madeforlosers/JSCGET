

export class SpriteHandler {
    
    #sprites = null;

    constructor() {
        this.#sprites = [];
    }

    addSprite(sprite) {
        this.#sprites.push(sprite);
    }

    removeSprite(sprite) {
        this.#sprites.splice(this.#sprites.findIndex(x => x.id == sprite.id), 1);
        delete window.sprite;
    }

    wipeScreen(ref) {
        ref.context.clearRect(0, 0, 1000, 1000);
        ref.context.reset();
    }

    draw(ref) {
        for (let sprite of this.#sprites) {
            sprite.pos.offsetX(sprite.velocity.getX());
            sprite.pos.offsetY(sprite.velocity.getY());
            sprite.draw();
        }
    }

    toString() {
        return this.#sprites.map(x => [x.id]);
    }
}