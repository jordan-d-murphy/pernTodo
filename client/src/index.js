import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> SHOWS CONSOLE LOGS TWICE https://stackoverflow.com/questions/61339202/my-console-log-shows-up-twice-in-my-chrome-console
    <App />
  // </React.StrictMode>  
);
