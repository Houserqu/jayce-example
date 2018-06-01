import history from './history';
import reducer from './reducer';

function Jayce(option) {

  // 判断是否存在实例
  if (typeof Jayce.instance === 'object') {
    return Jayce.instance;
  }

  var ws = new WebSocket(option.url);

  ws.onmessage = function (msg) {
    console.log(msg);
    
  };
  ws.onerror = function () {
    console.log('error');
  }
  ws.onclose = function () {
    console.log('close')
  }

  // 发送 立即消息
  this.post = function (url, data) {
    var send = {
      header: {
        type: 'POST',
        url: url,
      },
      body: data
    }
    ws.send(JSON.stringify(send));
  }

  // 发送 订阅型消息
  this.subscribe = function(action) {
    var send = {
      header: {
        type: 'SUBSCRIBE',
        url: '/subscribe',
      },
      body: action
    }
    ws.send(JSON.stringify(send));
  }

  Jayce.instance = this;
}

export default Jayce;
export const createJayceHistory = history;
export const jayceReducer = reducer;