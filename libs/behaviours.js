const randomizer = require('uvk').randomizer;

const distance = (p1, p2) => Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

const chasePlayer = state => {
    const {playerPosition, sight} = state;
    let {selfPosition} = state;
    selfPosition = {...selfPosition};
    if (distance(selfPosition, playerPosition) > (sight || 5)) {
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

const escapeFromPlayer = state => {
    const {playerPosition} = state;
    let {selfPosition} = state;
    selfPosition = {...selfPosition};
    if (randomizer.chance(30)) {
        return selfPosition;
    }
    if (selfPosition.x > playerPosition.x) {
        selfPosition.x += 1;
    } else if (selfPosition.x < playerPosition.x) {
        selfPosition.x -= 1;
    }
    if (selfPosition.y > playerPosition.y) {
        selfPosition.y += 1;
    } else if (selfPosition.y < playerPosition.y) {
        selfPosition.y -= 1;
    }
    return selfPosition;
};


module.exports = {chasePlayer, escapeFromPlayer, distance};