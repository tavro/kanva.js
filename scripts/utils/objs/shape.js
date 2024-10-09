function Shape(position, points) {
    Node.call(this, position);
    this.points = points || [];
    this.color = color || '#000000';
}

Shape.prototype = Object.create(Node.prototype);
Shape.prototype.constructor = Shape;

Shape.prototype.addPoint = function(point) {
    this.points.push(point);
};

Shape.prototype.removePoint = function(point) {
    const index = this.points.indexOf(point);
    if (index !== -1) {
        this.points.splice(index, 1);
    }
};

Shape.prototype.getGlobalPoints = function() {
    const globalPoints = [];
    const globalPosition = this.getGlobalPosition();
    
    for (let i = 0; i < this.points.length; i++) {
        let point = this.points[i];
        
        point = point.scale(this.scale);
        
        const rotatedX = point.x * Math.cos(this.rotation) - point.y * Math.sin(this.rotation);
        const rotatedY = point.x * Math.sin(this.rotation) + point.y * Math.cos(this.rotation);
        point = new Vector2D(rotatedX, rotatedY);
        
        point = point.add(globalPosition);
        
        globalPoints.push(point);
    }
    
    return globalPoints;
};

Shape.prototype.setColor = function(color) {
    this.color = color;
};

Shape.prototype.update = function(deltaTime) {
    Node.prototype.update.call(this, deltaTime);
};
