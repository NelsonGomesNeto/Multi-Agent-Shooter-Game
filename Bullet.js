class Bullet {
  constructor(startPosition, angle, personID, teamID, damage, bulletWillHit) {
    this.position = startPosition;
    this.velocity = createVector(10, 0);
    this.angle = angle;
    this.velocity.rotate(this.angle);
    this.isOffScreen = false;
    this.personID = personID;
    this.teamID = teamID;
    this.damage = damage;
    this.bulletWillHit = bulletWillHit;
  }

  update() {
    this.position.add(this.velocity);
    if (this.position.x < 0 || this.position.x > width || this.position.y < 0 || this.position.y > height)
      this.isOffScreen = true;
    if (!this.isOffScreen)
      for (var i = 0; i < people.length; i ++)
        if (people[i].id != this.personID && this.bulletWillHit(people[i].teamID, this.teamID)
            && people[i].position.x - people[i].size <= this.position.x 
            && this.position.x <= people[i].position.x + people[i].size
            && people[i].position.y - people[i].size <= this.position.y 
            && this.position.y <= people[i].position.y + people[i].size) {
          people[i].health -= this.damage, this.isOffScreen = true;
          people[i].health = min(people[i].health, people[i].fullHealth);
        }
  }

  display() {
    push();
      translate(this.position.x, this.position.y);
      rotate(this.angle);
      fill(255, 0, 0);
      rect(0, -2.5, 10, 5);
    pop();
  }
}