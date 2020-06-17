var bullet;
var wall;
var speed,weight,thickness;



function setup() {
  createCanvas(1800,400);

  speed = random(55,90);
  weight = random(400,1500);
 

  bullet = createSprite(50, 200, 100, 20);
  bullet.velocityX = speed;
  
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = "blue";
 
}

function draw() {
  background(255,255,255);  

  
 if(wall.x-bullet.x < (bullet.width + wall.width)/2){
  // bullet.shapeColor = "green";
   
   bullet.velocityX = 0;

   var damage = 0.5 *weight *speed *speed/22509;

     if(damage > 180)
     {
       bullet.shapeColor="green";//color(225,0,0);
     }

     if(damage < 180)
     {
       bullet.shapeColor="red";//color(230,230,0);
     }

     if(damage<100)
     {
       bullet.shapeColor="blue";//color(0,225,0);
     }

 }

  drawSprites();
}


