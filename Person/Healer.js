class Healer extends Person {
  constructor(teamID) {
    super(teamID);
    this.color = color(0, 255, 0);
    this.damage = 12;
    this.health = 1.5 * maxHealth;
    this.fullHealth = this.health;
    this.cooldown = 20;
    this.isHealer = true;
  }

  heal() {
    this.healings.push(new Healing(this.position.copy(), this.id, this.teamID));
  }

  healMates() {
    if (this.distanceToTeamMates() <= this.size * 5)
      this.heal();
  }

  distanceToTeamMates() {
    var minDist = 1e9;
    for (var i = 0; i < people.length; i ++)
      if (this.id != people[i].id && this.teamID == people[i].teamID)
        minDist = min(minDist, this.position.dist(people[i].position))
    return(minDist);
  }

  getMovements() {
    super.getMovements();
    if ((mouseIsPressed && this.activated && mouseButton === RIGHT &&
        this.position.x - this.size*1.1 <= mouseX && mouseX <= this.position.x + this.size*1.1 &&
        this.position.y - this.size*1.1 <= mouseY && mouseY <= this.position.y + this.size*1.1))
      this.heal();
  }

  display() {
    fill(255, 255, 255);
    for (var i = 0; i < this.healings.length; i++) {
      this.healings[i].display();
      if (this.healings[i].empty) 
        this.healings.splice(i--, 1);
    }
    super.display();
  }
}