export class SpriteGroup {
    sprites = [];
    constructor(...sprites) {
        this.sprites = sprites;
    }
    constructor(n) {

    }
    bounceOff(spritegroup) {
        let list = [];
        for (let i = 0; i < this.sprites.length; i++) {
            for (let j = 0; j < spritegroup.sprites.length; j++) {
                if (!list.includes([i, j])) {
                    list.push([i, j]);
                }
            }
        }
        for (n of list) {
            this.sprites[n[0]].bounceOff(spritegroup.sprites[n[1]])
        }
    }
}