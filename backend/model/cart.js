const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
