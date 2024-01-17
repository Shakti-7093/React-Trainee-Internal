import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDoList from './Components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);