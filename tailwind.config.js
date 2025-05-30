/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6e56cf',
        secondary: '#00ccff',
        accent: '#ff00aa',
        tertiary: '#36f9f6',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        background: '#0a0b10',
        'card-bg': 'rgba(16, 18, 27, 0.4)',
        text: '#f1f5f9',
        'secondary-text': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(110, 86, 207, 0.5), 0 0 10px rgba(110, 86, 207, 0.3)' 
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(110, 86, 207, 0.8), 0 0 20px rgba(110, 86, 207, 0.5)' 
          },
        },
      },
      boxShadow: {
        'neon': '0 0 5px rgba(110, 86, 207, 0.5), 0 0 10px rgba(110, 86, 207, 0.3)',
        'neon-hover': '0 0 10px rgba(110, 86, 207, 0.8), 0 0 20px rgba(110, 86, 207, 0.5)',
      },
    },
  },
  plugins: [],
};