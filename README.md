# 🚨 Tabang Negros - Emergency Response App Website

<div align="center">

![Tabang Negros Logo](public/negrosrelicon.svg)

**A modern, responsive website for the Tabang Negros emergency response Android application**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Technologies](#-technologies) • [Contributing](#-contributing)

</div>

---

## 📖 About

Tabang Negros is a comprehensive emergency response application website designed to promote safety and quick emergency reporting in Negros Occidental, Philippines. The website features a modern, interactive design with smooth parallax effects and a user-friendly interface for downloading and learning about the mobile app.

### 🎯 Purpose

- **Inform** users about the Tabang Negros emergency app
- **Guide** users through the installation process
- **Showcase** app features and capabilities
- **Provide** easy access to download the Android APK

---

## ✨ Features

### 🎨 Modern UI/UX
- **Liquid Glass Design** - Frosted glass morphism with backdrop blur effects
- **Responsive Layout** - Fully optimized for mobile, tablet, and desktop
- **Dark Mode Support** - Seamless theme switching
- **Smooth Animations** - Parallax scrolling and scroll-triggered animations

### 📱 Sections

#### 1. **Hero Section**
- Eye-catching gradient background
- Clear call-to-action buttons
- Animated elements

#### 2. **Features Showcase**
- Interactive feature cards
- Hover effects and animations
- Icon-based visual hierarchy

#### 3. **Download Section**
- Direct APK download button
- Version information
- System requirements
- Security warnings

#### 4. **Installation Guide**
- Step-by-step instructions
- Expandable detail cards
- Visual indicators
- Permission explanations

#### 5. **Technical Details**
- System requirements
- App specifications
- Permission breakdown
- Compatibility information

### 🎭 Animations & Effects

- **Parallax Scrolling** - Depth-based movement on scroll
- **Intersection Observer** - Trigger animations when elements enter viewport
- **Smooth Transitions** - CSS and React-based smooth state changes
- **Hover Interactions** - Scale, translate, and color transitions

---

## 🚀 Demo

### Desktop View
![Desktop Preview](https://via.placeholder.com/800x450/3B82F6/FFFFFF?text=Desktop+View)

### Mobile View
![Mobile Preview](https://via.placeholder.com/375x667/3B82F6/FFFFFF?text=Mobile+View)

**Live Demo:** [Coming Soon](#)

---

## 💻 Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tabangnegroswebsite.git
   cd tabangnegroswebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add the APK file**
   - Place your `TabangNegros.apk` file in the `public/` folder
   ```
   public/
   ├── TabangNegros.apk  ← Add here
   ├── negrosrelicon.svg
   └── ...
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

---

## 🏗️ Project Structure

```
tabangnegroswebsite/
├── public/                      # Static assets
│   ├── TabangNegros.apk        # Android APK file
│   └── negrosrelicon.svg       # App logo
├── src/
│   ├── components/             # React components
│   │   ├── Header.jsx          # Navigation bar with mobile menu
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Features.jsx        # Features showcase
│   │   ├── Download.jsx        # Download section
│   │   ├── Installation.jsx    # Installation guide
│   │   ├── TechnicalDetails.jsx# Technical specs
│   │   └── Footer.jsx          # Footer component
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

---

## 🛠️ Technologies

### Core
- **React 18.3** - UI library
- **Vite 5.4** - Build tool & dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework

### Features
- **Intersection Observer API** - Scroll-triggered animations
- **CSS Transforms** - Parallax effects
- **Backdrop Blur** - Glassmorphism effects
- **React Hooks** - State management (useState, useEffect, useRef)

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',   // Blue
      secondary: '#1E40AF', // Dark Blue
      // Add your colors
    }
  }
}
```

### Fonts
Import custom fonts in `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

### Content
Update text content in each component file under `src/components/`

---

## 📦 Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment.

---

## 🚀 Deployment

### Recommended Platforms

#### **Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

#### **Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### **GitHub Pages**
```bash
npm install gh-pages --save-dev
npm run build
npm run deploy
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Style
- Follow ESLint rules
- Use meaningful variable names
- Comment complex logic
- Keep components modular

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

**Tabang Negros Team**
- Emergency Response Application for Negros Occidental
- [Website](#) • [Contact](#)

---

## 🙏 Acknowledgments

- **React Community** - For the amazing framework
- **Tailwind Labs** - For the utility-first CSS framework
- **Negros Occidental Government** - For supporting emergency response initiatives
- **Contributors** - Thank you to everyone who helped shape this project

---

## 📞 Support

If you need help or have questions:

- 📧 Email: support@tabangnegros.ph
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/tabangnegroswebsite/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/tabangnegroswebsite/discussions)

---

## 🔒 Security

For security concerns, please email: security@tabangnegros.ph

**Do not** report security vulnerabilities through public GitHub issues.

---

## 📊 Project Status

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Maintenance](https://img.shields.io/badge/Maintained-Yes-success?style=for-the-badge)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ for the people of Negros Occidental

[⬆ Back to Top](#-tabang-negros---emergency-response-app-website)

</div>