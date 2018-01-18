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
    tile: 'P'
};

const ENEMY = {
    name: 'enemy',
    tile: 'E'
}

const BASE_TILE = {
};

module.exports = { WALL, EMPTY, PLAYER, ENEMY };



