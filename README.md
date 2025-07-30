# Monytix - Financial Clarity, Simplified

A modern, responsive React website showcasing Monytix's comprehensive financial solutions. This project replicates the design from the Gamma.app presentation with beautiful animations and interactive elements.

## ✨ Features

- **Modern Design**: Dark theme with golden accents matching the original design
- **Smooth Animations**: Powered by Framer Motion for elegant scroll-triggered animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, animated charts, and dynamic components
- **Performance Optimized**: Efficient React components with intersection observers

## 🎯 Sections

1. **Hero Section**: Introduction to Comprehensive Financial Solutions
2. **Budgeting Section**: Personalized budgeting features
3. **Wellbeing Section**: Financial well-being with Monytix
4. **Process Section**: 5-step pyramid showing the Monytix process
5. **Dashboard Section**: Interactive financial dashboard mockup
6. **Command Centre**: Personal finance management with credit card mockup
7. **Plans Section**: B2B and B2C offerings with city skyline background

## 🛠 Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Framer Motion**: Advanced animations and transitions
- **React Intersection Observer**: Scroll-triggered animations
- **CSS3**: Custom styling with gradients, animations, and responsive design
- **Google Fonts**: Playfair Display (serif) and Inter (sans-serif)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1.Clone the repository

```bash
git clone https://github.com/your-username/monytix-website.git
cd monytix-website
```

2.Install dependencies

```bash
npm install
```

3.Start the development server

```bash
npm start
```

4.Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Build for Production

```bash
npm run build
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: 1200px+ (Full layout with side-by-side content)
- **Tablet**: 768px - 1199px (Stacked layout with adjusted spacing)
- **Mobile**: <768px (Single column layout with optimized touch targets)

## 🎨 Design Elements

### Color Palette

- **Primary Gold**: #d4af37
- **Background Dark**: #1a1a1a
- **Secondary Dark**: #2a2a2a
- **Text Light**: #ffffff
- **Text Muted**: #b8b8b8

### Typography

- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Inter (clean sans-serif)
- **Special Elements**: Courier New (monospace for card numbers)

### Animations

- **Scroll Animations**: Fade in, slide up, and slide in effects
- **Hover Effects**: Smooth transitions and transforms
- **Loading Animations**: Staggered animations for list items
- **3D Effects**: CSS transforms for depth and perspective

## 📊 Interactive Components

### Financial Dashboard

- Real-time balance display
- Interactive pie charts
- Animated bar charts
- Spending categorization

### Process Pyramid

- 5-level animated pyramid
- Hover effects with golden highlights
- Step-by-step process visualization

### Credit Card Mockup

- Realistic card design with chip and details
- 3D perspective effects
- Branded with Monytix logo

### City Skyline

- Animated buildings with glowing effects
- Walking silhouettes
- Sunset gradient background

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Add corresponding CSS file
3. Import and use in `src/App.js`

### Modifying Animations

- Edit `framer-motion` configurations in component files
- Adjust timing, delays, and easing in transition objects
- Customize `useInView` thresholds for scroll triggers

### Updating Content

- Modify text content directly in component JSX
- Update images by replacing files in `public/` directory
- Adjust color scheme in CSS custom properties

## 📈 Performance

- **Lazy Loading**: Animations trigger only when sections are in view
- **Optimized Images**: Proper sizing and compression
- **Code Splitting**: React's built-in code splitting
- **CSS Optimization**: Efficient selectors and minimal repaints

## 🌟 Key Highlights

- **Pixel-Perfect Design**: Matches the original Gamma.app presentation
- **Smooth User Experience**: Fluid animations and interactions
- **Professional Presentation**: Corporate-grade design and functionality
- **Mobile-First Approach**: Responsive design that works on all devices
- **Accessibility**: Proper semantic HTML and keyboard navigation

## 📝 License

This project is created for demonstration purposes. Please ensure proper licensing for any commercial use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices
5. Submit a pull request

---

**Built with ❤️ using React and modern web technologies**