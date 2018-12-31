const express = require(`express`);

var app = express();

app.use((req, res, next) => {
    if (req.url === '/') {
        next();
    }
    else if (req.url === '/users') {
        next();
    }
    else {
        res.send(`This is ${req.url}`);
    }
});

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        app: 'Todo App v1.0'
    });
});

// GET /users
// return: users with name and age prop.
app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'Andric',
        age: 40
    }, {
        name: 'Ray',
        age: 8

    }, {
        name: 'Linda',
        age: 8
    }]);
});

app.listen(3000);

module.exports.app = app;
