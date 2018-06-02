var WebSocket = require('ws').Server;
var messageParse = require('./messageParse');
var Base = require('./base');
var MiddleExecute = require('./middleExecute');

function Jayce (){
  /**
   * 连接池
   */
  this.clients = []

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

  
  this.use = function(type, fn){
    if (typeof fn === 'function' && typeof type == 'string') {
      this.middleware.push({
        type, fn
      })
    }
  }

  this.init = function() {
    //this.middleware.push()
  }
  
  /**
   * 创建 ws 服务器
   * @param {Object} options 
   */
  this.listen = function(options) {
    var ws = new WebSocket(options);

    var that = this;
  
    ws.on('connection', function(con){  
      that.clients.push(con);
      console.log('new client, current clients number:',that.clients.length);
      //console.log(con);

      con.on('message',function(msg){
        let ctx = messageParse.createContext(msg, con, that.clients); // 构建 事件上下文

        // 实例化中间件执行器
        MiddleExecute(ctx, 'request');

        // 返回处理后的上下文
        //ctx = middleExecute.ctx;

        // 是否匹配到处理事件
        let isMatchAction = false;

        // 执行对应事件处理器
        that.actions.forEach((item, index) => {
          if (item.type === ctx.req.header.url) {
            isMatchAction = true;
            item.callback(ctx)
            //messageParse.dispatch(req, item.callback, con);
          }
        })

        if(!isMatchAction){
          con.send('no match');
        }
      });
    
      con.on('close',function(){
        // 从连接池中清除
        that.clients.forEach(function(item, index, array) {
          if(con === item){
            array.splice(index, 1);
          }
        });
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
