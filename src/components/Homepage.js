// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// Import images
import logo from './images/logo.png'
import v4Image from './images/v4.png';
import v42Image from './images/v42.png';
import v3Image from './images/v3.png';
import v32Image from './images/v32.png';
import v40Image from './images/v40.png';
import owImage from './images/ow.png';
import ow1Image from './images/OW1.png';
import prod from './images/prod.png';
import pump2 from './images/pump2.png';

function HomePage() {
  // Pump data
  const pumps = [
    { name: 'Rust free V4- Stainless Steel Pumps', image: v4Image, price: 'MRP ₹16,975.00', route: '/pump/v4' },
    { name: 'Rust free V4- Stainless Steel Pumps', image: v42Image, price: 'MRP ₹16,250.00', route: '/pump/v42' },
    { name: 'V3-Oil Filled Motor', image: v3Image, price: 'MRP ₹15,975.00', route: '/pump/v3' },
    { name: 'V3- Water Filled Borewell Submersible Motor', image: v32Image, price: 'MRP ₹13,800.00', route: '/pump/v32' },
    { name: 'V4- Oil Filled Motor', image: v40Image, price: 'MRP ₹12,525.00', route: '/pump/v40' },
    { name: 'OW- Water Filled Motor', image: owImage, price: 'MRP ₹9,575.00', route: '/pump/ow' },
    { name: 'OW – Dry Type Openwell Submersible Motor', image: ow1Image, price: 'MRP ₹15,500.00', route: '/pump/ow1' },
];


  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar" id="navbar">
        <div className="container">
          <div className="navbar-left">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" />
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

      {/* Header Section */}
      <header className="header">
        <div className="container"></div>
      </header>

      <div className="b">
        <center>
          <br />
          <p className="b2">
            Explore our range of Agricultural submersible pumps <br /> 
            The product range covers a wide application such as agriculture, 
            water supply to townships, Industries, sewage and drainage.
          </p>
          <br />
          <br />
          <Link to="/products" className="btn">View Products</Link>
        </center>
        <br />
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <h2 className="section-title">Residential Submersible Pump </h2>
        
      {/* Pump Gallery */}
      <div className="pump-gallery" id="pumpGallery">
          {pumps.map((pump) => (
            <div key={pump.id} className="pump-item">
              <img src={pump.image} alt={pump.name} />
              <div className="pump-info">
                <p className="pump-name">{pump.name}</p>
                <p className="pump-price">{pump.price}</p>
                <Link to={pump.route}>
                  <button className="read-more-btn">Read more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="container2">
          <div className="content">
            <center>
              <h3 style={{marginRight:'70px',fontSize:'20px'}}>About our company</h3>
              <h2 style={{textAlign:'center'}}>We provide professional solutions to choose a suitable pump</h2>
              <p style={{marginRight:'55px'}}>
                The product range covers a wide application<br /> 
                such as domestic, agriculture, water supply to <br />
                townships, Industries, sewage and drainage.
              </p>
              </center>
            <div className="side-sections">
              <div className="side-section">
                <h1>12</h1>
                <p style={{marginLeft:'70px'}}>In-Progress Sites.</p>
              </div>
              <div className="side-section">
                <h1>12k+</h1>
                <p style={{marginLeft:'90px'}}>pumps sold.</p>
              </div>
            </div>
          </div>
          <div class="image-container">
          <img src={pump2} alt='img' />
                </div>
        </div>

        <div className="new">
          <h5>We Believe Every Client Is a<br /> Valuable Long-Term Partner</h5>
        </div>
        <div className="prod">
          <img src={prod} alt="Product" />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="contact-info">
          <div className="contact-section">
            <h2>Partner Connect</h2>
            <p>If you have any partnership inquiries, please contact us:</p>
            <p>Phone number - 9056662843 </p>
          </div>
          <div className="contact-section">
            <h2>Registered Office</h2>
            <p>
              Lally trading company <br />
              Vpo pathlawa , Teh banga , distt - S.B.S nagar<br />
              office number 105, Punjab, India
            </p>
            <p>
              <a href="#">Find Location</a><br />
              +91 9815182321
            </p>
          </div>
          <div className="contact-section">
            <h2>Customer Care</h2>
            <p>If you have any issues with our products, please contact our customer care:</p>
            <ul>
              <li>
                1800 419 0505 (Toll-free)<br />
                Available between 09:00 am to 07:00 pm from Monday to Saturday
              </li>
            </ul>
          </div>
        </div>
        <p>&copy; 2024 Lally Trading Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;