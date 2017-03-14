require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/app';
//import reducers from './reducers';



document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Test />, document.getElementById('container'))
);