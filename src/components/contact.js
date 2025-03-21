import React, { useState } from 'react';
import styles from '../css/ContactUs.module.css'; // Import the CSS module

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Popup state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      const response = await fetch('https://pumpsbackend.onrender.com/api/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Feedback submitted successfully!');
        setIsSubmitted(true); // Show popup
        setFormData({ name: '', email: '', message: '' }); // Clear the form
        setTimeout(() => {
          setIsSubmitted(false); // Hide popup after 3 seconds
          window.location.reload(); // Refresh the page
        }, 3000);
      } else {
        setStatusMessage('Error submitting feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.contactUs}>
        <div className={styles.sectionHeader}>
          <h2>Contact Us</h2>
          <p>"Contact Us to know more about submersible pumps!"</p>
        </div>

        <div className={styles.container}>
          <div className={styles.row}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoItem}>
                <div className={styles.contactInfoIcon}>
                  <i className="fas fa-map-marker-alt"> </i> {/* Address Icon */}
                </div>
                <div className={styles.contactInfoContent}>
                  <h4>Address</h4>
                  <p>
                    <a href="https://www.google.com/maps?q=Lally+Trading+Company+Vpo+Pathlawa+Teh+Banga+Distt+-+S.B.S+Nagar" target="_blank" rel="noopener noreferrer">
                      Lally Trading Company, Vpo Pathlawa, Teh Banga, Distt - S.B.S Nagar, Office Number 105, Punjab, India.
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactInfoIcon}>
                  <i className="fas fa-phone"></i> {/* Phone Icon */}
                </div>
                <div className={styles.contactInfoContent}>
                  <h4>Call</h4>
                  <p>
                    <a href="tel:18004190505">1800 419 0505 (Toll-free)</a>
                    <br />
                    Available between 09:00 am to 07:00 pm from Monday to Saturday
                  </p>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactInfoIcon}>
                  <i className="fas fa-envelope"></i> {/* Email Icon */}
                </div>
                <div className={styles.contactInfoContent}>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:harmandersingh5510@gmail.com">harmandersingh5510@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <form id="contact-form" onSubmit={handleSubmit}>
                <h2>Feedback</h2>

                <div className={styles.inputBox}>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <span>Full Name</span>
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <span>Email</span>
                </div>

                <div className={styles.inputBox}>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                  ></textarea>
                  <span>Type your Message...</span>
                </div>

                <div className={styles.inputBox}>
                  <input type="submit" value="Send" />
                </div>

                {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
              </form>
            </div>
          </div>
        </div>

        {/* Show popup message when submitted */}
        {isSubmitted && (
          <div className="popup show">
            <div className="popup-content">
              <h3>We have received your Feedback</h3>
              
              <h1>Thank you!</h1>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ContactUs;
