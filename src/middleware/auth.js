import { isEmpty } from '../utils/collection';
import { parseRawData, decode } from '../utils/auth';
import { millsecondsOfOneDay } from '../utils/constant';

//auth
export async function auth(ctx, next) {
    console.log('Context:', ctx);
    let request = ctx.request;
    let url = request.url;
    //限制某些资源必须使用权限
    let skipCheckAuth = (url.startsWith('/register')
        || url.startsWith('/login'));
    if (!skipCheckAuth) {
        let header = ctx.request.header;
        let token = header.token;
        if (isEmpty(token)) {
            ctx.body = 'need login';
            return;
        } else {
            // parse token
            await checkToken(token);
        }
    }
    await next();
}

async function checkToken(token) {
    let decodeStr = null;
    try {
        decodeStr = await decode(token);
    } catch (err) {
        throw new Error('Parse Token Fail, Please Login Again');
    }
    let tokenClz = await parseRawData(decodeStr);
    let createTime = tokenClz.createTime;
    let validDate = tokenClz.validDate;
    let nowTime = (new Date()).getTime();
    let tokenDuration = parseInt(nowTime) - parseInt(createTime);
    if (isNaN(tokenDuration)) {
        throw new Error('Invalid Token');
    }
    let validTime = (validDate * millsecondsOfOneDay);
    if (tokenDuration > validTime) {
        throw new Error('Token is valid, need login again');
    }
}
