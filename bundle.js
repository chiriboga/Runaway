/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class gameObject {
  constructor(options) {
    const { img, x, y, width, height } = options;

    this.sprite = new Image();
    this.sprite.src = img;
    this.width = width;
    this.height = height;
    this.X = x;
    this.Y = y;
    this.previous_X;
    this.previous_Y;

    this.velocity_X = 0;
    this.velocity_Y = 0;
    this.gravity = 0;
    this.weight = 0;

  }

  isColliding(obj) {
    if (this.X > obj.X + obj.width) return false;
    if (this.X + this.width < obj.X) return false;
    if (this.Y > obj.Y + obj.height) return false;
    if (this.Y + this.height < obj.Y) return false;
    return true;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (gameObject);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const keyEvents = (player) => {
  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 32:
      case 38:
      case 87:
        //  up
        player.isJump = true;
        break
      case 37:
      case 65:
      // debugger
        // left
        player.isLeft = true;
        break
      case 40:
      case 83:
        //  down
        break
      case 39:
      case 68:
        //  right
        player.isRight = true;
        break
      default:
        console.log('wrong key')
    }
  });

  //Let go of jump
  document.addEventListener("keyup", (e) => {
    switch (e.keyCode) {
      case 32:
      case 38:
        case 87:
        //  up
        player.isJump = false;
        break
      case 37:
      case 65:
        // left
        player.isLeft = false;
        break
      case 40:
      case 83:
        //  down
        break
      case 39:
      case 68:
        //  right
        player.isRight = false;
        break
      default:
        console.log('wrong key')
    }
  });

}

/* harmony default export */ __webpack_exports__["a"] = (keyEvents);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_block_js__ = __webpack_require__(7);



class Level {
  constructor() {
    this.blocks = new Array ();

    // this.blocks = this.blocks.bind(this);
  }

  numBlocks() {
    return this.blocks.length;
  }

  platformBlocks() {
    return this.blocks.filter(block => block.type === "platform");
  }

  fallingBlocks() {
    return this.blocks.filter(block => block.type === "falling");
  }

  springBlocks() {
    return this.blocks.filter(block => block.type === "spring");
  }
}

const generateBlock = (options) => {
  let defaultOptions = {
    type: "platform",
    num: 1,
    space: null
  };
  let newOptions = Object.assign(defaultOptions, options);

  const { level, num, img, x, y, width, height, type, space } = newOptions;

  let totalWidth = 0;
  for (var i = 1; i <= num; i++) {
    level.blocks.push(new __WEBPACK_IMPORTED_MODULE_1__objects_block_js__["a" /* default */]({
      img: img,
      x: x + (totalWidth),
      y: y,
      width: width,
      height: height,
      type: type
    }));

    totalWidth += width + space
  }
}

// Create Static Level One
const levelOne = new Level();

generateBlock({
  level: levelOne,
  img: "assets/spring.png",
  num: 1,
  x: 168,
  y: 325,
  width: 60,
  height: 78,
  type: "spring",
  num: 3,
  space: 200
});


//flat stage
generateBlock({
  level: levelOne,
  img: "assets/platform.png",
  num: 6,
  x: 96,
  y: 400,
  width: 96,
  height: 11
});

//staggering
generateBlock({
  level: levelOne,
  img: "assets/platform.png",
  num: 1,
  x: 768,
  y: 325,
  width: 96,
  height: 11
});

generateBlock({
  level: levelOne,
  img: "assets/platform.png",
  x: 768,
  y: 325,
  width: 96,
  height: 11
});

generateBlock({
  level: levelOne,
  img: "assets/platform.png",
  x: 1200,
  y: 450,
  width: 96,
  height: 11
});

generateBlock({
  level: levelOne,
  img: "assets/platform.png",
  x: 1460,
  y: 350,
  width: 96,
  height: 11
});

generateBlock({
  level: levelOne,
  img: "assets/platform.png",
  x: 1460,
  y: 350,
  width: 96,
  height: 11
});

generateBlock({
  level: levelOne,
  img: "assets/platform.png",
  x: 1200,
  y: 250,
  width: 96,
  height: 11
});

//flat stage
generateBlock({
  level: levelOne,
  img: "assets/platform.png",
  num: 3,
  x: 1460,
  y: 150,
  width: 96,
  height: 11
});

//Falling area
generateBlock({
  level: levelOne,
  img: "assets/falling-platform.png",
  num: 1,
  x: 2000,
  y: 250,
  width: 96,
  height: 11,
  type: "falling",
  space: 270,
  num: 3
});

// generateBlock({
//   level: levelOne,
//   img: "assets/falling-platform.png",
//   x: 2000,
//   y: 250,
//   width: 96,
//   height: 11,
//   type: "falling",
// });
//
// generateBlock({
//   level: levelOne,
//   img: "assets/falling-platform.png",
//   x: 2300,
//   y: 250,
//   width: 96,
//   height: 11,
//   type: "falling"
// });
//
// generateBlock({
//   level: levelOne,
//   img: "assets/falling-platform.png",
//   x: 2675,
//   y: 250,
//   width: 96,
//   height: 11,
//   type: "falling"
// });


