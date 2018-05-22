var Base = require('./base');

function MessageParse() {

  if (typeof MessageParse.instance === 'object') {
    return MessageParse.instance;
  }

  let that = this;

  this.createReq = function (msg) {
    let message = JSON.parse(msg);
    let req = {
      type: message.type,
      data: message.data,
    }

    return req;
  }

  this.createRes = function (con) {
    let res = {}

    res.send = function (data) {
      con.send(JSON.stringify(data));
    }

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