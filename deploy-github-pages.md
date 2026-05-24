# Deploy to GitHub Pages

## Quick Deploy Steps:

1. **Update package.json**
   Add to `client/package.json`:
   ```json
   {
     "homepage": "https://ankushkedar.github.io/atk-protein-supplement-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

2. **Install gh-pages**
   ```bash
   cd client
   npm install --save-dev gh-pages
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: gh-pages branch
   - Save

Your site will be live at:
https://ankushkedar.github.io/atk-protein-supplement-app

**Note:** This is frontend only. For full functionality, deploy backend separately.
