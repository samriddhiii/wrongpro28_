
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  treeObj=new tree(1050,580);

	mango1=new mango(1100,87,34);
	mango2=new mango(1020,120,32);
	mango3=new mango(935,200,34);
	mango4=new mango(1100,200,30);
	mango5=new mango(1020,220,34);
  mango6=new mango(1212,200,37);
  mango7=new mango(1150,140,29);

  groundObject=new ground(width/2,600,width,20);
  stone1 =new stone(220,390,50,100);

  chain = new slingshot(stone1.body,{x:240,y:420})
  text("Press space to get more chances", 200,200) ;
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy,200,340,200,300);
  
  groundObject.display();
  chain.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone1.display();

   detectCollision(stone1, mango1);
   detectCollision(stone1, mango2);
   detectCollision(stone1, mango3);
   detectCollision(stone1, mango4);
   detectCollision(stone1, mango5);
   detectCollision(stone1, mango6);
   detectCollision(stone1, mango7);
}


function mouseDragged()
{
	Matter.Body.setPosition(stone1.body,{x : mouseX, y : mouseY})
}

function mouseReleased()
{
	chain.fly();
}

function keyPressed()
{
  if (keyCode === 32)
  {
    Matter.Body.setPosition(stone1.body, {x: 235, y: 420})
    chain.attach(stone1.body)
  }
}

function detectCollision(stone11,mango)
{
   MangoBodyPosition = mango.body.position
   StoneBodyPosition = stone11.body.position

   var distance = dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
   //console.log(distance + " " + lmango.r + lstone.radius)
   if (distance <= mango.r + stone11.radius)
   {
      Matter.Body.setStatic(mango.body, false);
   }
}

// function detectCollision(lstone,lmango)
// {
//    MangoBodyPosition = lmango.body.position
//    StoneBodyPosition = lstone.body.position

//    var distance = dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
//    //console.log(distance + " " + lmango.r + lstone.radius)
//    if (distance <= lmango.r + lstone.radius)
//    {
//       Matter.Body.setStatic(lmango.body, false);
//    }
// }