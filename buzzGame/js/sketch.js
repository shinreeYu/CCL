let newObstacle
let backgr=[]
let newFly
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  for(let i = 0;i<=8;i++){
  newObstacle = new Obstacle()
  backgr.push(newObstacle)
  }
  newFly = new Fly()
}

function draw() {
  background(250)
  for(i=0;i<=7;i++){
    backgr[i].update()
    backgr[i].display()
  }
  newFly.update()
  newFly.display()
}


class Obstacle{
  constructor(){
    this.x=random(width,width*2)
    this.rectY=random(30,80)
    this.y=random(0,250)
    this.rectSca=random(1,3)
    this.rectX=random(30,80)
  }
  update(){
    if(this.x>=-this.rectX){
      this.x-=1
    }
    else{
      this.x=random(width,width*2)
      this.y=random(0,250)
      this.rectX=random(30,80)
      this.rectY=random(30,80)
    }
  }
  display(){
    push()
    noStroke()
    fill(155)
    rect(this.x,this.y,this.rectX,this.rectY)
    pop()
  }
}


class Fly{
  constructor(){
    this.x=width/3
    this.y=height/2
    this.speedY=0
    this.aY=0.04
  }
  update(){
    if(this.y<height-2.5){
      this.y+=this.speedY
      this.speedY+=this.aY
    }
    else{this.y=height-2.5
      text('Game Over!',100,100)
    }
    if(this.y<0){
      this.y=2.5
      this.speedY=0
    }
    if(mouseIsPressed == true ){
      console.log('up')
      this.speedY-=0.2
    }
    


  }
  display(){
    push()
    translate(this.x,this.y)
    noStroke()
    fill(155)
    circle(0,0,5)
    pop()
  }
}
