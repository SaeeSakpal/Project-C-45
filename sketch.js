var canvas;
var man;
var shark, fish;
var  ship;
var edge;

function setup (){
  canvas = createcanvas(800, 600);

  ship = createSprite(random(30,300), random(30,300), 50, 20);
  ship.shapeColor = "brown";  
}

function draw(){
  background(rgb(255, 255, 255));

  fish();
  shark();
}

function fish(){
  if (frameCount % 100 === 0){
    var fish = createSprite(800, 400, 15, 15);
    fish.y = Math.round(random(100, 350));
    fish.velocityX = -2;
    fish.lifetime = 200;
  }
}

function shark(){
  if (frameCount % 120 === 0) {
    var shark = createSprite(800, 300, 30, 30);
    shark.y = Math.round(random(80,520));
    shark.velocityX = Math.round(random(-3, -5));
    shark.lifetime = 250;
  }
}

function man() {
  if (frameCount % 80 ===0) {
    var man = createSprite(0, 200, 10, 10);
    man.y = Math.round(random(100, 500));
    //man.velovityX = 

  }

}