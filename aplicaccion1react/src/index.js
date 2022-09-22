import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/banner/Banner';
import Descripcion from './components/descripcion/Descripcion';
import Feature from './components/feature/Feature';

import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner/>
    <Descripcion/>
    <Feature/>
  </React.StrictMode>
);
