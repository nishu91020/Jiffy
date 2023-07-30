const express = require('express');
const productRouter = express.Router();

productRouter.get('/', () => {
    res.send('in products');
});

productRouter.get('/:productName', (req, res, next) => {});

productRouter.get('/:productBrand', (req, res, next) => {});

productRouter.get('/:category', (req, res, next) => {});

productRouter.get('/allProducts', (req, res, next) => {});

module.exports = productRouter;
