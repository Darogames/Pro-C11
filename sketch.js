var sea, seaImage;
var ship, shipImg;

function preload(){

  seaImage = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(1300,603);
  
  sea = createSprite();
  sea.addImage("image of the sea", seaImage);
  
  
  ship = createSprite(250,250, 200,300);
  ship.addAnimation("floatingShip",shipImg);
  ship.scale = 0.5;
}

function draw() {
  background("white");
  sea.x = sea.x -10;

  if(sea.x < 0){

     sea.x = sea.width/2;

  }
  
  drawSprites();
}