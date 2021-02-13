var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11
var a;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)


  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  


  a=a-1;
  block1 = new
  block2 = new
  block3 = new
  block4 = new
  block5 = new
  block6 = new
  block7 = new
  block8 = new
  block9 = 
  block10 =
  block11 =
  



  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}

 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 