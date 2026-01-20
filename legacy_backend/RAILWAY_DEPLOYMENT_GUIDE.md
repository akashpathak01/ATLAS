# Atlas CRM - Railway Deployment Guide

## Status: Ready for Deployment ✅

All Railway deployment files have been created and committed to git.

---

## Prerequisites Completed ✅

- ✅ Procfile created (web process + migrations)
- ✅ railway.json configured
- ✅ nixpacks.toml configured
- ✅ runtime.txt (Python 3.12.3)
- ✅ requirements.txt updated (added dj-database-url)
- ✅ settings.py updated for Railway support
- ✅ Git repository ready
- ✅ Changes committed

---

## Deployment Steps

### Step 1: Login to Railway

```bash
railway login
```

This will open a browser window for you to authenticate with Railway.

### Step 2: Create a New Railway Project

Option A - Create via CLI:
```bash
railway init
```

Option B - Link to existing project:
```bash
railway link
```

### Step 3: Add PostgreSQL Database

```bash
railway add --database postgresql
```

This will automatically:
- Create a PostgreSQL database
- Set the DATABASE_URL environment variable

### Step 4: Set Environment Variables

```bash
# Set Django secret key
railway variables set SECRET_KEY=$(python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())")

# Set debug to false
railway variables set DEBUG=False

# Set allowed hosts (Railway will auto-add its domain)
railway variables set DJANGO_ALLOWED_HOSTS=".up.railway.app"

# Optional: Email configuration
railway variables set EMAIL_HOST=smtp.hostinger.com
railway variables set EMAIL_PORT=465
railway variables set EMAIL_USE_SSL=True
railway variables set EMAIL_HOST_USER=your-email@domain.com
railway variables set EMAIL_HOST_PASSWORD=your-password
railway variables set DEFAULT_FROM_EMAIL="Atlas CRM <noreply@atlas.alexandratechlab.com>"

# Optional: Cloudinary for file storage
railway variables set CLOUDINARY_CLOUD_NAME=your-cloud-name
railway variables set CLOUDINARY_API_KEY=your-api-key
railway variables set CLOUDINARY_API_SECRET=your-api-secret
```

### Step 5: Deploy to Railway

```bash
railway up
```

This will:
1. Build the application using nixpacks
2. Install Python 3.12.3 and dependencies
3. Run migrations (via Procfile release command)
4. Collect static files
5. Start Gunicorn web server

### Step 6: Check Deployment Status

```bash
# View deployment logs
railway logs

# Check service status
railway status

# Get the deployment URL
railway domain
```

### Step 7: Create a Custom Domain (Optional)

```bash
# Add a custom domain
railway domain add atlas-railway.alexandratechlab.com
```

Then update your DNS:
- Type: CNAME
- Name: atlas-railway
- Value: <your-app>.up.railway.app

---

## Environment Variables Reference

### Required Variables:
- `DATABASE_URL` - Auto-set by Railway PostgreSQL
- `SECRET_KEY` - Django secret key (generate new one)
- `DEBUG` - Set to `False` for production
- `PORT` - Auto-set by Railway

### Recommended Variables:
- `EMAIL_HOST` - SMTP server (smtp.hostinger.com)
- `EMAIL_PORT` - SMTP port (465)
- `EMAIL_USE_SSL` - Use SSL (True)
- `EMAIL_HOST_USER` - Email username
- `EMAIL_HOST_PASSWORD` - Email password
- `DEFAULT_FROM_EMAIL` - From address

### Optional Variables:
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `DJANGO_ALLOWED_HOSTS` - Additional allowed hosts

---

## Post-Deployment Tasks

### 1. Create Superuser

```bash
railway run python manage.py createsuperuser
```

### 2. Verify Database Migration

```bash
railway run python manage.py showmigrations
```

### 3. Test the Application

```bash
# Get your Railway URL
railway domain

# Test it
curl https://<your-app>.up.railway.app
```

