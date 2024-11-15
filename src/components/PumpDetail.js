import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/read.css'; 
import { pumps } from '../data/pumps'; // Ensure this path is correct

const PumpDetail = () => {
    const { pumpId } = useParams(); // Extract the pumpId from the URL
    const navigate = useNavigate();

    // Ensure pumpId is valid by finding the corresponding pump
    const pump = pumps.find(p => p.id === pumpId);

    if (!pump) {
        // If no pump found, show an error message
        return <div>Pump not found. Please go back to the <a href="/products">products page</a>.</div>;
    }

    // Create an array of pump IDs in the order they appear
    const pumpIds = pumps.map(p => p.id);

    // Find the index of the current pump
    const currentIndex = pumpIds.indexOf(pumpId);

    // Determine the previous and next pump IDs (circular navigation)
    const prevPump = pumpIds[(currentIndex - 1 + pumpIds.length) % pumpIds.length]; 
    const nextPump = pumpIds[(currentIndex + 1) % pumpIds.length];

    // Function to navigate to a specific pump detail
    const handleNavigation = (id) => {
        navigate(`/pumpDetail/${id}`);
    };

    return (
        <div className="body">

            {/* Product Description */}
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
                </div>
            </div>

            {/* Image for right view of the pump */}
            <div className="chart">
                <img src={pump.rightImage} alt="Right view of pump" />
            </div>

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
                <button 
                    className="nav-btn left-btn"
                    onClick={() => handleNavigation(prevPump)}
                >
                    &#8592; {/* Left Arrow (back) */}
                </button>
                <button 
                    className="nav-btn right-btn"
                    onClick={() => handleNavigation(nextPump)}
                >
                    &#8594; {/* Right Arrow (forward) */}
                </button>
            </div>
        </div>
    );
};

export default PumpDetail;
