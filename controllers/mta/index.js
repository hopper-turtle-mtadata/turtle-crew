const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);
// router.get('/:id', controller.show);
router.post('/station', controller.dropdown);

module.exports = router;
