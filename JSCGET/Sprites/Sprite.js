import { Coordinates } from "../Main/Coordinates.js";
import { SpriteIDCounter } from "./SpriteIDCounter.js";
export class Sprite {

    ref = null;

    constructor(x, y, w, h, mass = 1) {
        this.mass = mass;
        this.id = SpriteIDCounter.assign();
        this.bounds = new Coordinates(w, h);
        this.pos = new Coordinates(x, y);
        this.velocity = new Coordinates(0, 0);
    }

    isPastWall() {
        if (this.pos.getY() < 1) return 1; // top
        if (this.pos.getX() < 1) return 4; // left
        if (this.pos.getY() + this.bounds.getY() > 500) return 3; // bottom
        if (this.pos.getX() + this.bounds.getX() > 500) return 2; // right
        return 0;
    }

    resolveOverlap(other) {
        let dx = (this.pos.getX() + this.bounds.getX() / 2) - (other.pos.getX() + other.bounds.getX() / 2);
        let dy = (this.pos.getY() + this.bounds.getY() / 2) - (other.pos.getY() + other.bounds.getY() / 2);

        let combinedHalfWidths = (this.bounds.getX() + other.bounds.getX()) / 2;
        let combinedHalfHeights = (this.bounds.getY() + other.bounds.getY()) / 2;

        if (Math.abs(dx) < combinedHalfWidths && Math.abs(dy) < combinedHalfHeights) {

            let overlapX = combinedHalfWidths - Math.abs(dx);
            let overlapY = combinedHalfHeights - Math.abs(dy);

            if (overlapX < overlapY) {
                this.pos.offsetX((dx > 0) ? overlapX : -overlapX);
            } else {
                this.pos.offsetY((dy > 0) ? overlapY : -overlapY);
            }
        }
    }

    bounceOffWall() {
        let n = this.isPastWall();
        if (n) {
            if (n == 1 || n == 3) {
                this.pos.setY(n == 1 ? 0 : 500 - this.bounds.getY());
                this.velocity.reverseY();
            } else {
                this.pos.setX(n == 4 ? 0 : 500 - this.bounds.getX());
                this.velocity.reverseX();
            }

        }
    }

    bounceOff(sprite) {
        if (this.getTouchingSide(sprite) || this.isTouching(sprite)) {
            let v1 = this.velocity.getX(),
                n1 = this.velocity.getY(),
                v2 = sprite.velocity.getX(),
                n2 = sprite.velocity.getY(),
                m1 = this.mass,
                m2 = sprite.mass;
            let x1, x2, y1, y2;
            if (this.getTouchingSide(sprite) == 1 || this.getTouchingSide(sprite) == 3) {
                this.velocity.setY(Math.floor(((m1 - m2) / (m1 + m2)) * n1 + ((2 * m2) / (m2 + m1)) * n2));
                sprite.velocity.setY(Math.floor(((2 * m1) / (m1 + m2)) * n1 + ((m2 - m1) / (m1 + m2)) * n2));
            } else {
                this.velocity.setX(Math.floor(((m1 - m2) / (m1 + m2)) * v1 + ((2 * m2) / (m2 + m1)) * v2));
                sprite.velocity.setX(Math.floor(((2 * m1) / (m1 + m2)) * v1 + ((m2 - m1) / (m1 + m2)) * v2));
            }
        }
    }

    isTouching(sprite) {
        return (this.pos.getX() < sprite.pos.getX() + sprite.bounds.getX() &&
            this.pos.getX() + this.bounds.getX() > sprite.pos.getX() &&
            this.pos.getY() < sprite.pos.getY() + sprite.bounds.getY() &&
            this.pos.getY() + this.bounds.getY() > sprite.pos.getY());
    }

    getTouchingSide(sprite) {
        const t7 = this.pos.getY() + this.bounds.getY(),
            r1 = this.pos.getX() + this.bounds.getX(),
            b6 = sprite.pos.getY() + sprite.bounds.getY(),
            r2 = sprite.pos.getX() + sprite.bounds.getX(),
            buffer = 3;

        // top
        if (Math.abs(this.pos.getY() - b6) < buffer && r1 > sprite.pos.getX() && this.pos.getX() < r2) return 1;
        // right
        if (Math.abs(r1 - sprite.pos.getX()) < buffer && t7 > sprite.pos.getY() && this.pos.getY() < b6) return 2;
        // bottom
        if (Math.abs(t7 - sprite.pos.getY()) < buffer && r1 > sprite.pos.getX() && this.pos.getX() < r2) return 3;
        // left
        if (Math.abs(this.pos.getX() - r2) < buffer && t7 > sprite.pos.getY() && this.pos.getY() < b6) return 4;

        return 0; // not touching
    }

    draw() {
        this.ref.context.fillRect(this.pos.getX(), this.pos.getY(), this.bounds.getX(), this.bounds.getY());
    }
}