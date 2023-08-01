const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = email => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 40
    },
    dateOfBirth: {
        type: Date,
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
    mobileNo: {
        type: String,
        maxlength: 10,
        minlength: 10,
        required: true
    }
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
