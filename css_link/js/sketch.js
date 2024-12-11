let dugHoles = [];
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let detectX = 0;
let detectY = 0;

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(130, 200, 255);
  noStroke();
  fill(110, 90, 90);
  rect(0, 125, windowWidth, windowHeight);//draw the background

  
}