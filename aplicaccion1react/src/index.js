import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Users from './pages/Users';
import CardUser from './components/CardUser/CardUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/user/' element={<Users/>}></Route>
        <Route path='/user-card/' element={<CardUser/>}></Route>
      
    </Routes>
  </BrowserRouter>
);


