/*
expect - lets you write better assertions.
Github: https://github.com/mjackson/expect
Document: https://jestjs.io/docs/en/expect.html
*/
const expect = require('expect');

const utils = require('./utils');

/*
describe() are:
 - commonly known as test suites, which contains test cases
 - merely groups, and you can have groups within groups
*/
describe('Utils', () => {
    it('should add two numbers', () => {
        var res = utils.add(33, 11);

        /*
        throw exception to represent test failure.
        */
        // if (res !== 44) {
        //     throw Error(`Expected 44, but got ${res}`);
        // }

        // toBe: Asserts that object is strictly equal to value using ===.
        expect(res).toBe(44);

        // toBeA(string): Asserts the typeof the given object is string. (it )
        // expect(res).toBeA('number'); ==> it is only used for 1.20, not supported in 21.0 or later.
        expect(typeof res).toBe('number');
    });

    it('should square a number', () => {
        var res = utils.square(25);

        // if (res !== 625) {
        //     throw Error(`Expected 625, but got ${res}`);
        // }

        expect(res).toBe(625);
        expect(typeof res).toBe('number');
    });

    describe('#async', () => {
        /*
        Mocha - support async function with 'done' parameter.
                use done when we're doing something synchronous inside of our tests.
        */
        it('should async add two number', (done) => {
            utils.asyncAdd(3, 4, (sum) => {
                expect(sum).toBe(7);
                done();
            });
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(5, (res) => {
                expect(res).toBe(25);
                done();
            });
        });
    });
});

it('should expect some value', () => {
        // toNotBe: (ver:1.20), e.g. expect(12).toNotBe(11);
        // not.toBe: (ver: 21.0 or later), Asserts that object is not strictly equal to value using ===.
        expect(12).not.toBe(11);

        // toEqual: Asserts that the given object equals value using is-equal.
        // (toBe is used for primitive value, not suitable for object )
        expect({Name: 'Andric'}).toEqual({Name: 'Andric'});

        // toInclude: (ver:1.20), Asserts that a given value is included (or "contained") within another.
        // e.g. expect([1, 2, 3]).toInclude(3); ==> (older version, 1.20)
        // toContain: (ver: 21.0 or later), it only used to check an item in an array
        // For testing the items in the array, this uses ===, a strict equality check.
        expect([1, 2, 3]).toContain(3);

        // toMatchObject: (ver: 21.0 or later), check that a JavaScript object matches a subset of the properties of an object
        // e.g. expect({name: 'ABC', age: 25}).toInclude({age: 25});
        expect({name: 'Andric', age: 40}).toMatchObject({age: 40});

        // toExclude(): (ver:1.20), Asserts that a given value is not included (or "contained") within another.
        // e.g. expect[1, 2, ,3]).toExclude(5);
        expect([1, 2, 3]).not.toContain(5);

        // arrayContaining(): matches a received array which contains all of the elements in the expected array.
        // it means the 1 and 3 should be in the expected result array.
        expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 3]));
});

it('should verify first and last name are set', () => {
    var user = {};
    var res = utils.setName(user, 'Andric Yeh');
    expect(res).toMatchObject({firstName: 'Andric', lastName: 'Yeh'});
});
