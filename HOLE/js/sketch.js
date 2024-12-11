// let digOutX = []
// let digOutY = []
// let digCount = 0
// let digAble = false
// function setup() {
//   let canvas = createCanvas(500, 400);
//   canvas.parent("p5-canvas-container");
//   background(130,200,255)
//   noStroke()
//   fill(85,70,70)
//   rect(0,125,500,400)
// }

// function draw() {
//   digAble = false
//   for(let i = 0; i<=digCount; i++){
//     if(mouseX>=digOutX[i]-30 && mouseX<=digOutX[i]+30 
//       && mouseY>=digOutY[i]-30 && mouseY<=digOutY[i]+30)
//     {digAble = true}
//   }
//   if(mouseY>=125 && mouseY<=130){
//     digAble = true
//   }else(digAble = false)
//   if(mouseIsPressed == true && digAble == true){
//     fill(255)
//     circle(mouseX,mouseY,10)
//     digOutX[digCount]=mouseX
//     digOutY[digCount]=mouseY
//     digCount++
//   }
//   if(digAble==true){
//     stroke(255)
//     strokeWeight(5)
//       line(mouseX-50,mouseX+50)
//       line(mouseY-50,mouseY+50)
//   }
// }
let digOutX = [];
let digOutY = [];
let digCount = 0;
let digAble = false;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(130, 200, 255);
  noStroke();
  fill(85, 70, 70);
  rect(0, 125, 500, 275); // 地面部分
}

function draw() {
  digAble = false; // 每帧重新计算是否可以挖掘

  // 检查是否鼠标在已经挖过的洞范围内
  for (let i = 0; i <= digCount; i++) {
    if (
      mouseX >= digOutX[i] - 10 &&
      mouseX <= digOutX[i] + 10 &&
      mouseY >= digOutY[i] - 10 &&
      mouseY <= digOutY[i] + 10
    ) {
      digAble = true;
      break;
    }
  }

  // 如果鼠标靠近地面边界，也允许挖掘
  if (mouseY >= 125 && mouseY <= 130) {
    digAble = true;
  }

  // 如果鼠标被按下并且可以挖掘
  if (mouseIsPressed && digAble) {
    fill(255);
    circle(mouseX, mouseY, 10); // 挖一个洞
    digOutX[digCount] = mouseX; // 记录挖掘位置
    digOutY[digCount] = mouseY;
    digCount++;
  }

  // 如果挖掘允许，显示提示十字线
  if (digAble) {
    stroke(255);
    strokeWeight(2);
    //line(mouseX - 50, mouseY - 50, mouseX + 50, mouseY + 50); // 左上到右下
    //line(mouseX - 50, mouseY + 50, mouseX + 50, mouseY - 50); // 左下到右上
  }
}