const Action = require('../jayce').Action;
const Response = require('../jayce').Response;


Action.action('/error', function (ctx) {
  ctx.me('请求格式错误');
})

module.exports = Action;
