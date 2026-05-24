import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help you achieve your fitness goals</p>
        </div>
      </div>

      <div className="container contact-content">
        <div className="contact-info-section">
          <h2>Get In Touch</h2>
          <p>Have questions? We'd love to hear from you.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>kedarankush075@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 8379803650</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>India</p>
              </div>
            </div>

            <div className="contact-item">
              <FaInstagram className="contact-icon" />
              <div>
                <h3>Instagram</h3>
                <p>@ankushkedar_01</p>
              </div>
            </div>

            <div className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <div>
                <h3>WhatsApp</h3>
                <p>+91 8379803650</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Send Us a Message</h2>
            
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
