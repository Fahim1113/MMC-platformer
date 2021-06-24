var bg;
var boy,boyRDead,boyRIdle,boyRJump,boyRRun,boyRSlide,boyLDead,boyLIdle,boyLJump,boyLRun,boyLSlide;
var gameState="play";
var boyDirection="right";
var boyMoveX="true";
var zombie, zombieRAttack, zombieRDead, zombieRWalk, zombieLAttack, zombieLDead, zombieLWalk;
var buttonStart, buttonStartImg;

var bone1,bone2,bone3,bone4,tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9,tile10,tile11,tile12,tile13,tile14;

var ground1, ground2, ground3, ground4, ground5, ground6, ground7, ground8, ground9, ground10, ground11;
var obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16;
var invisibleGround, invisibleGround1, invisibleGround2, invisibleGround3, invisibleGround4;
var barrierX, barrierX1, barrierX2, barrierX3;


var jumpPosY, jumpLimit;
var jump = true;

function preload(){
  bg=loadImage("BG.png");
  buttonStartImg=loadImage("buttons/play.png")

  {boyRDead=loadAnimation("playerRight/DeadR__000.png","playerRight/DeadR__001.png","playerRight/DeadR__002.png","playerRight/DeadR__003.png","playerRight/DeadR__004.png","playerRight/DeadR__005.png","playerRight/DeadR__006.png","playerRight/DeadR__007.png","playerRight/DeadR__008.png","playerRight/DeadR__009.png");
  boyRIdle=loadAnimation("playerRight/IdleR__000.png","playerRight/IdleR__001.png","playerRight/IdleR__002.png","playerRight/IdleR__003.png","playerRight/IdleR__004.png","playerRight/IdleR__005.png","playerRight/IdleR__006.png","playerRight/IdleR__007.png","playerRight/IdleR__008.png","playerRight/IdleR__009.png");
  boyRJump=loadAnimation("playerRight/JumpR__000.png","playerRight/JumpR__001.png","playerRight/JumpR__002.png","playerRight/JumpR__003.png","playerRight/JumpR__004.png","playerRight/JumpR__005.png","playerRight/JumpR__006.png","playerRight/JumpR__007.png","playerRight/JumpR__008.png","playerRight/JumpR__009.png");
  boyRRun=loadAnimation("playerRight/RunR__000.png","playerRight/RunR__001.png","playerRight/RunR__002.png","playerRight/RunR__003.png","playerRight/RunR__004.png","playerRight/RunR__005.png","playerRight/RunR__006.png","playerRight/RunR__007.png","playerRight/RunR__008.png","playerRight/RunR__009.png");
  boyRSlide=loadAnimation("playerRight/SlideR__000.png","playerRight/SlideR__001.png","playerRight/SlideR__002.png","playerRight/SlideR__003.png","playerRight/SlideR__004.png","playerRight/SlideR__005.png","playerRight/SlideR__006.png","playerRight/SlideR__007.png","playerRight/SlideR__008.png","playerRight/SlideR__009.png");
  boyLDead=loadAnimation("playerLeft/Dead__000.png","playerLeft/Dead__001.png","playerLeft/Dead__002.png","playerLeft/Dead__003.png","playerLeft/Dead__004.png","playerLeft/Dead__005.png","playerLeft/Dead__006.png","playerLeft/Dead__007.png","playerLeft/Dead__008.png","playerLeft/Dead__009.png");
  boyLIdle=loadAnimation("playerLeft/Idle__000.png","playerLeft/Idle__001.png","playerLeft/Idle__002.png","playerLeft/Idle__003.png","playerLeft/Idle__004.png","playerLeft/Idle__005.png","playerLeft/Idle__006.png","playerLeft/Idle__007.png","playerLeft/Idle__008.png","playerLeft/Idle__009.png");
  boyLJump=loadAnimation("playerLeft/Jump__000.png","playerLeft/Jump__001.png","playerLeft/Jump__002.png","playerLeft/Jump__003.png","playerLeft/Jump__004.png","playerLeft/Jump__005.png","playerLeft/Jump__006.png","playerLeft/Jump__007.png","playerLeft/Jump__008.png","playerLeft/Jump__009.png");
  boyLRun=loadAnimation("playerLeft/Run__000.png","playerLeft/Run__001.png","playerLeft/Run__002.png","playerLeft/Run__003.png","playerLeft/Run__004.png","playerLeft/Run__005.png","playerLeft/Run__006.png","playerLeft/Run__007.png","playerLeft/Run__008.png","playerLeft/Run__009.png");
  boyLSlide=loadAnimation("playerLeft/Slide__000.png","playerLeft/Slide__001.png","playerLeft/Slide__002.png","playerLeft/Slide__003.png","playerLeft/Slide__004.png","playerLeft/Slide__005.png","playerLeft/Slide__006.png","playerLeft/Slide__007.png","playerLeft/Slide__008.png","playerLeft/Slide__009.png");}
  
  {bone1=loadImage("backgroundImg/Tiles/Bone1.png");
  bone2=loadImage("backgroundImg/Tiles/Bone2.png");
  bone3=loadImage("backgroundImg/Tiles/Bone3.png");
  bone4=loadImage("backgroundImg/Tiles/Bone4.png");

  tile1=loadImage("backgroundImg/Tiles/Tile1.png");
  tile2=loadImage("backgroundImg/Tiles/Tile2.png");
  tile3=loadImage("backgroundImg/Tiles/Tile3.png");
  tile4=loadImage("backgroundImg/Tiles/Tile4.png");
  tile5=loadImage("backgroundImg/Tiles/Tile5.png");
  tile6=loadImage("backgroundImg/Tiles/Tile6.png");
  tile7=loadImage("backgroundImg/Tiles/Tile7.png");
  tile8=loadImage("backgroundImg/Tiles/Tile8.png");
  tile9=loadImage("backgroundImg/Tiles/Tile9.png");
  tile10=loadImage("backgroundImg/Tiles/Tile10.png");
  tile11=loadImage("backgroundImg/Tiles/Tile11.png");
  tile12=loadImage("backgroundImg/Tiles/Tile12.png");
  tile13=loadImage("backgroundImg/Tiles/Tile13.png");
  tile14=loadImage("backgroundImg/Tiles/Tile14.png");
  tile15=loadImage("backgroundImg/Tiles/Tile15.png");
  tile16=loadImage("backgroundImg/Tiles/Tile16.png");}

  {zombieLAttack=loadAnimation("zombie/left/Attack1.png", "zombie/left/Attack2.png", "zombie/left/Attack3.png", "zombie/left/Attack4.png", "zombie/left/Attack5.png", "zombie/left/Attack6.png", "zombie/left/Attack7.png", "zombie/left/Attack8.png");
  zombieLDead=loadAnimation("zombie/left/Dead1.png", "zombie/left/Dead2.png", "zombie/left/Dead3.png", "zombie/left/Dead4.png", "zombie/left/Dead5.png", "zombie/left/Dead6.png", "zombie/left/Dead7.png", "zombie/left/Dead8.png", "zombie/left/Dead9.png", "zombie/left/Dead10.png", "zombie/left/Dead11.png", "zombie/left/Dead12.png");
  zombieLWalk=loadAnimation("zombie/left/Walk1.png", "zombie/left/Walk2.png", "zombie/left/Walk3.png", "zombie/left/Walk4.png", "zombie/left/Walk5.png", "zombie/left/Walk6.png", "zombie/left/Walk7.png", "zombie/left/Walk8.png", "zombie/left/Walk9.png", "zombie/left/Walk10.png");
  zombieRAttack=loadAnimation("zombie/right/Attack1.png", "zombie/right/Attack2.png", "zombie/right/Attack3.png", "zombie/right/Attack4.png", "zombie/right/Attack5.png", "zombie/right/Attack6.png", "zombie/right/Attack7.png", "zombie/right/Attack8.png");
  zombieRDead=loadAnimation("zombie/right/Dead1.png", "zombie/right/Dead2.png", "zombie/right/Dead3.png", "zombie/right/Dead4.png", "zombie/right/Dead5.png", "zombie/right/Dead6.png", "zombie/right/Dead7.png", "zombie/right/Dead8.png", "zombie/right/Dead9.png", "zombie/right/Dead10.png", "zombie/right/Dead11.png", "zombie/right/Dead12.png");
  zombieRWalk=loadAnimation("zombie/right/Walk1.png", "zombie/right/Walk2.png", "zombie/right/Walk3.png", "zombie/right/Walk4.png", "zombie/right/Walk5.png", "zombie/right/Walk6.png", "zombie/right/Walk7.png", "zombie/right/Walk8.png", "zombie/right/Walk9.png", "zombie/right/Walk10.png");}
}

