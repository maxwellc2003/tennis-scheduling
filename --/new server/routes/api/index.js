const router = require('express').Router();
const eventRoutes = require('./event-routes');
const userRoutes = require('./user-routes');

router.use('/events', eventRoutes);
router.use('/users', userRoutes);

module.exports = router;