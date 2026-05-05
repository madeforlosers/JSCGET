import { Coordinates } from "./Coordinates.js";

export class JSCGETCanvas {
    
    constructor(w, h) {
        this.bounds = new Coordinates(w, h);
    }

    assignCanvas(id) {
        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.bounds.getX();
        this.canvas.height = this.bounds.getY();
        return;
    }

}