function setup() {
  createCanvas(1408,640);
  boy=createSprite(400, 200, 50, 50);
  boy.scale=0.25;
  boy.setCollider("rectangle",0,29,230,430)
  boy.addAnimation("boyRIdle", boyRIdle)
  boy.addAnimation("boyRRun", boyRRun)
  boy.addAnimation("boyRDead", boyRDead)
  boy.addAnimation("boyRJump", boyRJump)
  boy.addAnimation("boyRSlide", boyRSlide)
  boy.addAnimation("boyLIdle", boyLIdle)
  boy.addAnimation("boyLRun", boyLRun)
  boy.addAnimation("boyLDead", boyLDead)
  boy.addAnimation("boyLJump", boyLJump)
  boy.addAnimation("boyLSlide", boyLSlide)
  
  
  buttonStart=createSprite(width/2, height/2);
  buttonStart.addImage(buttonStartImg);

  {invisibleGround = createSprite(128,256,250,1);
  invisibleGround.visible=false;
  
  invisibleGround1 = createSprite(448,384,380,1);
  invisibleGround1.visible=false;
  
  invisibleGround2 = createSprite(1024,512,764,1);
  invisibleGround2.visible=false;
  
  invisibleGround3 = createSprite(576,128,380,1);
  invisibleGround3.visible=false;
  
  invisibleGround4 = createSprite(1024,128,250,1);
  invisibleGround4.visible=false;}

  {obj1 = createSprite(1088,192);
  obj1.addImage(tile3);

  obj2 = createSprite(64,320);
  obj2.addImage(tile1);

  obj3 = createSprite(448,192);
  obj3.addImage(tile14);

  obj4 = createSprite(576,192);
  obj4.addImage(tile15);

  obj5 = createSprite(704,192);
  obj5.addImage(tile16);

  obj6 = createSprite(1088,320);
  obj6.addImage(tile13);

  obj7 = createSprite(320,448);
  obj7.addImage(tile11);

  obj8 = createSprite(448,448);
  obj8.addImage(tile2);

  obj9 = createSprite(576,448);
  obj9.addImage(tile3);

  obj10 = createSprite(65,448);
  obj10.addImage(tile4);

  obj11 = createSprite(192,448);
  obj11.addImage(tile10);
  
  obj12 = createSprite(192,320);
  obj12.addImage(tile3);

  obj13 = createSprite(960,320);
  obj13.addImage(tile12);

  obj14 = createSprite(960,192);
  obj14.addImage(tile1);}
  
  {ground1 = createSprite(64,576);
  ground1.addImage(tile8);

  ground2 = createSprite(192,576);
  ground2.addImage(tile5);
  
  ground3 = createSprite(320,576);
  ground3.addImage(tile5);

  ground4 = createSprite(448,576);
  ground4.addImage(tile5);

  ground5 = createSprite(576,576);
  ground5.addImage(tile10);

  ground6 = createSprite(704,576);
  ground6.addImage(tile11);

  ground7 = createSprite(832,576);
  ground7.addImage(tile2);

  ground8 = createSprite(960,576);
  ground8.addImage(tile2);
  
  ground9 = createSprite(1088,576);
  ground9.addImage(tile2);

  ground10 = createSprite(1216,576);
  ground10.addImage(tile2);
  
  ground11 = createSprite(1344,576);
  ground11.addImage(tile2);}

  {barrierX=createSprite(250,320,2,100);
  barrierX.visible=false;
  
  barrierX1=createSprite(635,448,2,100);
  barrierX1.visible=false;
  
  barrierX2=createSprite(900,256,2,230);
  barrierX2.visible=false;
  
  barrierX3=createSprite(1140,256,2,230);
  barrierX3.visible=false;}
}


