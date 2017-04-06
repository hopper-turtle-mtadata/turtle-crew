const router = require('express').Router();

router.use('/',  require('./controllers/mta'));
// router.use('/api', require('./controllers/api'));


module.exports = router;
