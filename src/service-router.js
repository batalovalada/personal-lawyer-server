const Router = require('../framework/Router');
const controller = require('./service-controller');
const router = new Router();

router.get('/services', controller.getServices);

router.post('/services', controller.createService);

router.delete('/services', controller.deleteService);

module.exports = router;