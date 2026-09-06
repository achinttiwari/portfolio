# Deployment Guide – Vercel + EmailJS

This guide walks you through deploying your portfolio to Vercel and setting up EmailJS for the contact form.

## Prerequisites

- GitHub account
- Vercel account (free)
- EmailJS account (free)
- Project pushed to GitHub

---

## Step 1: Set Up EmailJS

### 1.1 Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email

### 1.2 Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Follow the setup instructions to connect your email
5. Save your **Service ID** (you'll need this)

### 1.3 Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up the template with these variables:

```
Subject: New Message from {{from_name}}

Message from {{from_email}}:

{{message}}
```

4. Save and note your **Template ID**

### 1.4 Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

Now you have:
- ✅ Service ID
- ✅ Template ID
- ✅ Public Key

---

## Step 2: Deploy to Vercel

### 2.1 Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2.2 Connect to Vercel

1. Go to [Vercel.com](https://vercel.com/)
2. Sign in with GitHub
3. Click **New Project**
4. Select your portfolio repository
5. Click **Import**

### 2.3 Configure Environment Variables

1. In the **Environment Variables** section, add:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID = your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = your_public_key
NEXT_PUBLIC_EMAILJS_TO_EMAIL = achinttiwari.dev@gmail.com
```

2. Click **Deploy**

### 2.4 Wait for Deployment

Vercel will build and deploy your site. You'll see a progress bar and get a live URL when done.

---

## Step 3: Verify Everything Works

1. Visit your Vercel URL
2. Test the contact form by submitting a message
3. Check your email for the submission
4. Verify all sections load correctly

---

## Step 4: Set Custom Domain (Optional)

1. In Vercel project settings, go to **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS to propagate (up to 48 hours)

---

## Troubleshooting

### Contact Form Not Working

**Problem:** "EmailJS is not configured" message  
**Solution:** Verify all environment variables are set in Vercel project settings

**Problem:** Form submits but no email received  
**Solution:**
1. Check EmailJS Service ID and Template ID are correct
2. Verify email service is connected in EmailJS dashboard
3. Check spam folder
4. Test template in EmailJS dashboard first

### Build Fails

**Problem:** "Module not found" errors  
**Solution:**
1. Run `npm install` locally and commit `package-lock.json`
2. Clear Vercel cache and redeploy

### Site Shows Build Errors

**Problem:** "500 Internal Server Error"  
**Solution:**
1. Check Vercel deployment logs for errors
2. Verify Next.js version is compatible
3. Redeploy from Vercel dashboard

---

## Future Updates

To update your portfolio after deployment:

```bash
# Make changes locally
# Commit and push to GitHub
git add .
git commit -m "Update portfolio content"
git push origin main

# Vercel automatically redeploys! No manual action needed.
```

---

## Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

---

**You're all set! 🎉 Your portfolio is now live.**
