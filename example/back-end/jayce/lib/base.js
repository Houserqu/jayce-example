/**
 * 基础类
 * 用于共享数据：连接池，事件
 */
function Base(){
  this.clients = []; // 连接池池
  this.actions = [];
  this.name = 'base'

  // 判断是否存在实例
  if (typeof Base.instance === 'object') {
    return Base.instance;
  }

  // 其它内容
  this.start_time = 0;
  this.bang = "Big";

  // 缓存
  Base.instance = this;

  // 隐式返回this
}

module.exports = Base