const uvk = require("uvk");
const { range, randomizer } = uvk;
const tile = require("./tile");
const { BASE_TILE, EMPTY, WALL } = tile;

const ROOM_SIZE = 40;
const map = range(ROOM_SIZE).map(() => range(ROOM_SIZE).map(() => {
    if (randomizer.chance(80)) {
        return { ...BASE_TILE, ...EMPTY };
    }

    return { ...BASE_TILE, ...WALL };
}));

class Area {

    constructor(map, items) {
        this.map = map;
        this.items = items;
        Object.keys(this.items).forEach(k => this.place(this.items[k]));
    }

    getItem(key) {
        return this.items[key] || {};
    }

    place(item) {
        this.map[item.position.x][item.position.y] = item.tile;
    }

    move(itemKey, newPosition) {
        const item = this.getItem(itemKey);
        const pX = item.position.x;
        const pY = item.position.y;
        let { x, y } = newPosition;

        x = Math.min(x, ROOM_SIZE - 1);
        x = Math.max(x, 0);

        y = Math.max(x, 0);
        y = Math.min(y, ROOM_SIZE - 1)

        if (!this.map[x][y].collision && item) {
            const empty = { tile: { ...BASE_TILE, ...EMPTY }, position: { x: pX, y: pY } };
            console.log('placing empty', empty);
            this.place(empty);
            item.setPosition(newPosition);
            this.place(item);
        }
    }

    toString() {
        let areaString = ''
        this.map.forEach((row, i) => {
            let rowValue = "";
            row.forEach((tile, j) => {
                rowValue += tile.tile;
            });
            areaString += `${rowValue}|\n`;
        });
        return (areaString += range(ROOM_SIZE).map(() => " _ ").join('') + "\n");
    }
};

module.exports = { Area: Area, map: map };
