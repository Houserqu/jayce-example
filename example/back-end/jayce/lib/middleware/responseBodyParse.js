function responseBodyParse(ctx, next) {
  ctx.res.header = '200';
  next();
}

module.exports = responseBodyParse