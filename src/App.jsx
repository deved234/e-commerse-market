import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import { ToastProvider } from './contexts/ToastContext';
import PerformanceMonitor from './components/PerformanceMonitor';
import SaintGeorgeHeader from './components/SaintGeorgeHeader';
import SaintGeorgeFooter from './components/SaintGeorgeFooter';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import Contact from './pages/Contact';
import BestSellers from './pages/BestSellers';
import Offers from './pages/Offers';
import Suggestions from './pages/Suggestions';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ToastProvider>
          <PerformanceMonitor />
          <Router basename="/e-commerse-market">
          <div className="App">
            <SaintGeorgeHeader />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/category/:slug" element={<Category />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bestsellers" element={<BestSellers />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/suggestions" element={<Suggestions />} />
              </Routes>
            </main>
            <SaintGeorgeFooter />
          </div>
        </Router>
        </ToastProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;