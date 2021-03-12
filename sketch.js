const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint 
var engine,world 
var Bimage,base,leftbase,rightbase,slingshot
var pole1,pole2,pole3,pole4
var ninja,monster1,monster2,monster3
var dart1,dart,dart3,dart4,dart5,dart6
var monsterDart1,monsterDart2,monsterDart3,dartImg
function preload(){
Bimage=loadImage("bbg.png")
dartImg=loadImage("mondart.png")
}

function setup(){
  createCanvas(1000,600)
engine=Engine.create()
world=engine.world
pole1=new Pole(100,450,50,300)
pole2=new Pole(400,500,50,200)
pole3=new Pole(850,380,50,450)
ple4=new Pole(600,430,50,350)
ninja=new Ninja(100,250,100,100)
monster1=new Monster(360,400,100,100)
monster2=new Monster(580,300,100,100)
monster3=new Monster(830,220,50*2,50*2)
dart1=new Dart(400,20,40,40)
dart2=new Dart(410,10,40,40)
dart3=new Dart(420,30,40,40)
dart4=new Dart(430,40,40,40)
dart5=new Dart(440,10,40,40)
dart6=new Dart(380,25,40,40)
base=new Ground(400,130,100,5)
leftbase=new Ground(350,60,5,150)
rightbase=new Ground(450,60,5,150)
slingshot=new Sling(dart1.body,{x:60,y:280})
}

function draw(){
  background(Bimage)
  if(frameCount%200===0){
monsterDart1=createSprite(300,400,40,40)
monsterDart1.addImage(dartImg)
monsterDart1.velocityX=random(-2,-10)
monsterDart1.velocityY=random(-2,-8)
monsterDart1.scale=0.1
  }

  if(frameCount%500===0){
    monsterDart2=createSprite(550,300,40,40)
    monsterDart2.addImage(dartImg)
    monsterDart2.velocityX=random(-2,-10)
    monsterDart2.velocityY=random(-2,-10)
    monsterDart2.scale=0.1
  }
  if(frameCount%700===0){
    monsterDart3=createSprite(800,230,40,40)
    monsterDart3.addImage(dartImg)
    monsterDart3.velocityX=random(-5,-10)
    monsterDart3.velocityY=random(-1,-5)
        monsterDart3.scale=0.1
  }
  
  Engine.update(engine)
  pole1.display()
pole2.display()
pole3.display()
ple4.display()
ninja.display()
monster1.display()
monster3.display()
monster2.display()
dart1.display()
dart2.display()
dart3.display()
dart4.display()
dart5.display()
dart6.display()
leftbase.display()
rightbase.display()
base.display()
slingshot.display()

drawSprites()
}
function mouseDragged(){
Matter.Body.setPosition(dart1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly()

}