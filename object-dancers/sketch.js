/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new ShinreeDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class ShinreeDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.firstX = -25
    this.firstY = 25
    this.lastX = 25
    this.lastY = 25
    this.move = 0
    this.lastMove = true
    this.firstMove = true
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    //lastMove
    if(this.lastY<=-25&&this.firstY==25){
      this.lastMove = false
      this.move+=1

    }
    if(this.lastY>=25&&this.firstY==25){
      this.lastMove = true
      this.move+=1
    }
    if(
      this.lastMove == true &&
      this.move == 1
    ){
      this.lastX+=0.75
      this.lastY-=1
    }
    if(this.lastMove == false&&
      this.move == 2
    ){
      this.lastX-=0.75
      this.lastY+=1
    }
    //firstMove
    if(this.firstY<=-25&&this.lastY==25){
      this.firstMove = false
      this.move+=1
    }
    if(this.firstY>=25&&this.lastY==25){
      this.firstMove = true
      this.move+=1
    }
    if(this.firstMove == true
      &&this.move==3
    ){
      this.firstX-=0.75
      this.firstY-=1
    }
    if(this.firstMove == false
      &&this.move==4
    ){
      this.firstX+=0.75
      this.firstY+=1
    }
    if(this.move>=5)
    {this.move=0}

    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    stroke(255)
    strokeWeight(3)
    line(-25,-25,25,-25)
    strokeWeight(1)
    line(-15,-25,this.firstX,this.firstY)
    line(0,-25,0,25)
    line(15,-25,this.lastX,this.lastY)
    //first kitten
    push()
    translate(this.firstX,this.firstY)
    fill(255)
    scale(0.25)
    ellipse(0,0,100,90)
    noStroke()
    triangle(-50,-10,-10,-30,-35,-50)
    triangle(50,-10,10,-30,35,-50)
    fill(0)
    ellipse(-25,-3,8,10)
    ellipse(25,-3,8,10)
    fill(255)
    stroke(0)
    arc(-35,5,70,20,0,PI/10)
    arc(35,5,70,20,9*PI/10,PI)
    pop()
    //second kitten
    push()
    translate(0,25)
    fill(255)
    scale(0.25)
    ellipse(0,0,100,90)
    noStroke()
    triangle(-50,-10,-10,-30,-35,-50)
    triangle(50,-10,10,-30,35,-50)
    fill(0)
    ellipse(-25,-3,8,10)
    ellipse(25,-3,8,10)
    fill(255)
    stroke(0)
    arc(-35,5,70,20,0,PI/10)
    arc(35,5,70,20,9*PI/10,PI)
    pop()
    //third kitten
    push()
    translate(this.lastX,this.lastY)
    fill(255)
    scale(0.25)
    ellipse(0,0,100,90)
    noStroke()
    triangle(-50,-10,-10,-30,-35,-50)
    triangle(50,-10,10,-30,35,-50)
    fill(0)
    ellipse(-25,-3,8,10)
    ellipse(25,-3,8,10)
    fill(255)
    stroke(0)
    arc(-35,5,70,20,0,PI/10)
    arc(35,5,70,20,9*PI/10,PI)
    pop()

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/