import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/banner/Banner';
import Descripcion from './components/descripcion/Descripcion';

import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Descripcion/>
    <Banner/>
  </React.StrictMode>
);
