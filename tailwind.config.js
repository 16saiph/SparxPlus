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
        // Dark theme (default)
        dark: {
          bg: '#0a0e27',
          surface: '#1a1f3a',
          surfaceAlt: '#252d47',
          border: '#3a4257',
          text: '#e4e6eb',
          textMuted: '#a0a9c3',
          primary: '#8b5cf6',
          accent: '#06b6d4',
        },
        // Light theme
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          surfaceAlt: '#f1f5f9',
          border: '#e2e8f0',
          text: '#1e293b',
          textMuted: '#64748b',
          primary: '#8b5cf6',
          accent: '#06b6d4',
        },
        // Cherry theme (light pink)
        cherry: {
          bg: '#fdf5f8',
          surface: '#fff9fb',
          surfaceAlt: '#ffe4f5',
          border: '#ffb3d9',
          text: '#6b1b47',
          textMuted: '#c41e78',
          primary: '#e91e8c',
          accent: '#ff69b4',
        },
        // Forest theme (green)
        forest: {
          bg: '#0b2e1f',
          surface: '#1a4d35',
          surfaceAlt: '#2d6a52',
          border: '#4a8a6f',
          text: '#d4f0e8',
          textMuted: '#a0d5c7',
          primary: '#10b981',
          accent: '#34d399',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
          '50%': { opacity: '.8', boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
