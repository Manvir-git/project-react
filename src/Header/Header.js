import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import '../css/Header.css';

function Header() {
  const location = useLocation();

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
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={location.pathname === '/products' ? 'active' : ''}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === '/about' ? 'active' : ''}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
