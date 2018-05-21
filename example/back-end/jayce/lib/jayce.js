var WebSocket = require('ws').Server;
var MessageParse = require('./MessageParse');
var Response = require('./Response');
var Application = require('./application');

exports = module.exports = createApp;

function createApp(options){
  // function App(){

  // }
  // App.prototype = new Application();

  return new Application();
}

createApp.MessageParse = MessageParse;
createApp.Response = Response;