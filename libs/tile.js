const colours = require('./colours');
const {redBold, blueBold, yellowBold} = colours;

const constants = require("./const");
const {PLAYER_KEY} = constants;

const WALL = {
    name: 'wall',
    tile: '█',
    collision: true
};

const EXIT = {
    name: 'exit',
    tile: yellowBold('█')
};

const EMPTY = {
    name: 'empty',
    tile: ' ',
    collision: false
};

const PLAYER = {
    name: PLAYER_KEY,
    tile: blueBold('P')
};

const ENEMY = {
    name: 'enemy',
    tile: redBold('E')
};

const BASE_TILE = {};

module.exports = {BASE_TILE, WALL, EMPTY, PLAYER, ENEMY, EXIT};



