# Jal Bagadiya - Cyber Security Portfolio

A premium, interactive 3D portfolio website showcasing cybersecurity expertise and projects. Built with modern web technologies for a futuristic, professional experience.

## Features

- **3D Interactive Elements**: Rotating cyber globe, floating particles, and animated grid using Three.js
- **Smooth Animations**: Framer Motion for scroll-triggered and hover animations
- **Custom Cursor**: Interactive cursor with hover effects
- **Glassmorphism UI**: Modern glass-effect cards and components
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Dark/Light Theme Toggle**: Switch between themes seamlessly
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal loading speeds

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Three.js & React Three Fiber** - 3D graphics and animations
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Modern icon library

## Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   ├── CyberGlobe.tsx      # 3D rotating globe
│   │   ├── FloatingParticles.tsx # Particle system
│   │   └── CyberGrid.tsx        # Animated grid
│   ├── sections/
│   │   ├── Hero.tsx             # Hero section with 3D background
│   │   ├── About.tsx            # About section with timeline
│   │   ├── Skills.tsx           # Skills with progress bars
│   │   ├── Experience.tsx       # Work experience
│   │   ├── Projects.tsx         # Project showcase
│   │   └── Contact.tsx          # Contact form
│   ├── CustomCursor.tsx         # Custom cursor component
│   └── Navigation.tsx           # Navigation bar
├── App.tsx                      # Main app component
├── main.tsx                     # Entry point
└── index.css                    # Global styles
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Deploy using Vercel CLI:
```bash
vercel
```

Or deploy via Vercel Dashboard:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will automatically detect Vite and configure build settings
6. Click "Deploy"

### Deploy to Netlify

#### Using Netlify CLI:

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

#### Using Netlify Dashboard:

1. Build your project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to deploy

Or connect your Git repository:
1. Push code to GitHub
2. Go to Netlify Dashboard
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- **Hero Section**: `src/components/sections/Hero.tsx`
- **About Section**: `src/components/sections/About.tsx`
- **Skills**: `src/components/sections/Skills.tsx`
- **Experience**: `src/components/sections/Experience.tsx`
- **Projects**: `src/components/sections/Projects.tsx`
- **Contact Info**: `src/components/sections/Contact.tsx`

### Change Color Scheme

The primary color scheme uses cyan/blue gradients. To change:

1. Update gradient classes in components (e.g., `from-cyan-400 to-blue-500`)
2. Modify the scrollbar colors in `src/index.css`
3. Update glow effects and borders throughout components

### Add More Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

## Performance Optimization

The site is already optimized with:
- Code splitting via dynamic imports (can be enhanced further)
- Lazy loading of 3D components
- Optimized images and assets
- Minified production build
- Efficient React rendering with hooks

For further optimization:
- Implement lazy loading for sections below the fold
- Add service worker for offline functionality
- Optimize 3D model complexity if needed

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: jalbagadiya26@gmail.com
- **LinkedIn**: [linkedin.com/in/jalbagadiya](https://linkedin.com/in/jalbagadiya)
- **GitHub**: [github.com/jalbagadiya](https://github.com/jalbagadiya)

---

Built with React, Three.js, and Framer Motion
