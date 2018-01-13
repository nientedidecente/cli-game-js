const tile = char => ` ${char} `;

const WALL = {
    name: 'wall',
    tile: tile('█'),
    collision: true
};
const EMPTY = {
    name: 'empty',
    tile: tile(' '),
    collision: false
};

const PLAYER = {
    name: 'player',
    tile: tile('P')
};

const ENEMY = {
    name: 'enemy',
    tile: tile('E')
}

const BASE_TILE = {
};

module.exports = { WALL, EMPTY, PLAYER, ENEMY };



