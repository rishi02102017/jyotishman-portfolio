# Jyotishman Das – Personal Portfolio Website

This is the official portfolio website for **Jyotishman Das**, built using modern frontend technologies and responsive design principles. The site serves as an interactive resume and professional showcase of work in Generative AI, Machine Learning, MLOps, and full-stack development.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How to Run Locally](#how-to-run-locally)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

This portfolio is a dynamic, responsive, and visually engaging web application that highlights Jyotishman's background, skills, professional experiences, and projects. It has been crafted with careful attention to typography, spacing, accessibility, and mobile-first principles.

It includes support for theme switching (Dark, Light, Custom) and is optimized for performance with lazy-loading assets and responsive image handling.

---

## Live Demo

Visit the site here:  
**https://jyotishman.me**

---

## Features

- Clean and modern UI with Tailwind CSS and Framer Motion
- Fully responsive design (works on mobile, tablet, desktop)
- Interactive navigation with smooth scrolling
- Resume download option
- Dynamic theme toggling (Dark, Light, Custom)
- Display of key internships, projects, and technical domains
- Custom hover animations and layered effects
- SEO-optimized with alt texts, metadata, and semantic HTML
- Uses local assets for quick load times
- Component-based modular structure (easy to maintain)

---

## Tech Stack

| Technology     | Purpose                                  |
|----------------|-------------------------------------------|
| React          | Frontend component library                |
| TypeScript     | Type-safe JavaScript                      |
| Tailwind CSS   | Utility-first CSS framework               |
| Next.js        | React framework (optional if added)       |
| Framer Motion  | Animations and transitions                |
| HTML/CSS       | Base styling and structure                |
| Vite/CRA       | Project scaffolding and bundling          |

---

## Project Structure

```
.
├── public/                 # Public static files (images, favicon, resume.pdf)
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, Cards)
│   ├── sections/           # Page sections (Hero, About, Projects, Experience)
│   ├── styles/             # Tailwind and custom styles
│   ├── assets/             # Static media: logos, profile pic, icons
│   └── App.tsx             # Main application component
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
└── tailwind.config.js      # Tailwind configuration
```

---

## How to Run Locally

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/rishi02102017/jyotishman-portfolio.git
cd jyotishman-portfolio
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Run development server:**

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

---

## Deployment

You can deploy this site easily on:

- **GitHub Pages**
- **Vercel**
- **Netlify**

For GitHub Pages:

1. Build the project:
```bash
npm run build
```

2. Install gh-pages:
```bash
npm install --save gh-pages
```

3. Add this to your `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Run:
```bash
npm run deploy
```

---

## License

This project is open-sourced under the MIT License.

---

## Credits

Built and maintained by Jyotishman Das. For collaborations or opportunities, please reach out via the contact section of the portfolio.
