import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import prod from '../images/prod.png';
import pump2 from '../images/pump2.png';
import bg2 from '../images/Pump3.jpg';
import bg3 from '../images/Pump2.jpg';
import '../css/styles.css';

function Home() {
  const [residentialPumps, setResidentialPumps] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [bg2, bg3];
  const navigate = useNavigate();

  // State for animated numbers
  const [inProgressSites, setInProgressSites] = useState(0);
  const [pumpsSold, setPumpsSold] = useState(0);

  // Fetch pumps data from the backend
  useEffect(() => {
    axios
      .get('https://pumpsbackend.onrender.com/api/pumps')
      .then(response => setResidentialPumps(response.data))
      .catch(error => console.error('Error fetching residential pumps:', error));
  }, []);

  // Automatic sliding for the main image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll animations
  const handleScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('slide-in');
      }
    });
  };

  useEffect(() => {
    const topImageSection = document.querySelector('.image-section1');
    if (topImageSection) {
      topImageSection.classList.add('slide-in');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Number animation logic
  useEffect(() => {
    const animateNumbers = (start, end, duration, setter) => {
      const range = end - start;
      const increment = Math.max(1, range / (duration / 30));
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setter(Math.round(current));
      }, 30);
    };

    const animateToTen = (duration, setter) => {
      const stepDuration = duration / 10;
      let current = 0;

      const timer = setInterval(() => {
        current += 1;
        setter(current);
        if (current >= 10) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sharedDuration = 2000;
            animateToTen(sharedDuration, setInProgressSites);
            animateNumbers(0, 12000, sharedDuration, setPumpsSold);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const target = document.querySelector('.container2');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, [setInProgressSites, setPumpsSold]);

  const handleImageClick = (pumpId) => {
    navigate(`/pumpDetail/${pumpId}`);
  };

  return (
    <div className="main-content">
      {/* Main Image Section */}
      <div className="image-section1 animate-on-scroll">
        <div className="slider">
          <div
            className="slider-images"
            style={{
              display: "flex",
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 1s ease-in-out",
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="slider-image"
                style={{ width: "100%", flexShrink: 0 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Introduction */}
      <div className="b animate-on-scroll">
        <div className="welcome animate-on-scroll">Welcome to Our Store</div>
        <p className="b2">
          Explore our range of Agricultural submersible pumps <br />
          The product range covers a wide application such as agriculture,
          water supply to townships, industries, sewage, and drainage.
        </p>
        <Link to="/about" className="btn">Read more</Link>
      </div>

      {/* Residential Pumps Section */}
      <h2 className="section-title animate-on-scroll">Residential Submersible Pumps</h2>
      <div className="pump-gallery">
        {residentialPumps.length > 0 ? (
          residentialPumps.map((pump) => (
            <div 
              key={pump.id} 
              className="pump-item animate-on-scroll"
              onClick={() => handleImageClick(pump.id)}
              style={{ cursor: 'pointer' }}
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
                <p className="pump-price">{pump.price}</p>
                <Link to={`/pumpDetail/${pump.id}`} className="read-more-btn">Read more</Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading Residential Pumps...</p>
        )}
      </div>

      {/* About Section */}
      <div className="container2 animate-on-scroll">
        <div className="content">
          <div className="text-center">
            <h3>About our company</h3>
            <h2>We provide professional solutions to choose a suitable pump</h2>
            <p>
              The product range covers a wide application<br />
              such as domestic, agriculture, water supply to <br />
              townships, industries, sewage, and drainage.
            </p>
          </div>
          <div className="side-sections">
            <div className="side-section">
              <h1>{inProgressSites}</h1>
              <p>In-Progress Sites</p>
            </div>
            <div className="side-section">
              <h1>{pumpsSold.toLocaleString()}+</h1>
              <p>Pumps Sold</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={pump2} alt="Pump Showcase" />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="new animate-on-scroll">
        <h5>We Believe Every Client Is a<br />Valuable Long-Term Partner</h5>
      </div>
      <div className="prod animate-on-scroll">
        <img src={prod} alt="Product Display" />
      </div>
    </div>
  );
}

export default Home;