import history from './history';
import reducer from './reducer';
import messageParser from './messageParser';
import subscribe from './subscribe';

function Jayce(store, option) {

  // 判断是否存在实例
  if (typeof Jayce.instance === 'object') {
    return Jayce.instance;
  }

  var ws = new WebSocket(option.url);

  console.log('new ws');

  ws.onmessage = function (msg) {
    // 消息解析器
    messageParser(msg, store);
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
    console.log('subscribe ', action)
    var send = {
      header: {
        type: 'SUBSCRIBE',
        url: '/subscribe',
      },
      body: action
    }
    ws.send(JSON.stringify(send));
  }

  this.unsubscribe = function(action) {
    console.log('unsubscribe ', action)
    var send = {
      header: {
        type: 'UNSUBSCRIBE',
        url: '/unsubscribe',
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
export const jaycesubscribe = subscribe ;