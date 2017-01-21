var images = [];
var canvas;

function windowResized() {
  canvas.size(window.innerWidth, window.innerHeight);
  redraw();
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('canvas-holder');
  //blendMode(SUBTRACT);

  images = [loadImage("img/bg2day4.png"), loadImage("img/bg3dusk4.png"), loadImage("img/bg4night4.png"), loadImage("img/bg4night4.png"), loadImage("img/bg1dawn4.png"), loadImage("img/bg2day4.png")];
  // noLoop();
}

function draw() {
  background(0);

  var date = new Date();
  var h = date.getHours();
  var i = (floor(h/4) + 3)%images.length;
  console.log(h);
  console.log(i);
  var t = (h/4-floor(h/4) + date.getMinutes()/60)/(ceil(h/4)-floor(h/4));


  tint(255, 255, 255, (cos(t * PI) + 1) / 2 * 255);
  image(images[i], 0, 0, max(width, height / images[i].height * images[i].width), max(height, width / images[i].width * images[i].height));

  if (i + 1 < images.length) {
    tint(255, 255, 255, (-cos(t * PI) + 1) / 2 * 255);
    image(images[i + 1], 0, 0, max(width, height / images[i].height * images[i].width), max(height, width / images[i].width * images[i].height));
  }
}
$(document).ready(function() {
  setTimeout(noLoop, 100);
});
