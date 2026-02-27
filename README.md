## Adil Portfolio

A modern, responsive **full-stack developer portfolio** for **Mohd Adil**, built with React and SCSS.  
It showcases experience, skills, and selected projects, and is deployed to GitHub Pages.

### Live Demo

- **Portfolio URL**: `http://mohdadil12345.github.io`

---

## Features

- **Modern hero section** with name, role, stats, and social links
- **About section** describing background and experience
- **Skills section** with categorized skills and animated progress bars
- **Projects section** highlighting featured and other projects with tech stack and links
- **Contact section** with email, phone, location, and contact form UI
- **Dark / light theme toggle** powered by a custom `ThemeContext`
- **Responsive design** for desktop, tablet, and mobile

---

## Tech Stack

- **Frontend**: React, JavaScript, React Router
- **Styling**: SCSS (`Global.scss`), CSS animations
- **Icons**: `react-icons`
- **State / Context**: React Context for theme
- **Build Tooling**: Create React App (`react-scripts`)
- **Deployment**: GitHub Pages (via `gh-pages`)

---

## Project Structure (key files)

- `src/App.jsx` – Wraps the app with `ThemeProvider`, renders `Navbar` and routed sections
- `src/components/Navbar.jsx` – Top navigation with hash-based section links and theme toggle
- `src/components/Home.jsx` – Hero/landing section
- `src/components/About.jsx` – About me section
- `src/components/Skills.jsx` – Skills & technologies cards
- `src/components/Projects.jsx` – Featured and other projects
- `src/components/Contact.jsx` – Contact info and form UI
- `src/components/Github.jsx` – GitHub activity (calendar)
- `src/components/ThemeToggle.jsx` – Dark/light mode toggle
- `src/contexts/ThemeContext.js` – Theme context and provider

---

## Getting Started (Local Development)

1. **Clone the repository:**

```bash
git clone https://github.com/mohdadil12345/mohdadil12345.github.io.git
cd mohdadil12345.github.io
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm start
```

- Open `http://localhost:3000` in your browser.
- The app will reload automatically when you edit files.

---

## Build for Production

To create an optimized production build in the `build` folder:

```bash
npm run build
```

This bundles the app in production mode and optimizes the output for performance.

---

## Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

- `homepage` in `package.json` is set to `http://mohdadil12345.github.io`
- Scripts in `package.json`:
  - **`predeploy`**: `npm run build`
  - **`deploy`**: `gh-pages -d build`

### One-command deploy

From the project root:

```bash
npm run deploy
```

This will:

- Build the app (`npm run build`)
- Publish the `build` folder to the `gh-pages` branch
- Make the site available at `http://mohdadil123.github.io`

---

## Scripts Summary

- **`npm start`** – Run locally in development mode
- **`npm test`** – Run tests
- **`npm run build`** – Create a production build
- **`npm run deploy`** – Build and deploy to GitHub Pages

---

## License

This portfolio project is for personal use and demonstration.  
You are welcome to reference the structure and ideas, but please **do not copy content (text, images, branding) as-is** without permission.
