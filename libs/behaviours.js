const randomizer = require('uvk').randomizer;

const chasePlayer = state => {
    const {playerPosition} = state;
    let {selfPosition} = state;
    selfPosition = {...selfPosition};
    if (randomizer.chance(30)) {
        return selfPosition;
    }
    if (selfPosition.x > playerPosition.x) {
        selfPosition.x -= 1;
    } else if (selfPosition.x < playerPosition.x) {
        selfPosition.x += 1;
    }
    if (selfPosition.y > playerPosition.y) {
        selfPosition.y -= 1;
    } else if (selfPosition.y < playerPosition.y) {
        selfPosition.y += 1;
    }
    return selfPosition;
};


module.exports = {chasePlayer};