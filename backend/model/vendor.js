const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({});

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;
