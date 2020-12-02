const db = require('../models');
const Workout = require('../models/workout');

module.exports = {
  getLastWorkout: async (req, res) => {
    try {
      db.find({}).sort({day: -1}).limit(1)
        .then(workout => res.send(workout))
    } catch (e) {
      console.log(e)
      res.status(401).json(e);
    }
  },
  createWorkout: async (req, res) => {
    try {
      const workout = await new Workout({})
      workout.save();
      res.json(workout);
    } catch (e) {
      console.log(e)
      res.status(401).json(e);
    }
  },
  addExercise: async (req, res) => {
    const { _id } = req.params;
    try {
      db.findOne({_id})
        .then(workout => {
          workout.exercises.push(req.body)
          workout.save();
          res.json(workout);
        })
    } catch (e) {
      console.log(e)
      res.status(401).json(e);
    }
  },
  getWorkoutsInRange: async (req, res) => {
    try {

    } catch (e) {
      console.log(e)
      res.status(401).json(e);
    }
  },
}
