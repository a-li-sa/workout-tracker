const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const ExercisesSchema = require('./exercises')

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [ExercisesSchema]
})

const Workout = model('Workout', WorkoutSchema);

module.exports = Workout;
