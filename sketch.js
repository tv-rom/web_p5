let line;

function preload() {
  line = loadModel('wavyline.obj');
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
}

function draw() {
   background(200);
  rotateX(mouseX/10);
  rotateY(mouseY/10);
  scale(24);
   normalMaterial();
  model(line);
}