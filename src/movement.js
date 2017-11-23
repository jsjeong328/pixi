
  //Left arrow key `press` method
  left.press = function() {
    //Change the ship's velocity when the key is pressed
    ship.vx = -5;
    ship.vy = 0;
  };

  //Left arrow key `release` method
  left.release = function() {
    //If the left arrow has been released, and the right arrow isn't down,
    //and the ship isn't moving vertically:
    //Stop the ship
    if (!right.isDown && ship.vy === 0) {
      ship.vx = 0;
    }
  };

  //Up
  up.press = function() {
    ship.vy = -5;
    ship.vx = 0;
  };
  up.release = function() {
    if (!down.isDown && ship.vx === 0) {
      ship.vy = 0;
    }
  };
  //Right
  right.press = function() {
    ship.vx = 5;
    ship.vy = 0;
  };
  right.release = function() {
    if (!left.isDown && ship.vy === 0) {
      ship.vx = 0;
    }
  };
  //Down
  down.press = function() {
    ship.vy = 5;
    ship.vx = 0;
  };
  down.release = function() {
    if (!up.isDown && ship.vx === 0) {
      ship.vy = 0;
    }
  };
  //Set the game state
  state = play;
  //Start the game loop
  gameLoop();
}
