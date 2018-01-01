var readlineSync = require("readline-sync");
var Clear = require("clui").Clear;
const range = require("uvk").range;
var key = "";
const NUMBER_OF_LINES = 40
var row = range(NUMBER_OF_LINES).map(() => 0);
var map = row.map(() => row);

var position = { x: NUMBER_OF_LINES / 2, y: NUMBER_OF_LINES / 2 };
var enemyPosition = { x: 0, y: 0 };

var actions = {
  a: function (position) {
    position.x -= 1;
    position.x = Math.max(position.x, 0);
    return position;
  },
  d: function (position) {
    position.x += 1;
    position.x = Math.min(position.x, row.length - 1);
    return position;
  },
  w: function (position) {
    position.y -= 1;
    position.y = Math.max(position.y, 0);
    return position;
  },
  s: function (position) {
    position.y += 1;
    position.y = Math.min(position.y, row.length - 1);
    return position;
  }
};

const printMatrix = (map, position, enemyPosition) => {

  map.forEach((row, i) => {
    var value = "";
    row.forEach((cell, j) => {
      if (position.x === j && position.y === i) {
        value += " * ";
      } else if (enemyPosition.x === j && enemyPosition.y === i) {
        value += " @ ";
      } else {
        value += "   ";
      }
    });
    console.log(value + "|");
  });
  console.log(range(NUMBER_OF_LINES).map(() => " _ ").join(''))
};

const calculateNextStep = (position, enemyPosition) => {
  if (enemyPosition.x > position.x) {
    enemyPosition.x -= 1;
  } else if (enemyPosition.x < position.x) {
    enemyPosition.x += 1;
  }
  if (enemyPosition.y > position.y) {
    enemyPosition.y -= 1;
  } else if (enemyPosition.y < position.y) {
    enemyPosition.y += 1;
  }
  return enemyPosition;
}

while (key !== "q") {
  Clear();
  position = actions[key] ? actions[key](position) : position;
  enemyPosition = calculateNextStep(position, enemyPosition);
  printMatrix(map, position, enemyPosition);
  console.log(position);
  console.log(enemyPosition);
  key = readlineSync.keyIn("", {
    hideEchoBack: true,
    mask: "",
    limit: "asdwq"
  });
}
