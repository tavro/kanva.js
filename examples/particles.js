const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleSystem = new ParticleSystem(
    canvas,
    new Vector2D(canvas.width / 4, canvas.height / 4), // TODO: Oh, this makes sence!
    2.0,
    20,
    new Vector2D(0, 0),
    [new Vector2D(-5, -5), new Vector2D(5, -5), new Vector2D(5, 5), new Vector2D(-5, 5)]
);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particleSystem.position = new Vector2D(canvas.width / 4, canvas.height / 4);
});

let lastTime = 0;
function update(timestamp) {
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    particleSystem.update(deltaTime);
    particleSystem.draw();
    
    requestAnimationFrame(update);
}

requestAnimationFrame(update);