let confettis = [];
let numConfetti = 100;

let backgroundHue;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  
  backgroundHue = random(255);
  
}

function draw() {
  background(backgroundHue, 10, 190);
  
  confettis.push(new Confetti(width/2, height/2))
  
  for(let i = 0; i < confettis.length; i++){
    confettis[i].update();
    confettis[i].display();
  }
  
  if (confettis.length > 30) {
    let index = 0; 
    confettis.splice(index, 1);
  }
}

class Confetti{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    this.c = color(random(255), 255, 255);
    
    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);
    
  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    // Gravity affect the y speed:
    this.speedY += 0.1;
    // xspeed gets smaller and smaller:
    this.speedX *= 0.99
  }
  display(){

    
    push();
    translate(this.x, this.y);

      fill(this.c)
      noStroke();
      circle(0, 0, this.size);
    
    pop();
  }
}

function mousePressed(){
  for(let i = 0; i < numConfetti; i++){
    confettis.push(new Confetti(mouseX, mouseY))
  }
}
