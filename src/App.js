import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Product from './pages/Product';


function App() {
 
 return (
    <Router>
      <div className="App">
        <Navbar />
      
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
         <Route path="/contact" element={<Contact />} />
            {/* <Route path="/product" element={<ProductPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
          <Route path="/news" element={<News />} />
          <Route path="/testReport" element={<TestReport />} />
          <Route path="/certificates" element={<Certificates />} />
         
          <Route path="/catalogues" element={<Catalogues />} />
          <Route path="/established" element={<Established />} />
                    <Route path="/dealer" element={<DealerPage />} />*/}
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
