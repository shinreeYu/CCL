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
  noCursor(); // 隐藏鼠标光标

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
  rect(0, 125, windowWidth, windowHeight); // 绘制地面

  drawMountain();
  drawTreesAndFlowers();
  // 绘制挖掘的洞
  fill(130, 200, 255); // 挖掘洞的颜色，与背景一致
  noStroke();
  for (let hole of dugHoles) {
    circle(hole.x, hole.y, 20); // 绘制圆形洞
  }

  drawShovel(mouseX, mouseY + 20); // 在鼠标位置显示铲子，使鼠标和铲子的金属部分对齐
}

function drawShovel(x, y) {
  push();
  translate(x, y); // 让铲子的金属部分与鼠标对齐

  // 绘制铲柄
  fill(139, 69, 19); // 棕色，木柄的颜色
  rect(-3, 0, 6, 40); // 铲柄

  // 绘制铲头
  if (isDragging) {
    fill(120, 80, 40); // 棕色，表示铲子带土
  } else {
    fill(160, 160, 160); // 灰色，铲头的颜色
  }
  beginShape();
  vertex(-10, 0); // 左下角
  vertex(10, 0); // 右下角
  vertex(6, -20); // 右上角
  vertex(-6, -20); // 左上角
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
  fill(80, 70, 60); // 山体颜色
  beginShape();
  vertex(windowWidth / 2 - 150, 125); // 山脚左侧
  vertex(windowWidth / 2 - 50, 20); // 大拇指顶部
  vertex(windowWidth / 2 - 30, 50); // 拇指下侧
  vertex(windowWidth / 2, 30); // 山脊
  vertex(windowWidth / 2 + 150, 125); // 山脚右侧
  endShape(CLOSE);
}

function drawTreesAndFlowers() {
  // 绘制树
  for (let tree of trees) {
    drawTree(tree.x, tree.y);
  }

  // 绘制花朵
  for (let flower of flowers) {
    drawFlower(flower.x, flower.y);
  }

  // 绘制草地
  for (let grass of grassPatches) {
    drawGrass(grass.x, grass.y);
  }
}

function drawTree(x, y) {
  fill(139, 69, 19); // 树干颜色
  rect(x - 5, y, 10, 20); // 树干
  fill(34, 139, 34); // 树叶颜色
  ellipse(x, y, 30, 30); // 树冠
}

function drawFlower(x, y) {
  fill(255, 0, 0); // 花朵颜色
  ellipse(x, y, 5, 5); // 花瓣
  fill(255, 223, 0); // 花蕊
  circle(x, y, 3);
}

function drawGrass(x, y) {
  stroke(34, 139, 34); // 草的颜色
  strokeWeight(2);
  line(x, y, x, y - 10); // 草的形状
  noStroke();
}















  

