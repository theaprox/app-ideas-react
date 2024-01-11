import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "info": "#22d3ee",
        "success": "#15803d",
        "warning": "#fb7185",
        "error": "#dc2626",
        "white": "#fafaff",
        "fade-white-100": "#eaeaef",
        "fade-white-200": "#cacacf",
        "fade-white-300": "#bababf",
        "fade-white-400": "#aaaaaf",
        "fade-white-500": "#9a9a9f",
        "black": "#000005",
        "fade-black": "#101015",
        "fade-black-100": "#202025",
        "fade-black-200": "#303035",
        "fade-black-300": "#404045",
        "fade-black-400": "#505055",
        "fade-black-500": "#606065",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
