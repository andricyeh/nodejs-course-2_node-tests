/*
supertest - HTTP assertions made easy via superagent.
https://www.npmjs.com/package/supertest

You may pass an http.Server, or a Function to request() -
if the server is not already listening for connections
then it is bound to an ephemeral port for you
so there is no need to keep track of ports.
*/
const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

/*
The latest version of mocha doesn't automatically exit anymore.
https://boneskull.com/mocha-v4-nears-release/#mochawontforceexit

If the mocha process is still alive after your tests seem "done",
then your tests have scheduled something to happen (asynchronously)
and haven't cleaned up after themselves properly.
Did you leave a socket open?

Supply the --exit flag to use pre-v4 behavior.


PS. Whenever running the tests they finish correctly but the process hangs there
    In this require('./server').app, this express server is running.
    https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/questions/4654806
*/

/*
describe() are:
 - commonly known as test suites, which contains test cases
 - merely groups, and you can have groups within groups
*/
describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response in / url', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toMatchObject({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should return users response with Andric in /users url', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    // toContain: (ver: 21.0 or later), it only used to check a element in an array
                    // toContainEqual: (ver: 21.0 or later), it only used to check a object in an array
                    expect(res.body).toContainEqual({name: 'Andric', age: 40});

                    // it checks the a received array which contains Andric and Ray user.
                    // expect(res.body).toEqual(expect.arrayContaining([{name: 'Andric', age: 40}, {name: 'Ray', age: 8}]));
                })
                .end(done);
        });
    });
});