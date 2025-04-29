import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Make sure the import path is correct
import './index.css';  // If you're using Tailwind CSS or any global styles

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
