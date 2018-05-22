//var getArticle = require('./action/getArticle');

class MessageParse {

  parse (message) {
    return JSON.parse(message);
  }

  dispatch (req, actionFn) {
    // 执行 action 方法
    actionFn(req);
  }
}

module.exports = MessageParse;