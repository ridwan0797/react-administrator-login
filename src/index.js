import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux'; // Import createStore
import { Provider } from 'react-redux'; // Import Provider
import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducers'; // Import the root reducer
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer); // Pass the root reducer to createStore

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provide the store to the App */}
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
