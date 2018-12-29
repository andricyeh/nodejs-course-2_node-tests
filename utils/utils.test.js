const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    if (res !== 44) {
        throw Error(`Expected 44, but got ${res}`);
    }
});

it('should square a number', () => {
    var res = utils.square(25);
    if (res !== 625) {
        throw Error(`Expected 625, but got ${res}`);
    }
});

