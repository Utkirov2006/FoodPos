import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import Country from './pages/Country';
import Statistic from './pages/Statistic';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className='full-blog d-xl-flex d-block'>
      <BrowserRouter>
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country" element={<Country />} />
            <Route path="/statistic" element={<Statistic />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
