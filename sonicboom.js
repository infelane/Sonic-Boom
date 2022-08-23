var time; // time in ms

let v_wave = 0.1; // pix/ms
let v = v_wave*1.2; // speed
// let v = 0.1 // v_wave*.5; // speed

var black = 0
var white = 255

// over how many time to add a new point.
var t_step = 500 // ms

// Other variables
var x;
var y;
var l_points = []

var veh;

class Point {
    constructor(x0, y0, t0=0) {
        this.x0 = parseFloat(x0);
        this.y0 = parseFloat(y0);
        this.t0 = parseFloat(t0);
    }

    draw_circle() {
        fill(black);   
        stroke(white);
        let r = v_wave*(time-this.t0);
        let d = 2*r

        if (r > 0){
            return circle(this.x0, this.y0, d);
        }
    }

}


function setup() {
    createCanvas(1800, 900);
  
    y = height / 2;
    background(black);

    veh = new Vehicle()
  }
  


function draw() {
    background(black);

    time = millis();


    // When to update l_points
    if ((time / t_step) > l_points.length){

        l_points = []
        for (var i = 0; i < (time / t_step)+1; i++) {

            var t0 = i*t_step

    //         // l_points = [new Point(x, height / 2, time)]

            x = v * t0 // x = v*t
            // x = 0

            let point = new Point(x, y, t0)
            l_points.push(point)

            // max items
            if (i >= 100){
                break
            }
                
        }
    }

    for (var i = 0; i < l_points.length; i++) {
        var point = l_points[i];
        point.draw_circle()
        // circle0 = circle(x, y, time);
    }

    // current location
    x = v * time;
    veh.display(x, y);
}


class Vehicle{
    constructor(l=20){
        this.l = l
    }

    display(x, y) {
        fill(black);   
        stroke(white);
        triangle(x, y, x-this.l, y-this.l*.5, x-this.l, y+this.l*.5)
    }

}