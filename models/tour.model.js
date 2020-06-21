const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please indicate the name of the Tour'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'Please indicate the price of the tour'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  difficulty: {
    type: String,
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
