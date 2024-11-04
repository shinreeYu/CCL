let taxiInstance
let angle = 0

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");

  taxiInstance = new Taxi(100,100,1)//instnace/object/copy
}

function draw() {
  background(220);
  taxiInstance.display()
  angle++
}

class Taxi{
  //inside class we list new functions without the actual function'function'

  //'constructor' exist in every class
  //'constructor' contains all the properties
  constructor(startX,startY,s){
    //taxi's properties:
    this.x = startX
    this.y = startY
    this.scaleFactor = s
  }

  display(){
    push()
    translate(this.x,this.y)
    noStroke();
    fill(240, 220, 60);

    // base:
    rect(-50, -50, 100, 30);
    // top"
    rect(-25, -70, 50, 20);
    // wheel 1:
    this.drawWheel(-30, -15);
    // wheel 2:
    this.drawWheel( 30, -15);
    this.taxiGoing()


    // just to see origin 
    // of translation matrix:
    fill("red");
    circle(0, 0, 5); 
    pop()
  }
  drawWheel(x, y){
    push();
    translate(x, y);
    rotate(radians(angle))
    
      noStroke();
      fill(0);
      // circle(0,0,30);
      ellipse(0,0,28, 32);
    
    pop();
  }
  taxiGoing(){
    this.x+=(width-100)/(this.scaleFactor*100)
    if(this.x>=width){
      this.x=0
    }
  }
}