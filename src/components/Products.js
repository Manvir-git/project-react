import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../css/styl.css';

const Products = () => {
  const [agriculturalPumps, setAgriculturalPumps] = useState([]);

  const navigate = useNavigate();
  const handleImageClick = (pumpId) => {
    navigate(`/pumpDetails/${pumpId}`);
  };

useEffect(() => {
  // Fetch agricultural pumps
  axios.get('https://pumpsbackend.onrender.com/api/agpumps')
    .then(response => setAgriculturalPumps(response.data))
    .catch(error => console.error('Error fetching agricultural pumps:', error));
}, []);

const handleScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
    if (isVisible) {
      el.classList.add('slide-in');
    }
  });
};

  useEffect(() => {
    const topImageSection = document.querySelector('.container1');
    if (topImageSection) {
      topImageSection.classList.add('slide-in'); // Add the animation class on load
    }
  }, []);

  // Adding scroll event listener and cleanup
  useEffect(() => {
    // Run once immediately on mount
    handleScroll();
    
    // Then add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="main-content" id="mainContent">
        <div className="product-info">
        <h2>Agricultural Products</h2>
          <div className="container1">
            <div>
  
            </div>
            <div>
              <p>We offer a wide range of Agricultural submersible pumps to suit your needs.</p>
            </div>
          </div>
        </div>


         {/* Agricultural Pumps Section */}

      <div className="pump-gallery">
        {agriculturalPumps.length > 0 ? (
          agriculturalPumps.map((pump) => (
            <div 
              key={pump.id} 
              className="pump-item animate-on-scroll"
              onClick={() => handleImageClick(pump.id)} // Redirect on click
              style={{ cursor: 'pointer' }} // Change cursor to pointer
            >
              <img
                src={`https://pumpsbackend.onrender.com/uploads/${pump.image}`}
                alt={pump.name}
                className="pump-image"
                onMouseOver={(e) => e.currentTarget.classList.add('image-3d')}
                onMouseOut={(e) => e.currentTarget.classList.remove('image-3d')}
              />
              <div className="pump-info">
                <p className="pump-name">{pump.name}</p>
                <p className="pump-price">MRP: ₹{pump.price}</p>
                <Link to={`/pumpDetail/${pump.id}`} className="read-more-btn">Read more</Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading Residential Pumps...</p>
        )}
      </div>

        </div>
      </div>

  );
};

export default Products;
