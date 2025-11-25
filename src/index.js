import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import UserInfo from './components/UserInfo';

ReactDOM.render(
  <Provider store={store}>
    <UserInfo />
  </Provider>,
  document.getElementById('root')
);
