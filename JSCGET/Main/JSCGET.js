import { JSCGETCanvas } from "./JSCGETCanvas.js";
import { SpriteHandler } from "../Sprites/SpriteHandler.js";
import { Sprite } from "../Sprites/Sprite.js";
import { InputHandler } from "../Input/InputHandler.js";

/*  JSCGET alpha 0.3
*     ^-(JavaScript Canvas Game Enging Testing)
*
*   made by thesaturnangel 2026

*/

export class JSCGET {

    #canvas = null;
    #sprites = null;
    inputLog = null;
    constructor(w, h) {
        this.inputLog = new InputHandler();
        this.#canvas = new JSCGETCanvas(w, h);
        this.#sprites = new SpriteHandler();
    }

    assignCanvas(canvas) {
        this.#canvas.assignCanvas(canvas);
    }

    draw() {
        this.#sprites.draw(this.#canvas);
    }

    mouseMove(e) {
        this.inputLog.mouseMove(e);
    }
    mouseDown(e) {
        this.inputLog.mouseDown(e);
    }
    mouseUp(e) {
        this.inputLog.mouseUp(e);
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