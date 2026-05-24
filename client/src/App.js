import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find(item => item._id === product._id);
    let newCart;

    if (existingItem) {
      newCart = cart.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantity }];
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item._id !== productId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const newCart = cart.map(item =>
      item._id === productId ? { ...item, quantity } : item
    );
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} user={user} />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
