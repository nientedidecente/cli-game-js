const grid = require('./libs/grid');
const {Area, map} = grid;
const item = require('./libs/item');
const {Item} = item;

const constants = require("./libs/const");
const {PLAYER_KEY} = constants;

const tile = require('./libs/tile');
const {PLAYER, ENEMY, EXIT} = tile;

const behaviours = require('./libs/behaviours');
const {chasePlayer, escapeFromPlayer, distance} = behaviours;

const readlineSync = require("readline-sync");
const Clear = require("clui").Clear;

let key = "";

let position = {x: 0, y: 0};
const playerStartingPosition = {x: 0, y: 0};
let enemyPosition = {x: 20, y: 20};
let enemyPosition1 = {x: 10, y: 10};

const actions = {
    a: function (position) {
        position = {...position};
        position.y -= 1;
        return position;
    },
    d: function (position) {
        position = {...position};
        position.y += 1;
        return position;
    },
    w: function (position) {
        position = {...position};
        position.x -= 1;
        return position;
    },
    s: function (position) {
        position = {...position};
        position.x += 1;
        return position;
    }
};

const currentArea = new Area(
    map,
    {
        [PLAYER_KEY]: new Item(PLAYER, {...playerStartingPosition}),
        enemy: new Item(ENEMY, {...enemyPosition}, chasePlayer),
        enemy2: new Item(ENEMY, {...enemyPosition1}, escapeFromPlayer),
        exit: new Item(EXIT, {x: 20, y: 50}, null, () => console.log('HIT EXIT'))
    }
);
while (key !== "q") {
    Clear();

    position = actions[key] ? actions[key](
        currentArea.getPlayerPosition()
    ) : position;
    position = {...currentArea.move(PLAYER_KEY, position)};

    currentArea.simulate();

    console.log(currentArea.toString());
    console.log(position);
    console.log(distance(position, currentArea.getItem('enemy').position));
    key = readlineSync.keyIn("", {
        hideEchoBack: true,
        mask: "",
        limit: "asdwq"
    });
}