let timer = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

  drawMouse(150, 200);

  if (timer > 60 && timer < 100) {
    text("Hi!", 200, 200);
  }
  timer++;
}

function drawMouse(mouseX, mouseY) {
  push();
  
  translate(mouseX,mouseY);
  noStroke();
  
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

