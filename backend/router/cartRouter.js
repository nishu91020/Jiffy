const express = require('express');
const cartRouter = express.Router();

cartRouter.get('/', (req, res, next) => {
    res.send('in customer cart');
});
cartRouter.post('/addProductToCart', (req, res, next) => {});

cartRouter.delete('/removeProductFromCart', (req, res, next) => {});

cartRouter.post('/purchaseProducts', (req, res, next) => {});

module.exports = cartRouter;
