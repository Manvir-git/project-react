import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal routing
import '../css/styl.css';
//import logo from '../images/logo.png';

const Products = () => {
  const [pumps, setPumps] = useState([]);

  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item); // Ensure the correct path adjustment
    });
    return images;
  };

  // Import images from the specified folder (relative to this file)
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

  const pumpData = [
    { name: 'V-50 feet Per Stage Borewell Submersible Pumps', image: images['a1.png'], price: 'MRP ₹79,000.00', link: '/product/a1' },
    { name: 'V-5 Stainless Steel Borewell Submersible Pumps', image: images['a2.png'], price: 'MRP ₹67,400.00', link: '/product/a2' },
    { name: 'Janta Series Borewell Submersible Pumps', image: images['a3.png'], price: 'MRP ₹66,575.00', link: '/product/a3' },
    { name: 'V-4 Stainless Steel Pumps', image: images['a4.png'], price: 'MRP ₹61,300.00', link: '/product/a4' },
    { name: 'V-6 Water Filled Borewell Submersible Pumps', image: images['a5.png'], price: 'MRP ₹45,300.00', link: '/product/a5' },
    { name: 'V-5 Water filled Motor', image: images['v6.png'], price: 'MRP ₹36,925.00', link: '/product/a6' },
    { name: 'V-4 Water filled motor Submersible Pumps', image: images['v7.png'], price: 'MRP ₹35,200.00', link: '/product/a7' },
    { name: 'Horizontal Openwell Submersible Pumps (1.5 Hp)', image: images['v8.png'], price: 'MRP ₹21,600.00', link: '/product/a8' },
  ];

  useEffect(() => {
    setPumps(pumpData);
  },[]);

  return (
    <div>
      {/* Main Content Section */}
      <div className="main-content" id="mainContent">
        <div className="product-info">
          <div className="container">
            <h2>Agricultural Products</h2>
            <p>We offer a wide range of Agricultural submersible pumps to suit your needs.</p>
          </div>
        </div>

        {/* Pump Gallery */}
        <div className="pump-gallery" id="pumpGallery">
          {pumps.map((pump, index) => (
            <div key={index} className="pump-item">
              <img src={pump.image} alt={pump.name} />
              <div className="pump-info">
                <p className="pump-name">{pump.name}</p>
                <p className="pump-price">{pump.price}</p>
                <Link to={`/pumpDetail/${pump.id}`} className="read-more-btn">Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
