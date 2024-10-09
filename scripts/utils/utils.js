function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215);
    const hexColor = '#' + randomColor.toString(16).padStart(6, '0');
    return hexColor;
}

function getRandomVelocity() {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 50 + 50;
    return {x: Math.cos(angle) * speed, y: Math.sin(angle) * speed}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomPoints() {
    const numPoints = getRandomInt(3, 10);
    const points = [];

    for (let i = 0; i < numPoints; i++) {
        const point = { x: getRandomInt(-10, 10), y: getRandomInt(-10, 10) };
        points.push(point);
    }

    return points;
}