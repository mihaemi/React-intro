import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import DynamicBox from './DynamicBox';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DynamicBox size={100} color="green" />
  </React.StrictMode>
);

//console.log(root)

reportWebVitals();
