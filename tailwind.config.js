/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#F4F3EF',
        'canvas-dark': '#111111',
        'canvas-subtle': '#EAE9E4',
        ink: '#111111',
        'ink-muted': '#555555',
        'ink-sub': '#777777',
        rule: '#B8B8B3',
        'rule-light': '#DCDBCF',
        cobalt: '#2457FF',
        'cobalt-deep': '#1E40AF',
        'cobalt-glow': '#4D78FF',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
}
