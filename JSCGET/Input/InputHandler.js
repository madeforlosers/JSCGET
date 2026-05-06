export class InputHandler {
    #mouseXY = [];
    #mousedown = false;
    constructor() {
        this.#mouseXY = [0, 0];
        this.#mousedown = false;
    }
    mouseMove(e) {
        this.#mouseXY = [e.pageX, e.pageY];
    }
    mouseDown(e) {
        this.#mousedown = true;
    }
    mouseUp(e) {
        this.#mousedown = false;
    }
    getCoords() {
        return this.#mouseXY;
    }
    isClicked() {
        return this.#mousedown;
    }
}