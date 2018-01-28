class Item {
    constructor(tile, position, behaviour = null) {
        this.tile = tile;
        this.position = position;
        this.cpu = !!behaviour;
        this.behaviour = behaviour;
    }

    setPosition(position) {
        this.position = {...position};
    }

    turn(state = {}) {
        if (!this.behaviour) {
            return this.position;
        }
        return this.behaviour(state);
    }
}

module.exports = {Item};