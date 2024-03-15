let clicked = false
let mouseX1 = 30
let mouseInPlace = false
let showText1 = false
let t = 0

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
    background(220);
    drawBackground1(200,200)
    drawFridge1(200,200)
    drawMouse(mouseX1,340)
    
    if (clicked && mouseX1 <= 270){
      mouseX1 += 1
    }  
    if (mouseX1 == 270){
      mouseInPlace = true
    }
    if (mouseInPlace == true){
      drawFridge2(200,200)
      t+=1
    }
    if (t == 2*60){
      showText1 = true
    }
    if(showText1 == true){
      drawText1(230,230)
    }
    
  // text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY); 
  }
  
  function drawMouse(mouseX1, mouseY1){
    push();
    translate(mouseX1, mouseY1);
    //ears
    circle(-3,-25,20)
    circle(10,-25,20)
    //body
    ellipse(0,0,60,45)
    //eyes
    fill(0)
    circle(17,-5,6)
    //tail
    strokeWeight(2)
    line(-30,0,-60,-10)
    pop();
  }
  
  //closed fridge
  function drawFridge1(fridgeX1, fridgeY1){
    push();
    translate(fridgeX1, fridgeY1);
    rect(100,-160,100,320,10,0,0,0)
    pop();
  }
  
  //opened fridge
  function drawFridge2(fridgeX2, fridgeY2){
    push();
    translate(fridgeX2, fridgeY2)
    rect(110,-150,100,310)
    //shelves
    rect(110,-80,100,10)
    rect(110, 0,100,10)
    rect(110,80,100,10)
    pop();
  }
  
  function drawText1(textX1, textY1){
    push();
    translate(textX1, textY1)
    noStroke()
    ellipse(0,0,110,70)
    triangle(-20,30,10,30,20,60)
    text("Oh the fridge is empty", -55, 0)
    pop();
  }
  
  function drawBackground1(background1X, background1Y){
    push();
    translate(background1X, background1Y);
    rect(-200,160,400,40)
    pop();
  }
  
  function mouseClicked(){
    if(mouseX > 0 && mouseX < 60 && mouseY > 318 && mouseY < 362){
      clicked = true
    }
  }