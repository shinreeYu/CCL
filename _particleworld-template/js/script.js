
let NUM_OF_PARTICLES = 1; // Decide the initial number of particles.
let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(150, 180, 225);

  // update and display particles
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}

// This function is triggered every time the mouse is pressed
function mousePressed() {
  // generate particles at the mouse position
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.Num = round(random(6, 8));
    this.lineLen = 0;
    this.circleA = false;
    this.lineL = 0;
    this.transP = 225
    this.sca = random(0.5,1)
  }
  
  // methods (functions): particle's behaviors
  update() {
    if (this.lineLen <= 50) {
      this.lineLen++;
    } else {
      this.circleA = true;
    }
    if (this.lineLen == 51 && this.lineL <= 10) {
      this.lineL += 1;
    }
    if(this.lineL == 11){
      this.y++
    }
  }
    
  
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    circle(0, 0, 10);
    stroke(225,225,225);
    noFill();
    strokeWeight(1.5);
    
    if (this.circleA == true) {
      circle(0, 0, 70);
    }
    
    for (let i = 0; i <= this.Num; i++) {
      strokeWeight(5);
      push();
      scale(this.sca)
      rotate(2 * PI * i / this.Num);
      line(0, 0, this.lineLen, 0);
      strokeWeight(2);
      for (let a = 0; a <= this.Num; a++) {
        push();
        translate(40, 0);
        rotate(2 * PI * a / this.Num);
        line(0, 0, this.lineL, 0);
        pop();
      }
      pop();
    }
    pop();
  }
}

