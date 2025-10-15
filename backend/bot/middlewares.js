module.exports = {
  logMiddleware: (ctx, next) => {
    console.log(`📩 Mensaje recibido de ${ctx.from.username || ctx.from.first_name}: ${ctx.message?.text}`);
    return next();
  },
};
