// require('babel-polyfill');
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Test from './components/app';
// //import reducers from './reducers';



// document.addEventListener('DOMContentLoaded', () =>
//     ReactDOM.render(<Test />, document.getElementById('container'))
// );



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('container'));
