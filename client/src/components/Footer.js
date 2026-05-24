import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>PRIDE SUPPLEMENTS</h3>
          <p>Your trusted partner in fitness journey. Premium quality supplements for champions.</p>
          <div className="social-links">
            <a href="https://instagram.com/ankushkedar_01" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://wa.me/918379803650" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/products?category=protein">Protein Powder</Link></li>
            <li><Link to="/products?category=mass-gainer">Mass Gainer</Link></li>
            <li><Link to="/products?category=creatine">Creatine</Link></li>
            <li><Link to="/products?category=supplements">Supplements</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p><FaEnvelope /> kedarankush075@gmail.com</p>
            <p><FaPhone /> +91 8379803650</p>
            <p><FaMapMarkerAlt /> India</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 PRIDE SUPPLEMENTS. All rights reserved. Built with 💪 for fitness enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
