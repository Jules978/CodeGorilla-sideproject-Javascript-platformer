var spr;
var floor;
function setup() {
  createCanvas(800, 600);
  spr = createSprite(
    width/2, height/3, 40, 40);
  spr.shapeColor = color(255);
  floor = createSprite(
    width/2, 600, 800, 40);
  spr.shapeColor = color(102);
}
function draw() {
  background(50);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text("use arrow keys, or SPACE to stop",
    width/2, height*0.67);
	// constant downward speed
  // (i.e., gravity)
  spr.addSpeed(0.5, 90);
	spr.collide(floor);
  drawSprites();


  if (keyDown("d")) {
    spr.velocity.x = +3;
  }
  
  
  if (keyDown("a")) {
     spr.velocity.x = -3;
  }
  
  if (keyWentDown("w")) {
    spr.velocity.y = -10;
  }
  
  if (keyCode == 's') {
    spr.setSpeed(0, 0);
  }
}