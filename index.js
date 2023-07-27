const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const postRouter = require('./src/post-router');
const serviceRouter = require('./src/service-router');
const aboutRouter = require('./src/about-router');
const staffRouter = require('./src/staff-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');

const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(postRouter);
app.addRouter(serviceRouter);
app.addRouter(aboutRouter);
app.addRouter(staffRouter);
app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
