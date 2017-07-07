import Object from './object.js';
import Player from './player.js';
import keyEvents from './key_events.js';
import levelOne from './level.js';
import render from './render.js';
import logic from './logic.js';

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('canvas');
  const graphics = gameCanvas.getContext('2d');

  // Create Player
  const playerCreation = {
    img: "assets/grid-sprite.png",
    x: 220,
    y: 0,
    width: 46,
    height: 90
  }
  // height: 76 old height
  let player = new Player(playerCreation);

  //Create Level
  const level = levelOne;

  //Event Handler
  keyEvents(player);

  const mainLoop = () => {
    //Pre Variable Adjustments pan screen based on player
    level.blocks.forEach( block => {
      block.X += -player.velocity_X;
    });

    player.Y += player.velocity_Y;

    // Game Logic
    logic(player, level);

    //Post Variable Adjustments

    //render graphics
    graphics.clearRect( 0, 0, gameCanvas.width, gameCanvas.height);
    render(graphics, level, player);

    // clear timeout
    setTimeout(mainLoop, 1000/60);
  };
  mainLoop();

});
