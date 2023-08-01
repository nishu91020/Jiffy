const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        enum: [ 1, 2, 3, 4, 5 ],
        required: true
    },
    title: {
        type: String,
        maxlength: 20,
        required: true
    },
    description: {
        type: String,
        maxlength: 200
    }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
