let maxHealth = 100, personSize = 15;
let lines = 50, columns = 50;
let followPathRate = 20;
let teamNumber = 2;
let teamSize = 2;
let canvasWidth = 950;
let canvasHeight = Math.round(canvasWidth * 0.75);
let spawnSize = canvasWidth/10;
let spawnRedColor;
let spawnBlueColor;
let backgroundColor;

var lineSize, columnSize;
var people;
var idCounter = 0;

function setup() {
  spawnRedColor = color(224, 102, 102);
  spawnBlueColor = color(111, 168, 220);
  backgroundColor = color(200, 200, 200);
  createCanvas(canvasWidth, canvasHeight);
  lineSize = ((width - 1) / lines), columnSize = ((height - 1) / columns);
  people = [];
  for (let j = 1; j <= teamNumber; j ++)
    for (let i = 0; i < teamSize; i ++) {
      people.push(new Shooter(j));
      people.push(new Healer(j));
    }
}

function drawSpawnZone() {
  push();
  translate(0, 0);
  fill(spawnRedColor);
  rect(0, 0, spawnSize, height);

  translate(width - spawnSize, 0);
  fill(spawnBlueColor);
  rect(0, 0, spawnSize, height);
  pop();
}

function draw() {
  
  let i;
  background(backgroundColor);
  drawSpawnZone();

  for (i = 0; i <= lines; i ++) line(0, i * columnSize, width, i * columnSize);
  for (i = 0; i <= columns; i ++) line(i * lineSize, 0, i * lineSize, height);

  for (i = 0; i < people.length; i ++) {
    if (people[i].health <= 0) {
      people.splice(i --, 1);
      continue;
    }

    people[i].update();
    people[i].display();
  }
}