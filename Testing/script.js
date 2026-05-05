import { JSCGET } from '../JSCGET/Main/JSCGET.js';
import { Sprite } from '../JSCGET/Sprites/Sprite.js';

var canvas = new JSCGET(500, 500);

canvas.assignCanvas("can");

var object = new Sprite(10, 10, 100, 100);
var object2 = new Sprite(100, 10, 100, 100);
canvas.addSprite(object);

canvas.addSprite(object2);


object.pos.setX(Math.floor(Math.random() * (400 - object.bounds.getX())));
object2.pos.setX(Math.floor(Math.random() * (400 - object.bounds.getX())));
object.pos.setY(Math.floor(Math.random() * (400 - object.bounds.getY())));
object2.pos.setY(Math.floor(Math.random() * (400 - object.bounds.getY())));

object.velocity.setX(5);
object.velocity.setY(5);
object2.velocity.setX(2);
object2.velocity.setY(2);

function run() {
    object.bounceOffWall();
    object2.bounceOffWall();

    object.resolveOverlap(object2);

    object.bounceOff(object2);

    canvas.wipeScreen();
    canvas.draw();
    
    requestAnimationFrame(run);
};
run();
