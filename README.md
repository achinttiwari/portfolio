# Achint Tiwari - Portfolio Website

A clean, minimal portfolio website built with **Next.js**, **Tailwind CSS**, and **EmailJS** to showcase AI/ML projects and connect with visitors.

## Features

✅ **Clean & Minimal Design** – Light mode, no animations, content-focused  
✅ **Fully Responsive** – Optimized for mobile, tablet, and desktop  
✅ **Professional Layout** – Home, About, Projects, Contact sections  
✅ **Working Contact Form** – Email submissions via EmailJS  
✅ **Social Integration** – All social links in one place  
✅ **Fast Performance** – Next.js + Vercel optimizations  

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Forms:** EmailJS
- **Deployment:** Vercel
- **Node Version:** 18+

## Getting Started

### 1. Clone or Setup Locally

```bash
# Navigate to project directory
cd achint-portfolio

# Install dependencies
npm install
```

### 2. Configure EmailJS

To enable the contact form:

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create a free account and set up an email service
3. Create an email template with the following variables:
   - `to_email` – Recipient email
   - `from_name` – Visitor's name
   - `from_email` – Visitor's email
   - `message` – Message content

4. Copy your credentials:
   - Service ID
   - Template ID
   - Public Key

5. Create `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_TO_EMAIL=achinttiwari.dev@gmail.com
```

### 3. Add Your Headshot

Replace the placeholder image in the About section:

1. Open `src/components/About.js`
2. Replace the image placeholder with your actual image
3. You can use Next.js Image component or regular img tag

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Connect via GitHub (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Add environment variables (`.env.local` values)
6. Deploy!

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add environment variables when prompted
```

## Project Structure

```
achint-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── Navigation.js      # Navbar
│   │   ├── Hero.js            # Hero section
│   │   ├── About.js           # About section
│   │   ├── Projects.js        # Projects grid
│   │   ├── Contact.js         # Contact form
│   │   └── Footer.js          # Footer
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Customization

### Update Personal Info

- **Name/Bio:** Edit `src/components/Hero.js` and `src/components/About.js`
- **Social Links:** Update URLs in `src/components/About.js` and `src/components/Footer.js`
- **Projects:** Modify project data in `src/components/Projects.js`
- **Contact Email:** Update `.env.local` with your email

### Styling

- **Colors:** Modify `tailwind.config.js`
- **Fonts:** Update `src/app/globals.css`
- **Spacing:** Adjust Tailwind classes in components

## Performance Optimizations

- ✅ Next.js Image Optimization
- ✅ CSS Minification (Tailwind)
- ✅ Code Splitting
- ✅ Static Generation (SSG)
- ✅ Vercel Edge Network

## Troubleshooting

### Contact Form Not Sending

1. Check `.env.local` variables are set correctly
2. Verify EmailJS Service ID, Template ID, and Public Key
3. Test EmailJS credentials in EmailJS dashboard
4. Check browser console for errors

### Images Not Loading

1. Verify image paths are correct
2. Check Next.js Image configuration in `next.config.js`
3. Add image domain to allowed list if using external URLs

### Styling Issues

1. Rebuild Tailwind CSS: `npm run build`
2. Clear `.next` folder and rebuild
3. Check Tailwind `content` paths in `tailwind.config.js`

## Future Enhancements

- [ ] Add blog/articles section
- [ ] Implement dark mode toggle
- [ ] Add animation transitions (optional)
- [ ] SEO optimization (meta tags, structured data)
- [ ] Analytics integration (Google Analytics)
- [ ] Newsletter signup
- [ ] Project case studies

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Achint Tiwari**

Connect: [GitHub](https://github.com/achinttiwari) | [LinkedIn](https://www.linkedin.com/in/achinttiwari/) | [Dev.to](https://dev.to/achinttiwari)
