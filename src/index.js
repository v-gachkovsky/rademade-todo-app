import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , MOUNT_NODE);
registerServiceWorker();
