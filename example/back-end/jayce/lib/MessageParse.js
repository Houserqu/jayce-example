var Base = require('./base');
var MiddleExecute = require('./middleExecute');

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
  this.createContext = function (msg, con, clients) {
    // 创建上下文对象
    let ctx = {}

    ctx.message = msg;
    ctx.res = {
      header: '',
      body: ''
    }

    /**
     * 给当前链接发送消息
     * @param {object} data 
     */
    ctx.send = function () {

      // 实例化中间件执行器
      MiddleExecute(ctx, 'response');
      //middleExecute.next();

      // 返回处理后的上下文
      //reqctx = middleExecute.ctx;

      console.log('res : ', ctx);
      con.send(JSON.stringify(ctx.res));
    }

    /**
     * 广播
     * @param {object} data 
     */
    ctx.all = function (data, header) {
      this.res.body = data;
      this.res.header = {...header, ...this.res.header};

      MiddleExecute(ctx, 'response');

      clients.forEach(item => {
        item.send(this.res);
      });
    }

    /**
     * 发布
     * @param {object} data 
     */
    ctx.release = function (data) {
      this.res.body = data;
      this.res.header = { type: 'SUBSCRIBE',
        ...this.res.header
      };

      MiddleExecute(ctx, 'response');

      clients.forEach(item => {
        item.send(JSON.stringify(this.res));
      });
    }

    ctx.me = function (data, header) {
      this.res.body = data;
      //this.res.header = {...header, ...this.res.header};
      //MiddleExecute(ctx, 'response');

      ctx.send();
    }

    return ctx;
  }

  MessageParse.instance = this;
}

MessageParse.prototype = new Base();

module.exports = new MessageParse();