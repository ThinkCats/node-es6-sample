export async function error(ctx, next) {
    try {
        await next();
    } catch (err) {
        console.log('=======> Some Error');
        ctx.status = 500;
        ctx.body = `Oh.... ${err.message}`;
        console.log('Error handler:', err.message);
    }
}
