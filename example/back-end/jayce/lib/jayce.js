var WebSocket = require('ws').Server;
var MessageParse = require('./MessageParse');
var Response = require('./Response');
var Application = require('./application');
var Action = require('./action')
var requestBodyParse = require('./middleware/requestBodyParse');
var requestLogger = require('./middleware/requestLogger');
var responseLogger = require('./middleware/responseLogger');
var responseBodyParse = require('./middleware/responseBodyParse');
var errorAction = require('./action/error');
var subscribeAction = require('./action/subscribe');

exports = module.exports = createApp;

function createApp(options){
  // 创建app实例
  let app = new Application();

  // 注册系统级中间件
  app.use('request', requestBodyParse);
  app.use('request', requestLogger);

  app.use('response', responseBodyParse);
  app.use('response', responseLogger);

  // 注册系统事件
  app.actionCollection(errorAction);
  app.actionCollection(subscribeAction);

  return app;
}

createApp.MessageParse = MessageParse;
createApp.Response = Response;
createApp.Action = Action;