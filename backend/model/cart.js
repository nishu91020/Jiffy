const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    products: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: 'Product'
        }
    ]
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
