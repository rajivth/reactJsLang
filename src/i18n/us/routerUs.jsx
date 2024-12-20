import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const routerUs = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/us">Home</Link></li>
            <li><Link to="/us/about">About</Link></li>
            <li><Link to="/us/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/us" element={<Home/>} />
          <Route path="/us/about" element={<About/>} />
          <Route path="/us/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default routerUs
