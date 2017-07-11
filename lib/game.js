import Game from './objects/game.js';
import generateLevelOne from './objects/level.js';

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.sounds.playTheme();
  game.player.addEventHandlers();

  function welcome() {
    let base_image = new Image();
    base_image.src = 'assets/start-game.jpg';
    base_image.onload = function(){
      game.graphics.drawImage(base_image, 0, 0);
    }

    game.gameCanvas.addEventListener("click", splashControls, true);
  }

  function splashControls() {
    game.gameCanvas.removeEventListener("click", splashControls, true);
    game.graphics.clearRect( 0, 0, game.gameCanvas.width, game.gameCanvas.height);
    let base_image = new Image();
    base_image.src = 'assets/splash-controls.jpg';
    base_image.onload = function(){
      game.graphics.drawImage(base_image, 0, 0);
    }

    game.gameCanvas.addEventListener("click", splashIntro, true);
  }

  function splashIntro() {
    game.gameCanvas.removeEventListener("click", splashIntro, true);
    game.graphics.clearRect( 0, 0, game.gameCanvas.width, game.gameCanvas.height);
    let base_image = new Image();
    base_image.src = 'assets/splash-crying-kim.png';
    base_image.onload = function(){
      game.graphics.drawImage(base_image, 0, 0);
    }

    setTimeout(mainLoop, 2000);
  }

  function splashRetry() {
    document.body.classList.toggle('death');
    game.graphics.clearRect( 0, 0, game.gameCanvas.width, game.gameCanvas.height);
    let base_image = new Image();
    base_image.src = 'assets/splash-retry.jpg';
    base_image.onload = function(){
      game.graphics.drawImage(base_image, 0, 0);
    }

    game.gameCanvas.addEventListener("click", retry, true);
  }

  function ending() {
    let base_image = new Image();
    base_image.src = 'assets/splash-ending.jpg';
    base_image.onload = function(){
      game.graphics.drawImage(base_image, 0, 0);
    }
    let credits_Y = 0;

    function rollCredits() {
      game.graphics.clearRect( 0, 0, game.gameCanvas.width, game.gameCanvas.height);
        game.graphics.drawImage(base_image, 0, credits_Y);
      credits_Y -= .6;
      setTimeout(rollCredits, 1000/60);
    }

    rollCredits();
  }

  function retry() {
    game.gameCanvas.removeEventListener("click", retry, true);
    // Reset Player
    game.player.velocity_X = 0;
    game.player.Y = 0;
    game.player.X = 220;

    // Testing vars
    // game.kim.Y = 280;
    // game.kim.X = 600;

    // Reset Kim
    game.kim.Y = 280;
    game.kim.X = 8500;

    // Reset Levels
    game.level = generateLevelOne();
    for (var i = 0; i < game.level.numBlocks(); i++) {
      game.graphics.drawImage(game.level.blocks[i].sprite, game.level.blocks[i].X, game.level.blocks[i].Y);
    }
    document.body.classList.toggle('death');

    mainLoop();
  }

  const mainLoop = () => {
    // Turn off Intro Handler
    game.gameCanvas.removeEventListener("click", mainLoop, true);

    // Move objects in relation to Player
    game.update();
    // Game Logic
    game.player.update(game.level);

    // Render Game
    game.render();

    var frames = setTimeout(mainLoop, 1000/60);

    // Player Reaches Kim
    if (game.player.isColliding(game.kim)) {
      clearTimeout(frames);
      game.sounds.music.theme.pause();
      game.sounds.music.ending.play();

      ending();
    }

    // Player Death
    if (game.player.Y > 500) {
      clearTimeout(frames);
      splashRetry();
    }
  };

  // Starts game
  welcome();

});
