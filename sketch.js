
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var line1,line2,line3
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


ball=new Ball(100,300,20)


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display()
 
}



