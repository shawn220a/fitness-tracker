const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Enter a name for exercise',
  },
  duration: {
    type: String,
  },
  distance: {
    type: String,
  },
  weight: {
    type: Number,
    required: 'Enter an amount',
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
