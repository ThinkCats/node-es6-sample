export async function error(ctx, next) {
    try {
        await next();
    } catch (err) {
        ctx.status = 500;
        ctx.body = `${err.message}`;
        console.log('Error handler:', err.message);
    }
}
