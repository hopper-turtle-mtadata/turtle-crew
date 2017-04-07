const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.index);
router.get('/mta/:id', controller.show);
router.post('/mta', controller.create);
router.put('/mta/:id', controller.update);
router.delete('/mta/:id', controller.destroy);

module.exports = router;
