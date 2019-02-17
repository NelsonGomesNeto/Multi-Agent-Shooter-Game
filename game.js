let maxHealth = 100;
var peolpe;
var idCounter = 0;

function setup() {
  createCanvas(1000, 600);
  peolpe = new Array();
  for (var i = 0; i < 10; i ++) peolpe.push(new Person(1));
  for (var i = 0; i < 5; i ++) peolpe.push(new Person(0));
}

function draw() {
  background(131, 136, 132);

  for (var i = 0; i < peolpe.length; i ++) {
    if (peolpe[i].health <= 0) {
      peolpe.splice(i --, 1);
      continue;
    }
    peolpe[i].update();
    peolpe[i].display();
  }
}