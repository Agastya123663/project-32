
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score = 0 ; 
var bg = "sprites/bg.png"
var backgroundImg

function preload()
{
  getBackgroundImage();
}
function setup() {
  createCanvas(800, 400);




	engine = Engine.create();
  world = engine.world;

	box1 = new Box(330,235,30,40);
	box2 = new Box(360,235,30,40);
	box3 = new Box(390,235,30,40);
	box4 = new Box(420,235,30,40);
	box5 = new Box(450,235,30,40);
	box6 = new Box(360,195,30,40);
	box7 = new Box(390,195,30,40);
	box8 = new Box(420,195,30,40);
  box9 = new Box(390,155,30,40);

  stand = new Ground(390,270,400,10);
  ground = new Ground(400,380,800,10);

  striker = new Striker(100,250,30,30);

  sling = new SlingShot(striker.body,{x:100,y:250});




	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  
 if(backgroundImg){
   background(backgroundImg);
 }

  textSize(30);
  fill("white");
 text("SCORE : " + score , 600,100);



  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  stand.display();
  ground.display();
  striker.display();
  sling.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(striker.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(striker.body,{x:100,y:250});
    sling.attach(striker.body)

  }
} 

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour > 05 && hour < 19){
    bg = "sprites/bg.png";
  }
  else{
    bg = "sprites/bg2.jpg";
  }
  backgroundImg = loadImage(bg);

}
