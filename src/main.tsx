import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CgiInfo from './pages/CGI';
import SpinsInfo from './pages/Spins';
import PhotographyInfo from './pages/Photography';
import DapInfo from './pages/Dap';
import DesignInfo from './pages/Design';
import AboutInfo from './pages/About';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tw-elements';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Router>
    <Header />
    <Routes>
      <Route path="/asgv-3/" element={<Home />} />
      <Route path="/about" element={<AboutInfo />} />
    </Routes>
    <Footer />
  </Router>
  // </React.StrictMode>
);
