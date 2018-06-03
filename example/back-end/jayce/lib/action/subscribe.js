const Action = require('../action');
const Response = require('../jayce').Response;
const subscriber = require('../subscriber');

Action.action('/subscribe', function (ctx) {
  console.log('开始订阅请求');

  let action = ctx.req.body;

  if (ctx.req.header.type === 'SUBSCRIBE') {
    // 存在观察对象
    if (action in subscriber && typeof subscriber[action] instanceof Array) {
      subscriber[action].push(ctx.con);
    } else {
      subscriber[action] = [];
      subscriber[action].push(ctx.con);
    }
  }

  ctx.me('订阅成功');
})

Action.action('/unsubscribe', function (ctx) {
  let action = ctx.req.body;

  if (ctx.req.header.type === 'UNSUBSCRIBE') {
    // 存在观察对象
    if (action in subscriber && subscriber[action] instanceof Array) {
      subscriber[action].forEach((item, index) => {
        if(item == ctx.con){
          subscriber[action].splice(index, 1);
        }
      })
    }
  }
  console.log(subscriber[action].length);
  ctx.me('取消订阅成功');
})

module.exports = Action;
