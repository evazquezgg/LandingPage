/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Syne', 'Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'body': ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // Tokyo Night Theme
        'tokyo': {
          // Backgrounds
          bg: '#0a0a0f',
          'bg-dark': '#06060a',
          'bg-light': '#0f0f1a',
          // Accents - Cyan/Blue
          cyan: '#7dcfff',
          'cyan-glow': '#7aa2f7',
          blue: '#7aa2f7',
          'blue-dark': '#565f89',
          // Accents - Purple/Pink
          purple: '#bb9af7',
          'purple-dark': '#9d7cd8',
          magenta: '#ff007c',
          // Accents - Warm
          orange: '#ff9e64',
          yellow: '#e0af68',
          green: '#9ece6a',
          red: '#f7768e',
          // Text
          'text': '#c0caf5',
          'text-dark': '#565f89',
          'text-light': '#a9b1d6',
          // Legacy mappings for compatibility
          'accent-primary': '#7aa2f7',
          'accent-secondary': '#bb9af7',
          'accent-glow': '#7dcfff',
        },
        // Keep dark colors for compatibility
        'dark': {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#16161e',
          600: '#1a1b26',
          500: '#24283b',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'blob': 'blob 7s infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'nebula': 'nebula 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        nebula: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1) rotate(180deg)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
