
function preload(){
  appleIMG = loadImage("assets/apple.png")
}
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  apple = new Apple(appleIMG);
  background(220)
}

function draw() {
  //noCursor()
  //background(220)
  //
  apple.update();
  apple.display();
}


class Apple{
  constructor(img){
    this.x = 0;
    this.y = 0;
    this.img = img;
    this.size = 40;
  }
  update(){
    this.x=mouseX
    this.y=mouseY
  }
  display(){
    push();
    translate(this.x, this.y);
    scale(0.2)
    image(this.img,0,0,100,200)
    pop()
  }
}









