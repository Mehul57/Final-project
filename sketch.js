var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieim,bulimg,bullet,arrow


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieim=loadImage("assets/zombie.png")
  bulimg=loadImage("assets/heart_1.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

bullet=createSprite()
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-500, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  createArrow();
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}


if (frameCount % 90 == 0) {
  zombie = createSprite(800, random(10,900), 10, 10);
zombie.addImage(zombieim)
zombie.scale=0.2
zombie.velocityX=-4

}
if(arrow.isTouching===zombie){
  zombie.visible=false
}
drawSprites();

}

function createArrow() {
   arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(bulimg);
  arrow.x = 360;
  arrow.y=player.y;
  arrow.velocityX = 7;
  arrow.lifetime = 100;
  arrow.scale = 0.3;

  
   
}
