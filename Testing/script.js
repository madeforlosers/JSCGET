import { JSCGET } from '../JSCGET/Main/JSCGET.js';
import { Sprite } from '../JSCGET/Sprites/Sprite.js';
//import { SpriteGroup } from '../JSCGET/Sprites/SpriteGroup.js';

var canvas = new JSCGET(500, 500);

canvas.assignCanvas("can");

var cal = document.getElementById("can");
cal.onmousemove = (e) => canvas.mouseMove(e);
cal.onmousedown = (e) => canvas.mouseDown(e);
cal.onmouseup = (e) => canvas.mouseUp(e);

var n = [...Array(4)].map(x => new Sprite(10, 10, 50, 50));
n.forEach(v => {
    v.pos.setX(Math.floor(Math.random() * (400 - v.bounds.getX())));
    v.pos.setY(Math.floor(Math.random() * (400 - v.bounds.getY())));
})


n.map(x => canvas.addSprite(x));

n.forEach(x => { let b = 1 + Math.floor(Math.random() * 10); x.velocity.setX(b); x.velocity.setY(b) })

document.getElementById("debug").innerHTML = n.map(x => x.id);
//var group = new SpriteGroup(...n)
function run() {
    n.map(x => x.bounceOffWall());
    //[01,02,03,12,13,23]
    n[0].resolveOverlap(n[1]);
    n[0].bounceOff(n[1]);
    n[0].resolveOverlap(n[2]);
    n[0].bounceOff(n[2]);
    n[0].resolveOverlap(n[3]);
    n[0].bounceOff(n[3]);
    n[1].resolveOverlap(n[2]);
    n[1].bounceOff(n[2]);
    n[1].resolveOverlap(n[3]);
    n[1].bounceOff(n[3]);
    n[2].resolveOverlap(n[3]);
    n[2].bounceOff(n[3]);

    // n.forEach(x=>{Math.round(x.velocity.getX())!=0?x.velocity.offsetX(-0.1 * Math.sign(x.velocity.getX())):x.velocity.setX(0),Math.round(x.velocity.getY())!=0?x.velocity.offsetY(-0.1 * Math.sign(x.velocity.getY())):x.velocity.setY(0)})


    canvas.wipeScreen();
    canvas.draw();
    debug.innerHTML = canvas.inputLog.isClicked();
    n.forEach(x => {
        let xy = canvas.inputLog.getCoords();
        if (x.pos.getX() < xy[0] && x.pos.getX() + x.bounds.getX() > xy[0] &&
            x.pos.getY() < xy[1] && x.pos.getY() + x.bounds.getY() > xy[1]) {
            x.color = "red";
        } else {
            x.color = "black";
        }
    })

    requestAnimationFrame(run);
};
run();

