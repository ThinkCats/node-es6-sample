import { login, register, refreshToken } from '../service/login';

//default 404 or 500 router
export async function basic(ctx, next) {
    if (ctx.body == null || ctx.body == undefined) {
        ctx.body = 'Default Page';
    }
    await next();
}

//router, no next
export async function router(ctx) {
    let routeList = [
        { path: '/register', handler: register },
        { path: '/login', handler: login },
        { path: '/refreshToken', handler: refreshToken },
    ];
    await route();

    function route() {
        let request = ctx.request;
        let response = ctx.response;
        let match = false;
        let result = null;
        routeList.forEach(item => {
            let path = item.path;
            let handler = item.handler;
            let url = request.url;
            console.log('path:', url);
            console.log('route path:', path);
            if (path == url) {
                match = true;
                result = handler(request, response);
            }
        });
        if (!match) {
            throw new Error('Unkown Path');
        }
        return result;
    }

}



