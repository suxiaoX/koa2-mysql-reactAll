import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../redux/reducers/index';

const logger = createLogger({ collapsed: true });
const history = createHistory();
const routerML = routerMiddleware(history);
const store = function () {
  if (process.env.NODE_ENV === 'production') {
    let store = createStore(
      rootReducer,
      compose(
        applyMiddleware(thunk, routerML)
      )
    );

    return store;
  } else {
    return createStore(
      rootReducer,
      compose(
        applyMiddleware(thunk, routerML, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );
  }
}();

export { store, history };
