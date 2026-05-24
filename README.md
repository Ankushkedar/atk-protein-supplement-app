# PRIDE SUPPLEMENTS 💪

![PRIDE SUPPLEMENTS](https://img.shields.io/badge/PRIDE-SUPPLEMENTS-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?style=flat-square)

A modern, full-stack e-commerce platform for premium protein supplements and fitness products. Built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Product Catalog**: Browse protein powders, mass gainers, creatine, and more
- **Shopping Cart**: Add products, manage quantities, and checkout
- **User Authentication**: Register, login, and manage your profile
- **Order Management**: Track your orders and purchase history
- **Contact Form**: Easy communication with the business
- **Mobile Responsive**: Works perfectly on all devices

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router v6
- React Icons
- React Toastify
- Axios
- CSS3 with custom styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Express Validator

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd pride-supplements
```

2. **Install all dependencies**
```bash
npm run install-all
```

Or install separately:
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/pride-supplements
JWT_SECRET=your_secret_key_here
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

4. **Start MongoDB**
```bash
# If using local MongoDB
mongod
```

5. **Run the application**

Development mode (runs both frontend and backend):
```bash
npm run dev
```

Or run separately:
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📱 Contact Information

- **Email**: kedarankush075@gmail.com
- **Phone**: +91 8379803650
- **Instagram**: @ankushkedar_01

## 🎯 Future Enhancements

- Payment gateway integration (Razorpay)
- Admin dashboard for product management
- Order tracking system
- Email notifications
- Product reviews and ratings
- Wishlist functionality
- Advanced search and filters
- Offline store locator (when expanded)

## 📄 License

This project is created for PRIDE SUPPLEMENTS business.

## 👨‍💻 Developer

Built by Ankush Kedar

---

**PRIDE SUPPLEMENTS** - Fuel Your Ambition! 🏋️‍♂️
