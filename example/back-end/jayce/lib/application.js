var WebSocket = require('ws').Server;
var MessageParse = require('./MessageParse');
var Response = require('./Response');
var Base = require('./base');

function Jayce (){

  var messageParse = new MessageParse;
  
  // 添加 action
  this.action = function(type, callback) {
    // 验证actions合法性
    if(typeof type === 'string' && typeof callback === 'function'){
      this.actions.push({type, callback});
    } else {
      console.error('非法action')
    }
  }
  
  this.listen = function(options) {
    var ws = new WebSocket(options);

    var that = this;

    console.log('that', that);
    console.log(this.name);
  
    ws.on('connection', function(con){
      console.log('connection');
  
      that.clients.push(con);
    
      con.on('message',function(msg){
    
        let req = messageParse.parse(msg); // 构建用户post消息
        /**
         * msgAction = {type, date}
         */
  
        console.log(that.clients);
  
        that.actions.forEach((item, index) => {
          if(item.type === req.type){
            console.log(item);
            let res = new Response;
            messageParse.dispatch(req, res, item.callback);
          }
        })
    
        //con.send('backend');
      });
    
      con.on('close',function(){
        console.log('close by fe');
  
        // 从连接池中清除
        that.clients.forEach(function(item, index) {
          if(con === item){
            delete clients[index];
          }
        })
  
      });
    
      con.on('error',function(){
        console.log('error');
        
        // 从连接池中清除
        that.clients.forEach(function(item, index) {
          if(con === item){
            delete clients[index];
          }
        })
      });
    })
  }
}

Jayce.prototype = new Base();

module.exports = Jayce;
