const Action = require('../action');
const Response = require('../jayce').Response;

Action.action('/subscribe', function (ctx) {
  console.log('开始订阅请求');
  ctx.me('订阅成功');
})

Action.action('/unsubscribe', function (ctx) {
  ctx.me('取消订阅成功');
})

module.exports = Action;
