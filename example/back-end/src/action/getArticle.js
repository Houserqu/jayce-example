const Action = require('jayce-server').Action;
const Response = require('jayce-server').Response;


Action.action('/sign', function (ctx) {
  ctx.all(ctx.data);
})

Action.action('/login', function (ctx) {
  console.log('cur action login');

  ctx.me('response');
})

Action.action('/createarticle', function (ctx) {
  console.log(ctx.req.body);
  ctx.release({
    type: 'GET_NEW_ARTICLE',
    title: ctx.req.body
  })
})

module.exports = Action;
