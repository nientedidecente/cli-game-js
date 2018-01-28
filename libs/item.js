const tile = require('./tile');
const {ENEMY, PLAYER, EXIT} = tile;

const behaviours = require('./behaviours');
const {chasePlayer, escapeFromPlayer} = behaviours;

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

const itemFactory = {
    makePlayer(position) {
        return new Item(PLAYER, {...position});
    },
    makeChaser(position) {
        return new Item(ENEMY, {...position}, chasePlayer);
    },
    makeRunner(position) {
        return new Item(ENEMY, {...position}, escapeFromPlayer);
    },
    makeExit(position) {
        return new Item(EXIT, position, null, () => console.log('HIT EXIT'));
    }
};

module.exports = {Item, itemFactory};