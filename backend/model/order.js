const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    products: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Product'
        }
    ],
    orderdOn: {
        type: Date,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
