import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // 'react-router-dom' es una biblioteca para la navegación en aplicaciones de una sola página (SPA) y permite la gestionar rutas y vistas en la app 
import { Provider } from 'react-redux';
import store from './redux/store.js';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path='/app' element={ <App/> } />     
    </Routes>
    </BrowserRouter>
  </Provider>

);
