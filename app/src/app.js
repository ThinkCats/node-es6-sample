import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { auth } from './middleware/auth';
import { router, basic } from './middleware/route';
import logger from './middleware/log';
import { error } from './middleware/error';

const app = new Koa();

//TODO enable error middleware
app.use(error);
app.use(bodyParser());
app.use(logger);
app.use(auth);
app.use(basic);
//router as last middleware
app.use(router);
app.listen(3000, () => {
    console.log('Start Server ..');
});
