
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bob1=new Bob(100,300)
bob2=new Bob(150,300)
bob3=new Bob(200,300)
bob4=new Bob(250,300)

roof=new Roof(200,200,200,20)
rope1=new Rope(bob1.body,roof.body)
rope2=new Rope(bob2.body,roof.body)
rope3=new Rope(bob3.body,roof.body)
rope4=new Rope(bob4.body,roof.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
rope2.display();
  rope3.display();
  rope4.display();
  roof.display();
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}


