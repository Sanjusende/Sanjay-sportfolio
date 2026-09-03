/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Poppins"', '"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Poppins"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        handwriting: ['"Caveat"', 'cursive'],
      },

      colors: {
        dark: {
          bg: '#0d0f17',
          surface: '#121624',
          card: '#181e30',
          cardHover: '#1f273d',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#f8fafc',
          subtext: '#94a3b8',
        },
        warm: {
          bg: '#faf8f5',
          cream: '#fcfaf6',
          card: '#ffffff',
          border: 'rgba(0, 0, 0, 0.08)',
        },
        sunny: {
          yellow: '#fbb034',
          amber: '#f59e0b',
          gold: '#fbbf24',
          light: '#fef3c7',
        },
        royal: {
          blue: '#2563eb',
          navy: '#0e1726',
          slate: '#1e293b',
          sky: '#e8f3fe',
        }
      },
      boxShadow: {
        'warm-sm': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'warm-md': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'warm-lg': '0 20px 40px rgba(0, 0, 0, 0.08)',
        'sunny-glow': '0 10px 25px -5px rgba(251, 176, 52, 0.4)',
        'amber-glow': '0 10px 30px -5px rgba(245, 158, 11, 0.35)',
        'blue-glow': '0 10px 25px -5px rgba(37, 99, 235, 0.35)',
      },
      borderRadius: {
        'blob': '40% 60% 70% 30% / 40% 50% 60% 50%',
        'blob-2': '60% 40% 30% 70% / 60% 30% 70% 40%',
      }
    },
  },
  plugins: [],
}
