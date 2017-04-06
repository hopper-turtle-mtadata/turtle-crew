const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/edit/:id', controller.edit);


module.exports = router;
