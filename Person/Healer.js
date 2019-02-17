class Healer extends Person {
  constructor() {
    super();
    this.color = color(0, 255, 0);
    this.damage = -12;
    this.health = 1.5 * maxHealth;
    this.fullHealth = this.health;
    this.cooldown = 20;
  }
}