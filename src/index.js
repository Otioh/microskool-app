import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'jquery/dist/jquery';
import {HashRouter} from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
       <App />
    </HashRouter>
   
  </React.StrictMode>
);


