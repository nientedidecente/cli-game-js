const grid = require('./libs/grid');
const { Area, map } = grid;
const item = require('./libs/item');
const { Item } = item;

const tile = require('./libs/tile');
const { PLAYER } = tile;

const randomizer = require('uvk').randomizer;
var readlineSync = require("readline-sync");
var Clear = require("clui").Clear;
const range = require("uvk").range;
var key = "";

let position = { x: 0, y: 0 };
const playerStartingPosition = { x: 0, y: 0 };
var enemyPosition = { x: 0, y: 0 };

var actions = {
  a: function (position) {
    position = { ...position };
    position.y -= 1;
    return position;
  },
  d: function (position) {
    position = { ...position };
    position.y += 1;
    return position;
  },
  w: function (position) {
    position = { ...position };
    position.x -= 1;
    return position;
  },
  s: function (position) {
    position = { ...position };
    position.x += 1;
    return position;
  }
};

const calculateNextStep = (position, enemyPosition) => {
  if (randomizer.chance(10)) {
    return enemyPosition;
  }

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

const currentArea = new Area(
  map,
  {
    player: new Item(PLAYER, playerStartingPosition)
  }
);
while (key !== "q") {
  Clear();
  position = actions[key] ? actions[key](
    currentArea.getItem('player').position
  ) : position;
  currentArea.move('player', position);
  position = { ...currentArea.getItem('player').position };
  enemyPosition = calculateNextStep(position, enemyPosition);
  console.log(currentArea.toString());
  console.log(position);
  key = readlineSync.keyIn("", {
    hideEchoBack: true,
    mask: "",
    limit: "asdwq"
  });
}