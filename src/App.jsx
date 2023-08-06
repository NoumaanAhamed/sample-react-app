import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Product from "./components/Product";
import Footer from "./components/Footer";
import Services from "./components/Services";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/Services.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/product/:id" element={<Product />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
