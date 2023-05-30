// rootReducer.js

import { combineReducers } from 'redux';
import userReducer from './userReducers';

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers here if needed
});

export default rootReducer;
