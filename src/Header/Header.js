import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../css/styles.css';

function Header() {
  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src={logo} alt="Lally Trading Company Logo" />
            <span className="company-name">Lally Trading Company</span>
          </Link>
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
