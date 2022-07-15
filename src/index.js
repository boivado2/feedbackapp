import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import FeedbackState from './context/feeds/feedbackState';
import AuthState from './context/auth/authState';



ReactDOM.render(
  <React.StrictMode>
      <AuthState>
        <FeedbackState>
          <Provider store={store}>
          <Router>
            <App />
          </Router>
          </Provider>
        </FeedbackState>
        </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


