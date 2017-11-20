var sprite = function(){
  PIXI.loader.add("../img/ship.png").load(setup);

  function setup() {
    var ship = new PIXI.Sprite(
      PIXI.loader.resources["../img/ship.png"].texture
    );
  }
}
