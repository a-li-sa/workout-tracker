const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { htmlIndex, htmlStats, htmlExercise} = require('../controllers/routesController')

router.use('/api', apiRoutes);

router.route('/')
  .get(htmlIndex);
router.route('/stats')
  .get(htmlStats);
router.route('/exercise')
  .get(htmlExercise);

module.exports = router;
