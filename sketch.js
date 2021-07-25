var bgr, bgrImg;
var astro, sleepImg;
var brush,brushImg;
var gym,gymImg;






function preload(){
bgrImg = loadImage("Images/iss.png")
sleepImg = loadImage("Images/sleep.png")
brushImg = loadAnimation("Images/brush.png")
gymImg = loadAnimation("Images/gym1.png","Images/gym2.png","Images/gym11.png","Images/gym12.png")
}


function setup() {
  createCanvas(800,400);

  bgr = createSprite(375, 200, 50, 50);
  bgr.addImage("background1", bgrImg);
  bgr.scale = 0.2;

  astro = createSprite(375, 200, 50, 50);
  astro.addImage("sleep",sleepImg)
  astro.scale = 0.1;

  astro = createSprite(375, 200, 50, 50);
  astro.addAnimation("gym",gymImg);
  astro.scale = 0.1;
}

function draw() {
  background(0); 
  
  if (keyDown("b")){
    astro.addAnimation("brush",brushImg)
    astro.changeAnimation("brush",brushImg)
  }

  if (keyDown("g")){
   astro.addAnimation("gym",gymImg)
   astro.changeAnimation("gym",gymImg)
  }



  drawSprites();
}