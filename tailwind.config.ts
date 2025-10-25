/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color
        primary: '#0C4B54',
        'primary-hover': '#0A3D44',
        // Text colors
        'text-primary': '#000000',
        'text-secondary': '#8899A8',
        'text-muted': '#B0BEC5',
        // Border colors
        border: '#E2E2E2',
        'border-light': '#F5F5F5',
        'border-dark': '#D0D0D0',
        // Background colors
        background: '#FFFFFF',
        'background-secondary': '#F9F9F9',
        'background-tertiary': '#FAFAFA',
        // UI state colors
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
      },
      spacing: {
        '18': '4.5rem',      // 72px
        '88': '22rem',       // 352px
        '128': '32rem',      // 512px
      },
      borderRadius: {
        'sm': '0.25rem',     // 4px
        'DEFAULT': '0.5rem', // 8px
        'md': '0.625rem',    // 10px
        'lg': '0.75rem',     // 12px
        'xl': '1rem',        // 16px
        '2xl': '1.5rem',     // 24px
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'modal': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'button': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
      maxWidth: {
        'container': '1280px',
        'content': '1024px',
      },
      zIndex: {
        'modal': '1000',
        'dropdown': '900',
        'header': '800',
        'overlay': '700',
      },
    },
  },
  plugins: [],
};
