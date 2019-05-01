import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { auth } from './middleware/auth';
import { router, basic } from './middleware/route';
import logger from './middleware/log';

const app = new Koa();

//body parser
app.use(bodyParser());
app.use(logger);
//权限
app.use(auth);
//路由
app.use(router);
app.use(basic);
console.log('Start Server ..');
app.listen(3000);
