const Router = require('../framework/Router');
const controller = require('./about-controller');
const router = new Router();

router.get('/about', controller.getAllAbout);

router.post('/about', controller.createAbout);

router.delete('/about', controller.deleteAbout);

module.exports = router;