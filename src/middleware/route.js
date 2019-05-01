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
    route('/auths', (ctx, next) => handleAuth(ctx, next));
    await next();

    function route(path, route_func) {
        let request = ctx.request;
        let url = request.url;
        if (path === url) {
            route_func(ctx);
            return;
        }
    }
}

function handleAuth(ctx) {
    console.log('Handle Auth, CTX:', ctx);
    ctx.body = 'Lalala';
}

