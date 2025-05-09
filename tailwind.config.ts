import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#34d399', // vert émeraude
          light: '#6ee7b7',
          dark: '#059669',
        },
        secondary: {
          DEFAULT: '#bbf7d0', // vert très clair
        },
        accent: {
          DEFAULT: '#fef9c3', // jaune pastel pour l'accent
        },
      },
    },
  },
  plugins: [],
}
export default config 