function requestLogger(ctx, next) {
  console.log(`req: ${JSON.stringify(ctx.res)}`);
  next();
}

module.exports = requestLogger