// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your custom styles (if any)
import 'antd/dist/reset.css'; // Import Ant Design styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);