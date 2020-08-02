var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
  //create the rectangle sprites
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200, 200, 50, 80);
  //make the shape color red
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}

function draw() {
  //make the background black
  background(0)
  //make the rectangle move with mouse
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  //create the is touching algorithm
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    )
  {
    //make color change to bue when rectangles touch
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue"; 
  }
  else
  {
    //make the color changeback to red
    movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  }
  drawSprites();
}