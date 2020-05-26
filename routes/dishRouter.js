const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/').all((req, res, next) => {


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

    .get((req, res, next) => {

        res.end('will send all dishes to you');

    })

    .post((req, res, next) => {


        res.end('will add the dish:' + req.body.name + ' with details: ' + req.body.description);

    })

    .put((req, res, next) => {

        res.statusCode = 403;
        res.end('operation not supported on /dishes');

    })

    .delete((req, res, next) => {

        res.end('deleting all the dishes!');

    })


    .get((req, res, next) => {

        res.end('will send details of the dish: ' + req.params.dishID + ' to you!');

    })

    .post((req, res, next) => {


        res.statusCode = 403;
        res.end('operation not supported on /dishes/' + req.params.dishID);

    })

    .put((req, res, next) => {

        res.write('updating the dish: ' + req.params.dishID);
        res.end('will update the dish' + req.body.name + 'with details :' + req.body.description);

    })

    .delete((req, res, next) => {

        res.end('deleting dish!' + req.params.dishID);

    });


//task 1 : 


dishRouter.route('/:dishID').all((req, res, next) => {


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})


    .get((req, res, next) => {

        res.end('will send details of the dish: ' + req.params.dishID + ' to you!');

    })

    .post((req, res, next) => {


        res.statusCode = 403;
        res.end('operation not supported on /dishes/' + req.params.dishID);

    })

    .put((req, res, next) => {

        res.write('updating the dish: ' + req.params.dishID);
        res.end('will update the dish' + req.body.name + 'with details :' + req.body.description);

    })

    .delete((req, res, next) => {

        res.end('deleting dish!' + req.params.dishID);

    });







module.exports = dishRouter;