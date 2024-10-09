function ParticleSystem(position, particleLifetime, emitRate, particleVelocity, shapePoints) {
    Node.call(this, position);
    this.particles = [];
    this.particleLifetime = particleLifetime || 2.0;
    this.emitRate = emitRate || 10;
    this.particleVelocity = particleVelocity || new Vector2D(0, -100);
    this.shapePoints = shapePoints || [new Vector2D(0, 0)];
    this.timeSinceLastEmit = 0;
}

ParticleSystem.prototype = Object.create(Node.prototype);
ParticleSystem.prototype.constructor = ParticleSystem;

ParticleSystem.prototype.emitParticle = function() {
    // const velocity = this.particleVelocity;
    const particle = new Particle(this.position, new Vector2D().randomVelocity(), this.particleLifetime, this.shapePoints);
    this.addChild(particle);
    this.particles.push(particle);
};

ParticleSystem.prototype.update = function(deltaTime) {
    this.timeSinceLastEmit += deltaTime;
    const emitInterval = 1 / this.emitRate;

    while (this.timeSinceLastEmit >= emitInterval) {
        this.emitParticle();
        this.timeSinceLastEmit -= emitInterval;
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
        const particle = this.particles[i];
        particle.update(deltaTime);
        
        if (particle.isDead()) {
            this.removeChild(particle);
            this.particles.splice(i, 1);
        }
    }
    
    Node.prototype.update.call(this, deltaTime);
};
