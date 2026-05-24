import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartCount, user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <div className="logo-icon">P</div>
          <span className="logo-text">PRIDE SUPPLEMENTS</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="nav-actions">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {user ? (
            <div className="user-menu">
              <FaUser className="user-icon" />
              <div className="dropdown">
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">Login</Link>
          )}

          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
