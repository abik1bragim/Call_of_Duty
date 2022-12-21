import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Games from './page/Games';
import Navbar from './components/Navbar';
import News from './page/News';
import Esports from './page/Esports';
import Support from './page/Support';
import Shop from './page/Shop';
import Login from './page/Login';
import Signup from './page/Signup';
import MW from './page/MW';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/games' element={<Games />} />
        <Route path='/blog' element={<News />} />
        <Route path='/esports' element={<Esports />} />
        <Route path='/support.activiton.com' element={<Support />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign_up' element={<Signup />} />
        <Route path='/modernwarfare2' element={<MW />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

