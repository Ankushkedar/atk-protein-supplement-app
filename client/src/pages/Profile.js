import React from 'react';
import { Navigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaShoppingBag } from 'react-icons/fa';
import './Profile.css';

const Profile = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  const mockOrders = [
    {
      id: '1',
      date: '2024-01-15',
      total: 4999,
      status: 'Delivered',
      items: 2
    },
    {
      id: '2',
      date: '2024-01-10',
      total: 3499,
      status: 'In Transit',
      items: 1
    }
  ];

  return (
    <div className="profile-page">
      <div className="container">
        <h1>My Profile</h1>
        
        <div className="profile-content">
          <div className="profile-info">
            <div className="profile-header">
              <div className="profile-avatar">
                <FaUser />
              </div>
              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>

            <div className="profile-details">
              <div className="detail-item">
                <FaUser className="detail-icon" />
                <div>
                  <label>Name</label>
                  <p>{user.name}</p>
                </div>
              </div>

              <div className="detail-item">
                <FaEnvelope className="detail-icon" />
                <div>
                  <label>Email</label>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="orders-section">
            <h2><FaShoppingBag /> My Orders</h2>
            
            <div className="orders-list">
              {mockOrders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <span className="order-id">Order #{order.id}</span>
                    <span className={`order-status ${order.status.toLowerCase().replace(' ', '-')}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-details">
                    <p>Date: {order.date}</p>
                    <p>Items: {order.items}</p>
                    <p className="order-total">Total: ₹{order.total}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
