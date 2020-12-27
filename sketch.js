const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree1, ground, stone,mango1,boy,sling,cloud;

function preload()
{
  boy=loadImage("boy.png")
  sky=loadImage("sky.jpg")
}
function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  tree1 = new Tree(1050,340,450,500);
  ground= new Ground(width/2,600,width,20)
  stone = new Stone(255,420,30)
  mango1= new Mango(860,260,24)
  mango2= new Mango(900,330,25)
  mango3= new Mango(1170,200,25)
  mango4 = new Mango(980,200,25)
  mango5 = new Mango(1100,200,25)

  sling = new SlingShot(stone.body,{x:245,y:420})
	Engine.run(engine);
  
}


function draw(){
  background("lightblue");

  image(sky,0,0,1300,600)
  image(boy,230,340,120,250)
  tree1.display();
  ground.display()
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();
  

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)

 
}
function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly()
}

function detectCollision(stone0,mango0){
  mangobody= mango0.body.position
  stonebody= stone0.body.position;

  var distance = dist(stonebody.x,stonebody.y,mangobody.x,mangobody.y);
  if(distance<=mango0.r+ stone0.r){
    Matter.Body.setStatic(mango0.body,false)
  }
}


