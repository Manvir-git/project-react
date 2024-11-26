// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import '../css/read.css'; // Import custom CSS for styling

// const PumpDetail = () => {
//     const { pumpId } = useParams(); // Extract pumpId from URL
//     const navigate = useNavigate();

//     const [pump, setPump] = useState(null); // State to hold pump data
//     const [loading, setLoading] = useState(true); // Loading state
//     const [error, setError] = useState(null); // Error state
//     const [pumpIds, setPumpIds] = useState([]); // State for list of pump IDs

//     // Fetch agricultural pump details based on the pumpId
//     useEffect(() => {
//         const fetchPumpDetails = async () => {
//             try {
//                 // Fetch pump data
//                 const response = await fetch(`http://localhost:5001/api/agpumps/${pumpId}`);
                
//                 if (!response.ok) {
//                     throw new Error('Pump not found');
//                 }

//                 const data = await response.json();
//                 console.log('Fetched pump data:', data); // Log the fetched data

//                 // Access the agPump object from the response and set it to the state
//                 if (data.success && data.agPump) {
//                     setPump(data.agPump); // Set the pump data from the API
//                     // Optionally, if you want to dynamically fetch all pump IDs
//                     // setPumpIds([...]); // You can fetch a list of pump IDs here.
//                 } else {
//                     throw new Error('Pump not found');
//                 }
//                 setLoading(false); // Set loading to false once data is fetched
//             } catch (err) {
//                 setError(err.message); // Handle error if data fetch fails
//                 setLoading(false);
//             }
//         };

//         fetchPumpDetails(); // Fetch the pump details

//         // Fetch all pump IDs when the page loads (can be used for navigation)
//         const fetchPumpIds = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5001/api/agpumps`);
//                 const data = await response.json();
//                 if (data.success && data.agPumps) {
//                     const ids = data.agPumps.map(pump => pump.id); // Assuming you have `id` field for each pump
//                     setPumpIds(ids);
//                 }
//             } catch (err) {
//                 console.error("Error fetching pump IDs:", err);
//             }
//         };

//         fetchPumpIds();
//     }, [pumpId]); // Re-run the effect when pumpId changes

//     if (loading) {
//         return <div>Loading...</div>; // Show loading message while fetching data
//     }

//     if (error) {
//         return <div>{error}. Please go back to the <a href="/agpumps">agricultural pumps page</a>.</div>; // Show error message if pump not found
//     }

//     if (!pump) {
//         return <div>Pump not found. Please go back to the <a href="/agpumps">agricultural pumps page</a>.</div>; // Fallback if no pump data
//     }

//     // Find the index of the current pump
//     const currentIndex = pumpIds.indexOf(pumpId);

//     // Determine the previous and next pump IDs (circular navigation)
//     const prevPump = pumpIds[(currentIndex - 1 + pumpIds.length) % pumpIds.length];
//     const nextPump = pumpIds[(currentIndex + 1) % pumpIds.length];

//     // Function to navigate to a specific pump detail
//     const handleNavigation = (id) => {
//         navigate(`/agpumpDetail/${id}`);
//     };

//     return (
//         <div className="body">
//             {/* Product Description */}
//             <div className="product-description">
//                 {/* Ensure image URL is correct */}
//                 <img 
//                     src={`http://localhost:5001/uploads/${pump.image}`} 
//                     className="product-image" 
//                     alt={pump.name} 
//                 />
//                 <div>
//                     <h1>{pump.name}</h1>
//                     <p><strong>MRP:</strong> {pump.price} (Inclusive of all taxes)</p>

//                     <div className="features">
//                         <h2>Features</h2>
//                         <ul>
//                             {Array.isArray(pump.features) && pump.features.length > 0 ? (
//                                 pump.features.map((feature, index) => (
//                                     <li key={index}>{feature}</li>
//                                 ))
//                             ) : (
//                                 <li>No features available.</li> // Fallback message if features are empty or undefined
//                             )}
//                         </ul>
//                     </div>