function draw() {
  background(bg);  
  if(gameState==="play"){
    boy.visible=true;
    buttonStart.visible=false;

  }
  if(mousePressedOver(buttonStart)){
    buttonStart.visible=false;
    gameState="play";
    boy.visible=true;
  }
  
  for(var i = 64; i < width; i=i+128){
    strokeWeight(2);
    stroke("white")
    line(i,0,i,width);
  }
  for(var i = 64; i < height; i=i+128){
    strokeWeight(2);
    stroke("white")
    line(0,i,width,i);
  }
  for(var i = 128; i < width; i=i+128){
    strokeWeight(5);
    stroke("white")
    line(i,0,i,width);
  }
  for(var i = 128; i < height; i=i+128){
    strokeWeight(5);
    stroke("white")
    line(0,i,width,i);
  }
  if(keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW) && jump === true  && boyDirection==="right" && boy.y > jumpLimit && boyMoveX==="true"){
    boyDirection="right";
    boy.y = boy.y-6;
    boy.changeAnimation("boyRJump", boyRJump);
  }
  
  //console.log(jump)
  //console.log(boyDirection)
  boyControl();
  boyTouchingGround();
  boyMoveXTrue();

  textSize(15);
  fill("white");
  drawSprites();
}
function boyControl(){

  if(keyIsDown(RIGHT_ARROW) && boyMoveX==="true"){
    boyDirection="right";
    boy.changeAnimation("boyRRun",boyRRun)
    boy.x +=5;
  }else if(keyWentUp(RIGHT_ARROW)){
    boy.changeAnimation("boyRIdle",boyRIdle)
  }

  if(keyDown(LEFT_ARROW) && boyMoveX==="true"){
    boyDirection="left";
    boy.changeAnimation("boyLRun",boyLRun)
    boy.x =boy.x-5;
  }else if(keyWentUp(LEFT_ARROW)){
    boy.changeAnimation("boyLIdle",boyLIdle)
  }

  if(keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW) && jump === true  && boyDirection==="right" && boy.y > jumpLimit && boyMoveX==="true"){
    boyDirection="right";
    boy.y = boy.y-6;
    boy.changeAnimation("boyRJump", boyRJump);
  }

  if(keyIsDown(UP_ARROW) && keyDown(LEFT_ARROW) && jump === true && boyDirection==="left" && boy.y > jumpLimit){
    boyDirection="left";
    boy.y = boy.y-6;
    boy.changeAnimation("boyLJump", boyLJump);
  }

  if(boy.y < jumpLimit && boyDirection === "right" && keyIsDown(UP_ARROW)){
    jump = false;
    boy.changeAnimation("boyRIdle", boyRIdle);
    boy.velocityY = 4;
  }
  if(boy.y < jumpLimit && boyDirection === "left" && keyWentDown(UP_ARROW)){
    jump = false;
    boy.changeAnimation("boyLIdle", boyLIdle);
    boy.velocityY = 4;
  }

  if(keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW) && boyDirection==="right"){
    boy.x = boy.x+2;
    boy.changeAnimation("boyRSlide", boyRSlide);
  }else if(keyWentUp(DOWN_ARROW)){
    boy.y=boy.y-9;
  }

  if(keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW) && boyDirection==="left"){
    boy.x = boy.x-2;
    boy.changeAnimation("boyLSlide", boyLSlide);
  }else if(keyWentUp(DOWN_ARROW)){
    boy.y=boy.y-9;
  }
}

