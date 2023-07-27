const Router = require('../framework/Router');
const controller = require('./staff-controller');
const router = new Router();

router.get('/staff', controller.getStaff);

router.post('/staff', controller.createStaff);

router.delete('/staff', controller.deleteStaff);

module.exports = router;