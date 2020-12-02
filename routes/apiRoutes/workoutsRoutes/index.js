const router = require('express').Router();
const {getLastWorkout, createWorkout, addExercise, getWorkoutsInRange} = require('../../../controllers/workoutsController');

router.route('/')
  .get(getLastWorkout)
  .post(createWorkout);

router.route('/:_id')
  .put(addExercise);

router.route('/range')
  .get(getWorkoutsInRange);

module.exports = router;