function boyTouchingGround(){
  if(boy.isTouching(invisibleGround)
  || boy.isTouching(invisibleGround1)
  || boy.isTouching(invisibleGround2)
  || boy.isTouching(invisibleGround3)
  || boy.isTouching(invisibleGround4)){
    boy.velocityY = 0;
    jump=true;
  }else{
    boy.velocityY = 4;
  }
}

function boyMoveXTrue(){
  if(boy.isTouching(barrierX)
  || boy.isTouching(barrierX1)
  || boy.isTouching(barrierX2)
  || boy.isTouching(barrierX3)
  && boyDirection==="right"){
    boyMoveX="false";
    boy.changeAnimation("boyRIdle", boyRIdle);
    boy.x += 5;
  }else{
    boyMoveX = "true"
  }
  if(boy.isTouching(barrierX)
  || boy.isTouching(barrierX1)
  || boy.isTouching(barrierX2)
  || boy.isTouching(barrierX3)
  && boyDirection==="left"){
    boyMoveX="false";
    boy.changeAnimation("boyLIdle", boyLIdle);
    boy.x = boy.x - 5;
  }else{
    boyMoveX = "true"
  }
}

function zombieSpawn(){
  if(frameCount%60===0){
    zombie=createSprite(Math.round(random(100,1300)),0);
    zombie.scale=0.25;
    if(zombie.x <= width/2){
      zombie.addAnimation("zombieRWalk",zombieRWalk);
      zombie.velocityX=1;
    }else{
      zombie.addAnimation("zombieLWalk",zombieLWalk);
      zombie.velocityX=-1;
    }
  }
}

function zombieTouchingGround(){
  if(zombie.isTouching(invisibleGround)
  || zombie.isTouching(invisibleGround1)
  || zombie.isTouching(invisibleGround2)
  || zombie.isTouching(invisibleGround3)
  || zombie.isTouching(invisibleGround4)){
    zombie.velocityY = 0;
  }else{
    zombie.velocityY = 4;
  }
}