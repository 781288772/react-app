import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //严格模式节点要去掉
  //影响useEffect的执行时机 
  // <React.StrictMode>

  // </React.StrictMode>
  <App />
);