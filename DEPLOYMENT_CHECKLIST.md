# 🚀 Portfolio Deployment Checklist

## ⚠️ CRITICAL - Must Complete Before Deployment

### 1. Add Resume PDF File
- [ ] **File Name:** `Aditya_Dash_Resume.pdf`
- [ ] **Location:** `frontend/public/Aditya_Dash_Resume.pdf`
- [ ] **Status:** ⚠️ **MISSING - MUST BE ADDED**

**How to Add:**
```bash
# Navigate to frontend/public folder
cd frontend/public

# Copy your resume PDF here and rename it
# Windows: copy "path\to\your\resume.pdf" Aditya_Dash_Resume.pdf
# The file should be at: frontend/public/Aditya_Dash_Resume.pdf
```

---

## ✅ Pre-Deployment Testing

### Test All Links
- [ ] **CampusSphere ERP GitHub:** https://github.com/adi0tya/CAMPUSSPHERE
- [ ] **CampusSphere ERP Live:** https://campussphere-orcin.vercel.app
- [ ] **SyncSpace GitHub:** https://github.com/adi0tya/Syncspace
- [ ] **SyncSpace Live:** https://syncspace-lake.vercel.app
- [ ] **Personal GitHub:** https://github.com/adi0tya
- [ ] **LinkedIn:** https://www.linkedin.com/in/aditya-dash-421748311

### Test Resume Functionality
- [ ] Click "View Resume" button - should open PDF in new tab
- [ ] Click "Download Resume" button - should download PDF
- [ ] Resume button in Hero section works
- [ ] Resume section displays correctly

### Test Contact Form
- [ ] Email link opens mail client with: contact.adityadash@gmail.com
- [ ] Phone link works: +91 8260540773
- [ ] Contact form submits successfully (if backend is running)
- [ ] All social links work correctly

### Test Responsiveness
- [ ] Desktop view (1920px+)
- [ ] Laptop view (1366px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] All sections scroll smoothly
- [ ] Navbar works on mobile
- [ ] All buttons are tap-friendly on mobile

### Test Browsers
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (if available)
- [ ] Mobile browsers (Chrome, Safari)

---

## 🔧 Build & Deploy

### 1. Final Build
```bash
cd frontend
npm install
npm run build
```

**Expected Output:**
- ✅ Build completes successfully
- ✅ `dist` folder is created
- ✅ No critical errors (chunk size warning is normal)

### 2. Test Production Build Locally
```bash
npm run preview
```
- [ ] Open http://localhost:4173
- [ ] Test all functionality
- [ ] Check console for errors
- [ ] Verify resume download works

### 3. Deploy Frontend

#### Option A: Vercel (Recommended)
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
cd frontend
vercel --prod
```

**Vercel Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Framework Preset: Vite

#### Option B: Netlify
```bash
# Install Netlify CLI (if not installed)
npm i -g netlify-cli

# Deploy
cd frontend
netlify deploy --prod --dir=dist
```

**Netlify Configuration:**
- Build Command: `npm run build`
- Publish Directory: `dist`

### 4. Environment Variables (Production)

If using backend API, set:
```
VITE_API_URL=https://your-backend-url.com
```

**Where to set:**
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables

---

## 🔍 Post-Deployment Verification

### Immediate Checks
- [ ] Site loads correctly
- [ ] All images load
- [ ] Resume PDF is accessible
- [ ] No console errors
- [ ] All animations work
- [ ] 3D scene loads (desktop)
- [ ] Mobile fallback works

### Functionality Tests
- [ ] Navigation works
- [ ] Smooth scrolling works
- [ ] All project links open correctly
- [ ] Resume downloads successfully
- [ ] Contact form works (if backend deployed)
- [ ] Email links work
- [ ] Social links work

### Performance Checks
- [ ] Page loads in < 3 seconds
- [ ] Lighthouse score > 90 (Performance)
- [ ] No layout shifts
- [ ] Smooth animations
- [ ] Mobile performance is good

### SEO Checks
- [ ] Title tag is correct
- [ ] Meta description is correct
- [ ] Open Graph tags work
- [ ] Favicon loads
- [ ] Site is indexable

---

## 📱 Share Your Portfolio

### Update Your Profiles
- [ ] Add portfolio link to GitHub profile
- [ ] Add portfolio link to LinkedIn
- [ ] Add portfolio link to resume
- [ ] Share on social media

### Portfolio URL Format
```
https://your-portfolio-name.vercel.app
or
https://adityadash.com (if custom domain)
```

---

## 🐛 Common Issues & Solutions

### Issue: Resume PDF Not Found (404)
**Solution:**
1. Ensure file is named exactly: `Aditya_Dash_Resume.pdf`
2. File must be in `frontend/public/` folder
3. Rebuild and redeploy

### Issue: Links Not Working
**Solution:**
1. Check URLs in `frontend/src/data/portfolio.js`
2. Ensure GitHub repos are public
3. Test live links before deploying

### Issue: Contact Form Not Working
**Solution:**
1. Check if backend is deployed
2. Verify VITE_API_URL is set correctly
3. Check CORS settings on backend
4. Form will show error if backend is offline (expected behavior)

### Issue: 3D Scene Not Loading
**Solution:**
1. Check browser console for errors
2. Ensure Three.js dependencies are installed
3. Mobile devices use fallback (expected)
4. Try clearing cache and hard reload

### Issue: Build Fails
**Solution:**
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Check Node.js version (should be 18+)
4. Run `npm run build` again

---

## 📊 Analytics (Optional)

### Add Google Analytics
1. Get GA4 tracking ID
2. Add to `index.html` in `<head>` section
3. Redeploy

### Add Vercel Analytics
1. Enable in Vercel dashboard
2. No code changes needed

---

## 🎯 Final Checklist Summary

### Before Deployment
- [ ] Resume PDF added to `frontend/public/`
- [ ] All links tested and working
- [ ] Build completes successfully
- [ ] Local preview tested

### During Deployment
- [ ] Frontend deployed to Vercel/Netlify
- [ ] Environment variables set (if needed)
- [ ] Custom domain configured (optional)

### After Deployment
- [ ] Site loads correctly
- [ ] All functionality tested
- [ ] Performance is good
- [ ] Shared on profiles

---

## 🎉 You're Ready to Deploy!

Once you've completed all the items above, your portfolio is ready to go live!

**Deployment Command:**
```bash
cd frontend
vercel --prod
```

**Good luck! 🚀**

---

## 📞 Need Help?

If you encounter any issues:
1. Check the console for errors
2. Review the UPGRADE_SUMMARY.md file
3. Verify all files are in correct locations
4. Ensure all dependencies are installed

**Contact Information:**
- Email: contact.adityadash@gmail.com
- GitHub: https://github.com/adi0tya
