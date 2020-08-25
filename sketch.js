let line;

function preload() {
  line = loadModel('af2.obj');
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  background('rgba(0,255,0, 0.25)');
  rotateX(180);
}

function draw() {

  //orbitControl();
//background('rgba(0,255,0, 0.25)');
    let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

 // ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);



   rotateY(frameCount * -0.01);
  //rotateY(mouseX/1000);
  scale(displayWidth/16);
  // normalMaterial();
  specularMaterial(0);
  model(line);
}