let maxHealth = 100, personSize = 15;
let lines = 50, columns = 50;
let followPathRate = 20;
var lineSize, columnSize;
var people;
var idCounter = 0;

function setup() {
  createCanvas(801, 801);
  lineSize = ((width - 1) / lines), columnSize = ((height - 1) / columns);
  people = new Array();
  for (var j = 1; j <= 2; j ++)
    for (var i = 0; i < 1; i ++) {
      people.push(new Shooter(j));
      // people.push(new Healer(j));
    }
}

function draw() {
  background(131, 136, 132);

  for (var i = 0; i <= lines; i ++) line(0, i * columnSize, width, i * columnSize);
  for (var i = 0; i <= columns; i ++) line(i * lineSize, 0, i * lineSize, height);

  for (var i = 0; i < people.length; i ++) {
    if (people[i].health <= 0) {
      people.splice(i --, 1);
      continue;
    }
    
    people[i].update();
    people[i].display();
  }
}