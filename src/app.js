import Koa from 'koa';
import logger from 'koa-logger';
import { auth } from './middleware/auth';
import { router, basic } from './middleware/route';

const app = new Koa();

app.use(logger());
//权限
app.use(auth);
//路由
app.use(router);
app.use(basic);
console.log('Start Server ..');
app.listen(3000);
