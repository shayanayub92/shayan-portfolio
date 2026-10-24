# Muhammad Shayan - Portfolio Website

A modern, highly animated personal portfolio website built with React, Vite, and Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## Features

- **Dark Aesthetic** - Premium dark theme with gradient accents (purple/pink/blue)
- **Smooth Animations** - GSAP + Framer Motion + ScrollTrigger for advanced animations
- **Smooth Scrolling** - Lenis for butter-smooth scroll experience
- **Custom Cursor** - Animated custom cursor with hover effects
- **Glassmorphism** - Modern glass-like UI elements
- **Fully Responsive** - Optimized for mobile and desktop
- **Loading Animation** - Premium loading screen before content appears
- **Scroll Progress** - Top progress indicator while scrolling

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - React animation library
- **GSAP + ScrollTrigger** - Advanced animations and scroll effects
- **Lenis** - Smooth scrolling
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── LoadingScreen.jsx
│   ├── CustomCursor.jsx
│   └── Navbar.jsx
├── sections/         # Page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/            # Custom React hooks
│   └── useSmoothScroll.js
├── context/          # React context
│   └── LoadingContext.jsx
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository or download the project

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Edit the following files to customize with your information:

- `src/sections/Hero.jsx` - Name, title, and stats
- `src/sections/About.jsx` - Bio and personal details
- `src/sections/Skills.jsx` - Technical skills and proficiency
- `src/sections/Projects.jsx` - Project showcases
- `src/sections/Contact.jsx` - Contact information and social links
- `src/sections/Footer.jsx` - Footer links and branding

### Styling

- Colors: Edit `tailwind.config.js` to change the color scheme
- Animations: Modify animation durations and easings in component files
- Fonts: Update the Google Fonts link in `index.html`

### Images

Replace placeholder images in the Projects section with your own:
- Update the `image` property in the `projects` array in `src/sections/Projects.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- `will-change` properties for GPU acceleration
- Lazy loading for sections
- Optimized animations with `transform` and `opacity`
- Debounced scroll events

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspired by premium Dribbble portfolios
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)

---

**Built with ❤️ by Muhammad Shayan**
