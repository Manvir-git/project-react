import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Partner Connect Section */}
        <div className="contact-section">
          <h2>
            <i className="fas fa-handshake"></i> Partner Connect
          </h2>
          <p>If you have any partnership inquiries, please contact us:</p>
          <p>
            <i className="fas fa-phone"></i> Phone: <a href="tel:9056662843">9056662843</a>
          </p>
        </div>

        {/* Registered Office Section */}
        <div className="contact-section">
          <h2>
            <i className="fas fa-map-marker-alt"></i> Registered Office
          </h2>
          <p>
            Lally Trading Company <br />
            Vpo Pathlawa, Teh Banga, Distt - Nawanshahr <br />
            Punjab, India
          </p>
          <p>
            <Link
              to="https://www.google.com/maps/place/Lally+trading+company/@31.244383,76.0219056,17z/data=!4m10!1m2!2m1!1sLally+Trading+Company,+Vpo+Pathlawa,+Teh+Banga,+Distt+Nawanshahr!3m6!1s0x391aeb002157e179:0xb984368ad012c285!8m2!3d31.244383!4d76.0244805!15sCkBMYWxseSBUcmFkaW5nIENvbXBhbnksIFZwbyBQYXRobGF3YSwgVGVoIEJhbmdhLCBEaXN0dCBOYXdhbnNoYWhykgEJd2FyZWhvdXNl4AEA!16s%2Fg%2F11wn5tzks2?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="map-link"
            >
              <i className="fas fa-map"></i> Find Location
            </Link>
            <br />
            <i className="fas fa-phone"></i> <a href="tel:+919815182321">+91 9815182321</a>
          </p>
        </div>

        {/* Customer Care Section */}
        <div className="contact-section">
          <h2>
            <i className="fas fa-headset"></i> Customer Care
          </h2>
          <p>If you have any issues with our products, please contact our customer care:</p>
          <ul>
            <li>
              <i className="fas fa-phone"></i> 1800 419 0505 (Toll-free)<br />
              Available: Mon-Sat, 9:00 AM - 7:00 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="Lally Trading Company Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3411.145941722799!2d76.0219056!3d31.244383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391aeb002157e179%3A0xb984368ad012c285!2sLally%20trading%20company!5e0!3m2!1sen!2sin!4v1731864684256!5m2!1sen!2sin" 
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Lally Trading Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
