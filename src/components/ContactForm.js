import React, { useState } from 'react';
import axios from 'axios';
import '../css/ContactForm.css';  // Import the external CSS file

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        city: '',
        pincode: '',
        country: '',
        description: '',
        productCode: '',
        productName: '',
        title: '',
        company: '',
        landline: '',
        state: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // State to control popup visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('https://pumpsbackend.onrender.com/api/enqueries', formData);
            if (response.status === 200) {
                setIsSubmitted(true); // Set state to show the "Thank you" message
                setTimeout(() => {
                    window.location.reload(); // Refresh the page after a few seconds
                }, 3000); // Delay before the refresh
            }
        } catch (error) {
            console.log('There was an error submitting the enquiry!', error);
        }
    };
    
    return (
        <div>
            {/* Show the popup when the enquiry is submitted */}
            {isSubmitted && (
                <div className="popup show">
                    <div className="popup-content">
                        <h3>We have received your enquiry</h3>
                        <p>Our team will contact you soon</p>
                        <h1>Thank you!</h1>
                    </div>
                </div>
            )}
                {/* Form goes here */}

            <form onSubmit={handleSubmit} className="form">
                <fieldset className="main fieldset">
                    <legend className="legend">Contact Information</legend>
                    <label htmlFor="email">Email id:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                    <label htmlFor="mobile">Mobile No:</label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                    <label htmlFor="pincode">Pin Code:</label>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="textarea"
                    ></textarea>
                </fieldset>

                <fieldset className="prod fieldset">
                    <legend className="legend">Product Information</legend>
                    <label htmlFor="productCode">Product Code:</label>
                    <input
                        type="text"
                        id="productCode"
                        name="productCode"
                        value={formData.productCode}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </fieldset>
                <fieldset className="fieldset">
                    <label htmlFor="title">Title (Mr./Ms.):</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                    <label htmlFor="company">Company Name:</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                    <label htmlFor="landline">Land Line No:</label>
                    <input
                        type="text"
                        id="landline"
                        name="landline"
                        value={formData.landline}
                        onChange={handleChange}
                        className="input"
                    />
                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                    <br />
                    <br />
                    <center>
                        <button type="submit" className="submitButton">
                            Send Enquiry
                        </button>
                    </center>
                </fieldset>
            </form>
        </div>
    );
};

export default ContactForm;
