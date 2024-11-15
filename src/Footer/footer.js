import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../css/styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="contact-section">
          <h2>Partner Connect</h2>
          <p>If you have any partnership inquiries, please contact us:</p>
          <p>Phone number - 9056662843 </p>
        </div>
        <div className="contact-section">
          <h2>Registered Office</h2>
          <p>
            Lally Trading Company <br />
            Vpo Pathlawa, Teh Banga, Distt - S.B.S Nagar <br />
            Office number 105, Punjab, India
          </p>
          <p>
            <Link to="#">Find Location</Link><br />
            +91 9815182321
          </p>
        </div>
        <div className="contact-section">
          <h2>Customer Care</h2>
          <p>If you have any issues with our products, please contact our customer care:</p>
          <ul>
            <li>
              1800 419 0505 (Toll-free)<br />
              Available between 09:00 am to 07:00 pm from Monday to Saturday
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2024 Lally Trading Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
