import React, { useEffect, useState } from 'react';
import './styl.css'; // Make sure to adjust the path if necessary
import logo from './images/logo.png'
const Products = () => {
    const [pumps, setPumps] = useState([]);

    // Function to import all images from the images folder
    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    };

    // Import images from the specified folder
    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

    // Sample pump data (replace with your own pump information)
    const pumpData = [
        { name: 'V-50 feet Per Stage Borewell Submersible Pumps', image: images['a1.png'], price: 'MRP ₹79,000.00', link: 'a1.html' },
        { name: 'V-5 Stainless Steel Borewell Submersible Pumps', image: images['a2.png'], price: 'MRP ₹67,400.00', link: 'a2.html' },
        { name: 'Janta Series Borewell Submersible Pumps', image: images['a3.png'], price: 'MRP ₹66,575.00', link: 'a3.html' },
        { name: 'V-4 Stainless Steel Pumps', image: images['a4.png'], price: 'MRP ₹61,300.00', link: 'a4.html' },
        { name: 'V-6 Water Filled Borewell Submersible Pumps', image: images['a5.png'], price: 'MRP ₹45,300.00', link: 'a5.html' },
        { name: 'V-5 Water filled Motor', image: images['v6.png'], price: 'MRP ₹36,925.00', link: 'a6.html' },
        { name: 'V-4 Water filled motor Submersible Pumps', image: images['v7.png'], price: 'MRP ₹35,200.00', link: 'a7.html' },
        { name: 'Horizontal Openwell Submersible Pumps (1.5 Hp)', image: images['v8.png'], price: 'MRP ₹21,600.00', link: 'a8.html' },
        // Add more pumps as needed
    ];
    const handleReadMore = (link) => {
        window.open(link, '_blank');
      };

    useEffect(() => {
        setPumps(pumpData); // Set pump data when component mounts
    }, []);
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-left">
                        <a href="/Homepage" className="logo">
                            <img src={logo} alt="Lally Trading Company Logo" />
                            <span className="company-name">Lally Trading Company</span>
                        </a>
                    </div>
                    <div className="navbar-right">
                        <ul className="nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="aboutus.html">About Us</a></li>
                            <li><a href="contactus.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Content Section */}
            <div className="main-content" id="mainContent">
                {/* Product Information Section */}
                <div className="product-info">
                    <div className="container">
                        <h2>Agricultural Products</h2>
                        <p>We offer a wide range of Agricultural submersible pumps to suit your needs.</p>

                    </div>
                </div>
                <br />
                        {/* Pump Gallery */}
        <div className="pump-gallery" id="pumpGallery">
          {pumps.map((pump, index) => (
            <div key={index} className="pump-item">
              <img src={pump.image} alt={pump.name} />
              <div className="pump-info">
                <p className="pump-name">{pump.name}</p>
                <p className="pump-price">{pump.price}</p>
                <button 
                  className="read-more-btn"
                  onClick={() => handleReadMore(pump.link)}>
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <div className="contact-info">
                    <div className="contact-section">
                        <h3>Partner Connect</h3>
                        <p>If you have any partnership inquiries, please contact us:</p>
                        <p>Phone number - 9056662843</p>
                    </div>
                    <div className="contact-section">
                        <h3>Registered Office</h3>
                        <p>
                            Lally Trading Company <br />
                            Vpo Pathlawa, Teh Banga, Distt - S.B.S Nagar<br />
                            Office number 105, Punjab, India
                        </p>
                        <p>
                            <a href="#">Find Location</a><br />
                            +91 9815182321
                        </p>
                    </div>
                    <div className="contact-section">
                        <h3>Customer Care</h3>
                        <p>If you have any issues with our products, please contact our customer care:</p>
                        <ul>
                            <li>1800 419 0505 (Toll-free)<br />Available between 09:00 am to 07:00 pm from Monday to Saturday</li>
                        </ul>
                    </div>
                </div>
                <p>&copy; 2024 Lally Trading Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Products;