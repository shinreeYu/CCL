let loopNum;
let radiumRd = [];
let planetColorR = [];
let planetColorG = [];
let planetColorB = [];
let planetDia = [];
let treeHeight = [0, 0, 0, 0, 0];
let mouseNum = [];
let Xmin = [];
let Xmax = [];
let Ymin = [];
let Ymax = [];
let leafSize = [10, 10, 10, 10, 10];
let leafsize = [5, 5, 5, 5, 5];
let planetTp = [225, 225, 225, 225, 225];
let leafGrow = [true,true,true,true,true]
let leafCenterX = [0,0,0,0,0]
let leafCenterY = [0,0,0,0,0]
let leafControlUp = [0,0,0,0,0]
let leafControlDown = [0,0,0,0,0]
let leafControlRight = [0,0,0,0,0]
let leafControlLeft = [0,0,0,0,0]
let transprc = [200,200]

function setup() {
  loopNum = random(3, 5);
  createCanvas(800, 500);
  for (i = 1; i <= loopNum; i++) {
    planetColorR[i - 1] = random(175, 225);
    planetColorG[i - 1] = random(100, 200);
    planetColorB[i - 1] = random(100, 200);
    radiumRd[i - 1] = random(0, 2 * PI);
    planetDia[i - 1] = random(50, 65);
  }
}

