# Railway - Adding Frontend Service Guide

## Atlas CRM Architecture Overview

**Current Setup:**
- **Backend**: Django (Atlas CRM) at `/root/new-python-code`
- **Frontend**: Django Templates (integrated with backend)
- **Database**: PostgreSQL

**Atlas CRM uses Django's built-in templating**, so the frontend is already included with the backend deployment. However, if you want to add a separate frontend (React, Next.js, Vue, etc.), follow this guide.

---

## Option 1: Atlas CRM (Current - Django Templates)

### No Separate Frontend Needed

Atlas CRM uses Django templates which are served by the Django backend:
- Templates located in: `/root/new-python-code/templates/`
- Static files in: `/root/new-python-code/static/`
- Collected to: `/root/new-python-code/staticfiles/`

**When you deploy the Django backend to Railway, the frontend is automatically included.**

**How it works:**
1. Django backend serves both API and HTML templates
2. Static files served via WhiteNoise
3. Single deployment = Full application

**Access:**
- Backend API: `https://atlas-crm-production.up.railway.app/api/`
- Frontend: `https://atlas-crm-production.up.railway.app/`

---

## Option 2: Add Separate Frontend Service (If Needed)

If you want to create a separate modern frontend (React, Next.js, Vue), here's how:

### Step 1: Choose Your Frontend Framework

**A. Next.js (Recommended)**
- Server-side rendering
- API routes
- Optimized performance
- Built-in routing

**B. React (Create React App)**
- Client-side rendering
- Large ecosystem
- Flexibility

**C. Vue.js**
- Progressive framework
- Easy to learn
- Great documentation

**D. Svelte**
- No virtual DOM
- Smaller bundle sizes
- Modern approach

---

### Step 2: Create New Frontend Service on Railway

#### Via Railway Dashboard:

1. **Access Project**:
   ```
   https://railway.app/project/3781876d-0f00-478c-b419-0ec4b0c7819a
   ```

2. **Create New Service**:
   - Click "+ New"
   - Select "Empty Service"
   - Name it: `atlas-crm-frontend`

3. **Connect Source**:
   - Option A: Connect to GitHub repo (if frontend is separate)
   - Option B: Deploy from local directory

#### Via CLI (After Service Created):

```bash
# Navigate to frontend directory
cd /path/to/frontend

# Link to Railway project
RAILWAY_TOKEN="cbe816b4-cd55-4d6b-9c3c-f3535da1d131" railway link -p 3781876d-0f00-478c-b419-0ec4b0c7819a

# Deploy to frontend service
RAILWAY_TOKEN="cbe816b4-cd55-4d6b-9c3c-f3535da1d131" railway up --service atlas-crm-frontend
```

---

### Step 3: Configure Frontend for Each Framework

#### A. Next.js Configuration

**1. Create `railway.json`:**
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

**2. Update `package.json`:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p $PORT"
  }
}
```

**3. Create `next.config.js`:**
```javascript
module.exports = {
  // API backend URL
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
  // Use standalone output for Railway
  output: 'standalone',
}
```

**4. Environment Variables:**
```bash
NEXT_PUBLIC_API_URL=https://atlas-crm-backend-production.up.railway.app
```

---

#### B. React (Vite) Configuration

**1. Create `railway.json`:**
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "startCommand": "npx serve -s dist -l $PORT",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

**2. Update `package.json`:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port $PORT"
  },
  "dependencies": {
    "serve": "^14.2.0"
  }
}
```

**3. Create `.env.production`:**
```bash
VITE_API_URL=https://atlas-crm-backend-production.up.railway.app
```

**4. Use in code:**
```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

---

#### C. Vue.js Configuration

**1. Create `railway.json`:**
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "startCommand": "npx serve -s dist -l $PORT",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

**2. Update `package.json`:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview --port $PORT"
  },
  "dependencies": {
    "serve": "^14.2.0"
  }
}
```

**3. Environment Variables:**
```bash
VITE_API_URL=https://atlas-crm-backend-production.up.railway.app
```

