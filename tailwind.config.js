/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF8F0',
          100: '#FFEFD6',
          200: '#FFE1B1',
          300: '#FFD28D',
          400: '#FFC469',
          500: '#FFB144',
          600: '#FF9F5A',
          700: '#F58338',
          800: '#E56717',
          900: '#C54E10',
        },
        secondary: {
          50: '#F4F9FF',
          100: '#E9F3FF',
          200: '#D4E8FF',
          300: '#ADCEFF',
          400: '#85B4FF',
          500: '#5C9AFF',
          600: '#3380FF',
          700: '#0A66FF',
          800: '#0052D6',
          900: '#003D9E',
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          700: '#B91C1C',
        },
        mellow: {
          50: '#FEFAF5',
          100: '#FEF5EB',
          200: '#FFF0DC',
          300: '#FFEACE',
          400: '#FFE4C0',
          500: '#FFDDB0',
        },
        dark: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#222222',
          950: '#121212',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      boxShadow: {
        'soft': '0 2px 10px 0 rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};