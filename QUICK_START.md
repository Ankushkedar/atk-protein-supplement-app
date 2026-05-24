# 🚀 PRIDE SUPPLEMENTS - Quick Start (5 Minutes)

## ⚡ Super Fast Setup

### 1️⃣ Install Node.js (if not installed)
Download from: https://nodejs.org/ (Choose LTS version)

### 2️⃣ Install MongoDB

**Easy Option - MongoDB Atlas (Cloud - FREE):**
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create free account
3. Create a cluster (free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string

**OR Local MongoDB:**
Download from: https://www.mongodb.com/try/download/community

### 3️⃣ Setup Project

Open terminal in project folder:

```bash
# Install everything
npm run install-all

# Create environment file
cd server
copy .env.example .env
# (On Mac/Linux: cp .env.example .env)
```

### 4️⃣ Configure .env File

Edit `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/pride-supplements
# OR use your Atlas connection string:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/pride-supplements

JWT_SECRET=my_secret_key_12345
```

### 5️⃣ Run the App

```bash
# Go back to root folder
cd ..

# Start everything
npm run dev
```

### 6️⃣ Open Browser

- Website: http://localhost:3000
- API: http://localhost:5000

## ✅ That's It! You're Running!

---

## 🎯 What You Can Do Now

1. **Browse Products** - Check out the product catalog
2. **Add to Cart** - Add items to your shopping cart
3. **Register/Login** - Create an account
4. **Checkout** - Complete a test order
5. **Contact Form** - Test the contact functionality

---

## 🛠️ Common Issues & Fixes

### ❌ "Port 3000 already in use"
```bash
# Kill the process
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

### ❌ "MongoDB connection failed"
- Make sure MongoDB is running
- Check your connection string in `.env`
- For Atlas: Whitelist your IP (0.0.0.0/0 for testing)

### ❌ "Module not found"
```bash
# Reinstall dependencies
rm -rf node_modules
npm run install-all
```

---

## 📝 Quick Customization

### Change Brand Name
Edit `client/src/components/Navbar.js` - Line 18

### Change Colors
Edit `client/src/index.css` - Lines 23-27

### Add Products
Edit `client/src/pages/Products.js` - Lines 12-100

### Change Contact Info
Edit `client/src/components/Footer.js` - Lines 30-35

---

## 🚀 Deploy to Internet (GitHub Pages)

```bash
# Build the app
cd client
npm run build

# The 'build' folder is ready to deploy!
# Upload to any hosting service
```

**Recommended Free Hosting:**
- Frontend: Vercel, Netlify, GitHub Pages
- Backend: Railway, Render, Heroku

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

---

## 📞 Need Help?

**Contact:**
- Email: kedarankush075@gmail.com
- Phone: +91 8379803650
- Instagram: @ankushkedar_01

---

## 🎉 You're All Set!

Start customizing your PRIDE SUPPLEMENTS website and launch your business! 💪

**Next Steps:**
1. Add your real products
2. Customize colors and branding
3. Add your logo
4. Setup payment gateway (Razorpay)
5. Deploy to internet
6. Start selling! 🚀

---

**Pro Tip:** Check out `SETUP_GUIDE.md` for detailed explanations and `DEPLOYMENT_GUIDE.md` for hosting options.
