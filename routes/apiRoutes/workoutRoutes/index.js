const router = require('express').Router();
const {getLastWorkout, createWorkout, addExercise, getWorkoutsInRange} = require('../../../controller/workoutsControllers');

router.route('/')
  .get(getLastWorkout)
  .post(createWorkout);

router.route('/:id')
  .put(addExercise);

router.route('/range')
  .get(getWorkoutsInRange);

module.exports = router;
