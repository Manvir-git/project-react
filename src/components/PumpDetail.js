import React from 'react';
import { useParams } from 'react-router-dom';
import './read.css'; // Make sure this CSS file contains the applied styles
import v4 from '../components/images/v4.png'
import v40 from '../components/images/read/v4table.png'
import logo from '../components/images/logo.png'
// Sample data for pumps
const pumps = [
    {
        id: 'v4',
        name: 'V-50 feet Per Stage Borewell Submersible Pumps',
        price: '₹79,000.00',
        features: [
            'Specially designed thrust bearing ensures highest reliability',
            'High Grade Electrical Stamping CRNGO-M47 for higher efficiency',
            'Wide voltage operation from 250 -440V'
        ],
        image: v4, // Adjust path if necessary
        rightImage:v40, // Adjust path if necessary
    }
];

const PumpDetail = () => {
    const { pumpId } = useParams();
    const pump = pumps.find(p => p.id === pumpId);

    if (!pump) {
        return <div>Pump not found</div>;
    }

    return (
        <div className="body">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-left">
                        <a href="/" className="logo">
                            <img src={logo} alt="Lally Trading Company Logo" />
                            <span className="company-name">Lally Trading Company</span>
                        </a>
                    </div>
                    <div className="navbar-right">
                        <ul className="nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="product-description">
                <img src={pump.image} className="product-image" alt={pump.name} />
                <div>
                    <h1>{pump.name}</h1>
                    <p><strong>MRP:</strong> {pump.price} (Inclusive of all taxes)</p>

                    <div className="features">
                        <h2>Features</h2>
                        <ul>
                            {pump.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <a href="https://lallytradingcompany.onrender.com" className="buy-button">Send Enquiry</a>

                    <div className="image-right">
                        <img src={pump.rightImage} alt="Right view of pump" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PumpDetail;
