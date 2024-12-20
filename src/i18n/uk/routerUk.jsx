import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const routerUk = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/uk">Home</Link></li>
            <li><Link to="/uk/about">About</Link></li>
            <li><Link to="/uk/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/uk" element={<Home/>} />
          <Route path="/uk/about" element={<About/>} />
          <Route path="/uk/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default routerUk;
