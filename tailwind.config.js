/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#030308',
        abyss: '#0a0a12',
        surface: '#12121c',
        glass: 'rgba(255, 255, 255, 0.04)',
        neon: {
          cyan: '#00f0ff',
          violet: '#8b5cf6',
          magenta: '#d946ef',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 240, 255, 0.15)',
        'glow-violet': '0 0 40px rgba(139, 92, 246, 0.2)',
        'glow-lg': '0 0 80px rgba(0, 240, 255, 0.25)',
        card: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient':
          'radial-gradient(at 40% 20%, rgba(0, 240, 255, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(217, 70, 239, 0.06) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
