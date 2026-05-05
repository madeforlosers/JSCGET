export class SpriteIDCounter {
    
    static spriteCount = 0;

    static assign() {
        return SpriteIDCounter.spriteCount++;
    }
}