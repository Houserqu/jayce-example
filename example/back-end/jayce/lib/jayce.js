var WebSocket = require('ws').Server;
var MessageParse = require('./MessageParse');
var Response = require('./Response');
var Application = require('./application');
var Action = require('./action')
var requestBodyParse = require('./middleware/requestBodyParse');
var responseBodyParse = require('./middleware/responseBodyParse');
var errorAction = require('./action/error');

exports = module.exports = createApp;

function createApp(options){
  // 创建app实例
  let app = new Application();

  // 注册系统级中间件
  app.use('request', requestBodyParse);
  app.use('response', responseBodyParse);

  // 注册系统事件
  app.actionCollection(errorAction);

  return app;
}

createApp.MessageParse = MessageParse;
createApp.Response = Response;
createApp.Action = Action