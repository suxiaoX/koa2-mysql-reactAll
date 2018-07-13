import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userInfo from './user';

const rootReducer = combineReducers({
  router: routerReducer,
  userInfo
});

export default rootReducer;