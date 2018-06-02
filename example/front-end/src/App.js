import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { loginService, createArticleService } from './service/user';

class App extends Component {
  constructor() {
    super();
    console.log('about constructor');
  }

  componentDidCatch(){
    console.log('catch')
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  state = {
    Socket: null
  }

  createArticle = () => {
    createArticleService('new hahhaha');
  }

  sendLogin = () => {
    loginService();
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
          <button onClick={this.createArticle}>新建文章</button>
          <button onClick={this.sendLogin}>发送login消息</button>
          <button onClick={this.sendSign}>发送sign消息</button>
          <button onClick={this.closeWs}>断开连接</button>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/article'>Article</Link>
        </div>
      </div>
    );
  }
}

export default App;
