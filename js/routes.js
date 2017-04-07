import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

//Displays App component when root route is visited. 
export default (
  <Route path="/" component={App} />
);