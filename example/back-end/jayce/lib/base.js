/**
 * 基础类
 * 用于共享数据：连接池，事件
 */
function Base(){

  // 判断是否存在实例
  if (typeof Base.instance === 'object') {
    return Base.instance;
  }

  this.clients = []; // 连接池池
  this.actions = [];
  this.name = 'base'

  // 缓存
  Base.instance = this;

  // 隐式返回this
}

module.exports = Base