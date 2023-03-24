import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mono from './Mono';
import Gradient from './Gradient';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/mono' element={<Mono />} />
        <Route path='/gradient' element={<Gradient />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