---

### Step 4: Connect Frontend to Backend

#### Update Django Backend for CORS:

**1. Install django-cors-headers** (already in requirements.txt):
```python
# requirements.txt
django-cors-headers>=4.3.1
```

**2. Update `settings.py`:**
```python
INSTALLED_APPS = [
    # ...
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Add at top
    'django.middleware.security.SecurityMiddleware',
    # ... rest of middleware
]

# CORS Configuration
if os.environ.get('RAILWAY_ENVIRONMENT'):
    # Production: Allow Railway frontend domain
    CORS_ALLOWED_ORIGINS = [
        'https://atlas-crm-frontend-production.up.railway.app',
    ]
else:
    # Development: Allow localhost
    CORS_ALLOWED_ORIGINS = [
        'http://localhost:3000',
        'http://localhost:5173',  # Vite default
    ]

CORS_ALLOW_CREDENTIALS = True
```

**3. Redeploy backend:**
```bash
cd /root/new-python-code
git add -A
git commit -m "Add CORS configuration for frontend"
git push

# Deploy to Railway
RAILWAY_TOKEN="cbe816b4-cd55-4d6b-9c3c-f3535da1d131" railway up --service atlas-crm
```

---

### Step 5: Set Frontend Environment Variables

**In Railway Dashboard:**

Go to frontend service → Variables tab:

```bash
# API Backend URL (reference backend service)
NEXT_PUBLIC_API_URL=${{atlas-crm.RAILWAY_PUBLIC_DOMAIN}}

# Or for Vite/Vue:
VITE_API_URL=${{atlas-crm.RAILWAY_PUBLIC_DOMAIN}}

# Or for React (CRA):
REACT_APP_API_URL=${{atlas-crm.RAILWAY_PUBLIC_DOMAIN}}
```

**Using service references** (`${{service-name.VARIABLE}}`) automatically updates when services change.

---

### Step 6: Deploy Frontend

**Via CLI:**
```bash
cd /path/to/frontend

# Deploy
RAILWAY_TOKEN="cbe816b4-cd55-4d6b-9c3c-f3535da1d131" railway up --service atlas-crm-frontend --detach

# Monitor logs
RAILWAY_TOKEN="cbe816b4-cd55-4d6b-9c3c-f3535da1d131" railway logs --service atlas-crm-frontend

# Get domain
RAILWAY_TOKEN="cbe816b4-cd55-4d6b-9c3c-f3535da1d131" railway domain --service atlas-crm-frontend
```

---

## Architecture with Separate Frontend

```
┌─────────────────────────────────────────────┐
│         Railway Project                      │
└─────────────────────────────────────────────┘
                    │
        ┌───────────┼───────────┬───────────┐
        │           │           │           │
   ┌────▼────┐ ┌───▼────┐ ┌────▼────┐ ┌────▼────┐
   │ Frontend │ │ Backend│ │Database │ │  Redis  │
   │(Next.js) │ │(Django)│ │(Postgres│ │(Optional│
   └──────────┘ └────────┘ └─────────┘ └─────────┘
        │             │           │
        │             │           │
   Port 3000     Port 8000   Port 5432
        │             │
        └─────API─────┘
```

**Communication:**
- Frontend makes HTTP requests to Backend API
- Backend responds with JSON
- Frontend renders UI

---

## Current Atlas CRM Setup (Recommended)

Since Atlas CRM uses Django templates, you **don't need a separate frontend**:

### Advantages:
✅ **Simpler deployment** - One service instead of two
✅ **No CORS issues** - Everything on same domain
✅ **Faster** - No additional network requests
✅ **SEO friendly** - Server-side rendering
✅ **Cost effective** - One service to pay for

### Current Structure:
```
atlas-crm (Django)
├── Backend API          (/api/*)
├── Frontend Templates   (/templates/*)
├── Static Files         (/static/, /staticfiles/)
└── Admin Panel          (/admin/)
```

