import React from 'react';
import { Link } from 'react-router-dom';
import v4Image from '../images/v4.png';
import v42Image from '../images/v42.png';
import v3Image from '../images/v3.png';
import v32Image from '../images/v32.png';
import v40Image from '../images/v40.png';
import owImage from '../images/ow.png';
import ow1Image from '../images/OW1.png';
import prod from '../images/prod.png';
import pump2 from '../images/pump2.png';
import '../css/styles.css';

function Home() {
  const pumps = [
    { id:'v4',name: 'Rust free V4- Stainless Steel Pumps', image: v4Image, price: 'MRP ₹16,975.00' },
    { id:'v2',name: 'Rust free V4- Stainless Steel Pumps', image: v42Image, price: 'MRP ₹16,250.00' },
    { id:'v3',name: 'V3-Oil Filled Motor', image: v3Image, price: 'MRP ₹15,975.00',},
    { id:'v3.',name: 'V3- Water Filled Borewell Submersible Motor', image: v32Image, price: 'MRP ₹13,800.00', },
    { id:'v4-oil',name: 'V4- Oil Filled Motor', image: v40Image, price: 'MRP ₹12,525.00', },
    { id:'v6',name: 'OW- Water Filled Motor', image: owImage, price: 'MRP ₹9,575.00',},
    { id:'v7',name: 'OW – Dry Type Openwell Submersible Motor', image: ow1Image, price: 'MRP ₹15,500.00', },
  ];

  return (
    <div className="main-content">
      <div className="image-section">
        {/* Optional: Add any overlay text here */}
        <h2 style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        </h2>
      </div>

      <div className="b">
        <center>
          <p className="b2">
            Explore our range of Agricultural submersible pumps <br />
            The product range covers a wide application such as agriculture,
            water supply to townships, Industries, sewage and drainage.
          </p>
          <Link to="/products" className="btn">View Products</Link>
        </center>
      </div>

      <h2 className="section-title">Residential Submersible Pump</h2>
      <div className="pump-gallery" id="pumpGallery">
        {pumps.map((pump) => (
          <div key={pump.name} className="pump-item">
            <img src={pump.image} alt={pump.name} />
            <div className="pump-info">
              <p className="pump-name">{pump.name}</p>
              <p className="pump-price">{pump.price}</p>
              <Link to={`/pumpDetail/${pump.id}`} className="read-more-btn">Read more</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="container2">
        <div className="content">
          <center>
            <h3 style={{ marginRight: '70px', fontSize: '20px' }}>About our company</h3>
            <h2 style={{ textAlign: 'center' }}>We provide professional solutions to choose a suitable pump</h2>
            <p style={{ marginRight: '55px' }}>
              The product range covers a wide application<br />
              such as domestic, agriculture, water supply to <br />
              townships, Industries, sewage and drainage.
            </p>
          </center>
          <div className="side-sections">
            <div className="side-section">
              <h1>12</h1>
              <p style={{ marginLeft: '70px' }}>In-Progress Sites.</p>
            </div>
            <div className="side-section">
              <h1>12k+</h1>
              <p style={{ marginLeft: '90px' }}>pumps sold.</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={pump2} alt="Pump Showcase" />
        </div>
      </div>

      <div className="new">
        <h5>We Believe Every Client Is a<br />Valuable Long-Term Partner</h5>
      </div>
      <div className="prod">
        <img src={prod} alt="Product Display" />
      </div>
    </div>
  );
}

export default Home;
