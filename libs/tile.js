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
}

const BASE_TILE = {
};

module.exports = { WALL, EMPTY, PLAYER };



