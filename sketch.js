var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, cont, cont2, cont3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 80, 10, 20);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(packageSprite.x, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(400, 700, 800, 40);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(400 , 200 , 20 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	


	//Create a Ground
	ground = Bodies.rectangle(400, 700, 800, 40 , {isStatic:true});
	World.add(world, ground);
	 
	cont = new contPiece(400, 671, 150, 20);

	cont2 = new contPiece(330, 632, 20, 100)

	cont3 = new contPiece(465, 632, 20, 100)



	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background("black");
	drawSprites();
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	if (keyPressed(DOWN_ARROW)){
		Body.setStatic(packageBody, false);
	}


	cont.show()
	cont2.show()
	cont3.show()
}

function keyPressed(key) {
	if (keyCode === key) {
		// Look at the hints in the document and understand how to make the package body fall only o
		return true;
	}
	return false;
}
