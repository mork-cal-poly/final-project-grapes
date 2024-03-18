let scene = 0;
let t = 0

//var scene 0
let clicked = false
let mouseX_0 = 30
let mouseInPlace_0 = false
let showText1_0 = false
let showText2_0 = false

//var scene 1
let mouseX_1 = 40;
let showText2_1 = false;
let mouseMoving_1 = false

//var scene 2
let mouseX_2 = -300;
let showText2_2 = true;
let showText3_2 = true;
let mouseMoving_2 = false

//var scene 3
let mouseX_3 = -80;
let mouseMoving_3 = false
let cheeseR_3 = 0

//var scene 4
let mouse6X_4 = -68
let mouseInPlace_4 = false
let showText1_4 = false
let mouse6R_4 = 0
let mouseRot_4 = false

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  // change scenes
  if (scene == 0 && mouseX_0 >= 500) {
    scene = 1;
    t = 0;
    mouseX1 = 0;
  } else if (scene == 1 && mouseX_1 >= 500) {
    scene = 2;
    t = 0;
  } else if (scene == 2 && mouseX_2 >= 425) {
    scene = 3;
    t = 0;
  } else if (scene == 3 && mouseX_3 >= 500) {
    scene = 4;
    t = 0;
  } 
  
  //draw scene
  if (scene == 0) {
    scene0();
  } else if (scene == 1){
    scene1();
  } else if (scene == 2){
    scene2();
  } else if (scene == 3){
    scene3();
  } else {
    scene4();
  } 
}

function scene0() {
  background('#EBCB50');
  drawBackground_0(200,200)
  drawFridge1_0(200,200)
  drawMouse_0(mouseX_0)

  if (clicked && mouseX_0 <= 260){
    mouseX_0 += 2
  } 
  if (mouseX_0 == 260){
    mouseInPlace_0 = true
  }
  if (mouseInPlace_0 == true){
    drawFridge2_0(200,200)
    drawMouse_0(mouseX_0,360,0.65)
    t+=1
  }
  if (t == 2*60){
    showText1_0 = true
  }
  if(showText1_0 == true){
    drawText1_0(230,230)
  }
  if (t == 4*60){
    showText2_0 = true
  }
  if (showText2_0 == true){
    drawText2_0(230,230)
  }
  if (t >= 6*60){
    showText1_0 = false
    showText2_0 = false
    mouseX_0 += 2
  } 
}

function scene1(){
  background(35, 44, 66);
  cityScape_1();
  drawBankScene_1();
  secretEntrance_1();
  drawMouse_1(mouseX_1);
  
  if (mouseX_1 < width/2 || mouseX_1 > width/2){
     mouseMoving_1 = true
   } 
  if (mouseMoving_1){
    mouseX_1 += 2
  }
  if (mouseX_1 == width/2){
    mouseMoving_1 = false
    showText2_1 = true
  }
  if (showText2_1 == true){
      drawText2_1(230,230);
    t+=1
  }
  if (t==2*60){
    showText2_1 = false;
    mouseMoving_1 = true
  }
}

function scene2() {
  background(87, 39, 36);
  drawSewer_2();
  drawRatKing_2(200, 200);
  drawMouse_2(mouseX_2);
  
  if (mouseX_2 < -80 || mouseX_2 > -80){
     mouseMoving_2 = true
   } 
  if (mouseMoving_2){
    mouseX_2 += 1 
  }
  if (mouseX_2 == -80){
    mouseMoving_2 = false
    showText3_2 = false
  }
  if (showText3_2 == false){
      drawText3_2(-80, -50);
      showText2_2 = false;
    t+=1
  }
  
  if (t== 4*20){ 
    showText2_2 = false;
    showText3_2 = true;
    mouseMoving_2 = true;
    if(showText2_2 == false ){
    drawPOWPOW_2();
    drawText2_2(-120,60);
    }
  }
  if (mouseX_2 >= width/2){
    background(87, 39, 36);
    drawSewer_2(-200,-200);
    drawRatKing_2(0, 0);
    deadFace_2(0, 0);
    drawTinyMouse_2();
    fill(0);
    textSize(25);
    text("YAY", 56, -138);    
  }
}

function scene3(){
  background(145, 143, 143);
  drawInsideBank_3();
  drawMouse_3(mouseX_3);
  drawCheese_3();
  cheeseText_3();
  
   if (mouseX_3 < width/2 || mouseX_3 > width/2){
     mouseMoving_3 = true
   } 
  if (mouseMoving_3){
    mouseX_3 += 2
  }
  if (mouseX_3 >= width/2){
    fill(209, 236, 240);
    circle(-60, -70, 200);
  }
}

