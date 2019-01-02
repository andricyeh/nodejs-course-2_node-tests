const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: jest.fn()
    };

    app.__set__('db', db);

    it('should call the spy correct', () => {
        /*
        expect@1.x :
        Creates a spy function with an (optional) implementation and (optional) restore logic.
        https://github.com/mjackson/expect#createspy
        e.g.
        var spy = expect.createSpy();
        */

        /*
        expect@21+ : use jest.fn() to replace it.

        command:
            node_modules\\.bin\\jest  spies\\app.test.js
        */
        var spy = jest.fn();
        spy();
        expect(spy).toHaveBeenCalled();

        /*
        It also uses to test the parameter,

        e.g.
        spy('Andric', 40);
        expect(spy).toHaveBeenCalledWith('Andric', 40);
        */
    });

    it('should call saveUser with user object', () => {
        var email = 'test@example.com';
        var password = 'test';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});
