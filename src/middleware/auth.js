import { isEmpty } from '../utils/strings';
import { decode } from '../utils/jwt';
import { parseRawData } from '../utils/auth';

//auth
export async function auth(ctx, next) {
    console.log('Context:', ctx);
    let request = ctx.request;
    let url = request.url;
    //限制某些资源必须使用权限
    if (url.startsWith('/auth')) {
        //check auth
        ctx.body = 'No Auth';
        //test set header
        let header = ctx.request.header;
        let token = header.token;
        if (isEmpty(token)) {
            ctx.body = 'need login';
        } else {
            // parse token
            decode(token).then(data => {
                let rawObj = parseRawData(data);
                ctx.body = rawObj;
            });
        }
    }
    await next();
}
