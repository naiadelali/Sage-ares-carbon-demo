import React from 'react';
import ReactDOM from 'react-dom'
import 'carbon-react/lib/utils/css';
import { Route } from 'react-router';
import { startRouter } from 'carbon-react/lib/utils/router';

// import our component we want to render
import App from './components/main/app'

ReactDOM.render(
  <App />
,document.getElementById('app'))


// defined what components get renderered per route - see docs for React Router for more info
//MAR const routes = (
//MAR   <Route path='/' component={ App } />
//MAR );

// start the router with the given routes
//MAR startRouter(routes);

// this starts hot reloading for webpack
//MAR if (module.hot) {
  //MAR module.hot.accept();
//MAR }
