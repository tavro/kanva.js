function Particle(position, velocity, lifetime, points, color) {
    Shape.call(this, position, points);
    this.velocity = velocity || new Vector2D(0, 0);
    this.lifetime = lifetime || 1.0; // in seconds
    this.age = 0;
    this.color = color || getRandomHexColor();
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

Particle.prototype.randomizeShape = function() {
    this.points = [];
    const randomPoints = generateRandomPoints();
    for (let i = randomPoints.length - 1; i >= 0; i--) {
        this.points.push(new Vector2D(randomPoints[i].x, randomPoints[i].y));
    }
};