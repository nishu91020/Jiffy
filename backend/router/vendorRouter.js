const express = require('express');
const vendorRouter = express.Router();

vendorRouter.get('/', (req, res, next) => {
    res.send('in vendor');
});

vendorRouter.get('/:vendorId/allProducts', (req, res, next) => {});

vendorRouter.get('/:vendorId/allOrders', (req, res, next) => {});

vendorRouter.get('/:vendorId/details', (req, res, next) => {});

vendorRouter.post('/:vendorId/addProduct', (req, res, next) => {});

vendorRouter.put('/:vendorId/:productId/modifyProduct', (req, res, next) => {});

vendorRouter.delete('/:vendorId/:productId/deleteProduct', (req, res, next) => {});

module.exports = vendorRouter;
