
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plane1 = new plane(400, 700,800,20)
    hammer1 = new hammer(100,100)
	rubber1 = new rubber(300, 500)
	stone1 = new stone(200,400,150,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  plane1.display()
  stone1.display()
  rubber1.display()
  hammer1.display()
  drawSprites();
 
}



