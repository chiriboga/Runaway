export const keyEvents = (player) => {
  document.addEventListener("keydown", keyDownEvents, true );

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

  function keyDownEvents(e) {
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
  }

}

// export const removeEvents = () => {
//   document.removeEventListener("keydown", keyDownEvents, true);
// }
//
//
// class keyEvents {
//   addListeners(player) {
//     document.addEventListener("keydown", this.keyDownEvents, true );
//   }
//
//   removeListeners() {
//
//   }
//
//   keyDownEvents(e) {
//       switch (e.keyCode) {
//         case 32:
//         case 38:
//         case 87:
//           //  up
//           player.isJump = true;
//           break
//         case 37:
//         case 65:
//         // debugger
//           // left
//           player.isLeft = true;
//           break
//         case 40:
//         case 83:
//           //  down
//           break
//         case 39:
//         case 68:
//           //  right
//           player.isRight = true;
//           break
//         default:
//           console.log('wrong key')
//       }
//   }
//
//
//
//   //Let go of jump
//   document.addEventListener("keyup", (e) => {
//     switch (e.keyCode) {
//       case 32:
//       case 38:
//         case 87:
//         //  up
//         player.isJump = false;
//         break
//       case 37:
//       case 65:
//         // left
//         player.isLeft = false;
//         break
//       case 40:
//       case 83:
//         //  down
//         break
//       case 39:
//       case 68:
//         //  right
//         player.isRight = false;
//         break
//       default:
//         console.log('wrong key')
//     }
//   });
// }
