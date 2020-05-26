const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());


leaderRouter.route('/').all((req, res, next) => {


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

    .get((req, res, next) => {

        res.end('will send all leaders to you');

    })

    .post((req, res, next) => {


        res.end('will add the leaders:' + req.body.name + ' with details: ' + req.body.description);

    })

    .put((req, res, next) => {

        res.statusCode = 403;
        res.end('operation not supported on /leaders');

    })

    .delete((req, res, next) => {

        res.end('deleting all the leaders!');

    });





leaderRouter.route('/:leaderID').all((req, res, next) => {


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})






    .get((req, res, next) => {

        res.end('will send details of the leader: ' + req.params.leaderID + ' to you!');

    })

    .post((req, res, next) => {


        res.statusCode = 403;
        res.end('operation not supported on /leaders/' + req.params.leaderID);

    })

    .put((req, res, next) => {

        res.write('updating the leader: ' + req.params.leaderID);
        res.end('will update the leader' + req.body.name + 'with details :' + req.body.description);

    })

    .delete((req, res, next) => {

        res.end('deleting leader!' + req.params.leaderID);

    });







module.exports = leaderRouter;