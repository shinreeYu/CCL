let dugHoles = [];
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let detectX = 0;
let detectY = 0;
let trees = [];
let flowers = [];
let grassPatches = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  noCursor(); 
  for (let i = 0; i < 5; i++) {
    trees.push({ x: random(50, windowWidth - 50), y: random(60, 110) });
  }
  for (let i = 0; i < 20; i++) {
    flowers.push({ x: random(10, windowWidth - 10), y: random(140, height - 10) });
  }
  for (let i = 0; i < 50; i++) {
    grassPatches.push({ x: random(0, windowWidth), y: random(125, height) });
  }
}

function draw() {
  background(130, 200, 255);
  noStroke();
  fill(110, 90, 90);
  rect(0, 125, windowWidth, windowHeight); 
  drawMountain();
  drawTreesAndFlowers();
  fill(130, 200, 255); 
  noStroke();
  for (let hole of dugHoles) {
    circle(hole.x, hole.y, 20);
  }
  drawShovel(mouseX, mouseY + 20); 
}

function drawShovel(x, y) {
  push();
  translate(x, y); 
  fill(139, 69, 19); 
  rect(-3, 0, 6, 40); 
  if (isDragging) {
    fill(120, 80, 40); 
  } else {
    fill(160, 160, 160); 
  }
  beginShape();
  vertex(-10, 0); 
  vertex(10, 0); 
  vertex(6, -20); 
  vertex(-6, -20); 
  endShape(CLOSE);
  pop();
}

function mousePressed() {
  if (mouseY >= 115 && mouseY <= 135 || isNearExistingHole(mouseX, mouseY)) {
    dragStartX = mouseX;
    dragStartY = mouseY;
    detectX = mouseX;
    detectY = mouseY;
    isDragging = true;
  }
}

function mouseDragged() {
  if (isDragging) {
    detectX = mouseX;
    detectY = mouseY;
  }
}

function mouseReleased() {
  if (isDragging) {
    if (dist(dragStartX, dragStartY, detectX, detectY) > 10) {
      if (dragStartY >= 115 && dragStartY <= 135 || isNearExistingHole(dragStartX, dragStartY)) {
        dugHoles.push({ x: dragStartX, y: dragStartY });
      } else if (detectY >= 115) {
        dugHoles.push({ x: dragStartX, y: dragStartY });
      }
    }
    isDragging = false;
  }
}

function isNearExistingHole(x, y) {
  for (let hole of dugHoles) {
    if (dist(x, y, hole.x, hole.y) < 30) {
      return true;
    }
  }
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawMountain() {
  fill(80, 70, 60); 
  beginShape();
  vertex(windowWidth / 2 - 150, 125); 
  vertex(windowWidth / 2 - 50, 20); 
  vertex(windowWidth / 2 - 30, 50); 
  vertex(windowWidth / 2, 30); 
  vertex(windowWidth / 2 + 150, 125); 
  endShape(CLOSE);
}

function drawTreesAndFlowers() {
  
  for (let tree of trees) {
    drawTree(tree.x, tree.y);
  }

  
  for (let flower of flowers) {
    drawFlower(flower.x, flower.y);
  }

  
  for (let grass of grassPatches) {
    drawGrass(grass.x, grass.y);
  }
}

function drawTree(x, y) {
  fill(139, 69, 19); 
  rect(x - 5, y, 10, 20); 
  fill(34, 139, 34);
  ellipse(x, y, 30, 30);
}

function drawFlower(x, y) {
  fill(255, 0, 0);
  ellipse(x, y, 5, 5); 
  fill(255, 223, 0); 
  circle(x, y, 3);
}

function drawGrass(x, y) {
  stroke(34, 139, 34);
  strokeWeight(2);
  line(x, y, x, y - 10); 
  noStroke();
}















  

