const Action = require('../../jayce').Action;
const Response = require('../../jayce').Response;


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
    action: 'GET_NEW_ARTICLE',
    title: ctx.req.body
  })
})

module.exports = Action;
