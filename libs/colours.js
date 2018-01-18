const chalkPipe = require('chalk-pipe');

const redBold = chalkPipe('red.bold');
const blueBold = chalkPipe('blue.bold');
module.exports = {
    redBold,
    blueBold
};