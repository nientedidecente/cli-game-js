const colours = require('./colours');
const { redBold, blueBold } = colours;
const WALL = {
    name: 'wall',
    tile: '█',
    collision: true
};
const EMPTY = {
    name: 'empty',
    tile: ' ',
    collision: false
};

const PLAYER = {
    name: 'player',
    tile: blueBold('P')
};

const ENEMY = {
    name: 'enemy',
    tile: redBold('E')
}

const BASE_TILE = {
};

module.exports = { WALL, EMPTY, PLAYER, ENEMY };



