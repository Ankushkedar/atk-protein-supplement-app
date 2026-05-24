import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Products.css';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample products data with famous brands
  const sampleProducts = [
    {
      _id: '1',
      name: 'Gold Standard 100% Whey Protein',
      brand: 'Optimum Nutrition',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500',
      category: 'protein',
      description: '24g protein per serving, 5.5g BCAAs',
      stock: 50
    },
    {
      _id: '2',
      name: 'Whey Protein Isolate',
      brand: 'MyProtein',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=500',
      category: 'protein',
      description: '90% protein content, low fat',
      stock: 30
    },
    {
      _id: '3',
      name: 'Mass Gainer XXL',
      brand: 'MuscleBlaze',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500',
      category: 'mass-gainer',
      description: '1350 calories per serving',
      stock: 25
    },
    {
      _id: '4',
      name: 'Serious Mass',
      brand: 'Optimum Nutrition',
      price: 4499,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      category: 'mass-gainer',
      description: '1250 calories, 50g protein',
      stock: 20
    },
    {
      _id: '5',
      name: 'Micronized Creatine Monohydrate',
      brand: 'MuscleTech',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500',
      category: 'creatine',
      description: '5g pure creatine per serving',
      stock: 40
    },
    {
      _id: '6',
      name: 'Creatine HCL',
      brand: 'BSN',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1599932550620-2f3b0e5d3b5e?w=500',
      category: 'creatine',
      description: 'Enhanced absorption formula',
      stock: 35
    },
    {
      _id: '7',
      name: 'Rolled Oats',
      brand: 'MuscleBlaze',
      price: 599,
      image: 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=500',
      category: 'supplements',
      description: 'High fiber, complex carbs',
      stock: 60
    },
    {
      _id: '8',
      name: 'Peanut Butter',
      brand: 'MyProtein',
      price: 449,
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500',
      category: 'supplements',
      description: 'Natural, high protein',
      stock: 45
    },
    {
      _id: '9',
      name: 'BCAA 2:1:1',
      brand: 'Optimum Nutrition',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=500',
      category: 'supplements',
      description: 'Muscle recovery formula',
      stock: 30
    },
    {
      _id: '10',
      name: 'Pre-Workout C4',
      brand: 'Cellucor',
      price: 2299,
      image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=500',
      category: 'supplements',
      description: 'Energy & focus booster',
      stock: 28
    },
    {
      _id: '11',
      name: 'Whey Gold Standard',
      brand: 'Dymatize',
      price: 4799,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500',
      category: 'protein',
      description: '25g protein, great taste',
      stock: 22
    },
    {
      _id: '12',
      name: 'Multivitamin Tablets',
      brand: 'MuscleTech',
      price: 899,
      image: 'https://images.unsplash.com/photo-1550572017-4814c6f5a5e6?w=500',
      category: 'supplements',
      description: 'Complete daily nutrition',
      stock: 50
    }
  ];

  useEffect(() => {
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Premium supplements from trusted brands</p>
        </div>
      </div>

      <div className="container">
        <div className="products-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filters">
            <button
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => setSelectedCategory('all')}
            >
              All Products
            </button>
            <button
              className={selectedCategory === 'protein' ? 'active' : ''}
              onClick={() => setSelectedCategory('protein')}
            >
              Protein
            </button>
            <button
              className={selectedCategory === 'mass-gainer' ? 'active' : ''}
              onClick={() => setSelectedCategory('mass-gainer')}
            >
              Mass Gainer
            </button>
            <button
              className={selectedCategory === 'creatine' ? 'active' : ''}
              onClick={() => setSelectedCategory('creatine')}
            >
              Creatine
            </button>
            <button
              className={selectedCategory === 'supplements' ? 'active' : ''}
              onClick={() => setSelectedCategory('supplements')}
            >
              Supplements
            </button>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product._id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.stock < 10 && (
                  <span className="stock-badge">Only {product.stock} left!</span>
                )}
              </div>
              <div className="product-info">
                <span className="product-brand">{product.brand}</span>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">₹{product.price}</span>
                  <div className="product-actions">
                    <Link to={`/product/${product._id}`} className="btn-view">View</Link>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
