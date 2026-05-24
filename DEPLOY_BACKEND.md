# Deploy Backend - Complete Guide

## Option 1: Railway (EASIEST - Free Tier) ⭐

### Step-by-Step:

1. **Go to Railway**
   - Visit https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose: `Ankushkedar/atk-protein-supplement-app`

3. **Configure Backend**
   - Click on the service
   - Settings → Root Directory: `server`
   - Add Environment Variables:
     ```
     PORT=5000
     JWT_SECRET=pride_supplements_secret_key_2024
     MONGO_URI=<your-mongodb-atlas-uri>
     ```

4. **Add MongoDB**
   - In Railway dashboard, click "New"
   - Select "Database" → "MongoDB"
   - Copy the connection string
   - Update MONGO_URI in environment variables

5. **Deploy**
   - Railway will auto-deploy
   - Copy the generated URL (e.g., `https://your-app.railway.app`)

6. **Update Frontend**
   - In your frontend code, update API calls to use Railway URL
   - Or add to `client/package.json`:
     ```json
     "proxy": "https://your-app.railway.app"
     ```

---

## Option 2: Render (Free Tier)

1. **Go to Render**
   - Visit https://render.com
   - Sign up with GitHub

2. **Create Web Service**
   - New → Web Service
   - Connect your GitHub repo
   - Configure:
     - **Name:** pride-supplements-api
     - **Root Directory:** `server`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`

3. **Add Environment Variables**
   ```
   PORT=5000
   MONGO_URI=<mongodb-atlas-uri>
   JWT_SECRET=pride_supplements_secret_key_2024
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment
   - Copy the URL

---

## Option 3: Heroku

1. **Install Heroku CLI**
   - Download from https://devcenter.heroku.com/articles/heroku-cli

2. **Login**
   ```bash
   heroku login
   ```

3. **Create App**
   ```bash
   heroku create pride-supplements-api
   ```

4. **Add MongoDB**
   ```bash
   heroku addons:create mongolab:sandbox
   ```

5. **Set Environment Variables**
   ```bash
   heroku config:set JWT_SECRET=pride_supplements_secret_key_2024
   ```

6. **Deploy**
   ```bash
   git subtree push --prefix server heroku main
   ```

---

## MongoDB Atlas Setup (Required for All Options)

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create Cluster**
   - Choose free tier (M0)
   - Select region closest to you
   - Create cluster

3. **Create Database User**
   - Database Access → Add New User
   - Username: `prideadmin`
   - Password: (generate strong password)
   - Save

4. **Whitelist IP**
   - Network Access → Add IP Address
   - Allow access from anywhere: `0.0.0.0/0`
   - (For production, use specific IPs)

5. **Get Connection String**
   - Clusters → Connect
   - Connect your application
   - Copy connection string
   - Replace `<password>` with your password
   - Example:
     ```
     mongodb+srv://prideadmin:yourpassword@cluster0.xxxxx.mongodb.net/pride-supplements?retryWrites=true&w=majority
     ```

---

## Complete Deployment Checklist

- [ ] Backend deployed to Railway/Render/Heroku
- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] IP whitelisted
- [ ] Environment variables set
- [ ] Backend URL copied
- [ ] Frontend updated with backend URL
- [ ] Frontend deployed to Vercel/Netlify
- [ ] Test all features
- [ ] Custom domain configured (optional)

---

## Testing Your Deployment

1. **Test Backend**
   - Visit: `https://your-backend-url.com`
   - Should see: `{"message":"PRIDE SUPPLEMENTS API"}`

2. **Test Frontend**
   - Visit your frontend URL
   - Try registering a user
   - Add products to cart
   - Test checkout

3. **Check Logs**
   - Railway: Dashboard → Logs
   - Render: Dashboard → Logs
   - Heroku: `heroku logs --tail`

---

## Your URLs After Deployment

**Frontend:** https://your-project.vercel.app
**Backend:** https://your-api.railway.app
**Database:** MongoDB Atlas (cloud)

---

## Estimated Time

- MongoDB Atlas setup: 5 minutes
- Backend deployment: 10 minutes
- Frontend deployment: 5 minutes
- Testing: 5 minutes

**Total: ~25 minutes to full deployment!** 🚀

---

## Need Help?

Check TROUBLESHOOTING.md or contact:
- Email: kedarankush075@gmail.com
- Phone: +91 8379803650
