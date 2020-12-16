import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyA8kuMsi2DvpNMorJv8WUugkMzqo4hinCw",
  authDomain: "my-project-d9de1.firebaseapp.com",
  databaseURL: "https://my-project-d9de1-default-rtdb.firebaseio.com",
  projectId: "my-project-d9de1",
  storageBucket: "my-project-d9de1.appspot.com",
  messagingSenderId: "687780789424",
  appId: "1:687780789424:web:e3c457f5224a92cf53cf75"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
