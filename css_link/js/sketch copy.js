
let dugHoles = [];
let isDragging = false;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  noCursor(); // 隐藏鼠标光标
}

function draw() {
  background(130, 200, 255);
  noStroke();
  fill(110, 90, 90);
  rect(0, 125, windowWidth, windowHeight); // 绘制地面

  fill(130,200,255);
  noStroke();
  for (let hole of dugHoles) {
    circle(hole.x, hole.y, 20); // 绘制已挖的洞
  }

  // 在鼠标位置绘制铲子
  drawShovel(mouseX, mouseY);

  if (isDragging && isValidArea(mouseX, mouseY)) {
    dugHoles.push({ x: mouseX, y: mouseY });
  }
}

function drawShovel(x, y) {
  push(); // 保存当前的绘图样式设置
  translate(x, y); // 将绘图原点移至鼠标位置

  // 绘制铲柄
  fill(139, 69, 19); // 棕色，木柄的颜色
  rect(-2, 0, 4, 30); // 铲柄位置和尺寸

  // 绘制铲头
  fill(160, 160, 160); // 银色，铲头的颜色
  beginShape();
  vertex(-10, 0); // 左下角
  vertex(10, 0); // 右下角
  vertex(5, -20); // 右上角
  vertex(-5, -20); // 左上角
  endShape(CLOSE); // 完成铲头的绘制

  pop(); // 恢复之前的绘图样式设置
}

function mousePressed() {
  if (isValidArea(mouseX, mouseY)) {
    isDragging = true;
  }
}

function mouseReleased() {
  isDragging = false;
}

function isValidArea(x, y) {
  // 地平线上下15像素
  if (y >= 110 && y <= 140) return true;
  
  // 检查是否靠近已有的洞
  for (let hole of dugHoles) {
    if (dist(x, y, hole.x, hole.y) <= 15) {
      return true;
    }
  }
  
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
