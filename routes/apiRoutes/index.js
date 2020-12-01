const router = require('express').Router();
const workoutsRoutes = require('./workoutsRoutes')

// Everyting in this router already has /api prepended to it
router.use('/workouts', workoutsRoutes);

module.exports = router;
