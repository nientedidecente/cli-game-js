class Item {
    constructor(tile, position, behaviour = null, trigger = null) {
        this.tile = tile;
        this.position = position;
        this.cpu = !!behaviour;
        this.behaviour = behaviour;
        this.trigger = trigger;
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

    collided(position) {
        return this.position.x === position.x
            && this.position.y === position.y;
    }

    trig(state = {}) {
        if (!this.trigger) {
            return null;
        }
        return this.trigger(state);
    }
}

module.exports = {Item};