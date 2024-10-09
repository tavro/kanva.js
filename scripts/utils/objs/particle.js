function Particle(position, velocity, lifetime, points) {
    Shape.call(this, position, points);
    this.velocity = velocity || new Vector2D(0, 0);
    this.lifetime = lifetime || 1.0; // in seconds
    this.age = 0;
}

Particle.prototype = Object.create(Shape.prototype);
Particle.prototype.constructor = Particle;

Particle.prototype.update = function(deltaTime) {
    this.translate(this.velocity.scale(deltaTime));
    this.age += deltaTime;
    Shape.prototype.update.call(this, deltaTime);
};

Particle.prototype.isDead = function() {
    return this.age >= this.lifetime;
};
