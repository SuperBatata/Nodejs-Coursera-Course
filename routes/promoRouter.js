//task 2

const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/').all((req, res, next) => {


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

    .get((req, res, next) => {

        res.end('will send all promotions to you');

    })

    .post((req, res, next) => {


        res.end('will add the promo:' + req.body.name + ' with details: ' + req.body.description);

    })

    .put((req, res, next) => {

        res.statusCode = 403;
        res.end('operation not supported on /promotions');

    })

    .delete((req, res, next) => {

        res.end('deleting all the promotions!');

    })

promoRouter.route('/:promoId').all((req, res, next) => {


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})



    .get((req, res, next) => {

        res.end('will send details of the promo: ' + req.params.promoID + ' to you!');

    })

    .post((req, res, next) => {


        res.statusCode = 403;
        res.end('operation not supported on /promotions/' + req.params.promoID);

    })

    .put((req, res, next) => {

        res.write('updating the promotions: ' + req.params.promoID);
        res.end('will update the promotion' + req.body.name + 'with details :' + req.body.description);

    })

    .delete((req, res, next) => {

        res.end('deleting promotions!' + req.params.promoID);

    });



module.exports = promoRouter;