### 4. Monitor Logs

```bash
railway logs --follow
```

---

## Automatic Features

Railway automatically provides:

✅ **SSL Certificate** - Free HTTPS for .up.railway.app domain
✅ **Auto-scaling** - Scale based on traffic
✅ **Health checks** - Automatic restart on failure
✅ **Zero-downtime deployments** - Rolling deployments
✅ **Environment isolation** - Separate staging/production
✅ **Metrics & monitoring** - Built-in dashboard

---

## Cost Estimate

Railway Pricing (as of 2025):

- **Hobby Plan**: $5/month
  - $5 worth of usage included
  - Pay-as-you-go after that

- **Usage Costs**:
  - Compute: ~$0.000463/minute (~$20/month for 24/7)
  - PostgreSQL: Included in compute cost
  - Egress: First 100GB free

**Estimated Monthly Cost**: $20-30/month for production workload

---

## Troubleshooting

### Build Fails

```bash
# Check build logs
railway logs --build

# Common issues:
# - Missing dependencies in requirements.txt
# - Python version mismatch (check runtime.txt)
# - Build timeout (increase in railway.json)
```

### Database Connection Error

```bash
# Verify DATABASE_URL is set
railway variables

# Check if PostgreSQL is running
railway ps
```

### Static Files Not Loading

```bash
# Run collectstatic manually
railway run python manage.py collectstatic --noinput

# Check STATIC_ROOT in settings.py
```

### Application Won't Start

```bash
# Check Procfile syntax
cat Procfile

# View startup logs
railway logs

# Common issues:
# - Wrong WSGI module path
# - Missing gunicorn in requirements.txt
# - Port binding issue (use $PORT)
```

---

## Migration from Current Server

To migrate from your current server:

1. **Backup Database**:
   ```bash
   PGPASSWORD=atlas_secure_pass_2024 pg_dump -h localhost -p 5433 -U atlas_user atlas_crm > atlas_backup.sql
   ```

2. **Import to Railway**:
   ```bash
   # Get Railway database URL
   railway variables get DATABASE_URL

   # Import dump
   psql $DATABASE_URL < atlas_backup.sql
   ```

3. **Verify Data**:
   ```bash
   railway run python manage.py check
   railway run python manage.py migrate --check
   ```

---

## Quick Command Reference

```bash
# Login
railway login

# Create project
railway init

# Add database
railway add --database postgresql

# Set variables
railway variables set KEY=VALUE

# Deploy
railway up

# View logs
railway logs

# Get URL
railway domain

# Run commands
railway run python manage.py <command>

# SSH into container
railway run bash

# Check status
railway status

# List projects
railway list
```

---

## Configuration Files Summary

### Procfile
Defines web process and release commands for migrations and static files.

### railway.json
Specifies build and deploy configuration for Railway platform.

### nixpacks.toml
Configures the build environment (Python 3.12, PostgreSQL client).

### runtime.txt
Specifies exact Python version (3.12.3).

### settings.py Updates
- Railway DATABASE_URL support via dj-database-url
- Automatic ALLOWED_HOSTS configuration for Railway domains
- Environment-based configuration

---

## Support & Documentation

- **Railway Docs**: https://docs.railway.app/
- **Railway CLI**: https://docs.railway.app/develop/cli
- **Django on Railway**: https://docs.railway.app/guides/django

---

## Next Steps After Deployment

1. ✅ Deploy to Railway
2. ✅ Configure custom domain
3. ✅ Set up monitoring/alerts
4. ✅ Configure backups
5. ✅ Set up staging environment
6. ✅ Configure CI/CD pipeline
7. ✅ Enable Redis caching (optional)
8. ✅ Set up CDN for static files (optional)

---

**Atlas CRM is ready for Railway deployment!** 🚀

All configuration files are in place. Follow the steps above to deploy.

---

*Generated: December 5, 2025*
*Status: Production-Ready*
*Platform: Railway.app*
