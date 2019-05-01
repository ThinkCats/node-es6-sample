
//auth
export async function auth(ctx, next) {
    console.log('Context:', ctx);
    let request = ctx.request;
    let url = request.url;
    if (url === '/auth') {
        ctx.body = 'No Auth';
    }
    let headers = ctx.headers;
    //TODO get token from headers
    await next();
}
