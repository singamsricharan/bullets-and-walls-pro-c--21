var bullet,wall;
var speed,weight,thickness;
var dammage=0; 
function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  console.log(speed);
  console.log(weight);
  console.log(thickness)
  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX= speed ;
  bullet.shapeColor="white"
  wall=createSprite(1500,200,thickness,height/2);
}

function draw() {
  background(0,0,0);  
  if (hascollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor=color(255,0,0);

    }
    if (damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hascollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}