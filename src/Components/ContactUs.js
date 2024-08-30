import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './contact.css'; 
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-item">
          <FaMapMarkerAlt size={24} className="contact-icon" />
          <h2>Address</h2>
          <p>Moidhali Pathar, Domal Road, Morigaon, Assam. 782105</p>
        </div>
        <div className="contact-item">
          <FaPhoneAlt size={24} className="contact-icon" />
          <h2>Call Us</h2>
          <p><a href="tel:+918822686715">+91-8822686715</a></p>
          <p><a href="tel:+919435201000">+91-9435201000</a></p>
        </div>
        <div className="contact-item">
          <FaEnvelope size={24} className="contact-icon" />
          <h2>Email Us</h2>
          <p><a href="mailto:sultanhospital2017@gmail.com">sultanhospital2017@gmail.com</a></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
