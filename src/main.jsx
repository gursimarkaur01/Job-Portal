import React from 'react';
import ReactDOM from 'react-dom/client';
import '/index.css';
import { BrowserRouter } from 'react-router-dom';
import 'app.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);