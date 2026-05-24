import React from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaTrophy, FaShippingFast, FaCheckCircle } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Optimum Nutrition Gold Standard Whey',
      brand: 'Optimum Nutrition',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500',
      category: 'Protein Powder'
    },
    {
      id: 2,
      name: 'MuscleBlaze Mass Gainer XXL',
      brand: 'MuscleBlaze',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=500',
      category: 'Mass Gainer'
    },
    {
      id: 3,
      name: 'MuscleTech Creatine',
      brand: 'MuscleTech',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500',
      category: 'Creatine'
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      text: 'Best quality supplements at great prices! Gained 8kg in 3 months with their mass gainer.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      text: 'Authentic products and fast delivery. The whey protein tastes amazing!',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      text: 'Excellent customer service. They helped me choose the right supplements for my goals.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">FUEL YOUR <span>AMBITION</span></h1>
          <p className="hero-subtitle">Premium Quality Supplements for Champions</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <FaCheckCircle className="feature-icon" />
              <h3>100% Authentic</h3>
              <p>Genuine products from trusted brands</p>
            </div>
            <div className="feature-card">
              <FaShippingFast className="feature-icon" />
              <h3>Fast Delivery</h3>
              <p>Quick shipping across India</p>
            </div>
            <div className="feature-card">
              <FaDumbbell className="feature-icon" />
              <h3>Expert Guidance</h3>
              <p>Free consultation for your fitness goals</p>
            </div>
            <div className="feature-card">
              <FaTrophy className="feature-icon" />
              <h3>Best Prices</h3>
              <p>Competitive pricing guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Top picks for your fitness journey</p>
          
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-brand">{product.brand}</span>
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <div className="product-footer">
                    <span className="product-price">₹{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/products" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real results from real people</p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Body?</h2>
          <p>Join thousands of satisfied customers on their fitness journey</p>
          <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
