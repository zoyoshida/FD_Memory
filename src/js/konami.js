// Source - https://stackoverflow.com/a/71309611
// Posted by Peaceful James, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-11, License - CC BY-SA 4.0

const keyCodesByLabel = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  a: 65,
  b: 66,
};

const konamiCode = [
  "up",
  "up",
  "down",
  "down",
  "left",
  "right",
  "left",
  "right",
  "b",
  "a",
];

const konamiKeyCodes = konamiCode.map((label) => keyCodesByLabel[label]);
let board = document.getElementById("board");

const activateCheats = () => {
  console.log("Sistema comprometido.");
  board.classList.add("hacked");
  document.getElementById("hackedAlert").classList.remove("hackedHidden");
  setTimeout(() => {
    document.getElementById("hackedAlert").classList.add("hackedHidden");
  }, 200);
  setTimeout(() => {
    board.classList.remove("hacked");
  }, 1400);
};

var inputPositions = [];

const incrementOrRemove = (inputPositions, keyCode) => {
  return inputPositions.reduce((acc, inputPosition, i, arr) => {
    if (keyCode == konamiKeyCodes[inputPosition]) {
      inputPosition++;
      if (inputPosition == konamiCode.length) {
        inputPositions = [];
        activateCheats();
        arr.splice(1); // eject early by mutating iterated copy
        return [];
      } else {
        acc.push(inputPosition);
        return acc;
      }
    } else {
      return acc;
    }
  }, []);
};

const handleKeyCode = (keyCode) => {
  if (keyCode == konamiKeyCodes[0]) {
    inputPositions.push(0);
  }
  if (inputPositions.length > 0) {
    inputPositions = incrementOrRemove(inputPositions, keyCode);
  }
};

document.addEventListener("keydown", ({ keyCode }) => handleKeyCode(keyCode));
