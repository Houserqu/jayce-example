const Action = require('../../jayce').Action;
const Response = require('../../jayce').Response;


Action.action('/sign', function (ctx) {
  ctx.all(ctx.data);
})

Action.action('/login', function (ctx) {
  ctx.send(ctx.data);
})

module.exports = Action;
