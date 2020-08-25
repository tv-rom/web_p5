let line;

function preload() {
  line = loadModel('wavyline.obj');
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
}

function draw() {
   background(200);
  rotateX(frameCount * mouseX/10);
  rotateY(frameCount * mouseY/10);
  scale(24);
   normalMaterial();
  model(line);
}