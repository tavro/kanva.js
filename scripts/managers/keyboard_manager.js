function KeyboardManager() {
    this.keysPressed = {};
    this.keyDownCallbackList = {};
    this.keyUpCallbackList = {};
}

KeyboardManager.prototype.isKeyHeld = function(key) {
    return key in this.keysPressed;
};

KeyboardManager.prototype.addKeyDownListener = function(key, func) {
    if (key in this.keyDownCallbackList) {
        this.keyDownCallbackList[key].push(func);
    } else {
        this.keyDownCallbackList[key] = [func];
    }
};

KeyboardManager.prototype.addKeyUpListener = function(key, func) {
    if (key in this.keyUpCallbackList) {
        this.keyUpCallbackList[key].push(func);
    } else {
        this.keyUpCallbackList[key] = [func];
    }
};

KeyboardManager.prototype.logKeyDown = function(key) {
    if (!(key in this.keysPressed)) {
        this.keysPressed[key] = true;
        
        if (key in this.keyDownCallbackList) {
            const funcs = this.keyDownCallbackList[key];
            funcs.forEach(function(func) {
                func();
            });
        }
    }
};

KeyboardManager.prototype.logKeyUp = function(key) {
    if (key in this.keysPressed) {
        delete this.keysPressed[key];

        if (key in this.keyUpCallbackList) {
            const funcs = this.keyUpCallbackList[key];
            funcs.forEach(function(func) {
                func();
            });
        }
    }
};