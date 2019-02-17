class Bullet {
  constructor(startPosition, angle, id, damage) {
    this.position = startPosition;
    this.velocity = createVector(10, 0);
    this.angle = angle;
    this.velocity.rotate(this.angle);
    this.isOffScreen = false;
    this.id = id;
    this.damage = damage;
  }

  update() {
    this.position.add(this.velocity);
    if (this.position.x < 0 || this.position.x > width || this.position.y < 0 || this.position.y > height) {
      this.isOffScreen = true;
    }
    if (!this.isOffScreen)
      for (var i = 0; i < peolpe.length; i ++)
        if (peolpe[i].id != this.id
            && peolpe[i].position.x - peolpe[i].size <= this.position.x 
            && this.position.x <= peolpe[i].position.x + peolpe[i].size
            && peolpe[i].position.y - peolpe[i].size <= this.position.y 
            && this.position.y <= peolpe[i].position.y + peolpe[i].size){
          peolpe[i].health -= this.damage, this.isOffScreen = true;
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