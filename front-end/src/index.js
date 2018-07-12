import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store, history } from './store/index';

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
    {/* </ConnectedRouter> */}
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
