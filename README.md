# Mitch Design Assessment - E-Commerce Platform

A modern, responsive e-commerce application built with Next.js 16, React 19, and TypeScript. This application features a complete shopping experience with product listings, filtering, cart management, and internationalization support.

🌐 **Live Demo**: [home-of-sportswear.vercel.app](https://home-of-sportswear.vercel.app)

## 🚀 Features

### Core Functionality
- **Product Browsing**: Browse products with infinite scroll pagination
- **Product Details**: Detailed product view with images, sizes, descriptions, and reviews
- **Shopping Cart**: Persistent cart using Zustand with localStorage
- **Advanced Filtering**: Filter by brand, size, price range, and rating
- **Search & Sort**: Sort products by rating, price, and other criteria
- **Internationalization**: Support for English and French languages (next-intl)
- **Responsive Design**: Mobile-first design that works on all devices

### Landing Page
- Hero section with call-to-action buttons
- Brand showcase slider
- Modern, clean UI with smooth animations
- Footer with company information

### Product Features
- Product grid with infinite scroll
- Real-time filtering with instant updates
- Brand filter with logo icons
- Size, price, and rating filters
- Sort by rating, price, and popularity
- Product cards with hover effects
- Quick add to cart functionality

### Shopping Experience
- Persistent cart across sessions
- Add to cart with size selection
- Product quantity management
- Cart total calculation
- Toast notifications for user feedback
- Optimistic UI updates

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Lucide React** - Icon library
- **Next-intl** - Internationalization

### State Management
- **Zustand** - Lightweight state management
- **React Context** - Global state
- **LocalStorage** - Persistent cart storage

### UI/UX
- **React Hot Toast** - Toast notifications
- **Tailwind Merge** - Utility class merging
- **Custom Hooks** - Reusable logic

## 📁 Project Structure

```
mitch/
├── public/
│   ├── assets/          # Images and logos
├── src/
│   ├── app/
│   │   ├── [locale]/    # Internationalized routes
│   │   ├── products/
│   │   │   ├── [id]/    # Dynamic product detail page
│   │   │   └── page.tsx # Products listing page
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Landing page
│   ├── components/
│   │   ├── filters/     # Filter components
│   │   │   ├── FilterDrawer.tsx
│   │   │   ├── PriceFilterSection.tsx
│   │   │   ├── RatingFilterSection.tsx
│   │   │   ├── SizeFilterSection.tsx
│   │   │   └── SortBySection.tsx
│   │   ├── landing/     # Landing page components
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BrandsSlider.tsx
│   │   │   └── Footer.tsx
│   │   ├── layout/      # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── ProductGrid.tsx
│   │   ├── product-detail/  # Product detail components
│   │   │   ├── ProductImageGallery.tsx
│   │   │   ├── ProductInfo.tsx
│   │   │   ├── SizeSelector.tsx
│   │   │   ├── ReviewsSection.tsx
│   │   │   └── AddToCartButton.tsx
│   │   ├── products/    # Product components
│   │   │   ├── ProductCard.tsx
│   │   │   └── BrandFilter.tsx
│   │   └── providers/   # Context providers
│   │       └── ToastProvider.tsx
│   ├── lib/
│   │   ├── store/       # Zustand stores
│   │   │   ├── useCartStore.ts
│   │   │   ├── useFilterStore.ts
│   │   │   └── useWishlistStore.ts
│   │   ├── types/       # TypeScript types
│   │   │   ├── product.ts
│   │   │   ├── product-detail.ts
│   │   │   ├── cart.ts
│   │   │   └── filter.ts
│   │   └── utils/       # Utility functions
│   │       ├── cn.ts
│   │       └── formatPrice.ts
│   ├── messages/        # i18n translations
│   │   ├── en.json
│   │   └── fr.json
│   └── middleware.ts    # Next.js middleware
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 🏗️ Architecture

### State Management
The application uses **Zustand** for global state management with three main stores:

1. **Cart Store** (`useCartStore`)
   - Manages shopping cart items
   - Persistent storage in localStorage
   - Add, remove, update cart items
   - Calculate total price

2. **Filter Store** (`useFilterStore`)
   - Manages product filters
   - Brand, size, price, and rating filters
   - Sort options
   - Pagination state

3. **Wishlist Store** (`useWishlistStore`)
   - Manages user wishlist
   - Add/remove from wishlist

### API Integration
The application fetches data from:
- **Products API**: `https://task.woosonicpwa.com/api/products`
- **Product Detail API**: `https://task.woosonicpwa.com/api/products/{id}`

API features:
- Pagination support
- Query parameters for filtering
- Sorting capabilities
- Active products filtering

### Routing
- **App Router**: Next.js 16 App Router with file-based routing
- **Dynamic Routes**: `/products/[id]` for product details
- **Internationalization**: `/[locale]` for multilingual support

## 🎨 Design System

### Colors
- **Primary**: `#0C4B54` (Teal)
- **Primary Hover**: `#0A3D44`
- **Text Primary**: `#000000`
- **Text Secondary**: `#8899A8`
- **Border**: `#E2E2E2`
- **Background**: `#FFFFFF`

### Typography
- Font: Inter, system-ui, sans-serif
- Responsive font sizes from 12px to 36px

### Components
- Reusable component architecture
- Consistent spacing and sizing
- Mobile-first responsive design
- Smooth transitions and animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mitch
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (`.env.local`):
```bash
NEXT_PUBLIC_API_BASE_URL=https://task.woosonicpwa.com/api/products
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=https://task.woosonicpwa.com/api/products
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Internationalization

The application supports multiple languages:
- English (en)
- French (fr)

Translations are stored in `src/messages/` directory. New languages can be added by creating a new JSON file and updating the locales array in `src/i18n.ts`.

## 🎯 Key Features Implementation

### Infinite Scroll
- Intersection Observer API for efficient loading
- Automatic pagination
- Loading states and indicators
- Error handling

### Filtering System
- Real-time filter updates
- Multiple filter combination
- Reset filters functionality
- URL query parameters (optional)

### Shopping Cart
- Persistent storage
- Size-based cart items
- Quantity management
- Price calculations
- Toast notifications

### Product Detail Page
- Responsive image gallery
- Size selector
- Add to cart with validation
- Reviews and ratings display
- Product description

## 🔧 Configuration

### Next.js Config
- Image optimization with remote patterns
- Internationalization with next-intl
- Custom webpack configuration

### Tailwind Config
- Custom color palette
- Responsive breakpoints
- Custom spacing and typography
- Component-specific utilities

## 📱 Responsive Design

- **Mobile** (< 768px): Single column layout
- **Tablet** (768px - 1024px): 2-3 column grid
- **Desktop** (> 1024px): 4 column grid

Mobile-specific features:
- Bottom sheet filters
- Fixed add to cart button
- Optimized touch interactions
- Hamburger menu

## 🧪 Testing

To run linting:
```bash
npm run lint
```