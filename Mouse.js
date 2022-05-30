function handleMouseMove(evt) {
 //   var canvasScale = Canvas.scale;
    // var canvasOffset = Canvas.offset;
    // var mx = (evt.pageX - canvasOffset.x) / canvasScale.x;
    // var my = (evt.pageY - canvasOffset.y) / canvasScale.y;
    Mouse.position = new Vector2(evt.pageX, evt.pageY);

}

function handleMouseDown(evt) {
    if (evt.which === 1) {
        if (!Mouse.down)
            Mouse.pressed = true;
        Mouse.down = true;
    }
}

function handleMouseUp(evt) {

if (evt.which === 1) {
        Mouse.down = false;
}
}

function Mouse_Singleton() {
    this.position = new Vector2(0, 0)
    this.down = false;
    this.pressed = false;    
}




Mouse_Singleton.prototype.checkInputs = function() {
    document.onmousedown = handleMouseDown
    document.onmouseup = handleMouseUp
    document.onmousemove = handleMouseMove;
};


Mouse_Singleton.prototype.reset = function () {
    this.pressed = false;
};

// Mouse_Singleton.prototype.containsMouseDown = function (rect) {
//     return this.down && rect.contains(this._position);
// };

// Mouse_Singleton.prototype.containsMousePress = function (rect) {
//     return this.pressed && rect.contains(this._position);
// };

var Mouse = new Mouse_Singleton();