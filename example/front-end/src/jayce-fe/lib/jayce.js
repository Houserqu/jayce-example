import history from './history';
import reducer from './reducer';

function Jayce(option) {
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

  this.send = function (data) {
    ws.send(data);
  }
}

export default Jayce;
export const createJayceHistory = history;
export const jayceReducer = reducer;