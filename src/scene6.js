let mouse6X = -68
 let mouseInPlace = false
 let showText1 = false
 let t = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220)
  drawBackground6(200,200)
  drawMouse6(mouse6X,360,0.65)

  if (mouse6X <= 200){
    mouse6X +=4
  }
  if (mouse6X == 200){
      mouseInPlace = true
  }
  if (mouseInPlace == true){
    drawText1(260,260)
    showText1 = true
    t += 1
  }
  if (showText1 == true && t == 2*60){
    mouseInPlace = false
    mouse6X += 4
  }
  if(mouse6X > 500){
    textSize(40)
    text('THE END', 120, 75)
  }
}

function drawBackground6(background6X, background6Y){
  push();
  translate(background6X, background6Y);
  noStroke()
  fill('#EA8A52')
  rect(-200,160,400,40)
  pop();
}

function drawMouse6(mouse6X, mouse6Y, mouse6S) {
    push();
    translate(mouse6X,mouse6Y);
    scale(mouse6S)
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
  
    //sack
    ellipse(-65,-50,130,90)
    ellipse(0,-40,20,30)
    //cheese
    fill('#EBCB50')
    triangle(-90,-80,-20,-30,-90,-30)
    fill('#EBA450')
    circle(-65,-40,10)
    circle(-80,-50,10)
    pop();
  
  }

function drawText1(textX1, textY1){
  push();
  translate(textX1, textY1)
  noStroke()
  ellipse(0,0,180,70)
  triangle(-20,30,10,30,-20,60)
  text("Oh we're eating 'Gouda' tonight", -85, 0)
  pop();
}