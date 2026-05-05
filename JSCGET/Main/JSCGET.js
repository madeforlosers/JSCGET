import { JSCGETCanvas } from "./JSCGETCanvas.js";
import { SpriteHandler } from "../Sprites/SpriteHandler.js";
import { Sprite } from "../Sprites/Sprite.js";

/*  JSCGET alpha 0.1
*     ^-(JavaScript Canvas Game Enging Testing)
*
*   made by thesaturnangel 2026

*/

export class JSCGET {

    #canvas = null;
    #sprites = null;
    
    constructor(w, h) {
        this.#canvas = new JSCGETCanvas(w, h);
        this.#sprites = new SpriteHandler();
    }

    assignCanvas(canvas) {
        this.#canvas.assignCanvas(canvas);
    }

    draw() {
        this.#sprites.draw(this.#canvas);
    }

    wipeScreen() {
        this.#sprites.wipeScreen(this.#canvas);
    }

    addSprite(sprite) {
        sprite.ref = this.#canvas;
        this.#sprites.addSprite(sprite);
    }

    removeSprite(sprite) {
        this.#sprites.removeSprite(sprite);
    }

}