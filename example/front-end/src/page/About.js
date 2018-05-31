import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    console.log('about constructor');
  }

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
    var send = {
      header: {
        url: '/login', data: 'login' 
      },
      body: 'login'
    }
    

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
      <div>about</div>
    );
  }
}

export default App;