//                     <a 
//                         href="https://lallytradingcompany.onrender.com" 
//                         className="buy-button"
//                     >
//                         Send Enquiry
//                     </a>
//                 </div>
//             </div>

//             {/* Image for right view of the pump */}
//             <div className="chart">
//                 <img 
//                     src={`http://localhost:5001/uploads/${pump.rightImage}`} 
//                     alt="Right view of pump" 
//                 />
//             </div>

//             {/* Navigation Buttons */}
//             <div className="navigation-buttons">
//                 <button 
//                     className="nav-btn left-btn"
//                     onClick={() => handleNavigation(prevPump)}
//                     disabled={pumpIds.length === 0 || currentIndex === -1}
//                 >
//                     &#8592; {/* Left Arrow (back) */}
//                 </button>
//                 <button 
//                     className="nav-btn right-btn"
//                     onClick={() => handleNavigation(nextPump)}
//                     disabled={pumpIds.length === 0 || currentIndex === -1}
//                 >
//                     &#8594; {/* Right Arrow (forward) */}
//                 </button>
//             </div>
//         </div>
//     );
// };



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import '../css/read.css'; // Add custom CSS file for styling

const PumpDetail = () => {
    const { pumpId } = useParams();
    const navigate = useNavigate();
    const [pump, setPump] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pumps, setPumps] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/agpumps')
            .then(response => setPumps(response.data))
            .catch(error => console.error('Error fetching agricultural pumps:', error));
    }, []);

    useEffect(() => {
        const fetchPumpDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/agpumps/${pumpId}`);
                if (!response.ok) {
                    throw new Error('Agricultural pump not found');
                }
                const data = await response.json();
                setPump(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchPumpDetails();
    }, [pumpId]);

    if (loading) return (
        <div className="loading-container">
            <div className="loading-message">Loading...</div>
        </div>
    );

    if (error) return (
        <div className="error-container">
            <div>{error}. Please go back to the <a href="/products" className="link">Products page</a></div>
        </div>
    );

    if (!pump) return (
        <div className="error-container">
            <div>Agricultural pump not found. Please go back to the <a href="/products" className="link">Products page</a></div>
        </div>
    );

    const pumpIds = pumps.map(pump => pump.id);
    const currentIndex = pumpIds.indexOf(pumpId);
    const prevPump = pumpIds[currentIndex - 1] || pumpIds[pumpIds.length - 1];
    const nextPump = pumpIds[currentIndex + 1] || pumpIds[0];

   const handleNavigation = (id) => {
    const sanitizedId = encodeURIComponent(id.trim());
    navigate(`/pumpDetails/${sanitizedId}`);
};

    return (
        
        <div className="body">

            {/* Product Description */}
            <h1>{pump.name}</h1>
            <div className="product-description">
                <img 
                    src={`http://localhost:5001/uploads/${pump.image}`} 
                    className="product-image" 
                    alt={pump.name} 
                />
                <div>
                    
                    <h2><strong>MRP:</strong> {pump.price} (Inclusive of all taxes)</h2>

                    <div className="features">
                        <h2>Features</h2>
                        <ul>
                            {Array.isArray(pump.features) && pump.features.length > 0 ? (
                                pump.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))
                            ) : (
                                <li>No features available.</li>
                            )}
                        </ul>
                    </div>
                    <Link to={`/Enquiry`} className="buy-button">Send Enquiry</Link>
                </div>
            </div>

            {/* Image for right view of the pump */}
            <div className="chart">
                <img 
                    src={`http://localhost:5001/uploads/${pump.rightImage}`} 
                    alt="Right view of pump" 
                />
                
            </div>

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
                <button 
                    className="nav-btn left-btn"
                    onClick={() => handleNavigation(prevPump)}
                >
                    &#8592; {/* Left Arrow */}
                </button>
                <button 
                    className="nav-btn right-btn"
                    onClick={() => handleNavigation(nextPump)}
                >
                    &#8594; {/* Right Arrow */}
                </button>
            </div>
        </div>
    );
};

export default PumpDetail;
