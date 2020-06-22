const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please indicate the name of the Tour'],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, 'Please indicate the duration of the tour'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Please indicate the group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'Please indicate the difficulty'],
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Please indicate the price of the tour'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'Please indicate the summary'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'Please indicate the image cover.'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDate: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
