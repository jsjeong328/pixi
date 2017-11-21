var renderingFunc = function(){
  //Create the renderer
  var renderingOption = option();
  var renderer = PIXI.autoDetectRenderer(
    renderingOption.width,
    renderingOption.height,
    renderingOption.others
  );
  renderer.backgroundColor = renderingOption.backgroundColor;

  //Add the canvas to the HTML document
  document.body.appendChild(renderer.view);

  //Create a container object called the `stage`
  var stage = new PIXI.Container();

  //Tell the `renderer` to `render` the `stage`
  PIXI.loader.add("../img/ship.png").load(setup);

  var ship;
  function setup() {
    ship = new PIXI.Sprite(
      PIXI.loader.resources["../img/ship.png"].texture
    );

    ship.x = 350;
    ship.y = 470;
    ship.width = 70;
    ship.height = 70;
    stage.addChild(ship);
    renderer.render(stage);
  }

  function gameLoop() {
    //jjs editddfdfdf
  //Loop this function at 60 frames per second
  requestAnimationFrame(gameLoop);

  //Move the cat 1 pixel to the right each frame

  ship.x += 1;

  //Render the stage to see the animation
  renderer.render(stage);
}
gameLoop();

}
