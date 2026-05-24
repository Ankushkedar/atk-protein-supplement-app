import React from 'react';
import { FaHeart, FaUsers, FaTrophy, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>About PRIDE SUPPLEMENTS</h1>
          <p>Your Partner in Fitness Excellence</p>
        </div>
      </div>

      <div className="container about-content">
        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            PRIDE SUPPLEMENTS was born from a passion for fitness and a commitment to providing 
            authentic, high-quality supplements to fitness enthusiasts across India. We understand 
            the challenges of finding genuine products at fair prices, and we're here to change that.
          </p>
          <p>
            Our mission is simple: to fuel your fitness journey with premium supplements from the 
            world's most trusted brands. Whether you're a beginner starting your transformation or 
            an experienced athlete pushing your limits, we have the right products for you.
          </p>
        </section>

        <section className="about-values">
          <h2>Why Choose Us</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaShieldAlt className="value-icon" />
              <h3>100% Authentic</h3>
              <p>We guarantee genuine products directly from authorized distributors</p>
            </div>
            <div className="value-card">
              <FaTrophy className="value-icon" />
              <h3>Premium Quality</h3>
              <p>Only the best brands and highest quality supplements</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Expert Support</h3>
              <p>Free consultation to help you choose the right products</p>
            </div>
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Customer First</h3>
              <p>Your satisfaction and results are our top priority</p>
            </div>
          </div>
        </section>

        <section className="about-vision">
          <h2>Our Vision</h2>
          <p>
            We envision a future where every fitness enthusiast in India has access to authentic, 
            affordable supplements. Starting with our online platform, we plan to expand to offline 
            outlets, bringing premium supplements closer to you.
          </p>
          <p>
            Join us on this journey to build a healthier, stronger India. Your transformation is 
            our pride!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