**Everything served from:** `https://atlas-crm-production.up.railway.app`

---

## When to Add Separate Frontend

Consider a separate frontend if you need:

1. **Modern Framework Features**:
   - React hooks and state management
   - Next.js SSR and ISR
   - Vue composition API

2. **Better Performance**:
   - Code splitting
   - Lazy loading
   - Optimized bundles

3. **Better Developer Experience**:
   - Hot module replacement
   - Modern tooling (Vite, Turbopack)
   - TypeScript support

4. **Scalability**:
   - Frontend and backend scale independently
   - CDN for static assets
   - Edge deployment

---

## Quick Decision Matrix

| Requirement | Django Templates | Separate Frontend |
|-------------|------------------|-------------------|
| Simple CRUD | ✅ Better | ❌ Overkill |
| SEO | ✅ Excellent | ⚠️ Needs SSR |
| Real-time updates | ⚠️ Limited | ✅ Better |
| Mobile app needed | ❌ No | ✅ Shared API |
| Team has JS expertise | ❌ No | ✅ Yes |
| Budget-conscious | ✅ Cheaper | ❌ More expensive |
| Time to market | ✅ Faster | ❌ Slower |

---

## Recommendation for Atlas CRM

**Stick with Django templates for now because:**

1. ✅ Already built and working
2. ✅ SEO-friendly out of the box
3. ✅ Simpler to maintain
4. ✅ One service = lower cost
5. ✅ No CORS complexity
6. ✅ Faster deployment

**When to migrate:**
- Need mobile app (share API)
- Team grows (separate frontend/backend teams)
- Performance becomes critical
- Want modern JS framework benefits

---

## If You Have a Separate Frontend Repo

If you already have a Next.js/React/Vue frontend:

### Quick Steps:

1. **Create service in Railway dashboard**
2. **Add deployment files** (railway.json, etc.)
3. **Set environment variables** (API_URL)
4. **Update Django CORS settings**
5. **Deploy both services**
6. **Connect via environment variable references**

**Example for existing Next.js frontend:**

```bash
# In your frontend repo
cd /path/to/nextjs-frontend

# Add railway.json
cat > railway.json << 'EOF'
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "startCommand": "npm start"
  }
}
EOF

# Deploy
RAILWAY_TOKEN="cbe816b4-cd55-4d6b-9c3c-f3535da1d131" railway up --service atlas-crm-frontend
```

---

## Cost Comparison

### Single Service (Django Templates):
- **Cost**: ~$20-30/month
- **Services**: 1 (Django + PostgreSQL)

### Separate Frontend + Backend:
- **Cost**: ~$40-60/month
- **Services**: 2 (Frontend + Django + PostgreSQL)

**Savings with Django templates**: ~$20-30/month

---

## Summary

**For Atlas CRM:**
- ✅ **Current setup is optimal** - Django templates work great
- ✅ **No separate frontend needed** - Everything in one service
- ✅ **Lower cost** - One service to pay for
- ✅ **Simpler deployment** - One service to manage

**If you need separate frontend later:**
- Follow this guide to add Next.js/React/Vue
- Update Django for CORS
- Deploy as separate service
- Use environment variable references to connect

---

## Quick Reference

**Current Architecture:**
```
atlas-crm (Django)
└── Everything (backend + frontend + static)
    URL: https://atlas-crm-production.up.railway.app
```

**With Separate Frontend:**
```
atlas-crm-frontend (Next.js)
└── URL: https://atlas-crm-frontend-production.up.railway.app
    │
    └──API──▶ atlas-crm (Django Backend)
              └── URL: https://atlas-crm-backend-production.up.railway.app
```

---

**Generated**: December 5, 2025
**Status**: Atlas CRM uses Django templates (no separate frontend needed)
**Recommendation**: Keep current architecture unless specific needs arise

For questions, see:
- RAILWAY_DEPLOYMENT_GUIDE.md
- RAILWAY_MANUAL_FIX_REQUIRED.md
