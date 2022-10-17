const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      customDarkBlue: '#15272d',
      customBlue: '#40798c',
      customBlueGreen: '#70a9a1',
      customGreen: '#9ec1a3',
      customLightGreen: '#cfe0c3',
      customYellow: '#FFD460',
    },
  },
  variants: {},
  plugins: [],
};
