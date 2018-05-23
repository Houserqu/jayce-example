function bodyParse(ctx, next) {
  ctx.req = JSON.stringify(ctx.message);
  ctx.header = ctx.req.header;
  ctx.body = ctx.req.body;
}

module.exports = bodyParse