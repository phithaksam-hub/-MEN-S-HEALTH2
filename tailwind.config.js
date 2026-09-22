/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#0A0B0D',
          900: '#111318',
          800: '#171A20',
          700: '#1E222A',
          600: '#262B34',
        },
        line: '#262B34',
        accent: {
          DEFAULT: '#2F6FED',
          light: '#5B8DF6',
          cyan: '#22D3EE',
        },
        status: {
          green: '#34D399',
          blue: '#60A5FA',
          amber: '#F5A524',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.6)',
        glow: '0 0 40px -10px rgba(47,111,237,0.45)',
      },
    },
  },
  plugins: [],
}
