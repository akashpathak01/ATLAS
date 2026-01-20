# Railway Deployment - Quick Start Commands

## ✅ Preparation Complete!

All Railway deployment files have been created and configured:
- ✅ Procfile
- ✅ railway.json
- ✅ nixpacks.toml
- ✅ runtime.txt
- ✅ requirements.txt (updated)
- ✅ settings.py (Railway-ready)
- ✅ Git committed

---

## Deploy Now - Copy & Paste These Commands

### Step 1: Login to Railway
```bash
cd /root/new-python-code
railway login
```
*(This will open a browser window for authentication)*

---

### Step 2: Initialize Railway Project
```bash
railway init
```
*(Select "Create new project" and give it a name like "atlas-crm")*

---

### Step 3: Add PostgreSQL Database
```bash
railway add --database postgresql
```
*(This automatically sets DATABASE_URL)*

---

### Step 4: Set Environment Variables
```bash
# Generate and set SECRET_KEY
railway variables set SECRET_KEY=$(python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())")

# Set DEBUG to false
railway variables set DEBUG=False

# Set allowed hosts
railway variables set DJANGO_ALLOWED_HOSTS=".up.railway.app,atlas.alexandratechlab.com,atlas-crm.alexandratechlab.com"
```

---

### Step 5: Deploy!
```bash
railway up
```

---

### Step 6: Get Your URL
```bash
railway domain
```

---

### Step 7: Create Superuser (After Deployment)
```bash
railway run python manage.py createsuperuser
```

---

## Alternative: Use the Interactive Script

We created a friendly script that guides you through all steps:

```bash
cd /root/new-python-code
./deploy-to-railway.sh
```

---

## Monitor Your Deployment

```bash
# View real-time logs
railway logs --follow

# Check service status
railway status

# View all environment variables
railway variables

# Open in browser
railway open
```

---

## Expected Output

After `railway up`, you should see:

```
✓ Building...
✓ Deploying...
✓ Running migrations...
✓ Collecting static files...
✓ Starting web server...

Service deployed successfully!
URL: https://atlas-crm-production-xxxx.up.railway.app
```

---

## Cost Information

**Railway Pricing:**
- Hobby Plan: $5/month (includes $5 usage credit)
- After credits: ~$0.000463/minute (~$20-30/month for 24/7)
- First 100GB bandwidth free

**Free Trial:**
- Railway offers a trial period
- No credit card required initially

---

## Custom Domain Setup (Optional)

After deployment, add your custom domain:

```bash
# Add domain
railway domain add atlas-railway.alexandratechlab.com

# Railway will provide CNAME record
# Add to your DNS:
# Type: CNAME
# Name: atlas-railway
# Value: atlas-crm-production-xxxx.up.railway.app
```

---

## Troubleshooting

**If deployment fails:**

```bash
# View build logs
railway logs --build

# View runtime logs
railway logs

# Check variables
railway variables

# Restart service
railway restart
```

**Common issues:**
1. DATABASE_URL not set → Run `railway add --database postgresql`
2. Build timeout → Increase in railway.json
3. Static files missing → Check STATIC_ROOT in settings.py

---

## Post-Deployment Checklist

- [ ] Run `railway up` to deploy
- [ ] Run `railway domain` to get URL
- [ ] Test the URL in browser
- [ ] Run `railway run python manage.py createsuperuser`
- [ ] Login and verify admin works
- [ ] Check all major features work
- [ ] Set up custom domain (optional)
- [ ] Configure email settings (optional)
- [ ] Set up monitoring/alerts

---

## Ready to Deploy!

Everything is configured. Just run:

```bash
cd /root/new-python-code
railway login
railway init
railway add --database postgresql
railway variables set SECRET_KEY=$(python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())")
railway variables set DEBUG=False
railway up
```

**That's it!** Your Atlas CRM will be live on Railway! 🚀

---

*Need help? Check RAILWAY_DEPLOYMENT_GUIDE.md for detailed instructions*
