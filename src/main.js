import 'babel-polyfill';
import './main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
