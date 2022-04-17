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
        "custom-color-white-100": '#F7F8FD',
        "custom-color-white-200": "#F2F4FF",
        "custom-color-purple": '#AD1FEA',
        "custom-color-blue-100": '#4661E6',
        "custom-color-blue-200" : "#647196",
        "custom-color-blue-300" :"#3A4374",
        'custom-color-blue-400': '#373F68',
        "custom-color-red-100": "#F49F85",
        "custom-color-red-200": "#D73737",
        "custom-color-cyan": "#62BCFA",
      }
    },
  },
  plugins: [],
}


