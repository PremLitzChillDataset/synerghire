import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Synerghire</div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/jobs">New Jobs</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  </nav>
);

export default Navbar;
