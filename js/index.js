require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory} from 'react-router'; 
import reducers from './reducers';
import routes from './routes';
import ReduxPromise from 'redux-promise';
console.log(browserHistory, "hello");

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('container'));
})


