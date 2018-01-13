class Item {
    constructor(tile, position) {
        this.tile = tile;
        this.position = position;
    }
    setPosition(position) {
        this.position = { ...position };
    }
}

module.exports = { Item };