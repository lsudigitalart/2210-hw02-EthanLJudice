//Author @Ethan Judice
function setup() {
  createCanvas(400, 269);
  fill('black');
  ellipse(250, 250, 1000, 1000);
  //fill(255);







  fill('yellow')
  beginShape();
  vertex(-1, -1);
  vertex(-1, 135);
  vertex(173, 130);
  vertex(65, -1);
  endShape(CLOSE)

  fill('blue')
  //Left Blue Square
  beginShape();
  vertex(301, 127);
  vertex(170, 0);
  vertex(75, 0);
  vertex(180, 130);
  endShape(CLOSE)
  //Right Blue Square
  beginShape();
  vertex(380, -1);
  vertex(245, -1);
  vertex(316, 126);
  vertex(401, 124);
  vertex(401, 25);
  endShape(CLOSE)

  fill('white')
  //Tiny White Corner Triangle
  beginShape()
  vertex(401, -1);
  vertex(401, 10);
  vertex(391, -1);
  endShape(CLOSE)



  fill('red')
  //Bottom Red Line
  beginShape();
  vertex(401, 210);
  vertex(0, 213);
  vertex(0, 270);
  vertex(401, 270);
  endShape(CLOSE)
  //Middle Red Line
  beginShape();
  vertex(401, 175);
  vertex(0, 180);
  vertex(0, 205);
  vertex(401, 204);
  endShape(CLOSE)
  //Top Red Line
  beginShape();
  vertex(401, 130);
  vertex(0, 140);
  vertex(0, 174);
  vertex(401, 168);
  endShape(CLOSE)
  //Top Red Triangle
  beginShape();
  vertex(235, -1);
  vertex(310, 126);
  vertex(180, -1);
  endShape(CLOSE)
}

function draw() {
  // Put things you want to over and over here. 
}
