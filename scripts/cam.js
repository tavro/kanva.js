function Camera(canvasWidth, canvasHeight, size) {
    this.position = new Vector2D(0, 0);
    this.aspectRatio = canvasWidth / canvasHeight;
    this.size = size || 100;
}

Camera.prototype.setCameraPosition = function(value) {
    this.position = this.position.add(value);
};

Camera.prototype.followTarget = function(targetCoords) {
    const offsetX = (this.size * this.aspectRatio) / 2;
    const offsetY = this.size / 2;
    const delta = this.position.difference(targetCoords.add(new Vector2D(-offsetX, -offsetY))).scale(0.2);
    this.position = this.position.add(delta);
};