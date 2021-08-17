var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var select;
var Leaf,LeafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg =loadImage("apple.png")
  LeafImg=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}




function draw() {
  background(0);

  rabbit.x=mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  

  drawSprites();

  if(frameCount%80==0){
  select=Math.round(random(1,2))
  if (select==1){
    createApples()
  }
  else {
    createLeafs()
  }
  }
  
 
}


function createLeafs (){
  Leaf=createSprite(Math.round(random(10,300)),50,10,10)
  Leaf.addImage("Leaf Img",LeafImg)
  Leaf.scale=0.1;
  Leaf.velocityY=4
  }

function createApples (){
apple=createSprite(Math.round(random(10,300)),50,10,10)
apple.addImage("apple Img",appleImg)
apple.scale=0.1;
apple.velocityY=4
}