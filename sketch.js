
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin;
function preload()
{
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(700,700,3000,10);

dustbin = createSprite(450,650,100,200)
dustbin.addImage(dustbinImage)
dustbin.scale = (0.7)
//dustbin = new DustBin(500,650);
ball = new paperObject(100,650,70)

}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  ground.display();
  dustbin.display();
 
		ball.display();

		if(ball.body.position.x>600){
			Matter.Body.setStatic(ball.body,true);
		}
		drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW ){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-800});
}


}

