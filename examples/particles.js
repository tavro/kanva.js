const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleSystem = new ParticleSystem(
    new Vector2D(canvas.width / 2, canvas.height / 2), // TODO: Fix global points bug
    2.0,
    20,
    new Vector2D(0, 0),
    [new Vector2D(-5, -5), new Vector2D(5, -5), new Vector2D(5, 5), new Vector2D(-5, 5)]
);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particleSystem.position = new Vector2D(canvas.width / 2, canvas.height / 2);
});

let lastTime = 0;

function update(timestamp) {
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particleSystem.update(deltaTime);
    
    renderParticles();
    
    requestAnimationFrame(update);
}

function renderParticles() {
    for (let particle of particleSystem.particles) {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(particle.position.x, particle.position.y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

requestAnimationFrame(update);