import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    Socket: null
  }

  createWs = () => {
    console.log('start connect');
    var ws = new WebSocket('ws://localhost:3001');
    ws.onmessage = function(msg) { console.log(msg); };
    ws.onerror = function(){
      console.log('error');
    }
    ws.onclose = function(){
      console.log('close')
    }
    //ws.send('conn hello world');

    this.setState({Socket: ws});
  }

  sendLogin = () => {
    console.log(this.state.Socket)
    var send = {type: '/login', data: 'login'}
    this.state.Socket.send(JSON.stringify(send));
  }

  sendSign = () => {
    console.log(this.state.Socket)
    var send = {type: '/sign', data: 'sign'}
    this.state.Socket.send(JSON.stringify(send));
  }

  closeWs = () => {
    this.state.Socket.close();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <button onClick={this.createWs}>建立连接</button>
          <button onClick={this.sendLogin}>发送login消息</button>
          <button onClick={this.sendSign}>发送sign消息</button>
          <button onClick={this.closeWs}>断开连接</button>
        </div>
      </div>
    );
  }
}

export default App;
