import { login, register, refreshToken } from '../service/login';

//default 404 or 500 router
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
    route('/register', () => register(request, response));
    route('/login', () => login(request, response));
    route('/refreshToken', () => refreshToken(request, response));

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


