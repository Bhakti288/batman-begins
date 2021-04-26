const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops,thunder,thunder1,thunder2;


function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
}

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
      thunderCreatedFrame=frameCount;
      thunder = createSprite(random(10,370),random(10,30),10,10);
      switch(rand){
        case 1 : thunder.addImage(thunder1);
        break;
        case 2 : thunder.addImage(thunder2);
        break;
        default: break;
        thunder.scale = random(0.3,0.6);

      }



    
}

function draw(){
    Engine.update(engine);
    maxDrops.display();
}   



}
