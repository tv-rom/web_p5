let octahedron;

function preload() {
  octahedron = loadModel('assets/octahedron.obj');
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
}

function draw() {
   background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(octahedron);
}