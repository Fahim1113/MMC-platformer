var bg;
var boy,boyRDead,boyRIdle,boyRJump,boyRRun,boyRSlide,boyLDead,boyLIdle,boyLJump,boyLRun,boyLSlide;
var gameState="waiting";
var boyDirection="right";
var zombie, zombieAttack, zombieDead, zombieIdle, zombieWalk;
var buttonStart, buttonStartImg;

var bone1,bone2,bone3,bone4,tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9,tile10,tile11,tile12,tile13,tile14,tile15,tile16;


function preload(){
  bg=loadImage("BG.png");
  buttonStartImg=loadImage("buttons/play.png")

  boyRDead=loadAnimation("playerRight/Dead__000.png","playerRight/Dead__001.png","playerRight/Dead__002.png","playerRight/Dead__003.png","playerRight/Dead__004.png","playerRight/Dead__005.png","playerRight/Dead__006.png","playerRight/Dead__007.png","playerRight/Dead__008.png","playerRight/Dead__009.png");
  boyRIdle=loadAnimation("playerRight/Idle__000.png","playerRight/Idle__001.png","playerRight/Idle__002.png","playerRight/Idle__003.png","playerRight/Idle__004.png","playerRight/Idle__005.png","playerRight/Idle__006.png","playerRight/Idle__007.png","playerRight/Idle__008.png","playerRight/Idle__009.png");
  boyRJump=loadAnimation("playerRight/Jump__000.png","playerRight/Jump__001.png","playerRight/Jump__002.png","playerRight/Jump__003.png","playerRight/Jump__004.png","playerRight/Jump__005.png","playerRight/Jump__006.png","playerRight/Jump__007.png","playerRight/Jump__008.png","playerRight/Jump__009.png");
  boyRRun=loadAnimation("playerRight/Run__000.png","playerRight/Run__001.png","playerRight/Run__002.png","playerRight/Run__003.png","playerRight/Run__004.png","playerRight/Run__005.png","playerRight/Run__006.png","playerRight/Run__007.png","playerRight/Run__008.png","playerRight/Run__009.png");
  boyRSlide=loadAnimation("playerRight/Slide__000.png","playerRight/Slide__001.png","playerRight/Slide__002.png","playerRight/Slide__003.png","playerRight/Slide__004.png","playerRight/Slide__005.png","playerRight/Slide__006.png","playerRight/Slide__007.png","playerRight/Slide__008.png","playerRight/Slide__009.png");
  boyLDead=loadAnimation("playerLeft/Dead__000.png","playerLeft/Dead__001.png","playerLeft/Dead__002.png","playerLeft/Dead__003.png","playerLeft/Dead__004.png","playerLeft/Dead__005.png","playerLeft/Dead__006.png","playerLeft/Dead__007.png","playerLeft/Dead__008.png","playerLeft/Dead__009.png");
  boyLIdle=loadAnimation("playerLeft/Idle__000.png","playerLeft/Idle__001.png","playerLeft/Idle__002.png","playerLeft/Idle__003.png","playerLeft/Idle__004.png","playerLeft/Idle__005.png","playerLeft/Idle__006.png","playerLeft/Idle__007.png","playerLeft/Idle__008.png","playerLeft/Idle__009.png");
  boyLJump=loadAnimation("playerLeft/Jump__000.png","playerLeft/Jump__001.png","playerLeft/Jump__002.png","playerLeft/Jump__003.png","playerLeft/Jump__004.png","playerLeft/Jump__005.png","playerLeft/Jump__006.png","playerLeft/Jump__007.png","playerLeft/Jump__008.png","playerLeft/Jump__009.png");
  boyLRun=loadAnimation("playerLeft/Run__000.png","playerLeft/Run__001.png","playerLeft/Run__002.png","playerLeft/Run__003.png","playerLeft/Run__004.png","playerLeft/Run__005.png","playerLeft/Run__006.png","playerLeft/Run__007.png","playerLeft/Run__008.png","playerLeft/Run__009.png");
  boyLSlide=loadAnimation("playerLeft/Slide__000.png","playerLeft/Slide__001.png","playerLeft/Slide__002.png","playerLeft/Slide__003.png","playerLeft/Slide__004.png","playerLeft/Slide__005.png","playerLeft/Slide__006.png","playerLeft/Slide__007.png","playerLeft/Slide__008.png","playerLeft/Slide__009.png");
  
  bone1=loadImage("backgroundImg/Tiles/Bone1.png");
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
  tile16=loadImage("backgroundImg/Tiles/Tile16.png");
}

function setup() {
  createCanvas(1408,640);
  boy=createSprite(400, 200, 50, 50);
  boy.scale=0.3

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
}

function draw() {
  background(bg);  
  if(gameState==="waiting"){
    boy.visible=false;
    buttonStart.visible=true;
  }
  if(mousePressedOver(buttonStart)){
    buttonStart.visible=false;
    gameState="play";
    boy.visible=true;
  }

  boyControl();
  //boy.y = boy.y+5;
  textSize(15);
  fill("white");
  text(mouseX+","+mouseY,10,20)
  drawSprites();
}
function boyControl(){
  if(keyIsDown(RIGHT_ARROW)){
    boyDirection="right";
    boy.changeAnimation("boyRRun",boyRRun)
    boy.x +=5;
  }else if(keyWentUp(RIGHT_ARROW)){
    boy.changeAnimation("boyRIdle",boyRIdle)
  }

  if(keyDown(LEFT_ARROW)){
    boyDirection="left";
    boy.changeAnimation("boyLRun",boyLRun)
    boy.x =boy.x-5;
  }else if(keyWentUp(LEFT_ARROW)){
    boy.changeAnimation("boyLIdle",boyLIdle)
  }

  if(keyIsDown(UP_ARROW) && boyDirection==="right"){
    boy.y = boy.y-5;
    boy.changeAnimation("boyRJump", boyRJump);
  }else if(keyWentUp(UP_ARROW)){
    boy.changeAnimation("boyRIdle",boyRIdle)
  }

  if(keyIsDown(UP_ARROW) && boyDirection==="left"){
    boy.y = boy.y-5;
    boy.changeAnimation("boyLJump", boyLJump);
  }else if(keyWentUp(UP_ARROW)){
    boy.changeAnimation("boyLIdle",boyLIdle)
  }

  if(keyIsDown(DOWN_ARROW) && boyDirection==="right"){
    boy.x = boy.x+2;
    boy.changeAnimation("boyRSlide", boyRSlide);
  }else if(keyWentUp(DOWN_ARROW)){
    boy.changeAnimation("boyRIdle",boyRIdle)
  }

  if(keyIsDown(DOWN_ARROW) && boyDirection==="left"){
    boy.x = boy.x-2;
    boy.changeAnimation("boyLSlide", boyLSlide);
  }else if(keyWentUp(UP_ARROW)){
    boy.changeAnimation("boyLIdle",boyLIdle)
  }
}