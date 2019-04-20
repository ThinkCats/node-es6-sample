import Koa from 'koa';
import logger from 'koa-logger';

const app = new Koa();

app.use(logger());
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3000);
