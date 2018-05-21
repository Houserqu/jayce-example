//var getArticle = require('./action/getArticle');

class MessageParse {

  parse (message) {
    
    return {type: 'GET', data: 'action'};
  }

  dispatch (req, res, actionFn) {
    // 执行 action 方法
    actionFn(req, res);
  }
}

module.exports = MessageParse;