function scene4(){
  background(35, 44, 66);
  cityScape_4();
  drawBankScene_4()
  drawMouse6_4(mouse6X_4, mouse6R_4)

  if (mouse6X_4 <= 200){
    mouse6X_4 +=4
  }
  if (mouse6X_4 == 200){
      mouseInPlace_4 = true
  }
  if (mouseInPlace_4 == true){
    drawText1_4(260,230)
    showText1_4 = true
    t += 1
  }
  if (showText1_4 == true && t==2*60){
      mouseRot_4 = true
  }
  if (mouseRot_4 ==true){
    mouse6R_4 -= PI/20
  }
  if (mouseRot_4 == true && t==4*60){
    mouseRot_4 = false
    mouseInPlace_4 = false
  }
  if (mouseRot_4 == false && mouseInPlace_4 == false){
    mouse6X_4 += 4
  }
  if(mouse6X_4 > 500){
    textSize(40)
    fill(255)
    text('THE END', 120, 60)
  }
}

//functions for scene0
function drawMouse_0(mouseX_0) {
    push();
    translate(mouseX_0,360);
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

function drawFridge1_0(fridgeX_0, fridgeY_0){
  push();
  translate(fridgeX_0, fridgeY_0);
  strokeWeight(0);
  fill(255)
  rect(100,-160,100,320,10,0,0,0)
  pop();
}

function drawFridge2_0(fridgeX2_0, fridgeY2_0){
  push();
  translate(fridgeX2_0, fridgeY2_0)
  strokeWeight(0);
  fill(225)
  rect(110,-150,100,310)
  //shelves
  fill(255)
  rect(110,-80,100,10)
  rect(110, 0,100,10)
  rect(110,80,100,10)
  pop();
}

function drawText1_0(textX1_0, textY1_0){
  push();
  translate(textX1_0, textY1_0)
  strokeWeight(0);
  ellipse(0,0,180,70)
  triangle(-20,30,10,30,20,60)
  text("Oh the fridge is empty", -55, 0)
  pop();
}

function drawText2_0(textX2_0, textY2_0){
  push();
  translate(textX2_0, textY2_0)
  strokeWeight(0);
  ellipse(0,0,180,70)
  triangle(-20,30,10,30,20,60)
  text("No choice but to rob a bank", -70, 0)
  pop();
}

function drawBackground_0(backgroundX_0, backgroundY_0){
  push();
  // fill()
  translate(backgroundX_0, backgroundY_0);
  strokeWeight(0);
  fill('#EA8A52')
  rect(-200,160,400,40)
  pop();
}

function mouseClicked(){
  if(mouseX > 3 && mouseX < 55 && mouseY > 330 && mouseY < 360){
    clicked = true
  }
}
//end of funcs for scene 0

//funcs for scene 1
function cityScape_1() {
  push();
  fill(0);
  rect(0,150, 200, 160);
  rect(250, 200, 200, 100);
  rect(0,50, 50, 100);
  rect(70,70, 50, 100);
  rect(270, 0, 70, 200);
  rect(350, 40, 40, 170);
  rect(390, 130, 40, 130);
  pop();
  
}

function drawBankScene_1() {
  strokeWeight(0);
  fill(184, 175, 169);
  rect(0, 250, 400, 50)
  fill(128, 121, 116);
  rect(0, 300, 400, 20)
  fill(163, 155, 160);
  rect(0, 320, 400, 80);
  fill(197, 52, 48);
  rect(350, 340, 60, 30);
  //Bank
  textSize(200);
  text('🏦',100, 234);
  
}

//function for drawing the mouse 
function drawMouse_1(mouseX_1) {
  push();
  translate(mouseX_1, 360);
  strokeWeight(0);
   fill(176, 119, 108);
  //tail 
  triangle(-100, 0, 20, -10, 20, 0)
  fill(84, 106, 102);
  //Main Body
  arc(0, 0, 80, 90, PI, 2*PI , CHORD);
  //Face
   ellipse(30,-30,45,30)
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

function drawText2_1(textX2_1, textY2_1){
    push();
    fill(255);
    textSize(15);
    translate(textX2_1, textY2_1)
    strokeWeight(0);
    ellipse(0,0,125,70)
    triangle(-20,30,10,30,20,60)
    fill(0);
    textSize(12)
    text("Time to use", -38, 0);
    text("the secret entrance", -55, 10);
    pop();
  }

function secretEntrance_1() {
  push();
  strokeWeight(0);
  
  fill(92, 58, 50);
  rect(330,280, 7, 50);
  rect(297, 240, 83, 40);
  
  fill(255);
  textSize(15);
  text("SECRET", 307, 255);
  text("ENTRANCE", 298, 269);
  pop();
}
//end of funcs for scene 1

//funcs for scene 2
function drawSewer_2(sewerX_2, sewerY_2) {
  push();
  translate(sewerX_2,sewerY_2)
  //arc
  fill(128, 92, 85);
  circle(200,300,450)
  //dark tunnel
  fill(51, 38, 36);
  circle(200,300,200)
  //Sidewalk thing
  fill(201, 204, 201);
  rect(0, 300, 400, 200);
  //Water
  fill(139, 173, 144);
  rect(0, 320, 400, 200);
  //Rail Detail
  strokeWeight(2);
  fill(128, 92, 85);
  rect(0, 270, 90, 30);
  rect(0, 270, 40, 30);
  //ladder
  strokeWeight(4);
  line(380, 0, 380, 300);
  line(350, 0, 350, 300);
  //rungs
  line(350, 10, 380, 10);
  line(350, 40, 380, 40);
  line(350, 70, 380, 70);
  line(350, 100, 380, 100);
  line(350, 130, 380, 130);
  line(350, 160, 380, 160);
  line(350, 190, 380, 190);
  line(350, 220, 380, 220);
  line(350, 250, 380, 250);
  line(350, 280, 380, 280); 
  pop();
}

function drawRatKing_2(ratX_2, ratY_2) {
  strokeWeight(0);
  translate(ratX_2,ratY_2)
  fill(35, 34, 46);
   //Head
  circle(0,-110, 64);
  ellipse(-10,-150, 10, 30);
  ellipse(10,-150, 10, 30);
  //Main Body
  ellipse(0,0, 133, 200);
  circle(-50,60, 100);
  circle(-60,20, 50);
  circle(-50,-20, 40);
  ellipse(40,80, 80, 50);
  circle(40,50, 30);
  circle(40,-60, 60);
  circle(50,-35, 50);
  // //eyes
  fill(230, 57, 63);
  rect(-18, -110, 13, 13, 0, 100, 0, 100);
  rect(8, -110, 13, 13, 100, 0, 100, 0);
  //Little heads
  fill(0);
  triangle(10, 55, 20, 90, 36, 55);
  fill(230, 57, 63);
  circle(18, 65, 3);
  circle(27, 65, 3);
  
  fill(0);
  triangle(-60, 0, -40, 35, -34, 0);
  fill(230, 57, 63);
  circle(-48, 13, 3);
  circle(-41, 13, 3);
  
  fill(0);
  triangle(10, -30, 10, -10, 30, -30);
  fill(230, 57, 63);
  circle(12, -25, 2);
  circle(18, -25, 2);
}

function deadFace_2(dedX_2, dedY_2) {
  push();
   //Dead Face
  strokeWeight(0);
  translate(dedX_2, dedY_2);
  strokeWeight(2);
  
  fill(230, 57, 63);

  line(-20, -120, 0, -110)
  line(0, -120, -18, -110)
  
  line(0, -120, 20, -110)
  line(20, -120, 2, -110)
  textSize(56);
  text('💀',-27, -85);
  
  //SMOKE that comes with death 
  noStroke();
  fill(255, 150);
  ellipse(-230, 160, 150, 90)
  ellipse(-200, 190, 150, 60)
  ellipse(-170, 197, 230, 17)
  
  ellipse(200, 160, 150, 90) 
  ellipse(220, 100, 80, 100) 
  ellipse(170, 190, 150, 60)
  ellipse(140, 197, 230, 17)
  pop();
}
function drawPOWPOW_2(){
  push();
  //Dust Clouds
  strokeWeight(0);
  fill(255, 50);
  circle(-30, -50, 200);
  fill(255, 200);
  circle(-60, 0, 150);
   fill(255, 200);
  circle(70, 10, 300);
  fill(255, 400);
  circle(-100, 100, 50);
  
  fill(230, 57, 63);
   textSize(90);
  rotate(-PI/6);
  text('POW', -10, 70);
  
  rotate(PI/3);
  textSize(40);
  text('POW', -100, -40);
  
  rotate(PI);
  textSize(25);
  text('POW', -100, -80);
  
  //Firecracker emoji
  textSize(100);
  text('💥', -80, 180);
  textSize(50);
  text('💥', 20, 150);
  textSize(100);
  text('💥', 20, 30);
  textSize(30);
  text('💥', -120, -30);
pop();
}


//DRAWING MOUSE
function drawMouse_2(mouseX_2) {
  push();
  
  translate(mouseX_2, 160);
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
  circle(38,-37,7);
  
  //cheek 
  fill(164, 81, 102);
  circle(30,-30,7);
  
  //Water effect 
  fill(139, 173, 144);
  ellipse(-50,0, 30, 10);
  ellipse(-10,0, 50, 10);
  ellipse(30, 0, 50, 10);
  
  
  pop();
}

function drawText2_2(textX2_2, textY2_2){
    push();
    fill(255);
   textStyle(BOLDITALIC);
    textSize(15);
    translate(textX2_2, textY2_2)
    rect(-50, 30, 135, 70);
    fill(0);
    text("...*throws dynamite*", -45, 70);
    // text("the secret entrance", -55, 10);
    pop();
  }

function drawText3_2(textX3_2, textY3_2){
    push();
    fill(0);
    textSize(13);
    translate(textX3_2, textY3_2)
    strokeWeight(0);
    ellipse(-5,10,125,90)
  //3,2,1
    triangle(20, -20,60, -40, 40, -20)
    fill(255);
    text("FIGHT ME", -38, -10);
    text("FOR ", -15, 10);
    text("THE CHEESE", -45, 30);
    pop();
  }

//Ladder Mouse
function drawTinyMouse_2() {
  push();
  scale(-1, 1);
  scale(0.5);
  translate(-340,-260);
  strokeWeight(0);
   fill(176, 119, 108);
  //tail 
  triangle(-100, 0, 20, -10, 20, 0)
  fill(84, 106, 102);
  //Main Body
  arc(0, 0, 80, 90, PI, 2*PI , CHORD);
  //Face
   ellipse(30,-30,45,30)
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
  //TEXTBOX 
  fill(255);
  ellipse(175, -35, 140, 80);
  triangle(80, -35, 128, -10, 158, -25);
  pop();
}
//end of funcs for scene 2

//funcs for scene 3
function drawInsideBank_3(){
  noStroke();
  fill(200);
  rect(0,360, 400, 40);
  //Vault
  fill(52, 59, 66);
  circle(200, 180, 250);
  fill(209, 236, 240);
  circle(200, 180, 200);
  //light fixture 
  fill(229, 204, 76);
  circle(198, 35, 20);
  fill(77, 76, 77);
  triangle(170, 35, 198, -20, 225, 35);
}

function drawMouse_3(mouseX_3) {
  push();
  translate(mouseX_3, 360);
  noStroke();
   fill(176, 119, 108);
  //tail 
  triangle(-100, 0, 20, -10, 20, 0)
  fill(84, 106, 102);
  //Main Body
  arc(0, 0, 80, 90, PI, 2*PI , CHORD);
  //Face
   ellipse(30,-30,45,30)
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

function drawCheese_3() {
  //cheese
    translate(260,250);
    fill('#EBCB50')
    triangle(-90,-80,-20,-30,-90,-30)
    fill('#EBA450')
    circle(-65,-40,10)
    circle(-80,-50,10)
}

function cheeseText_3(){
  fill(255);
  rect(-245,-230, 110, 50);
  fill(209, 125, 14);
  textStyle(BOLDITALIC);
  textSize(10.5)
  text("World's Best Cheese", -240, -200)
  
  fill(255);
  rect(20,-230, 100, 50);
  fill(209, 38, 14);
  textStyle(BOLD);
  textSize(12.5)
  text("DO NOT", 45, -205)
  text("STEAL", 47, -195)  
}
//end of funcs for scene 3

//funcs for scene 4
function drawMouse6_4(mouse6X_4, mouse6R_4) {
    push();
    translate(mouse6X_4,360);
    rotate(mouse6R_4)
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

function drawText1_4(textX1_4, textY1_4){
  push();
  translate(textX1_4, textY1_4)
  strokeWeight(0)
  fill(255)
  ellipse(0,0,180,70)
  triangle(-20,30,10,30,-20,60)
  fill(0)
  textSize(14)
  textStyle(NORMAL)
  text("Oh we're eating", -45, 0)
  text("'Gouda' tonight", -45, 15)
  pop();
}

function drawBankScene_4() {
  strokeWeight(0);
  fill(184, 175, 169);
  rect(0, 250, 400, 50)
  fill(128, 121, 116);
  rect(0, 300, 400, 20)
  fill(163, 155, 160);
  rect(0, 320, 400, 80);
  //Bank
  textSize(200);
  text('🏦',100, 234);  
}

function cityScape_4() {
  push();
  fill(0);
  rect(0,150, 200, 160);
  rect(250, 200, 200, 100);
  rect(0,50, 50, 100);
  rect(70,70, 50, 100);
  rect(270, 0, 70, 200);
  rect(350, 40, 40, 170);
  rect(390, 130, 40, 130);
  pop();
  
}

