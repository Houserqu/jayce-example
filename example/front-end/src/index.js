import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './page/About';
import Home from './page/Home';
import NoMatch from './page/NoMatch';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import Jayce, { createJayceHistory, jayceReducer} from './jayce-fe';

import store from './store';
import jayce from './jayce';
import Article from './page/Article';

console.log(store.getState());

const history = createJayceHistory(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <App />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/article" component={Article}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
