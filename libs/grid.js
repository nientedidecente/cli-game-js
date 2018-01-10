const uvk = require("uvk");
const { range, randomizer } = uvk;
const tile = require("./tile");
const { BASE_TILE, EMPTY, WALL } = tile;

const ROOM_SIZE = 40;
const map = range(ROOM_SIZE).map(() => range(ROOM_SIZE).map(() => {
    if (randomizer.chance(70)) {
        return { ...BASE_TILE, ...EMPTY };
    }

    return { ...BASE_TILE, ...WALL };
}));
const area = map => {
    return {
        toString() {
            let areaString = ''
            map.forEach((row, i) => {
                let rowValue = "";
                row.forEach((tile, j) => {
                    rowValue += tile.tile;
                });
                areaString += `${rowValue}|\n`;
            });
            areaString += range(ROOM_SIZE).map(() => " _ ").join('') + "\n";
            return areaString;
        }
    }
};

module.exports = { area: area, map: map };
