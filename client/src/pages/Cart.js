import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import './Cart.css';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Add some products to get started!</p>
        <Link to="/products" className="btn btn-primary">Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item._id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-brand">{item.brand}</p>
                  <p className="item-price">₹{item.price}</p>
                </div>
                <div className="item-quantity">
                  <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                    <FaPlus />
                  </button>
                </div>
                <div className="item-total">
                  ₹{item.price * item.quantity}
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary">Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