function draw() {
  
  noStroke();
  // createCanvas(800, 500);
  noFill();
  stroke(100, 50, 180);
  push();
  translate(width / 2, height / 2);
  //create the track of stars
  for (i = 1; i <= loopNum; i++) {
    circle(0, 0, 50 + (430 / loopNum) * i);
  }
  background(50, 25, 90, 235);
  noStroke();
  fill(255, 255, 100,transprc[0]);
  text('Dear scientist, good luck with your laser and observe carefully!',-175,-150)
  // for(i=0;i<=20000000;i++){
  //   transprc[0]-=0.0000005
  // }
  fill(255,255,100,20)
  //create the sun&sunshine
  for (i = 1; i <= 15; i++) {
    circle(0, 0, 10 + 3 * i);
  }
  //create planets at random location, size and color
  for (i = 1; i <= loopNum; i++) {
    diaCircle = 50 + (430 / loopNum) * i;
    fill(
      planetColorR[i - 1],
      planetColorG[i - 1],
      planetColorB[i - 1],
      planetTp[i - 1]
    );
    circle(
      (diaCircle * sin(radiumRd[i - 1])) / 2,
      (diaCircle * cos(radiumRd[i - 1])) / 2,
      planetDia[i - 1]
    );
    strokeWeight(15);
    stroke(100, 50, 50);
    point(
      ((diaCircle + planetDia[i - 1] - 5) * sin(radiumRd[i - 1])) / 2,
      ((diaCircle + planetDia[i - 1] - 5) * cos(radiumRd[i - 1])) / 2
    );
    noStroke();
  }
  
  //
  if (mouseNum.length != 0) {
    for (i = 0; i <= mouseNum.length - 1; i++) {
      strokeWeight(8);
      stroke(100, 80, 50, planetTp[mouseNum[i] - 1]);
      line(
        ((50 +(430 / round(loopNum)) * mouseNum[i] +planetDia[mouseNum[i] - 1] -5) *
          sin(radiumRd[mouseNum[i] - 1])) /2,
        ((50 +(430 / round(loopNum)) * mouseNum[i] +planetDia[mouseNum[i] - 1] -5) *
          cos(radiumRd[mouseNum[i] - 1])) /2,
        ((50 +(430 / round(loopNum)) * mouseNum[i] +planetDia[mouseNum[i] - 1] +treeHeight[i]) *
          sin(radiumRd[mouseNum[i] - 1])) /2,
        ((50 +(430 / round(loopNum)) * mouseNum[i] +planetDia[mouseNum[i] - 1] +treeHeight[i]) *
          cos(radiumRd[mouseNum[i] - 1])) /2
      );
      //tree growing
      if (treeHeight[i] <= 150 - 25 * i) {
        treeHeight[i] += random(0, 2);
      } else {
         noStroke()
              fill(100,150,100,planetTp[mouseNum[i]-1])
        leafCenterX[i]=((50 + (430 / round(loopNum)) * mouseNum[i] + planetDia[mouseNum[i] - 1] + 150-25*i) *
                sin(radiumRd[mouseNum[i] - 1])) /2
        leafCenterY[i]=((50 + (430 / round(loopNum)) * mouseNum[i] + planetDia[mouseNum[i] - 1] + 150-25*i) *
                cos(radiumRd[mouseNum[i] - 1])) /2
              ellipse(leafCenterX[i],leafCenterY[i],
                      leafSize[i],leafsize[i])
        ellipse(leafCenterX[i],leafCenterY[i]-5*leafControlUp[i],10+5*leafControlUp[i],10+10*leafControlUp[i])
    ellipse(leafCenterX[i],leafCenterY[i]-5*leafControlDown[i],10+5*leafControlDown[i],10+10*leafControlDown[i])
        ellipse(leafCenterX[i]+5*leafControlRight[i],leafCenterY[i],10-10*leafControlRight[i],10-5*leafControlRight[i])
        ellipse(leafCenterX[i]+5*leafControlLeft[i],leafCenterY[i],10-10*leafControlLeft[i],10-5*leafControlLeft[i])
                if(leafSize[i]<=100){
          if(mouseX >=
            ((50 +(430 / round(loopNum)) * mouseNum[i] +
              planetDia[mouseNum[i] - 1] +150 -25 * i) *
              sin(radiumRd[mouseNum[i] - 1])) /2 -50 +width / 2 &&
          mouseX <=
            ((50 +(430 / round(loopNum)) * mouseNum[i] +
              planetDia[mouseNum[i] - 1] +150 -25 * i) *
              sin(radiumRd[mouseNum[i] - 1])) /2 +50 +width / 2 &&
          mouseY >=
            ((50 +(430 / round(loopNum)) * mouseNum[i] +
              planetDia[mouseNum[i] - 1] +150 -25 * i) *
              cos(radiumRd[mouseNum[i] - 1])) /2 -50 +height / 2 &&
          mouseY <=
            ((50 +(430 / round(loopNum)) * mouseNum[i] +
              planetDia[mouseNum[i] - 1] +150 -25 * i) *
              cos(radiumRd[mouseNum[i] - 1])) /2 +50 +height / 2 &&
          mouseIsPressed == true
                  ){leafGrow[i]= false}
          else if(leafGrow[i] == true){leafSize[i]+=0.1
                    leafsize[i]+=0.06}}
        fill(255,255,100,transprc[1])
          if(leafGrow[i]==false){
            transprc[0]=0
       text('Great! What about trying the letters of key?',-150,-100)
  
  
            if(key=='w' && keyIsPressed == true){
              leafControlUp[i]+=1
          }
          if(keyIsPressed == true && key=='s'){
            leafControlDown[i]-=1
          }
          if(keyIsPressed == true && key=='d'){
            leafControlRight[i]+=1
          }
          if(keyIsPressed == true && key=='a'){
            leafControlLeft[i]-=1
          }}
            if(leafControlUp[i]>=10||leafControlDown[i]<=-10||leafControlRight[i]>=10||leafControlLeft[i]<=-10||leafSize[i]>=100){planetTp[mouseNum[i]-1]-=10
                planetDia[mouseNum[i]-1]+=5
                                                                                                               transprc[1]=transprc[1]-200/loopNum}}
            noStroke();
      //after tree finish growing, mouse changes when close to leaf
        if (
          mouseX >=
            ((50 +(430 / round(loopNum)) * mouseNum[i] +
              planetDia[mouseNum[i] - 1] +150 -25 * i) *
              sin(radiumRd[mouseNum[i] - 1])) /2 -50 +width / 2 &&
          mouseX <=
            ((50 +(430 / round(loopNum)) * mouseNum[i] +
              planetDia[mouseNum[i] - 1] +150 -25 * i) *
              sin(radiumRd[mouseNum[i] - 1])) /2 +50 +width / 2 &&
          mouseY >=
            ((50 +(430 / round(loopNum)) * mouseNum[i] +
              planetDia[mouseNum[i] - 1] +150 -25 * i) *
              cos(radiumRd[mouseNum[i] - 1])) /2 -50 +height / 2 &&
          mouseY <=
            ((50 +(430 / round(loopNum)) * mouseNum[i] +
              planetDia[mouseNum[i] - 1] +150 -25 * i) *
              cos(radiumRd[mouseNum[i] - 1])) /2 +50 +height / 2)
        {
          stroke(225);
          strokeWeight(3);
          line(
            mouseX - 8 - width / 2,
            mouseY - height / 2,
            mouseX + 8 - width / 2,
            mouseY - height / 2);
          line(
            mouseX - width / 2,
            mouseY - 8 - height / 2,
            mouseX - width / 2,
            mouseY+8-height/2)
        }
    }
  }
  

  pop();
  stroke(200, 50, 50);
  strokeWeight(8);
  point(mouseX, mouseY);
  if (
    mouseIsPressed == true &&
    mouseX >= Xmin[0] &&
    mouseX <= Xmax[0] &&
    mouseY >= Ymin[0] &&
    mouseY <= Ymax[0] &&
    mouseNum.includes(1) == false
  ) {
    mouseNum[mouseNum.length] = 1;
  }
  if (
    mouseIsPressed == true &&
    mouseX >= Xmin[1] &&
    mouseX <= Xmax[1] &&
    mouseY >= Ymin[1] &&
    mouseY <= Ymax[1] &&
    mouseNum.includes(2) == false
  ) {
    mouseNum[mouseNum.length] = 2;
  }
  if (
    mouseIsPressed == true &&
    mouseX >= Xmin[2] &&
    mouseX <= Xmax[2] &&
    mouseY >= Ymin[2] &&
    mouseY <= Ymax[2] &&
    mouseNum.includes(3) == false
  ) {
    mouseNum[mouseNum.length] = 3;
  }
  if (
    mouseIsPressed == true &&
    mouseX >= Xmin[3] &&
    mouseX <= Xmax[3] &&
    mouseY >= Ymin[3] &&
    mouseY <= Ymax[3] &&
    mouseNum.includes(4) == false
  ) {
    mouseNum[mouseNum.length] = 4;
  }
  if (
    mouseIsPressed == true &&
    mouseX >= Xmin[4] &&
    mouseX <= Xmax[4] &&
    mouseY >= Ymin[4] &&
    mouseY <= Ymax[4] &&
    mouseNum.includes(5) == false
  ) {
    mouseNum[mouseNum.length] = 5;
  }

  for (i = 1; i <= 5; i++) {
    Xmin[i - 1] =
      ((50 + (430 / round(loopNum)) * i + planetDia[i - 1]) *
        sin(radiumRd[i - 1])) /2 +width / 2 -20;
    Xmax[i - 1] =
      ((50 + (430 / round(loopNum)) * i + planetDia[i - 1]) *
        sin(radiumRd[i - 1])) /2 +width / 2 +20;
    Ymin[i - 1] =
      ((50 + (430 / round(loopNum)) * i + planetDia[i - 1]) *
        cos(radiumRd[i - 1])) /2 +height / 2 -20;
    Ymax[i - 1] =
      ((50 + (430 / round(loopNum)) * i + planetDia[i - 1]) *
        cos(radiumRd[i - 1])) /2 +height / 2 +20;
  }

  if (
    (mouseX >= Xmin[0] && mouseX <= Xmax[0] &&
      mouseY >= Ymin[0] && mouseY <= Ymax[0]) ||
    (mouseX >= Xmin[1] && mouseX <= Xmax[1] &&
      mouseY >= Ymin[1] && mouseY <= Ymax[1]) ||
    (mouseX >= Xmin[2] && mouseX <= Xmax[2] &&
      mouseY >= Ymin[2] && mouseY <= Ymax[2]) ||
    (mouseX >= Xmin[3] && mouseX <= Xmax[3] &&
      mouseY >= Ymin[3] && mouseY <= Ymax[3]) ||
    (mouseX >= Xmin[4] && mouseX <= Xmax[4] &&
      mouseY >= Ymin[4] && mouseY <= Ymax[4])
  ) {
    strokeWeight(3);
    line(mouseX - 8, mouseY, mouseX + 8, mouseY);
    line(mouseX, mouseY - 8, mouseX, mouseY + 8);
  }
  }