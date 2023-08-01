const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    city: {
        type: String,
        maxlength: 20,
        required: true
    },
    state: {
        type: String,
        maxlength: 20,
        required: true
    },
    landmark: {
        type: String,
        maxlength: 50,
        required: true
    },
    country: {
        type: String,
        maxlength: 20,
        required: true
    },
    pincode: {
        type: Number,
        minlength: 6,
        maxlength: 6,
        required: true
    }
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
