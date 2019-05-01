import { encode } from '../utils/jwt';
import { createRawData } from '../utils/auth';

//default router
export async function basic(ctx, next) {
    if (ctx.body == null || ctx.body == undefined) {
        ctx.body = 'Default Page';
    }
    await next();
}

//router
export async function router(ctx, next) {
    //reset body
    //ctx.body = null;
    let request = ctx.request;
    let response = ctx.response;
    route('/login', () => handleLogin(request, response));
    await next();

    function route(path, routeFunc) {
        let request = ctx.request;
        let url = request.url;
        if (path === url) {
            routeFunc(request, response);
            return;
        }
    }
}

function handleLogin(req, resp) {
    console.log('Req:', req.body);
    let data = req.body;
    let token = encode(createRawData(data));
    resp.body = token;
}

