const tile = char => ` ${char} `;

const WALL = {
    name: 'wall',
    tile: tile('█')
};
const EMPTY = {
    name: 'empty',
    tile: tile(' ')
};

const BASE_TILE = {
};

module.exports = { WALL, EMPTY };



