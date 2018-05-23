var WebSocket = require('ws').Server;
var MessageParse = require('./MessageParse');
var Response = require('./Response');
var Application = require('./application');
var Action = require('./action')
var bodyParse = require('./middleware/bodyParse');

exports = module.exports = createApp;

function createApp(options){
  // 创建app实例
  let app = new Application();

  // 注册中间件
  app.use('request', bodyParse);

  return app;
}

createApp.MessageParse = MessageParse;
createApp.Response = Response;
createApp.Action = Action