var car_img, background_img, finishLine_img;
var car

function preload() {
  car_img = loadImage("Car.png");
  background_img = loadImage("Background.png");
  finishLine_img = loadImage("Finish Line.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width/2,height/2 , windowWidth, windowHeight*5);
  bg.addImage(background_img);
  bg.scale = 4

  
  car = createSprite(720, 650, 50, 50);
  car.addImage(car_img);
  car.scale = 0.2;
}


function draw() {
  background("white");

  image(background_img,0,0, width, height*5);

  if(keyIsDown(UP_ARROW)){
   bg.velocityY = 4;
  }

  if(keyIsDown(RIGHT_ARROW)){
    bg.x = bg.x - 10;
   }

   if(keyIsDown(LEFT_ARROW)){
    bg.x = bg.x + 10;
   }

  
   if(bg.y > 600){
    bg.y = 347
   }

  drawSprites();
}