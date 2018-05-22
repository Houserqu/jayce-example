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
  this.createReq = function (msg) {
    let message = JSON.parse(msg);
    let req = {
      type: message.type,
      data: message.data,
    }

    return req;
  }

  /**
   * 创建response对象
   * @param {ws connect} con 
   */
  this.createRes = function (con) {
    let res = {}

    /**
     * 给当前链接发送消息
     * @param {object} data 
     */
    res.send = function (data) {
      con.send(JSON.stringify(data));
    }

    /**
     * 广播
     * @param {object} data 
     */
    res.all = function (data) {
      that.clients.forEach(item => {
        item.send(JSON.stringify(data));
      });
    }

    return res;
  }

  MessageParse.instance = this;
}

MessageParse.prototype = new Base();

module.exports = new MessageParse();