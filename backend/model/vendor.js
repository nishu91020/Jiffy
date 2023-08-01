const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    name: {
        type: String,
        maxlength: 40,
        required: true
    },
    liscenceNumber: {
        type: String,
        maxlength: 15,
        minlength: 15,
        required: true
    },
    address: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Address',
        required: true
    },
    mobileNo: {
        type: String,
        maxlength: 10,
        minlength: 10,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: [ validateEmail, 'Please fill a valid email address' ],
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address' ]
    },
    password: {
        type: String,
        required: true,
        match: [ /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password must contain a letter, a special character and numer with 8 chars minimum' ]
    },
    dateOfBirth: {
        type: Date,
        required: true
    }
});

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;
