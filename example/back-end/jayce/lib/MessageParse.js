var Base = require('./base');

/**
 * 消息解析器，根据客户端发送的消息构建请求对象和回复对象
 */
function MessageParse() {

  if (typeof MessageParse.instance === 'object') {
    return MessageParse.instance;
  }

  let that = this;

  /**
   * 根据消息创建请求对象
   * @param {string} msg 
   */
  this.createContext = function (msg, con) {
    // 创建上下文对象
    let ctx = {}

    ctx.message = msg;

    /**
     * 给当前链接发送消息
     * @param {object} data 
     */
    ctx.send = function (data) {

      // 实例化中间件执行器
      let middleExecute = new MiddleExecute(data, 'response');
      middleExecute.next();

      // 返回处理后的上下文
      ctx = middleExecute.ctx;

      con.send(JSON.stringify(data));
    }

    /**
     * 广播
     * @param {object} data 
     */
    ctx.all = function (data) {
      that.clients.forEach(item => {
        item.send(JSON.stringify(data));
      });
    }

    return ctx;
  }

  MessageParse.instance = this;
}

MessageParse.prototype = new Base();

module.exports = new MessageParse();