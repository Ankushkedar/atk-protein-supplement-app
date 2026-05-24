# PRIDE SUPPLEMENTS - Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend) [RECOMMENDED]

#### Deploy Frontend to Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy on Vercel**
- Go to https://vercel.com
- Sign up/Login with GitHub
- Click "New Project"
- Import your repository
- Configure:
  - Framework Preset: Create React App
  - Root Directory: `client`
  - Build Command: `npm run build`
  - Output Directory: `build`
- Add Environment Variables (if needed)
- Click "Deploy"

3. **Update API URL**
After backend deployment, update `client/package.json`:
```json
"proxy": "https://your-backend-url.railway.app"
```

#### Deploy Backend to Railway

1. **Go to Railway**
- Visit https://railway.app
- Sign up/Login with GitHub

2. **Create New Project**
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose your repository

3. **Configure Backend**
- Root Directory: `server`
- Add Environment Variables:
  ```
  PORT=5000
  MONGO_URI=<your-mongodb-atlas-uri>
  JWT_SECRET=<your-secret-key>
  ```

4. **Add MongoDB**
- In Railway dashboard, click "New"
- Select "Database" → "MongoDB"
- Copy connection string to MONGO_URI

5. **Deploy**
- Railway will auto-deploy
- Copy the generated URL

---

### Option 2: Heroku (Full Stack)

1. **Install Heroku CLI**
```bash
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

2. **Login to Heroku**
```bash
heroku login
```

3. **Create Heroku App**
```bash
heroku create pride-supplements
```

4. **Add MongoDB**
```bash
heroku addons:create mongolab:sandbox
```

5. **Set Environment Variables**
```bash
heroku config:set JWT_SECRET=your_secret_key
heroku config:set NODE_ENV=production
```

6. **Create Procfile**
```
web: cd server && npm start
```

7. **Deploy**
```bash
git push heroku main
```

8. **Build Frontend**
```bash
cd client
npm run build
# Copy build folder to server/public
```

---

### Option 3: DigitalOcean/AWS/Azure (VPS)

#### Prerequisites
- VPS with Ubuntu 20.04+
- Domain name (optional)

#### Setup Steps

1. **Connect to Server**
```bash
ssh root@your-server-ip
```

2. **Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Install MongoDB**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

4. **Install Nginx**
```bash
sudo apt install nginx
```

5. **Clone Repository**
```bash
cd /var/www
git clone <your-repo-url> pride-supplements
cd pride-supplements
```

6. **Install Dependencies**
```bash
npm run install-all
```

7. **Build Frontend**
```bash
cd client
npm run build
```

8. **Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/pride-supplements
```

Add:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /var/www/pride-supplements/client/build;
        try_files $uri /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

9. **Enable Site**
```bash
sudo ln -s /etc/nginx/sites-available/pride-supplements /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

10. **Setup PM2 (Process Manager)**
```bash
sudo npm install -g pm2
cd /var/www/pride-supplements/server
pm2 start index.js --name pride-api
pm2 startup
pm2 save
```

11. **Setup SSL (Optional but Recommended)**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

### Option 4: GitHub Pages (Frontend Only - Static)

**Note**: This only works for frontend. Backend needs separate hosting.

1. **Install gh-pages**
```bash
cd client
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "homepage": "https://yourusername.github.io/pride-supplements",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

---

## 🔧 Post-Deployment Checklist

- [ ] Test all pages and features
- [ ] Verify API endpoints are working
- [ ] Check mobile responsiveness
- [ ] Test user registration and login
- [ ] Test product browsing and cart
- [ ] Test checkout process
- [ ] Verify contact form submission
- [ ] Check all images load correctly
- [ ] Test on different browsers
- [ ] Setup monitoring (optional)
- [ ] Configure custom domain (optional)
- [ ] Setup SSL certificate
- [ ] Configure environment variables
- [ ] Test payment gateway (when integrated)

---

## 📊 Monitoring & Analytics

### Add Google Analytics
1. Get tracking ID from https://analytics.google.com
2. Add to `client/public/index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Error Tracking (Sentry)
```bash
npm install @sentry/react
```

---

## 🐛 Common Deployment Issues

### Issue: API calls failing
**Solution**: Update API base URL in frontend to match backend URL

### Issue: MongoDB connection error
**Solution**: Whitelist server IP in MongoDB Atlas

### Issue: Build fails
**Solution**: Check Node.js version compatibility

### Issue: 404 on page refresh
**Solution**: Configure server to serve index.html for all routes

---

## 📞 Need Help?

Contact: kedarankush075@gmail.com

---

Good luck with your deployment! 🚀
