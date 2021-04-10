var ground;
var Hero,HeroImage;
var Enemy,enemyImage;
var cloud,cloudImage1,cloudImage2,cloudImage3,cloudImage4;

function preload(){
 HeroImage=loadAnimation("Images/Hero Walking 1.png","Images/Hero Walking 2.png","Images/Hero Walking 3.png","Images/Hero Walking 4.png","Images/Hero Walking 5.png");
 
 cloudImage1=loadImage("Images/Cloud_1.png");
 cloudImage2=loadImage("Images/Cloud_2.png");
 cloudImage3=loadImage("Images/Cloud_3.png");
 cloudImage4=loadImage("Images/Cloud_4.png");

 enemyImage=loadAnimation("Images/Enemy_Walking_1.png","Images/Enemy_Walking_2.png","Images/Enemy_Walking_3.png","Images/Enemy_Walking_4.png","Images/Enemy_Walking_5.png","Images/Enemy_Walking_6.png","Images/Enemy_Walking_7.png");
}

function setup(){
createCanvas(2200,800);

Hero=createSprite(200,650);
Hero.addAnimation("Hero",HeroImage);

ground = createSprite(2200,750,3000,20); 
ground.x = ground.width/4;
ground.velocityX=-4;
}

function draw(){
   background(0);

   if(keyDown("space")){
     Hero.velocityY=-16;  
   }

   Hero.velocityY = Hero.velocityY + 0.8;

   Hero.collide(ground);

   if (ground.x < 0){
    ground.x = ground.width/4;
  }

   spawnClouds();

   spawnEnemy();

   drawSprites(); 
}

function spawnClouds(){
  if(frameCount%60===0){
   cloud=createSprite(2200,50,20,10);
   cloud.y=Math.round(random(10,200));
   cloud.scale=0.5;
   var rand=Math.round(random(1,4));
   switch(rand){
       case 1:cloud.addImage(cloudImage1);
       break;
       case 2:cloud.addImage(cloudImage2);
       break;
       case 3:cloud.addImage(cloudImage3);
       break;
       case 4:cloud.addImage(cloudImage4);
       break;
       default:break;
   }
   cloud.velocityX=-4;
  }  
}

function spawnEnemy(){
  if(frameCount%200==0){
   Enemy=createSprite(2200,650);
   Enemy.addAnimation("Enemy",enemyImage);
   Enemy.velocityX=-5;
   Enemy.collide(ground);
  }  
}