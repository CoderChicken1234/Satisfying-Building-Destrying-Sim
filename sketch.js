
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bg;
var bigBomb, mediumBomb, smallBomb; 

var brickdude = [];
var destroyerBall;
var destroyButtonRight;
var DRImg;
var wall;

function preload(){
  bg = loadImage('BG.png')
}

function setup() {
  createCanvas(1500,750);

  engine = Engine.create();
  world = engine.world;

  var rect_options ={
    isStatic:true
  }

  for(var i = 0; i<15; i++){  
    var x = 100
    var y = 100
    brickoboi = new BrickY(x, y, 130, 50)
    brickdude.push(brickoboi)
  }

  for(var i = 0; i<15; i++){  
    var x = 230
    var y = 100
    brickoboi = new BrickY(x, y, 130, 50)
    brickdude.push(brickoboi)
  }
  
  for(var i = 0; i<15; i++){  
    var x = 360
    var y = 100
    brickoboi = new BrickY(x, y, 130, 50)
    brickdude.push(brickoboi)
  }

  var circle_options ={
    restitution: 1,
    friction_air: 0.1,
    density: 0.1 
  }

  destroyButtonRight = createImg('Left_arrow.png')
  destroyButtonRight.position(1200, 50)
  destroyButtonRight.size(150,100)
  destroyButtonRight.mouseClicked(drop)


  destroyerBall = new destroyer_Ball(900, 50, 100,100)
  wall = new BrickY(30, 750, 10, 1000)
  
  ground = Bodies.rectangle(850, 700, 1800, 20, rect_options)
  World.add(world, ground)
  
}


function draw() 
{
  rectMode(CENTER)
  ellipseMode(CENTER)
  background(51);

for(var brickoboi of brickdude){
  brickoboi.show()
}
 destroyerBall.show()
 wall.show()
  rect(850, 700, 1800, 20)

  Engine.update(engine);
  
 
}
function drop(){   
  Matter.Body.applyForce(destroyerBall.body, {x:0, y:0}, {x:-80, y:-80}) 
}