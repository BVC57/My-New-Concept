import React from 'react';
import '../componets/Contact.css';
import image1 from '../projectimages/map.jpg';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="map-section">
        {/* Placeholder for the map. Replace this with your map component. */}
        <div className="map-placeholder">
          <img src={image1} alt="Gallery 1" />
        </div>
      </div>
      <div className="form-section">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="10" required></textarea>
            <br></br>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact