import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import PaginaInicial1 from './components/PaginaInicial1';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <PaginaInicial1 />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);