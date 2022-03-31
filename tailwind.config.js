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
        '4': '1 1 15%',
        "5" : "70"

      },
      colors: {
        "light-white": '#F7F8FD',
        "light-white-100": "#F2F4FF",
        "f-purple": '#AD1FEA',
        "f-light-blue": '#4661E6',
        "f-dark-blue" : "#647196",
        "f-dark-blue-200" :"#3A4374",
        'f-dark-blue-300': '#373F68',
        "f-light-red": "#F49F85",
        "f-dark-red": "#D73737",
        "custom-color-10": "#62BCFA",
        "custom-color-11": "#F49F85"
      }
    },
  },
  plugins: [],
}


