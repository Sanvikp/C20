var a, b;

function setup() {
  createCanvas(500,400);
  
a = createSprite(200,200,100,100);
a.shapeColor = "green";

b = createSprite(250,200,100,100);
b.shapeColor = "green";
}


function draw() {
  background(255,255,255);  

a.x = mouseX;
a.y = mouseY;
console.log(a.y - b.y);

if (a.x - b.x < 100 && b.x - a.x < 100 && a.y - b.y < 100 && b.y - a.y < 100 ){
  a.shapeColor = "red";
  b.shapeColor = "red";
}
else{
  a.shapeColor = "green";
  b.shapeColor = "green";
}


  drawSprites();
}