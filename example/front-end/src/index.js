import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './page/About';
import Home from './page/Home';
import NoMatch from './page/NoMatch';
import registerServiceWorker from './registerServiceWorker';
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { createStore } from 'redux'
import {
  Provider
} from 'react-redux'

import jayce from './jayce-fe/jayce';

import todoApp from './reducers'​;
const store = createStore(todoApp)

ReactDOM.render(
  <Router history={jayce}>
    <div>
      <App />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
    
  </Router>, document.getElementById('root'));
registerServiceWorker();
