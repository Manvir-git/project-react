import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import house from '../images/house.png';
import building from '../images/building.png';
import pump2 from '../images/pump2.png';
import desktop1 from '../images/Pump3.jpg';
import desktop2 from '../images/newbg.jpg';
import mobile1 from '../images/mobile1.jpeg';
import mobile2 from '../images/mobile2.jpeg'
import '../css/styles.css';

function Home() {
  const [residentialPumps, setResidentialPumps] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const images = [bg2, bg4];
  const navigate = useNavigate();
  const [inProgressSites, setInProgressSites] = useState(0);
  const [pumpsSold, setPumpsSold] = useState(0);
   // const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
  
    // Different images for mobile & desktop
    const desktopImages = [desktop1,desktop2];
    const mobileImages = [mobile1,mobile2];
  
    const images = isMobile ? mobileImages : desktopImages;

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
      const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
      if (isVisible) {
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
    // Function to check screen size on resize
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Run once immediately on mount
    handleScroll();
    
    // Then add scroll listener
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
      { threshold: 0.4 } // Reduced threshold to 10%
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
      {/* Main Image Section
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
      </div> */}

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
              <h6>In-Progress Sites</h6>
            </div>
            <div className="side-section">
              <h1>{pumpsSold.toLocaleString()}+</h1>
              <h6>Pumps Sold</h6>
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
  <div className="product-header">
    <h6>OUR PRODUCTS</h6>
    <h2>We Offer a Range of Products to Meet All Types of Needs</h2>
  </div>
  <div className="product-container">
  <div className="product-card">
      <img src={house} alt="Residential" />
      <h5>RESIDENTIAL</h5>
      <p>
        The size of the residential water pump required for a house depends on factors
        such as the water flow rate needed and the pressure requirements. Assessing the
        number of fixtures and appliances the pump will supply will help determine the
        appropriate size.
      </p>
    </div>


    <div className="product-card">
      <img src={building} alt="Commercial" />
      <h5>COMMERCIAL</h5>
      <p>
        Elevate your agricultural irrigation with Crompton's superior water pumps. Our
        pumps combine reliability and cutting-edge technology to ensure optimal water
        supply for all farming and agricultural pumping needs.
      </p>
    </div>
    
  </div>
</div>

      </div>
  );
}

export default Home;