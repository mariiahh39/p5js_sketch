function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw(){
  
 stroke("BLUE");
 fill("red");
  
//console.log(eoueipressed);
  
if(mouseIsPressed) {
  rect(mouseX,mouseY,20,35);
 }
}