module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontFamily: {
      'jost': 'Jost, sans-serif'
    },




    extend: {
      flex: {
        '2': "1 1 30%",
        '3': "1 1 100%",
        '4':'1 1 15%'

      },
      colors: {
      "light-white": '#F7F8FD'
      }
    },
  },
  plugins: [],
}


