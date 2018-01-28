const boxen = require('boxen');
const uvk = require("uvk");
const {range, randomizer} = uvk;

const tile = require("./tile");
const {BASE_TILE, EMPTY, WALL} = tile;

const constants = require("./const");
const {PLAYER_KEY} = constants;

const AREA_X_SIZE = 40;
const AREA_Y_SIZE = 100;
const map = range(AREA_X_SIZE).map(() => range(AREA_Y_SIZE).map(() => {
    if (randomizer.chance(90)) {
        return {...BASE_TILE, ...EMPTY};
    }
    return {...BASE_TILE, ...WALL};
}));


class Area {

    constructor(map, items) {
        this.map = map;
        this.items = items;
        console.log(items);
        Object.keys(this.items).forEach(k => this.place(this.items[k]));
    }

    getPlayerPosition() {
        return this.getItem(PLAYER_KEY).position;
    }

    getItem(key) {
        return this.items[key] || {};
    }

    place(item) {
        this.map[item.position.x][item.position.y] = item.tile;
    }

    simulate() {
        const playerPosition = this.getPlayerPosition();
        Object.keys(this.items).forEach(k => {
            const item = this.getItem(k);
            let selfPosition = {...item.position};
            if (item.collided(playerPosition) && item.trigger) {
                item.trig();
            }
            if (item.cpu) {
                selfPosition = item.turn({
                    playerPosition,
                    selfPosition
                });
            }

            this.move(k, selfPosition);
        });
    }

    move(itemKey, newPosition) {
        const item = this.getItem(itemKey);
        const pX = item.position.x;
        const pY = item.position.y;
        let {x, y} = newPosition;
        console.log(`moving ${itemKey} at ${x} ${y} (from ${pX} ${pY})`);

        x = Math.min(x, AREA_X_SIZE - 1);
        x = Math.max(x, 0);

        y = Math.max(y, 0);
        y = Math.min(y, AREA_Y_SIZE - 1);

        console.log(`${this.map[x][y].name} at ${x} and ${y}`);
        if (!this.map[x][y].collision && item) {
            const empty = {tile: {...BASE_TILE, ...EMPTY}, position: {x: pX, y: pY}};
            this.place(empty);
            item.setPosition({x, y});
            this.place(item);
            return {x, y};
        }

        return {x: pX, y: pY};
    }

    toString() {
        let areaString = '';
        this.map.forEach((row, i) => {
            let rowValue = "";
            row.forEach((tile, j) => {
                rowValue += tile.tile;
            });
            areaString += `${rowValue}\n`;
        });
        return boxen(areaString.substr(0, areaString.length - 1));
    }
}

module.exports = {Area, map: map};
