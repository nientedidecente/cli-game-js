const chalkPipe = require('chalk-pipe');

const redBold = chalkPipe('red.bold');
const blueBold = chalkPipe('blue.bold');
const yellowBold = chalkPipe('yellowBright.bold');
module.exports = {
    redBold,
    blueBold,
    yellowBold
};