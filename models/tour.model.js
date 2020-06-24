const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const tourSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please indicate the name of the Tour'],
      unique: true,
    },
    slug: String,
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
    ratingsAverage: {
      type: Number,
      default: 4.5,
    },
    ratingsQuantity: {
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
      select: false,
    },
    startDates: [Date],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

//Document Middleware: runs before .save() and .create()
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

/* tourSchema.pre('save', function (next) {
  console.log("It's executed before post middleware!");
  next();
});

tourSchema.post('save', function (doc, next) {
  console.log(doc);
  next();
}); */

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
