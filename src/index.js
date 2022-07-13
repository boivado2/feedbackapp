import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FeedbackState from './context/feeds/feedbackState';
import {BrowserRouter as Router} from 'react-router-dom'
import AuthState from './context/auth/authState';
import AppState from './context/app/appState';


ReactDOM.render(
  <React.StrictMode>
      <AppState>
      <AuthState>
        <FeedbackState>
          <Router>
            <App />
          </Router>
        </FeedbackState>
        </AuthState>
        </AppState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


