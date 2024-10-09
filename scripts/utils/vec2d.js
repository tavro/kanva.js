function Vector2D(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector2D.prototype.difference = function(other) {
    return new Vector2D(other.x - this.x, other.y - this.y);
};

Vector2D.prototype.add = function(other) {
    return new Vector2D(this.x + other.x, this.y + other.y);
};

Vector2D.prototype.scale = function(value) {
    return new Vector2D(this.x * value, this.y * value);
};

Vector2D.prototype.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector2D.prototype.distance = function(other) {
    return this.difference(other).magnitude();
};

Vector2D.prototype.normalized = function() {
    const magnitude = this.magnitude();
    return this.scale(1 / magnitude);
};