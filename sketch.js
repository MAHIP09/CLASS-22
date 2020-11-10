const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var ground1={
    isStatic:true
  }



  ground=Bodies.rectangle(200,390,200,20,ground1)
  World.add(world,ground)

  var ball1={
    restitution:1.0
  }
 
  ball=Bodies.circle(200,100,20,ball1)
  World.add(world,ball)

 }

function draw() {
  background(255,255,255);  

  Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,390,20);
 
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
}