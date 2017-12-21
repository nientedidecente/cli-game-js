var readlineSync = require("readline-sync");
var Clear = require("clui").Clear;
var key = "";
var row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var map = row.map(() => row);

var position = { x: 0, y: 0 };

var actions = {
  a: function(position) {
    position.x -= 1;
    position.x = Math.max(position.x, 0);
    return position;
  },
  d: function(position) {
    position.x += 1;
    position.x = Math.min(position.x, row.length - 1);
    return position;
  },
  w: function(position) {
    position.y -= 1;
    position.y = Math.max(position.y, 0);
    return position;
  },
  s: function(position) {
    position.y += 1;
    position.y = Math.min(position.y, row.length - 1);
    return position;
  }
};

const printMatrix = (map, position) => {
  map.forEach((row, i) => {
    var value = "";
    row.forEach((cell, j) => {
      value += position.x === j && position.y === i ? " * " : "  ";
    });
    console.log(value);
  });
};

while (key !== "q") {
  Clear();
  position = actions[key] ? actions[key](position) : position;
  printMatrix(map, position);
  console.log(position.x, position.y);
  key = readlineSync.keyIn("", {
    hideEchoBack: true,
    mask: "",
    limit: "asdwq"
  });
}
