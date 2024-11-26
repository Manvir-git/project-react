import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../css/Header.css';

function Header() {
  const [opacity, setOpacity] = useState(1); // Initial opacity set to 1 (fully opaque)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get the current scroll position
      const newOpacity = scrollY > 20 ? 0.5 : 1; // Set opacity to 50% only after 20px scroll
      setOpacity(newOpacity); // Update the opacity state
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <nav className="navbar" id="navbar" style={{ opacity: opacity }}>
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
