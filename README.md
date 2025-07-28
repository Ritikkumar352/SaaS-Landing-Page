# ADmyBRAND AI Suite – AI-Powered Marketing & Branding Platform

A modern, production-ready SaaS landing page for "ADmyBRAND AI Suite" - an AI-powered marketing and branding platform. Built with Next.js 13, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features
- Next.js 13 (pages directory, stable features)
- TypeScript, Tailwind CSS, PostCSS, Autoprefixer
- Framer Motion v7 for smooth animations
- Reusable component system (Button, Card, Modal, Accordion, FeatureCard, PricingCard, TestimonialItem, ContactForm, SocialIcons, HeroSection)
- Mobile-first, glassmorphism, bold typography, soft shadows
- SEO meta tags, favicon, optimized images
- Contact form with client-side validation
- Dockerfile & docker-compose for containerization
- Vercel-ready (`vercel.json`)

## 🚀 Getting Started

### 1. Install dependencies
```sh
npm install
```

### 2. Run locally (development)
```sh
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```sh
npm run build
npm start
```

### 4. Run with Docker
```sh
docker-compose up --build
```
Visit [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel
- Push to GitHub
- Connect your repo to [Vercel](https://vercel.com/import)
- Vercel will auto-detect the config and deploy

## 📁 Project Structure
- `pages/` – Next.js pages (routing)
- `components/` – Reusable UI components
- `styles/` – Tailwind/global styles
- `public/` – Static assets (images, favicon)

## 🧩 Customization
- Update content, images, and branding in `components/` and `public/`
- Add new sections or features as needed

## 🛠️ Tech Stack
- Next.js 13 (pages router)
- TypeScript
- Tailwind CSS
- Framer Motion v7
- React Hook Form
- React Icons, Heroicons

## 📦 Containerization
- **Dockerfile**: Multi-stage, production-ready
- **docker-compose.yml**: For local development/testing

## 📝 License
MIT # SaaS-Landing-Page
