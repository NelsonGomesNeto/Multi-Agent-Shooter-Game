let maxHealth = 100;
var people;
var idCounter = 0;

function setup() {
  createCanvas(1000, 600);
  people = new Array();
  for (var j = 1; j <= 2; j ++)
    for (var i = 0; i < 2; i ++) {
      people.push(new Shooter(j));
      people.push(new Healer(j));
    }
}

function draw() {
  background(131, 136, 132);

  for (var i = 0; i < people.length; i ++) {
    if (people[i].health <= 0) {
      people.splice(i--, 1);
      continue;
    }
    
    people[i].update();
    people[i].display();
  }
}