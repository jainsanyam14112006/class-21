var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect1=createSprite(400, 400, 50, 50);
  fixedRect1.shapeColor="blue";

 

  movingRect=createSprite(200, 200, 50, 50);
  movingRect.shapeColor="blue";

box1=createSprite(100,200,70,70);
box1.shapeColor="orange";
box1.velocityX=2;

box2=createSprite(700,200,70,70);
box2.shapeColor="purple";
box2.velocityX=-2;

}

function draw() {
  background(0);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  collision(movingRect,fixedRect1);
bounce(box1,box2);
  drawSprites();
}


