var monkey_01
var ground, invisibleGround, groundImage;
var cloudGroup,cloudImage
var ObsecalsGroup, Obsecals1, Obsecals2, Obsecals3, Obsecals4, Obsecals5, Obsecals6
var score=0
 
function preload(){
monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  CloudImage= loadImage("banana.png");
  Obsecals= loadImage("stone.png")
}

monkey.addAnimation(monkeyImage)

function setup() {
  createCanvas(600, 200);
  
  ObsecalsGroup=createGroup();
  cloudGroup=createGroup();
  
  
  
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation(monkeyImage);
  monkey.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(180);
  score=score+Math.round(getFrameRate()/60)
  text("score " +score,500,50)
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  spawnClouds();
  spawnObstacles();
  
  monkey.collide(invisibleGround);
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(Obsecals)
    obstacle.scale=0.1
    //assign lifetime to the obstacle           
    obstacle.lifetime = 100;
    ObsecalsGroup.add(obstacle)
  }
}
 
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = random(80,120);
    cloud.addImage(CloudImage);
    cloud.scale = 0.1;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    cloudGroup.add(cloud)
   
  }
  
}