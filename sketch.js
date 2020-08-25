let line;

function preload() {
  line = loadModel('wavyline.obj');
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
}

function draw() {
   background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(24);
   normalMaterial();
  model(line);
}