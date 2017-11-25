
  left.press = function() {
    ship.vx = -5;
    ship.vy = 0;
  };
  left.release = function() {
    if (!right.isDown && ship.vy === 0) {
      ship.vx = 0;
    }
  };
  up.press = function() {
    ship.vy = -5;
    ship.vx = 0;
  };
  up.release = function() {
    if (!down.isDown && ship.vx === 0) {
      ship.vy = 0;
    }
  };
    right.press = function() {
    ship.vx = 5;
    ship.vy = 0;
  };
  right.release = function() {
    if (!left.isDown && ship.vy === 0) {
      ship.vx = 0;
    }
  };
  down.press = function() {
    ship.vy = 5;
    ship.vx = 0;
  };
  down.release = function() {
    if (!up.isDown && ship.vx === 0) {
      ship.vy = 0;
    }
  };
