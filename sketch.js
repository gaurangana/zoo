var gameState = 0
var zombie , zombieImg , arrow, arrowImage, bg ;
var zombieGroup, arrowGroup ;
var bgImg1 , bgImg2 ,hunter, hunterImg ;
function preload(){
  bgImg1 = loadImage("bg1.jpg") ;
  bgImg2 = loadImage("bg2.jpg") ;
  hunterImg= loadImage("hunter.png") ;
  zombieImg = loadImage("1.png")//,"2.png","4.png ","5.png","6.png","8.png","9.png","11.png","12.png","13.png") ;
  arrowImage = loadImage("arrow.png")
}

function setup() {
  createCanvas(400,400);
  
  bg = createSprite(0,0) ;
  hunter = createSprite(50,300, 50, 50);
  
  arrowGroup= createGroup() ;
  zombieGroup= createGroup() ;

  


}

function draw() {
  background(1,60,40); 
  if(gameState=== 0) {
    image(bgImg1,0,0,windowWidth,windowHeight) ;

bg.visible = false
hunter.visible = false

    if(keyDown("ENTER")){
     
      
      
      gameState=1
       }
  }
  else 
  if(gameState=== 1){
    //image(bgImg2,0,0,windowWidth,windowHeight) ;
    bg.visible = true ;
    hunter.visible= true ;
    bg.addImage(bgImg2) ;
    bg.velocityX = -1
    bg.scale = 1

    console.log(bg.width)
    hunter.addImage(hunterImg) ;
    hunter.y= mouseY
  
         if (bg.x < 0){
           bg.x = 400;
         }
   spawnZombie() ;
   
    if(keyDown("SPACE")){
     var arrow= createSprite(50,150,10,10);
      arrow.addImage(arrowImage);
      //arrow.x = 100;
      arrow.y=hunter.y- 50;
      arrow.velocityX = 4;
      arrow.lifetime = 100;
      arrow.scale = 0.3;
    arrowGroup.add(arrow)
    }
    if(zombieGroup.isTouching(arrowGroup)){
      zombieGroup.destroyEach()
      arrowGroup.destroyEach()
   
 }
  }
 
  
  drawSprites();
}

function spawnZombie(){
if(frameCount% 160 === 0){
  zombie= createSprite( width+10, random(height/2+100,height/2-100), 50, 50);
  zombie.addAnimation("a",zombieImg) ;
  zombie.scale = 0.3 ;
  zombie. velocityX  -= random(2,5)
  zombie.lifetime = 200
  zombieGroup.add(zombie) ;
  
}
}
