function requestLogger(ctx, next) {
  console.log(`req: ${JSON.stringify(ctx.req)}`);
  next();
}

module.exports = requestLogger