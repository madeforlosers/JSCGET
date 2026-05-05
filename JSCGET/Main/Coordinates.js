export class Coordinates {
    #x = 0;
    #y = 0;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    setX(x) {
        this.#x = x;
    }

    setY(y) {
        this.#y = y;
    }

    offsetX(x) {
        this.#x += x;
    }

    offsetY(y) {
        this.#y += y;
    }

    reverseX() {
        this.#x *= -1;
    }

    reverseY() {
        this.#y *= -1;
    }
}