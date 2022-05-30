var sprites = {};

Game.loadAssets = function() {
  var loadImage = function(img) {
    return Game.loadImage('Sprites/' + img)
  }

  sprites.extras = {
    'background': {'basic': loadImage('background.jpg')},
    'text-box': loadImage('text_box.png')
  }

  
  sprites.cannon_parts = {
    'barrel': {'normal': loadImage("cannon_barrel.png")},
    'red': {'normal': loadImage("cannon_red.png")},
    'green': {'normal': loadImage("cannon_green.png")},
    'blue': {'normal': loadImage("cannon_blue.png")}
  }

  
  sprites.balls = {
    'red': {'normal': loadImage("ball_red.png")},
    'green': {'normal': loadImage("ball_green.png")},
    'blue': {'normal': loadImage("ball_blue.png")}
  }

  sprites.balloons = {
    'red': {'normal': loadImage("balloon_red.png")},
    'green': {'normal': loadImage("balloon_green.png")},
    'blue': {'normal': loadImage("balloon_blue.png")}
  }
}