const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        maxlength: 100,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        maxlength: 200
    },
    reviews: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Review'
        }
    ],
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Vendor',
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
