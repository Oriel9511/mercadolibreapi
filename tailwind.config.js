/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'proxima': ['Proxima Nova', 'Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      colors: {
        // Colores oficiales de MercadoLibre
        'ml': {
          'yellow': '#FFF159',
          'blue': '#3483FA',
          'blue-dark': '#2968C8',
          'blue-light': '#E1F0FF',
          'gray': {
            50: '#F7F7F7',
            100: '#EEEEEE',
            200: '#E6E6E6',
            300: '#CCCCCC',
            400: '#999999',
            500: '#666666',
            600: '#4A4A4A',
            700: '#333333',
            800: '#1A1A1A',
            900: '#000000',
          },
          'green': '#00A650',
          'green-light': '#E8F5E8',
          'red': '#F23D4F',
          'red-light': '#FFE9EB',
          'orange': '#F7931E',
          'orange-light': '#FFF4E6',
        }
      },
      boxShadow: {
        'ml-soft': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'ml-medium': '0 4px 8px 0 rgba(0, 0, 0, 0.12)',
        'ml-strong': '0 8px 16px 0 rgba(0, 0, 0, 0.15)',
        'ml-card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'ml': '6px',
        'ml-lg': '8px',
        'ml-xl': '12px',
      },
    },
  },
  plugins: [],
}
