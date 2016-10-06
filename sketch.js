function setup() {
  createCanvas(800,1000);
  background(70,0,70);
}

function draw() {
  fill(51); ellipse(150,50,20,20);
  fill(27);triangle(140,80,160,80,150,60);
  fill(200);stroke(127,42,8);rect(110,80,80,50);
  noStroke(); fill(255);ellipse(130,100,20,20);
  fill(255);ellipse(170,100,20,20);
  fill(0);ellipse(127,103,10,10);
  fill(0);ellipse(167,103,10,10);
  fill(200);rect(145,130,10,10);
  fill(200);rect(115,140,70,80);
  fill(51);rect(130,220,15,30);
  fill(51);rect(155,220,15,30);
  fill(51);rect(120,250,25,10);
  fill(51);rect(155,250,25,10);
  fill(0,125,125);quad(95,180,95,160,115,150,115,170);
  quad(186,170,186,150,205,160,205,180);
  fill(0,170,125);ellipse(85,175,20,20);
  ellipse(215,175,20,20);
  fill(51);rect(125,150,50,60);
  fill(200,0,0); rect(140,120,20,5);
}