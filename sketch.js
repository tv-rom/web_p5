let line;

function preload() {
  line = loadModel('af.obj');
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  background('rgba(0,255,0, 0.25)');

}

function draw() {

  orbitControl();


  rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
  rotateY(mouseX/1000);
  scale(displayWidth/6);
   normalMaterial();
  model(line);
}