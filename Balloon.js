function Balloon(xPosition, index, health) {
  this.position = new Vector2(xPosition, -100);
  this.index = index;
  this.health = health;
  this.currentColor = undefined;
  this.pointValue = undefined;
  this.velocity = new Vector2(0, 0);
  this.origin = new Vector2(60, 60);
  this.reset();
}



Balloon.prototype.moveToTop = function () {
  this.position.y = -Math.random() * 100 - 200;
};

Balloon.prototype.draw = function () {
       Canvas.drawImage(
        sprites.balloons[this.currentColor].normal,
        this.position,
        0,
        this.origin
      );
};

Balloon.prototype.reset = function() {
  this.pointValue = 10;
  this.calculateRandomVelocity();
  this.chooseColor();
  this.moveToTop();
}

Balloon.prototype.calculateRandomVelocity = function () {
  this.velocity.y = Math.random() * 20 + Game.gameWorld.minBalloonVelocity;
};

Balloon.prototype.update = function (delta) {
    this.position.addTo(this.velocity.multiply(delta));
};

Balloon.prototype.chooseRandomValue = function (value) {
  return Math.random() * value;
};


Balloon.prototype.chooseColor = function () {

    this.currentColor =
      Game.gameWorld.normalBalloonTypes[
        Math.floor(Math.random() * Game.gameWorld.normalBalloonTypes.length)
      ];

  
};
