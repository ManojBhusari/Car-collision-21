var bullet;
var wall;
var thickness;
var speed;
var weight;
var damage;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
 
  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = (80,80,80);

  bullet = createSprite(50, 200, 30, 50);
  bullet.velocityX = speed;
  

 
}

function draw() {
  background("black");
  text("walllxposition"+wall.x , 10,50); 
  text("bulletxposition"+bullet.x , 10,100); 
  text("Firstcondition "+wall.x - bullet.x,10,150);
  text("Secondcondition "+(wall.width + bullet.width)/2,10,200);
  
  
    var collided = hasCollided(bullet,wall);

    if (collided)
 {
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

      if(damage>10)
  {
      wall.shapeColor = "red";
   }
      if (damage<10)
   {
      wall.shapeColor = "green";
   }

 }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width; 
  wallLeftEdge = lwall.x ; 
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
   else {
    return false;
   }
 }
 