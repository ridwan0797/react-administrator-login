// store.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/userReducers';

const store = createStore(rootReducer);

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
