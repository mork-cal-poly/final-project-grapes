let clicked = false
let mouseX1 = 30
let mouseInPlace = false
let showText1 = false
let showText2 = false
let t = 0

let scene = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  // change scenes
  if (scene == 0 && mouseX1 >= 400) {
    scene = 1;
    t = 0;
    mouseX1 = 0;
  } else if (scene == 1 && mouseX1 >= 400) {
    scene = 2;
    t = 0;
  }
  console.log(t);
  console.log(scene);
  // draw scene
  if (scene == 0) {
    scene0();
  } else if (scene == 1){
    console.log("here");
    scene1();
  } else {
    console.log("now here");
    background(255);
  }
}

function scene1() {
  background(0);
  mouseX1 ++;
  drawMouse(mouseX1,360,0.65)
  t++;
}

function scene0() {
  background('#EBCB50');
  drawBackground1(200,200)
  drawFridge1(200,200)
  drawMouse(mouseX1,360,0.65)

  if (clicked && mouseX1 <= 260){
    mouseX1 += 2
  } 
  if (mouseX1 == 260){
    mouseInPlace = true
  }
  if (mouseInPlace == true){
    drawFridge2(200,200)
    drawMouse(mouseX1,360,0.65)
    t+=1
  }
  if (t == 2*60){
    showText1 = true
  }
  if(showText1 == true){
    drawText1(230,230)
  }
  if (t == 4*60){
    showText2 = true
  }
  if (showText2 == true){
    drawText2(230,230)
  }
  if (t >= 6*60){
    showText1 = false
    showText2 = false
    mouseX1 += 2
  }
// text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY); 

}


function drawMouse(mouseX, mouseY, mouseS) {
    push();
    translate(mouseX,mouseY);
    scale(mouseS)
    strokeWeight(0);
     fill(176, 119, 108);
    //tail 
    triangle(-100, 0, 20, -10, 20, 0)
    fill(84, 106, 102);
    //Main Body
    arc(0, 0, 80, 90, PI, 2*PI , CHORD);
    //Face
     ellipse(30,-30,45,30);
    //Snout
     triangle(40, -44, 40, -20, 67, -35)
    //Ear
     circle(20,-50, 30);
    //Nose
    fill(176, 119, 108);
    circle(65, -35, 8); 
    //Eyes
    fill(255);
    circle(38,-35,10);
    fill(0);
    circle(40,-35,7);
    //cheek 
    fill(164, 81, 102);
    circle(30,-30,7);  
    pop();
  }

//closed fridge
function drawFridge1(fridgeX1, fridgeY1){
  push();
  translate(fridgeX1, fridgeY1);
  noStroke()
  fill(255)
  rect(100,-160,100,320,10,0,0,0)
  pop();
}

//opened fridge
function drawFridge2(fridgeX2, fridgeY2){
  push();
  translate(fridgeX2, fridgeY2)
  noStroke()
  fill(225)
  rect(110,-150,100,310)
  //shelves
  fill(255)
  rect(110,-80,100,10)
  rect(110, 0,100,10)
  rect(110,80,100,10)
  pop();
}

function drawText1(textX1, textY1){
  push();
  translate(textX1, textY1)
  noStroke()
  ellipse(0,0,180,70)
  triangle(-20,30,10,30,20,60)
  text("Oh the fridge is empty", -55, 0)
  pop();
}

function drawText2(textX2, textY2){
  push();
  translate(textX2, textY2)
  noStroke()
  ellipse(0,0,180,70)
  triangle(-20,30,10,30,20,60)
  text("No choice but to rob a bank", -70, 0)
  pop();
}

function drawBackground1(background1X, background1Y){
  push();
  // fill()
  translate(background1X, background1Y);
  noStroke()
  fill('#EA8A52')
  rect(-200,160,400,40)
  pop();
}

function mouseClicked(){
  if(mouseX > 3 && mouseX < 55 && mouseY > 330 && mouseY < 360){
    clicked = true
  }
}