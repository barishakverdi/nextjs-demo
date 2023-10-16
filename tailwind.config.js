/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: "#88B94E",
      secondary: "#62853E",
      helper: "#7BA44C",
      secondaryHelper: "#54713B",
      black: {
        300: "#171717",
        400: "#000000",
      },
      gray: {
        300: "#989BA3",
        400: "#5C5E62",
      },
      light: {
        200: "#FAFBFA",
        300: "#F4F6F1",
        400: "#E6E9E4",
      },
      white: "#FFFFFF",
      error: "#CE1515",
      backgroundColor: "#F9F9FB",
      darkBackgroundColor: "#131314",
      transparent: "transparent",
    },

    borderRadius: {
      main: "6px",
      full: "128px",
      xl: "12px",
      none: "0px",
    },

    screens: {
      xxl: {'max': '1600px'},
      xl: {'max': '1240px'},
      lg: {'max': '992px'},
      md: {'max': '768px'},
      sm: {'max': '576px'},
      xs: {'max': '415px'},
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      animation: {
        'linear-line': 'linear-line 10s ease-in-out 1s 9999 alternate forwards;',
        'linear-line-reverse': 'linear-line 10s ease-in-out 1s 9999 alternate-reverse forwards;',
        'h1': 'h1 1s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.8s 1 reverse both;',
        'img': 'img 1s cubic-bezier(0.5, 1, 0.89, 1) 0.5s 1 normal backwards;',
      },

      keyframes: {
        'linear-line': {
          '0%': { top: '0' },
          '100%': { top: '100%' },
        },

        'linear-line-reverse': {
          '0%': { bottom: '0' },
          '100%': { bottom: '100%' },
        },

        'h1': {
          '0%': { opacity: '1', transform: 'rotateX(0deg)', transformOrigin: 'top'},
          '100%': { opacity: '0', transform: 'rotateX(70deg)', transformOrigin: 'top'},
        },

        'img': {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@headlessui/tailwindcss'),
  ],
}
