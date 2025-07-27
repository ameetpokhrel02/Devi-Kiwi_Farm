# 🌱 KiwiVale Farm - Premium Organic Kiwi E-commerce Platform

A modern, responsive e-commerce website dedicated to promoting and selling premium organic kiwis and kiwi-based products from Devi Kiwi Farm in Nepal. Built with cutting-edge web technologies and designed for exceptional user experience.

![KiwiVale Farm](https://img.shields.io/badge/KiwiVale-Farm-green) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.4.1-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4.11-cyan)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Architecture](#architecture)
- [Design System](#design-system)
- [E-commerce Features](#e-commerce-features)
- [Performance](#performance)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

KiwiVale Farm is a comprehensive e-commerce platform that showcases the story of Devi and Tila Pokhrel's sustainable kiwi farming business in Tehrathum, Nepal. The website combines modern web development practices with traditional farming values to create an engaging online shopping experience.

### 🎯 Key Highlights

- **38+ Years** of organic farming experience
- **8 Product Categories** including fresh kiwis, jams, juices, and more
- **Bilingual Support** (English & Nepali)
- **Mobile-First** responsive design
- **Sustainable Practices** focus
- **Real Payment Integration** (eSewa, Khalti, IME Pay)

## ✨ Features

### 🛍️ E-commerce Capabilities
- **Product Catalog** with 8 kiwi product categories
- **Shopping Cart** with persistent localStorage
- **Product Details** with image galleries and color selection
- **Search Functionality** with real-time results
- **Payment Integration** for Nepali payment methods
- **Order Management** with success/failure flows

### 🎨 User Experience
- **Animated Statistics** with count-up animations
- **Smooth Scrolling** navigation
- **Interactive Elements** with hover effects
- **Loading States** and error handling
- **Accessibility** features (ARIA labels, keyboard navigation)
- **Progressive Web App** ready

### 📱 Responsive Design
- **Mobile-First** approach
- **Touch-Friendly** interface
- **Adaptive Layouts** for all screen sizes
- **Optimized Performance** across devices

### 🌍 Internationalization
- **English & Nepali** language support
- **Cultural Adaptation** for local market
- **Extensible i18n** system for future languages

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript 5.5.3** - Type-safe development
- **Vite 5.4.1** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library
- **Custom Design System** - Brand-specific colors and components

### State Management & Routing
- **React Context API** - Global state management
- **React Router DOM 6.26.2** - Client-side routing
- **React Hook Form** - Form handling with validation

### Development Tools
- **ESLint 9.9.0** - Code linting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Internationalization
- **react-i18next** - Multi-language support
- **i18next** - Translation framework

## 📁 Project Structure

```
kiwi-farm-bloom-landing-main/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, videos, and media files
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Hero.tsx      # Landing hero section
│   │   ├── About.tsx     # Farm story section
│   │   ├── Products.tsx  # Product showcase
│   │   ├── Cart*.tsx     # Shopping cart components
│   │   └── ...
│   ├── pages/            # Route-level components
│   │   ├── Index.tsx     # Homepage
│   │   ├── Products.tsx  # Product listing
│   │   ├── Blog.tsx      # Blog content
│   │   └── ...
│   ├── data/             # Static data and configurations
│   │   └── products.ts   # Product catalog
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── locales/          # Translation files
│   │   ├── en/          # English translations
│   │   └── ne/          # Nepali translations
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher (or **bun** for faster installs)

### Installation

1. **Clone the repository**
   ```bash
git clone <YOUR_GIT_URL>
   cd kiwi-farm-bloom-landing-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with bun (faster)
   bun install
   ```

3. **Start development server**
   ```bash
npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🏗️ Architecture

### Component Architecture

The application follows a **component-based architecture** with clear separation of concerns:

- **Page Components** (`src/pages/`) - Route-level components
- **Feature Components** (`src/components/`) - Reusable UI components
- **UI Components** (`src/components/ui/`) - Base shadcn/ui components
- **Layout Components** - Navigation, footer, and layout wrappers

### State Management

```typescript
// Cart Context for global state management
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}
```

### Routing Structure

```typescript
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/products" element={<ProductsPage />} />
  <Route path="/products/:id" element={<ProductDetails />} />
  <Route path="/blog" element={<BlogPage />} />
  <Route path="/our-kiwis" element={<OurKiwis />} />
  <Route path="/payment-success" element={<PaymentSuccess />} />
  <Route path="/payment-failure" element={<PaymentFailure />} />
</Routes>
```

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--kiwi-green: hsl(142 55% 35%);      /* Main brand color */
--kiwi-light: hsl(85 65% 45%);       /* Accent color */
--earth-brown: hsl(25 35% 25%);       /* Text and borders */
--warm-cream: hsl(46 50% 95%);        /* Background */
--fresh-lime: hsl(85 70% 60%);        /* Highlights */
```

### Typography

- **Font Family:** Tailwind's default system font stack
- **Font Sizes:** Responsive scale from `text-xs` to `text-7xl`
- **Line Heights:** Optimized for readability
- **Font Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing & Layout

- **Container:** Max-width with responsive padding
- **Grid System:** CSS Grid and Flexbox for layouts
- **Spacing Scale:** Tailwind's 4px base unit system
- **Breakpoints:** Mobile-first responsive design

### Animations

```css
/* Custom Animation Classes */
.animate-fade-in     /* Fade in from bottom */
.animate-slide-up    /* Slide up from bottom */
.animate-scale-in    /* Scale in from center */
.animate-float       /* Floating animation */
.hover-lift          /* Lift on hover */
.hover-scale         /* Scale on hover */
```

## 🛒 E-commerce Features

### Product Management

**8 Product Categories:**
1. **Fresh Kiwi** - Organic farm-fresh kiwis
2. **Kiwi Jam** - Homemade sweet and tangy jam
3. **Dried Kiwi Slices** - Healthy snack option
4. **Kiwi Juice** - Refreshing vitamin-packed juice
5. **Kiwi Pickle** - Traditional tangy pickle
6. **Kiwi Cream** - Smooth dessert cream
7. **Kiwi Fruit Crush** - Versatile fruit crush
8. **Kiwi Cutting** - Pre-cut convenience

### Shopping Cart

- **Persistent Storage** using localStorage
- **Quantity Management** with add/remove controls
- **Real-time Updates** without page refresh
- **Cart Drawer** slide-in interface
- **Total Calculation** with automatic updates

### Payment Integration

**Nepali Payment Methods:**
- **eSewa** - Digital wallet
- **Khalti** - Mobile payment
- **IME Pay** - International money exchange
- **Sanima Bank** - Direct bank transfer
- **Global IME Bank** - Banking services

### User Experience

- **Product Search** with real-time filtering
- **Image Galleries** with thumbnail navigation
- **Color Selection** for product variants
- **Responsive Product Cards** with hover effects
- **Quick Add to Cart** functionality

## ⚡ Performance

### Optimization Strategies

- **Code Splitting** - Route-based lazy loading
- **Image Optimization** - WebP format and responsive images
- **Bundle Analysis** - Tree shaking and dead code elimination
- **Caching** - Browser and service worker caching
- **Minification** - CSS and JavaScript compression

### Performance Metrics

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms

### Mobile Optimization

- **Touch-Friendly** interface with large touch targets
- **Optimized Images** for mobile bandwidth
- **Progressive Loading** for better perceived performance
- **Offline Support** with service worker (future enhancement)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Options

**Static Hosting Providers:**
- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with Git integration
- **GitHub Pages** - Free hosting for open source
- **AWS S3 + CloudFront** - Scalable cloud hosting

### Environment Variables

Create a `.env` file for environment-specific configurations:

```env
VITE_API_URL=your_api_url
VITE_PAYMENT_GATEWAY=your_payment_gateway
VITE_ANALYTICS_ID=your_analytics_id
```

### Custom Domain

Most hosting providers support custom domain configuration. Refer to your chosen provider's documentation for setup instructions.

## 🤝 Contributing

We welcome contributions to improve KiwiVale Farm! Please follow these guidelines:

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- **TypeScript** - All new code must be typed
- **ESLint** - Follow linting rules
- **Prettier** - Consistent code formatting
- **Testing** - Add tests for new features
- **Documentation** - Update docs for API changes

### Commit Convention

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Devi and Tila Pokhrel** - For their inspiring farming story
- **shadcn/ui** - For the excellent component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite** - For the fast build tool
- **React Team** - For the amazing framework

## 📞 Contact

**KiwiVale Farm**
- **Location:** Tehrathum, Solma, Nepal
- **Phone:** +977 9847226996
- **Email:** devikiwi@gmail.com
- **Website:** [devi-kiwi-farm.com](https://devi-kiwi-farm.com)

---

**Built with ❤️ for sustainable farming and community development**

*Last updated: December 2024* 