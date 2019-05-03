import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { auth } from './middleware/auth';
import { router, basic } from './middleware/route';
import logger from './middleware/log';
import { error } from './middleware/error';

const app = new Koa();

app.use(error);
app.use(bodyParser());
app.use(logger);
app.use(auth);
app.use(basic);
//router as last middleware
app.use(router);
console.log('Start Server ..');
app.listen(3000);
