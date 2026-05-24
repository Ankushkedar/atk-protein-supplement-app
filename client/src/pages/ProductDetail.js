import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaStar, FaMinus, FaPlus } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const sampleProducts = [
    {
      _id: '1',
      name: 'Gold Standard 100% Whey Protein',
      brand: 'Optimum Nutrition',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800',
      category: 'protein',
      description: 'The world\'s best-selling whey protein powder. 24g of protein per serving with 5.5g of naturally occurring BCAAs.',
      features: ['24g Protein', '5.5g BCAAs', '4g Glutamine', 'Low Fat'],
      stock: 50
    }
  ];

  useEffect(() => {
    const foundProduct = sampleProducts.find(p => p._id === id) || sampleProducts[0];
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} x ${product.name} added to cart!`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info-section">
            <span className="product-brand">{product.brand}</span>
            <h1>{product.name}</h1>
            
            <div className="product-rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
              <span>(4.8/5 - 250 reviews)</span>
            </div>

            <p className="product-price">₹{product.price}</p>
            <p className="product-description">{product.description}</p>

            <div className="product-features">
              <h3>Key Features:</h3>
              <ul>
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <FaMinus />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className="product-actions">
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <Link to="/products" className="btn btn-secondary">
                Continue Shopping
              </Link>
            </div>

            <div className="stock-info">
              {product.stock > 0 ? (
                <p className="in-stock">✓ In Stock ({product.stock} available)</p>
              ) : (
                <p className="out-of-stock">✗ Out of Stock</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
