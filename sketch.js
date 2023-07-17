var bg, backg;
var panda, player;
  var fruit1,fruit2,fruit3,fruit;
  var edges; 

function preload(){
  panda = loadImage("animal1-removebg-preview.png")
  bg = loadImage("bg2.jpg")
  fruit1 = loadImage("b.png")
  fruit2 = loadImage("s.png")
  fruit3 = loadImage("a.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  backg= createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
backg.addImage(bg)
backg.scale = 1.6


player= createSprite(displayWidth-1000, displayHeight-220, 50, 50);
 player.addImage(panda)
   player.scale = 0.3
}

function draw() {
  background("white");  



//edges = createEdgeSprites(edges)
//panda.bounceOff(edges);

  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
   player.x = player.x+30
  }
fruits();
  drawSprites();
}
function fruits(){

  if(World.frameCount%80===0){
    fruit=createSprite(displayWidth/2-150,displayHeight-100,20,20);
    fruit.y= 250  
fruit.scale = 0.18;
fruit.velocityY = 4;

  r=Math.round(random(1,3));
  if (r == 1) {
    fruit.addImage(fruit1);
    //fruit1.scale = 0.3;
  } else if (r == 2) {
    fruit.addImage(fruit2);
   // fruit2.scal
  } else if (r == 3) {
    fruit.addImage(fruit3);
  } 
  fruit.x = Math.round(random(100,1800))
  fruit.setLifetime = 50;
}
}
