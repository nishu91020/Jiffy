const express = require('express');
const cartRouter = express.Router();

cartRouter.get('/', (req, res, next) => {
    res.send('in customer cart');
});
cartRouter.post('/:customerId/addProductToCart', (req, res, next) => {});

cartRouter.delete(':customerId/removeProductFromCart', (req, res, next) => {});

cartRouter.post('/:customerId/purchaseProducts', (req, res, next) => {});

module.exports = cartRouter;
