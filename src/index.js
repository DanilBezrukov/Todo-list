import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from './routes/MyRoutes'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <MyRoutes/>
  </BrowserRouter>
  </React.StrictMode>
);
