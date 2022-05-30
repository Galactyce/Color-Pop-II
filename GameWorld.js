function GameWorld() { 
  this.cannon = new Cannon();
  this.balls = new Array();
  this.attackStrength = 1;
  this.balloons = new Array();
  this.rows = new Array();
  this.balloonsPerRow = 1
  this.rowPositions = new Array();
  this.minBalloonVelocity = undefined;
  this.defaultBalloonHealth = 1;
  this.normalBalloonTypes = new Array("red", "green", 'blue');
  this.score = 0;
  this.reset();
}



GameWorld.prototype.update = function(delta) {
  this.cannon.update()

  for (var i = 0; i < this.rows.length; i++) {
    if (this.rows[i] < this.balloonsPerRow) {
      this.balloons.push(new Balloon(this.rowPositions[i], i, this.defaultBalloonHealth));
      this.rows[i]++;
    }
  }

  for (var i=0; i < this.balloons.length; i++) {
    this.balloons[i].update(delta);
  }

  for (var i=0; i < this.balls.length; i++) {
    this.balls[i].update(delta);

    if (this.balls[i].position.y > Canvas.canvas.height) {
      this.balls[i] = null;
      this.balls = this.balls.filter((a) => a)
      break
    }

    var removeBall = false;

    for (var k=0; k<this.balloons.length; k++) {
      var distanceX = this.balloons[k].position.x - this.balls[i].position.x;
      var distanceY = this.balloons[k].position.y - this.balls[i].position.y;
      if (Math.abs(distanceX) < 65 && Math.abs(distanceY) < 65) {

        if (this.balloons[k].currentColor === this.balls[i].currentColor) {
        this.balloons[k].health -= this.attackStrength;
        if (this.balloons[k].health <= 0) {
          this.rows[this.balloons[k].index] -= 1;
          this.score += this.balloons[k].pointValue;
          this.balloons[k] = null;
          this.balloons = this.balloons.filter((a) => a)
        }
      }
      alert()
      removeBall = true;

      }

      if (this.balloons[k].position.y > Canvas.canvas.height) {
        this.rows[this.balloons[k].index] -= 1;
        this.balloons[k] = null;
        this.balloons = this.balloons.filter((a) => a)
      }
    }

    if (removeBall) {
      this.balls[i] = null;
      this.balls = this.balls.filter((a) => a)
    }
  }
}

GameWorld.prototype.reset = function() {
  
  this.rowPositions = new Array(700, 900, 1100);
  this.minBalloonVelocity = 30;
  this.normalBalloonTypes = new Array('red', 'green', 'blue')
  this.rows = new Array(0, 0, 0)
}

GameWorld.prototype.handleInput = function() {

}

GameWorld.prototype.resetInputs = function() {

}

GameWorld.prototype.draw = function() {
  Canvas.drawImage(sprites.extras['background'].basic);
  Canvas.drawImage(sprites.extras['text-box'], new Vector2(10, 10))
  Canvas.drawText(
    "Score: " + this.score,
    new Vector2(120, 24),
    new Vector2(0, 0),
    "white",
    "center",
    "Courier New",
    "25px"
  );
  this.cannon.draw()
  for (var i=0; i < this.balls.length; i++) {
    this.balls[i].draw();
  }

  for (var i=0; i < this.balloons.length; i++) {
    this.balloons[i].draw()
  }
}

GameWorld.prototype.isOutsideWorld = function (position) {
  return position.x < 0 || position.x > Canvas.canvas.width || position.y > Canvas.canvas.height;
};