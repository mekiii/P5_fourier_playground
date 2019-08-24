let radius;
let time = 0;
let frequence = 0.01;
let curvePath = [];
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //radius = 4 / (PI * 1) * 100;
  // put setup code here
}

function draw() {
  time += 1;
  background(0);
  translate(400, 400);
  //draw circle
  //draw circulation 
  let lastX = 0;
  let lastY = 0;

  for (let i = 0; i < 20; i++) {
    let n = (i * 2 + 1);
    radius = 100 * (4 / (PI * n));
    x = radius * cos(frequence * time * n)  + lastX;
    y = radius * sin( frequence * time * n) + lastY;
    stroke(255);
    noFill();
    ellipse(lastX, lastY, radius * 2, radius * 2);
    line(lastX, lastY, x, y);
    fill(255)
    noStroke();
    ellipse(x, y, 8, 8);
    lastX = x;
    lastY = y;
  }

  //draw path
  if (time % 3 == 0) {
    curvePath.unshift(y);
  }
  noFill();
  stroke(255);
  beginShape()
  for (let i = 0; i < curvePath.length; i++) {
    let xposition = i + radius + 300;
    stroke(255);
    vertex(xposition, curvePath[i]);
  }
  endShape()
  line(x, y, radius + 300, curvePath[0]);

  if (curvePath.length > 200) {
    curvePath.pop();
  }


}