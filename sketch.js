var bullet,wall;
var speed,weight;
var thickness;
var damage;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,58);
  wall=createSprite(1200,200,thickness,height/2);
   speed =random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX = speed;

}

function draw() {
  background(80,80,80); 
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
     damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  } 
  drawSprites();
}

