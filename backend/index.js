const express = require('express');
const app = express();

const vendor = require('./vendor/vendorIndex.js');
const customerRouter = require('./customer/customerIndex.js');
const product = require('./product/productIndex.js');

app.use('/vendor', vendor);
app.use('/customer', customerRouter);
app.use('/product', product);

app.get('/', (req, res) => {
    res.send('welcome to the app');
});
app.listen(8080, () => {
    console.log('app listning on port 8080');
});
