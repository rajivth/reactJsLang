import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const routerDe = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/de">Home</Link></li>
            <li><Link to="/de/about">About</Link></li>
            <li><Link to="/de/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/de" element={<Home/>} />
          <Route path="/de/about" element={<About/>} />
          <Route path="/de/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default routerDe;
