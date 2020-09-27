
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree1, ground1, boyImage, stone1;
var mangoobj1, mangoobj2, mangoobj3, mangoobj4, mangoobj5;
var slingshot;



function preload()
{
	ball_img=loadImage("Plucking mangoes/stone.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


	//Create the Bodies Here.

	tree1 = new tree(200, 200, 20, 20);
	ground1 = new Ground(400, 20, 800, 20);
	boyImage = new boy(100, 200, 20, 20);
	//stone1 = new stone();
	mangoobj1 = new mango(470, 450, 30, 30);
	mangoobj2 = new mango(510, 440, 30, 30);
	mangoobj3 = new mango(550, 400, 30, 30);
	mangoobj4 = new mango(610, 460, 30, 30);
	mangoobj5 = new mango(570, 420, 30, 30);
	slingshot = new SlingShot(this.stone1,{x:235,y:420});
	ball = Bodies.circle(50,200,20);
	World.add(world,ball);
	
	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tree1.display();
  boyImage.display();
  //stone1.display();
  mangoobj1.display();
  mangoobj2.display();
  mangoobj3.display();
  mangoobj4.display();
  mangoobj5.display();
  launcherObj.display();
  
  imageMode(CENTER)
  image(ball ,ball.position.x,ball.position.y,40,40);

}

function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingshot.fly();
  }
  
  function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(this.stone1, {x:235, y:420})

//	launcherObj.attach(stone1.body);
	}
  }