function responseBodyParse(ctx, next) {
  ctx.res.header = {...ctx.res.header, code: 200};
  next();
}

module.exports = responseBodyParse