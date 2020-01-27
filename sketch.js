const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var rishab ;
var ball ;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ball_options ={
        restitution: 1.0
    }
ball = Bodies.circle(200,100,10,ball_options)
    var ground_options ={
       isStatic: true 
    }

    ground = Bodies.rectangle(200,380,400,20,ground_options);
    World.add(world,ground);
World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(300,100,40,60);
    ellipse(ball.position.x,ball.position.y,20,20)
}