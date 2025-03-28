import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import './App.css'
import About from './Component/About';
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Prevention from "./Component/Prevention";
import Certificate from "./Component/Certificate";
import Consult from "./Component/Consult";
import Scanner from "./Component/Scanner";
function App() {
 
 
  return (
    <>
  
    <Router>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src="logoweb.png" className="logoweb"/>
            </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/prevention">Prevention</Link></li>
              <li><Link to="/skin-check">Skin Check</Link></li>
              
              <li><Link to="/Consult">Consult</Link></li>
            </ul>
          </nav>
        </div>
       </div>
       
        {/* Routes for Different Pages */}
        <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prevention" element={<Prevention/>} />
          <Route path="/skin-check" element={<Scanner/>} />
                 
          <Route path="/Consult" element={<Consult/>} />


        </Routes>
        </div>
    
        </Router>

        
  </>
  
  );
};

export default App
