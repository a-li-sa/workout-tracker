const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const ExercisesSchema = require('./exercises')

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [ExercisesSchema]
})

const Workout = model('workout', WorkoutSchema);

module.exports = Workout;
