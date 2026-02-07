# Daniel Oluwanifemi Oso - Portfolio Website

A modern, dynamic portfolio website built with Next.js and React featuring animated scroll effects and responsive design. Perfect for showcasing design work, services, and professional experience.

## Features

- 🎨 **Modern Design** - Clean, professional interface with beautiful typography
- ✨ **Smooth Animations** - Scroll-triggered animations and hover effects
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🎯 **Dynamic Sections**:
  - Hero section with stats
  - Portfolio/Projects showcase
  - Services listing
  - Blog articles
  - Professional footer

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone or navigate to the project directory
cd dnova-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout configuration
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles & animations
└── components/
    ├── Navigation.tsx    # Navigation bar
    ├── Hero.tsx         # Hero section
    ├── Portfolio.tsx    # Projects grid
    ├── Services.tsx     # Services section
    ├── Blog.tsx         # Blog posts
    └── Footer.tsx       # Footer
```

## Customization

### Colors & Fonts

Modify Tailwind CSS classes in components or adjust theme in `tailwind.config.ts`

### Content

Update portfolio data, services, and blog posts directly in component files

### Images

Replace placeholder image areas with actual images using Next.js Image component

### Animations

- CSS animations defined in `globals.css`
- Scroll animations use Intersection Observer API
- Extend with Framer Motion for more complex animations

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

```bash
npm run build
# Then deploy the `.next` folder
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ✅ Optimized images with Tailwind
- ✅ Code splitting with Next.js
- ✅ Efficient scroll animations
- ✅ Minimal dependencies
- ✅ TypeScript for error prevention

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Future Enhancements

- Blog detail pages
- Project case studies
- Contact form with backend
- Dark mode toggle
- More complex animations with Framer Motion
- CMS integration

## License

This project is open source and available under the MIT License.

## Author

**Daniel Oluwanifemi Oso** - Design Wizard

---

**Happy coding!** 🚀 Feel free to customize and extend this portfolio to fit your needs.
