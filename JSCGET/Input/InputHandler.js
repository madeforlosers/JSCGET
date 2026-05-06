import { Coordinates } from "../Main/Coordinates.js";

export class InputHandler {
    #mouseXY = new Coordinates(0, 0);
    #mousedown = false;
    
    constructor() {
        this.#mouseXY = new Coordinates(0, 0);
        this.#mousedown = false;
    }
    mouseMove(e) {
        this.#mouseXY.setX(e.pageX);
        this.#mouseXY.setY(e.pageY);
    }

    mouseDown(e) {
        this.#mousedown = true;
    }
    mouseUp(e) {
        this.#mousedown = false;
    }
    getCoords() {
        return [this.#mouseXY.getX(), this.#mouseXY.getY()];
    }
    isClicked() {
        return this.#mousedown;
    }
}