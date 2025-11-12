# 🚀 Deployment Guide

This guide covers deploying the OS Interview Prep blog to Vercel with CI/CD automation.

## 📋 Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Repository pushed to GitHub

## 🔧 Quick Deploy to Vercel

### Option 1: One-Click Deploy (Easiest)

1. **Visit Vercel Dashboard**
   - Go to https://vercel.com/new
   - Sign in with GitHub

2. **Import Repository**
   - Click "Import Project"
   - Select your GitHub repository: `TheForsakenOne1/OS_Blog`
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `out` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - Your site is live! 🎉

### Option 2: CLI Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## ⚙️ CI/CD Setup (Automated Deployments)

### Step 1: Get Vercel Tokens

1. Go to Vercel Dashboard → Settings → Tokens
2. Create a new token named "GitHub Actions"
3. Copy the token (you'll need it for GitHub Secrets)

### Step 2: Get Project IDs

```bash
# Install Vercel CLI
npm install -g vercel

# Link your project
vercel link

# This creates .vercel/project.json with your IDs
cat .vercel/project.json
```

You'll see:
```json
{
  "orgId": "team_xxxxx",
  "projectId": "prj_xxxxx"
}
```

### Step 3: Configure GitHub Secrets

1. Go to GitHub Repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add the following secrets:

| Secret Name | Value | Where to Find |
|------------|-------|---------------|
| `VERCEL_TOKEN` | Your Vercel token | Vercel → Settings → Tokens |
| `VERCEL_ORG_ID` | Your org/team ID | `.vercel/project.json` → `orgId` |
| `VERCEL_PROJECT_ID` | Your project ID | `.vercel/project.json` → `projectId` |

### Step 4: Enable GitHub Actions

The workflows are already configured in `.github/workflows/`:

- **`ci.yml`** - Runs on every push/PR (build & test)
- **`deploy.yml`** - Deploys to Vercel

**What happens automatically:**

- **On every push to any branch**: Build and test
- **On pull request**: Deploy preview + comment with preview URL
- **On push to main/master**: Deploy to production

## 🔄 Deployment Workflows

### Preview Deployments (Pull Requests)

```mermaid
PR Created → CI Tests → Build → Deploy Preview → Comment URL on PR
```

- Every PR gets a unique preview URL
- Preview URL is automatically commented on the PR
- Preview is updated on every new commit

### Production Deployments (Main Branch)

```mermaid
Push to Main → CI Tests → Build → Deploy to Production → Live Site Updated
```

- Automatic deployment when code is merged to main
- Zero-downtime deployments
- Instant rollback if needed

## 📊 Build Status Badges

Add these badges to your README:

```markdown
![CI](https://github.com/TheForsakenOne1/OS_Blog/workflows/Continuous%20Integration/badge.svg)
![Deploy](https://github.com/TheForsakenOne1/OS_Blog/workflows/Deploy%20to%20Vercel/badge.svg)
```

## 🌐 Custom Domain (Optional)

### Add Custom Domain to Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `os-interview-prep.com`)
3. Configure DNS records as shown by Vercel

**DNS Configuration:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Wait for DNS propagation (5-60 minutes)
5. Vercel automatically provisions SSL certificate

## 🔍 Monitoring Deployments

### View Deployment Status

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Actions**: Repository → Actions tab
- **Deployment Logs**: Click on any deployment in Vercel

### Check Build Logs

```bash
# View latest deployment
vercel logs

# View specific deployment
vercel logs [deployment-url]
```

## 🛠️ Troubleshooting

### Build Fails

**Check Node version:**
```bash
# Vercel uses Node 18 by default
node --version  # Should be 18.x or 20.x
```

**Common fixes:**
```bash
# Clear cache and rebuild
rm -rf node_modules .next out
npm install
npm run build
```

### Environment Variables Not Working

1. Check `.env.example` for required variables
2. Add them in Vercel Dashboard → Settings → Environment Variables
3. Redeploy after adding variables

### CI/CD Pipeline Fails

**Check GitHub Secrets:**
- Ensure all three secrets are set correctly
- Token should not be expired
- IDs should match your Vercel project

**Re-run workflow:**
- Go to Actions tab
- Click failed workflow
- Click "Re-run jobs"

## 📈 Performance Optimization

### Enable Vercel Analytics (Optional)

1. Go to Vercel Dashboard → Analytics
2. Enable Web Analytics
3. Add to `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Enable Speed Insights

```bash
npm install @vercel/speed-insights
```

Add to `app/layout.tsx`:
```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

<SpeedInsights />
```

## 🔒 Security Headers

Security headers are already configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

## 📝 Deployment Checklist

Before deploying to production:

- [ ] All builds pass locally (`npm run build`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] Environment variables configured
- [ ] GitHub secrets added
- [ ] Custom domain configured (if applicable)
- [ ] Analytics enabled (optional)
- [ ] SSL certificate active
- [ ] Test all pages work
- [ ] Check mobile responsiveness

## 🎯 Next Steps

After successful deployment:

1. **Test your live site**
   - Check all pages load
   - Test navigation
   - Verify responsive design

2. **Set up monitoring**
   - Enable Vercel Analytics
   - Set up error tracking (Sentry, LogRocket)

3. **Configure redirects** (if needed)
   - Edit `vercel.json` redirects section

4. **Add sitemap** (for SEO)
   ```bash
   # Generate sitemap
   npm install next-sitemap
   ```

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Actions Docs**: https://docs.github.com/en/actions

---

**Happy Deploying! 🚀**