/* harmony default export */ __webpack_exports__["a"] = (levelOne);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const logic = (player, level) => {
  //Move Left & Right
  if (player.isLeft) player.velocity_X = -3;
  if (player.isRight) player.velocity_X = 3;
  player.distance += player.velocity_X;
  // console.log(player.distance);

  // Player Death
  if (player.Y > 500) {
    document.body.className = 'death';
    console.log("you lose");
    // graphics.setTransform()
    // player.Y = 0;
    // player.X = 375 - 23;
  }

  // Stand on Platform
  if (!player.isLeft && !player.isRight && player.velocity_Y === 0) player.velocity_X = 0;

  // Fall velocity with weight
  if (player.velocity_Y < player.gravity) player.velocity_Y += player.weight;

  //Platform Collision
  // Regular Blocks, Falling off block objects
  const platformBlocks = level.platformBlocks();
  platformBlocks.forEach( block => {
    if (player.isColliding(block) && player.Y + player.height < block.Y + player.velocity_Y) {
      player.Y = block.Y - player.height;
      player.velocity_Y = 0;
    }
  });

  //Falling Blocks
  const fallingBlocks = level.fallingBlocks();
  fallingBlocks.forEach( block => {
    if (player.isColliding(block) && player.Y + player.height < block.Y + player.velocity_Y) {
      block.gravity = 50;
      block.weight = 1;
      if (block.velocity_Y < block.gravity) block.velocity_Y += block.weight;
      player.velocity_Y = 0;
      player.canJump = true;
    }
    block.Y += block.velocity_Y;
  });

  //Spring Blocks
  const springBlocks = level.springBlocks();
  springBlocks.forEach( block => {
    if (player.isColliding(block) && player.Y + player.height < block.Y + player.velocity_Y) {
      player.Y = block.Y - player.height;
      player.velocity_Y = 0;
      player.springJump = true;
    }
  });

  //Jump
  if (player.isJump && player.velocity_Y === 0 || player.isJump && player.canJump) {
    player.velocity_Y = -4.5;
    player.canJump = false;
  }

  //Spring Jump
  if (player.springJump) {
    player.velocity_Y = -7;
    player.springJump = false;
  }


}

/* harmony default export */ __webpack_exports__["a"] = (logic);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_js__ = __webpack_require__(0);


class Player extends __WEBPACK_IMPORTED_MODULE_0__object_js__["a" /* default */] {
  constructor(options) {
    super(options);

    this.isLeft = false;
    this.isRight = false;
    this.isJump = false;
    this.canJump = false;
    this.springJump = false;
    this.gravity = 100000;
    this.weight = 0.12;
    this.distance = 0;

    this.spriteAnimCounter = 0;
  }

  draw(graphics) {
    // 1875
    // 1250
    // 47, 76,
    const frameWidth = 1875/15;
    const frameHeight = 1250/10;
    let walkingMod = Math.floor(this.spriteAnimCounter) % 8;

    let actionStatus = 0;
    let frameStatus = 0;
    if (this.velocity_X === 0) {
      //standing
      actionStatus = 0;
      frameStatus = 0;
    } else if (this.velocity_X !== 0) {
      actionStatus = 125;
      frameStatus = walkingMod;
    }

    graphics.drawImage(this.sprite,
      frameStatus * frameWidth, actionStatus,
      frameWidth, frameHeight,
      this.X - 40, this.Y,
      125, 125
    );
    // point on image
    //
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Player);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_js__ = __webpack_require__(0);


const render = (graphics, level, player) => {
  // const kanyeCreation = {
  //   img: "assets/nightmare-kanye.png",
  //   x: 700,
  //   y: 350,
  //   width: 49,
  //   height: 47
  // }
  // let kanye = new gameObject(kanyeCreation);
  // graphics.drawImage(kanye.sprite, kanye.X, kanye.Y);


  // debugger
  for (var i = 0; i < level.numBlocks(); i++) {
    graphics.drawImage(level.blocks[i].sprite, level.blocks[i].X, level.blocks[i].Y);
  }
  // graphics.drawImage(player.sprite, player.X, player.Y);
  if (player.velocity_X !== 0) player.spriteAnimCounter += .2;
  player.draw(graphics);



}

/* harmony default export */ __webpack_exports__["a"] = (render);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__key_events_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__level_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__render_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logic_js__ = __webpack_require__(3);







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
  let player = new __WEBPACK_IMPORTED_MODULE_1__player_js__["a" /* default */](playerCreation);

  //Create Level
  const level = __WEBPACK_IMPORTED_MODULE_3__level_js__["a" /* default */];

  //Event Handler
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__key_events_js__["a" /* default */])(player);

  const mainLoop = () => {
    //Pre Variable Adjustments pan screen based on player
    level.blocks.forEach( block => {
      block.X += -player.velocity_X;
    });

    player.Y += player.velocity_Y;

    // Game Logic
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__logic_js__["a" /* default */])(player, level);

    //Post Variable Adjustments

    //render graphics
    graphics.clearRect( 0, 0, gameCanvas.width, gameCanvas.height);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__render_js__["a" /* default */])(graphics, level, player);

    // clear timeout
    setTimeout(mainLoop, 1000/60);
  };
  mainLoop();

});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_js__ = __webpack_require__(0);


class Block extends __WEBPACK_IMPORTED_MODULE_0__object_js__["a" /* default */] {
  constructor(options){
    super(options);

    this.type = options.type;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Block);


/***/ })
/******/ ]);