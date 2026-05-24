# 🔧 PRIDE SUPPLEMENTS - Troubleshooting Guide

## Common Issues & Solutions

---

## 🚨 Installation Issues

### Issue: "npm: command not found"
**Cause:** Node.js is not installed

**Solution:**
1. Download Node.js from https://nodejs.org/
2. Install the LTS version
3. Restart your terminal
4. Verify: `node --version` and `npm --version`

---

### Issue: "npm run install-all" fails
**Cause:** Permission issues or corrupted packages

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm run install-all

# If still fails, install manually:
npm install
cd client && npm install
cd ../server && npm install
```

---

## 🗄️ MongoDB Issues

### Issue: "MongooseServerSelectionError: connect ECONNREFUSED"
**Cause:** MongoDB is not running

**Solution for Local MongoDB:**
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Solution for MongoDB Atlas:**
1. Check your connection string in `.env`
2. Whitelist your IP address in Atlas dashboard
3. Ensure username/password are correct
4. Use format: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

---

### Issue: "Authentication failed"
**Cause:** Wrong MongoDB credentials

**Solution:**
1. Go to MongoDB Atlas dashboard
2. Database Access → Edit user
3. Reset password
4. Update `.env` with new password
5. Make sure to URL-encode special characters

---

## 🌐 Server Issues

### Issue: "Port 5000 already in use"
**Cause:** Another application is using port 5000

**Solution:**
```bash
# Option 1: Kill the process
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill

# Option 2: Change port
# Edit server/.env
PORT=5001
```

---

### Issue: "Port 3000 already in use"
**Cause:** Another React app is running

**Solution:**
```bash
# Kill the process
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill

# Or run on different port
# When prompted, type 'Y' to run on different port
```

---

## 🔐 Authentication Issues

### Issue: "Token is not valid"
**Cause:** JWT token expired or invalid

**Solution:**
1. Clear browser localStorage
2. Logout and login again
3. Check JWT_SECRET in `.env` matches

---

### Issue: "User already exists"
**Cause:** Email already registered

**Solution:**
- Use a different email
- Or login with existing credentials
- Or clear database and start fresh

---

## 🎨 Frontend Issues

### Issue: "Module not found: Can't resolve 'react-router-dom'"
**Cause:** Dependencies not installed

**Solution:**
```bash
cd client
npm install
```

---

### Issue: "Blank white screen"
**Cause:** JavaScript error

**Solution:**
1. Open browser console (F12)
2. Check for errors
3. Common fixes:
```bash
# Clear cache and reinstall
cd client
rm -rf node_modules package-lock.json
npm install
npm start
```

---

### Issue: "Images not loading"
**Cause:** External image URLs blocked or slow

**Solution:**
1. Check internet connection
2. Try different image URLs
3. Use local images instead:
   - Save images in `client/public/images/`
   - Update image paths in Products.js

---

## 🛒 Cart Issues

### Issue: "Cart items disappear on refresh"
**Cause:** This is normal - cart uses localStorage

**Solution:**
- Items should persist in localStorage
- Check browser console for errors
- Clear localStorage and try again:
```javascript
// In browser console
localStorage.clear()
```

---

### Issue: "Add to cart not working"
**Cause:** State management issue

**Solution:**
1. Check browser console for errors
2. Verify product has all required fields
3. Clear browser cache
4. Restart development server

---

## 🔄 API Issues

### Issue: "Network Error" or "Failed to fetch"
**Cause:** Backend not running or CORS issue

**Solution:**
1. Make sure backend is running on port 5000
2. Check `client/package.json` has:
```json
"proxy": "http://localhost:5000"
```
3. Restart both servers

---

### Issue: "404 Not Found" on API calls
**Cause:** Wrong API endpoint

**Solution:**
1. Check backend routes in `server/routes/`
2. Verify endpoint URLs match
3. Check server console for route registration

---

## 💻 Build Issues

### Issue: "npm run build" fails
**Cause:** Build errors or warnings treated as errors

**Solution:**
```bash
cd client

# Option 1: Fix all warnings
# Check console output and fix issues

# Option 2: Ignore warnings (not recommended)
# Add to package.json scripts:
"build": "CI=false react-scripts build"
```

---

## 🚀 Deployment Issues

### Issue: "Application Error" on Heroku
**Cause:** Missing environment variables or build failure

**Solution:**
1. Check Heroku logs: `heroku logs --tail`
2. Verify all environment variables are set
3. Ensure `Procfile` exists
4. Check Node.js version compatibility

---

### Issue: "502 Bad Gateway" on deployed site
**Cause:** Backend not responding

**Solution:**
1. Check backend logs
2. Verify MongoDB connection
3. Ensure environment variables are set
4. Check if backend service is running

---

## 🔍 Debugging Tips

### Enable Detailed Logging

**Backend:**
```javascript
// Add to server/index.js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
```

**Frontend:**
```javascript
// Add console.logs in components
console.log('Cart items:', cart);
console.log('User:', user);
```

---

### Check Browser Console
1. Press F12 or right-click → Inspect
2. Go to Console tab
3. Look for red error messages
4. Check Network tab for failed requests

---

### Check Server Logs
- Look at terminal where server is running
- Check for error messages
- Verify routes are registered
- Check database connection status

---

## 🧪 Testing Checklist

If something isn't working, test these:

- [ ] Node.js installed (`node --version`)
- [ ] MongoDB running (local or Atlas)
- [ ] Dependencies installed (`node_modules` exists)
- [ ] Environment variables set (`.env` file exists)
- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000
- [ ] No errors in browser console
- [ ] No errors in server terminal
- [ ] Internet connection active
- [ ] Firewall not blocking ports

---

## 🆘 Still Having Issues?

### Step 1: Clean Install
```bash
# Delete everything and start fresh
rm -rf node_modules client/node_modules server/node_modules
rm package-lock.json client/package-lock.json server/package-lock.json
npm run install-all
```

### Step 2: Check Versions
```bash
node --version  # Should be v14 or higher
npm --version   # Should be v6 or higher
```

### Step 3: Verify File Structure
Make sure you have:
```
pride-supplements/
├── client/
├── server/
├── package.json
└── README.md
```

### Step 4: Test Basic Setup
```bash
# Test backend only
cd server
npm start

# Test frontend only
cd client
npm start
```

---

## 📞 Get Help

If you're still stuck:

1. **Check Documentation:**
   - QUICK_START.md
   - SETUP_GUIDE.md
   - DEPLOYMENT_GUIDE.md

2. **Search Online:**
   - Google the exact error message
   - Check Stack Overflow
   - Search GitHub issues

3. **Contact Support:**
   - Email: kedarankush075@gmail.com
   - Phone: +91 8379803650

**When asking for help, include:**
- Error message (exact text)
- What you were trying to do
- Your operating system
- Node.js version
- Screenshots if possible

---

## 💡 Pro Tips

1. **Always read error messages carefully** - They usually tell you what's wrong
2. **Check one thing at a time** - Don't change multiple things simultaneously
3. **Use version control** - Commit working code before making changes
4. **Keep dependencies updated** - But test after updating
5. **Read the documentation** - Most answers are already documented

---

## ✅ Prevention Tips

To avoid issues:
- ✅ Use stable Node.js LTS version
- ✅ Don't modify `node_modules`
- ✅ Keep `.env` file secure
- ✅ Commit working code regularly
- ✅ Test before deploying
- ✅ Keep backups of database
- ✅ Document any custom changes

---

**Remember:** Every developer faces issues. The key is systematic debugging! 🔍

Good luck! 💪
