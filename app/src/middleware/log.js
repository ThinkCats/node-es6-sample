import { format } from '../utils/date';

async function logger(ctx, next) {
    let now = format(new Date(), 'yyyy-MM-dd hh:mm:ss.S');
    let request = ctx.request;
    let agent = request.header['user-agent'];
    console.log(`[${now}]\t${request.method}\t${request.url}\t${agent}`);
    await next();
}

export default logger;
