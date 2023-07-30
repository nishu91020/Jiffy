const express = require('express');
const customerRouter = express.Router();

const cartRouter = require('./cartRouter');

customerRouter.get('/', (req, res, next) => {
    res.send('in customer');
});

customerRouter.use('/cart', cartRouter);

customerRouter.get('/:customerId/allOrders', (req, res, next) => {});

customerRouter.get('/:customerId/profileDetails', (req, res, next) => {});

customerRouter.put('/:customerId/profileDetails', (req, res, next) => {});

module.exports = customerRouter;
