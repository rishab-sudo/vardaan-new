import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Dealer from "./pages/Dealer";
import VardaanSS from "./pages/VardaanSS";
import VardaanMS from "./pages/VardaanMS";
import VardaanBasic from "./pages/VardaanBasic";

import Preloader from "./components/Preloader";

function App() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("siteLoaded");

    if (!alreadyLoaded) {
      setShowPreloader(true);
    }
  }, []);

  const handlePreloaderFinish = () => {
    sessionStorage.setItem("siteLoaded", "true");
    setShowPreloader(false);
  };

  return (
    <Router>
      {showPreloader && <Preloader onFinish={handlePreloaderFinish} />}

      {!showPreloader && (
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/vardaanMS" element={<VardaanMS />} />
            <Route path="/vardaanSS" element={<VardaanSS />} />
            <Route path="/vardaanBasic" element={<VardaanBasic />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dealer" element={<Dealer />} />
          </Routes>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
