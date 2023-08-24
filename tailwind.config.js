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
    },

    borderRadius: {
      main: "6px",
      full: "128px",
      xl: "12px",
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
    },
  },
  plugins: [],
}
