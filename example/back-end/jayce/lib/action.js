var Base = require('./base');

function Action(){
  this.actions = [];
  
  this.action = function(type, callback) {
    // 验证actions合法性
    if(typeof type === 'string' && typeof callback === 'function'){
      this.actions.push({type, callback});
    } else {
      console.error('非法action')
    }
  }
}

module.exports = new Action();