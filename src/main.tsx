import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

console.log(bootstrap);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
