var Base = require('./base');

function Response(){
  // 判断是否存在实例
  if (typeof Response.instance === 'object') {
    return Response.instance;
  }

  /**
   * 广播
   */
  this.all = function(data){
    console.log('res send');
    this.clients.forEach(item => {
      item.send(JSON.stringify(data));
    });
  }

  Response.instance = this;
}

Response.prototype = new Base();

module.exports = new Response();