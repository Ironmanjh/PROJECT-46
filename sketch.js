var player1,player1img
var player2,player2img
var bg
var scene
var player1kick
function preload(){
bg = loadImage("background-boxing-ring.png")
player1img=loadAnimation("Fighter 1-1.png")
player2img=loadAnimation("Fighter 2-1.png.png","Fighter 2-2.png.png","Fighter 2-3.png.png",)
player1kick=loadAnimation("Fighter 1-1.png","Fighter 1-2.png","Fighter 1-3.png","Fighter 1-4.png","Fighter 1-5.png")
}
function setup(){
  createCanvas(600,600)
  scene = createSprite(300,300)
  scene.addImage(bg)
  player1=createSprite(100,300,20,20)
  player1.addAnimation("fighter",player1img)
  player1.addAnimation("kick",player1kick)
  player1.scale=0.9
  player2=createSprite(500,354,20,20)
  player2.addAnimation("fighters",player2img)
  player2.scale=0.6

}
function draw(){
  background("black")
  

  





  drawSprites()
}
function keyPressed(){
  if(keyCode == RIGHT_ARROW && player1.position.x<500){
    player1.position.x +=30
  }
  if(keyCode == LEFT_ARROW && player1.position.x>100){
    player1.position.x -=30
  
  }
  if(keyCode == 68 && player2.position.x<500){
    player2.position.x +=30
    console.log("A")
  }
  if(keyCode == 65 && player2.position.x>100){
    player2.position.x -=30
    console.log("D")
  }
}
function mousePressed(){
  player1.changeAnimation("kick",player1kick)
}
function mouseReleased(){
  player1.changeAnimation("fighter",player1img)
}