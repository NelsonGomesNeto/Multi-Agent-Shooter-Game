let maxHealth = 100;
var people;
var idCounter = 0;

function setup() {
  createCanvas(1000, 600);
  people = new Array();
  for (var i = 0; i < 10; i ++) people.push(new Shooter());
  for (var i = 0; i < 5; i ++) people.push(new Healer());
}

function draw() {
  background(131, 136, 132);

  for (var i = 0; i < people.length; i ++) {
    if (people[i].health <= 0) {
      people.splice(i --, 1);
      continue;
    }
    people[i].update();
    people[i].display();
  }
}