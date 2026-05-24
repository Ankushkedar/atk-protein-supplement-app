# PRIDE SUPPLEMENTS - Complete Setup Guide

## 🎯 Quick Start Guide

### Step 1: Install Node.js
Download and install Node.js from https://nodejs.org/ (LTS version recommended)

### Step 2: Install MongoDB
**Option A - Local Installation:**
- Download from https://www.mongodb.com/try/download/community
- Install and start MongoDB service

**Option B - MongoDB Atlas (Cloud - Recommended for beginners):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster (free tier)
4. Get your connection string
5. Use it in your `.env` file

### Step 3: Clone and Setup

```bash
# Navigate to your project folder
cd pride-supplements

# Install all dependencies
npm run install-all
```

### Step 4: Configure Environment

Create `server/.env` file:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/pride-supplements
# Or use MongoDB Atlas connection string:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/pride-supplements

JWT_SECRET=pride_supplements_secret_key_2024
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Step 5: Run the Application

**Option A - Run both frontend and backend together:**
```bash
npm run dev
```

**Option B - Run separately:**
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend  
cd client
npm start
```

### Step 6: Access Your Website

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🚀 Deployment Options

### Option 1: GitHub Pages (Frontend Only - Static)
1. Build the frontend:
```bash
cd client
npm run build
```
2. Deploy the `build` folder to GitHub Pages

### Option 2: Vercel (Frontend) + Railway (Backend)

**Frontend on Vercel:**
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Set root directory to `client`
5. Deploy

**Backend on Railway:**
1. Go to https://railway.app
2. Create new project from GitHub
3. Set root directory to `server`
4. Add environment variables
5. Deploy

### Option 3: Heroku (Full Stack)
```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create app
heroku create pride-supplements

# Add MongoDB addon
heroku addons:create mongolab

# Deploy
git push heroku main
```

## 📦 Features Included

✅ Product catalog with categories
✅ Shopping cart functionality
✅ User authentication (Register/Login)
✅ Checkout process
✅ Contact form
✅ Responsive design
✅ Modern UI with animations

## 🔧 Customization

### Adding Products
Edit `client/src/pages/Products.js` - Update the `sampleProducts` array

### Changing Colors
Edit `client/src/index.css` - Update CSS variables:
```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #004e89;
  --dark-color: #1a1a2e;
}
```

### Adding Payment Gateway
1. Sign up for Razorpay: https://razorpay.com
2. Get API keys
3. Add to `.env` file
4. Implement in checkout page

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Make sure MongoDB is running
- Check connection string in `.env`
- For Atlas, whitelist your IP address

**Port Already in Use:**
```bash
# Change port in server/.env
PORT=5001
```

**Module Not Found:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## 📞 Support

For any issues, contact:
- Email: kedarankush075@gmail.com
- Phone: +91 8379803650

## 🎉 You're All Set!

Your PRIDE SUPPLEMENTS website is ready to go! Start customizing and adding your products.

Good luck with your business! 💪
