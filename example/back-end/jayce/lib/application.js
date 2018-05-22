var WebSocket = require('ws').Server;
var messageParse = require('./messageParse');
var Base = require('./base');

function Jayce (){

  /**
   * 添加一个action集合
   * @param {string} first 一级action
   * @param {Object} actionsRouter actions 对象
   */
  this.actionCollection = function(actionsRouter){
    this.actions = [...actionsRouter.actions];
  }
  
  /**
   * 
   * @param {string} name 事件名称
   * @param {function} callback 事件回调
   */
  this.action = function(type, callback) {
    // 验证actions合法性
    if(typeof type === 'string' && typeof callback === 'function'){
      this.actions.push({type, callback});
    } else {
      console.error('非法action')
    }
  }
  
  /**
   * 创建 ws 服务器
   * @param {Object} options 
   */
  this.listen = function(options) {
    var ws = new WebSocket(options);

    var that = this;
  
    ws.on('connection', function(con){
      console.log('connection');
  
      that.clients.push(con);
    
      con.on('message',function(msg){
        let req = messageParse.createReq(msg); // 构建 请求 对象

        let res = messageParse.createRes(con); //构建 响应 对象
        /**
         * msgAction = {type, date}
         */
    
        that.actions.forEach((item, index) => {
          if(item.type === req.type){
            item.callback(req, res)
            //messageParse.dispatch(req, item.callback, con);
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

    console.log('server listen on: ', options.port)
  }
}

Jayce.prototype = new Base();

module.exports = Jayce;
