function Node(position) {
    this.position = position || new Vector2D(0, 0);
    this.rotation = 0;
    this.scale = 1;
    this.parent = null;
    this.children = [];
}

Node.prototype.setPosition = function(position) {
    this.position = position;
};

Node.prototype.translate = function(vector) {
    this.position = this.position.add(vector);
};

Node.prototype.setRotation = function(angle) {
    this.rotation = angle;
};

Node.prototype.rotate = function(angle) {
    this.rotation += angle;
};

Node.prototype.setScale = function(scale) {
    this.scale = scale;
};

Node.prototype.addChild = function(childNode) {
    childNode.parent = this;
    this.children.push(childNode);
};

Node.prototype.removeChild = function(childNode) {
    const index = this.children.indexOf(childNode);
    if (index !== -1) {
        this.children.splice(index, 1);
        childNode.parent = null;
    }
};

Node.prototype.getGlobalPosition = function() {
    if (this.parent) {
        const parentGlobalPosition = this.parent.getGlobalPosition();
        return parentGlobalPosition.add(this.position);
    }
    return this.position;
};

Node.prototype.updateChildren = function() {
    for (var i = 0; i < this.children.length; i++) {
        this.children[i].updateChildren();
    }
};

Node.prototype.update = function(deltaTime) {
    this.updateChildren();
};