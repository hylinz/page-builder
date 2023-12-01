import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'windows-blue-start': '#4D74E6',
        'windows-blue-middle': '#266AF2',
        'windows-blue-end': '#0036C8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'windowsBlue': '#265fde',
        'windowsGreen': '#3a9838',
      },
    },
  },
  plugins: [],
}
export default config
